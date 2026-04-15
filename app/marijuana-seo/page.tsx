import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Cannabis SEO Agency — Marijuana, CBD & Dispensary SEO Services",
  description:
    "Specialist cannabis SEO for dispensaries, CBD brands, marijuana businesses and hemp companies. Rank at the top of Google for cannabis keywords. Free SEO audit.",
  alternates: { canonical: "https://www.fastseosolutions.com/marijuana-seo/" },
};

const features = [
  {
    title: "Cannabis Competitors Audit",
    desc: "In-depth research into your direct competitors — their keyword rankings, backlink profiles, content gaps, and the opportunity windows your cannabis business can exploit.",
  },
  {
    title: "Cannabis Website Optimisation",
    desc: "Full technical and on-page SEO for your cannabis website — from site architecture and page speed to title tags, meta descriptions, and product page optimisation.",
  },
  {
    title: "Cannabis Keyword Research",
    desc: "Comprehensive keyword mapping across dispensary, CBD, THC, hemp, and strain-specific terms — balancing search volume, competition, and buyer intent.",
  },
  {
    title: "Cannabis Link Building",
    desc: "Strategic backlinks from cannabis publications, lifestyle sites, wellness domains, and hemp industry directories — built with a specialist network most agencies cannot access.",
  },
  {
    title: "Cannabis Content Creation",
    desc: "Expertly written, keyword-rich content for product pages, strain guides, educational resources, and blog posts — the topical authority that drives cannabis rankings.",
  },
  {
    title: "Brand & Reputation Management",
    desc: "Social monitoring, review management, and community engagement across cannabis forums, Facebook groups, and social platforms to protect and grow your brand presence.",
  },
];

const faqs = [
  {
    q: "Can Google actually rank cannabis and marijuana websites?",
    a: "Yes. Google freely indexes and ranks cannabis content. Unlike paid advertising platforms (Google Ads, Meta), there is no restriction on organic search results for legally operating cannabis businesses. This makes SEO the single most important digital marketing channel for the cannabis industry.",
  },
  {
    q: "Is cannabis SEO legal?",
    a: "SEO for legally operating cannabis businesses is entirely legal. We work with dispensaries, CBD e-commerce brands, hemp companies, and cannabis information publishers in jurisdictions where they operate within applicable law.",
  },
  {
    q: "Do you work with CBD and hemp businesses as well as THC dispensaries?",
    a: "Yes. We work across the full plant spectrum — THC dispensaries, CBD e-commerce, hemp brands, cannabis SaaS platforms, and cannabis information publishers. Each segment has distinct keyword patterns and content requirements that we tailor strategy to.",
  },
  {
    q: "What keywords should a cannabis dispensary target?",
    a: "Location-specific service keywords ('dispensary near me', 'cannabis shop [city]'), product category terms (edibles, vapes, flower, pre-rolls), strain-specific keywords, and educational content about effects and legislation. We build a full keyword map tailored to your product range, location, and business goals.",
  },
  {
    q: "How do you build backlinks for cannabis websites?",
    a: "Through outreach to cannabis publications, lifestyle and wellness sites, hemp industry directories, legal cannabis news sites, and relevant mainstream media. Cannabis link building requires a specialised network — many standard link sources refuse to work with cannabis content. We have built that network over years in the niche.",
  },
  {
    q: "How long does cannabis SEO take to show results?",
    a: "Local dispensary keywords and long-tail CBD terms typically see movement within 3–5 months. Competitive national terms for established keywords can take 6–12 months. New domains with no history take longer to establish authority — our content and link strategy is designed to accelerate that curve as much as possible.",
  },
];

export default function MarijuanaSeoPage() {
  return (
    <ServicePage
      label="Cannabis SEO"
      title="Cannabis & Marijuana SEO"
      subtitle="Paid advertising for cannabis is blocked almost everywhere. Google organic is your most powerful, most sustainable customer acquisition channel — and we have spent years cracking it for dispensaries, CBD brands, and cannabis businesses."
      features={features}
      faqs={faqs}
      canonicalPath="/marijuana-seo/"
      serviceName="Cannabis SEO"
      serviceDescription="Specialist cannabis SEO for dispensaries, CBD brands, marijuana businesses and hemp companies. We rank cannabis websites at the top of Google for their most valuable keywords."
    >
      <h2>SEO for Cannabis &amp; Marijuana Businesses</h2>
      <p>
        Marijuana, CBD, hemp, and cannabis operate in one of the most restricted digital marketing
        environments of any legal industry. Paid advertising is blocked on Google, Meta, and most
        major platforms. This forces every cannabis brand — from local dispensaries to national
        CBD e-commerce sites — to compete entirely in organic search.
      </p>
      <p>
        FastSEO has spent years building the expertise, content knowledge, and link network
        required to rank cannabis businesses consistently at the top of their target keywords.
        We work with dispensaries, CBD brands, hemp companies, cannabis SaaS platforms, and
        cannabis content publishers — across the UK, US, Europe, Canada, and Australia.
      </p>
      <h3>Why Cannabis SEO Needs a Specialist</h3>
      <p>
        Standard SEO agencies lack the willingness and the knowledge to work in cannabis.
        Keyword targeting requires nuance — navigating terms that Google treats cautiously
        versus those it ranks freely. Link building requires a specific network of publishers
        willing to work with cannabis content. And content must navigate a careful balance
        between commercial copy and the educational substance Google rewards.
      </p>
      <h3>Our Cannabis SEO Process</h3>
      <ul>
        <li>Cannabis-specific keyword research — local, national, and product-level</li>
        <li>Technical SEO audit and site architecture review</li>
        <li>Product page, category page, and strain guide optimisation</li>
        <li>Strategic link building from cannabis, wellness, and lifestyle publications</li>
        <li>Educational content strategy to build topical authority in your niche</li>
        <li>Local SEO for dispensaries with Google Business Profile optimisation</li>
        <li>Monthly performance reporting with clear ROI visibility</li>
      </ul>
    </ServicePage>
  );
}
