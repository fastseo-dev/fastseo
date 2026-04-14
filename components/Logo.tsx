export function LogoMark({ size = 40 }: { size?: number }) {
  const scale = size / 40;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="56" height="56" rx="14" fill="#0D1525" />
      <rect
        width="56"
        height="56"
        rx="14"
        stroke="rgba(232,255,71,0.2)"
        strokeWidth="1"
      />
      <circle cx="24" cy="24" r="10" stroke="#E8FF47" strokeWidth="2" fill="none" />
      <line
        x1="31.5"
        y1="31.5"
        x2="40"
        y2="40"
        stroke="#E8FF47"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="24" cy="24" r="2.5" fill="#00FFB2" />
      <line x1="24" y1="18" x2="24" y2="21.5" stroke="rgba(0,255,178,0.5)" strokeWidth="1" />
      <line x1="24" y1="26.5" x2="24" y2="30" stroke="rgba(0,255,178,0.5)" strokeWidth="1" />
      <line x1="18" y1="24" x2="21.5" y2="24" stroke="rgba(0,255,178,0.5)" strokeWidth="1" />
      <line x1="26.5" y1="24" x2="30" y2="24" stroke="rgba(0,255,178,0.5)" strokeWidth="1" />
      <circle cx="24" cy="17" r="1.5" fill="rgba(232,255,71,0.4)" />
      <circle cx="24" cy="31" r="1.5" fill="rgba(232,255,71,0.4)" />
      <circle cx="17" cy="24" r="1.5" fill="rgba(232,255,71,0.4)" />
      <circle cx="31" cy="24" r="1.5" fill="rgba(232,255,71,0.4)" />
      <circle
        cx="40"
        cy="16"
        r="5"
        fill="rgba(0,255,178,0.1)"
        stroke="rgba(0,255,178,0.3)"
        strokeWidth="1"
      />
      <text
        x="40"
        y="19.5"
        textAnchor="middle"
        fontFamily="Outfit"
        fontSize="7"
        fontWeight="800"
        fill="#00FFB2"
      >
        AI
      </text>
    </svg>
  );
}

export function LogoWordmark() {
  return (
    <div className="flex items-center gap-2.5">
      <LogoMark size={40} />
      <span className="font-display font-black text-xl tracking-tight text-text-primary">
        Fast<span className="text-lime">SEO</span>
        <sup className="text-[9px] font-bold text-mint ml-0.5">AI</sup>
      </span>
    </div>
  );
}
