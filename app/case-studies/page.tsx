import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SEO Case Studies — Real Results for iGaming, Crypto, SaaS & Adult Brands",
  description:
    "FastSEO case studies. See the organic growth we have delivered for iGaming, cryptocurrency, SaaS, adult, cannabis, and dental clients. Real numbers, real results.",
  alternates: { canonical: "https://www.fastseosolutions.com/case-studies/" },
};

const caseStudies = [
  {
    niche: "iGaming",
    client: "Online Casino Brand",
    result: "0 → 180,000",
    metric: "Monthly organic visits",
    period: "14 months",
    tags: ["Casino SEO", "Link Building", "Content Strategy"],
    detail:
      "A newly licensed online casino in a competitive European market. Starting with zero organic presence, we built a full SEO foundation — technical audit, content architecture, and a targeted link acquisition campaign from gambling publications and affiliate sites. 14 months later: 180,000 monthly organic visits and page-one rankings for 340+ casino and betting keywords.",
    accent: "border-lime/30 hover:border-lime/60",
    tagColor: "text-lime/70 bg-lime/8 border-lime/15",
  },
  {
    niche: "Crypto",
    client: "DeFi Protocol",
    result: "Top 3",
    metric: "Rankings for 60 money keywords",
    period: "11 months",
    tags: ["Crypto SEO", "E-E-A-T Content", "Digital PR"],
    detail:
      "A DeFi protocol launching into a market dominated by established players with massive domain authority. We built topical authority through comprehensive educational content, earned links from authoritative crypto publications, and executed an entity-building strategy for AI visibility. 11 months in: top-3 rankings for 60 high-value DeFi keywords and regular citations in ChatGPT and Perplexity responses.",
    accent: "border-mint/30 hover:border-mint/60",
    tagColor: "text-mint/70 bg-mint/8 border-mint/15",
  },
  {
    niche: "SaaS",
    client: "B2B SaaS Platform",
    result: "+320%",
    metric: "Organic trial signups",
    period: "12 months",
    tags: ["SaaS SEO", "Content Strategy", "Link Building"],
    detail:
      "A B2B SaaS platform in a crowded category spending heavily on paid acquisition with declining returns. We built a full-funnel content strategy — comparison pages, integration pages, use-case content, and long-form guides — paired with authoritative link acquisition from tech and business media. 12 months later: 320% increase in organic trial signups and a 40% reduction in blended CAC.",
    accent: "border-electric/30 hover:border-electric/60",
    tagColor: "text-electric/70 bg-electric/8 border-electric/15",
  },
  {
    niche: "Adult",
    client: "Adult Content Platform",
    result: "2× Revenue",
    metric: "Organic revenue in 9 months",
    period: "9 months",
    tags: ["Adult SEO", "Adult Link Building", "On-Page SEO"],
    detail:
      "An adult content platform competing against major aggregators with massive traffic advantages. We identified high-intent long-tail keyword clusters where they could compete, rebuilt their on-page architecture, and executed a link building campaign through our adult publisher network. 9 months later: organic revenue doubled, with 140% growth in new user registrations from organic search.",
    accent: "border-lime/30 hover:border-lime/60",
    tagColor: "text-lime/70 bg-lime/8 border-lime/15",
  },
  {
    niche: "Dental",
    client: "Multi-Location Dental Group",
    result: "+180%",
    metric: "Patient enquiries across 6 locations",
    period: "10 months",
    tags: ["Dental SEO", "Local SEO", "Google Business Profile"],
    detail:
      "A dental group with 6 locations, each competing in different local markets with inconsistent online presence. We standardised their Google Business Profile setup, built location-specific service pages, and implemented a unified citation and review strategy. 10 months later: 180% increase in patient enquiries from organic search across all locations.",
    accent: "border-mint/30 hover:border-mint/60",
    tagColor: "text-mint/70 bg-mint/8 border-mint/15",
  },
  {
    niche: "Cannabis",
    client: "CBD E-Commerce Brand",
    result: "+240%",
    metric: "Organic traffic in 8 months",
    period: "8 months",
    tags: ["Cannabis SEO", "Content Strategy", "Link Building"],
    detail:
      "A CBD e-commerce brand unable to run paid ads, relying entirely on organic traffic. We built a comprehensive topical authority strategy around CBD, hemp, and wellness keywords, secured backlinks from cannabis publications and lifestyle media, and optimised every product and category page. 8 months later: 240% increase in organic traffic and first-page rankings for 90+ CBD keywords.",
    accent: "border-electric/30 hover:border-electric/60",
    tagColor: "text-electric/70 bg-electric/8 border-electric/15",
  },
];

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "SEO Case Studies",
  url: "https://www.fastseosolutions.com/case-studies/",
  description: "FastSEO case studies — real organic growth results for iGaming, crypto, SaaS, adult, cannabis and dental clients.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      <div className="min-h-screen bg-void pt-[70px]">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-5%,rgba(0,102,255,0.06),transparent)]" />
          <div className="max-w-[1160px] mx-auto px-6 py-20 lg:py-28">
            <span className="inline-flex items-center gap-2 text-electric font-body font-semibold text-[11px] tracking-[0.12em] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
              FastSEO · Case Studies
            </span>
            <h1 className="font-display font-black text-[52px] lg:text-[64px] leading-[1.02] tracking-[-2px] text-text-primary mb-6 max-w-[700px]">
              Real Results. Real Niches.
            </h1>
            <p className="font-body text-[17px] text-text-muted max-w-[580px] leading-relaxed">
              Every case study below is a real client in a regulated or competitive niche.
              No cherry-picked easy wins — these are the industries where specialist SEO
              knowledge is the only thing that delivers results.
            </p>
          </div>
        </section>

        {/* Case studies */}
        <section className="max-w-[1160px] mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {caseStudies.map((cs, i) => (
              <div
                key={i}
                className={`rounded-xl border bg-surface p-7 transition-all duration-200 ${cs.accent}`}
              >
                {/* Niche + tags */}
                <div className="flex items-center gap-2 mb-5 flex-wrap">
                  <span className="font-body text-[11px] font-bold tracking-[0.1em] uppercase text-text-faint">
                    {cs.niche}
                  </span>
                  {cs.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`font-body text-[10px] font-semibold tracking-wide uppercase border rounded-full px-2 py-0.5 ${cs.tagColor}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Client */}
                <div className="font-display font-bold text-[16px] text-text-primary mb-4">
                  {cs.client}
                </div>

                {/* Result stat */}
                <div className="flex items-end gap-3 mb-5 pb-5 border-b border-border">
                  <span className="font-display font-black text-[44px] leading-none tracking-tight text-text-primary">
                    {cs.result}
                  </span>
                  <div className="mb-1">
                    <div className="font-body text-[13px] text-text-secondary">{cs.metric}</div>
                    <div className="font-body text-[11px] text-text-faint">in {cs.period}</div>
                  </div>
                </div>

                {/* Detail */}
                <p className="font-body text-[13px] text-text-muted leading-relaxed">
                  {cs.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-surface">
          <div className="max-w-[1160px] mx-auto px-6 py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h2 className="font-display font-black text-[28px] tracking-[-0.5px] text-text-primary mb-1">
                Want results like these?
              </h2>
              <p className="font-body text-[14px] text-text-muted">
                Free audit — we will show you exactly what we would do for your site.
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
