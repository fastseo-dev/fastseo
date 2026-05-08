import { SectionLabel } from "@/components/ui/SectionLabel";

const faqs = [
  {
    question: "What fast SEO services does FastSEO offer?",
    answer:
      "FastSEO provides fast SEO services for organic growth across the most competitive and restricted niches — adult websites, iGaming, cryptocurrency, cannabis, dental, and SaaS. Our fast SEO strategies combine technical audits, on-page optimisation, specialist link building, and AI-search visibility to deliver measurable ranking improvements faster than generalist agencies. Whether you need fast SEO results for an adult site, a crypto brand, or an eCommerce store, we build the strategy around your specific competitive environment.",
  },
  {
    question: "Do you provide adult SEO — including for escort agencies, strippers, and BDSM businesses?",
    answer:
      "Yes. We are a specialist adult SEO agency working across the full adult industry — adult content platforms, porn sites, escort agencies and directories, exotic dancers, strippers, dominatrix and BDSM services, sex toy eCommerce, and cam sites. Our adult SEO services cover technical optimisation, adult keyword strategy, and a pre-built adult publisher network for link building. We are the adult SEO company for niches most agencies refuse to touch.",
  },
  {
    question: "Do you work with iGaming brands in restricted markets?",
    answer:
      "Yes. We have deep experience in grey and regulated markets across the UK, EU, Canada, and Tier 1 jurisdictions. We understand compliance requirements and build fast SEO strategies that hold up to regulatory scrutiny while delivering consistent organic growth.",
  },
  {
    question: "Do you offer crypto SEO and blockchain gaming SEO?",
    answer:
      "Yes. We provide specialist crypto SEO services for cryptocurrency exchanges, DeFi platforms, NFT projects, and blockchain gaming SEO for Web3 gaming brands. Crypto and gaming SEO requires specialist knowledge — many content categories are restricted on mainstream ad platforms, making organic SEO solutions the primary acquisition channel. Our crypto SEO solutions target the keyword clusters and backlink sources that rank in this vertical.",
  },
  {
    question: "How long does it take to see fast SEO results?",
    answer:
      "Most clients see meaningful ranking movement in 3–6 months, with significant traffic growth by months 6–12. Highly competitive niches like iGaming and crypto typically require 6–12 months for top-3 rankings on commercial keywords. Adult SEO keywords often have lower competition, which can accelerate fast SEO results in some niches. We set realistic milestones from day one and provide full monthly reporting on all progress.",
  },
  {
    question: "What makes FastSEO different from other SEO agencies?",
    answer:
      "We only operate in niches we deeply specialise in — adult SEO, iGaming, crypto, cannabis, SaaS, and other restricted verticals. No generalist approach, no passing work to juniors. Our fast SEO services are built by specialists who spend every day in your niche. Every result is transparently reported, every recommendation is backed by data, and every client gets a dedicated specialist — not a rotating account team.",
  },
];

export default function FAQAccordion() {
  return (
    <section className="section bg-void">
      <div className="max-w-[780px] mx-auto px-6">
        <div className="text-center mb-12">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="font-display font-bold text-[36px] text-text-primary mt-3">
            Frequently asked questions
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-surface border border-border rounded-xl overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none">
                <span className="font-display font-semibold text-[15px] text-text-primary group-open:text-lime transition-colors">
                  {faq.question}
                </span>
                <span className="shrink-0 w-5 h-5 rounded-full border border-border group-open:border-lime flex items-center justify-center transition-all duration-200">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    className="transition-transform duration-200 group-open:rotate-45"
                  >
                    <line x1="5" y1="1" x2="5" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="group-open:stroke-[#E8FF47] stroke-[#6B7280]" />
                    <line x1="1" y1="5" x2="9" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="group-open:stroke-[#E8FF47] stroke-[#6B7280]" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-5">
                <p className="font-body text-[14px] text-text-muted leading-relaxed border-t border-border/50 pt-4">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
