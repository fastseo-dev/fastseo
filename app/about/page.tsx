import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About FastSEO — Specialist SEO Agency for Regulated & Competitive Niches",
  description:
    "FastSEO is a specialist SEO agency for iGaming, cryptocurrency, adult, cannabis, dental and SaaS since 2018. We rank brands in the industries most agencies won't touch.",
  alternates: { canonical: "https://www.fastseosolutions.com/about/" },
};

const values = [
  {
    title: "Niche Expertise",
    desc: "We do not work across every industry. We go deep in the niches we understand — iGaming, crypto, adult, cannabis, dental, SaaS — and build genuine expertise that generalist agencies cannot match.",
  },
  {
    title: "Transparency",
    desc: "Monthly reporting covers every link placed, every keyword moved, every page improved. No vanity metrics, no inflated dashboards — just clear data on what we did and what it delivered.",
  },
  {
    title: "White-Hat Only",
    desc: "Every tactic we use is built for long-term durability. No PBNs, no spam, no shortcuts that create future penalties. We build organic foundations that last.",
  },
  {
    title: "Results Obsession",
    desc: "Rankings are a means, not the end. We measure success by the business outcomes that matter — leads, trials, bookings, and revenue — not vanity position tracking.",
  },
];

const stats = [
  { value: "2018", label: "Founded" },
  { value: "6+", label: "Specialist niches" },
  { value: "180k+", label: "Monthly visits delivered" },
  { value: "320%", label: "Best-case signup growth" },
];

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FastSEO",
  url: "https://www.fastseosolutions.com",
  foundingDate: "2018",
  description:
    "Specialist SEO agency for iGaming, cryptocurrency, adult, cannabis, dental and SaaS industries.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "seo@fastseosolutions.com",
    contactType: "customer service",
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      <div className="min-h-screen bg-void pt-[70px]">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-5%,rgba(0,255,178,0.06),transparent)]" />
          <div className="max-w-[1160px] mx-auto px-6 py-20 lg:py-28">
            <span className="inline-flex items-center gap-2 text-mint font-body font-semibold text-[11px] tracking-[0.12em] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse" />
              About FastSEO
            </span>
            <h1 className="font-display font-black text-[52px] lg:text-[64px] leading-[1.02] tracking-[-2px] text-text-primary mb-6 max-w-[700px]">
              The SEO Agency for Niches Others Won&apos;t Touch
            </h1>
            <p className="font-body text-[17px] text-text-muted max-w-[580px] leading-relaxed">
              Since 2018, FastSEO has specialised in delivering organic growth for iGaming,
              cryptocurrency, adult, cannabis, dental, and SaaS businesses — the industries
              where specialist knowledge is not optional, it is the entire game.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-border">
          <div className="max-w-[1160px] mx-auto px-6 py-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display font-black text-[40px] text-lime tracking-tight leading-none mb-1">
                    {s.value}
                  </div>
                  <div className="font-body text-[13px] text-text-muted">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="border-b border-border">
          <div className="max-w-[780px] mx-auto px-6 py-20">
            <h2 className="font-display font-black text-[32px] tracking-[-0.5px] text-text-primary mb-8">
              Our Story
            </h2>
            <div className="prose">
              <p>
                FastSEO was founded in 2018 with a single observation: the businesses that
                needed SEO expertise the most — regulated, restricted, and competitive industries —
                were being failed by generalist agencies that lacked the knowledge, the networks,
                and frankly the willingness to serve them.
              </p>
              <p>
                An iGaming operator needs a link building network built inside the gambling
                industry. A crypto exchange needs content that passes Google's E-E-A-T threshold
                for YMYL topics. An adult platform needs an SEO partner who knows exactly which
                link sources will and will not work. A dental practice needs local SEO expertise
                specific to healthcare.
              </p>
              <p>
                We built FastSEO to fill that gap. Every specialism we offer is backed by years
                of niche-specific testing, learning, and relationship building. The result is an
                agency that can deliver organic growth in verticals where generic tactics fail.
              </p>
              <h3>What We Do Differently</h3>
              <p>
                We work in fewer niches than most agencies — deliberately. Depth of expertise in
                a handful of industries outperforms shallow coverage of many. Every member of our
                team is embedded in the niches we serve, staying current on algorithm changes,
                regulatory developments, and competitor movements that affect our clients&apos;
                rankings.
              </p>
              <p>
                We are also one of the few agencies operating at the intersection of traditional
                SEO and the emerging world of AI search (AEO). As ChatGPT, Gemini, and Perplexity
                reshape how people find information, we are building the strategies that make
                our clients visible in both worlds simultaneously.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="border-b border-border">
          <div className="max-w-[1160px] mx-auto px-6 py-20">
            <h2 className="font-display font-black text-[32px] tracking-[-0.5px] text-text-primary mb-12">
              How We Work
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {values.map((v, i) => (
                <div key={i} className="rounded-xl border border-border bg-surface p-6">
                  <h3 className="font-display font-bold text-[16px] text-lime mb-3">{v.title}</h3>
                  <p className="font-body text-[14px] text-text-muted leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-surface">
          <div className="max-w-[1160px] mx-auto px-6 py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h2 className="font-display font-black text-[28px] tracking-[-0.5px] text-text-primary mb-1">
                Work with us
              </h2>
              <p className="font-body text-[14px] text-text-muted">
                Get a free SEO audit — we will show you exactly what we would do for your site.
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
