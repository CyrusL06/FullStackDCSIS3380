import React from "react";
import Button from "../sections/buttons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto w-full max-w-7xl px-5 md:px-10 pb-10">
      <div className="surface-nav rounded-2xl border border-[var(--border)] px-6 md:px-8 py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div className="leading-none">
            <div className="text-[var(--ink)] text-xl md:text-2xl font-black tracking-tight">
              Expense Ledger
            </div>
            <div className="mt-2 text-[var(--muted)] text-xs md:text-sm font-semibold tracking-[0.14em] uppercase">
              Brewed for better budgeting
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[var(--muted)] text-sm font-bold tracking-wide">
            <Button href="#"  size="sm" className="px-0 py-0">
              Help
            </Button>
            <Button href="#"  size="sm" className="px-0 py-0">
              Privacy
            </Button>
            <Button href="#"  size="sm" className="px-0 py-0">
              Terms
            </Button>
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-[var(--border)] flex flex-col md:flex-row items-start md:items-center justify-between gap-2 text-[var(--muted)] text-xs font-semibold">
          <span>(c) {year} Expense Ledger. All rights reserved.</span>
          <span className="tracking-[0.12em] uppercase">Cyrus Lorenzo</span>
        </div>
      </div>
    </footer>
  );
}
