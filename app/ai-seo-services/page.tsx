import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "AI SEO & AEO Services — Get Recommended by ChatGPT, Gemini & Perplexity",
  description:
    "Answer Engine Optimisation (AEO) and AI search visibility services. Get your brand cited and recommended by ChatGPT, Gemini, Perplexity and Claude. Future-proof your SEO.",
  alternates: { canonical: "https://www.fastseosolutions.com/ai-seo-services/" },
};

const features = [
  {
    title: "AI Citation Optimisation",
    desc: "Structuring your content and brand presence so AI assistants cite and recommend you by name when users ask questions related to your niche.",
  },
  {
    title: "Entity Building",
    desc: "Establishing your brand as a recognised entity in Google's Knowledge Graph and across the web — the foundation of both AI and traditional search visibility.",
  },
  {
    title: "Structured Data & Schema",
    desc: "Comprehensive JSON-LD schema implementation — FAQPage, HowTo, Article, Organisation, and more — making your content machine-readable for AI and search engines alike.",
  },
  {
    title: "Topical Authority",
    desc: "Building deep, comprehensive coverage of your niche through content clusters — the signal that tells both Google and AI models you are the authoritative source on a topic.",
  },
  {
    title: "Conversational Content",
    desc: "Optimising content to match the natural language patterns of AI queries — answering questions directly, concisely, and with the depth AI assistants require to cite sources.",
  },
  {
    title: "AI Visibility Monitoring",
    desc: "Tracking your brand's citation frequency across ChatGPT, Gemini, Perplexity, and other AI assistants — measuring and growing your share of AI-powered search visibility.",
  },
];

const faqs = [
  {
    q: "What is Answer Engine Optimisation (AEO)?",
    a: "AEO is the practice of optimising your brand, content, and digital presence to be cited and recommended by AI-powered search tools including ChatGPT, Gemini, Perplexity, Claude, and Bing Copilot. As these tools increasingly answer queries directly rather than listing links, appearing in their responses is the new form of search visibility.",
  },
  {
    q: "How is AEO different from traditional SEO?",
    a: "Traditional SEO focuses on ranking in Google's blue-link results. AEO focuses on being cited in AI-generated answers. The underlying signals overlap significantly — topical authority, E-E-A-T, structured data, brand mentions — but AEO requires specific optimisations around answer-format content, entity establishment, and the conversational patterns AI models are trained on.",
  },
  {
    q: "How do you actually get a brand recommended by ChatGPT or Perplexity?",
    a: "AI assistants draw from their training data, real-time web search (for tools like Perplexity and Gemini), and structured knowledge sources. We build brand citations across high-authority publications, optimise your content for direct-answer formats, implement comprehensive schema markup, and build the entity signals that AI models use to recognise and recommend brands.",
  },
  {
    q: "Does AEO replace traditional SEO?",
    a: "No — they are complementary. Traditional SEO remains critical for driving direct organic traffic. AEO extends your visibility into AI-powered search channels where millions of queries are now being answered without a click to a search results page. The most forward-thinking brands invest in both simultaneously.",
  },
  {
    q: "Which AI search tools do you optimise for?",
    a: "ChatGPT (including GPT-4o web browsing), Google Gemini, Perplexity AI, Claude, Microsoft Copilot / Bing AI, and Apple Intelligence. Each tool has slightly different content preferences and citation behaviours — we tailor strategy to maximise visibility across all major platforms.",
  },
  {
    q: "Is AI search optimisation relevant for iGaming, crypto, and adult brands?",
    a: "Yes — and it is often underutilised in these niches, creating a significant first-mover opportunity. Perplexity and ChatGPT regularly answer queries about gambling operators, crypto platforms, and adult businesses. Brands that establish AI visibility early will compound that advantage as AI search grows.",
  },
];

export default function AiSeoServicesPage() {
  return (
    <ServicePage
      label="AI Search"
      title="AI Search Visibility & AEO"
      subtitle="Millions of searches never reach a results page — they are answered directly by ChatGPT, Gemini, and Perplexity. We get your brand cited in those answers and build visibility in the next era of search."
      features={features}
      faqs={faqs}
      canonicalPath="/ai-seo-services/"
      serviceName="AI SEO & AEO Services"
      serviceDescription="Answer Engine Optimisation and AI search visibility services. We get brands cited and recommended by ChatGPT, Gemini, Perplexity, and other AI assistants."
    >
      <h2>The Rise of AI-Powered Search</h2>
      <p>
        In 2024 and 2025, AI-powered search tools crossed a critical adoption threshold.
        ChatGPT surpassed 100 million daily active users. Perplexity became a mainstream
        research tool. Google Gemini is integrated into billions of devices. Users are
        increasingly asking questions and receiving complete answers — without ever clicking
        a traditional search result.
      </p>
      <p>
        For businesses that have invested only in traditional SEO, this shift is a threat.
        For those who adapt early, it is an enormous opportunity. FastSEO's AEO service
        is designed to make your brand the answer — in every channel where your customers
        are now searching.
      </p>
      <h3>How AI Assistants Choose What to Recommend</h3>
      <p>
        AI models like ChatGPT and Gemini synthesise information from their training data
        and real-time web sources. Brands and content that appear consistently across
        high-authority publications, are structured for machine readability, and demonstrate
        clear topical expertise are cited far more frequently than those without these signals.
        This is what we build.
      </p>
      <h3>Our AEO Strategy</h3>
      <ul>
        <li>Brand entity establishment across Google Knowledge Graph and structured data sources</li>
        <li>Comprehensive schema markup (FAQPage, HowTo, Article, Organisation, Service)</li>
        <li>Conversational and direct-answer content optimised for AI query patterns</li>
        <li>Topical authority content clusters covering your niche comprehensively</li>
        <li>Citation building across high-authority publications that AI models trust</li>
        <li>AI visibility monitoring — tracking your share of voice across ChatGPT, Gemini, Perplexity</li>
        <li>Integration with your broader SEO strategy for compounding impact</li>
      </ul>
      <h3>Built for Restricted Niches</h3>
      <p>
        Our AEO expertise is particularly valuable for iGaming, crypto, adult, and cannabis
        brands — where paid advertising is restricted and AI search represents the next
        frontier of organic visibility. We track AI citation patterns across these niches
        and have developed the specific playbooks for building brand recommendations in them.
      </p>
    </ServicePage>
  );
}
