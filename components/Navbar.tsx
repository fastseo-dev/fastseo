"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoMark } from "./Logo";

/* ─── Navigation data ───────────────────────────────────────────────────── */

const serviceLinks = [
  { label: "iGaming SEO",       href: "/igaming-seo/" },
  { label: "Crypto SEO",        href: "/cryptocurrency-seo/" },
  { label: "Adult SEO",         href: "/adult-seo/" },
  { label: "Dental SEO",        href: "/dental-seo/" },
  { label: "Marijuana SEO",     href: "/marijuana-seo/" },
  { label: "SaaS SEO",          href: "/saas-seo/" },
  { label: "AI SEO Services",   href: "/ai-seo-services/" },
];

const linkBuildingLinks = [
  { label: "All Link Building",      href: "/link-building-services/" },
  { label: "iGaming Link Building",  href: "/igaming-link-building/" },
  { label: "Crypto Link Building",   href: "/cryptocurrency-linkbuilding/" },
  { label: "Adult Link Building",    href: "/adult-linkbuilding/" },
];

const topNavLinks = [
  { label: "Services",      href: "/niche-seo/",              dropdown: serviceLinks },
  { label: "Link Building", href: "/link-building-services/", dropdown: linkBuildingLinks },
  { label: "AI Search",     href: "/ai-seo-services/",        dropdown: null },
  { label: "Pricing",       href: "/pricing/",                dropdown: null },
  { label: "Case Studies",  href: "/case-studies/",           dropdown: null },
  { label: "Blog",          href: "/blog/",                   dropdown: null },
  { label: "About",         href: "/about/",                  dropdown: null },
];

/* ─── Dropdown component ─────────────────────────────────────────────────── */

function NavDropdown({
  links,
  visible,
}: {
  links: { label: string; href: string }[];
  visible: boolean;
}) {
  return (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 rounded-xl border border-border bg-surface shadow-2xl shadow-black/60 overflow-hidden transition-all duration-200 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-1 pointer-events-none"
      }`}
    >
      <div className="py-1.5">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block px-4 py-2.5 text-[13px] font-body text-text-secondary hover:text-lime hover:bg-void/60 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ─── Navbar ─────────────────────────────────────────────────────────────── */

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* close mobile menu on route change */
  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href.replace(/\/$/, ""));

  const handleMouseEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[70px] flex items-center transition-all duration-300 ${
        scrolled
          ? "bg-void/97 backdrop-blur-lg border-b border-border shadow-lg shadow-black/40"
          : "bg-void/70 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="max-w-[1160px] mx-auto px-6 w-full flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <LogoMark size={36} />
          <span className="font-display font-black text-xl tracking-tight text-text-primary">
            Fast<span className="text-lime">SEO</span>
            <sup className="text-[9px] font-bold text-mint ml-0.5 align-super">AI</sup>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-7">
          {topNavLinks.map((link) => (
            <li
              key={link.href}
              className="relative"
              onMouseEnter={() => link.dropdown && handleMouseEnter(link.label)}
              onMouseLeave={() => link.dropdown && handleMouseLeave()}
            >
              <Link
                href={link.href}
                className={`flex items-center gap-1 font-body text-[14px] transition-colors ${
                  isActive(link.href)
                    ? "text-lime"
                    : "text-text-muted hover:text-text-primary"
                }`}
              >
                {link.label}
                {link.dropdown && (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="currentColor"
                    className={`mt-px transition-transform duration-200 ${
                      openDropdown === link.label ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                )}
              </Link>

              {link.dropdown && (
                <NavDropdown
                  links={link.dropdown}
                  visible={openDropdown === link.label}
                />
              )}
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/contact/"
          className="hidden lg:inline-flex items-center gap-1.5 bg-lime text-void font-display font-bold text-[13px] px-5 py-2.5 rounded-lg transition-all hover:bg-[#F0FF6B] hover:shadow-[0_0_18px_rgba(232,255,71,0.35)] hover:scale-[1.03] active:scale-[0.97]"
        >
          Free Audit
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M2.5 10.5l8-8M10.5 2.5H4.5M10.5 2.5v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 -mr-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-text-secondary origin-center transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-text-secondary transition-all duration-300 ${
              mobileOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-text-secondary origin-center transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`absolute top-[70px] left-0 right-0 bg-void/98 backdrop-blur-md border-b border-border lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="max-w-[1160px] mx-auto px-6 py-4 flex flex-col gap-0.5">
          {topNavLinks.map((link) => (
            <div key={link.href}>
              <div className="flex items-center justify-between border-b border-border-subtle">
                <Link
                  href={link.href}
                  className={`flex-1 font-body text-[15px] py-3 transition-colors ${
                    isActive(link.href)
                      ? "text-lime"
                      : "text-text-muted hover:text-text-primary"
                  }`}
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <button
                    className="p-2 text-text-muted"
                    onClick={() =>
                      setMobileExpanded(
                        mobileExpanded === link.label ? null : link.label
                      )
                    }
                    aria-label={`Expand ${link.label}`}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 12 12"
                      fill="none"
                      className={`transition-transform duration-200 ${
                        mobileExpanded === link.label ? "rotate-180" : ""
                      }`}
                    >
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                )}
              </div>

              {/* Mobile sub-links */}
              {link.dropdown && mobileExpanded === link.label && (
                <div className="pl-3 pb-1 flex flex-col">
                  {link.dropdown.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="font-body text-[13px] text-text-muted hover:text-lime py-2 border-b border-border-subtle/50 last:border-0 transition-colors"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            href="/contact/"
            className="mt-3 inline-flex justify-center items-center gap-2 bg-lime text-void font-display font-bold text-[14px] px-5 py-3 rounded-lg hover:bg-[#F0FF6B] transition-colors"
          >
            Free Audit
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M2.5 10.5l8-8M10.5 2.5H4.5M10.5 2.5v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
}
