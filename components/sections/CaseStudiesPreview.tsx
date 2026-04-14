import { SectionLabel } from "@/components/ui/SectionLabel";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { Button } from "@/components/ui/Button";

const caseStudies = [
  {
    niche: "iGaming",
    title: "Casino brand 0 → 180k organic monthly visits",
    description:
      "Full-stack SEO strategy for a Tier 1 casino operator entering the UK market — from technical audit to editorial link building.",
    metrics: [
      { value: "180k", label: "Monthly Visits" },
      { value: "312",  label: "Page 1 Keywords" },
      { value: "9mo",  label: "Time to Results" },
    ],
    href: "/case-studies/igaming-casino-seo/",
  },
  {
    niche: "Crypto",
    title: "DeFi protocol achieves top 3 for 60 money keywords",
    description:
      "Technical SEO and link acquisition for a DeFi protocol competing against Coinbase and Binance in search.",
    metrics: [
      { value: "60+",  label: "Top-3 Keywords" },
      { value: "4.2x", label: "Traffic Increase" },
      { value: "6mo",  label: "Time to Results" },
    ],
    href: "/case-studies/crypto-defi-seo/",
  },
  {
    niche: "SaaS",
    title: "B2B SaaS brand grows trial signups 320% via SEO",
    description:
      "Content-led SEO programme targeting high-intent commercial keywords across a competitive project management SaaS.",
    metrics: [
      { value: "320%", label: "Trial Signups" },
      { value: "1,200", label: "New Keywords" },
      { value: "12mo", label: "Time to Results" },
    ],
    href: "/case-studies/saas-seo-growth/",
  },
];

export default function CaseStudiesPreview() {
  return (
    <section className="section bg-void">
      <div className="max-w-[1160px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <SectionLabel>Case Studies</SectionLabel>
            <h2 className="font-display font-bold text-[36px] text-text-primary mt-3">
              Results that speak for themselves
            </h2>
          </div>
          <Button href="/case-studies/" variant="secondary">
            All Case Studies →
          </Button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <CaseStudyCard key={cs.href} {...cs} />
          ))}
        </div>
      </div>
    </section>
  );
}
