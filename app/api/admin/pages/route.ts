import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase';

export async function GET() {
  try {
    const { data, error } = await supabaseServer
      .from('pages')
      .select('*')
      .order('updated_at', { ascending: false });

    if (error) {
      console.error('Pages fetch error:', JSON.stringify(error));
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(data || []);
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

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.title || !body.slug || !body.content) {
      return NextResponse.json(
        { error: 'Missing required fields: title, slug, content' },
        { status: 400 }
      );
    }

    const { data: inserted, error: insertError } = await supabaseServer
      .from('pages')
      .insert([{
        title:      body.title,
        slug:       body.slug,
        content:    body.content,
        date:       body.date ?? new Date().toISOString().split('T')[0],
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }])
      .select('id')
      .single();

    if (insertError) {
      return NextResponse.json(
        { error: insertError.message, details: insertError.details, hint: insertError.hint },
        { status: 500 }
      );
    }

    await supabaseServer.from('pages').update({
      ...pickFields(body),
      updated_at: new Date().toISOString(),
    }).eq('id', inserted.id);

    const { data } = await supabaseServer.from('pages').select('*').eq('id', inserted.id).single();
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
