import React from "react";

export default function NavTextMenu({ text, href }) {
  return (
    <a
      href={href}
      className="text-[var(--muted)] text-lg font-bold tracking-wide hover:text-[var(--copper)] transition-colors"
    >
      {text}
    </a>
  );
}
