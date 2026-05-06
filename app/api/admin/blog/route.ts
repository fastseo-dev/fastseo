import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase';

export async function GET(req: NextRequest) {
  try {
    const { data, error } = await supabaseServer
      .from('blog_posts')
      .select('id, title, slug, author, date, status')
      .order('date', { ascending: false });

    if (error) throw error;
    return NextResponse.json(data || []);
  } catch (error) {
    console.error('Blog fetch error:', error);
    return NextResponse.json([], { status: 500 });
  }
}

const CORE_FIELDS = (body: Record<string, unknown>) => ({
  title:              body.title              ?? '',
  slug:               body.slug               ?? '',
  excerpt:            body.excerpt             ?? '',
  content:            body.content             ?? '',
  author:             body.author              ?? 'FastSEO',
  date:               body.date               ?? new Date().toISOString().split('T')[0],
  categories:         body.categories          ?? [],
  featured_image_url: body.featured_image_url  ?? '',
  status:             body.status              ?? 'draft',
});

const SEO_FIELDS = (body: Record<string, unknown>) => ({
  focus_keyword:    body.focus_keyword    ?? '',
  seo_title:        body.seo_title        ?? '',
  meta_description: body.meta_description ?? '',
  canonical_url:    body.canonical_url    ?? '',
  robots:           body.robots           ?? 'index/follow',
  og_title:         body.og_title         ?? '',
  og_description:   body.og_description   ?? '',
  og_image:         body.og_image         ?? '',
  schema_type:      body.schema_type      ?? 'BlogPosting',
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.title || !body.slug || !body.content) {
      return NextResponse.json(
        { error: 'Missing required fields: title, slug, content' },
        { status: 400 }
      );
    }

    // Step 1: insert core fields (always safe)
    const { data, error } = await supabaseServer
      .from('blog_posts')
      .insert([{
        ...CORE_FIELDS(body),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }])
      .select()
      .single();

    if (error) {
      console.error('Supabase insert error:', JSON.stringify(error));
      return NextResponse.json(
        { error: error.message, details: error.details, hint: error.hint, code: error.code },
        { status: 500 }
      );
    }

    // Step 2: update with SEO fields (graceful — only works once columns exist)
    await supabaseServer
      .from('blog_posts')
      .update({ ...SEO_FIELDS(body), updated_at: new Date().toISOString() })
      .eq('id', data.id)
      .then(({ error: seoError }) => {
        if (seoError) console.warn('SEO fields not saved (run schema migration):', seoError.message);
      });

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error('Blog create error:', error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
