"use client";

import { Facebook, Instagram, MessageCircle } from "lucide-react";
import Link from "next/link";
import { branches } from "@/lib/locations";
import { Logo } from "./Logo";

const footerLinks = {
  menu: ["O nás", "Menu", "FAQ", "Novinky"],
};

export function Footer() {
  return (
    <footer id="kontakt" className="border-t border-white/10 bg-smoke-900">
      <div className="section-padding !pb-12 !pt-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="mb-4">
                <Logo />
              </div>
              <p className="text-sm leading-relaxed text-smoke-400">
                High quality shisha experience in Prague
              </p>
              <div className="mt-6 flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 cursor-pointer items-center justify-center border border-white/10 transition-colors hover:border-amber-gold/40 hover:text-amber-light"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 cursor-pointer items-center justify-center border border-white/10 transition-colors hover:border-amber-gold/40 hover:text-amber-light"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-body mb-4 text-sm font-semibold text-white">Adresa</h4>
              <address className="space-y-1 text-sm not-italic text-smoke-400">
                <p>MATEA Restaurants, s.r.o.</p>
                <p>Se sídlem: Italská 25, Praha 2</p>
                <p>IČ: 27896617</p>
              </address>
            </div>

            <div>
              <h4 className="text-body mb-4 text-sm font-semibold text-white">Shisha bary v Praze</h4>
              <ul className="space-y-2 text-sm text-smoke-400">
                {branches.map((branch) => (
                  <li key={branch.name}>{branch.address}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-body mb-4 text-sm font-semibold text-white">Menu</h4>
              <ul className="space-y-2">
                {footerLinks.menu.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="cursor-pointer text-sm text-smoke-400 transition-colors hover:text-amber-light"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
            <p className="text-center text-sm text-smoke-500 sm:text-left">
              Design koncept · Neoficiální redesign ·{" "}
              <a
                href="https://www.smokehouse.cz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-light/80 underline decoration-amber-gold/30 underline-offset-2 hover:text-amber-light"
              >
                smokehouse.cz
              </a>
            </p>
            <p className="text-sm text-smoke-600">Portfolio projekt · Zirvey</p>
          </div>
        </div>
      </div>

      <a
        href="#kontakt"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-amber-gold text-smoke-950 shadow-lg shadow-amber-gold/30 transition-transform hover:scale-105"
        aria-label="Kontakt"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </footer>
  );
}
