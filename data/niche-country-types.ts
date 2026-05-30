export interface NicheCountryStat {
  value: string;
  label: string;
}

export interface NicheCountryFAQ {
  q: string;
  a: string;
}

export interface NicheService {
  title: string;
  desc: string;
}

export interface NicheConfig {
  label: string;
  parentHref: string;
  services: NicheService[];
}

export interface NicheCountryData {
  nicheSlug: string;
  nicheLabel: string;
  countrySlug: string;
  countryName: string;
  countryShort: string;
  countryFlag: string;
  cities: string[];
  quickAnswer?: string;
  title: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  marketContext: string;
  regulatoryContext: string;
  competitiveInsight: string;
  whyUs: string[];
  stats: NicheCountryStat[];
  faqs: NicheCountryFAQ[];
}

export const citiesByCountry: Record<string, string[]> = {
  usa: ["New York", "Los Angeles", "Las Vegas", "Chicago", "Miami", "Houston", "Dallas", "Philadelphia", "Atlanta", "Denver"],
  uk: ["London", "Manchester", "Birmingham", "Leeds", "Glasgow", "Liverpool", "Bristol", "Edinburgh", "Sheffield", "Cardiff"],
  australia: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Gold Coast", "Canberra", "Newcastle", "Wollongong", "Hobart"],
  canada: ["Toronto", "Vancouver", "Montreal", "Calgary", "Edmonton", "Ottawa", "Winnipeg", "Quebec City", "Hamilton", "Kitchener"],
  india: ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Pune", "Kolkata", "Ahmedabad", "Jaipur", "Surat"],
  germany: ["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt", "Stuttgart", "Düsseldorf", "Leipzig", "Dresden", "Dortmund"],
  "south-africa": ["Johannesburg", "Cape Town", "Durban", "Pretoria", "Port Elizabeth", "Bloemfontein"],
  ireland: ["Dublin", "Cork", "Limerick", "Galway", "Waterford"],
  uae: ["Dubai", "Abu Dhabi", "Sharjah"],
  singapore: [],
};

