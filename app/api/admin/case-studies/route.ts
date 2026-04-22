import { NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase';

export async function GET() {
  try {
    const { data, error } = await supabaseServer
      .from('case_studies')
      .select('id, title, niche, result')
      .order('created_at', { ascending: false });

    if (error) throw error;

    return NextResponse.json(data || []);
  } catch (error) {
    console.error('Case studies fetch error:', error);
    return NextResponse.json([], { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { data, error } = await supabaseServer
      .from('case_studies')
      .insert([body])
      .select();

    if (error) throw error;

    return NextResponse.json(data?.[0], { status: 201 });
  } catch (error) {
    console.error('Case studies create error:', error);
    return NextResponse.json({ error: 'Failed to create' }, { status: 500 });
  }
}
