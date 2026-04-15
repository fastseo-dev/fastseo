import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Niche SEO Services — Specialist SEO for Regulated & Competitive Industries",
  description:
    "Specialist niche SEO for iGaming, cryptocurrency, adult, dental, cannabis, and SaaS. We rank brands in the industries most agencies refuse to touch. Free SEO audit.",
  alternates: { canonical: "https://www.fastseosolutions.com/niche-seo/" },
};

const niches = [
  {
    label: "iGaming SEO",
    href: "/igaming-seo/",
    desc: "Casino, sports betting, poker and iGaming affiliate SEO. We rank operators in the most competitive gambling markets worldwide.",
    accent: "text-lime",
  },
  {
    label: "Cryptocurrency SEO",
    href: "/cryptocurrency-seo/",
    desc: "SEO for exchanges, DeFi protocols, NFT platforms, and blockchain businesses where paid advertising is largely prohibited.",
    accent: "text-mint",
  },
  {
    label: "Adult SEO",
    href: "/adult-seo/",
    desc: "Adult content platforms, escort services, cam sites, and adult retailers — the niche most agencies refuse. We specialise in it.",
    accent: "text-electric",
  },
  {
    label: "Dental SEO",
    href: "/dental-seo/",
    desc: "Local and national SEO for dental practices, dental groups, and specialist clinics. More patients through organic search.",
    accent: "text-lime",
  },
  {
    label: "Cannabis SEO",
    href: "/marijuana-seo/",
    desc: "Dispensaries, CBD brands, hemp companies and cannabis information sites — organic search is your most powerful channel.",
    accent: "text-mint",
  },
  {
    label: "SaaS SEO",
    href: "/saas-seo/",
    desc: "Full-funnel SEO for software companies. Drive trials, reduce CAC, and build the organic moat your competitors cannot replicate.",
    accent: "text-electric",
  },
  {
    label: "AI Search (AEO)",
    href: "/ai-seo-services/",
    desc: "Get cited and recommended by ChatGPT, Gemini, and Perplexity. Answer Engine Optimisation for the next era of search.",
    accent: "text-lime",
  },
  {
    label: "Link Building",
    href: "/link-building-services/",
    desc: "High-authority niche link building for restricted industries. Manual outreach, niche edits, and digital PR — no PBNs.",
    accent: "text-mint",
  },
  {
    label: "Content Writing",
    href: "/content-writing-services/",
    desc: "E-E-A-T-compliant content for competitive and regulated niches. Blog posts, landing pages, and editorial content that ranks.",
    accent: "text-electric",
  },
];

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Niche SEO Services",
  description:
    "Specialist SEO for regulated and competitive industries including iGaming, cryptocurrency, adult, dental, cannabis, and SaaS.",
  provider: {
    "@type": "Organization",
    name: "FastSEO",
    url: "https://www.fastseosolutions.com",
  },
  areaServed: "Worldwide",
};

export default function NicheSeoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      <div className="min-h-screen bg-void pt-[70px]">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(232,255,71,0.06),transparent)]" />
          <div className="max-w-[1160px] mx-auto px-6 py-20 lg:py-28">
            <span className="inline-flex items-center gap-2 text-lime font-body font-semibold text-[11px] tracking-[0.12em] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
              FastSEO · Niche SEO
            </span>
            <h1 className="font-display font-black text-[52px] lg:text-[64px] leading-[1.02] tracking-[-2px] text-text-primary mb-6 max-w-[780px]">
              Niche SEO for the Industries Others Avoid
            </h1>
            <p className="font-body text-[17px] text-text-muted max-w-[600px] leading-relaxed mb-10">
              Generic SEO agencies stick to safe verticals. We have built our entire practice
              around the regulated, restricted, and competitive niches where specialist knowledge
              is the difference between ranking and being invisible.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-1.5 bg-lime text-void font-display font-bold text-[14px] px-6 py-3.5 rounded-lg hover:bg-[#F0FF6B] hover:shadow-[0_0_20px_rgba(232,255,71,0.3)] hover:scale-[1.02] transition-all"
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

        {/* Niche grid */}
        <section className="max-w-[1160px] mx-auto px-6 py-20">
          <h2 className="font-display font-black text-[32px] tracking-[-0.5px] text-text-primary mb-3">
            Our Specialist Niches
          </h2>
          <p className="font-body text-[15px] text-text-muted mb-12 max-w-[540px]">
            Select your industry to see the specific SEO strategy we use to rank it.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {niches.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="group flex flex-col rounded-xl border border-border bg-surface p-6 hover:border-border-strong transition-all duration-200"
              >
                <span className={`font-display font-bold text-[15px] mb-2 group-hover:underline ${n.accent}`}>
                  {n.label}
                </span>
                <p className="font-body text-[13px] text-text-muted leading-relaxed flex-1">
                  {n.desc}
                </p>
                <span className="mt-4 font-body text-[12px] text-text-faint group-hover:text-lime transition-colors flex items-center gap-1">
                  Learn more
                  <svg width="11" height="11" viewBox="0 0 13 13" fill="none">
                    <path d="M2.5 10.5l8-8M10.5 2.5H4.5M10.5 2.5v6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Why niche matters */}
        <section className="border-t border-border bg-surface">
          <div className="max-w-[780px] mx-auto px-6 py-20">
            <h2 className="font-display font-black text-[32px] tracking-[-0.5px] text-text-primary mb-6">
              Why Niche SEO Expertise Matters
            </h2>
            <div className="prose">
              <p>
                Every niche has its own rules. iGaming SEO requires a vetted link network and
                compliance-aware content. Crypto SEO must navigate YMYL E-E-A-T requirements
                and advertising restrictions. Adult SEO needs specialist publisher relationships
                that mainstream agencies cannot access. Cannabis SEO demands nuanced keyword
                strategy and a link network willing to work with the plant.
              </p>
              <p>
                A generic SEO agency applying standard tactics in these verticals will
                underperform — or worse, create compliance and penalty risks. FastSEO has spent
                years building the specific knowledge, networks, and processes that these niches
                demand. The result is organic growth that other agencies genuinely cannot deliver.
              </p>
              <h3>Our Track Record</h3>
              <ul>
                <li>Casino brand scaled from 0 to 180,000 organic monthly visits in 14 months</li>
                <li>DeFi protocol achieved top-3 rankings for 60 high-value money keywords</li>
                <li>B2B SaaS brand grew trial signups 320% through organic search in 12 months</li>
                <li>Adult platform doubled organic revenue within 9 months of engagement</li>
                <li>Dental group grew patient enquiries 180% across 6 locations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border">
          <div className="max-w-[1160px] mx-auto px-6 py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h2 className="font-display font-black text-[28px] tracking-[-0.5px] text-text-primary mb-1">
                Ready to rank in your niche?
              </h2>
              <p className="font-body text-[14px] text-text-muted">
                Free audit, no obligations, just actionable insights for your specific vertical.
              </p>
            </div>
            <Link
              href="/contact/"
              className="shrink-0 inline-flex items-center gap-1.5 bg-lime text-void font-display font-bold text-[14px] px-6 py-3.5 rounded-lg hover:bg-[#F0FF6B] hover:shadow-[0_0_20px_rgba(232,255,71,0.3)] transition-all"
            >
              Free Audit
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
