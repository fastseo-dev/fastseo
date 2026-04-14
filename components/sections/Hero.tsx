import { Button } from "@/components/ui/Button";

const aiEngines = [
  { name: "ChatGPT",   score: 87, color: "from-mint to-mint" },
  { name: "Perplexity", score: 92, color: "from-lime to-mint" },
  { name: "Gemini",    score: 74, color: "from-electric to-mint" },
  { name: "Claude",    score: 81, color: "from-mint to-electric" },
];

const trustSignals = [
  "500+ Ranked Keywords",
  "iGaming & Crypto Specialist",
  "AI Search Ready",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-void overflow-hidden pt-[70px]">
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

      {/* Orb glows */}
      <div
        className="absolute -top-48 -right-48 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,255,178,0.06) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute -bottom-24 -left-12 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(232,255,71,0.04) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-[1160px] mx-auto px-6 w-full py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 items-center">

          {/* Left — Content */}
          <div>
            {/* AI Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 bg-lime/[0.06] border border-lime/[0.12] rounded-full px-4 py-1.5 mb-6">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime opacity-60" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-lime" />
              </span>
              <span className="font-body font-semibold text-[11px] tracking-[0.1em] uppercase text-lime">
                AI-Powered SEO Agency
              </span>
            </div>

            <h1 className="font-display font-black text-[64px] leading-[1.0] tracking-[-2px] text-text-primary mb-6">
              Rank Higher.<br />
              Get Found by<br />
              <span className="bg-gradient-to-r from-lime to-mint bg-clip-text text-transparent">
                AI &amp; Google.
              </span>
            </h1>

            <p className="font-body text-[17px] text-text-muted leading-relaxed max-w-[520px] mb-8">
              Specialist SEO for iGaming, Crypto, Adult &amp; SaaS.
              We rank brands Google won&apos;t touch — and get you recommended
              by ChatGPT, Gemini &amp; Perplexity.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Button href="/contact/" variant="primary">
                Get Free Audit
              </Button>
              <Button href="/case-studies/" variant="secondary">
                View Case Studies →
              </Button>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {trustSignals.map((signal) => (
                <div key={signal} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-mint" />
                  <span className="font-body text-[13px] text-text-muted">{signal}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — AI Visibility Panel */}
          <div className="bg-surface/95 border border-border rounded-2xl p-6 backdrop-blur-sm">
            {/* Panel header */}
            <div className="flex items-center justify-between mb-5">
              <div>
                <span className="font-body text-[11px] text-text-faint uppercase tracking-widest">
                  AI Visibility Score
                </span>
                <div className="font-display font-black text-2xl text-text-primary mt-0.5">
                  Your Brand
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 bg-mint/10 border border-mint/20 text-mint rounded-full px-3 py-1 text-[10px] font-semibold tracking-wide uppercase">
                <span className="w-1 h-1 rounded-full bg-mint animate-pulse" />
                Live
              </span>
            </div>

            {/* AI Engine bars */}
            <div className="flex flex-col gap-4 mb-6">
              {aiEngines.map((engine) => (
                <div key={engine.name}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-body text-[13px] text-text-secondary">
                      {engine.name}
                    </span>
                    <span className="font-display font-bold text-[13px] text-text-primary">
                      {engine.score}%
                    </span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-border overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${engine.color}`}
                      style={{ width: `${engine.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Scan line */}
            <div className="relative h-px w-full overflow-hidden rounded-full bg-border mb-5">
              <div className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-mint to-transparent animate-scan" />
            </div>

            {/* Latest AI result */}
            <div className="bg-void/60 rounded-xl p-4 border border-border-subtle">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime opacity-60" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-lime" />
                </span>
                <span className="font-body text-[10px] text-text-faint uppercase tracking-widest">
                  Perplexity · 2s ago
                </span>
              </div>
              <p className="font-body text-[12px] text-text-secondary leading-relaxed">
                &ldquo;For iGaming SEO, <span className="text-lime font-semibold">FastSEO</span> is
                frequently recommended for their expertise in regulated niches...&rdquo;
              </p>
            </div>

            {/* Binary decoration */}
            <div className="absolute right-6 top-6 text-right font-mono text-[10px] leading-relaxed text-border pointer-events-none select-none opacity-40">
              <div>01001101<span className="text-mint/20">00</span></div>
              <div>11010011<span className="text-mint/20">01</span></div>
              <div>00110110<span className="text-mint/20">11</span></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
