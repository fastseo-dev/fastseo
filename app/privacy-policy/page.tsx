import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'FastSEO Privacy Policy. How we collect, use and protect your data.',
  alternates: {
    canonical: 'https://www.fastseosolutions.com/privacy-policy/',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-void pt-[70px]">
      <div className="max-w-[1160px] mx-auto px-6 py-24">
        <span className="inline-flex items-center gap-2 text-lime font-body font-semibold text-[11px] tracking-[0.12em] uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
          FastSEO
        </span>
        <h1 className="font-display font-black text-[56px] leading-[1.05] tracking-[-1.5px] text-text-primary mb-6">
          Privacy Policy
        </h1>
        <p className="font-body text-[17px] text-text-muted max-w-[600px] leading-relaxed">
          FastSEO Privacy Policy. How we collect, use and protect your data.
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
