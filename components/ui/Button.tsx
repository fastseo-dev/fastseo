import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "gradient";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export function Button({
  children,
  variant = "primary",
  href,
  className = "",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-display font-bold text-[15px] px-7 py-3.5 rounded-lg transition-all";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-lime text-void hover:bg-[#F0FF6B] hover:scale-[1.02] active:scale-[0.98]",
    secondary:
      "bg-transparent text-text-secondary font-body font-medium border border-border hover:border-border-strong hover:text-text-primary",
    gradient:
      "text-white bg-gradient-to-r from-mint to-electric hover:opacity-90",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
