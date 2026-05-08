import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

const POSTS_DIR = path.join(process.cwd(), "content/blog");

/* Slugs to exclude (junk WP exports) */
const EXCLUDED = new Set([
  "elementor-6775",
  "bulk-sms-service-providers-in-india",
  "facebook-leads-generation",
  "how-to-register-a-uk-domain-from-india",
  "introduction-to-swing-trading",
  "seo-solutions-in-snelleville",
]);

export interface PostMeta {
  title: string;
  slug: string;
  date: string;
  author: string;
  categories: string[];
  excerpt: string;
  featuredImage?: string;
}

export interface Post extends PostMeta {
  content: string;
  contentHtml: string;
}

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf8");
      const { data, content } = matter(raw);
      const slug: string = data.slug ?? filename.replace(/\.mdx$/, "");
      if (EXCLUDED.has(slug)) return null;

      /* First non-empty paragraph as excerpt */
      const excerpt = content
        .replace(/^---[\s\S]*?---/, "")
        .replace(/#{1,6}\s.*/g, "")
        .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
        .replace(/[*_`]/g, "")
        .split("\n")
        .map((l) => l.trim())
        .find((l) => l.length > 60)
        ?.slice(0, 160) ?? "";

      return {
        title: (data.title as string) ?? "",
        slug,
        date: (data.date as string) ?? "",
        author: (data.author as string) ?? "",
        categories: (data.categories as string[]) ?? [],
        excerpt,
      } satisfies PostMeta;
    })
    .filter((p): p is PostMeta => p !== null)
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export async function getPost(slug: string): Promise<Post | null> {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(content);

  return {
    title: (data.title as string) ?? "",
    slug: (data.slug as string) ?? slug,
    date: (data.date as string) ?? "",
    author: (data.author as string) ?? "",
    categories: (data.categories as string[]) ?? [],
    excerpt: "",
    featuredImage: (data.featured_image as string | undefined) ?? (data.image as string | undefined),
    content,
    contentHtml: processed.toString(),
  };
}

export function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
