import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

function slugToTitle(slug: string) {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: slugToTitle(slug),
    alternates: {
      canonical: `https://www.fastseosolutions.com/blog/${slug}/`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  return (
    <div className="min-h-screen bg-void pt-[70px]">
      <div className="max-w-[780px] mx-auto px-6 py-24">
        <span className="inline-flex items-center gap-2 text-mint font-body font-semibold text-[11px] tracking-[0.12em] uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse" />
          Blog
        </span>
        <h1 className="font-display font-black text-[44px] leading-[1.1] tracking-[-1px] text-text-primary mb-6">
          {slugToTitle(slug)}
        </h1>
        <p className="font-body text-[17px] text-text-muted leading-relaxed">
          Article content coming soon.
        </p>
        <div className="mt-8">
          <a
            href="/blog/"
            className="font-body text-[14px] text-text-muted hover:text-text-primary transition-colors"
          >
            ← Back to Blog
          </a>
        </div>
      </div>
    </div>
  );
}
