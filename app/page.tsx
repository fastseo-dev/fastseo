import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import ServicesGrid from "@/components/sections/ServicesGrid";
import CaseStudiesPreview from "@/components/sections/CaseStudiesPreview";
import CTAStrip from "@/components/sections/CTAStrip";
import FAQAccordion from "@/components/sections/FAQAccordion";

export const metadata: Metadata = {
  title: "FastSEO — Specialist SEO Agency for iGaming, Crypto, Adult & SaaS",
  description:
    "FastSEO is a specialist SEO agency for iGaming, cryptocurrency, adult, cannabis, dental and SaaS. We rank brands Google won't touch and get you cited by ChatGPT, Gemini & Perplexity.",
  alternates: { canonical: "https://www.fastseosolutions.com/" },
  openGraph: {
    title: "FastSEO — Specialist SEO Agency for iGaming, Crypto, Adult & SaaS",
    description:
      "Specialist SEO for regulated & competitive niches. iGaming, Crypto, Adult, Cannabis, Dental & SaaS. Free SEO audit.",
    url: "https://www.fastseosolutions.com/",
    type: "website",
  },
};

const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "FastSEO — Specialist SEO Agency",
  url: "https://www.fastseosolutions.com/",
  description:
    "Specialist SEO agency for iGaming, cryptocurrency, adult, cannabis, dental and SaaS industries.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fastseosolutions.com/" },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you work with iGaming brands in restricted markets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We have deep experience in grey and regulated markets across the UK, EU, Canada, and Tier 1 jurisdictions. We understand compliance requirements and build strategies that hold up to scrutiny.",
      },
    },
    {
      "@type": "Question",
      name: "How do you get brands recommended by ChatGPT and Perplexity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Answer Engine Optimisation (AEO) focuses on structured data, topical authority, and citation-building across sources that AI engines index. We audit your brand's AI visibility, identify citation gaps, and build a programme to make your brand the go-to recommendation.",
      },
    },
    {
      "@type": "Question",
      name: "What link building tactics do you use for adult and crypto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Manual outreach to niche-relevant publishers, digital PR campaigns, broken link building, and editorial placements. We never use PBNs or black-hat tactics — our links are built to last algorithm updates.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to see SEO results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most clients see meaningful movement in 3–6 months. Highly competitive niches like iGaming and crypto typically require 6–12 months for top-3 rankings on money keywords. We set realistic milestones from day one.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer monthly retainers or project-based work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both. Most clients engage on a monthly retainer for ongoing SEO, content and link building. We also take on project-based work for technical audits, site migrations and one-off link campaigns.",
      },
    },
    {
      "@type": "Question",
      name: "What makes FastSEO different from other SEO agencies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We only work in verticals we deeply understand. No generalist agencies, no passing work to juniors. Every strategy is built by specialists who live in your niche — and every result is backed by data.",
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
