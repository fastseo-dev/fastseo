import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found — FastSEO",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-void pt-[70px] flex items-center">
      <div className="max-w-[1160px] mx-auto px-6 py-24 w-full">
        <div className="max-w-[540px]">
          <span className="font-display font-black text-[120px] leading-none text-lime/10 select-none block mb-2">
            404
          </span>
          <h1 className="font-display font-black text-[36px] leading-[1.1] tracking-[-1px] text-text-primary mb-4">
            Page not found
          </h1>
          <p className="font-body text-[16px] text-text-muted leading-relaxed mb-8">
            The page you are looking for does not exist or has been moved.
            If you followed a link from somewhere, let us know at{" "}
            <a
              href="mailto:hello@fastseosolutions.com"
              className="text-lime hover:underline"
            >
              hello@fastseosolutions.com
            </a>
            .
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 bg-lime text-void font-display font-bold text-[14px] px-6 py-3.5 rounded-lg hover:bg-[#F0FF6B] hover:shadow-[0_0_20px_rgba(232,255,71,0.3)] transition-all"
            >
              Back to Home
            </Link>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-1.5 border border-border text-text-secondary font-body font-medium text-[14px] px-6 py-3.5 rounded-lg hover:border-border-strong hover:text-text-primary transition-all"
            >
              Contact Us
            </Link>
          </div>

          <div className="mt-14 pt-8 border-t border-border">
            <p className="font-body text-[13px] text-text-faint mb-4">Looking for a service page?</p>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "iGaming SEO", href: "/igaming-seo/" },
                { label: "Crypto SEO", href: "/cryptocurrency-seo/" },
                { label: "Adult SEO", href: "/adult-seo/" },
                { label: "SaaS SEO", href: "/saas-seo/" },
                { label: "Link Building", href: "/link-building-services/" },
                { label: "Case Studies", href: "/case-studies/" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-[13px] text-text-muted border border-border rounded-full px-3 py-1 hover:text-lime hover:border-lime/30 transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
