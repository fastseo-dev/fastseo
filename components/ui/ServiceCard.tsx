import Link from "next/link";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
}

export function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  return (
    <Link href={href} className="block">
      <div className="bg-surface border border-border rounded-2xl p-7 transition-all hover:border-lime/20 hover:bg-elevated group cursor-pointer h-full">
        <div className="text-3xl mb-4">{icon}</div>
        <h3 className="font-display font-bold text-xl text-text-primary mb-2">{title}</h3>
        <p className="font-body text-[14px] text-text-muted leading-relaxed mb-4">
          {description}
        </p>
        <span className="font-body font-semibold text-[12px] text-lime tracking-wide">
          Learn More →
        </span>
      </div>
    </Link>
  );
}
