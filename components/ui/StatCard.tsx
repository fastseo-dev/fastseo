interface StatCardProps {
  number: string;
  label: string;
}

export function StatCard({ number, label }: StatCardProps) {
  return (
    <div className="bg-surface border border-border rounded-2xl p-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-lime to-mint" />
      <div className="font-display font-black text-[44px] leading-none mb-1">
        <span className="bg-gradient-to-r from-lime to-mint bg-clip-text text-transparent">
          {number}
        </span>
      </div>
      <div className="font-body text-[12px] text-text-muted">{label}</div>
    </div>
  );
}
