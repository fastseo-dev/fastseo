import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Cannabis & Marijuana SEO Agency — CBD & Hemp SEO Services",
  description:
    "Specialist SEO for cannabis, marijuana, CBD and hemp businesses. Reach the top of search results for recreational drug and dispensary keywords.",
  alternates: { canonical: "https://www.fastseosolutions.com/marijuana-seo/" },
};

const features = [
  {
    title: "Competitors Audit",
    desc: "Before we start, our research team digs deep into your business profile, competitors, and opportunity gaps — devising a plan based on real market data.",
  },
  {
    title: "Website Optimisation",
    desc: "We build a fully optimised cannabis website with all the interactive elements in place, crafted to rank and retain visitors.",
  },
  {
    title: "Cannabis Keywords",
    desc: "We employ a thorough research process counting all factors — keyword density, volume, and reach — to ensure your content hits the right notes.",
  },
  {
    title: "Cannabis Link Building",
    desc: "Link building for cannabis companies must be strategic and well-planned. With our experience, we make it a major stepping stone for your success.",
  },
  {
    title: "Cannabis Content",
    desc: "Our experienced content writing team delivers well-researched, keyword-rich content for on-page and guest posts targeting your specific cannabis niche.",
  },
  {
    title: "Community Management",
    desc: "We keep track of every mention across Facebook, Twitter, and forums — keeping your online image untarnished in the cannabis space.",
  },
];

export default function MarijuanaSeoPage() {
  return (
    <ServicePage
      label="Cannabis SEO"
      title="Cannabis & Marijuana SEO"
      subtitle="If your cannabis or CBD business isn't on the first page of Google, you've lost the sale before it started. We rank marijuana, CBD, hemp, and cannabis businesses at the top — consistently."
      features={features}
    >
      <h2>SEO for Cannabis & Marijuana Websites</h2>
      <p>
        Marijuana, CBD, hemp, and cannabis are different spheres where ranking online
        requires domain expertise. Paid advertising is heavily restricted in this space,
        making organic search the primary — and often the only — scalable customer
        acquisition channel.
      </p>
      <p>
        FastSEO has cracked the formula for ranking cannabis businesses consistently at
        the top of search results. Over years of association with industry leaders in the
        recreational cannabis space, we have built the knowledge and network to deliver
        results others can&apos;t.
      </p>
      <h3>Why Cannabis SEO Requires a Specialist</h3>
      <p>
        Standard SEO agencies lack the experience — and often the willingness — to work
        in the cannabis space. Keyword targeting requires nuance; link building requires
        a specific network; and content must navigate a careful balance between commercial
        and informational intent. We have done this for years.
      </p>
      <h3>Our Cannabis SEO Services</h3>
      <ul>
        <li>Cannabis-specific keyword research and content mapping</li>
        <li>On-page SEO for dispensary, CBD, hemp, and marijuana websites</li>
        <li>Strategic link building from relevant, high-authority sources</li>
        <li>Technical SEO audit and site architecture optimisation</li>
        <li>Content creation for blog, product pages, and educational resources</li>
        <li>Community management and brand reputation monitoring</li>
      </ul>
    </ServicePage>
  );
}
