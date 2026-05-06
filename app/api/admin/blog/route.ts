import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase';

export async function GET(req: NextRequest) {
  try {
    const { data, error } = await supabaseServer
      .from('blog_posts')
      .select('*')
      .order('date', { ascending: false });

    if (error) {
      console.error('Blog fetch error:', JSON.stringify(error));
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(data || []);
  } catch (error) {
    console.error('Blog fetch error:', error);
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
    categories:         body.categories          ?? [],
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
    schema_type:        body.schema_type         ?? 'BlogPosting',
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

    const { data, error } = await supabaseServer
      .from('blog_posts')
      .insert([{
        ...pickFields(body),
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

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error('Blog create error:', error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
