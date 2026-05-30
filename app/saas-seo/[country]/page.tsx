import type { Metadata } from "next";
import { notFound } from "next/navigation";
import NicheCountryPage from "@/components/NicheCountryPage";
import { saasCountryLocations, getSaasCountryData } from "@/data/saas-country-locations";
import { nicheConfigs } from "@/data/niche-country-types";

export const dynamicParams = false;

const BASE = "https://www.fastseosolutions.com";
const NICHE = "saas-seo";

export async function generateStaticParams() {
  return saasCountryLocations.map((l) => ({ country: l.countrySlug }));
}

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }): Promise<Metadata> {
  const { country } = await params;
  const data = getSaasCountryData(country);
  if (!data) return {};
  const canonical = `${BASE}/${NICHE}/${data.countrySlug}/`;
  return {
    title: data.title,
    description: data.metaDescription,
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: {
      title: data.title,
      description: data.metaDescription,
      url: canonical,
      images: [{ url: `${BASE}/opengraph-image`, width: 1200, height: 630, alt: data.title }],
    },
    twitter: { card: "summary_large_image", title: data.title, description: data.metaDescription },
  };
}

export default async function SaasCountryPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  const data = getSaasCountryData(country);
  if (!data) notFound();
  const config = nicheConfigs[NICHE];
  const otherCountries = saasCountryLocations.filter((l) => l.countrySlug !== country);
  return <NicheCountryPage data={data} config={config} otherCountries={otherCountries} />;
}
