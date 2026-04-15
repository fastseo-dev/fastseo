import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

const BASE = "https://www.fastseosolutions.com";

const staticRoutes: { url: string; priority: number; changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"] }[] = [
  { url: "/",                            priority: 1.0,  changeFrequency: "weekly"  },
  { url: "/niche-seo/",                  priority: 0.9,  changeFrequency: "monthly" },
  { url: "/igaming-seo/",               priority: 0.9,  changeFrequency: "monthly" },
  { url: "/cryptocurrency-seo/",        priority: 0.9,  changeFrequency: "monthly" },
  { url: "/adult-seo/",                 priority: 0.9,  changeFrequency: "monthly" },
  { url: "/dental-seo/",                priority: 0.9,  changeFrequency: "monthly" },
  { url: "/saas-seo/",                  priority: 0.9,  changeFrequency: "monthly" },
  { url: "/marijuana-seo/",             priority: 0.9,  changeFrequency: "monthly" },
  { url: "/ai-seo-services/",           priority: 0.9,  changeFrequency: "monthly" },
  { url: "/link-building-services/",    priority: 0.85, changeFrequency: "monthly" },
  { url: "/igaming-link-building/",     priority: 0.85, changeFrequency: "monthly" },
  { url: "/cryptocurrency-linkbuilding/", priority: 0.85, changeFrequency: "monthly" },
  { url: "/adult-linkbuilding/",        priority: 0.85, changeFrequency: "monthly" },
  { url: "/content-writing-services/", priority: 0.85, changeFrequency: "monthly" },
  { url: "/case-studies/",              priority: 0.85, changeFrequency: "monthly" },
  { url: "/about/",                     priority: 0.75, changeFrequency: "monthly" },
  { url: "/contact/",                   priority: 0.8,  changeFrequency: "monthly" },
  { url: "/blog/",                      priority: 0.8,  changeFrequency: "weekly"  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE}/blog/${post.slug}/`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));

  return [...staticEntries, ...blogEntries];
}
