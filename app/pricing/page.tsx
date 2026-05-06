import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SEO Pricing — Transparent Plans for iGaming, Crypto, Adult & SaaS",
  description:
    "FastSEO pricing for specialist SEO services. Foundation from £1,500/mo, Growth from £3,500/mo, Authority from £8,000/mo. Custom enterprise plans available. Free audit included.",
  alternates: { canonical: "https://www.fastseosolutions.com/pricing/" },
};

const plans = [
  {
    name: "Foundation",
    price: "£1,500",
    period: "/month",
    tagline: "For brands entering a competitive niche",
    popular: false,
    color: "border-border hover:border-border-strong",
    badge: null,
    includes: [
      { text: "Full technical SEO audit", included: true },
      { text: "On-page optimisation (10 pages)", included: true },
      { text: "4 SEO content pieces/month", included: true },
      { text: "4 niche link placements/month", included: true },
      { text: "Keyword tracking (50 keywords)", included: true },
      { text: "Monthly performance report", included: true },
      { text: "Email support", included: true },
      { text: "Competitor gap analysis", included: false },
      { text: "AI visibility monitoring", included: false },
      { text: "Digital PR campaigns", included: false },
      { text: "Dedicated account manager", included: false },
    ],
    cta: "Get Started",
    ctaStyle:
      "border border-border text-text-primary hover:border-lime hover:text-lime",
  },
  {
    name: "Growth",
    price: "£3,500",
    period: "/month",
    tagline: "For brands scaling organic traffic aggressively",
    popular: true,
    color: "border-lime/40 hover:border-lime/70 shadow-[0_0_40px_rgba(232,255,71,0.06)]",
    badge: "Most Popular",
    includes: [
      { text: "Full technical SEO audit", included: true },
      { text: "On-page optimisation (unlimited)", included: true },
      { text: "8 SEO content pieces/month", included: true },
      { text: "10 niche link placements/month", included: true },
      { text: "Keyword tracking (200 keywords)", included: true },
      { text: "Monthly performance report", included: true },
      { text: "Priority email & Slack support", included: true },
      { text: "Competitor gap analysis", included: true },
      { text: "AI visibility monitoring", included: true },
      { text: "Digital PR campaigns", included: false },
      { text: "Dedicated account manager", included: false },
    ],
    cta: "Get Started",
    ctaStyle: "bg-lime text-void hover:bg-[#F0FF6B] hover:shadow-[0_0_20px_rgba(232,255,71,0.3)]",
  },
  {
    name: "Authority",
    price: "£8,000",
    period: "/month",
    tagline: "For brands dominating their niche long-term",
    popular: false,
    color: "border-mint/30 hover:border-mint/60",
    badge: null,
    includes: [
      { text: "Full technical SEO audit", included: true },
      { text: "On-page optimisation (unlimited)", included: true },
      { text: "16 SEO content pieces/month", included: true },
      { text: "20+ niche link placements/month", included: true },
      { text: "Keyword tracking (500 keywords)", included: true },
      { text: "Weekly performance reports", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "Competitor gap analysis", included: true },
      { text: "AI visibility monitoring", included: true },
      { text: "Digital PR campaigns", included: true },
      { text: "Bi-weekly strategy calls", included: true },
    ],
    cta: "Get Started",
    ctaStyle:
      "border border-mint/40 text-mint hover:border-mint hover:shadow-[0_0_20px_rgba(0,255,178,0.2)]",
  },
];

const included = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2a7 7 0 100 14A7 7 0 009 2z" stroke="#E8FF47" strokeWidth="1.4" />
        <path d="M6 9l2 2 4-4" stroke="#E8FF47" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "No long-term contracts",
    desc: "Month-to-month by default. We earn your retention through results, not lock-in clauses.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="4" width="14" height="10" rx="2" stroke="#E8FF47" strokeWidth="1.4" />
        <path d="M2 8h14" stroke="#E8FF47" strokeWidth="1.4" />
      </svg>
    ),
    title: "Niche-specialist team",
    desc: "Your account is handled by people who specialise in your industry — not generalists.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M3 13l4-4 3 3 5-6" stroke="#E8FF47" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Transparent reporting",
    desc: "Every link placed, every keyword moved, every page updated — documented in monthly reports.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="7" stroke="#E8FF47" strokeWidth="1.4" />
        <path d="M9 5v4.5L12 11" stroke="#E8FF47" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: "Free onboarding audit",
    desc: "Every plan starts with a full technical and content audit of your site at no extra cost.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2L11.5 7h5l-4 3 1.5 5.5L9 12.5 5 15.5 6.5 10l-4-3h5L9 2z" stroke="#E8FF47" strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
    ),
    title: "White-hat only",
    desc: "No PBNs, no spam, no shortcuts. Every tactic is built to survive algorithm updates.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M3 9h12M9 3l6 6-6 6" stroke="#E8FF47" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Results-first focus",
    desc: "We measure success in leads, trials, and revenue — not just rankings and traffic.",
  },
];

