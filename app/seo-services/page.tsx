import type { Metadata } from "next";
import Link from "next/link";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "SEO Services — Specialist SEO Agency for Regulated & Competitive Niches",
  description:
    "Comprehensive SEO services from FastSEO — technical SEO, link building, on-page optimisation, and local SEO for iGaming, adult, crypto, cannabis, dental, SaaS, and eCommerce. Free audit.",
  alternates: { canonical: "https://www.fastseosolutions.com/seo-services/" },
  openGraph: {
    title: "SEO Services — Specialist Agency for Regulated Niches | FastSEO",
    description:
      "Full-service SEO agency for iGaming, adult, cryptocurrency, cannabis, dental, SaaS, and eCommerce. Technical SEO, link building, content, and local SEO that delivers measurable results.",
    url: "https://www.fastseosolutions.com/seo-services/",
    images: [
      {
        url: "https://www.fastseosolutions.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "SEO Services — FastSEO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Services | FastSEO",
    description:
      "Specialist SEO services for regulated and competitive niches. iGaming, adult, crypto, cannabis, dental, SaaS, and eCommerce. Free audit.",
    images: ["https://www.fastseosolutions.com/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

const features = [
  {
    title: "Technical SEO",
    desc: "Full technical audits covering site architecture, crawlability, Core Web Vitals, page speed, canonicalisation, structured data, and indexation. We identify and fix the technical barriers that silently prevent your site from ranking — before any content or link work begins.",
  },
  {
    title: "Link Building",
    desc: "Manual editorial backlinks from niche-relevant publishers, digital PR placements, and authoritative directories. Our link building is tailored to your vertical — including specialist adult link building, iGaming publisher outreach, and crypto-native editorial placements that generalist agencies cannot access.",
  },
  {
    title: "On-Page SEO",
    desc: "Keyword research, intent mapping, title tags, meta descriptions, heading structure, internal linking, and schema markup — implemented across every key page on your site. Every on-page decision is driven by data and aligned to what your specific audience actually searches for.",
  },
  {
    title: "Local SEO",
    desc: "Google Business Profile optimisation, consistent NAP citation building, local pack strategies, and location page development for businesses targeting customers in specific cities or regions. Local SEO is the highest-ROI channel for service businesses — we execute it with precision.",
  },
  {
    title: "Content SEO",
    desc: "Keyword-researched, E-E-A-T optimised articles, pillar pages, and service pages that build topical authority in your niche. Content is written by specialists who understand your vertical — not generalists producing generic copy that fails to rank or convert.",
  },
  {
    title: "Niche & Restricted Verticals",
    desc: "Adult SEO, iGaming SEO, cryptocurrency SEO, cannabis SEO, and other regulated verticals where mainstream agencies refuse to operate. Our specialist niche SEO services are built around the specific technical requirements, compliance constraints, and link acquisition approaches each restricted vertical demands.",
  },
];

const faqs = [
  {
    q: "What SEO services does FastSEO offer?",
    a: "We provide a full suite of SEO services: technical SEO audits and implementation, link building and digital PR, on-page optimisation, keyword research, local SEO, content strategy, and AI search visibility (AEO). All services are delivered by niche specialists rather than generalist teams — giving you the specific expertise your vertical requires rather than a generic agency approach.",
  },
  {
    q: "Do you work with regulated and adult businesses?",
    a: "Yes — this is our core speciality. We work with adult content platforms, escort agencies, strip clubs, iGaming and casino brands, cryptocurrency and DeFi projects, cannabis dispensaries, and other restricted-niche businesses that most SEO agencies refuse to take on. Our specialist knowledge, compliance awareness, and niche publisher networks are specifically built for these verticals.",
  },
  {
    q: "How long does it take to see SEO results?",
    a: "Most clients see measurable ranking improvements within 3–6 months, with significant organic traffic and revenue growth by months 6–12. SEO compounds over time — the longer a well-executed strategy runs, the stronger the returns. We set realistic milestones from day one and provide full monthly reporting on all progress.",
  },
  {
    q: "How much do your SEO services cost?",
    a: "Our SEO packages are scoped to your specific site, niche, and competitive landscape — there are no one-size-fits-all retainers. Pricing depends on the volume of work required, the competitiveness of your target keywords, and the specialist knowledge your vertical demands. We provide a detailed proposal after a free audit so you know exactly what you are getting and why.",
  },
  {
    q: "Do you offer SEO packages for different budgets?",
    a: "Yes. We structure SEO packages around what your business actually needs to move rankings rather than arbitrary tier pricing. Whether you need a focused technical SEO project, an ongoing link building retainer, or a full-service monthly SEO package covering technical, content, and links — we scope the engagement to match your goals and budget.",
  },
  {
    q: "What makes FastSEO different from other SEO agencies?",
    a: "We only operate in niches we deeply specialise in. No generalist teams, no passing work to juniors. Our SEO services are built by specialists who spend every working day in your vertical — with the technical depth, publisher relationships, and keyword intelligence to deliver results that generic agencies cannot replicate. Every recommendation is backed by data, every result is transparently reported.",
  },
];

const schemaService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO Services",
  description:
    "Comprehensive SEO services including technical SEO, link building, on-page optimisation, local SEO, and content strategy for regulated and competitive niches.",
  provider: {
    "@type": "Organization",
    name: "FastSEO",
    url: "https://www.fastseosolutions.com",
  },
  areaServed: "Worldwide",
  serviceType: "Search Engine Optimisation",
};

const schemaFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function SeoServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }}
      />
      <ServicePage
        label="SEO Services"
        title="SEO Services for Regulated &amp; Competitive Niches"
        subtitle="Most SEO agencies play it safe. We go where the real opportunity is — iGaming, adult, cryptocurrency, cannabis, SaaS, and other competitive verticals where specialist knowledge is the difference between ranking and being invisible. Full-service SEO, built for niches that demand more."
        features={features}
        faqs={faqs}
        canonicalPath="/seo-services/"
        serviceName="SEO Services"
        serviceDescription="Comprehensive SEO services — technical SEO, link building, on-page optimisation, local SEO, and content strategy for regulated and competitive niches."
      >
        <h2>What Our SEO Services Cover</h2>
        <p>
          Effective SEO is not a single tactic — it is a coordinated strategy across technical
          performance, on-page content, link authority, and search intent alignment. Our SEO
          services deliver all four as a unified programme, scoped to the specific competitive
          environment your business operates in. Whether you need a specialist{" "}
          <Link href="/adult-seo/" className="text-lime hover:underline">
            adult SEO agency
          </Link>
          , a results-focused{" "}
          <Link href="/igaming-seo/" className="text-lime hover:underline">
            iGaming SEO partner
          </Link>
          , or a full-service team for a{" "}
          <Link href="/saas-seo/" className="text-lime hover:underline">
            SaaS brand
          </Link>{" "}
          or{" "}
          <Link href="/ecommerce-seo/" className="text-lime hover:underline">
            eCommerce store
          </Link>
          , we build the strategy around your market — not a generic template.
        </p>

        <h3>Technical SEO Services</h3>
        <p>
          Technical SEO is the foundation everything else is built on. Before content or links
          can move rankings, Google needs to be able to crawl, render, and index your site
          correctly. Our technical SEO services begin with a comprehensive audit covering site
          architecture, crawl budget management, duplicate content, canonicalisation, page speed,
          Core Web Vitals, structured data, and indexation health. We then implement fixes
          directly — not a report that sits in your inbox. For adult and regulated sites, our
          technical audits also cover age verification compliance and content-specific indexation
          requirements that generic agencies miss entirely.
        </p>

        <h3>Link Building Services</h3>
        <p>
          Backlink authority remains one of the strongest ranking signals in competitive niches.
          Our{" "}
          <Link href="/link-building-services/" className="text-lime hover:underline">
            link building services
          </Link>{" "}
          combine manual editorial outreach, niche edit placements, and digital PR campaigns to
          build a link profile that withstands algorithm updates. For adult and restricted-niche
          clients, our{" "}
          <Link href="/adult-linkbuilding/" className="text-lime hover:underline">
            adult link building service
          </Link>{" "}
          provides access to a pre-built publisher network that mainstream link building agencies
          simply do not have — earning genuine editorial backlinks from adult publications, sexual
          health media, and lifestyle sites.
        </p>

        <h3>On-Page SEO &amp; Content Strategy</h3>
        <p>
          On-page SEO ensures every page on your site is targeted at the right keyword, structured
          to match search intent, and optimised for both Google and the humans clicking through
          from the SERP. We combine keyword research, content gap analysis, heading architecture,
          schema markup, and internal linking into a coherent on-page strategy. Our content
          services extend to E-E-A-T optimised articles, pillar pages, and supporting cluster
          content that builds topical authority across your niche.
        </p>

        <h2>Specialist SEO Services by Niche</h2>
        <p>
          We operate exclusively in niches that require specialist knowledge. Each vertical below
          has its own dedicated SEO service, built around the specific challenges, keyword
          landscape, and link acquisition approach that niche demands:
        </p>
        <ul>
          <li>
            <Link href="/adult-seo/" className="text-lime hover:underline">
              Adult SEO
            </Link>{" "}
            — adult websites, porn sites, escort agencies, cam platforms, and adult eCommerce
          </li>
          <li>
            <Link href="/igaming-seo/" className="text-lime hover:underline">
              iGaming SEO
            </Link>{" "}
            — casino, sports betting, poker, and regulated gambling operators
          </li>
          <li>
            <Link href="/cryptocurrency-seo/" className="text-lime hover:underline">
              Crypto SEO
            </Link>{" "}
            — exchanges, DeFi protocols, NFT projects, and blockchain gaming
          </li>
          <li>
            <Link href="/marijuana-seo/" className="text-lime hover:underline">
              Cannabis SEO
            </Link>{" "}
            — dispensaries, cannabis brands, and CBD businesses in regulated markets
          </li>
          <li>
            <Link href="/dental-seo/" className="text-lime hover:underline">
              Dental SEO
            </Link>{" "}
            — local and national dental practices targeting patient acquisition
          </li>
          <li>
            <Link href="/saas-seo/" className="text-lime hover:underline">
              SaaS SEO
            </Link>{" "}
            — software brands targeting commercial and informational intent
          </li>
          <li>
            <Link href="/ecommerce-seo/" className="text-lime hover:underline">
              eCommerce SEO
            </Link>{" "}
            — online retailers on Shopify, WooCommerce, Magento, and custom platforms
          </li>
          <li>
            <Link href="/law-firm-seo/" className="text-lime hover:underline">
              Law Firm SEO
            </Link>{" "}
            — solicitors and law firms building local search authority and qualified enquiries
          </li>
          <li>
            <Link href="/strippers-seo/" className="text-lime hover:underline">
              Strippers &amp; Adult Entertainment SEO
            </Link>{" "}
            — performers, strip clubs, and adult entertainment booking platforms
          </li>
          <li>
            <Link href="/adult-linkbuilding/" className="text-lime hover:underline">
              Adult Link Building
            </Link>{" "}
            — specialist backlinks for adult sites, escort directories, and porn platforms
          </li>
        </ul>

        <h2>Why Choose FastSEO for SEO Services</h2>
        <p>
          We built FastSEO specifically for the niches that most agencies turn away. Our
          advantage is not a larger team or a flashier reporting dashboard — it is years of
          specialist knowledge in the exact verticals where the organic search opportunity is
          largest and the barriers to entry are highest. The technical compliance requirements of
          adult SEO, the regulatory landscape of iGaming, the content restrictions of
          cryptocurrency — we navigate all of these as standard practice, not as edge cases.
          Explore our full{" "}
          <Link href="/niche-seo/" className="text-lime hover:underline">
            niche SEO services
          </Link>{" "}
          or{" "}
          <Link href="/contact/" className="text-lime hover:underline">
            request a free SEO audit
          </Link>{" "}
          to see exactly where your organic growth opportunity lies.
        </p>
      </ServicePage>
    </>
  );
}
