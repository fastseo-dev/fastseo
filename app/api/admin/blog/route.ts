import { NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase';

export async function GET() {
  try {
    const { data, error } = await supabaseServer
      .from('blog_posts')
      .select('id, title, slug, author, date')
      .order('date', { ascending: false });

    if (error) throw error;

    return NextResponse.json(data || []);
  } catch (error) {
    console.error('Blog fetch error:', error);
    return NextResponse.json([], { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { data, error } = await supabaseServer
      .from('blog_posts')
      .insert([body])
      .select();

    if (error) throw error;

    return NextResponse.json(data?.[0], { status: 201 });
  } catch (error) {
    console.error('Blog create error:', error);
    return NextResponse.json({ error: 'Failed to create' }, { status: 500 });
  }
}
