import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Content Writing',
  description: 'Expert SEO content for regulated niches. E-E-A-T optimised articles and landing pages.',
  alternates: {
    canonical: 'https://www.fastseosolutions.com/content-writing-services/',
  },
};

export default function ContentWritingServicesPage() {
  return (
    <div className="min-h-screen bg-void pt-[70px]">
      <div className="max-w-[1160px] mx-auto px-6 py-24">
        <span className="inline-flex items-center gap-2 text-lime font-body font-semibold text-[11px] tracking-[0.12em] uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
          FastSEO
        </span>
        <h1 className="font-display font-black text-[56px] leading-[1.05] tracking-[-1.5px] text-text-primary mb-6">
          SEO Content Writing
        </h1>
        <p className="font-body text-[17px] text-text-muted max-w-[600px] leading-relaxed">
          Expert SEO content for regulated niches. E-E-A-T optimised articles and landing pages.
        </p>
        <div className="mt-8">
          <a
            href="/contact/"
            className="inline-flex items-center bg-lime text-void font-display font-bold text-[15px] px-7 py-3.5 rounded-lg hover:bg-[#F0FF6B] transition-colors"
          >
            Get Free Audit
          </a>
        </div>
      </div>
    </div>
  );
}
