import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import ServicesGrid from "@/components/sections/ServicesGrid";
import CaseStudiesPreview from "@/components/sections/CaseStudiesPreview";
import CTAStrip from "@/components/sections/CTAStrip";
import FAQAccordion from "@/components/sections/FAQAccordion";

export const metadata: Metadata = {
  title: "FastSEO — Fast SEO Services for Adult, iGaming, Crypto & Regulated Niches",
  description:
    "FastSEO delivers fast SEO services for adult websites, iGaming, cryptocurrency, cannabis, dental and SaaS brands. Specialist fast SEO results for niches most agencies refuse to touch. Free audit.",
  alternates: { canonical: "https://www.fastseosolutions.com/" },
  openGraph: {
    title: "FastSEO — Fast SEO Services for Adult, iGaming & Crypto",
    description:
      "Fast SEO services for regulated and competitive niches. Adult SEO, iGaming, Crypto, Cannabis, Dental & SaaS. Organic SEO solutions that rank where others won't. Free audit.",
    url: "https://www.fastseosolutions.com/",
    type: "website",
    images: [
      {
        url: "https://www.fastseosolutions.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "FastSEO — Fast SEO Services for Regulated Niches",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FastSEO — Fast SEO Services | Adult, iGaming & Crypto",
    description:
      "Specialist fast SEO services for adult websites, iGaming, crypto, and SaaS brands. Free audit.",
    images: ["https://www.fastseosolutions.com/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "FastSEO — Fast SEO Services for Adult, iGaming & Crypto",
  url: "https://www.fastseosolutions.com/",
  description:
    "Fast SEO services for adult websites, iGaming, cryptocurrency, cannabis, dental and SaaS brands.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fastseosolutions.com/" },
    ],
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FastSEO",
  alternateName: "FastSEO Solutions",
  url: "https://www.fastseosolutions.com",
  logo: "https://www.fastseosolutions.com/opengraph-image",
  description:
    "Specialist fast SEO services agency for adult websites, iGaming, cryptocurrency, cannabis, dental and SaaS. Fast SEO results for regulated and competitive niches.",
  email: "seo@fastseosolutions.com",
  areaServed: "Worldwide",
  sameAs: [
    "https://linkedin.com",
    "https://twitter.com",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What fast SEO services does FastSEO offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FastSEO provides fast SEO services for organic growth across the most competitive and restricted niches — adult websites, iGaming, cryptocurrency, cannabis, dental, and SaaS. Our fast SEO strategies combine technical audits, on-page optimisation, specialist link building, and AI-search visibility to deliver measurable ranking improvements faster than generalist agencies. Whether you need fast SEO results for an adult site, a crypto brand, or an eCommerce store, we build the strategy around your specific competitive environment.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide adult SEO services — including for escort agencies, strippers, and BDSM businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We are a specialist adult SEO agency working across the full adult industry — adult content platforms, porn sites, escort agencies and directories, exotic dancers, strippers, dominatrix and BDSM services, sex toy eCommerce, and cam sites. Our adult SEO services cover technical optimisation, adult keyword strategy, and a pre-built adult publisher network for link building. We are the adult SEO company for niches most agencies refuse to touch.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with iGaming brands in restricted markets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We have deep experience in grey and regulated markets across the UK, EU, Canada, and Tier 1 jurisdictions. We understand compliance requirements and build fast SEO strategies that hold up to regulatory scrutiny while delivering consistent organic growth.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer crypto SEO and blockchain gaming SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide specialist crypto SEO services for cryptocurrency exchanges, DeFi platforms, NFT projects, and blockchain gaming SEO for Web3 gaming brands. Crypto and gaming SEO requires specialist knowledge — many content categories are restricted on mainstream ad platforms, making organic SEO solutions the primary acquisition channel. Our crypto SEO solutions target the keyword clusters and backlink sources that rank in this vertical.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to see fast SEO results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most clients see meaningful ranking movement in 3–6 months, with significant traffic growth by months 6–12. Highly competitive niches like iGaming and crypto typically require 6–12 months for top-3 rankings on commercial keywords. Adult SEO keywords often have lower competition, which can accelerate fast SEO results in some niches. We set realistic milestones from day one and provide full monthly reporting on all progress.",
      },
    },
    {
      "@type": "Question",
      name: "What makes FastSEO different from other SEO agencies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We only operate in niches we deeply specialise in — adult SEO, iGaming, crypto, cannabis, SaaS, and other restricted verticals. No generalist approach, no passing work to juniors. Our fast SEO services are built by specialists who spend every day in your niche. Every result is transparently reported, every recommendation is backed by data, and every client gets a dedicated specialist — not a rotating account team.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <StatsBar />
      <ServicesGrid />
      <CaseStudiesPreview />
      <CTAStrip />
      <FAQAccordion />
    </>
  );
}
