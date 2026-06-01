import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

const BASE = "https://www.fastseosolutions.com";
const CANONICAL = "/cannabis-seo/";

export const metadata: Metadata = {
  title: "Cannabis SEO Agency — CBD & Hemp Brand Growth | FastSEO",
  description:
    "Specialist cannabis SEO for CBD brands, hemp companies, cannabis lifestyle businesses and cannabis tech startups. FSA, TGA and ASA-compliant content strategy. Free audit.",
  alternates: { canonical: `${BASE}${CANONICAL}` },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Cannabis SEO Agency — CBD & Hemp Brand Growth | FastSEO",
    description:
      "Specialist cannabis SEO for CBD brands, hemp companies, cannabis lifestyle businesses and cannabis tech startups. FSA, TGA and ASA-compliant content strategy. Free audit.",
    url: `${BASE}${CANONICAL}`,
    images: [{ url: `${BASE}/opengraph-image`, width: 1200, height: 630, alt: "Cannabis SEO Agency — FastSEO" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cannabis SEO Agency — CBD & Hemp Brand Growth | FastSEO",
    description:
      "Specialist cannabis SEO for CBD brands, hemp companies, cannabis lifestyle businesses and cannabis tech startups.",
  },
};

const features = [
  {
    title: "CBD Content Strategy",
    desc: "Compliance-aware content programmes for CBD brands — FSA Novel Food framing, ASA health claim boundaries, and E-E-A-T authority signals that build trust with both Google and regulators.",
  },
  {
    title: "Hemp eCommerce SEO",
    desc: "Full-funnel organic growth for hemp product brands — category architecture, product page optimisation, ingredient education hubs, and wellness content clusters that drive qualified purchase intent.",
  },
  {
    title: "Cannabis Brand Link Building",
    desc: "Editorial links from CBD media, wellness publications, health lifestyle sites, and hemp industry directories. A specialist publisher network that generalist agencies cannot access.",
  },
  {
    title: "Compliance-Aware Content",
    desc: "Content built within FSA, ASA, TGA, and Health Canada advertising frameworks — maximising organic visibility without triggering regulatory enforcement or Google manual actions.",
  },
  {
    title: "Google-Safe SEO for Restricted Categories",
    desc: "Deep knowledge of how Google treats cannabis, CBD, and hemp content — what ranks freely, what requires careful framing, and how to build topical authority within platform policies.",
  },
  {
    title: "Cannabis Lifestyle & Media SEO",
    desc: "Audience-building organic strategy for cannabis lifestyle brands, cannabis tech startups, and cannabis media — content clusters, brand entity optimisation, and editorial authority development.",
  },
];

const faqs = [
  {
    q: "What is cannabis SEO and how is it different from marijuana dispensary SEO?",
    a: "Cannabis SEO targets CBD brands, hemp companies, cannabis lifestyle businesses, and cannabis tech startups — focusing on brand building, content authority, and compliance-aware marketing. Dispensary SEO targets licensed marijuana retailers with local search, 'dispensary near me' terms, and state-level regulatory compliance. The audiences, keywords, and content approaches are fundamentally different. FastSEO operates both as distinct practices.",
  },
  {
    q: "Can CBD brands advertise on Google organically?",
    a: "Yes — Google freely indexes and ranks CBD content. Paid advertising for CBD on Google remains severely restricted, which makes organic search the primary acquisition channel for CBD brands. CBD SEO leverages this gap: brands that invest in high-quality, compliant organic content compete effectively in a market where competitors cannot simply buy their way to the top.",
  },
  {
    q: "How do you handle FSA Novel Food restrictions for UK CBD SEO?",
    a: "FSA Novel Food authorisation status is central to UK CBD SEO strategy — we reference authorisation as an E-E-A-T trust signal and ensure all health-adjacent content stays within ASA advertising restrictions. CBD brands with valid Novel Food authorisation have a meaningful compliance-based ranking advantage. Our content strategy leverages this without risking ASA enforcement — using permissible framing: ingredient education, lifestyle positioning, and informational content.",
  },
  {
    q: "Do you work with hemp eCommerce brands?",
    a: "Yes. Hemp eCommerce SEO is a core service — covering product page optimisation, category architecture, hemp ingredient education hubs, and wellness content strategy. Hemp brands face the same ad restrictions as CBD brands, making organic the dominant acquisition channel. We build the topical authority and technical foundation that turns organic traffic into revenue for hemp eCommerce brands.",
  },
  {
    q: "What cannabis lifestyle and tech brands do you work with?",
    a: "We work with cannabis media publications, cannabis tech platforms (compliance SaaS, POS systems, seed-to-sale software), cannabis lifestyle brands (accessories, apparel, experiences), and cannabis B2B businesses. These segments have distinct SEO profiles from both dispensaries and CBD brands — brand entity development, thought leadership content, and industry media link acquisition are the primary growth levers.",
  },
  {
    q: "How long does cannabis brand SEO take to show results?",
    a: "CBD product and brand terms typically show measurable organic movement within 4–6 months with consistent content investment. Hemp eCommerce category terms take 5–8 months. Cannabis lifestyle and media brand visibility — measured by branded search volume, featured snippets, and media mentions — builds over 6–12 months as topical authority compounds. UK FSA-authorised CBD brands see faster movement given the compliance trust signal advantage.",
  },
];

export default function CannabisSeoPage() {
  return (
    <ServicePage
      label="Cannabis SEO"
      title="Cannabis SEO Agency — CBD & Hemp Brand Growth"
      subtitle="For CBD brands, hemp companies, cannabis lifestyle businesses and cannabis tech startups, organic search is the only scalable acquisition channel available. Ad bans, banking restrictions, and platform policies close every paid door — we open the organic one."
      features={features}
      faqs={faqs}
      canonicalPath={CANONICAL}
      serviceName="Cannabis SEO Agency"
      serviceDescription="Specialist cannabis SEO for CBD brands, hemp companies, cannabis lifestyle businesses and cannabis tech startups. FSA, TGA and ASA-compliant content strategy for restricted category brands."
    >
      <h2>Cannabis Brand SEO — Not Dispensary SEO</h2>
      <p>
        CBD brands, hemp companies, cannabis lifestyle businesses, and cannabis technology startups
        occupy a distinct market from marijuana dispensaries. Their customers are brand-conscious
        wellness consumers, not dispensary shoppers. Their keywords are health, lifestyle, and
        product-focused, not location-based. And their compliance landscape — FSA Novel Food in
        the UK, TGA advertising code in Australia, Health Canada in Canada — requires a content
        strategy built specifically for regulated wellness brands.
      </p>
      <p>
        FastSEO builds organic growth programmes for cannabis brands that operate in this space.
        We understand the compliance boundaries, the keyword opportunities, and the publisher
        relationships needed to build domain authority in an industry where paid advertising is
        effectively closed.
      </p>

      <h3>Why Cannabis Brands Need Specialist SEO</h3>
      <p>
        Three forces make specialist SEO non-negotiable for cannabis brands:
      </p>
      <ul>
        <li><strong>Ad bans:</strong> Google Ads, Meta, TikTok, and most major ad platforms block or severely restrict cannabis and CBD advertising — making organic the dominant acquisition channel by default.</li>
        <li><strong>Banking and payment restrictions:</strong> Financial restrictions limit the tools and platforms cannabis brands can access, increasing reliance on owned organic channels that don&apos;t require payment processor approval.</li>
        <li><strong>Content restrictions:</strong> FSA, ASA, TGA, and Health Canada advertising rules govern what cannabis brands can say about their products. Generalist agencies write content that triggers regulatory risk. We write content that ranks and complies.</li>
      </ul>

      <h3>Markets We Serve</h3>
      <p>
        We deliver cannabis brand SEO across four primary markets:
      </p>
      <ul>
        <li><strong>United Kingdom:</strong> FSA Novel Food-authorised CBD brands, medical cannabis clinics, and hemp wellness businesses operating within ASA restrictions.</li>
        <li><strong>Canada:</strong> Health Canada-compliant CBD brands, cannabis lifestyle media, and cannabis tech startups operating under the Cannabis Act framework.</li>
        <li><strong>European Union:</strong> EU Novel Food-compliant CBD brands, cannabis reform advocacy organisations, and hemp B2B businesses across Germany, Netherlands, Spain, and Czech Republic.</li>
        <li><strong>Australia:</strong> TGA advertising code-compliant CBD and hemp brands, Schedule 3 OTC wellness brands, and cannabis media targeting Australia&apos;s sophisticated healthcare-literate consumer base.</li>
      </ul>
    </ServicePage>
  );
}
