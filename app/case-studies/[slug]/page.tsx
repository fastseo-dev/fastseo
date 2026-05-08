import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { supabaseServer } from "@/lib/supabase";
import { getCaseStudyBySlug, type CaseStudy } from "@/lib/case-studies";

export const dynamic = "force-dynamic";

const BASE = "https://www.fastseosolutions.com";

interface Props {
  params: Promise<{ slug: string }>;
}

interface SupabaseCaseStudy {
  id: string;
  title: string;
  slug: string;
  niche: string;
  client: string;
  result: string;
  metric: string;
  period: string;
  tags: string[];
  body: string;
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

async function getSupabaseCaseStudy(slug: string): Promise<SupabaseCaseStudy | null> {
  const { data, error } = await supabaseServer
    .from("case_studies")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .single();
  if (error || !data) return null;
  return data as SupabaseCaseStudy;
}

function mergeStudy(db: SupabaseCaseStudy | null, stat: CaseStudy | null) {
  if (!db && !stat) return null;
  if (db) return db;
  // Map static CaseStudy to SupabaseCaseStudy shape
  return {
    id: stat!.slug,
    title: stat!.title,
    slug: stat!.slug,
    niche: stat!.niche,
    client: stat!.client,
    result: stat!.result,
    metric: stat!.metric,
    period: stat!.period,
    tags: stat!.tags,
    body: stat!.body,
    featured_image_url: "",
    status: "published",
    seo_title: stat!.seoTitle,
    meta_description: stat!.metaDescription,
    canonical_url: `${BASE}/case-studies/${stat!.slug}/`,
    robots: "index/follow",
    og_title: stat!.seoTitle,
    og_description: stat!.metaDescription,
    og_image: "",
    schema_type: "Article",
  } satisfies SupabaseCaseStudy;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const db = await getSupabaseCaseStudy(slug);
  const stat = getCaseStudyBySlug(slug);
  const study = mergeStudy(db, stat);
  if (!study) return {};

  const title = study.seo_title || study.title;
  const description = study.meta_description || undefined;
  const canonical = study.canonical_url || `${BASE}/case-studies/${slug}/`;
  const [robotsIndex, robotsFollow] = (study.robots || "index/follow").split("/");
  const ogImage = study.og_image || study.featured_image_url || `${BASE}/opengraph-image`;

  return {
    title,
    description,
    alternates: { canonical },
    robots: { index: robotsIndex !== "noindex", follow: robotsFollow !== "nofollow" },
    openGraph: {
      title: study.og_title || title,
      description: study.og_description || description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      type: "article",
      url: canonical,
    },
    twitter: {
      card: "summary_large_image",
      title: study.og_title || title,
      description: study.og_description || description,
      images: [ogImage],
    },
  };
}

function buildSchema(study: SupabaseCaseStudy) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.meta_description || undefined,
    url: study.canonical_url || `${BASE}/case-studies/${study.slug}/`,
    image: study.og_image || study.featured_image_url || undefined,
    author: {
      "@type": "Organization",
      name: "FastSEO",
      url: BASE,
    },
    publisher: {
      "@type": "Organization",
      name: "FastSEO",
      url: BASE,
    },
  };
}

export default async function CaseStudySlugPage({ params }: Props) {
  const { slug } = await params;
  const db = await getSupabaseCaseStudy(slug);
  const stat = getCaseStudyBySlug(slug);
  const study = mergeStudy(db, stat);
  if (!study) notFound();

  const schema = buildSchema(study);
  const tags: string[] = Array.isArray(study.tags) ? study.tags : [];

  return (
    <div className="min-h-screen bg-void pt-[70px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <article className="max-w-[780px] mx-auto px-6 py-16">

        {/* Back link */}
        <Link
          href="/case-studies/"
          className="inline-flex items-center gap-1.5 font-body text-[13px] text-text-muted hover:text-text-primary transition-colors mb-10"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Case Studies
        </Link>

        {/* Niche badge */}
        <span className="inline-flex items-center gap-2 text-lime font-body font-semibold text-[11px] tracking-[0.12em] uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
          {study.niche}
        </span>

        {/* Title */}
        <h1 className="font-display font-black text-[40px] lg:text-[48px] leading-[1.1] tracking-[-1px] text-text-primary mb-5">
          {study.title}
        </h1>

        {/* Stats bar */}
        {(study.result || study.metric || study.period) && (
          <div className="flex flex-wrap gap-8 py-6 mb-8 border-y border-border">
            {study.result && (
              <div>
                <div className="font-display font-black text-[32px] text-lime leading-none">
                  {study.result}
                </div>
                {study.metric && (
                  <div className="font-body text-[12px] text-text-muted mt-1">{study.metric}</div>
                )}
              </div>
            )}
            {study.period && (
              <div>
                <div className="font-display font-black text-[32px] text-text-primary leading-none">
                  {study.period}
                </div>
                <div className="font-body text-[12px] text-text-muted mt-1">Time period</div>
              </div>
            )}
            <div>
              <div className="font-display font-black text-[32px] text-text-primary leading-none">
                {study.client}
              </div>
              <div className="font-body text-[12px] text-text-muted mt-1">Client type</div>
            </div>
          </div>
        )}

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-10">
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-body text-[11px] font-semibold tracking-wide uppercase text-lime/70 bg-lime/8 border border-lime/15 rounded-full px-2.5 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Body content */}
        {study.body && (
          <div className="prose" dangerouslySetInnerHTML={{ __html: study.body }} />
        )}

        {/* Footer CTA */}
        <div className="mt-16 pt-10 border-t border-border">
          <p className="font-body text-[14px] text-text-muted mb-4">
            Want results like this for your business?
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