export const nicheConfigs: Record<string, NicheConfig> = {
  "igaming-seo": {
    label: "iGaming SEO",
    parentHref: "/igaming-seo/",
    services: [
      { title: "Casino & Sportsbook SEO", desc: "Full-funnel keyword strategy and on-page optimisation for online casino, sports betting, poker, and bingo verticals — built around player intent at every stage." },
      { title: "iGaming Link Building", desc: "Manual editorial backlinks from gambling, affiliate, and finance publications. Vetted niche publisher networks generalist agencies cannot access." },
      { title: "iGaming Content Strategy", desc: "E-E-A-T-compliant game reviews, betting guides, responsible gambling pages, and comparison content that ranks and converts in your market." },
      { title: "Technical SEO for Gaming", desc: "Core Web Vitals, crawl architecture, structured data, canonicalisation, and indexation fixes — the technical foundation high-competition iGaming SERPs demand." },
      { title: "Affiliate SEO", desc: "Keyword gap analysis, content programmes, and link acquisition for iGaming affiliates building organic traffic in competitive casino and betting markets." },
      { title: "Regulatory Compliance SEO", desc: "Responsible gambling content, age-verification signals, bonus advertising compliance, and jurisdiction-specific SEO that protects your licence while building rankings." },
    ],
  },
  "cryptocurrency-seo": {
    label: "Cryptocurrency SEO",
    parentHref: "/cryptocurrency-seo/",
    services: [
      { title: "Exchange & DeFi SEO", desc: "Keyword strategy, on-page optimisation, and content for crypto exchanges, DeFi protocols, and Web3 platforms targeting competitive financial search terms." },
      { title: "Crypto Link Building", desc: "Editorial backlinks from blockchain media, finance publications, and tech press. High-authority placements that build the trust signals crypto YMYL content demands." },
      { title: "YMYL Content Strategy", desc: "E-E-A-T-compliant articles, token guides, market analysis, and explainer content that satisfies Google's quality evaluators for financial and crypto topics." },
      { title: "Web3 Technical SEO", desc: "Technical audits, structured data, and crawl optimisation for blockchain projects, NFT platforms, and DeFi protocols with complex JavaScript architectures." },
      { title: "Blockchain Project SEO", desc: "Organic visibility strategy for token launches, blockchain L1/L2 projects, and Web3 infrastructure companies building long-term search presence." },
      { title: "Regulatory-Aware Content", desc: "SEC, FCA, MAS, BaFin, and jurisdiction-specific compliance framing built into every content asset — protecting clients from regulatory risk while maximising rankings." },
    ],
  },
  "adult-seo": {
    label: "Adult SEO",
    parentHref: "/adult-seo/",
    services: [
      { title: "Adult Platform SEO", desc: "Technical SEO, keyword research, and on-page optimisation for adult content platforms, fan sites, and subscription services competing in restricted-access SERPs." },
      { title: "Adult Link Building", desc: "Manual editorial backlinks from adult publications, lifestyle media, and niche adult directories — acquired within Google's webmaster guidelines." },
      { title: "Fan Platform SEO", desc: "OnlyFans agency SEO, creator platform optimisation, and fan site ranking strategies for the growing adult creator economy." },
      { title: "Adult eCommerce SEO", desc: "Product page optimisation, category architecture, and link acquisition for adult toy and product retailers competing in Google Shopping and organic results." },
      { title: "Compliance-Aware Content", desc: "FOSTA-SESTA, Online Safety Act, and jurisdiction-specific compliance framing built into all adult content strategy — protecting sites from deindexation risk." },
      { title: "Technical SEO for Adult", desc: "Age-verification implementation signals, hreflang for multi-region adult sites, crawl architecture, and Core Web Vitals for high-traffic adult platforms." },
    ],
  },
  "saas-seo": {
    label: "SaaS SEO",
    parentHref: "/saas-seo/",
    services: [
      { title: "SaaS Keyword Research", desc: "Jobs-to-be-done keyword mapping, competitor gap analysis, and intent-layer keyword architecture for every stage of the SaaS buyer journey." },
      { title: "B2B Content Strategy", desc: "Pillar pages, comparison content, use-case articles, and integration pages that capture high-intent SaaS buyers at the decision stage." },
      { title: "SaaS Link Building", desc: "Editorial backlinks from technology media, industry publications, and SaaS review platforms — the link profile that drives domain authority for competitive SaaS terms." },
      { title: "Technical SEO for SaaS", desc: "JavaScript rendering, crawl budget, Core Web Vitals, and structured data — technical foundations for SaaS platforms with complex product architectures." },
      { title: "Product-Led SEO", desc: "Free tool pages, template libraries, and product-adjacent content that drives sign-ups directly from organic search — high-intent traffic that converts." },
      { title: "International SaaS SEO", desc: "Hreflang implementation, localised keyword research, and market-specific content for SaaS companies expanding into new geographic markets." },
    ],
  },
  "marijuana-seo": {
    label: "Cannabis SEO",
    parentHref: "/marijuana-seo/",
    services: [
      { title: "Dispensary Local SEO", desc: "Google Business Profile optimisation, local citation building, and location page development for dispensaries targeting city and neighbourhood-level patient searches." },
      { title: "Cannabis Content Strategy", desc: "Compliance-aware educational content, strain guides, product pages, and blog content that ranks while satisfying Health Canada and state advertising standards." },
      { title: "Cannabis Link Building", desc: "Editorial backlinks from cannabis publications, lifestyle media, and industry directories — within advertising restriction guidelines for licensed cannabis businesses." },
      { title: "Compliance-Aware SEO", desc: "Health Canada, FDA (for hemp/CBD), and state-level cannabis advertising restriction compliance built into every content asset and technical decision." },
      { title: "eCommerce Cannabis SEO", desc: "Product category architecture, strain and product page optimisation, and structured data for licensed cannabis eCommerce retailers and delivery services." },
      { title: "Cannabis Brand SEO", desc: "Brand visibility strategy for cannabis producers, LP brands, and ancillary cannabis businesses building organic authority in a restricted advertising environment." },
    ],
  },
  "dental-seo": {
    label: "Dental SEO",
    parentHref: "/dental-seo/",
    services: [
      { title: "Dental Local SEO", desc: "Google Business Profile optimisation, local citation building, and location-specific landing pages for dental practices targeting city and suburb-level patient searches." },
      { title: "Dental Content Strategy", desc: "Treatment-specific content for implants, Invisalign, whitening, veneers, and emergency dentistry — written to rank for high-intent patient searches in your area." },
      { title: "Google Business Profile", desc: "Full GBP optimisation, review acquisition strategy, photo and Q&A management — the local pack visibility that drives appointment bookings." },
      { title: "Dental Link Building", desc: "Editorial backlinks from health publications, dental directories, and local media — building the domain authority that ranks dental practices for competitive cosmetic terms." },
      { title: "Multi-Location Dental SEO", desc: "Scalable SEO architecture for dental groups and DSOs — location page templates, internal linking systems, and GBP management across multiple practice sites." },
      { title: "Patient Acquisition SEO", desc: "Conversion-focused keyword strategy targeting high-value procedures — implants, orthodontics, and cosmetic dentistry — where patient lifetime value is highest." },
    ],
  },
  "seo-services": {
    label: "SEO Services",
    parentHref: "/seo-services/",
    services: [
      { title: "Technical SEO", desc: "Full technical audits — crawl architecture, Core Web Vitals, canonicalisation, structured data, and indexation. We fix what silently prevents your site from ranking." },
      { title: "Link Building", desc: "Manual editorial backlinks from niche-relevant publishers. Specialist adult, iGaming, and crypto publisher networks that generalist agencies cannot access." },
      { title: "On-Page SEO", desc: "Keyword research, intent mapping, title tags, heading structure, internal linking, and schema markup — data-driven across every key page." },
      { title: "Content SEO", desc: "E-E-A-T optimised articles, pillar pages, and service pages written by vertical specialists — not generalists producing generic copy that fails to rank." },
      { title: "Local SEO", desc: "Google Business Profile optimisation, local citation building, local pack strategies, and location page development for businesses targeting specific markets." },
      { title: "Restricted Niches", desc: "Adult SEO, iGaming SEO, crypto SEO, cannabis SEO — regulated verticals where mainstream agencies refuse to operate. Specialist compliance-aware strategy." },
    ],
  },
};
