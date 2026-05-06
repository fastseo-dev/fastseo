import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/blog";
import { supabaseServer } from "@/lib/supabase";

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ slug: string }>;
}

interface SupabasePost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  categories: string[];
  featured_image_url: string;
  status: string;
  seo_title: string;
  meta_description: string;
  focus_keyword: string;
  canonical_url: string;
  robots: string;
  og_title: string;
  og_description: string;
  og_image: string;
  schema_type: string;
}

async function getSupabasePost(slug: string): Promise<SupabasePost | null> {
  const { data, error } = await supabaseServer
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single();

  if (error || !data) return null;
  return data as SupabasePost;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getSupabasePost(slug);
  if (!post) return {};

  const title = post.seo_title || post.title;
  const description = post.meta_description || post.excerpt || undefined;
  const canonical = post.canonical_url || `https://www.fastseosolutions.com/blog/${slug}/`;

  const [robotsIndex, robotsFollow] = (post.robots || 'index/follow').split('/');

  return {
    title,
    description,
    alternates: { canonical },
    robots: {
      index: robotsIndex !== 'noindex',
      follow: robotsFollow !== 'nofollow',
    },
    openGraph: {
      title: post.og_title || title,
      description: post.og_description || description,
      images: post.og_image ? [post.og_image] : undefined,
      type: 'article',
      url: canonical,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.og_title || title,
      description: post.og_description || description,
      images: post.og_image ? [post.og_image] : undefined,
    },
  };
}

function buildSchema(post: SupabasePost) {
  if (!post.schema_type || post.schema_type === 'None') return null;

  const base = {
    '@context': 'https://schema.org',
    '@type': post.schema_type,
    headline: post.title,
    description: post.meta_description || post.excerpt || undefined,
    author: { '@type': 'Person', name: post.author },
    datePublished: post.date,
    url: post.canonical_url || `https://www.fastseosolutions.com/blog/${post.slug}/`,
    image: post.og_image || post.featured_image_url || undefined,
  };

  return base;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getSupabasePost(slug);
  if (!post) notFound();

  const schema = buildSchema(post);
  const categories: string[] = Array.isArray(post.categories) ? post.categories : [];

  return (
    <div className="min-h-screen bg-void pt-[70px]">
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}

      <article className="max-w-[780px] mx-auto px-6 py-16">

        {/* Back link */}
        <Link
          href="/blog/"
          className="inline-flex items-center gap-1.5 font-body text-[13px] text-text-muted hover:text-text-primary transition-colors mb-10"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Blog
        </Link>

        {/* Categories */}
        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((cat) => (
              <span
                key={cat}
                className="font-body text-[11px] font-semibold tracking-wide uppercase text-lime/70 bg-lime/8 border border-lime/15 rounded-full px-2.5 py-1"
              >
                {cat}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className="font-display font-black text-[40px] lg:text-[48px] leading-[1.1] tracking-[-1px] text-text-primary mb-5">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 pb-8 mb-8 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-surface border border-border flex items-center justify-center">
              <span className="font-display font-bold text-[10px] text-lime">
                {post.author.charAt(0).toUpperCase()}
              </span>
            </div>
            <span className="font-body text-[13px] text-text-muted capitalize">
              {post.author}
            </span>
          </div>
          <span className="text-border-strong">·</span>
          <span className="font-body text-[13px] text-text-muted">
            {formatDate(post.date)}
          </span>
        </div>

        {/* Post content */}
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Footer CTA */}
        <div className="mt-16 pt-10 border-t border-border">
          <p className="font-body text-[14px] text-text-muted mb-4">
            Need specialist SEO for your niche?
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-1.5 bg-lime text-void font-display font-bold text-[14px] px-6 py-3.5 rounded-lg hover:bg-[#F0FF6B] hover:shadow-[0_0_20px_rgba(232,255,71,0.3)] transition-all"
          >
            Get a Free Audit
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M2.5 10.5l8-8M10.5 2.5H4.5M10.5 2.5v6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </article>
    </div>
  );
}
