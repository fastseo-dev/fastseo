import { SectionLabel } from "@/components/ui/SectionLabel";

const faqs = [
  {
    question: "Do you work with iGaming brands in restricted markets?",
    answer:
      "Yes. We have deep experience in grey and regulated markets across the UK, EU, Canada, and Tier 1 jurisdictions. We understand compliance requirements and build strategies that hold up to scrutiny.",
  },
  {
    question: "How do you get brands recommended by ChatGPT and Perplexity?",
    answer:
      "Answer Engine Optimisation (AEO) focuses on structured data, topical authority, and citation-building across sources that AI engines index. We audit your brand's AI visibility, identify citation gaps, and build a programme to make your brand the go-to recommendation.",
  },
  {
    question: "What link building tactics do you use for adult and crypto?",
    answer:
      "Manual outreach to niche-relevant publishers, digital PR campaigns, broken link building, and editorial placements. We never use PBNs or black-hat tactics — our links are built to last algorithm updates.",
  },
  {
    question: "How long does it take to see SEO results?",
    answer:
      "Most clients see meaningful movement in 3–6 months. Highly competitive niches like iGaming and crypto typically require 6–12 months for top-3 rankings on money keywords. We set realistic milestones from day one.",
  },
  {
    question: "Do you offer monthly retainers or project-based work?",
    answer:
      "Both. Most clients engage on a monthly retainer for ongoing SEO, content and link building. We also take on project-based work for technical audits, site migrations and one-off link campaigns.",
  },
  {
    question: "What makes FastSEO different from other SEO agencies?",
    answer:
      "We only work in verticals we deeply understand. No generalist agencies, no passing work to juniors. Every strategy is built by specialists who live in your niche — and every result is backed by data.",
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
