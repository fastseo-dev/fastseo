import Link from "next/link";

interface Metric {
  value: string;
  label: string;
}

interface CaseStudyCardProps {
  niche: string;
  title: string;
  description: string;
  metrics: Metric[];
  href: string;
}

export function CaseStudyCard({
  niche,
  title,
  description,
  metrics,
  href,
}: CaseStudyCardProps) {
  return (
    <Link href={href} className="block">
      <div className="bg-surface border border-border rounded-2xl overflow-hidden hover:border-mint/20 transition-all group h-full">
        <div className="p-6 border-b border-border">
          <span className="inline-block text-[11px] font-semibold text-mint tracking-widest uppercase mb-3">
            {niche}
          </span>
          <h3 className="font-display font-bold text-xl text-text-primary mb-2">{title}</h3>
          <p className="font-body text-sm text-text-muted">{description}</p>
        </div>
        <div className="p-6 grid grid-cols-3 gap-4">
          {metrics.map((m) => (
            <div key={m.label}>
              <div className="font-display font-black text-2xl text-lime">{m.value}</div>
              <div className="font-body text-[11px] text-text-faint">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
