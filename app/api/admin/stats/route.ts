import { NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase';

export async function GET() {
  try {
    const [blogRes, caseRes, contactRes] = await Promise.all([
      supabaseServer.from('blog_posts').select('id', { count: 'exact', head: true }),
      supabaseServer.from('case_studies').select('id', { count: 'exact', head: true }),
      supabaseServer.from('contact_submissions').select('id', { count: 'exact', head: true }),
    ]);

    return NextResponse.json({
      blogPosts: blogRes.count || 0,
      caseStudies: caseRes.count || 0,
      contacts: contactRes.count || 0,
    });
  } catch (error) {
    console.error('Stats error:', error);
    return NextResponse.json(
      { blogPosts: 0, caseStudies: 0, contacts: 0 },
      { status: 500 }
    );
  }
}
