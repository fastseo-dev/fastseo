import Link from "next/link";
import type { NicheCountryData, NicheConfig } from "@/data/niche-country-types";
import { seoServicesLocations } from "@/data/seo-services-locations";

const BASE = "https://www.fastseosolutions.com";

interface Props {
  data: NicheCountryData;
  config: NicheConfig;
  otherCountries: NicheCountryData[];
}

export default function NicheCountryPage({ data, config, otherCountries }: Props) {
  const canonical = `${BASE}/${data.nicheSlug}/${data.countrySlug}/`;

  /* ── JSON-LD schemas ── */
  const schemaService = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonical}#service`,
    name: `${data.nicheLabel} — ${data.countryName}`,
    description: data.metaDescription,
    provider: {
      "@type": "Organization",
      "@id": `${BASE}/#organization`,
      name: "FastSEO Solutions",
      url: BASE,
    },
    areaServed: { "@type": "Country", name: data.countryName },
    serviceType: data.nicheLabel,
    url: canonical,
  };

  const schemaFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
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
      { "@type": "ListItem", position: 2, name: data.nicheLabel, item: `${BASE}/${data.nicheSlug}/` },
      { "@type": "ListItem", position: 3, name: data.countryName, item: canonical },
    ],
  };

  /* Speakable — marks content AI/voice assistants should read aloud */
  const schemaSpeakable = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    name: data.title,
    url: canonical,
    inLanguage: "en",
    isPartOf: { "@type": "WebSite", "@id": `${BASE}/#website` },
    about: { "@type": "Service", "@id": `${canonical}#service` },
    publisher: { "@type": "Organization", "@id": `${BASE}/#organization` },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["[data-speakable]"],
    },
  };

  /* HowTo — process-based content AI overviews extract */
  const schemaHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How FastSEO delivers ${data.nicheLabel} in ${data.countryName}`,
    description: `A step-by-step overview of our ${data.nicheLabel} process for ${data.countryName} clients.`,
    step: config.services.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.desc,
    })),
  };

  const generalCountryPage = seoServicesLocations.find((l) => l.slug === data.countrySlug);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaSpeakable) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaHowTo) }} />

      <div className="min-h-screen bg-void pt-[70px]">

        {/* ── Breadcrumb ── */}
        <div className="border-b border-border">
          <div className="max-w-[1160px] mx-auto px-6 py-3 flex items-center gap-2 font-body text-[12px] text-text-faint">
            <Link href="/" className="hover:text-text-muted transition-colors">Home</Link>
            <span>/</span>
            <Link href={config.parentHref} className="hover:text-text-muted transition-colors">{data.nicheLabel}</Link>
            <span>/</span>
            <span className="text-text-muted">{data.countryName}</span>
          </div>
        </div>

        {/* ── Hero ── */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(232,255,71,0.05),transparent)]" />
          <div className="max-w-[1160px] mx-auto px-6 py-24 lg:py-32">
            <span className="inline-flex items-center gap-2 text-lime font-body font-semibold text-[11px] tracking-[0.12em] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
              FastSEO · {data.countryFlag} {data.countryShort} · {data.nicheLabel}
            </span>
            <h1 className="font-display font-black text-[48px] lg:text-[60px] leading-[1.02] tracking-[-2px] text-text-primary mb-6 max-w-[760px]">
              {data.h1}
            </h1>
            <p className="font-body text-[17px] text-text-muted max-w-[600px] leading-relaxed mb-10" data-speakable>
              {data.subtitle}
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

        {/* ── Quick Answer — AI Overview & Voice Search target ── */}
        {data.quickAnswer && (
          <section className="border-t border-border bg-lime/[0.04]">
            <div className="max-w-[780px] mx-auto px-6 py-10">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-8 h-8 rounded-lg bg-lime/20 border border-lime/30 flex items-center justify-center mt-0.5">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 1v6M7 10v.5M2 7a5 5 0 1 0 10 0A5 5 0 0 0 2 7z" stroke="#E8FF47" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <p className="font-body text-[11px] text-lime font-semibold tracking-wider uppercase mb-2">Quick Answer</p>
                  <p className="font-body text-[15px] text-text-secondary leading-relaxed" data-speakable>
                    {data.quickAnswer}
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── Stats ── */}
        <section className="border-t border-border bg-surface">
          <div className="max-w-[1160px] mx-auto px-6 py-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {data.stats.map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <div className="font-display font-black text-[32px] lg:text-[36px] text-lime leading-none mb-1">{s.value}</div>
                  <div className="font-body text-[12px] text-text-muted">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services grid (HowTo steps) ── */}
        <section className="border-t border-border">
          <div className="max-w-[1160px] mx-auto px-6 py-20">
            <h2 className="font-display font-black text-[32px] tracking-[-0.5px] text-text-primary mb-3">
              How We Deliver {data.nicheLabel} in {data.countryName}
            </h2>
            <p className="font-body text-[15px] text-text-muted mb-12 max-w-[500px]">
              A specialist {data.nicheLabel} process built specifically for the {data.countryName} market.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {config.services.map((s, i) => (
                <div key={i} className="rounded-xl border border-border bg-surface p-6 hover:border-border-strong transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-lime/10 border border-lime/20 flex items-center justify-center mb-4">
                    <span className="font-display font-black text-[11px] text-lime">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-display font-bold text-[15px] text-text-primary mb-2">{s.title}</h3>
                  <p className="font-body text-[13px] text-text-muted leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why FastSEO ── */}
        <section className="border-t border-border bg-surface">
          <div className="max-w-[1160px] mx-auto px-6 py-20">
            <h2 className="font-display font-black text-[32px] tracking-[-0.5px] text-text-primary mb-3">
              Why FastSEO for {data.nicheLabel} in {data.countryName}?
            </h2>
            <p className="font-body text-[15px] text-text-muted mb-10 max-w-[520px]" data-speakable>
              FastSEO is the specialist {data.nicheLabel} agency for {data.countryName} — with regulatory expertise, editorial publisher access, and a track record generalist agencies cannot match.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.whyUs.map((point, i) => (
                <div key={i} className="flex items-start gap-4 rounded-xl border border-border bg-void p-5">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-lime/10 border border-lime/30 flex items-center justify-center mt-0.5">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4l2.5 2.5L9 1" stroke="#E8FF47" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="font-body text-[14px] text-text-secondary leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Market context ── */}
        <section className="border-t border-border">
          <div className="max-w-[780px] mx-auto px-6 py-20">
            <h2 className="font-display font-black text-[32px] tracking-[-0.5px] text-text-primary mb-6">
              {data.nicheLabel} in {data.countryName}: Market Overview
            </h2>
            <p className="font-body text-[15px] text-text-muted leading-relaxed mb-6" data-speakable>
              {data.marketContext}
            </p>
            <h3 className="font-display font-bold text-[20px] text-text-primary mb-4">
              Regulatory &amp; Compliance Context
            </h3>
            <p className="font-body text-[15px] text-text-muted leading-relaxed mb-6" data-speakable>
              {data.regulatoryContext}
            </p>
            <h3 className="font-display font-bold text-[20px] text-text-primary mb-4">
              Competitive Landscape
            </h3>
            <p className="font-body text-[15px] text-text-muted leading-relaxed">
              {data.competitiveInsight}
            </p>
          </div>
        </section>

        {/* ── Cities ── */}
        {data.cities.length > 0 && (
          <section className="border-t border-border bg-surface">
            <div className="max-w-[1160px] mx-auto px-6 py-16">
              <h2 className="font-display font-black text-[24px] tracking-[-0.5px] text-text-primary mb-3">
                {data.nicheLabel} by City in {data.countryName}
              </h2>
              <p className="font-body text-[14px] text-text-muted mb-8">
                We deliver {data.nicheLabel} programmes across all major {data.countryName} cities.
              </p>
              <div className="flex flex-wrap gap-2">
                {data.cities.map((city) => {
                  const slug = city.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
                  return (
                    <Link
                      key={city}
                      href={`/${data.nicheSlug}/${data.countrySlug}/${slug}/`}
                      className="inline-flex items-center font-body text-[13px] text-text-muted border border-border rounded-lg px-3 py-1.5 bg-void hover:border-border-strong hover:text-text-primary transition-colors"
                    >
                      {city}
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ── Cross-link to general SEO services country page ── */}
        {generalCountryPage && (
          <section className="border-t border-border">
            <div className="max-w-[1160px] mx-auto px-6 py-12">
              <div className="rounded-xl border border-border bg-surface p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="font-body text-[12px] text-text-faint uppercase tracking-wider mb-1">Also from FastSEO</p>
                  <h3 className="font-display font-bold text-[18px] text-text-primary">
                    Full-Spectrum SEO Services in {data.countryName}
                  </h3>
                  <p className="font-body text-[13px] text-text-muted mt-1">
                    Beyond {data.nicheLabel} — technical SEO, link building, content, and local SEO across all verticals.
                  </p>
                </div>
                <Link
                  href={`/seo-services/${data.countrySlug}/`}
                  className="shrink-0 inline-flex items-center gap-1.5 border border-border text-text-secondary font-body font-medium text-[13px] px-5 py-2.5 rounded-lg hover:border-border-strong hover:text-text-primary transition-all"
                >
                  SEO Services {generalCountryPage.shortName}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 10l8-8M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* ── FAQ — Voice Search & AI Overview optimised ── */}
        <section className="border-t border-border">
          <div className="max-w-[780px] mx-auto px-6 py-20">
            <h2 className="font-display font-black text-[32px] tracking-[-0.5px] text-text-primary mb-3">
              {data.nicheLabel} in {data.countryName} — FAQs
            </h2>
            <p className="font-body text-[15px] text-text-muted mb-10">
              Answers to the most common questions about {data.nicheLabel} in {data.countryName}.
            </p>
            <div className="flex flex-col divide-y divide-border">
              {data.faqs.map((faq, i) => (
                <details key={i} className="group py-1">
                  <summary className="flex items-center justify-between gap-4 py-4 cursor-pointer list-none">
                    <span className="font-display font-semibold text-[16px] text-text-primary group-open:text-lime transition-colors pr-4">
                      {faq.q}
                    </span>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                      className="shrink-0 text-text-muted transition-transform duration-200 group-open:rotate-180">
                      <path d="M4 6.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </summary>
                  <p className="font-body text-[14px] text-text-muted leading-relaxed pb-5 pr-10" data-speakable>
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Other countries ── */}
        {otherCountries.length > 0 && (
          <section className="border-t border-border bg-surface">
            <div className="max-w-[1160px] mx-auto px-6 py-16">
              <h2 className="font-display font-black text-[24px] tracking-[-0.5px] text-text-primary mb-8">
                {data.nicheLabel} in Other Markets
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {otherCountries.map((l) => (
                  <Link
                    key={l.countrySlug}
                    href={`/${l.nicheSlug}/${l.countrySlug}/`}
                    className="group rounded-xl border border-border bg-void p-4 hover:border-border-strong hover:bg-surface transition-all text-center"
                  >
                    <div className="text-[24px] mb-2">{l.countryFlag}</div>
                    <div className="font-body text-[13px] font-medium text-text-muted group-hover:text-text-primary transition-colors">
                      {l.countryShort}
                    </div>
                    <div className="font-body text-[11px] text-text-faint">{l.countryName}</div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── CTA ── */}
        <section className="border-t border-border">
          <div className="max-w-[1160px] mx-auto px-6 py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h2 className="font-display font-black text-[28px] tracking-[-0.5px] text-text-primary mb-1">
                Ready to rank in {data.countryName}?
              </h2>
              <p className="font-body text-[14px] text-text-muted">
                Free {data.nicheLabel} audit — we will show you exactly where your organic growth opportunity is.
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
