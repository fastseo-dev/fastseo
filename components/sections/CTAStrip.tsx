import { Button } from "@/components/ui/Button";

export default function CTAStrip() {
  return (
    <section className="relative bg-void overflow-hidden border-y border-border">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(232,255,71,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(232,255,71,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(0,255,178,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-[1160px] mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-lime/[0.06] border border-lime/[0.12] rounded-full px-4 py-1.5 mb-6">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime opacity-60" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-lime" />
          </span>
          <span className="font-body font-semibold text-[11px] tracking-[0.1em] uppercase text-lime">
            Free SEO Audit
          </span>
        </div>

        <h2 className="font-display font-black text-[48px] leading-[1.05] tracking-[-1.5px] text-text-primary mb-5">
          Ready to dominate<br />
          <span className="bg-gradient-to-r from-lime to-mint bg-clip-text text-transparent">
            search &amp; AI?
          </span>
        </h2>
        <p className="font-body text-[17px] text-text-muted leading-relaxed max-w-[480px] mx-auto mb-10">
          Get a free SEO and AI visibility audit for your brand. No obligations,
          no sales pitch — just actionable insights.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/contact/" variant="primary">
            Get Free Audit
          </Button>
          <Button href="/case-studies/" variant="secondary">
            See Our Work →
          </Button>
        </div>
      </div>
    </section>
  );
}
