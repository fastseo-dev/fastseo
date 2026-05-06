# FastSEO Solutions — Complete Project Context
# Paste this into Claude Code at the start of every session
# Last updated: May 2026

---

## PROJECT OVERVIEW

**Website:** https://www.fastseosolutions.com  
**GitHub:** https://github.com/fastseo-dev/fastseo  
**Hosting:** Vercel (fastseo-dev's project)  
**Database:** Supabase  
**Type:** Next.js 14 SEO agency website + custom admin panel  

FastSEO Solutions is an international SEO and web development agency specialising 
in competitive and regulated niches — iGaming, Crypto, Adult, SaaS, Dental, Cannabis.

---

## TECH STACK

- **Framework:** Next.js 14 App Router
- **Styling:** Tailwind CSS v4
- **Database:** Supabase (PostgreSQL)
- **Auth:** Custom cookie-based auth (ADMIN_USERNAME + ADMIN_PASSWORD env vars)
- **Hosting:** Vercel
- **TypeScript:** Yes
- **Rich text editor:** components/admin/RichTextEditor.tsx
- **Toast notifications:** sonner

---

## DESIGN SYSTEM

```
Background:       #080B14  (Void Black)
Surface/Cards:    #0D1220  (Deep Surface)
Border:           #1A1F2E
Primary Accent:   #E8FF47  (Electric Lime) — CTAs, highlights
Secondary Accent: #00FFB2  (Cyber Mint) — AI elements, success
Electric Blue:    #0066FF  — links, interactive
Text Primary:     #F0F2FF
Text Secondary:   #9CA3AF
Text Muted:       #6B7280

Fonts:
- Outfit (headings, display, stats) — weights 300-900
- Space Grotesk (body, UI, nav) — weights 300-700
```

---

## COMPLETE FILE STRUCTURE

```
fastseo/
├── app/
│   ├── layout.tsx                          ← Root layout (fonts, metadata, navbar, footer)
│   ├── page.tsx                            ← Homepage
│   ├── not-found.tsx
│   ├── opengraph-image.tsx
│   ├── robots.ts
│   ├── sitemap.ts
│   │
│   ├── admin/                              ← ADMIN PANEL
│   │   ├── layout.tsx                      ← Admin layout (sidebar nav, NO website header/footer)
│   │   ├── page.tsx                        ← Dashboard
│   │   ├── login/page.tsx                  ← Login page (username + password)
│   │   ├── blog/
│   │   │   ├── page.tsx                    ← Blog posts list
│   │   │   └── [id]/page.tsx               ← Edit/create blog post
│   │   ├── case-studies/
│   │   │   ├── page.tsx                    ← Case studies list
│   │   │   └── [id]/page.tsx               ← Edit/create case study
│   │   ├── contact/page.tsx                ← Contact form submissions
│   │   ├── integrations/page.tsx           ← GA4, GTM, GSC settings
│   │   ├── pricing/page.tsx                ← Pricing plans
│   │   └── settings/page.tsx               ← Site settings
│   │
│   ├── api/
│   │   └── admin/
│   │       ├── auth/route.ts               ← Login API
│   │       ├── logout/route.ts             ← Logout API
│   │       ├── blog/route.ts               ← GET all, POST new blog post
│   │       ├── blog/[id]/route.ts          ← GET, PUT, DELETE single post
│   │       ├── case-studies/route.ts       ← GET all, POST new case study
│   │       ├── case-studies/[id]/route.ts  ← GET, PUT, DELETE single case study
│   │       ├── contact/route.ts            ← GET contact submissions
│   │       ├── integrations/route.ts       ← GET/PUT integrations settings
│   │       ├── pricing/route.ts            ← GET/PUT pricing plans
│   │       ├── settings/route.ts           ← GET/PUT site settings
│   │       ├── stats/route.ts              ← Dashboard stats
│   │       └── upload/route.ts             ← Image upload
│   │
│   ├── about/page.tsx
│   ├── adult-linkbuilding/page.tsx
│   ├── adult-seo/page.tsx
│   ├── ai-seo-services/page.tsx
│   ├── blog/
│   │   ├── page.tsx                        ← Blog index
│   │   └── [slug]/page.tsx                 ← Individual blog post
│   ├── case-studies/
│   │   ├── page.tsx                        ← Case studies index
│   │   └── [slug]/page.tsx                 ← Individual case study
│   ├── contact/page.tsx
│   ├── content-writing-services/page.tsx
│   ├── cryptocurrency-linkbuilding/page.tsx
│   ├── cryptocurrency-seo/page.tsx
│   ├── dental-seo/page.tsx
│   ├── igaming-link-building/page.tsx
│   ├── igaming-seo/page.tsx
│   ├── link-building-services/page.tsx
│   ├── marijuana-seo/page.tsx
│   ├── niche-seo/page.tsx
│   ├── pricing/page.tsx
│   ├── privacy-policy/page.tsx
│   ├── saas-seo/page.tsx
│   └── terms-of-service/page.tsx
│
├── components/
│   ├── Navbar.tsx                          ← Main website navbar
│   ├── Footer.tsx                          ← Main website footer
│   ├── Logo.tsx                            ← FastSEO logo SVG component
│   ├── ServicePage.tsx                     ← Reusable service page template
│   ├── admin/
│   │   ├── FormField.tsx
│   │   ├── FormInput.tsx
│   │   ├── FormTextarea.tsx
│   │   ├── ImageUpload.tsx
│   │   └── RichTextEditor.tsx              ← ⚠ BUG: white text on white background
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── StatsBar.tsx
│   │   ├── CaseStudiesPreview.tsx
│   │   ├── FAQAccordion.tsx
│   │   └── CTAStrip.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── SectionLabel.tsx
│       ├── ServiceCard.tsx
│       ├── StatCard.tsx
│       └── CaseStudyCard.tsx
│
├── lib/
│   ├── supabase.ts                         ← Supabase client
│   ├── blog.ts                             ← Blog helper functions
│   ├── utils.ts                            ← General utilities
│   └── validation.ts                       ← Form validation
│
└── middleware.ts                           ← Auth middleware (protects /admin routes)
```

---

## SUPABASE DATABASE TABLES

All tables have Row Level Security (RLS) enabled.

```
blog_posts          ← Blog articles
case_studies        ← Client case studies  
contact_submissions ← Contact form submissions
integrations        ← GA4, GTM, GSC IDs and scripts
pricing             ← Pricing plan tiers
site_settings       ← Site name, tagline, social links etc
```

**RLS Policies applied:**
- `blog_posts` — public SELECT, service_role ALL
- `case_studies` — public SELECT, service_role ALL
- `contact_submissions` — public INSERT, service_role SELECT
- `integrations` — service_role ALL
- `pricing` — public SELECT, service_role ALL
- `site_settings` — public SELECT, service_role ALL

---

## ENVIRONMENT VARIABLES

Set in both `.env.local` (local) and Vercel dashboard (production):

```
NEXT_PUBLIC_SUPABASE_URL          ← Supabase project URL
NEXT_PUBLIC_SUPABASE_ANON_KEY     ← Supabase anon/public key
SUPABASE_SERVICE_ROLE_KEY         ← Supabase service role key (admin operations)
ADMIN_USERNAME                    ← Admin panel login username
ADMIN_PASSWORD                    ← Admin panel login password
GITHUB_TOKEN                      ← GitHub personal access token
NEXT_PUBLIC_GITHUB_REPO_OWNER     ← fastseo-dev
NEXT_PUBLIC_GITHUB_REPO_NAME      ← fastseo
KEYSTATIC_GITHUB_CLIENT_ID        ← GitHub OAuth (legacy, may not be used)
KEYSTATIC_GITHUB_CLIENT_SECRET    ← GitHub OAuth (legacy, may not be used)
KEYSTATIC_SECRET                  ← Keystatic secret (legacy, may not be used)
```

---

## ADMIN PANEL — CURRENT STATUS

### What works ✅
- Login at `/admin/login` with username/password
- Dashboard at `/admin`
- Blog posts list, create, edit, delete
- Case studies list, create, edit, delete
- Settings page
- Integrations page (GA4, GTM, GSC)
- Pricing page
- Contact submissions viewer
- Image upload via `/api/admin/upload`
- Logout

### Known bugs to fix 🔴

**Bug 1 — Rich text editor white on white**
- File: `components/admin/RichTextEditor.tsx`
- Problem: Content editor background is white, text color is also white — invisible while typing
- Fix needed: Add CSS so text is dark/visible on white background

**Bug 2 — Website navbar/footer showing in admin**
- The main website `<Navbar>` and `<Footer>` components are rendering inside admin pages
- Admin should have completely isolated layout with NO website header or footer
- File to check: `app/admin/layout.tsx` and `app/layout.tsx`
- Fix needed: Ensure root layout excludes navbar/footer for all `/admin/*` routes

**Bug 3 — Missing SEO fields on Blog Posts**
- Blog post form needs these additional fields:
  - Focus Keyword (text input)
  - SEO Title (text input, 60 char limit with counter)
  - Meta Description (textarea, 160 char limit with counter)
  - Canonical URL (text input)
  - Robots (dropdown: index/follow, noindex/follow, index/nofollow, noindex/nofollow)
  - OG Title (text input)
  - OG Description (textarea)
  - OG Image (image upload)
  - Schema Type (dropdown: Article, BlogPosting, HowTo, FAQPage, None)
- These fields must save to Supabase blog_posts table
- These fields must output to page `<head>` when post renders on frontend

**Bug 4 — Missing SEO fields on Case Studies**
- Same SEO fields needed on case study form:
  - SEO Title (60 char limit)
  - Meta Description (160 char limit)
  - Focus Keyword
  - Schema Type (Article, CaseStudy, None)
- Must save to Supabase case_studies table
- Must output to page `<head>` on frontend

---

## ADMIN LAYOUT (current code)

```tsx
// app/admin/layout.tsx
'use client';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Toaster } from 'sonner';

const menuItems = [
  { label: 'Dashboard', href: '/admin' },
  { label: 'Blog Posts', href: '/admin/blog' },
  { label: 'Case Studies', href: '/admin/case-studies' },
  { label: 'Settings', href: '/admin/settings' },
  { label: 'Integrations', href: '/admin/integrations' },
  { label: 'Pricing', href: '/admin/pricing' },
  { label: 'Contact Submissions', href: '/admin/contact' },
];

export default function AdminLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  if (pathname === '/admin/login') return children;

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  return (
    <>
      <Toaster position="top-right" />
      <div className="flex h-screen bg-gray-100">
        <div className="w-64 bg-gray-900 text-white flex flex-col">
          {/* Sidebar with nav items and logout button */}
        </div>
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-auto p-6">{children}</div>
        </div>
      </div>
    </>
  );
}
```

---

## PAGE URLS (SEO-critical — never change slugs)

```
/                               Homepage
/igaming-seo/                   iGaming SEO
/cryptocurrency-seo/            Crypto SEO
/adult-seo/                     Adult SEO
/dental-seo/                    Dental SEO
/saas-seo/                      SaaS SEO
/marijuana-seo/                 Cannabis SEO
/ai-seo-services/               AEO / AI Search Visibility
/link-building-services/        Link Building
/igaming-link-building/         iGaming Link Building
/cryptocurrency-linkbuilding/   Crypto Link Building
/adult-linkbuilding/            Adult Link Building
/content-writing-services/      Content Writing
/niche-seo/                     Niche SEO Hub
/case-studies/                  Case Studies Index
/case-studies/[slug]/           Individual Case Study
/blog/                          Blog Index
/blog/[slug]/                   Individual Blog Post
/about/                         About Us
/contact/                       Contact
/pricing/                       Pricing
/terms-of-service/              Terms
/privacy-policy/                Privacy
/admin/                         Admin Dashboard (protected)
/admin/login/                   Admin Login
```

---

## CURRENT PRIORITIES (in order)

1. **Fix white text bug** in `components/admin/RichTextEditor.tsx`
2. **Remove website navbar/footer** from all `/admin/*` routes
3. **Add SEO fields** to blog post form + save to Supabase + output to `<head>`
4. **Add SEO fields** to case study form + save to Supabase + output to `<head>`
5. **Add Supabase columns** for the new SEO fields to both tables
6. **Test** full blog post creation flow end to end

---

## HOW TO START EACH SESSION

Read this file first, then tell me what you need help with.
The most urgent tasks are the 4 bugs listed above under "Current Priorities".
Always check existing files before creating new ones — most infrastructure exists already.
