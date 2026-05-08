import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, formatDate } from "@/lib/blog";
import { supabaseServer } from "@/lib/supabase";

export const dynamic = "force-dynamic";

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
  canonical_url: string;
  robots: string;
  og_title: string;
  og_description: string;
  og_image: string;
  schema_type: string;
}

async function getSupabasePost(slug: string): Promise<SupabasePost | null> {
  const { data, error } = await supabaseServer
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .single();

  if (error || !data) return null;
  return data as SupabasePost;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  // Try Supabase first, fall back to MDX
  const dbPost = await getSupabasePost(slug);
  if (dbPost) {
    const title = dbPost.seo_title || dbPost.title;
    const description = dbPost.meta_description || dbPost.excerpt || undefined;
    const canonical = dbPost.canonical_url || `https://www.fastseosolutions.com/blog/${slug}/`;
    const [robotsIndex, robotsFollow] = (dbPost.robots || "index/follow").split("/");
    const ogImage =
      dbPost.og_image ||
      dbPost.featured_image_url ||
      "https://www.fastseosolutions.com/opengraph-image";
    return {
      title,
      description,
      alternates: { canonical },
      robots: { index: robotsIndex !== "noindex", follow: robotsFollow !== "nofollow" },
      openGraph: {
        title: dbPost.og_title || title,
        description: dbPost.og_description || description,
        images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
        type: "article",
        url: canonical,
      },
      twitter: {
        card: "summary_large_image",
        title: dbPost.og_title || title,
        description: dbPost.og_description || description,
        images: [ogImage],
      },
    };
  }

  // MDX fallback
  const mdxPost = await getPost(slug);
  if (!mdxPost) return {};
  return {
    title: mdxPost.title,
    description: mdxPost.excerpt || undefined,
    alternates: { canonical: `https://www.fastseosolutions.com/blog/${slug}/` },
  };
}

function buildSchema(post: SupabasePost) {
  if (!post.schema_type || post.schema_type === "None") return null;
  return {
    "@context": "https://schema.org",
    "@type": post.schema_type,
    headline: post.title,
    description: post.meta_description || post.excerpt || undefined,
    author: { "@type": "Person", name: post.author },
    datePublished: post.date,
    url: post.canonical_url || `https://www.fastseosolutions.com/blog/${post.slug}/`,
    image: post.og_image || post.featured_image_url || undefined,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  // Try Supabase first
  const dbPost = await getSupabasePost(slug);
  if (dbPost) {
    const schema = buildSchema(dbPost);
    const categories: string[] = Array.isArray(dbPost.categories) ? dbPost.categories : [];
    return (
      <div className="min-h-screen bg-void pt-[70px]">
        {schema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        )}
        <article className="max-w-[780px] mx-auto px-6 py-16">
          <Link href="/blog/" className="inline-flex items-center gap-1.5 font-body text-[13px] text-text-muted hover:text-text-primary transition-colors mb-10">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Blog
          </Link>
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {categories.map((cat) => (
                <span key={cat} className="font-body text-[11px] font-semibold tracking-wide uppercase text-lime/70 bg-lime/8 border border-lime/15 rounded-full px-2.5 py-1">
                  {cat}
                </span>
              ))}
            </div>
          )}
          <h1 className="font-display font-black text-[40px] lg:text-[48px] leading-[1.1] tracking-[-1px] text-text-primary mb-5">
            {dbPost.title}
          </h1>
          <div className="flex items-center gap-4 pb-8 mb-8 border-b border-border">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-surface border border-border flex items-center justify-center">
                <span className="font-display font-bold text-[10px] text-lime">{dbPost.author.charAt(0).toUpperCase()}</span>
              </div>
              <span className="font-body text-[13px] text-text-muted capitalize">{dbPost.author}</span>
            </div>
            <span className="text-border-strong">·</span>
            <span className="font-body text-[13px] text-text-muted">{formatDate(dbPost.date)}</span>
          </div>
          {dbPost.featured_image_url && (
            <div className="mb-10 rounded-xl overflow-hidden border border-border">
              <img
                src={dbPost.featured_image_url}
                alt={dbPost.title}
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </div>
          )}
          <div className="prose" dangerouslySetInnerHTML={{ __html: dbPost.content }} />
          <div className="mt-16 pt-10 border-t border-border">
            <p className="font-body text-[14px] text-text-muted mb-4">Need specialist SEO for your niche?</p>
            <Link href="/contact/" className="inline-flex items-center gap-1.5 bg-lime text-void font-display font-bold text-[14px] px-6 py-3.5 rounded-lg hover:bg-[#F0FF6B] hover:shadow-[0_0_20px_rgba(232,255,71,0.3)] transition-all">
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

  // Fall back to MDX
  const mdxPost = await getPost(slug);
  if (!mdxPost) notFound();

  return (
    <div className="min-h-screen bg-void pt-[70px]">
      <article className="max-w-[780px] mx-auto px-6 py-16">
        <Link href="/blog/" className="inline-flex items-center gap-1.5 font-body text-[13px] text-text-muted hover:text-text-primary transition-colors mb-10">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Blog
        </Link>
        {mdxPost.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {mdxPost.categories.map((cat) => (
              <span key={cat} className="font-body text-[11px] font-semibold tracking-wide uppercase text-lime/70 bg-lime/8 border border-lime/15 rounded-full px-2.5 py-1">
                {cat}
              </span>
            ))}
          </div>
        )}
        <h1 className="font-display font-black text-[40px] lg:text-[48px] leading-[1.1] tracking-[-1px] text-text-primary mb-5">
          {mdxPost.title}
        </h1>
        <div className="flex items-center gap-4 pb-8 mb-8 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-surface border border-border flex items-center justify-center">
              <span className="font-display font-bold text-[10px] text-lime">{mdxPost.author.charAt(0).toUpperCase()}</span>
            </div>
            <span className="font-body text-[13px] text-text-muted capitalize">{mdxPost.author}</span>
          </div>
          <span className="text-border-strong">·</span>
          <span className="font-body text-[13px] text-text-muted">{formatDate(mdxPost.date)}</span>
        </div>
        {mdxPost.featuredImage && (
          <div className="mb-10 rounded-xl overflow-hidden border border-border">
            <img
              src={mdxPost.featuredImage}
              alt={mdxPost.title}
              className="w-full h-auto object-cover"
              loading="eager"
            />
          </div>
        )}
        <div className="prose" dangerouslySetInnerHTML={{ __html: mdxPost.contentHtml }} />
        <div className="mt-16 pt-10 border-t border-border">
          <p className="font-body text-[14px] text-text-muted mb-4">Need specialist SEO for your niche?</p>
          <Link href="/contact/" className="inline-flex items-center gap-1.5 bg-lime text-void font-display font-bold text-[14px] px-6 py-3.5 rounded-lg hover:bg-[#F0FF6B] hover:shadow-[0_0_20px_rgba(232,255,71,0.3)] transition-all">
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
