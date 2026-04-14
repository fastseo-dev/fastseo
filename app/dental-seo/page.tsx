import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Dental SEO Agency — SEO for Dentists & Dental Practices",
  description:
    "Boost the online presence of your dental clinic with specialist dental SEO. Rank higher in local search, attract more patients, and grow your practice.",
  alternates: { canonical: "https://www.fastseosolutions.com/dental-seo/" },
};

const features = [
  {
    title: "Market Analysis",
    desc: "We provide detailed insight into the market demand and your potential competitors in the dentistry space, shaping your strategy to stay ahead.",
  },
  {
    title: "Website Optimisation",
    desc: "Our team assists you in optimising your dental website and its content to ensure regular incoming traffic and top search rankings.",
  },
  {
    title: "Dental Keywords Audit",
    desc: "We carry out extensive research on the keywords your patients are searching — then use them to build content that converts visitors to bookings.",
  },
  {
    title: "Dental Content",
    desc: "We help set up engaging content pages for your dental website — articles, videos, FAQs, and news that attract both patients and search engines.",
  },
  {
    title: "SEO Returns Tracking",
    desc: "We chart the analytics of your returns as an effect of our SEO strategy — tracking ranking changes, incoming links, and new patient enquiries.",
  },
  {
    title: "Review Strategy",
    desc: "We help you build a review presence on your website and on reputed review platforms — more positive reviews mean more traffic and more bookings.",
  },
];

export default function DentalSeoPage() {
  return (
    <ServicePage
      label="Dental SEO"
      title="Dental SEO Services"
      subtitle="Boost the online presence of your dental clinic and reach your utmost potential. Our dental SEO services are built to take your practice to the pinnacle of local search results."
      features={features}
    >
      <h2>SEO for Dental Practices</h2>
      <p>
        People no longer look in the Yellow Pages to find a dentist — they search Google.
        And they choose practices that appear at the top of the results. If your practice
        isn&apos;t ranking, you&apos;re losing patients to competitors every single day.
      </p>
      <p>
        Dental SEO is a specialised field. It combines local SEO, content strategy, and
        technical optimisation — all tailored to the specific language patients use when
        searching for dental care. FastSEO has worked with dental practices across the UK
        and internationally to build sustainable organic visibility.
      </p>
      <h3>Why Dental SEO Matters</h3>
      <p>
        Patients searching for dental services have high commercial intent. Ranking for
        terms like &ldquo;dentist near me&rdquo; or &ldquo;dental implants [city]&rdquo;
        drives appointment bookings directly — with no ad spend required.
      </p>
      <h3>Our Dental SEO Approach</h3>
      <ul>
        <li>Local SEO optimisation for your practice location and service areas</li>
        <li>Google Business Profile optimisation and review management</li>
        <li>Keyword research targeting high-intent dental search terms</li>
        <li>Content strategy covering treatments, FAQs, and patient resources</li>
        <li>Link building from health and local business directories</li>
        <li>Technical SEO audit and on-page optimisation</li>
      </ul>
    </ServicePage>
  );
}
