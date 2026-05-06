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
  // gray-matter may return a JS Date object for YAML dates
  if (raw instanceof Date) {
    if (!isNaN(raw.getTime())) return raw.toISOString().split('T')[0];
    return new Date().toISOString().split('T')[0];
  }
  const str = String(raw).trim();
  // Already YYYY-MM-DD
  if (/^\d{4}-\d{2}-\d{2}/.test(str)) return str.slice(0, 10);
  // Try JS Date parser — handles most human-readable formats
  const d = new Date(str);
  if (!isNaN(d.getTime())) return d.toISOString().split('T')[0];
  // Unparseable — fall back to today
  return new Date().toISOString().split('T')[0];
}

const EXCLUDED = new Set([
  'elementor-6775',
  'bulk-sms-service-providers-in-india',
  'facebook-leads-generation',
  'how-to-register-a-uk-domain-from-india',
  'introduction-to-swing-trading',
  'seo-solutions-in-snelleville',
]);

export async function POST() {
  try {
    // Get slugs already in Supabase so we don't duplicate
    const { data: existing } = await supabaseServer
      .from('blog_posts')
      .select('slug');
    const existingSlugs = new Set((existing ?? []).map((p: { slug: string }) => p.slug));

    const allFiles = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.mdx'));

    const imported: string[] = [];
    const skipped: string[] = [];
    const failed: { slug: string; error: string }[] = [];

    for (const filename of allFiles) {
      try {
        const raw = fs.readFileSync(path.join(POSTS_DIR, filename), 'utf8');
        const { data, content } = matter(raw);
        const slug: string = data.slug ?? filename.replace(/\.mdx$/, '');

        if (EXCLUDED.has(slug)) { skipped.push(`[excluded] ${slug}`); continue; }
        if (existingSlugs.has(slug)) { skipped.push(`[exists] ${slug}`); continue; }

        const processed = await remark()
          .use(remarkGfm)
          .use(remarkHtml, { sanitize: false })
          .process(content);
        const contentHtml = processed.toString();

        const excerpt =
          content
            .replace(/^---[\s\S]*?---/, '')
            .replace(/#{1,6}\s.*/g, '')
            .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
            .replace(/[*_`]/g, '')
            .split('\n')
            .map((l) => l.trim())
            .find((l) => l.length > 60)
            ?.slice(0, 200) ?? '';

        const categories = Array.isArray(data.categories) ? data.categories : [];
        const date = parseDate(data.date);

        // Step 1: insert core fields — title, slug, content, date are safe columns
        const { data: inserted, error } = await supabaseServer
          .from('blog_posts')
          .insert([{
            title:   data.title ?? slug,
            slug,
            content: contentHtml,
            date,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          }])
          .select('id')
          .single();

        if (error) {
          console.error(`Failed to import ${slug}:`, error.message);
          failed.push({ slug, error: error.message });
          continue;
        }

        // Step 2: update all optional fields (silently ignored if column missing)
        await supabaseServer.from('blog_posts').update({
          excerpt,
          author:             data.author ?? 'FastSEO',
          categories,
          featured_image_url: data.featured_image ?? data.image ?? '',
          status:             'published',
          schema_type:        'BlogPosting',
          robots:             'index/follow',
          focus_keyword:      '',
          seo_title:          '',
          meta_description:   '',
          canonical_url:      '',
          og_title:           '',
          og_description:     '',
          og_image:           '',
          updated_at:         new Date().toISOString(),
        }).eq('id', inserted.id);

        imported.push(slug);
        existingSlugs.add(slug);
      } catch (fileError) {
        failed.push({ slug: filename, error: String(fileError) });
      }
    }

    return NextResponse.json({
      totalFiles: allFiles.length,
      imported: imported.length,
      skipped: skipped.length,
      failed: failed.length,
      importedSlugs: imported,
      skippedDetails: skipped,
      failedDetails: failed,
    });
  } catch (error) {
    console.error('Migration error:', error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
