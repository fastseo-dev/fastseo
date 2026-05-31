import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { supabaseServer } from "@/lib/supabase";
import { authors } from "@/lib/authors";
import { caseStudies } from "@/lib/case-studies";
import { seoServicesLocations } from "@/data/seo-services-locations";
import { igamingCountryLocations } from "@/data/igaming-country-locations";
import { cryptoCountryLocations } from "@/data/crypto-country-locations";
import { adultCountryLocations } from "@/data/adult-country-locations";
import { dentalCountryLocations } from "@/data/dental-country-locations";
import { saasCountryLocations } from "@/data/saas-country-locations";
import { cannabisCountryLocations } from "@/data/cannabis-country-locations";
import { igamingCitiesUk } from "@/data/igaming-cities-uk";
import { igamingCitiesUsa } from "@/data/igaming-cities-usa";
import { igamingCitiesAustralia } from "@/data/igaming-cities-australia";
import { igamingCitiesCanada } from "@/data/igaming-cities-canada";
import { igamingCitiesIndia } from "@/data/igaming-cities-india";
import { igamingCitiesSingapore } from "@/data/igaming-cities-singapore";
import { igamingCitiesGermany } from "@/data/igaming-cities-germany";
import { igamingCitiesSouthAfrica } from "@/data/igaming-cities-south-africa";
import { igamingCitiesIreland } from "@/data/igaming-cities-ireland";
import { cryptoCities } from "@/data/crypto-cities";
import { adultCities } from "@/data/adult-cities";
import { dentalCities } from "@/data/dental-cities";
import { saasCities } from "@/data/saas-cities";
import { cannabisCities } from "@/data/cannabis-cities";
import { seoServicesCities } from "@/data/seo-services-cities";

export const dynamic = "force-dynamic";

const BASE = "https://www.fastseosolutions.com";