const factors = [
  {
    title: "Niche competitiveness",
    desc: "iGaming and cryptocurrency are the most competitive SEO niches online. Ranking in these verticals requires more links, more content depth, and more technical rigour than most other industries.",
  },
  {
    title: "Current authority baseline",
    desc: "A site with a DR 50 and 500 existing backlinks needs a different strategy than a site launching from zero. Your current position determines how much investment is required to reach your targets.",
  },
  {
    title: "Target keyword difficulty",
    desc: "Ranking for 'online casino UK' is a different project to ranking for 'best crypto exchange for DeFi'. Keyword difficulty directly determines content and link requirements.",
  },
  {
    title: "Geographic markets",
    desc: "Multi-market SEO (UK + US + CA + AU simultaneously) requires proportionally more resource than single-market campaigns. Some markets are significantly more competitive than others.",
  },
];

const faqs = [
  {
    q: "Are there setup or onboarding fees?",
    a: "No. Every plan includes a full technical SEO and content audit as part of onboarding at no additional charge. The monthly fee covers everything from month one.",
  },
  {
    q: "Do you require a minimum contract length?",
    a: "No long-term contracts. Plans run month-to-month and can be cancelled with 30 days' notice. That said, SEO is a long-term investment — clients who commit to 6–12 months consistently see compounding returns that short-term campaigns cannot achieve.",
  },
  {
    q: "Can I upgrade or downgrade my plan?",
    a: "Yes. You can scale up or down at the start of any billing month. If your campaign hits milestones early and you want to accelerate, we make the transition seamless.",
  },
  {
    q: "Do the prices change for regulated niches like adult or crypto?",
    a: "The listed prices are our standard rates. For particularly competitive markets — top-tier iGaming operators, centralised crypto exchanges going head-to-head with Binance — we will sometimes recommend a higher investment level to achieve the targets. We are transparent about this at the proposal stage.",
  },
  {
    q: "What is included in the monthly link placements?",
    a: "All link placements are editorial, manually acquired from niche-relevant publishers. Foundation includes 4 placements, Growth includes 10, and Authority includes 20+. These are real links on real sites — not directory submissions or PBN drops. Full placement details (URL, DR, traffic, anchor) are reported monthly.",
  },
  {
    q: "What does 'AI visibility monitoring' include?",
    a: "We run regular query testing across ChatGPT, Gemini, and Perplexity to track how frequently your brand is cited in AI responses for relevant queries. Monthly reports show your AI citation rate and trends over time. Growth and Authority plans include active AEO optimisation to improve that citation rate.",
  },
  {
    q: "Do you offer one-off projects rather than retainers?",
    a: "Yes. We offer standalone technical audits, one-off link building campaigns, content projects, and site migration support. Pricing for project work is scoped individually. Contact us for a project quote.",
  },
  {
    q: "Is there a free audit before I commit?",
    a: "Yes — always. Before you commit to any plan, we review your site and provide a clear picture of your SEO opportunities, gaps, and realistic targets. No cost, no obligation.",
  },
];

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "FastSEO Pricing",
  url: "https://www.fastseosolutions.com/pricing/",
  description: "SEO pricing plans for iGaming, crypto, adult, cannabis, dental and SaaS brands.",
  mainEntity: [
    {
      "@type": "Offer",
      name: "Foundation SEO Plan",
      price: "1500",
      priceCurrency: "GBP",
      description: "Foundation SEO for brands entering competitive niches. Technical audit, on-page, content, and link building.",
      url: "https://www.fastseosolutions.com/pricing/",
    },
    {
      "@type": "Offer",
      name: "Growth SEO Plan",
      price: "3500",
      priceCurrency: "GBP",
      description: "Growth SEO for brands scaling aggressively. Full-service SEO including competitor analysis and AI monitoring.",
      url: "https://www.fastseosolutions.com/pricing/",
    },
    {
      "@type": "Offer",
      name: "Authority SEO Plan",
      price: "8000",
      priceCurrency: "GBP",
      description: "Authority SEO for brands dominating their niche. Full-service including digital PR, AEO, and dedicated management.",
      url: "https://www.fastseosolutions.com/pricing/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-void pt-[70px]">

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-5%,rgba(232,255,71,0.07),transparent)]" />
          <div className="max-w-[1160px] mx-auto px-6 py-20 lg:py-28 text-center">
            <span className="inline-flex items-center gap-2 text-lime font-body font-semibold text-[11px] tracking-[0.12em] uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
              FastSEO · Pricing
            </span>
            <h1 className="font-display font-black text-[52px] lg:text-[68px] leading-[1.0] tracking-[-2px] text-text-primary mb-5 max-w-[740px] mx-auto">
              Transparent SEO Pricing.<br />
              <span className="bg-gradient-to-r from-lime to-mint bg-clip-text text-transparent">
                Real Deliverables.
              </span>
            </h1>
            <p className="font-body text-[17px] text-text-muted max-w-[560px] mx-auto leading-relaxed mb-8">
              Three plans built around what competitive niches actually require —
              not padded packages designed to look impressive in a proposal.
              Every plan includes a free audit, niche-specialist delivery, and zero long-term contracts.
            </p>
            <div className="inline-flex items-center gap-2 bg-surface border border-border rounded-full px-4 py-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-60" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-mint" />
              </span>
              <span className="font-body text-[12px] text-text-muted">Currently accepting new clients</span>
            </div>
          </div>
        </section>

        {/* ── Pricing cards ─────────────────────────────────────────────── */}
        <section className="max-w-[1160px] mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border bg-surface p-8 transition-all duration-200 ${plan.color}`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 bg-lime text-void font-display font-bold text-[11px] tracking-[0.08em] uppercase px-4 py-1.5 rounded-full">
                      <span className="w-1 h-1 rounded-full bg-void/60" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Plan name + price */}
                <div className="mb-6 pt-2">
                  <div className="font-body text-[11px] font-bold tracking-[0.12em] uppercase text-text-faint mb-2">
                    {plan.name}
                  </div>
                  <div className="flex items-end gap-1 mb-2">
                    <span className="font-display font-black text-[48px] leading-none tracking-tight text-text-primary">
                      {plan.price}
                    </span>
                    <span className="font-body text-[15px] text-text-muted mb-2">{plan.period}</span>
                  </div>
                  <p className="font-body text-[13px] text-text-muted">{plan.tagline}</p>
                </div>

                {/* CTA */}
                <Link
                  href="/contact/"
                  className={`w-full flex items-center justify-center gap-2 font-display font-bold text-[14px] px-6 py-3.5 rounded-xl transition-all duration-200 mb-7 ${plan.ctaStyle}`}
                >
                  {plan.cta}
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M2.5 10.5l8-8M10.5 2.5H4.5M10.5 2.5v6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>

                {/* Feature list */}
                <div className="border-t border-border pt-6 flex flex-col gap-3">
                  {plan.includes.map((item) => (
                    <div key={item.text} className="flex items-start gap-3">
                      {item.included ? (
                        <svg className="shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="8" r="7" fill="rgba(232,255,71,0.1)" stroke="rgba(232,255,71,0.3)" strokeWidth="1" />
                          <path d="M5 8l2 2 4-4" stroke="#E8FF47" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg className="shrink-0 mt-0.5 opacity-30" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="8" r="7" stroke="#6B7280" strokeWidth="1" />
                          <path d="M5.5 10.5l5-5M10.5 10.5l-5-5" stroke="#6B7280" strokeWidth="1.4" strokeLinecap="round" />
                        </svg>
                      )}
                      <span className={`font-body text-[13px] leading-snug ${item.included ? "text-text-secondary" : "text-text-faint line-through decoration-border"}`}>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Enterprise card */}
          <div className="mt-6 rounded-2xl border border-border bg-surface p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1">
              <div className="font-body text-[11px] font-bold tracking-[0.12em] uppercase text-text-faint mb-2">Enterprise</div>
              <h3 className="font-display font-black text-[26px] tracking-tight text-text-primary mb-2">
                Custom plan for complex requirements
              </h3>
              <p className="font-body text-[14px] text-text-muted max-w-[580px] leading-relaxed">
                Multi-brand operators, white-label agency partnerships, large affiliate networks,
                and multi-market campaigns. We scope custom deliverables, reporting cadence, and
                team structure to match your operation — with pricing that reflects the actual
                scope, not a padded agency estimate.
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                {["Multi-site / multi-brand", "White-label available", "Custom SLA", "Dedicated team", "Weekly reporting"].map((tag) => (
                  <span key={tag} className="font-body text-[11px] font-semibold text-text-faint border border-border rounded-full px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="shrink-0 flex flex-col gap-3">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-1.5 bg-lime text-void font-display font-bold text-[14px] px-6 py-3.5 rounded-xl hover:bg-[#F0FF6B] hover:shadow-[0_0_20px_rgba(232,255,71,0.3)] transition-all whitespace-nowrap"
              >
                Discuss Custom Plan
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2.5 10.5l8-8M10.5 2.5H4.5M10.5 2.5v6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <a
                href="mailto:seo@fastseosolutions.com"
                className="text-center font-body text-[13px] text-text-muted hover:text-lime transition-colors"
              >
                seo@fastseosolutions.com
              </a>
            </div>
          </div>
        </section>

        {/* ── What's always included ─────────────────────────────────────── */}
        <section className="border-t border-border bg-surface">
          <div className="max-w-[1160px] mx-auto px-6 py-20">
            <div className="text-center mb-14">
              <h2 className="font-display font-black text-[34px] tracking-[-0.5px] text-text-primary mb-3">
                Included in every plan
              </h2>
              <p className="font-body text-[15px] text-text-muted max-w-[480px] mx-auto">
                These are not upsells. They are the baseline of how we operate with every client.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {included.map((item) => (
                <div key={item.title} className="rounded-xl border border-border bg-void p-6">
                  <div className="w-9 h-9 rounded-lg bg-lime/8 border border-lime/15 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-display font-bold text-[15px] text-text-primary mb-2">{item.title}</h3>
                  <p className="font-body text-[13px] text-text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What affects price ───────────────────────────────────────────── */}
        <section className="border-t border-border">
          <div className="max-w-[1160px] mx-auto px-6 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-14 items-start">
              <div>
                <h2 className="font-display font-black text-[32px] tracking-[-0.5px] text-text-primary mb-4">
                  What affects your SEO investment?
                </h2>
                <p className="font-body text-[15px] text-text-muted leading-relaxed mb-6">
                  The listed prices are starting points. Actual investment is shaped by the
                  factors on the right — we assess all of them during your free audit and
                  recommend only what your situation genuinely requires.
                </p>
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-1.5 bg-lime text-void font-display font-bold text-[14px] px-6 py-3.5 rounded-xl hover:bg-[#F0FF6B] hover:shadow-[0_0_20px_rgba(232,255,71,0.3)] transition-all"
                >
                  Get Free Audit
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M2.5 10.5l8-8M10.5 2.5H4.5M10.5 2.5v6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {factors.map((f, i) => (
                  <div key={i} className="rounded-xl border border-border bg-surface p-6">
                    <div className="font-display font-black text-[28px] text-lime/20 mb-3">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="font-display font-bold text-[15px] text-text-primary mb-2">{f.title}</h3>
                    <p className="font-body text-[13px] text-text-muted leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Results bar ─────────────────────────────────────────────────── */}
        <section className="border-t border-border bg-surface">
          <div className="max-w-[1160px] mx-auto px-6 py-12">
            <p className="text-center font-body text-[12px] text-text-faint uppercase tracking-[0.12em] mb-8">
              Results delivered across our plans
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { value: "0 → 180k", label: "Monthly visits · iGaming · 14 months" },
                { value: "Top 3", label: "For 60 DeFi keywords · 11 months" },
                { value: "+320%", label: "Trial signups · SaaS · 12 months" },
                { value: "2× Revenue", label: "Organic revenue · Adult · 9 months" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display font-black text-[32px] text-lime tracking-tight leading-none mb-1">
                    {s.value}
                  </div>
                  <div className="font-body text-[11px] text-text-faint leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────────────────── */}
        <section className="border-t border-border">
          <div className="max-w-[780px] mx-auto px-6 py-20">
            <h2 className="font-display font-black text-[32px] tracking-[-0.5px] text-text-primary mb-12 text-center">
              Pricing questions answered
            </h2>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <details key={i} className="group bg-surface border border-border rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none">
                    <span className="font-display font-semibold text-[15px] text-text-primary group-open:text-lime transition-colors">
                      {faq.q}
                    </span>
                    <svg
                      className="shrink-0 text-text-muted transition-transform duration-200 group-open:rotate-180"
                      width="16" height="16" viewBox="0 0 16 16" fill="none"
                    >
                      <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5">
                    <p className="font-body text-[14px] text-text-muted leading-relaxed border-t border-border/50 pt-4">
                      {faq.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ──────────────────────────────────────────────────── */}
        <section className="border-t border-border bg-surface">
          <div className="max-w-[1160px] mx-auto px-6 py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h2 className="font-display font-black text-[28px] tracking-[-0.5px] text-text-primary mb-1">
                Not sure which plan fits?
              </h2>
              <p className="font-body text-[14px] text-text-muted">
                Get a free audit — we will tell you exactly what your niche and goals require.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-1.5 bg-lime text-void font-display font-bold text-[14px] px-6 py-3.5 rounded-xl hover:bg-[#F0FF6B] hover:shadow-[0_0_20px_rgba(232,255,71,0.3)] transition-all"
              >
                Get Free Audit
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2.5 10.5l8-8M10.5 2.5H4.5M10.5 2.5v6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/case-studies/"
                className="inline-flex items-center gap-1.5 border border-border text-text-secondary font-body font-medium text-[14px] px-6 py-3.5 rounded-xl hover:border-border-strong hover:text-text-primary transition-all"
              >
                See Case Studies
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
