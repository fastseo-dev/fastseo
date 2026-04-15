import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Link Building Services — Niche Link Building for Competitive Industries",
  description:
    "High-authority niche link building for iGaming, crypto, adult, SaaS, cannabis and dental industries. Manual outreach, niche edits, and digital PR. No PBNs. Free link audit.",
  alternates: { canonical: "https://www.fastseosolutions.com/link-building-services/" },
};

const features = [
  {
    title: "Manual Outreach",
    desc: "Personalised, relationship-based outreach to relevant publishers in your niche. Every link placement is negotiated individually — no templates, no bulk spam.",
  },
  {
    title: "Niche Edits & Link Insertions",
    desc: "Contextual backlinks inserted into existing, indexed content on high-DA domains relevant to your industry. Faster than new content, with immediate link equity.",
  },
  {
    title: "Digital PR",
    desc: "Data-driven PR campaigns that earn coverage and links from authoritative news sites, trade publications, and industry media in your vertical.",
  },
  {
    title: "Guest Post Placements",
    desc: "Expertly written guest articles placed on vetted, relevant publications in your niche — combining content quality with targeted anchor text and link placement.",
  },
  {
    title: "Broken Link Building",
    desc: "Identifying broken links on authoritative sites in your niche and replacing them with your content — a white-hat tactic that benefits both parties.",
  },
  {
    title: "Competitor Gap Analysis",
    desc: "Reverse-engineering your competitors' backlink profiles to identify their highest-value link sources — then building the same links for your site.",
  },
];

const faqs = [
  {
    q: "What makes your link building different from other agencies?",
    a: "We specialise in restricted and competitive niches — iGaming, crypto, adult, cannabis — where most link building agencies simply cannot operate. Our outreach network has been built over years in these verticals, giving us access to publisher relationships that generic agencies do not have. Every link is placed manually, reviewed for quality, and reported transparently.",
  },
  {
    q: "Do you use PBNs or black-hat link building tactics?",
    a: "Never. We use exclusively white-hat link acquisition methods: manual outreach, editorial placements, digital PR, and niche edits on real, indexed websites. PBNs and manipulative link schemes carry significant algorithmic and manual penalty risk — we will not put your domain at risk.",
  },
  {
    q: "What domain authority and metrics do you target?",
    a: "We focus on relevance first, authority second. A DR40 link from a highly relevant niche publication outperforms a DR80 link from an unrelated domain. That said, we target a minimum DR threshold appropriate to your campaign goals and only place links on sites with genuine organic traffic.",
  },
  {
    q: "Can you build links for adult, iGaming, and crypto websites?",
    a: "Yes — this is precisely our specialisation. We have built dedicated publisher networks in adult, iGaming, cryptocurrency, cannabis, and other restricted niches where standard link building agencies cannot secure placements. See our niche-specific pages for more details.",
  },
  {
    q: "How many links can I expect per month?",
    a: "Campaigns typically range from 5–30 links per month depending on budget, niche difficulty, and link quality targets. We prioritise quality over volume — a small number of genuinely relevant, high-authority links deliver far more ranking impact than dozens of low-quality placements.",
  },
  {
    q: "Do you offer link building as part of a full SEO retainer or standalone?",
    a: "Both. Link building is available as a standalone service for clients who manage their own on-page SEO, or as part of a full SEO retainer that includes technical, content, and link acquisition together. Most clients find the integrated approach delivers faster and more sustained results.",
  },
];

export default function LinkBuildingServicesPage() {
  return (
    <ServicePage
      label="Link Building"
      title="Link Building Services"
      subtitle="High-authority, niche-relevant backlinks for the most competitive industries on the internet. Manual outreach and editorial placements — never PBNs, never spam."
      features={features}
      faqs={faqs}
      canonicalPath="/link-building-services/"
      serviceName="Link Building Services"
      serviceDescription="Specialist niche link building for iGaming, crypto, adult, SaaS and cannabis industries. Manual outreach, niche edits, digital PR, and guest posts. No PBNs."
    >
      <h2>Niche Link Building for Competitive Industries</h2>
      <p>
        Backlinks remain one of the most powerful ranking signals in Google's algorithm —
        and in competitive niches like iGaming, cryptocurrency, and adult, link acquisition
        is often the single most important lever for improving organic rankings.
      </p>
      <p>
        FastSEO's link building practice is built around one principle: every link must be
        genuinely relevant, placed on a real website with real traffic, and earned through
        editorial relationships rather than manipulative schemes. We have spent years building
        publisher networks in the restricted and competitive niches where our clients operate.
      </p>
      <h3>Why Niche Link Building Requires Specialists</h3>
      <p>
        Generic link building agencies cannot secure placements in iGaming, adult, or
        cannabis verticals — their publisher relationships are in mainstream niches that
        will not accept this content. Our network is purpose-built for restricted industries,
        giving us access to the exact publishers that can move rankings in your niche.
      </p>
      <h3>Our Link Building Process</h3>
      <ul>
        <li>Backlink audit of your existing profile and competitor gap analysis</li>
        <li>Publisher prospecting and vetting — relevance, traffic, authority, and indexation</li>
        <li>Outreach and relationship development with target publishers</li>
        <li>Content creation or negotiation for editorial placements</li>
        <li>Link placement, reporting, and ongoing monitoring</li>
        <li>Monthly link report with all placements, metrics, and anchor text detail</li>
      </ul>
      <h3>Niche-Specific Link Building</h3>
      <p>
        We offer dedicated link building campaigns for iGaming (casinos, sportsbooks, affiliates),
        cryptocurrency (exchanges, DeFi, NFT), adult (content platforms, escorts, adult retail),
        cannabis (dispensaries, CBD brands), SaaS (tech and software), and dental practices.
        Each niche has a dedicated publisher network and outreach approach.
      </p>
    </ServicePage>
  );
}
