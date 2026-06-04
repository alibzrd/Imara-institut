import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
  children: ReactNode;
}

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm tracking-wide transition-all duration-200";

  const variants = {
    primary:
      "hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40",
    ghost:
      "border border-[rgba(161,227,249,0.25)] text-white/70 hover:border-[rgba(161,227,249,0.6)] hover:text-white",
  };

  const styles =
    variant === "primary"
      ? { backgroundColor: "#A1E3F9", color: "#000000" }
      : undefined;

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      style={styles}
      {...props}
    >
      {children}
    </button>
  );
}
