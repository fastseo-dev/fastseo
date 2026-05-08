import type { Metadata } from "next";
import Link from "next/link";
import { authors, buildPersonSchema } from "@/lib/authors";

const BASE = "https://www.fastseosolutions.com";

export const metadata: Metadata = {
  title: "Our Team — SEO Specialists for iGaming, Adult, Crypto & Regulated Niches | FastSEO",
  description:
    "Meet the FastSEO team — specialist SEO strategists, technical SEO experts, link builders, and content strategists covering iGaming, adult, crypto, cannabis, and other restricted niches.",
  alternates: { canonical: `${BASE}/team/` },
  openGraph: {
    title: "Our Team — SEO Specialists for Regulated Niches | FastSEO",
    description:
      "7 specialist SEO professionals covering iGaming SEO, adult SEO, crypto SEO, technical SEO, link building, and E-E-A-T content strategy.",
    url: `${BASE}/team/`,
  },
  robots: { index: true, follow: true },
};

const departmentOrder = ["Strategy", "Technical", "Link Building", "Content", "Specialist"];

const schemaItemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "FastSEO Team",
  description:
    "Specialist SEO team covering iGaming, adult content, cryptocurrency, cannabis, and other regulated verticals.",
  url: `${BASE}/team/`,
  numberOfItems: authors.length,
  itemListElement: authors.map((a, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: buildPersonSchema(a, BASE),
  })),
};

const departmentColors: Record<string, string> = {
  Strategy:     "text-lime/80    bg-lime/8    border-lime/20",
  Technical:    "text-mint/80    bg-mint/8    border-mint/20",
  "Link Building": "text-electric/80 bg-electric/8 border-electric/20",
  Content:      "text-lime/80    bg-lime/8    border-lime/20",
  Specialist:   "text-mint/80    bg-mint/8    border-mint/20",
};

const avatarColors: Record<string, string> = {
  Strategy:     "bg-lime/15 text-lime",
  Technical:    "bg-mint/15 text-mint",
  "Link Building": "bg-electric/15 text-electric",
  Content:      "bg-lime/15 text-lime",
  Specialist:   "bg-mint/15 text-mint",
};

export default function TeamPage() {
  const sorted = [...authors].sort(
    (a, b) => departmentOrder.indexOf(a.department) - departmentOrder.indexOf(b.department)
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaItemList) }}
      />

      <div className="min-h-screen bg-void pt-[70px]">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-5%,rgba(232,255,71,0.05),transparent)]" />
          <div className="max-w-[1160px] mx-auto px-6 py-20 lg:py-28">
            <span className="inline-flex items-center gap-2 text-lime font-body font-semibold text-[11px] tracking-[0.12em] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
              FastSEO · The Team
            </span>
            <h1 className="font-display font-black text-[52px] lg:text-[64px] leading-[1.02] tracking-[-2px] text-text-primary mb-6 max-w-[700px]">
              Specialists, Not Generalists.
            </h1>
            <p className="font-body text-[17px] text-text-muted max-w-[600px] leading-relaxed">
              Every FastSEO team member works exclusively in the niches they cover.
              No account managers passing work to juniors — your campaign is run by the
              specialist you see below.
            </p>
          </div>
        </section>

        {/* ── Team grid ── */}
        <section className="max-w-[1160px] mx-auto px-6 py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sorted.map((member) => {
              const avatarCls = avatarColors[member.department] ?? "bg-lime/15 text-lime";
              const deptCls   = departmentColors[member.department] ?? departmentColors.Strategy;

              return (
                <div
                  key={member.slug}
                  className="group rounded-xl bg-surface border border-border hover:border-border-strong transition-all duration-200 p-7 flex flex-col"
                >
                  {/* Avatar + name row */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className={`shrink-0 w-14 h-14 rounded-xl flex items-center justify-center overflow-hidden ${avatarCls}`}>
                      {member.photo ? (
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="font-display font-black text-[18px]">
                          {member.initials}
                        </span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-display font-bold text-[16px] text-text-primary leading-tight mb-0.5">
                        {member.name}
                      </p>
                      <p className="font-body text-[12px] text-text-muted">
                        {member.title}
                      </p>
                    </div>
                  </div>

                  {/* Department badge */}
                  <div className="mb-4">
                    <span className={`inline-block font-body text-[10px] font-semibold tracking-[0.1em] uppercase border rounded-full px-2.5 py-1 ${deptCls}`}>
                      {member.department}
                    </span>
                  </div>

                  {/* Bio */}
                  <p className="font-body text-[13px] text-text-muted leading-relaxed flex-1 mb-5">
                    {member.bio}
                  </p>

                  {/* Expertise tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {member.expertise.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="font-body text-[10px] text-text-faint bg-void border border-border rounded-md px-2 py-1"
                      >
                        {skill}
                      </span>
                    ))}
                    {member.expertise.length > 3 && (
                      <span className="font-body text-[10px] text-text-faint bg-void border border-border rounded-md px-2 py-1">
                        +{member.expertise.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Profile link */}
                  <Link
                    href={`/author/${member.slug}/`}
                    className="inline-flex items-center gap-1.5 font-body text-[12px] font-medium text-text-faint hover:text-lime transition-colors mt-auto"
                  >
                    View full profile
                    <svg width="11" height="11" viewBox="0 0 13 13" fill="none">
                      <path d="M2.5 10.5l8-8M10.5 2.5H4.5M10.5 2.5v6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Why specialist ── */}
        <section className="border-y border-border bg-surface">
          <div className="max-w-[1160px] mx-auto px-6 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display font-black text-[36px] lg:text-[42px] leading-[1.1] tracking-[-1px] text-text-primary mb-4">
                  Why specialist SEO matters in restricted niches
                </h2>
                <p className="font-body text-[15px] text-text-muted leading-relaxed mb-4">
                  iGaming, adult content, cryptocurrency, and cannabis each have their own
                  technical compliance requirements, content restrictions, and link acquisition
                  environments. A generalist SEO team encounters these as edge cases. Our team
                  encounters them as daily practice.
                </p>
                <p className="font-body text-[15px] text-text-muted leading-relaxed">
                  Every specialist on our team has worked exclusively in their vertical for
                  years — building the publisher relationships, compliance knowledge, and
                  algorithm-specific intuition that only comes from operating in one niche at depth.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "7",     label: "Niche specialists" },
                  { value: "40+",   label: "Years combined experience" },
                  { value: "6",     label: "Regulated verticals covered" },
                  { value: "100%",  label: "Specialist-led, no juniors" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl bg-void border border-border p-5">
                    <div className="font-display font-black text-[36px] text-lime leading-none mb-1">
                      {stat.value}
                    </div>
                    <div className="font-body text-[12px] text-text-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="max-w-[1160px] mx-auto px-6 py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="font-display font-black text-[28px] tracking-[-0.5px] text-text-primary mb-1">
              Talk to the specialist for your niche
            </h2>
            <p className="font-body text-[14px] text-text-muted">
              Free audit — we will show you exactly what your site needs.
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
        </section>

      </div>
    </>
  );
}
