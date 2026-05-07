import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { supabaseServer } from '@/lib/supabase';
import ServicePage from '@/components/ServicePage';

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ slug: string }>;
}

interface DbPage {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  page_type: string;
  template: string;
  hero_label: string;
  hero_subtitle: string;
  features: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
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

async function getPage(slug: string): Promise<DbPage | null> {
  const { data, error } = await supabaseServer
    .from('pages')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single();
  if (error || !data) return null;
  return {
    ...data,
    template:      data.template      ?? 'article',
    hero_label:    data.hero_label    ?? '',
    hero_subtitle: data.hero_subtitle ?? '',
    features:      Array.isArray(data.features) ? data.features : [],
    faqs:          Array.isArray(data.faqs)     ? data.faqs     : [],
  } as DbPage;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = await getPage(slug);
  if (!page) return {};

  const title = page.seo_title || page.title;
  const description = page.meta_description || page.excerpt || page.hero_subtitle || undefined;
  const canonical = page.canonical_url || `https://www.fastseosolutions.com/pages/${slug}/`;
  const [robotsIndex, robotsFollow] = (page.robots || 'index/follow').split('/');
  const ogImage = page.og_image || page.featured_image_url || 'https://www.fastseosolutions.com/opengraph-image';

  return {
    title,
    description,
    alternates: { canonical },
    robots: { index: robotsIndex !== 'noindex', follow: robotsFollow !== 'nofollow' },
    openGraph: {
      title: page.og_title || title,
      description: page.og_description || description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      type: 'website',
      url: canonical,
    },
    twitter: {
      card: 'summary_large_image',
      title: page.og_title || title,
      description: page.og_description || description,
      images: [ogImage],
    },
  };
}

function formatDate(dateStr: string) {
  if (!dateStr) return '';
  try {
    return new Date(dateStr).toLocaleDateString('en-GB', {
      day: 'numeric', month: 'long', year: 'numeric',
    });
  } catch {
    return dateStr;
  }
}

export default async function PageRoute({ params }: Props) {
  const { slug } = await params;
  const page = await getPage(slug);
  if (!page) notFound();

  const canonical = page.canonical_url || `https://www.fastseosolutions.com/pages/${slug}/`;

  // ── Service page template — identical layout to iGaming, Adult, Dental pages
  if (page.template === 'service') {
    return (
      <ServicePage
        label={page.hero_label || page.title}
        title={page.title}
        subtitle={page.hero_subtitle || page.excerpt || ''}
        features={page.features}
        faqs={page.faqs.length > 0 ? page.faqs : undefined}
        canonicalPath={`/pages/${slug}/`}
        serviceName={page.seo_title || page.title}
        serviceDescription={page.meta_description || page.excerpt || page.hero_subtitle || ''}
        contentHtml={page.content || undefined}
      />
    );
  }

  // ── Article / Legal template
  const schema = (page.schema_type && page.schema_type !== 'None') ? {
    '@context': 'https://schema.org',
    '@type': page.schema_type,
    name: page.title,
    description: page.meta_description || page.excerpt || undefined,
    url: canonical,
    image: page.og_image || page.featured_image_url || undefined,
    author: { '@type': 'Organization', name: 'FastSEO' },
  } : null;

  return (
    <div className="min-h-screen bg-void pt-[70px]">
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}

      {page.featured_image_url && (
        <div className="w-full max-h-72 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={page.featured_image_url} alt={page.title} className="w-full h-full object-cover" />
        </div>
      )}

      <article className="max-w-[860px] mx-auto px-6 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-body text-[13px] text-text-muted hover:text-text-primary transition-colors mb-10"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Home
        </Link>

        <h1 className="font-display font-black text-[40px] lg:text-[52px] leading-[1.1] tracking-[-1.5px] text-text-primary mb-5">
          {page.title}
        </h1>

        {page.excerpt && (
          <p className="font-body text-[17px] text-text-muted leading-relaxed mb-8 max-w-[640px]">
            {page.excerpt}
          </p>
        )}

        <div className="flex items-center gap-3 pb-8 mb-8 border-b border-border text-[13px] text-text-muted font-body">
          <span>By {page.author}</span>
          {page.date && (
            <>
              <span className="text-border-strong">·</span>
              <span>{formatDate(page.date)}</span>
            </>
          )}
        </div>

        <div className="prose" dangerouslySetInnerHTML={{ __html: page.content }} />

        <div className="mt-16 pt-10 border-t border-border">
          <p className="font-body text-[14px] text-text-muted mb-4">Need specialist SEO for your business?</p>
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
