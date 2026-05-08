import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAuthorBySlug, buildPersonSchema } from "@/lib/authors";
import { getAllPosts } from "@/lib/blog";
import { supabaseServer } from "@/lib/supabase";

export const dynamic = "force-dynamic";

const BASE = "https://www.fastseosolutions.com";

interface Props {
  params: Promise<{ slug: string }>;
}

interface PostPreview {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  categories: string[];
}

async function getPostsByAuthor(authorName: string): Promise<PostPreview[]> {
  const slugSet = new Set<string>();
  const posts: PostPreview[] = [];

  // Supabase first
  try {
    const { data } = await supabaseServer
      .from("blog_posts")
      .select("slug, title, date, excerpt, categories")
      .ilike("author", `${authorName.split(" ")[0]}%`)
      .eq("status", "published")
      .order("date", { ascending: false })
      .limit(12);

    if (data) {
      for (const row of data) {
        if (!slugSet.has(row.slug)) {
          slugSet.add(row.slug);
          posts.push({
            slug: row.slug,
            title: row.title,
            date: row.date,
            excerpt: row.excerpt || "",
            categories: Array.isArray(row.categories) ? row.categories : [],
          });
        }
      }
    }
  } catch {
    // fall through to MDX
  }

  // MDX fallback — fills any gaps
  const mdxPosts = getAllPosts();
  const firstName = authorName.split(" ")[0].toLowerCase();
  for (const p of mdxPosts) {
    if (p.author.toLowerCase().startsWith(firstName) && !slugSet.has(p.slug)) {
      slugSet.add(p.slug);
      posts.push({
        slug: p.slug,
        title: p.title,
        date: typeof p.date === "string" ? p.date : String(p.date),
        excerpt: p.excerpt,
        categories: p.categories,
      });
    }
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 10);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) return {};

  const title = `${author.name} — ${author.title} | FastSEO`;
  const description = author.bio;
  const canonical = `${BASE}/author/${slug}/`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "profile",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default async function AuthorPage({ params }: Props) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) notFound();

  const schema = buildPersonSchema(author, BASE);
  const posts = await getPostsByAuthor(author.name);

  return (
    <div className="min-h-screen bg-void pt-[70px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── Author hero ── */}
      <section className="relative border-b border-border overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(232,255,71,0.05),transparent)]" />
        <div className="max-w-[860px] mx-auto px-6 py-16 lg:py-20">

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            {/* Avatar */}
            <div className="shrink-0 w-20 h-20 rounded-2xl bg-surface border border-border flex items-center justify-center overflow-hidden">
              {author.photo ? (
                <img src={author.photo} alt={author.name} className="w-full h-full object-cover" />
              ) : (
                <span className="font-display font-black text-[28px] text-lime">
                  {author.initials}
                </span>
              )}
            </div>

            {/* Name + meta */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-1.5">
                <h1 className="font-display font-black text-[32px] lg:text-[38px] leading-none tracking-tight text-text-primary">
                  {author.name}
                </h1>
                <span className="font-body text-[11px] font-semibold text-lime/70 bg-lime/8 border border-lime/20 rounded-full px-2.5 py-1 uppercase tracking-wide">
                  {author.yearsExperience}+ yrs experience
                </span>
              </div>
              <p className="font-body text-[15px] text-text-secondary mb-3">
                {author.title} · <span className="text-text-faint">FastSEO</span>
              </p>

              {/* Social links */}
              <div className="flex items-center gap-2">
                {author.linkedin && (
                  <a
                    href={author.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex items-center gap-1.5 font-body text-[12px] text-text-faint hover:text-lime border border-border hover:border-lime/30 rounded-lg px-3 py-1.5 transition-all"
                  >
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="currentColor">
                      <path d="M2.5 1C1.67 1 1 1.67 1 2.5S1.67 4 2.5 4 4 3.33 4 2.5 3.33 1 2.5 1zM1.25 5.25h2.5V13h-2.5V5.25zM5.5 5.25H8v1.06h.04A2.75 2.75 0 0 1 10.5 5c2.63 0 3.12 1.73 3.12 3.98V13h-2.5V9.5c0-.93-.02-2.13-1.3-2.13-1.3 0-1.5 1.01-1.5 2.06V13H5.5V5.25z" />
                    </svg>
                    LinkedIn
                  </a>
                )}
                {author.twitter && (
                  <a
                    href={author.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X / Twitter"
                    className="flex items-center gap-1.5 font-body text-[12px] text-text-faint hover:text-lime border border-border hover:border-lime/30 rounded-lg px-3 py-1.5 transition-all"
                  >
                    <svg width="12" height="12" viewBox="0 0 13 13" fill="currentColor">
                      <path d="M7.67 5.52 12.2 0h-1.07L7.17 4.8 4.23 0H.5l4.77 6.94L.5 13h1.07l4.17-4.85L8.77 13H12.5L7.67 5.52zm-1.48 1.72-.48-.69L1.96.9h1.65l3.1 4.43.48.69 4.02 5.75H9.56L6.19 7.24z" />
                    </svg>
                    X / Twitter
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[860px] mx-auto px-6 py-14 space-y-14">

        {/* ── Bio ── */}
        <section>
          <h2 className="font-display font-bold text-[13px] text-text-faint uppercase tracking-[0.12em] mb-4">
            About
          </h2>
          <div className="space-y-4">
            {author.longBio.split("\n\n").filter(Boolean).map((para, i) => (
              <p key={i} className="font-body text-[15px] text-text-secondary leading-relaxed">
                {para.trim()}
              </p>
            ))}
          </div>
        </section>

        {/* ── Expertise ── */}
        <section>
          <h2 className="font-display font-bold text-[13px] text-text-faint uppercase tracking-[0.12em] mb-4">
            Areas of Expertise
          </h2>
          <div className="flex flex-wrap gap-2">
            {author.expertise.map((skill) => (
              <span
                key={skill}
                className="font-body text-[12px] font-semibold text-lime/80 bg-lime/8 border border-lime/20 rounded-lg px-3 py-1.5"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* ── Recent articles ── */}
        {posts.length > 0 && (
          <section>
            <h2 className="font-display font-bold text-[13px] text-text-faint uppercase tracking-[0.12em] mb-5">
              Articles by {author.name.split(" ")[0]}
            </h2>
            <div className="space-y-1">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}/`}
                  className="group flex items-start justify-between gap-4 py-4 border-b border-border/50 hover:border-border transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-body text-[14px] text-text-primary group-hover:text-lime transition-colors leading-snug mb-1 line-clamp-2">
                      {post.title}
                    </p>
                    {post.categories.length > 0 && (
                      <span className="font-body text-[11px] text-text-faint uppercase tracking-wide">
                        {post.categories[0]}
                      </span>
                    )}
                  </div>
                  <span className="shrink-0 font-body text-[12px] text-text-faint mt-0.5">
                    {formatDate(post.date)}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ── CTA ── */}
        <section className="rounded-xl bg-surface border border-border p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <p className="font-display font-bold text-[18px] text-text-primary mb-1">
              Need specialist SEO for a restricted niche?
            </p>
            <p className="font-body text-[13px] text-text-muted">
              Free audit — we will show you exactly what your site needs to rank.
            </p>
          </div>
          <Link
            href="/contact/"
            className="shrink-0 inline-flex items-center gap-1.5 bg-lime text-void font-display font-bold text-[13px] px-5 py-2.5 rounded-lg hover:bg-[#F0FF6B] hover:shadow-[0_0_16px_rgba(232,255,71,0.25)] transition-all"
          >
            Get Free Audit
            <svg width="11" height="11" viewBox="0 0 13 13" fill="none">
              <path d="M2.5 10.5l8-8M10.5 2.5H4.5M10.5 2.5v6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </section>

      </div>
    </div>
  );
}
