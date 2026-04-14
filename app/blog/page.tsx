import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "SEO Blog",
  description:
    "FastSEO blog — expert SEO insights for iGaming, crypto, adult and SaaS verticals.",
  alternates: { canonical: "https://www.fastseosolutions.com/blog/" },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-void pt-[70px]">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(232,255,71,0.05),transparent)]" />
        <div className="max-w-[1160px] mx-auto px-6 py-20">
          <span className="inline-flex items-center gap-2 text-lime font-body font-semibold text-[11px] tracking-[0.12em] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
            FastSEO · Blog
          </span>
          <h1 className="font-display font-black text-[52px] leading-[1.05] tracking-[-1.5px] text-text-primary mb-4">
            SEO Insights
          </h1>
          <p className="font-body text-[17px] text-text-muted max-w-[520px] leading-relaxed">
            Expert SEO strategy for iGaming, crypto, adult, dental and SaaS — the niches most agencies won&apos;t touch.
          </p>
        </div>
      </section>

      {/* Post grid */}
      <section className="max-w-[1160px] mx-auto px-6 py-16">
        {posts.length === 0 ? (
          <p className="font-body text-text-muted">No posts yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="group flex flex-col rounded-xl border border-border bg-surface hover:border-border-strong transition-all duration-200 overflow-hidden"
              >
                {/* Card accent bar */}
                <div className="h-[3px] bg-gradient-to-r from-lime/60 via-mint/40 to-transparent" />

                <div className="flex flex-col flex-1 p-6">
                  {/* Categories */}
                  {post.categories.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {post.categories.slice(0, 2).map((cat) => (
                        <span
                          key={cat}
                          className="font-body text-[10px] font-semibold tracking-wide uppercase text-lime/70 bg-lime/8 border border-lime/15 rounded-full px-2 py-0.5"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Title */}
                  <h2 className="font-display font-bold text-[16px] text-text-primary leading-snug mb-3 group-hover:text-lime transition-colors line-clamp-3">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  {post.excerpt && (
                    <p className="font-body text-[13px] text-text-muted leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                  )}

                  {/* Footer */}
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-border-subtle">
                    <span className="font-body text-[12px] text-text-faint">
                      {formatDate(post.date)}
                    </span>
                    <span className="font-body text-[12px] text-lime/70 group-hover:text-lime transition-colors flex items-center gap-1">
                      Read
                      <svg width="11" height="11" viewBox="0 0 13 13" fill="none">
                        <path d="M2.5 10.5l8-8M10.5 2.5H4.5M10.5 2.5v6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
