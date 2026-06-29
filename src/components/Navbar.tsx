"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const navLinks = [
  { href: "#uvod", label: "Úvod" },
  { href: "#pobocky", label: "Pobočky" },
  { href: "#menu", label: "Menu" },
  { href: "#vernost", label: "Věrnost" },
  { href: "#onas", label: "O nás" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-amber-gold/20 bg-amber-gold/10 px-3 py-1.5 text-center text-[10px] tracking-wide text-amber-light/90 sm:text-xs">
        Design koncept · Neoficiální redesign · Oficiální web:{" "}
        <a
          href="https://www.smokehouse.cz/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-amber-gold/40 underline-offset-2 hover:text-white"
        >
          smokehouse.cz
        </a>
      </div>
      <div
        className={`transition-all duration-300 ${
          scrolled ? "glass-dark py-2 shadow-2xl shadow-black/40" : "bg-black/30 py-3 backdrop-blur-sm"
        }`}
      >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo priority className="shrink-0" />

        <nav className="hidden items-center gap-5 xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="cursor-pointer whitespace-nowrap text-[11px] font-semibold tracking-[0.1em] text-smoke-300 uppercase transition-colors hover:text-amber-light"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 xl:flex">
          <button className="cursor-pointer text-xs font-semibold text-smoke-300 transition-colors hover:text-white">
            EN
          </button>
          <Link
            href="#rezervace"
            className="btn-glow cursor-pointer whitespace-nowrap border border-amber-gold/60 bg-amber-gold/10 px-4 py-2 text-[11px] font-bold tracking-[0.1em] text-amber-light uppercase transition-all hover:border-amber-gold hover:bg-amber-gold/20"
          >
            Rezervace
          </Link>
        </div>

        <button
          className="cursor-pointer p-2 text-white xl:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Zavřít menu" : "Otevřít menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="glass-dark border-t border-white/10 xl:hidden">
          <div className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer rounded px-2 py-3 text-sm font-medium text-smoke-200 transition-colors hover:bg-white/5 hover:text-amber-light"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#rezervace"
              onClick={() => setIsOpen(false)}
              className="mt-2 cursor-pointer border border-amber-gold/60 bg-amber-gold/10 px-5 py-3 text-center text-sm font-semibold text-amber-light"
            >
              Rezervace
            </Link>
          </div>
        </div>
      )}
      </div>
    </header>
  );
}
