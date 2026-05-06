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

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.title || !body.slug || !body.content) {
      return NextResponse.json({ error: 'Missing required fields: title, slug, content' }, { status: 400 });
    }

    const { id: _discard, ...fields } = body;

    const { data, error } = await supabaseServer
      .from('blog_posts')
      .insert([{
        ...fields,
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
