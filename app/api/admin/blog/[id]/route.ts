import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { data, error } = await supabaseServer
      .from('blog_posts')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    if (!data) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(data);
  } catch (error) {
    console.error('Blog get error:', error);
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
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

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();

    // Step 1: update core fields (always safe)
    const { data, error } = await supabaseServer
      .from('blog_posts')
      .update({
        ...CORE_FIELDS(body),
        updated_at: new Date().toISOString(),
      })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Supabase update error:', JSON.stringify(error));
      return NextResponse.json(
        { error: error.message, details: error.details, hint: error.hint, code: error.code },
        { status: 500 }
      );
    }

    // Step 2: update SEO fields (graceful — only works once columns exist)
    await supabaseServer
      .from('blog_posts')
      .update({ ...SEO_FIELDS(body), updated_at: new Date().toISOString() })
      .eq('id', id)
      .then(({ error: seoError }) => {
        if (seoError) console.warn('SEO fields not saved (run schema migration):', seoError.message);
      });

    return NextResponse.json(data);
  } catch (error) {
    console.error('Blog update error:', error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { error } = await supabaseServer
      .from('blog_posts')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Blog delete error:', error);
    return NextResponse.json({ error: 'Failed to delete' }, { status: 500 });
  }
}
