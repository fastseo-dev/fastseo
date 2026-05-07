import Link from "next/link";
import { LogoMark } from "./Logo";

/* ─── Data ───────────────────────────────────────────────────────────────── */

const services = [
  { label: "iGaming SEO",       href: "/igaming-seo/" },
  { label: "Crypto SEO",        href: "/cryptocurrency-seo/" },
  { label: "Adult SEO",         href: "/adult-seo/" },
  { label: "SaaS SEO",          href: "/saas-seo/" },
  { label: "Dental SEO",        href: "/dental-seo/" },
  { label: "Cannabis SEO",      href: "/marijuana-seo/" },
  { label: "AI Search (AEO)",   href: "/ai-seo-services/" },
  { label: "Link Building",     href: "/link-building-services/" },
  { label: "eCommerce SEO",     href: "/pages/ecommerce-seo" },
  { label: "Law Firm SEO",      href: "/pages/law-firm-seo" },
];

const company = [
  { label: "About",        href: "/about/" },
  { label: "Case Studies", href: "/case-studies/" },
  { label: "Blog",         href: "/blog/" },
  { label: "Contact",      href: "/contact/" },
  { label: "Niche SEO",    href: "/niche-seo/" },
  { label: "Privacy",      href: "/privacy-policy/" },
  { label: "Terms",        href: "/terms-of-service/" },
];

/* ─── Sub-components ─────────────────────────────────────────────────────── */

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="font-display font-semibold text-[11px] text-text-secondary mb-4 tracking-[0.12em] uppercase">
      {children}
    </h4>
  );
}

function FooterLink({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const cls =
    "font-body text-[13px] text-text-faint hover:text-lime transition-colors leading-none";
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/* ─── Footer ─────────────────────────────────────────────────────────────── */

export default function Footer() {
  return (
    <footer className="relative bg-void border-t border-border">
      {/* Gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime/30 to-transparent" />

      <div className="max-w-[1160px] mx-auto px-6 pt-16 pb-8">

        {/* ── Column grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4 w-fit">
              <LogoMark size={36} />
              <span className="font-display font-black text-xl tracking-tight text-text-primary">
                Fast<span className="text-lime">SEO</span>
                <sup className="text-[9px] font-bold text-mint ml-0.5 align-super">AI</sup>
              </span>
            </Link>

            <p className="font-body text-[13px] text-text-faint leading-relaxed max-w-[220px]">
              Specialist SEO for regulated and competitive niches. Ranked on Google,
              recommended by AI.
            </p>

            {/* Status badge */}
            <div className="mt-5 inline-flex items-center gap-2 bg-surface border border-border rounded-full px-3 py-1.5">
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-60" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-mint" />
              </span>
              <span className="font-body text-[11px] text-text-muted">Accepting new clients</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <FooterHeading>Services</FooterHeading>
            <ul className="flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <FooterLink href={s.href}>{s.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <FooterHeading>Company</FooterHeading>
            <ul className="flex flex-col gap-2.5">
              {company.map((c) => (
                <li key={c.href}>
                  <FooterLink href={c.href}>{c.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <FooterHeading>Contact</FooterHeading>
            <ul className="flex flex-col gap-3">

              {/* Email */}
              <li>
                <a
                  href="mailto:seo@fastseosolutions.com"
                  className="group flex items-start gap-2.5 font-body text-[13px] text-text-faint hover:text-lime transition-colors"
                >
                  <svg className="mt-[1px] shrink-0 opacity-50 group-hover:opacity-100 transition-opacity" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <rect x="1" y="3" width="12" height="8.5" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M1 5l6 3.5L13 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                  seo@fastseosolutions.com
                </a>
              </li>

              {/* Response time */}
              <li className="flex items-center gap-2.5">
                <svg className="shrink-0 text-text-faint opacity-50" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M7 4v3.25l2 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-body text-[13px] text-text-faint">Replies within 24 hours</span>
              </li>

              {/* Social links */}
              <li className="mt-1 flex items-center gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex items-center justify-center w-8 h-8 rounded-lg bg-surface border border-border text-text-faint hover:text-lime hover:border-lime/40 transition-all"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                    <path d="M2.5 1C1.67 1 1 1.67 1 2.5S1.67 4 2.5 4 4 3.33 4 2.5 3.33 1 2.5 1zM1.25 5.25h2.5V13h-2.5V5.25zM5.5 5.25H8v1.06h.04A2.75 2.75 0 0 1 10.5 5c2.63 0 3.12 1.73 3.12 3.98V13h-2.5V9.5c0-.93-.02-2.13-1.3-2.13-1.3 0-1.5 1.01-1.5 2.06V13H5.5V5.25z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X / Twitter"
                  className="flex items-center justify-center w-8 h-8 rounded-lg bg-surface border border-border text-text-faint hover:text-lime hover:border-lime/40 transition-all"
                >
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="currentColor">
                    <path d="M7.67 5.52 12.2 0h-1.07L7.17 4.8 4.23 0H.5l4.77 6.94L.5 13h1.07l4.17-4.85L8.77 13H12.5L7.67 5.52zm-1.48 1.72-.48-.69L1.96.9h1.65l3.1 4.43.48.69 4.02 5.75H9.56L6.19 7.24z" />
                  </svg>
                </a>
              </li>
            </ul>

            {/* CTA */}
            <div className="mt-6">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-1.5 bg-lime text-void font-display font-bold text-[12px] px-4 py-2.5 rounded-lg hover:bg-[#F0FF6B] hover:shadow-[0_0_16px_rgba(232,255,71,0.3)] hover:scale-[1.03] active:scale-[0.97] transition-all"
              >
                Get Free Audit
                <svg width="11" height="11" viewBox="0 0 13 13" fill="none">
                  <path d="M2.5 10.5l8-8M10.5 2.5H4.5M10.5 2.5v6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span className="font-body text-[12px] text-text-faint">
            © 2026 FastSEO Solutions. All rights reserved.
          </span>
          <span className="font-body text-[11px] text-text-faint/50">
            Built with AI · Ranked by data
          </span>
        </div>
      </div>
    </footer>
  );
}
