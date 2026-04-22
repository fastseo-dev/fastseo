import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase';

export async function GET(req: NextRequest) {
  try {
    const { data, error } = await supabaseServer
      .from('pricing')
      .select('*')
      .limit(1)
      .single();

    if (error && error.code === 'PGRST116') {
      const { data: newData } = await supabaseServer
        .from('pricing')
        .insert([{ plans: {} }])
        .select()
        .single();
      return NextResponse.json(newData);
    }

    if (error) throw error;
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();

    const { data, error } = await supabaseServer
      .from('pricing')
      .update({ ...body, updated_at: new Date().toISOString() })
      .limit(1)
      .select()
      .single();

    if (error) throw error;
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update' }, { status: 500 });
  }
}
