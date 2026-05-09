import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  seoServicesLocations,
  getLocationBySlug,
} from "@/data/seo-services-locations";

export const dynamicParams = false;

const BASE = "https://www.fastseosolutions.com";

interface Props {
  params: Promise<{ country: string }>;
}

export async function generateStaticParams() {
  return seoServicesLocations.map((l) => ({ country: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params;
  const loc = getLocationBySlug(country);
  if (!loc) return {};

  const canonical = `${BASE}/seo-services/${loc.slug}/`;
  return {
    title: loc.title,
    description: loc.metaDescription,
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: {
      title: loc.title,
      description: loc.metaDescription,
      url: canonical,
      images: [{ url: `${BASE}/opengraph-image`, width: 1200, height: 630, alt: loc.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: loc.title,
      description: loc.metaDescription,
    },
  };
}

const services = [
  {
    title: "Technical SEO",
    desc: "Full technical audits — crawl architecture, Core Web Vitals, canonicalisation, structured data, and indexation. We fix what silently prevents your site from ranking.",
  },
  {
    title: "Link Building",
    desc: "Manual editorial backlinks from niche-relevant publishers. Specialist adult, iGaming, and crypto publisher networks that generalist agencies cannot access.",
  },
  {
    title: "On-Page SEO",
    desc: "Keyword research, intent mapping, title tags, heading structure, internal linking, and schema markup — data-driven across every key page.",
  },
  {
    title: "Local SEO",
    desc: "Google Business Profile optimisation, local citation building, local pack strategies, and location page development for businesses targeting specific markets.",
  },
  {
    title: "Content SEO",
    desc: "E-E-A-T optimised articles, pillar pages, and service pages written by vertical specialists — not generalists producing generic copy that fails to rank.",
  },
  {
    title: "Restricted Niches",
    desc: "Adult SEO, iGaming SEO, crypto SEO, cannabis SEO — regulated verticals where mainstream agencies refuse to operate. Specialist compliance-aware strategy.",
  },
];

export default async function SeoServicesCountryPage({ params }: Props) {
  const { country } = await params;
  const loc = getLocationBySlug(country);
  if (!loc) notFound();

  const canonical = `${BASE}/seo-services/${loc.slug}/`;

  const schemaService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `SEO Services — ${loc.name}`,
    description: loc.metaDescription,
    provider: {
      "@type": "Organization",
      name: "FastSEO",
      url: BASE,
    },
    areaServed: {
      "@type": "Country",
      name: loc.name,
    },
    serviceType: "Search Engine Optimisation",
    url: canonical,
  };

  const schemaFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: loc.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "SEO Services", item: `${BASE}/seo-services/` },
      { "@type": "ListItem", position: 3, name: loc.name, item: canonical },
    ],
  };

  const otherLocations = seoServicesLocations.filter((l) => l.slug !== loc.slug);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />

      <div className="min-h-screen bg-void pt-[70px]">

        {/* ── Breadcrumb ── */}
        <div className="border-b border-border">
          <div className="max-w-[1160px] mx-auto px-6 py-3 flex items-center gap-2 font-body text-[12px] text-text-faint">
            <Link href="/" className="hover:text-text-muted transition-colors">Home</Link>
            <span>/</span>
            <Link href="/seo-services/" className="hover:text-text-muted transition-colors">SEO Services</Link>
            <span>/</span>
            <span className="text-text-muted">{loc.name}</span>
          </div>
        </div>

        {/* ── Hero ── */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(232,255,71,0.05),transparent)]" />
          <div className="max-w-[1160px] mx-auto px-6 py-24 lg:py-32">
            <span className="inline-flex items-center gap-2 text-lime font-body font-semibold text-[11px] tracking-[0.12em] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
              FastSEO · {loc.flag} {loc.shortName}
            </span>
            <h1 className="font-display font-black text-[48px] lg:text-[60px] leading-[1.02] tracking-[-2px] text-text-primary mb-6 max-w-[760px]">
              {loc.h1}
            </h1>
            <p className="font-body text-[17px] text-text-muted max-w-[600px] leading-relaxed mb-10">
              {loc.subtitle}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-1.5 bg-lime text-void font-display font-bold text-[14px] px-6 py-3.5 rounded-lg hover:bg-[#F0FF6B] hover:shadow-[0_0_20px_rgba(232,255,71,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Get Free Audit
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2.5 10.5l8-8M10.5 2.5H4.5M10.5 2.5v6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/case-studies/"
                className="inline-flex items-center gap-1.5 border border-border text-text-secondary font-body font-medium text-[14px] px-6 py-3.5 rounded-lg hover:border-border-strong hover:text-text-primary transition-all"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="border-t border-border bg-surface">
          <div className="max-w-[1160px] mx-auto px-6 py-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {loc.stats.map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <div className="font-display font-black text-[32px] lg:text-[36px] text-lime leading-none mb-1">
                    {s.value}
                  </div>
                  <div className="font-body text-[12px] text-text-muted">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services grid ── */}
        <section className="border-t border-border">
          <div className="max-w-[1160px] mx-auto px-6 py-20">
            <h2 className="font-display font-black text-[32px] tracking-[-0.5px] text-text-primary mb-3">
              What We Do
            </h2>
            <p className="font-body text-[15px] text-text-muted mb-12 max-w-[500px]">
              Full-spectrum SEO built for competitive and regulated niches in {loc.name}.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((s, i) => (
                <div key={i} className="rounded-xl border border-border bg-surface p-6 hover:border-border-strong transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-lime/10 border border-lime/20 flex items-center justify-center mb-4">
                    <span className="font-display font-black text-[11px] text-lime">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-[15px] text-text-primary mb-2">{s.title}</h3>
                  <p className="font-body text-[13px] text-text-muted leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Market context ── */}
        <section className="border-t border-border bg-surface">
          <div className="max-w-[780px] mx-auto px-6 py-20">
            <h2 className="font-display font-black text-[32px] tracking-[-0.5px] text-text-primary mb-6">
              The {loc.name} SEO Market
            </h2>
            <p className="font-body text-[15px] text-text-muted leading-relaxed mb-6">
              {loc.marketContext}
            </p>
            <h3 className="font-display font-bold text-[20px] text-text-primary mb-4">
              Regulatory & Compliance Context
            </h3>
            <p className="font-body text-[15px] text-text-muted leading-relaxed">
              {loc.regulatoryContext}
            </p>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="border-t border-border">
          <div className="max-w-[780px] mx-auto px-6 py-20">
            <h2 className="font-display font-black text-[32px] tracking-[-0.5px] text-text-primary mb-3">
              Frequently Asked Questions
            </h2>
            <p className="font-body text-[15px] text-text-muted mb-10">
              Common questions about SEO services in {loc.name}.
            </p>
            <div className="flex flex-col divide-y divide-border">
              {loc.faqs.map((faq, i) => (
                <details key={i} className="group py-1">
                  <summary className="flex items-center justify-between gap-4 py-4 cursor-pointer list-none">
                    <span className="font-display font-semibold text-[16px] text-text-primary group-open:text-lime transition-colors pr-4">
                      {faq.q}
                    </span>
                    <svg
                      width="18" height="18" viewBox="0 0 18 18" fill="none"
                      className="shrink-0 text-text-muted transition-transform duration-200 group-open:rotate-180"
                    >
                      <path d="M4 6.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </summary>
                  <p className="font-body text-[14px] text-text-muted leading-relaxed pb-5 pr-10">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Other locations ── */}
        <section className="border-t border-border bg-surface">
          <div className="max-w-[1160px] mx-auto px-6 py-16">
            <h2 className="font-display font-black text-[24px] tracking-[-0.5px] text-text-primary mb-8">
              SEO Services in Other Markets
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {otherLocations.map((l) => (
                <Link
                  key={l.slug}
                  href={`/seo-services/${l.slug}/`}
                  className="group rounded-xl border border-border bg-void p-4 hover:border-border-strong hover:bg-surface transition-all text-center"
                >
                  <div className="text-[24px] mb-2">{l.flag}</div>
                  <div className="font-body text-[13px] font-medium text-text-muted group-hover:text-text-primary transition-colors">
                    {l.shortName}
                  </div>
                  <div className="font-body text-[11px] text-text-faint">{l.name}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="border-t border-border">
          <div className="max-w-[1160px] mx-auto px-6 py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h2 className="font-display font-black text-[28px] tracking-[-0.5px] text-text-primary mb-1">
                Ready to rank in {loc.name}?
              </h2>
              <p className="font-body text-[14px] text-text-muted">
                Free SEO audit — we will show you exactly where your organic growth opportunity is.
              </p>
            </div>
            <Link
              href="/contact/"
              className="shrink-0 inline-flex items-center gap-1.5 bg-lime text-void font-display font-bold text-[14px] px-6 py-3.5 rounded-lg hover:bg-[#F0FF6B] hover:shadow-[0_0_20px_rgba(232,255,71,0.3)] transition-all"
            >
              Get Free Audit
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2.5 10.5l8-8M10.5 2.5H4.5M10.5 2.5v6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}
