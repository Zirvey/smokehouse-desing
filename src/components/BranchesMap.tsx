"use client";

import { branches, getBranchesMapEmbedUrl } from "@/lib/locations";
import { ScrollReveal } from "./ScrollReveal";

export function BranchesMap() {
  return (
    <ScrollReveal className="mt-14 sm:mt-16">
      <div className="overflow-hidden border border-white/10 bg-smoke-800">
        <div className="border-b border-white/10 px-5 py-4 sm:px-6">
          <p className="text-label mb-1 text-amber-gold">Kde nás najdete</p>
          <h3 className="font-display text-xl sm:text-2xl">Mapa poboček v Praze</h3>
        </div>

        <div className="map-wrap group relative aspect-[4/3] w-full bg-smoke-900 sm:aspect-[21/9]">
          <div className="map-overlay pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-black/35 transition-opacity group-active:opacity-0 sm:group-hover:opacity-0">
            <span className="rounded-full border border-white/20 bg-black/60 px-4 py-2 text-xs tracking-wide text-white uppercase sm:text-sm">
              Klikněte pro ovládání mapy
            </span>
          </div>
          <iframe
            title="Smokehouse — mapa poboček v Praze"
            src={getBranchesMapEmbedUrl()}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 p-4 sm:flex-row sm:flex-wrap sm:gap-3">
          {branches.map((branch) => (
            <a
              key={branch.name}
              href={branch.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 cursor-pointer border border-white/10 bg-smoke-900 px-4 py-2.5 text-center text-sm text-smoke-300 transition-colors hover:border-amber-gold/40 hover:text-amber-light"
            >
              {branch.name} — Navigace
            </a>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
