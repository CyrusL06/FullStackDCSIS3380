import React from "react";
import { navigations } from "../contents";
import NavTextMenu from "./navTextMenu";
import Button from "./buttons";
export default function Navbar() {

  return (
    <header className="sticky top-0 z-30 w-full">
      <nav className="mx-auto max-w-7xl px-5 md:px-10 py-5">
        <div className="surface-nav rounded-2xl border border-[var(--border)] px-5 md:px-8 py-4">
          <div className="flex items-center gap-6">
            
            <div className="leading-none">
              <div className="text-[var(--ink)] text-3xl md:text-4xl font-black tracking-tight">
                Expense
              </div>
              <div className="mt-1 text-[var(--muted)] text-sm md:text-base font-semibold tracking-[0.12em] uppercase">
                Ledger
              </div>
            </div>

            <div className="hidden md:flex items-center gap-10 ml-auto">
              {navigations.map((nav) => (
                <NavTextMenu text={nav.name} href={nav.href} key={nav.id} />
              ))}
            </div>

            <Button href="#" variant="outline" size="sm" className="ml-auto md:ml-0">
              Log In
            </Button>

          </div>
        </div>
      </nav>
    </header>
  );
}
