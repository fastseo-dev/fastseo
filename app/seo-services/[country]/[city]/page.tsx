import type { Metadata } from "next";
import { notFound } from "next/navigation";
import NicheCityPage from "@/components/NicheCityPage";
import { nicheConfigs } from "@/data/niche-country-types";
import { seoServicesCities, getSeoServicesCityData } from "@/data/seo-services-cities";
import type { NicheCityData } from "@/data/niche-city-types";

export const dynamicParams = false;

const BASE = "https://www.fastseosolutions.com";
const NICHE = "seo-services";

const allCities: NicheCityData[] = [...seoServicesCities];

export async function generateStaticParams() {
  return allCities.map((c) => ({ country: c.countrySlug, city: c.citySlug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string; city: string }>;
}): Promise<Metadata> {
  const { country, city } = await params;
  const data = getSeoServicesCityData(country, city);
  if (!data) return {};
  const canonical = `${BASE}/${NICHE}/${data.countrySlug}/${data.citySlug}/`;
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

export default async function SeoServicesCityPage({
  params,
}: {
  params: Promise<{ country: string; city: string }>;
}) {
  const { country, city } = await params;
  const data = getSeoServicesCityData(country, city);
  if (!data) notFound();
  const config = nicheConfigs[NICHE];
  const otherCities = allCities.filter(
    (c) => c.countrySlug === country && c.citySlug !== city
  );
  return <NicheCityPage data={data} config={config} otherCities={otherCities} />;
}
