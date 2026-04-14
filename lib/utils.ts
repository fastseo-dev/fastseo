/** Join class names, filtering falsy values */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

/** Convert a URL slug to a title-cased string */
export function slugToTitle(slug: string): string {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

/** Format a number with compact notation, e.g. 12000 → "12k" */
export function formatCompact(n: number): string {
  return Intl.NumberFormat("en", { notation: "compact" }).format(n);
}
