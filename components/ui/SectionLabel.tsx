interface SectionLabelProps {
  children: string;
  pulse?: boolean;
}

export function SectionLabel({ children, pulse = true }: SectionLabelProps) {
  return (
    <span className="inline-flex items-center gap-2 text-lime font-body font-semibold text-[11px] tracking-[0.12em] uppercase">
      {pulse && (
        <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
      )}
      {children}
    </span>
  );
}
