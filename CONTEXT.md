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
│   ├── layout.tsx                          ← Root layout (fonts, metadata, PublicLayout)
│   ├── page.tsx                            ← Homepage
│   ├── not-found.tsx
│   ├── opengraph-image.tsx
│   ├── robots.ts
│   ├── sitemap.ts                          ← 156+ static URLs + dynamic blog posts
│   │
│   ├── admin/                              ← ADMIN PANEL
│   │   ├── layout.tsx                      ← Admin layout (sidebar nav, NO website header/footer)
│   │   ├── page.tsx                        ← Dashboard
│   │   ├── login/page.tsx                  ← Login page (username + password)
│   │   ├── blog/
│   │   │   ├── page.tsx                    ← Blog posts list
│   │   │   └── [id]/page.tsx               ← Edit/create blog post (SEO panel included)
│   │   ├── case-studies/
│   │   │   ├── page.tsx                    ← Case studies list
│   │   │   └── [id]/page.tsx               ← Edit/create case study (SEO panel included)
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
│   │       ├── pages/route.ts              ← GET all, POST new page
│   │       ├── pricing/route.ts            ← GET/PUT pricing plans
│   │       ├── settings/route.ts           ← GET/PUT site settings
│   │       ├── stats/route.ts              ← Dashboard stats
│   │       └── upload/route.ts             ← Image upload
│   │
│   ├── about/page.tsx
│   ├── adult-linkbuilding/page.tsx
│   ├── adult-seo/
│   │   ├── page.tsx
│   │   ├── [country]/page.tsx              ← 3 country pages (usa, uk, germany)
│   │   └── [country]/[city]/page.tsx       ← 10 city pages
│   ├── ai-seo-services/page.tsx
│   ├── blog/
│   │   ├── page.tsx                        ← Blog index
│   │   └── [slug]/page.tsx                 ← Individual blog post (generateMetadata from Supabase)
│   ├── case-studies/
│   │   ├── page.tsx                        ← Case studies index
│   │   └── [slug]/page.tsx                 ← Individual case study (generateMetadata from Supabase)
│   ├── contact/page.tsx
│   ├── content-writing-services/page.tsx
│   ├── cryptocurrency-linkbuilding/page.tsx
│   ├── cryptocurrency-seo/
│   │   ├── page.tsx
│   │   ├── [country]/page.tsx              ← 9 country pages
│   │   └── [country]/[city]/page.tsx       ← 10 city pages
│   ├── dental-seo/
│   │   ├── page.tsx
│   │   ├── [country]/page.tsx              ← 6 country pages
│   │   └── [country]/[city]/page.tsx       ← 10 city pages
│   ├── igaming-link-building/page.tsx
│   ├── igaming-seo/
│   │   ├── page.tsx
│   │   ├── [country]/page.tsx              ← 9 country pages
│   │   └── [country]/[city]/page.tsx       ← 10 UK cities + 10 USA cities
│   ├── link-building-services/page.tsx
│   ├── marijuana-seo/
│   │   ├── page.tsx
│   │   ├── [country]/page.tsx              ← 2 country pages (usa, canada)
│   │   └── [country]/[city]/page.tsx       ← 10 city pages
│   ├── niche-seo/page.tsx
│   ├── pricing/page.tsx
│   ├── privacy-policy/page.tsx
│   ├── saas-seo/
│   │   ├── page.tsx
│   │   ├── [country]/page.tsx              ← 7 country pages
│   │   └── [country]/[city]/page.tsx       ← 10 city pages
│   ├── seo-services/
│   │   ├── page.tsx
│   │   └── [location]/page.tsx             ← 11 city/location pages
│   ├── strippers-seo/page.tsx
│   ├── team/page.tsx
│   └── terms-of-service/page.tsx
│
├── components/
│   ├── Navbar.tsx                          ← Main website navbar
│   ├── Footer.tsx                          ← Main website footer
│   ├── PublicLayout.tsx                    ← Wraps Navbar+Footer; suppressed on /admin/*
│   ├── Logo.tsx                            ← FastSEO logo SVG component
│   ├── ServicePage.tsx                     ← Reusable service page template
│   ├── NicheCountryPage.tsx                ← Reusable niche country page template
│   ├── NicheCityPage.tsx                   ← Reusable niche city page template
│   ├── SeoEditor.tsx                       ← Tabbed SEO panel (Analysis, Meta, OG, Schema)
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
├── data/
│   ├── niche-country-types.ts              ← NicheCountryData interface
│   ├── niche-city-types.ts                 ← NicheCityData interface
│   ├── igaming-country-locations.ts        ← 9 country entries
│   ├── crypto-country-locations.ts         ← 9 country entries
│   ├── adult-country-locations.ts          ← 3 country entries
│   ├── dental-country-locations.ts         ← 6 country entries
│   ├── saas-country-locations.ts           ← 7 country entries
│   ├── cannabis-country-locations.ts       ← 2 country entries
│   ├── igaming-cities-uk.ts               ← 10 UK city entries
│   ├── igaming-cities-usa.ts              ← 10 USA city entries
│   ├── crypto-cities.ts                   ← 10 global city entries
│   ├── adult-cities.ts                    ← 10 global city entries
│   ├── dental-cities.ts                   ← 10 global city entries
│   ├── saas-cities.ts                     ← 10 global city entries
│   ├── cannabis-cities.ts                 ← 10 global city entries
│   └── seo-services-locations.ts          ← 11 city/location entries
│
├── lib/
│   ├── supabase.ts                         ← Supabase client (supabaseServer + supabaseClient)
│   ├── blog.ts                             ← Blog helper functions
│   ├── authors.ts                          ← 8 author profiles
│   ├── case-studies.ts                     ← 7 case study entries
│   ├── utils.ts                            ← General utilities
│   └── validation.ts                       ← Form validation
│
└── middleware.ts                           ← Auth middleware — exports function middleware(), matcher: ['/admin/:path*']
```

---

## SUPABASE DATABASE TABLES

All tables have Row Level Security (RLS) enabled.

```
blog_posts          ← Blog articles (includes SEO fields)
case_studies        ← Client case studies (includes SEO fields)
contact_submissions ← Contact form submissions
integrations        ← GA4, GTM, GSC IDs and scripts
pages               ← Custom CMS pages (see CREATE TABLE SQL below)
pricing             ← Pricing plan tiers
site_settings       ← Site name, tagline, social links etc
```

**SEO columns on blog_posts and case_studies:**
```
focus_keyword, seo_title, meta_description, canonical_url, robots,
og_title, og_description, og_image, schema_type
```

**RLS Policies applied:**
- `blog_posts` — public SELECT, service_role ALL
- `case_studies` — public SELECT, service_role ALL
- `contact_submissions` — public INSERT, service_role SELECT
- `integrations` — service_role ALL
- `pages` — published SELECT public, service_role ALL
- `pricing` — public SELECT, service_role ALL
- `site_settings` — public SELECT, service_role ALL

**pages table CREATE SQL** (run in Supabase SQL editor if table doesn't exist):
```sql
create table if not exists public.pages (
  id                  uuid primary key default gen_random_uuid(),
  title               text,
  slug                text unique not null,
  excerpt             text,
  content             text,
  author              text,
  date                date,
  page_type           text,
  template            text,
  hero_label          text,
  hero_subtitle       text,
  features            jsonb,
  faqs                jsonb,
  featured_image_url  text,
  status              text default 'draft',
  focus_keyword       text,
  seo_title           text,
  meta_description    text,
  canonical_url       text,
  robots              text,
  og_title            text,
  og_description      text,
  og_image            text,
  schema_type         text,
  created_at          timestamptz not null default now(),
  updated_at          timestamptz not null default now()
);

alter table public.pages enable row level security;

create policy "pages_public_select" on public.pages
  for select using (status = 'published');

create policy "pages_service_role_all" on public.pages
  for all to service_role using (true) with check (true);
```

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
- **SEO Settings panel on blog posts** — Focus Keyword, SEO Title (60 char), Meta Description (160 char), Canonical URL, Robots, OG Title, OG Description, Schema Type — all save to Supabase
- **SEO Settings panel on case studies** — same fields, saves to Supabase
- **generateMetadata() on blog post pages** — reads SEO fields from Supabase, outputs to `<head>`
- **generateMetadata() on case study pages** — reads SEO fields from Supabase, outputs to `<head>`
- Settings page
- Integrations page (GA4, GTM, GSC)
- Pricing page
- Contact submissions viewer
- Image upload via `/api/admin/upload`
- Logout

### Known bugs 🔴

**Bug 1 — Rich text editor white on white**
- File: `components/admin/RichTextEditor.tsx`
- Problem: Content editor background is white, text color is also white — invisible while typing
- Fix needed: Add CSS so text is dark/visible on white background

---

## MIDDLEWARE

`middleware.ts` exports `function middleware(request: NextRequest)` with `matcher: ['/admin/:path*']`.

This file **must not be renamed or deleted**. It was previously lost (replaced by `proxy.ts` with wrong export name `proxy` instead of `middleware`) which left admin routes unprotected. Restored via `git restore middleware.ts` in May 2026.

---

## PROGRAMMATIC SEO ARCHITECTURE

### Niche Country Pages (36 total)
Each niche has a `[country]/page.tsx` with `generateStaticParams` pulling from its country locations data file.

| Niche | Route prefix | Countries |
|-------|-------------|-----------|
| iGaming | /igaming-seo/ | usa, uk, australia, canada, india, singapore, germany, south-africa, ireland |
| Crypto | /cryptocurrency-seo/ | usa, uk, uae, australia, canada, india, singapore, germany, ireland |
| Adult | /adult-seo/ | usa, uk, germany |
| Dental | /dental-seo/ | usa, uk, australia, canada, south-africa, ireland, [+1] |
| SaaS | /saas-seo/ | usa, uk, australia, canada, india, singapore, ireland, [+1] |
| Cannabis | /marijuana-seo/ | usa, canada |

### Niche City Pages (70 total)
Each niche has a `[country]/[city]/page.tsx` using `NicheCityPage` component and `NicheCityData[]` from its city data file.

| Niche | Cities |
|-------|--------|
| iGaming UK | London, Manchester, Birmingham, Glasgow, Leeds, Liverpool, Edinburgh, Bristol, Sheffield, Newcastle |
| iGaming USA | Las Vegas, New York, New Jersey, Pennsylvania, Michigan, Illinois, Colorado, Indiana, Tennessee, Virginia |
| Crypto | London, New York, Singapore, Dubai, Miami, Zurich, Hong Kong, Amsterdam, Berlin, Toronto |
| Adult | Las Vegas, Miami, Los Angeles, New York, London, Amsterdam, Prague, Barcelona, Berlin, Sydney |
| Dental | London, New York, Sydney, Toronto, Singapore, Dubai, Mumbai, Manila, Kuala Lumpur, Bangkok |
| SaaS | San Francisco, New York, London, Austin, Boston, Seattle, Toronto, Berlin, Amsterdam, Singapore |
| Cannabis | Denver, Los Angeles, Seattle, Vancouver, Toronto, Amsterdam, Berlin, Barcelona, New York, Chicago |

### Sitemap Coverage (~156 static URLs + dynamic blog)
- 24 static routes
- 11 seo-services location pages
- 8 author pages
- 7 case study pages
- 36 niche country pages
- 70 niche city pages
- Blog posts (dynamic from MDX + Supabase)

---

## PAGE URLS (SEO-critical — never change slugs)

```
/                               Homepage
/igaming-seo/                   iGaming SEO
/igaming-seo/[country]/         iGaming country (9 countries)
/igaming-seo/[country]/[city]/  iGaming city (20 cities: UK + USA)
/cryptocurrency-seo/            Crypto SEO
/cryptocurrency-seo/[country]/  Crypto country (9 countries)
/cryptocurrency-seo/[country]/[city]/  Crypto city (10 cities)
/adult-seo/                     Adult SEO
/adult-seo/[country]/           Adult country (3 countries)
/adult-seo/[country]/[city]/    Adult city (10 cities)
/dental-seo/                    Dental SEO
/dental-seo/[country]/          Dental country (6+ countries)
/dental-seo/[country]/[city]/   Dental city (10 cities)
/saas-seo/                      SaaS SEO
/saas-seo/[country]/            SaaS country (7+ countries)
/saas-seo/[country]/[city]/     SaaS city (10 cities)
/marijuana-seo/                 Cannabis SEO
/marijuana-seo/[country]/       Cannabis country (2 countries)
/marijuana-seo/[country]/[city]/ Cannabis city (10 cities)
/ai-seo-services/               AEO / AI Search Visibility
/link-building-services/        Link Building
/igaming-link-building/         iGaming Link Building
/cryptocurrency-linkbuilding/   Crypto Link Building
/adult-linkbuilding/            Adult Link Building
/content-writing-services/      Content Writing
/niche-seo/                     Niche SEO Hub
/seo-services/                  SEO Services
/seo-services/[location]/       Local SEO (11 locations)
/case-studies/                  Case Studies Index
/case-studies/[slug]/           Individual Case Study (7 entries)
/blog/                          Blog Index
/blog/[slug]/                   Individual Blog Post
/about/                         About Us
/team/                          Team (7 specialists)
/contact/                       Contact
/pricing/                       Pricing
/terms-of-service/              Terms
/privacy-policy/                Privacy
/admin/                         Admin Dashboard (protected)
/admin/login/                   Admin Login
```

---

## CURRENT PRIORITIES (in order)

1. **Fix white text bug** in `components/admin/RichTextEditor.tsx` — still open
2. **Run pages table SQL** in Supabase SQL editor — SQL is above in the database section
3. **Expand niche city pages** — could add more cities or more countries per niche
4. **Add admin Pages section** — UI to create/edit custom pages using the `pages` table

---

## HOW TO START EACH SESSION

Read this file first, then tell me what you need help with.
Always check existing files before creating new ones — most infrastructure exists already.
The niche page architecture uses `NicheCountryPage` and `NicheCityPage` components with data files in `data/`.
