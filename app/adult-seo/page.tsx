import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Adult SEO Agency — SEO for Adult Websites & Escort Services",
  description:
    "Specialist adult SEO for adult websites, escorts and adult content platforms. Increase organic traffic and rankings with a proven SEO strategy.",
  alternates: { canonical: "https://www.fastseosolutions.com/adult-seo/" },
};

const features = [
  {
    title: "Competitors Audit",
    desc: "We run an intense analysis of your direct competitors to find insights, weaknesses and opportunity gaps specific to the adult industry.",
  },
  {
    title: "On-Page Optimisation",
    desc: "We create, edit, update and make recommendations for your website pages to focus on increasing qualified traffic and improving your rankings.",
  },
  {
    title: "Adult Link Building",
    desc: "We create and execute an adult link building strategy, building your website authority from relevant sources within the adult space.",
  },
  {
    title: "Keywords Audit",
    desc: "We identify the highest-value keywords in your specific adult niche — balancing search volume, competition, and commercial intent.",
  },
  {
    title: "Technical SEO",
    desc: "We ensure the architecture and structure of your adult website follows all search engine guidelines for maximum crawlability and indexing.",
  },
  {
    title: "Monthly Reports",
    desc: "We send monthly reports tracking changes in ranking, incoming links and ROI so you can follow the full impact of our adult SEO strategy.",
  },
];

export default function AdultSeoPage() {
  return (
    <ServicePage
      label="Adult SEO"
      title="Adult SEO Agency"
      subtitle="Our adult SEO service has helped develop marketing strategies across multiple sectors of the adult industry. We attract more traffic to your site and provide more enquiries — taking your business to new heights."
      features={features}
    >
      <h2>SEO for Adult Websites</h2>
      <p>
        The need for an efficient adult SEO service has never been greater. Competition for
        keywords in the adult space is intense, mainstream advertising is largely unavailable,
        and the platforms willing to work with adult content are limited — making organic
        search the primary acquisition channel.
      </p>
      <p>
        FastSEO has worked with adult content platforms, escort agencies, adult toy retailers,
        and webcam model sites. We understand the nuances of adult SEO — from age verification
        requirements to the specific link sources that move rankings in this niche.
      </p>
      <h3>What Sets FastSEO Apart</h3>
      <p>
        Most SEO agencies refuse to work with adult clients. We specialise in it. Our team
        has years of experience navigating the unique challenges of adult SEO — including
        restricted advertising, cautious link partners, and content guidelines — to deliver
        consistent organic growth.
      </p>
      <h3>Our Adult SEO Process</h3>
      <ul>
        <li>In-depth competitive analysis across adult verticals</li>
        <li>Technical SEO audit and on-page optimisation</li>
        <li>Adult-specific keyword research and content strategy</li>
        <li>Link building from authoritative adult and adjacent sites</li>
        <li>Content creation tailored to your specific adult niche</li>
        <li>Monthly performance reports with full transparency</li>
      </ul>
    </ServicePage>
  );
}
