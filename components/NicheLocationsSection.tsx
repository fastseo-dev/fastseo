import Link from "next/link";

interface Country {
  countrySlug: string;
  countryName: string;
  countryShort: string;
  countryFlag: string;
}

interface Props {
  nicheSlug: string;
  heading: string;
  countries: Country[];
}

export default function NicheLocationsSection({ nicheSlug, heading, countries }: Props) {
  return (
    <section className="border-t border-border bg-surface">
      <div className="max-w-[1160px] mx-auto px-6 py-16">
        <h2 className="font-display font-black text-[28px] tracking-[-0.5px] text-text-primary mb-2">
          {heading}
        </h2>
        <p className="font-body text-[14px] text-text-muted mb-10 max-w-[520px]">
          Specialist programmes tailored to the regulations, search behaviour, and publisher landscape of each market.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {countries.map((c) => (
            <Link
              key={c.countrySlug}
              href={`/${nicheSlug}/${c.countrySlug}/`}
              className="group rounded-xl border border-border bg-void p-4 hover:border-lime/40 hover:bg-lime/[0.03] transition-all text-center"
            >
              <div className="text-[28px] mb-2">{c.countryFlag}</div>
              <div className="font-body text-[13px] font-semibold text-text-muted group-hover:text-text-primary transition-colors">
                {c.countryShort}
              </div>
              <div className="font-body text-[11px] text-text-faint mt-0.5 leading-tight">
                {c.countryName}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
