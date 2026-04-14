import { StatCard } from "@/components/ui/StatCard";

const stats = [
  { number: "500+",  label: "Keywords Ranked #1" },
  { number: "12x",   label: "Average Traffic Growth" },
  { number: "98%",   label: "Client Retention Rate" },
  { number: "4 AIs", label: "Recommend Our Clients" },
];

export default function StatsBar() {
  return (
    <section className="bg-void border-y border-border py-16">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} number={stat.number} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
