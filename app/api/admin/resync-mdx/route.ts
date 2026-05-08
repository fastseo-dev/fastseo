import { NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';

const POSTS_DIR = path.join(process.cwd(), 'content/blog');

function parseDate(raw: unknown): string {
  if (!raw) return new Date().toISOString().split('T')[0];
  if (raw instanceof Date) {
    if (!isNaN(raw.getTime())) return raw.toISOString().split('T')[0];
    return new Date().toISOString().split('T')[0];
  }
  const str = String(raw).trim();
  if (/^\d{4}-\d{2}-\d{2}/.test(str)) return str.slice(0, 10);
  const d = new Date(str);
  if (!isNaN(d.getTime())) return d.toISOString().split('T')[0];
  return new Date().toISOString().split('T')[0];
}

// POST body: { slugs?: string[] } — if omitted, resyncs all MDX files
export async function POST(request: Request) {
  try {
    let targetSlugs: string[] | null = null;
    try {
      const body = await request.json();
      if (Array.isArray(body?.slugs) && body.slugs.length > 0) {
        targetSlugs = body.slugs;
      }
    } catch {
      // no body — resync all
    }

    const allFiles = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.mdx'));

    const updated: string[] = [];
    const inserted: string[] = [];
    const failed: { slug: string; error: string }[] = [];

    for (const filename of allFiles) {
      try {
        const raw = fs.readFileSync(path.join(POSTS_DIR, filename), 'utf8');
        const { data, content } = matter(raw);
        const slug: string = data.slug ?? filename.replace(/\.mdx$/, '');

        if (targetSlugs && !targetSlugs.includes(slug)) continue;

        const processed = await remark()
          .use(remarkGfm)
          .use(remarkHtml, { sanitize: false })
          .process(content);
        const contentHtml = processed.toString();

        const excerpt =
          (data.excerpt as string | undefined) ||
          (content
            .replace(/^---[\s\S]*?---/, '')
            .replace(/#{1,6}\s.*/g, '')
            .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
            .replace(/[*_`]/g, '')
            .split('\n')
            .map((l) => l.trim())
            .find((l) => l.length > 60)
            ?.slice(0, 200) ?? '');

        const categories = Array.isArray(data.categories) ? data.categories : [];
        const date = parseDate(data.date);
        const now = new Date().toISOString();

        // Check if exists (PGRST116 = "no rows" — not a real error)
        const { data: existing, error: lookupError } = await supabaseServer
          .from('blog_posts')
          .select('id')
          .eq('slug', slug)
          .single();
        if (lookupError && lookupError.code !== 'PGRST116') {
          failed.push({ slug, error: `lookup: ${lookupError.message}` });
          continue;
        }

        if (existing) {
          // Update existing entry with fresh MDX content
          const { error } = await supabaseServer
            .from('blog_posts')
            .update({
              title:              data.title ?? slug,
              content:            contentHtml,
              excerpt,
              author:             data.author ?? 'FastSEO',
              categories,
              date,
              featured_image_url: data.featured_image ?? data.image ?? undefined,
              updated_at:         now,
            })
            .eq('id', existing.id);

          if (error) {
            failed.push({ slug, error: error.message });
          } else {
            updated.push(slug);
          }
        } else {
          // Insert new
          const { data: ins, error: insertError } = await supabaseServer
            .from('blog_posts')
            .insert([{ title: data.title ?? slug, slug, content: contentHtml, date, created_at: now, updated_at: now }])
            .select('id')
            .single();

          if (insertError || !ins) {
            failed.push({ slug, error: insertError?.message ?? 'insert failed' });
            continue;
          }

          await supabaseServer.from('blog_posts').update({
            excerpt,
            author:             data.author ?? 'FastSEO',
            categories,
            featured_image_url: data.featured_image ?? data.image ?? '',
            status:             'published',
            schema_type:        'BlogPosting',
            robots:             'index/follow',
            updated_at:         now,
          }).eq('id', ins.id);

          inserted.push(slug);
        }
      } catch (fileError) {
        failed.push({ slug: filename, error: String(fileError) });
      }
    }

    return NextResponse.json({
      success: true,
      updated: updated.length,
      inserted: inserted.length,
      failed: failed.length,
      updatedSlugs: updated,
      insertedSlugs: inserted,
      failedDetails: failed,
    });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
