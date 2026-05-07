import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase';

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { data, error } = await supabaseServer
      .from('pages')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    if (!data) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}

function pickFields(body: Record<string, unknown>) {
  return {
    title:              body.title              ?? '',
    slug:               body.slug               ?? '',
    excerpt:            body.excerpt             ?? '',
    content:            body.content             ?? '',
    author:             body.author              ?? 'FastSEO',
    date:               body.date               ?? new Date().toISOString().split('T')[0],
    page_type:          body.page_type           ?? 'page',
    template:           body.template            ?? 'article',
    hero_label:         body.hero_label          ?? '',
    hero_subtitle:      body.hero_subtitle       ?? '',
    features:           Array.isArray(body.features) ? body.features : [],
    faqs:               Array.isArray(body.faqs)     ? body.faqs     : [],
    featured_image_url: body.featured_image_url  ?? '',
    status:             body.status              ?? 'draft',
    focus_keyword:      body.focus_keyword       ?? '',
    seo_title:          body.seo_title           ?? '',
    meta_description:   body.meta_description    ?? '',
    canonical_url:      body.canonical_url       ?? '',
    robots:             body.robots              ?? 'index/follow',
    og_title:           body.og_title            ?? '',
    og_description:     body.og_description      ?? '',
    og_image:           body.og_image            ?? '',
    schema_type:        body.schema_type         ?? 'WebPage',
  };
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();

    const { data, error } = await supabaseServer
      .from('pages')
      .update({
        ...pickFields(body),
        updated_at: new Date().toISOString(),
      })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        { error: error.message, details: error.details, hint: error.hint },
        { status: 500 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { error } = await supabaseServer.from('pages').delete().eq('id', id);
    if (error) throw error;
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
