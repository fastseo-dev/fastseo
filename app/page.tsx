import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import ServicesGrid from "@/components/sections/ServicesGrid";
import CaseStudiesPreview from "@/components/sections/CaseStudiesPreview";
import CTAStrip from "@/components/sections/CTAStrip";
import FAQAccordion from "@/components/sections/FAQAccordion";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesGrid />
      <CaseStudiesPreview />
      <CTAStrip />
      <FAQAccordion />
    </>
  );
}
