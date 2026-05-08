export interface CaseStudy {
  slug: string;
  title: string;
  niche: string;
  client: string;
  result: string;
  metric: string;
  period: string;
  tags: string[];
  detail: string;
  seoTitle: string;
  metaDescription: string;
  accent: string;
  tagColor: string;
  body: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "igaming-casino-seo",
    niche: "iGaming",
    client: "Online Casino Brand",
    title: "0 to 180,000 Monthly Organic Visits — iGaming Casino SEO Case Study",
    result: "0 → 180,000",
    metric: "Monthly organic visits",
    period: "14 months",
    tags: ["Casino SEO", "Link Building", "Content Strategy"],
    detail:
      "A newly licensed online casino in a competitive European market. Starting with zero organic presence, we built a full SEO foundation — technical audit, content architecture, and a targeted link acquisition campaign from gambling publications and affiliate sites. 14 months later: 180,000 monthly organic visits and page-one rankings for 340+ casino and betting keywords.",
    seoTitle: "iGaming Casino SEO Case Study — 0 to 180k Monthly Organic Visits | FastSEO",
    metaDescription:
      "How FastSEO took a newly licensed online casino from zero organic presence to 180,000 monthly organic visits and 340+ page-one rankings in 14 months.",
    accent: "border-lime/30 hover:border-lime/60",
    tagColor: "text-lime/70 bg-lime/8 border-lime/15",
    body: `<h2>The Challenge</h2>
<p>A newly licensed online casino entered a highly competitive European market with zero domain authority, no existing content, and a technical setup that prevented Googlebot from indexing any of their game or category pages.</p>
<p>Their target keywords — "online casino", "best online casino UK", "live casino" — were dominated by established brands with 10+ years of link equity and domain authorities of 60–75. Standard SEO timelines were unacceptable; the business needed measurable organic traction within 6 months to justify continued investment.</p>
<h2>Our Approach</h2>
<h3>Phase 1: Technical Foundation (Months 1–2)</h3>
<p>The site had over 300 duplicate content issues across casino game pages — every game was indexed under multiple URL patterns with no canonical tags. Googlebot's crawl budget was being wasted on parameter-based pagination with no SEO value.</p>
<ul>
<li>Implemented canonical tags across all game and category pages</li>
<li>Resolved hreflang configuration for geo-targeting across UK, Ireland, and Germany</li>
<li>Added VideoObject and Game schema to individual game pages</li>
<li>Rebuilt robots.txt and XML sitemap architecture to direct crawl budget to high-value pages</li>
<li>Reduced page load time from 6.2s to 1.8s through CDN implementation and image optimisation</li>
</ul>
<h3>Phase 2: Content Architecture (Months 3–6)</h3>
<p>With the technical foundation in place, we built a full keyword-mapped content architecture across the site's three main verticals: casino slots, live casino, and table games.</p>
<ul>
<li>80 keyword-targeted category pages covering game types, providers, and features</li>
<li>140 long-form informational articles targeting mid- and bottom-funnel casino queries</li>
<li>Comparison and review content targeting "[brand] alternatives" and "best [game type]" queries</li>
<li>Responsible gambling and compliance content — critical for E-E-A-T in the gambling vertical</li>
</ul>
<h3>Phase 3: Link Acquisition (Months 7–14)</h3>
<p>iGaming link building requires a pre-built publisher network — mainstream outreach agencies cannot place gambling content. Our campaign focused on editorial quality over volume.</p>
<ul>
<li>47 editorial placements on iGaming publications, affiliate sites, and licensed operator media</li>
<li>Average domain authority of acquired links: DR 52</li>
<li>Zero PBN links — all placements are live, indexed editorial content</li>
<li>12 digital PR placements through data-driven gambling research content</li>
</ul>
<h2>Results After 14 Months</h2>
<ul>
<li><strong>180,000 monthly organic visits</strong> from zero</li>
<li><strong>340+ page-one keyword rankings</strong> across casino, slot, and betting terms</li>
<li><strong>28% organic-to-registration conversion rate</strong> from SEO traffic</li>
<li><strong>£0 paid search spend</strong> required alongside the organic programme</li>
</ul>
<p>The client now holds top-3 rankings for 60+ high-value casino keywords in their primary UK market and continues to compound month-on-month with the content and link infrastructure built in the first 14 months.</p>`,
  },
  {
    slug: "defi-protocol-seo",
    niche: "Crypto",
    client: "DeFi Protocol",
    title: "Top-3 Rankings for 60 DeFi Keywords — Crypto SEO Case Study",
    result: "Top 3",
    metric: "Rankings for 60 money keywords",
    period: "11 months",
    tags: ["Crypto SEO", "E-E-A-T Content", "Digital PR"],
    detail:
      "A DeFi protocol launching into a market dominated by established players with massive domain authority. We built topical authority through comprehensive educational content, earned links from authoritative crypto publications, and executed an entity-building strategy for AI visibility. 11 months in: top-3 rankings for 60 high-value DeFi keywords and regular citations in ChatGPT and Perplexity responses.",
    seoTitle: "DeFi Protocol Crypto SEO Case Study — Top-3 Rankings for 60 Keywords | FastSEO",
    metaDescription:
      "How FastSEO achieved top-3 rankings for 60 high-value DeFi keywords in 11 months through topical authority building and crypto-native link acquisition.",
    accent: "border-mint/30 hover:border-mint/60",
    tagColor: "text-mint/70 bg-mint/8 border-mint/15",
    body: `<h2>The Challenge</h2>
<p>A DeFi lending protocol launched into a keyword landscape dominated by CoinGecko, CoinMarketCap, and established DeFi aggregators — all with domain ratings above 80. The protocol had a technically sophisticated product but no SEO presence, no editorial backlinks, and minimal brand recognition outside their core crypto community.</p>
<p>Paid advertising was restricted on the major platforms. Organic search was the only viable acquisition channel for users searching for DeFi lending, yield farming, and liquidity provision queries.</p>
<h2>Our Approach</h2>
<h3>Phase 1: E-E-A-T Foundation (Months 1–3)</h3>
<p>Crypto SEO faces heightened YMYL scrutiny from Google — financial content requires demonstrable expertise, authoritativeness, and trustworthiness signals that most DeFi projects entirely ignore.</p>
<ul>
<li>Established author profiles for protocol team members on the blog with verified credentials</li>
<li>Built comprehensive protocol documentation optimised for both users and search engines</li>
<li>Implemented structured data: FinancialProduct and TechArticle schema across key pages</li>
<li>Created a transparent risk disclosure framework aligned with Google's quality guidelines for financial content</li>
</ul>
<h3>Phase 2: Topical Authority Content (Months 2–7)</h3>
<p>We mapped every DeFi keyword cluster the protocol could realistically compete for and built a comprehensive content programme around them.</p>
<ul>
<li>60 long-form educational articles covering DeFi mechanics, yield strategies, and protocol comparisons</li>
<li>Data-driven content: APY comparison tools, liquidity calculator, risk framework guides</li>
<li>Glossary and definitional content targeting high-volume informational queries</li>
<li>Protocol comparison pages targeting "[protocol] vs [competitor]" queries with high commercial intent</li>
</ul>
<h3>Phase 3: Link Acquisition and Entity Building (Months 4–11)</h3>
<p>Crypto link building requires specialist access to crypto-native publications and DeFi media that generalist agencies do not have relationships with.</p>
<ul>
<li>38 editorial placements on CoinTelegraph, Decrypt, BeInCrypto, and specialist DeFi publications</li>
<li>Protocol was featured in 4 mainstream fintech publications through data journalism content</li>
<li>Entity building: Consistent brand signals established across crypto directories, GitHub, and community platforms</li>
<li>AI citation optimisation: Content formatted specifically for ChatGPT and Perplexity citation patterns</li>
</ul>
<h2>Results After 11 Months</h2>
<ul>
<li><strong>Top-3 rankings for 60 high-value DeFi keywords</strong> including "defi lending protocol" and "best yield farming platform"</li>
<li><strong>Regular citations in ChatGPT and Perplexity</strong> responses for DeFi protocol queries</li>
<li><strong>220% increase in organic user acquisition</strong> — users arriving via search converting at 3.2× the rate of paid social traffic</li>
<li><strong>Domain Rating increased from 12 to 58</strong> over the campaign period</li>
</ul>`,
  },
  {
    slug: "b2b-saas-seo",
    niche: "SaaS",
    client: "B2B SaaS Platform",
    title: "+320% Organic Trial Signups — B2B SaaS SEO Case Study",
    result: "+320%",
    metric: "Organic trial signups",
    period: "12 months",
    tags: ["SaaS SEO", "Content Strategy", "Link Building"],
    detail:
      "A B2B SaaS platform in a crowded category spending heavily on paid acquisition with declining returns. We built a full-funnel content strategy — comparison pages, integration pages, use-case content, and long-form guides — paired with authoritative link acquisition from tech and business media. 12 months later: 320% increase in organic trial signups and a 40% reduction in blended CAC.",
    seoTitle: "B2B SaaS SEO Case Study — +320% Organic Trial Signups in 12 Months | FastSEO",
    metaDescription:
      "How FastSEO delivered a 320% increase in organic trial signups and 40% reduction in CAC for a B2B SaaS platform through full-funnel content strategy and link building.",
    accent: "border-electric/30 hover:border-electric/60",
    tagColor: "text-electric/70 bg-electric/8 border-electric/15",
    body: `<h2>The Challenge</h2>
<p>A B2B SaaS platform in a competitive productivity and workflow category was spending £45,000/month on paid acquisition with declining CPAs and a rising cost per trial signup. Organic search accounted for less than 8% of total signups despite representing 60% of the buying journey's research phase.</p>
<p>The site had minimal informational content, no comparison pages targeting competitor alternatives queries, and no integration or use-case pages — leaving enormous bottom-of-funnel organic opportunity unaddressed.</p>
<h2>Our Approach</h2>
<h3>Phase 1: Keyword Architecture and Audit (Month 1)</h3>
<p>We mapped the full SaaS keyword landscape into four content tiers aligned with buying intent:</p>
<ul>
<li><strong>High-intent commercial:</strong> "[category] software", "best [category] tools" — high competition, long-term targets</li>
<li><strong>Comparison intent:</strong> "[competitor] alternatives", "[brand] vs [brand]" — medium competition, high conversion</li>
<li><strong>Integration intent:</strong> "[product] + [integration]" queries — low competition, high qualification signal</li>
<li><strong>Use-case informational:</strong> "how to [solve problem with product]" — builds topical authority and pipeline</li>
</ul>
<h3>Phase 2: Content Programme (Months 2–8)</h3>
<ul>
<li>22 competitor alternative pages (e.g., "Best [Competitor] Alternatives in 2025") — average conversion rate: 4.8%</li>
<li>35 integration pages covering every major tool connection — captured 1,400 monthly searches</li>
<li>18 use-case pillar pages with supporting cluster content</li>
<li>40 long-form guides targeting informational queries across the category</li>
</ul>
<h3>Phase 3: Link Acquisition (Months 3–12)</h3>
<ul>
<li>42 editorial placements on SaaS review publications, tech media, and business software blogs</li>
<li>6 data-driven studies shared with tech journalists — earned coverage in 3 mainstream business publications</li>
<li>Product Hunt and SaaS directory listings to build referral and brand signals</li>
</ul>
<h2>Results After 12 Months</h2>
<ul>
<li><strong>+320% organic trial signups</strong> — from 140/month to 588/month via organic search</li>
<li><strong>40% reduction in blended CAC</strong> as organic shifted the paid/organic ratio from 92%/8% to 65%/35%</li>
<li><strong>1,200+ keyword rankings on page one</strong> across comparison, integration, and informational intent</li>
<li><strong>Competitor alternative pages</strong> became the highest-converting pages on the site at 4.8% trial signup rate</li>
</ul>`,
  },
  {
    slug: "adult-content-platform-seo",
    niche: "Adult",
    client: "Adult Content Platform",
    title: "2× Organic Revenue in 9 Months — Adult SEO Case Study",
    result: "2× Revenue",
    metric: "Organic revenue in 9 months",
    period: "9 months",
    tags: ["Adult SEO", "Adult Link Building", "On-Page SEO"],
    detail:
      "An adult content platform competing against major aggregators with massive traffic advantages. We identified high-intent long-tail keyword clusters where they could compete, rebuilt their on-page architecture, and executed a link building campaign through our adult publisher network. 9 months later: organic revenue doubled, with 140% growth in new user registrations from organic search.",
    seoTitle: "Adult Content Platform SEO Case Study — 2× Organic Revenue in 9 Months | FastSEO",
    metaDescription:
      "How FastSEO doubled organic revenue for an adult content platform in 9 months through long-tail keyword strategy, on-page architecture, and specialist adult link building.",
    accent: "border-lime/30 hover:border-lime/60",
    tagColor: "text-lime/70 bg-lime/8 border-lime/15",
    body: `<h2>The Challenge</h2>
<p>A subscription adult content platform was competing against aggregators and tube sites with domain authorities of 80+ and billions of pages indexed. Competing for head terms was unrealistic. The site had no coherent keyword strategy, poor on-page structure, and zero editorial backlinks — relying entirely on paid traffic that was becoming increasingly expensive as ad network restrictions tightened.</p>
<p>Adult SEO presents unique technical requirements: age verification implementation that Googlebot can navigate, DMCA compliance signals that affect index trust, and a link acquisition environment where mainstream publishers universally refuse placements.</p>
<h2>Our Approach</h2>
<h3>Phase 1: Technical and Compliance Audit (Months 1–2)</h3>
<p>Adult websites face technical SEO challenges that generic agencies are not equipped to address. Our audit covered:</p>
<ul>
<li>Age gate implementation review — replacing a JavaScript-only age gate that blocked Googlebot entirely with a hybrid implementation that maintains legal compliance while allowing indexation</li>
<li>Canonical architecture across performer pages, category pages, and content pages — the site had 40,000+ duplicate URLs consuming crawl budget</li>
<li>DMCA compliance signals and content attribution — affects both user trust and search engine quality assessment</li>
<li>VideoObject schema implementation across all content pages — dramatically improving video search visibility</li>
<li>Core Web Vitals — reduced LCP from 8.4s to 2.1s through image optimisation and CDN configuration</li>
</ul>
<h3>Phase 2: Long-Tail Keyword Architecture (Months 2–5)</h3>
<p>Head terms are unwinnable against established tube sites. The opportunity is in specificity.</p>
<ul>
<li>Identified 2,400 long-tail keyword clusters targeting specific content categories and performer niches</li>
<li>Rebuilt category page architecture with keyword-targeted titles, headers, and internal linking</li>
<li>Built performer pages with SEO-optimised structured data and content targeting performer name + category combinations</li>
<li>Created a content strategy for informational adult queries — guides, advice content — that earns links from sexual health and lifestyle media</li>
</ul>
<h3>Phase 3: Adult Link Building (Months 3–9)</h3>
<p>Adult link acquisition requires a pre-built publisher network that mainstream link building agencies do not have.</p>
<ul>
<li>34 editorial placements through our adult publisher network — sexual health media, adult lifestyle publications, and specialist directories</li>
<li>Average domain authority: DR 44</li>
<li>All placements are genuine editorial content — no link farms or adult PBNs</li>
</ul>
<h2>Results After 9 Months</h2>
<ul>
<li><strong>2× organic revenue</strong> — monthly organic revenue doubled from baseline</li>
<li><strong>+140% new user registrations</strong> from organic search</li>
<li><strong>1,800+ long-tail keywords</strong> ranking on page one</li>
<li><strong>Organic now accounts for 55% of total acquisition</strong> — reducing dependence on paid channels</li>
</ul>`,
  },
  {
    slug: "dental-group-local-seo",
    niche: "Dental",
    client: "Multi-Location Dental Group",
    title: "+180% Patient Enquiries — Multi-Location Dental SEO Case Study",
    result: "+180%",
    metric: "Patient enquiries across 6 locations",
    period: "10 months",
    tags: ["Dental SEO", "Local SEO", "Google Business Profile"],
    detail:
      "A dental group with 6 locations, each competing in different local markets with inconsistent online presence. We standardised their Google Business Profile setup, built location-specific service pages, and implemented a unified citation and review strategy. 10 months later: 180% increase in patient enquiries from organic search across all locations.",
    seoTitle: "Multi-Location Dental SEO Case Study — +180% Patient Enquiries | FastSEO",
    metaDescription:
      "How FastSEO delivered a 180% increase in patient enquiries for a 6-location dental group through local SEO, Google Business Profile optimisation, and citation building.",
    accent: "border-mint/30 hover:border-mint/60",
    tagColor: "text-mint/70 bg-mint/8 border-mint/15",
    body: `<h2>The Challenge</h2>
<p>A dental group with 6 locations across different cities had inconsistent online presence — some locations ranked well locally, others were invisible in the Google local pack despite being well-established practices with strong reputations. There was no unified SEO strategy, Google Business Profiles were incomplete or unclaimed, and location pages on the website were thin duplicates of each other with no local keyword targeting.</p>
<p>Dental patients search with high local intent — "dentist near me", "dental implants [city]", "emergency dentist [postcode]". Failing to appear in the local pack for these queries means losing patients directly to competitors, many of whom are less qualified but better optimised.</p>
<h2>Our Approach</h2>
<h3>Phase 1: Local SEO Audit Across All 6 Locations (Month 1)</h3>
<ul>
<li>Full audit of Google Business Profile completeness, category selection, and photo quality across all locations</li>
<li>Citation consistency audit — NAP (Name, Address, Phone) inconsistencies across directories were found for 4 of 6 locations</li>
<li>Review velocity and response rate analysis — 2 locations had no review response strategy</li>
<li>Location page audit on the main website — all 6 were near-identical pages with no location-specific content</li>
</ul>
<h3>Phase 2: Google Business Profile Optimisation (Months 1–3)</h3>
<ul>
<li>Completed and optimised all 6 GBPs — services, categories, photos, Q&amp;A, booking integration</li>
<li>Implemented a unified review acquisition strategy — post-appointment review request sequences per location</li>
<li>Added Google Posts schedule across all locations covering promotions, new services, and seasonal content</li>
<li>Added LocalBusiness and MedicalBusiness schema to all location pages</li>
</ul>
<h3>Phase 3: Location Page Rebuild (Months 2–5)</h3>
<ul>
<li>Rewrote all 6 location pages with unique, keyword-targeted content specific to each city and local market</li>
<li>Built service-level location pages for each high-value service (implants, Invisalign, emergency) × each location = 48 new pages</li>
<li>Implemented consistent internal linking between location pages and the main service pages</li>
</ul>
<h3>Phase 4: Citation Building and Link Acquisition (Months 3–10)</h3>
<ul>
<li>Fixed NAP inconsistencies across 120+ directory listings per location</li>
<li>Built citations on dental-specific directories and healthcare portals</li>
<li>Earned editorial links from local news publications for 4 of 6 locations through community-focused PR</li>
</ul>
<h2>Results After 10 Months</h2>
<ul>
<li><strong>+180% patient enquiries</strong> from organic search across all 6 locations</li>
<li><strong>All 6 locations in Google local pack</strong> for primary "dentist [city]" queries</li>
<li><strong>4.6× increase in GBP profile views</strong> across the portfolio</li>
<li><strong>Review volume increased by 340%</strong> — improving both local pack ranking signals and conversion rate</li>
</ul>`,
  },
  {
    slug: "cbd-ecommerce-seo",
    niche: "Cannabis",
    client: "CBD E-Commerce Brand",
    title: "+240% Organic Traffic in 8 Months — CBD SEO Case Study",
    result: "+240%",
    metric: "Organic traffic in 8 months",
    period: "8 months",
    tags: ["Cannabis SEO", "Content Strategy", "Link Building"],
    detail:
      "A CBD e-commerce brand unable to run paid ads, relying entirely on organic traffic. We built a comprehensive topical authority strategy around CBD, hemp, and wellness keywords, secured backlinks from cannabis publications and lifestyle media, and optimised every product and category page. 8 months later: 240% increase in organic traffic and first-page rankings for 90+ CBD keywords.",
    seoTitle: "CBD E-Commerce SEO Case Study — +240% Organic Traffic in 8 Months | FastSEO",
    metaDescription:
      "How FastSEO delivered a 240% organic traffic increase and 90+ first-page rankings for a CBD e-commerce brand through topical authority and cannabis-specialist link building.",
    accent: "border-electric/30 hover:border-electric/60",
    tagColor: "text-electric/70 bg-electric/8 border-electric/15",
    body: `<h2>The Challenge</h2>
<p>A UK CBD e-commerce brand was entirely dependent on organic traffic after being banned from Google Ads, Facebook Ads, and every major paid channel for operating in a restricted health product category. Organic accounted for 100% of new customer acquisition — but organic traffic had plateaued at a level insufficient to sustain the business's growth targets.</p>
<p>The CBD keyword landscape has unique challenges: health claims are heavily regulated, Google applies stringent quality standards to supplement and wellness content, and many cannabis publications that would provide backlinks are themselves in Google's restricted category.</p>
<h2>Our Approach</h2>
<h3>Phase 1: Technical and Compliance Foundation (Month 1)</h3>
<ul>
<li>Full technical audit — fixed crawl architecture, duplicate product URLs, and canonical issues across 1,200 product and category pages</li>
<li>Health claim compliance review — removed or rewrote content that made medical claims inconsistent with MHRA and ASA guidelines, replacing with E-E-A-T compliant language and referenced educational content</li>
<li>Added Product schema with review markup, BreadcrumbList schema, and FAQPage schema to key category pages</li>
</ul>
<h3>Phase 2: Topical Authority Content Programme (Months 2–6)</h3>
<p>CBD SEO requires building genuine topical authority around the wellness and hemp space — not just optimising product pages in isolation.</p>
<ul>
<li>45 long-form educational articles covering CBD, hemp, cannabinoids, and wellness — written at expert level with citations</li>
<li>Full product category optimisation — every category page rebuilt with keyword-targeted content and internal linking</li>
<li>"Best CBD [product type]" comparison content targeting commercial research queries</li>
<li>Condition-specific informational content (sleep, anxiety, pain) — carefully compliance-reviewed and linking to scientific references</li>
</ul>
<h3>Phase 3: Cannabis and Wellness Link Building (Months 2–8)</h3>
<ul>
<li>32 editorial placements across cannabis publications, wellness media, and lifestyle sites</li>
<li>6 placements on mainstream health and lifestyle publications through data-led wellness content</li>
<li>Specialist cannabis directory listings and industry body citations</li>
<li>Average domain authority of acquired links: DR 48</li>
</ul>
<h2>Results After 8 Months</h2>
<ul>
<li><strong>+240% organic traffic</strong> — from 8,200 to 27,880 monthly organic sessions</li>
<li><strong>First-page rankings for 90+ CBD keywords</strong> including high-volume product and educational terms</li>
<li><strong>+180% organic revenue</strong> across the product catalogue</li>
<li><strong>Domain Rating increased from 18 to 44</strong> over the campaign period</li>
</ul>`,
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | null {
  return caseStudies.find((cs) => cs.slug === slug) ?? null;
}
