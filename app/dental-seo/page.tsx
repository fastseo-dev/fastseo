import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Dental SEO Agency — SEO for Dentists & Dental Practices",
  description:
    "Specialist dental SEO services for dentists and dental practices. Rank higher in local search, attract more patients, and grow your dental business. Free SEO audit.",
  alternates: { canonical: "https://www.fastseosolutions.com/dental-seo/" },
};

const features = [
  {
    title: "Dental Market Analysis",
    desc: "Detailed insight into local market demand, competitor rankings, and keyword opportunities — shaping a dental SEO strategy built to put you ahead of nearby practices.",
  },
  {
    title: "Website Optimisation",
    desc: "Technical SEO, on-page optimisation, treatment page structure, and UX improvements — ensuring your dental website ranks and converts visitors into booked appointments.",
  },
  {
    title: "Dental Keyword Research",
    desc: "Comprehensive keyword research targeting what your patients actually search — from high-intent treatment terms to local 'dentist near me' and emergency dentist queries.",
  },
  {
    title: "Dental Content Strategy",
    desc: "Engaging, medically accurate content for treatment pages, FAQs, patient guides, and blogs — building the topical authority Google requires to rank dental sites.",
  },
  {
    title: "Local SEO & Google Business",
    desc: "Google Business Profile optimisation, local citation building, and review strategy — the foundation of patient discovery for every dental practice.",
  },
  {
    title: "Performance Tracking",
    desc: "Monthly reporting on keyword rankings, organic traffic, new patient enquiries, and ROI — tracking the real business impact of your dental SEO investment.",
  },
];

const faqs = [
  {
    q: "How much does dental SEO cost?",
    a: "Dental SEO packages typically start from £500–£800/month for single practices and scale based on location competition, number of locations, and scope of work. We offer flexible retainers for single practices and multi-site dental groups. Request a free audit for a tailored proposal with no obligation.",
  },
  {
    q: "How quickly will I see more patient enquiries from SEO?",
    a: "Local SEO improvements — Google Business Profile and local pack rankings — can show results within 4–8 weeks of implementation. Broader organic rankings for treatment-specific keywords typically take 3–6 months for measurable increases in patient enquiries.",
  },
  {
    q: "Do you specialise in local SEO for dentists?",
    a: "Yes. Local search is the cornerstone of every dental SEO campaign we run. We optimise your Google Business Profile, build consistent local citations, target location-specific keywords (e.g. 'dentist [town]', 'dental implants [city]'), and implement a review acquisition strategy to strengthen local trust signals.",
  },
  {
    q: "Can you help a dental practice with multiple locations?",
    a: "Absolutely. We build location-specific service pages, manage Google Business Profile listings for each site, coordinate a consistent citation strategy, and implement a unified SEO architecture that avoids cannibalisation across multiple practice locations.",
  },
  {
    q: "What dental treatment keywords should I be targeting?",
    a: "High-intent treatment keywords deliver the best ROI: dental implants, Invisalign, composite bonding, teeth whitening, emergency dentist, dental veneers, and smile makeovers — combined with your city or town name. We identify the highest-value keyword opportunities specific to your practice's services and location.",
  },
  {
    q: "Do you provide SEO for both NHS and private dental practices?",
    a: "Yes. We tailor the keyword strategy and content approach to reflect whether you are targeting NHS patients, private patients, or both. The intent signals differ significantly — NHS patients search differently from private cosmetic patients — and our strategy adapts to maximise enquiries from your specific patient mix.",
  },
];

export default function DentalSeoPage() {
  return (
    <ServicePage
      label="Dental SEO"
      title="Dental SEO Services"
      subtitle="Patients no longer use the Yellow Pages — they search Google. If your practice isn't on page one, you're losing bookings to competitors every day. Our dental SEO services fix that."
      features={features}
      faqs={faqs}
      canonicalPath="/dental-seo/"
      serviceName="Dental SEO"
      serviceDescription="Specialist dental SEO for dentists and dental practices. We increase local rankings, attract more patients, and grow dental businesses through targeted organic search."
    >
      <h2>SEO for Dental Practices</h2>
      <p>
        Over 70% of patients search online before choosing a dentist. They search for specific
        treatments, read reviews, and compare practices — all before making contact. If your
        practice is not visible in those searches, you are losing patients to competitors who are.
        Dental SEO is the most cost-effective, long-term solution to this problem.
      </p>
      <p>
        FastSEO has worked with dental practices across the UK and internationally to build
        sustainable organic visibility. We understand the specific challenges of dental SEO —
        local competition, Google's local pack algorithm, review signals, and the unique content
        requirements of healthcare websites.
      </p>
      <h3>Why Local SEO Is Critical for Dentists</h3>
      <p>
        Dental patients search locally. The majority of high-value queries — &ldquo;dental implants
        near me&rdquo;, &ldquo;Invisalign [city]&rdquo;, &ldquo;emergency dentist [town]&rdquo; —
        trigger Google's local pack. Ranking in the local pack (map results) dramatically
        increases appointment bookings, often more than organic blue-link rankings alone.
        We optimise both.
      </p>
      <h3>Our Dental SEO Process</h3>
      <ul>
        <li>Technical audit — site speed, mobile usability, structured data, indexation</li>
        <li>Google Business Profile setup and optimisation</li>
        <li>Local citation building across dental and healthcare directories</li>
        <li>Treatment page creation and optimisation for high-intent keywords</li>
        <li>Review acquisition strategy to build local trust signals</li>
        <li>Content strategy covering patient FAQs, treatment guides, and dental health topics</li>
        <li>Link building from healthcare and local business publications</li>
      </ul>
      <h3>Who We Work With</h3>
      <p>
        Independent dental practices, dental groups with multiple locations, specialist practices
        (implant centres, orthodontists, cosmetic dentists), and dental corporate groups looking
        to drive organic patient acquisition across a portfolio of practices.
      </p>
    </ServicePage>
  );
}
