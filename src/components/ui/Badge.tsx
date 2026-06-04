import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "outline" | "solid";
}

export default function Badge({ children, variant = "outline" }: BadgeProps) {
  const styles =
    variant === "solid"
      ? { backgroundColor: "#A1E3F9", color: "#000000" }
      : {
          border: "1px solid rgba(161,227,249,0.25)",
          color: "rgba(161,227,249,0.7)",
        };

  return (
    <span
      style={styles}
      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide"
    >
      {children}
    </span>
  );
}
