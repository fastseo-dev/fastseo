import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact FastSEO — Get a Free SEO Audit",
  description:
    "Get in touch with FastSEO for a free SEO audit. We work with iGaming, crypto, adult, cannabis, dental and SaaS brands. Replies within 24 hours.",
  alternates: { canonical: "https://www.fastseosolutions.com/contact/" },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact FastSEO",
  url: "https://www.fastseosolutions.com/contact/",
  mainEntity: {
    "@type": "Organization",
    name: "FastSEO",
    email: "hello@fastseosolutions.com",
    url: "https://www.fastseosolutions.com",
  },
};

const whatToExpect = [
  {
    step: "01",
    title: "Free SEO Audit",
    desc: "We review your site and niche — identifying the biggest ranking opportunities and any critical issues holding you back.",
  },
  {
    step: "02",
    title: "Strategy Call",
    desc: "A focused 30-minute call to walk through our findings and propose a tailored plan for your specific vertical and goals.",
  },
  {
    step: "03",
    title: "Custom Proposal",
    desc: "A clear, no-fluff proposal with scope, timeline, and pricing based on your actual situation — not a generic package.",
  },
  {
    step: "04",
    title: "Execution",
    desc: "We get to work. Monthly reports keep you informed of every action taken and every metric moved.",
  },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <div className="min-h-screen bg-void pt-[70px]">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-5%,rgba(232,255,71,0.05),transparent)]" />
          <div className="max-w-[1160px] mx-auto px-6 py-20 lg:py-28">
            <span className="inline-flex items-center gap-2 text-lime font-body font-semibold text-[11px] tracking-[0.12em] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
              FastSEO · Contact
            </span>
            <h1 className="font-display font-black text-[52px] lg:text-[64px] leading-[1.02] tracking-[-2px] text-text-primary mb-6 max-w-[700px]">
              Get a Free SEO Audit
            </h1>
            <p className="font-body text-[17px] text-text-muted max-w-[540px] leading-relaxed mb-10">
              Tell us about your brand and niche. We will review your site and come back with
              a clear picture of your ranking opportunities — at no cost and with no obligation.
            </p>

            {/* Contact card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[720px]">
              <a
                href="mailto:hello@fastseosolutions.com"
                className="group flex items-start gap-4 rounded-xl border border-border bg-surface p-6 hover:border-lime/40 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-lime/10 border border-lime/20 flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" stroke="#E8FF47" strokeWidth="1.3" />
                    <path d="M1.5 6l6.5 4L14.5 6" stroke="#E8FF47" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <div className="font-display font-semibold text-[14px] text-text-primary mb-1 group-hover:text-lime transition-colors">
                    Email Us
                  </div>
                  <div className="font-body text-[13px] text-text-muted break-all">
                    hello@fastseosolutions.com
                  </div>
                  <div className="font-body text-[11px] text-text-faint mt-1">
                    Replies within 24 hours
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-4 rounded-xl border border-border bg-surface p-6">
                <div className="w-10 h-10 rounded-lg bg-mint/10 border border-mint/20 flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="6" stroke="#00FFB2" strokeWidth="1.3" />
                    <path d="M8 5v3.5L10.5 10" stroke="#00FFB2" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="font-display font-semibold text-[14px] text-text-primary mb-1">
                    Response Time
                  </div>
                  <div className="font-body text-[13px] text-text-muted">
                    Within 24 hours
                  </div>
                  <div className="font-body text-[11px] text-text-faint mt-1">
                    Mon–Fri, typically same day
                  </div>
                </div>
              </div>
            </div>

            {/* Status badge */}
            <div className="mt-6 inline-flex items-center gap-2 bg-surface border border-border rounded-full px-4 py-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-60" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-mint" />
              </span>
              <span className="font-body text-[12px] text-text-muted">Currently accepting new clients</span>
            </div>
          </div>
        </section>

        {/* What to expect */}
        <section className="border-b border-border">
          <div className="max-w-[1160px] mx-auto px-6 py-20">
            <h2 className="font-display font-black text-[32px] tracking-[-0.5px] text-text-primary mb-12">
              What Happens Next
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {whatToExpect.map((w) => (
                <div key={w.step} className="rounded-xl border border-border bg-surface p-6">
                  <div className="font-display font-black text-[28px] text-lime/30 mb-4">{w.step}</div>
                  <h3 className="font-display font-bold text-[15px] text-text-primary mb-2">{w.title}</h3>
                  <p className="font-body text-[13px] text-text-muted leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who we work with */}
        <section className="border-b border-border">
          <div className="max-w-[780px] mx-auto px-6 py-20">
            <h2 className="font-display font-black text-[28px] tracking-[-0.5px] text-text-primary mb-6">
              We Work With
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                "iGaming & Casino",
                "Cryptocurrency & DeFi",
                "Adult Platforms",
                "Cannabis & CBD",
                "Dental Practices",
                "SaaS Companies",
                "Link Building Clients",
                "Content Projects",
                "AI Search Visibility",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime shrink-0" />
                  <span className="font-body text-[13px] text-text-muted">{item}</span>
                </div>
              ))}
            </div>
            <p className="font-body text-[14px] text-text-muted mt-8 leading-relaxed">
              Not sure if we cover your niche?{" "}
              <a href="mailto:hello@fastseosolutions.com" className="text-lime hover:underline">
                Email us
              </a>{" "}
              — if we can help, we will tell you honestly. If we cannot, we will tell you that too.
            </p>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-surface border-t border-border">
          <div className="max-w-[1160px] mx-auto px-6 py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h2 className="font-display font-black text-[28px] tracking-[-0.5px] text-text-primary mb-1">
                Ready to rank?
              </h2>
              <p className="font-body text-[14px] text-text-muted">
                Email us at{" "}
                <a href="mailto:hello@fastseosolutions.com" className="text-lime hover:underline">
                  hello@fastseosolutions.com
                </a>
              </p>
            </div>
            <a
              href="mailto:hello@fastseosolutions.com"
              className="shrink-0 inline-flex items-center gap-1.5 bg-lime text-void font-display font-bold text-[14px] px-6 py-3.5 rounded-lg hover:bg-[#F0FF6B] hover:shadow-[0_0_20px_rgba(232,255,71,0.3)] transition-all"
            >
              Email Us Now
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2.5 10.5l8-8M10.5 2.5H4.5M10.5 2.5v6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
