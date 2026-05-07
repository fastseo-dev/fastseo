import { SectionLabel } from "@/components/ui/SectionLabel";
import { ServiceCard } from "@/components/ui/ServiceCard";

const services = [
  {
    icon: "🎰",
    title: "iGaming SEO",
    description:
      "Casino, sports betting and poker SEO. We navigate Google's complex policies to rank your brand in the most competitive niche on the internet.",
    href: "/igaming-seo/",
  },
  {
    icon: "₿",
    title: "Crypto SEO",
    description:
      "Exchanges, wallets, DeFi platforms and NFT projects. Crypto-native SEO strategy that earns trust in a high-scrutiny vertical.",
    href: "/cryptocurrency-seo/",
  },
  {
    icon: "🔞",
    title: "Adult SEO",
    description:
      "Compliant, expert-led SEO for adult brands. We operate where most agencies won't, with strategies built for restricted-content indexing.",
    href: "/adult-seo/",
  },
  {
    icon: "🦷",
    title: "Dental SEO",
    description:
      "Local and national dental practice SEO. Patient acquisition campaigns that dominate local packs and map rankings.",
    href: "/dental-seo/",
  },
  {
    icon: "🚀",
    title: "SaaS SEO",
    description:
      "Full-funnel SEO for software products. From TOFU blog content to BOFU conversion pages, we build compounding organic growth.",
    href: "/saas-seo/",
  },
  {
    icon: "🌿",
    title: "Cannabis SEO",
    description:
      "Dispensary and cannabis brand SEO. Navigate advertising restrictions and rank organically in a rapidly expanding market.",
    href: "/marijuana-seo/",
  },
  {
    icon: "🤖",
    title: "AI Search (AEO)",
    description:
      "Get recommended by ChatGPT, Gemini and Perplexity. We optimise your brand for Answer Engine Optimisation and AI visibility.",
    href: "/ai-seo-services/",
  },
  {
    icon: "🔗",
    title: "Link Building",
    description:
      "High-DA, niche-relevant backlinks for competitive industries. Manual outreach, digital PR and editorial placements.",
    href: "/link-building-services/",
  },
  {
    icon: "✍️",
    title: "Content Writing",
    description:
      "Expert-written SEO content for regulated niches. E-E-A-T optimised articles, landing pages and thought leadership.",
    href: "/content-writing-services/",
  },
  {
    icon: "🛒",
    title: "eCommerce SEO",
    description:
      "Technical audits, category optimisation, and content strategies that turn organic traffic into revenue for online stores.",
    href: "/pages/ecommerce-seo",
  },
  {
    icon: "⚖️",
    title: "Law Firm SEO",
    description:
      "Local search domination, E-E-A-T authority building, and practice area pages that generate qualified legal enquiries.",
    href: "/pages/law-firm-seo",
  },
];

export default function ServicesGrid() {
  return (
    <section className="section bg-void">
      <div className="max-w-[1160px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <SectionLabel>Our Services</SectionLabel>
          <h2 className="font-display font-bold text-[36px] text-text-primary mt-3 mb-4">
            SEO for the niches others avoid
          </h2>
          <p className="font-body text-[16px] text-text-muted max-w-[540px] mx-auto leading-relaxed">
            We specialise in competitive, regulated and restricted verticals — and
            we deliver results other agencies can&apos;t promise.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.href} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
