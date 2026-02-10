import React from "react";

const STYLES = {
  primary:
    "bg-[var(--brass)] text-[var(--paper-solid)] hover:bg-[var(--copper)] shadow-[0_18px_40px_rgba(18,10,6,0.22)]",
  secondary:
    "border border-[var(--border)] bg-[var(--paper-solid)] text-[var(--ink)] hover:bg-[var(--paper)]",
  outline:
    "border border-[var(--brass)] bg-[var(--paper-solid)] text-[var(--ink)] hover:bg-[var(--paper)]",
  ghost: "text-[var(--muted)] hover:text-[var(--copper)]",
};

const SIZES = {
  md: "px-10 py-4 text-lg",
  sm: "px-7 py-2 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  href,
  type = "button",
}) {
  const classes = `rounded-full font-extrabold tracking-wide transition-colors ${SIZES[size] ?? SIZES.md} ${STYLES[variant] ?? STYLES.primary} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  );
}
