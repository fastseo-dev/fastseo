import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { supabaseServer } from "@/lib/supabase";
import { authors } from "@/lib/authors";
import { caseStudies } from "@/lib/case-studies";
import { seoServicesLocations } from "@/data/seo-services-locations";

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

  return [...staticEntries, ...caseStudyEntries, ...authorEntries, ...locationEntries, ...blogEntries];
}
