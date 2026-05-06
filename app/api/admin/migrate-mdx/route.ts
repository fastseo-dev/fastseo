import { NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';

const POSTS_DIR = path.join(process.cwd(), 'content/blog');

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

    const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.mdx'));

    const imported: string[] = [];
    const skipped: string[] = [];
    const failed: { slug: string; error: string }[] = [];

    for (const filename of files) {
      const raw = fs.readFileSync(path.join(POSTS_DIR, filename), 'utf8');
      const { data, content } = matter(raw);
      const slug: string = data.slug ?? filename.replace(/\.mdx$/, '');

      // Skip junk/excluded posts
      if (EXCLUDED.has(slug)) {
        skipped.push(slug);
        continue;
      }

      // Skip if already in Supabase
      if (existingSlugs.has(slug)) {
        skipped.push(slug);
        continue;
      }

      // Convert markdown to HTML
      const processed = await remark()
        .use(remarkGfm)
        .use(remarkHtml, { sanitize: false })
        .process(content);
      const contentHtml = processed.toString();

      // Build a plain-text excerpt from first substantial paragraph
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
      const date = data.date
        ? String(data.date).slice(0, 10)
        : new Date().toISOString().split('T')[0];

      const { error } = await supabaseServer.from('blog_posts').insert([{
        title:              data.title ?? slug,
        slug,
        excerpt,
        content:            contentHtml,
        author:             data.author ?? 'FastSEO',
        date,
        categories,
        featured_image_url: data.featured_image ?? data.image ?? '',
        status:             'published',
        focus_keyword:      '',
        seo_title:          '',
        meta_description:   '',
        canonical_url:      '',
        robots:             'index/follow',
        og_title:           '',
        og_description:     '',
        og_image:           '',
        schema_type:        'BlogPosting',
        created_at:         new Date().toISOString(),
        updated_at:         new Date().toISOString(),
      }]);

      if (error) {
        console.error(`Failed to import ${slug}:`, error.message);
        failed.push({ slug, error: error.message });
      } else {
        imported.push(slug);
        existingSlugs.add(slug); // prevent re-import within same run
      }
    }

    return NextResponse.json({
      imported: imported.length,
      skipped: skipped.length,
      failed: failed.length,
      importedSlugs: imported,
      failedDetails: failed,
    });
  } catch (error) {
    console.error('Migration error:', error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
