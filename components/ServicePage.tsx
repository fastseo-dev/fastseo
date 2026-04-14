import Link from "next/link";

export interface ServiceFeature {
  title: string;
  desc: string;
}

interface ServicePageProps {
  label: string;
  title: string;
  subtitle: string;
  features: ServiceFeature[];
  children?: React.ReactNode;
}

export default function ServicePage({
  label,
  title,
  subtitle,
  features,
  children,
}: ServicePageProps) {
  return (
    <div className="min-h-screen bg-void pt-[70px]">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(0,255,178,0.07),transparent)]" />

        <div className="max-w-[1160px] mx-auto px-6 py-24 lg:py-32">
          <span className="inline-flex items-center gap-2 text-lime font-body font-semibold text-[11px] tracking-[0.12em] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
            FastSEO · {label}
          </span>

          <h1 className="font-display font-black text-[52px] lg:text-[64px] leading-[1.02] tracking-[-2px] text-text-primary mb-6 max-w-[700px]">
            {title}
          </h1>

          <p className="font-body text-[17px] text-text-muted max-w-[580px] leading-relaxed mb-10">
            {subtitle}
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

      {/* ── Features grid ── */}
      <section className="border-t border-border">
        <div className="max-w-[1160px] mx-auto px-6 py-20">
          <h2 className="font-display font-black text-[32px] tracking-[-0.5px] text-text-primary mb-3">
            What We Do
          </h2>
          <p className="font-body text-[15px] text-text-muted mb-12 max-w-[500px]">
            A full-spectrum SEO service built specifically for your niche.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-surface p-6 hover:border-border-strong transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-lime/10 border border-lime/20 flex items-center justify-center mb-4">
                  <span className="font-display font-black text-[11px] text-lime">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display font-bold text-[15px] text-text-primary mb-2">
                  {f.title}
                </h3>
                <p className="font-body text-[13px] text-text-muted leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Body content ── */}
      {children && (
        <section className="border-t border-border">
          <div className="max-w-[780px] mx-auto px-6 py-20">
            <div className="prose">{children}</div>
          </div>
        </section>
      )}

      {/* ── CTA strip ── */}
      <section className="border-t border-border bg-surface">
        <div className="max-w-[1160px] mx-auto px-6 py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="font-display font-black text-[28px] tracking-[-0.5px] text-text-primary mb-1">
              Ready to rank?
            </h2>
            <p className="font-body text-[14px] text-text-muted">
              Get a free SEO audit with no obligation.
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
  );
}