const staticRoutes: {
  url: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"];
}[] = [
  { url: "/",                              priority: 1.0,  changeFrequency: "weekly"  },
  { url: "/seo-services/",                 priority: 0.95, changeFrequency: "monthly" },
  { url: "/niche-seo/",                    priority: 0.9,  changeFrequency: "monthly" },
  { url: "/igaming-seo/",                  priority: 0.9,  changeFrequency: "monthly" },
  { url: "/cryptocurrency-seo/",           priority: 0.9,  changeFrequency: "monthly" },
  { url: "/adult-seo/",                    priority: 0.9,  changeFrequency: "monthly" },
  { url: "/dental-seo/",                   priority: 0.9,  changeFrequency: "monthly" },
  { url: "/saas-seo/",                     priority: 0.9,  changeFrequency: "monthly" },
  { url: "/marijuana-seo/",                priority: 0.9,  changeFrequency: "monthly" },
  { url: "/ai-seo-services/",              priority: 0.9,  changeFrequency: "monthly" },
  { url: "/strippers-seo/",                priority: 0.85, changeFrequency: "monthly" },
  { url: "/link-building-services/",       priority: 0.85, changeFrequency: "monthly" },
  { url: "/igaming-link-building/",        priority: 0.85, changeFrequency: "monthly" },
  { url: "/cryptocurrency-linkbuilding/",  priority: 0.85, changeFrequency: "monthly" },
  { url: "/adult-linkbuilding/",           priority: 0.85, changeFrequency: "monthly" },
  { url: "/content-writing-services/",     priority: 0.8,  changeFrequency: "monthly" },
  { url: "/pricing/",                      priority: 0.9,  changeFrequency: "monthly" },
  { url: "/case-studies/",                 priority: 0.85, changeFrequency: "monthly" },
  { url: "/about/",                        priority: 0.75, changeFrequency: "monthly" },
  { url: "/team/",                         priority: 0.75, changeFrequency: "monthly" },
  { url: "/contact/",                      priority: 0.8,  changeFrequency: "weekly"  },
  { url: "/blog/",                         priority: 0.8,  changeFrequency: "weekly"  },
  { url: "/privacy-policy/",              priority: 0.3,  changeFrequency: "yearly"  },
  { url: "/terms-of-service/",            priority: 0.3,  changeFrequency: "yearly"  },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // MDX posts (filesystem — always available)
  const mdxPosts = getAllPosts();
  const mdxMap = new Map(
    mdxPosts.map((p) => [p.slug, new Date(p.date || Date.now())])
  );

  // Supabase published posts (catches admin-created posts with no MDX file)
  let supabaseMap = new Map<string, Date>();
  try {
    const { data } = await supabaseServer
      .from("blog_posts")
      .select("slug, updated_at, date")
      .eq("status", "published");

    if (data) {
      for (const row of data) {
        const d = new Date(row.updated_at || row.date || Date.now());
        supabaseMap.set(row.slug, d);
      }
    }
  } catch {
    // Supabase unavailable — fall back to MDX only
  }

  // Merge: union of both sources, Supabase date wins when both exist
  const slugMap = new Map<string, Date>([...mdxMap, ...supabaseMap]);

  const blogEntries: MetadataRoute.Sitemap = Array.from(slugMap.entries()).map(
    ([slug, lastModified]) => ({
      url: `${BASE}/blog/${slug}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.65,
    })
  );

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(
    ({ url, priority, changeFrequency }) => ({
      url: `${BASE}${url}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    })
  );

  const authorEntries: MetadataRoute.Sitemap = authors.map((a) => ({
    url: `${BASE}/author/${a.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const caseStudyEntries: MetadataRoute.Sitemap = caseStudies.map((cs) => ({
    url: `${BASE}/case-studies/${cs.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const locationEntries: MetadataRoute.Sitemap = seoServicesLocations.map((loc) => ({
    url: `${BASE}/seo-services/${loc.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const seoServicesCityEntries: MetadataRoute.Sitemap = seoServicesCities.map((c) => ({
    url: `${BASE}/seo-services/${c.countrySlug}/${c.citySlug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const nicheCountryEntries: MetadataRoute.Sitemap = [
    ...igamingCountryLocations.map((loc) => ({
      url: `${BASE}/igaming-seo/${loc.countrySlug}/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...cryptoCountryLocations.map((loc) => ({
      url: `${BASE}/cryptocurrency-seo/${loc.countrySlug}/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...adultCountryLocations.map((loc) => ({
      url: `${BASE}/adult-seo/${loc.countrySlug}/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...dentalCountryLocations.map((loc) => ({
      url: `${BASE}/dental-seo/${loc.countrySlug}/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...saasCountryLocations.map((loc) => ({
      url: `${BASE}/saas-seo/${loc.countrySlug}/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...cannabisCountryLocations.map((loc) => ({
      url: `${BASE}/marijuana-seo/${loc.countrySlug}/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  const nicheCityEntries: MetadataRoute.Sitemap = [
    ...igamingCitiesUk.map((c) => ({
      url: `${BASE}/igaming-seo/${c.countrySlug}/${c.citySlug}/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...igamingCitiesUsa.map((c) => ({
      url: `${BASE}/igaming-seo/${c.countrySlug}/${c.citySlug}/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...igamingCitiesAustralia.map((c) => ({
      url: `${BASE}/igaming-seo/${c.countrySlug}/${c.citySlug}/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...igamingCitiesCanada.map((c) => ({
      url: `${BASE}/igaming-seo/${c.countrySlug}/${c.citySlug}/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...igamingCitiesIndia.map((c) => ({
      url: `${BASE}/igaming-seo/${c.countrySlug}/${c.citySlug}/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...igamingCitiesSingapore.map((c) => ({
      url: `${BASE}/igaming-seo/${c.countrySlug}/${c.citySlug}/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...igamingCitiesGermany.map((c) => ({
      url: `${BASE}/igaming-seo/${c.countrySlug}/${c.citySlug}/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...igamingCitiesSouthAfrica.map((c) => ({
      url: `${BASE}/igaming-seo/${c.countrySlug}/${c.citySlug}/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...igamingCitiesIreland.map((c) => ({
      url: `${BASE}/igaming-seo/${c.countrySlug}/${c.citySlug}/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...cryptoCities.map((c) => ({
      url: `${BASE}/cryptocurrency-seo/${c.countrySlug}/${c.citySlug}/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...adultCities.map((c) => ({
      url: `${BASE}/adult-seo/${c.countrySlug}/${c.citySlug}/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...dentalCities.map((c) => ({
      url: `${BASE}/dental-seo/${c.countrySlug}/${c.citySlug}/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...saasCities.map((c) => ({
      url: `${BASE}/saas-seo/${c.countrySlug}/${c.citySlug}/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...cannabisCities.map((c) => ({
      url: `${BASE}/marijuana-seo/${c.countrySlug}/${c.citySlug}/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];

  return [
    ...staticEntries,
    ...caseStudyEntries,
    ...authorEntries,
    ...locationEntries,
    ...seoServicesCityEntries,
    ...nicheCountryEntries,
    ...nicheCityEntries,
    ...blogEntries,
  ];
}
