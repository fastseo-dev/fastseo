import { NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';

const PAGES_DIR = path.join(process.cwd(), 'content/pages');

function parseDate(raw: unknown): string {
  if (!raw) return new Date().toISOString().split('T')[0];
  if (raw instanceof Date) {
    return isNaN(raw.getTime())
      ? new Date().toISOString().split('T')[0]
      : raw.toISOString().split('T')[0];
  }
  const str = String(raw).trim();
  if (/^\d{4}-\d{2}-\d{2}/.test(str)) return str.slice(0, 10);
  const d = new Date(str);
  return isNaN(d.getTime()) ? new Date().toISOString().split('T')[0] : d.toISOString().split('T')[0];
}

export async function POST() {
  try {
    const { data: existing } = await supabaseServer.from('pages').select('slug');
    const existingSlugs = new Set((existing ?? []).map((p: { slug: string }) => p.slug));

    if (!fs.existsSync(PAGES_DIR)) {
      return NextResponse.json({ error: 'content/pages directory not found' }, { status: 404 });
    }

    const allFiles = fs.readdirSync(PAGES_DIR).filter((f) => f.endsWith('.mdx'));

    const imported: string[] = [];
    const skipped: string[] = [];
    const failed: { slug: string; error: string }[] = [];

    for (const filename of allFiles) {
      try {
        const raw = fs.readFileSync(path.join(PAGES_DIR, filename), 'utf8');
        const { data, content } = matter(raw);
        const slug: string = data.slug ?? filename.replace(/\.mdx$/, '');

        if (existingSlugs.has(slug)) {
          skipped.push(`[exists] ${slug}`);
          continue;
        }

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

        const date = parseDate(data.date);

        const { data: inserted, error } = await supabaseServer
          .from('pages')
          .insert([{
            title:      data.title ?? slug,
            slug,
            content:    contentHtml,
            date,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          }])
          .select('id')
          .single();

        if (error) {
          failed.push({ slug, error: error.message });
          continue;
        }

        await supabaseServer.from('pages').update({
          excerpt,
          author:             data.author ?? 'FastSEO',
          featured_image_url: data.featured_image ?? data.image ?? '',
          page_type:          'page',
          status:             data.status === 'publish' ? 'published' : 'draft',
          schema_type:        'WebPage',
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
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
