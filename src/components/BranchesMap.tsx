"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { branches } from "@/lib/locations";
import { ScrollReveal } from "./ScrollReveal";

const BranchesMapInner = dynamic(
  () => import("./BranchesMapInner").then((mod) => mod.BranchesMapInner),
  {
    ssr: false,
    loading: () => <div className="absolute inset-0 animate-pulse bg-smoke-900" />,
  },
);

export function BranchesMap() {
  const [interactive, setInteractive] = useState(false);

  return (
    <ScrollReveal className="mt-14 sm:mt-16">
      <div className="overflow-hidden border border-white/10 bg-smoke-800">
        <div className="border-b border-white/10 px-5 py-4 sm:px-6">
          <p className="text-label mb-1 text-amber-gold">Kde nás najdete</p>
          <h3 className="font-display text-xl sm:text-2xl">Mapa poboček v Praze</h3>
        </div>

        <div className="relative aspect-[4/3] w-full bg-smoke-950 sm:aspect-[21/9]">
          {!interactive && (
            <button
              type="button"
              onClick={() => setInteractive(true)}
              className="absolute inset-0 z-10 flex cursor-pointer items-center justify-center bg-black/40 transition-colors hover:bg-black/25"
              aria-label="Aktivovat mapu"
            >
              <span className="rounded-full border border-amber-gold/30 bg-black/70 px-4 py-2 text-xs tracking-wide text-amber-light uppercase sm:text-sm">
                Klikněte pro ovládání mapy
              </span>
            </button>
          )}
          <BranchesMapInner interactive={interactive} />
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
              {branch.address} — Navigace
            </a>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
