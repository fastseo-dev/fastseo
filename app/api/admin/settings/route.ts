import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase';

export async function GET(req: NextRequest) {
  try {
    const { data, error } = await supabaseServer
      .from('site_settings')
      .select('*')
      .limit(1)
      .single();

    if (error && error.code === 'PGRST116') {
      // No row found, create default
      const { data: newData, error: insertError } = await supabaseServer
        .from('site_settings')
        .insert([{
          site_name: 'FastSEO',
          email: 'hello@fastseosolutions.com',
          accepting_clients: true,
        }])
        .select()
        .single();

      if (insertError) throw insertError;
      return NextResponse.json(newData);
    }

    if (error) throw error;

    return NextResponse.json(data);
  } catch (error) {
    console.error('Settings get error:', error);
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();

    const { data, error } = await supabaseServer
      .from('site_settings')
      .update({
        ...body,
        updated_at: new Date().toISOString(),
      })
      .limit(1)
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json(data);
  } catch (error) {
    console.error('Settings update error:', error);
    return NextResponse.json({ error: 'Failed to update' }, { status: 500 });
  }
}
