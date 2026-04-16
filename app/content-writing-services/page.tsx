import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "SEO Content Writing Services — E-E-A-T Content for Regulated Niches",
  description:
    "Expert SEO content writing for iGaming, crypto, adult, cannabis, dental and SaaS. E-E-A-T-optimised blog posts, landing pages and editorial content that ranks and converts.",
  alternates: { canonical: "https://www.fastseosolutions.com/content-writing-services/" },
  robots: { index: false, follow: false },
};

const features = [
  {
    title: "E-E-A-T-Optimised Content",
    desc: "Every piece of content is built to demonstrate Experience, Expertise, Authoritativeness, and Trustworthiness — the four signals Google uses to rank content in competitive and YMYL niches.",
  },
  {
    title: "Niche-Specific Writers",
    desc: "Our writers are embedded in the niches they cover. iGaming content is written by people who understand gambling regulation. Crypto content is written by people who understand DeFi. No generalists repurposing thin AI copy.",
  },
  {
    title: "Keyword Strategy & Mapping",
    desc: "We build a full keyword map before writing a single word — identifying primary targets, semantic clusters, search intent, and internal linking opportunities across your entire content architecture.",
  },
  {
    title: "Landing Page Copy",
    desc: "High-converting service and product pages with the right keyword density, semantic structure, and on-page signals. Pages built to rank and convert — not just exist.",
  },
  {
    title: "Blog & Editorial Content",
    desc: "Long-form guides, comparison articles, how-to content, and educational posts that build topical authority. The content clusters that tell Google — and AI models — that you are the expert.",
  },
  {
    title: "Content Audits & Refreshes",
    desc: "Existing content that has decayed or never ranked gets audited, rewritten, and re-optimised. Often the fastest wins come from improving what you already have rather than creating from scratch.",
  },
];

const faqs = [
  {
    q: "What makes your SEO content different from generic content writing?",
    a: "Our writers have deep knowledge of the niches they write for — iGaming, crypto, adult, cannabis, dental, SaaS. They understand the regulatory landscape, the audience, the competitor content, and the specific E-E-A-T requirements that apply. Generic content mills produce copy that looks like SEO content but lacks the depth and expertise that Google rewards in competitive verticals.",
  },
  {
    q: "Do you write content for restricted niches like adult and cannabis?",
    a: "Yes — this is one of our core specialisms. We write compliant, high-quality content for adult platforms, cannabis dispensaries, CBD brands, and hemp businesses. We understand the compliance requirements and content restrictions that apply in each niche and create content that stays within them while ranking effectively.",
  },
  {
    q: "How do you handle E-E-A-T for YMYL niches like crypto and dental?",
    a: "For YMYL topics (crypto investing, dental health, financial products), we build content that demonstrates clear expertise signals: author credentials, cited sources, factual accuracy, structured formatting, and the depth that authoritative resources require. We can also work with your in-house experts to capture genuine experience — a key differentiator Google is increasingly rewarding.",
  },
  {
    q: "What is the typical content delivery process?",
    a: "We start with a keyword strategy and content brief for each piece. The brief covers target keyword, search intent, competitor analysis, required headings, and key points to cover. Writers produce a first draft which goes through our SEO and editorial review before delivery. You receive clean, ready-to-publish content with optional formatting for your CMS.",
  },
  {
    q: "Can you produce content at scale?",
    a: "Yes. We can produce anywhere from a handful of strategic landing pages to hundreds of blog posts per month. Scale does not come at the cost of quality — every piece, regardless of volume, goes through the same keyword strategy, brief, and editorial review process.",
  },
  {
    q: "How do you measure content performance?",
    a: "We track rankings for target keywords, organic traffic growth to content pages, engagement metrics (time on page, bounce rate), and conversion attribution where applicable. Monthly reporting shows exactly which content is driving organic growth and where further optimisation is needed.",
  },
];

export default function ContentWritingServicesPage() {
  return (
    <ServicePage
      label="Content Writing"
      title="SEO Content Writing for Regulated & Competitive Niches"
      subtitle="Generic content does not rank in iGaming, crypto, adult, or cannabis. We write deeply researched, E-E-A-T-optimised content by niche specialists — the content that earns rankings in the industries where expertise is non-negotiable."
      features={features}
      faqs={faqs}
      canonicalPath="/content-writing-services/"
      serviceName="SEO Content Writing Services"
      serviceDescription="E-E-A-T-optimised SEO content writing for regulated niches including iGaming, crypto, adult, cannabis, dental and SaaS. Blog posts, landing pages, and editorial content that ranks."
    >
      <h2>Why Content Quality Matters More in Regulated Niches</h2>
      <p>
        Google's E-E-A-T framework (Experience, Expertise, Authoritativeness, Trustworthiness)
        applies to every site, but its impact is greatest in Your Money or Your Life (YMYL)
        categories — gambling, finance, health, and related industries. Content that lacks
        genuine expertise signals in these niches does not just underperform; it actively
        suppresses rankings.
      </p>
      <p>
        For iGaming operators, this means content written by people who understand gaming
        regulation, responsible gambling requirements, and the specific trust signals that
        gambling audiences and Google's quality raters look for. For crypto platforms, it
        means financial accuracy, regulatory awareness, and the kind of depth that earns
        citations from authoritative publications. For dental practices, it means
        clinically accurate content that demonstrates real healthcare expertise.
      </p>
      <h3>Our Content Strategy Process</h3>
      <ul>
        <li>Full keyword research and topical authority mapping for your niche</li>
        <li>Content gap analysis against your top 3–5 organic competitors</li>
        <li>Brief creation: keyword targets, intent mapping, heading structure, semantic requirements</li>
        <li>Niche-specialist writing with editorial SEO review</li>
        <li>Internal linking strategy implementation</li>
        <li>Performance tracking and iterative optimisation based on ranking data</li>
      </ul>
      <h3>Content Types We Produce</h3>
      <p>
        We write across the full content spectrum: long-form educational guides (1,500–5,000+
        words), comparison and review pages, how-to content, FAQ pages, landing pages for
        service and product terms, blog posts, and press release content for link acquisition.
        Every content type is optimised for its specific ranking objective — informational,
        navigational, or transactional — rather than applying a one-size-fits-all template.
      </p>
      <h3>AI-Assisted, Human-Led</h3>
      <p>
        We use AI tools in our content process — but as research and drafting aids, not
        final output generators. Every piece is written, reviewed, and edited by a niche
        specialist who can verify accuracy, add genuine expert perspective, and apply the
        nuanced SEO judgment that AI alone cannot replicate. The result is content that
        reads as authoritative to both human readers and Google's quality evaluation systems.
      </p>
    </ServicePage>
  );
}
