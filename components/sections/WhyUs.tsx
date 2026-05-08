import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";

const stats = [
  { value: "500+", label: "Keywords ranked page 1" },
  { value: "3–6mo", label: "Average time to fast SEO results" },
  { value: "0", label: "PBNs or black-hat tactics used" },
  { value: "100%", label: "Niche-specialist team, no juniors" },
];

export default function WhyUs() {
  return (
    <section className="section bg-surface border-y border-border">
      <div className="max-w-[1160px] mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-16 items-start">

          {/* Left — label, heading, stats */}
          <div>
            <SectionLabel>Why FastSEO</SectionLabel>
            <h2 className="font-display font-bold text-[32px] leading-tight text-text-primary mt-3 mb-6">
              Fast SEO services for the niches most agencies refuse
            </h2>

            <div className="flex flex-col gap-4">
              {stats.map((s) => (
                <div key={s.label} className="flex items-start gap-4">
                  <span className="font-display font-black text-[22px] text-lime leading-none min-w-[64px]">
                    {s.value}
                  </span>
                  <span className="font-body text-[13px] text-text-muted leading-snug pt-0.5">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — keyword-rich body copy */}
          <div className="flex flex-col gap-5 font-body text-[15px] text-text-muted leading-relaxed">
            <p>
              FastSEO is a specialist fast SEO agency built exclusively for competitive, regulated,
              and restricted verticals. Most SEO agencies operate in safe territory — eCommerce,
              B2B tech, local services. When a brand operates in{" "}
              <Link href="/adult-seo/" className="text-lime hover:underline">
                adult content
              </Link>
              ,{" "}
              <Link href="/igaming-seo/" className="text-lime hover:underline">
                iGaming
              </Link>
              ,{" "}
              <Link href="/cryptocurrency-seo/" className="text-lime hover:underline">
                cryptocurrency
              </Link>
              , or{" "}
              <Link href="/marijuana-seo/" className="text-lime hover:underline">
                cannabis
              </Link>
              , they get a blanket refusal or a watered-down strategy that ignores
              niche-specific challenges. Our fast SEO services are built entirely around these
              verticals — every technique developed for the exact environment you compete in.
            </p>

            <p>
              Whether you need{" "}
              <Link href="/adult-seo/" className="text-lime hover:underline">
                adult SEO services
              </Link>{" "}
              for an escort directory, porn site, or{" "}
              <Link href="/strippers-seo/" className="text-lime hover:underline">
                strippers booking platform
              </Link>
              ; specialist{" "}
              <Link href="/adult-linkbuilding/" className="text-lime hover:underline">
                adult link building
              </Link>{" "}
              for an adult content business that mainstream agencies refuse; or fast SEO results
              for a{" "}
              <Link href="/saas-seo/" className="text-lime hover:underline">
                SaaS brand
              </Link>{" "}
              or{" "}
              <Link href="/dental-seo/" className="text-lime hover:underline">
                dental practice
              </Link>{" "}
              — our organic SEO solutions are scoped to your specific competitive landscape. We
              combine technical audits, on-page optimisation, niche-relevant link building, and
              AI search visibility into a single coordinated strategy.
            </p>

            <p>
              Organic search is the only acquisition channel that compounds over time —
              every ranking gained, every backlink earned, and every piece of optimised content
              keeps working without ongoing spend. As a fast SEO company focused entirely on
              restricted niches, we deliver the specialist knowledge, publisher access, and
              niche keyword intelligence that generalist agencies simply cannot replicate. Explore
              our full range of{" "}
              <Link href="/niche-seo/" className="text-lime hover:underline">
                niche SEO services
              </Link>{" "}
              or{" "}
              <Link href="/contact/" className="text-lime hover:underline">
                get a free audit
              </Link>{" "}
              to see exactly where your organic growth opportunity lies.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
