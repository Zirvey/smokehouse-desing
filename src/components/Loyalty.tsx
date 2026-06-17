"use client";

import { Gift } from "lucide-react";
import Image from "next/image";
import { images } from "@/lib/images";
import { ScrollReveal } from "./ScrollReveal";

export function Loyalty() {
  return (
    <section id="vernost" className="section-padding relative overflow-hidden bg-smoke-800">
      <div className="absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-amber-gold/5 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <ScrollReveal direction="left">
          <div className="relative mx-auto w-full max-w-md">
            <div className="relative overflow-hidden border border-white/10 bg-smoke-900 p-4 sm:p-6">
              <div className="mb-4 flex items-center justify-between">
                <Gift className="h-8 w-8 text-amber-gold" />
                <span className="rounded-full border border-amber-gold/30 bg-amber-gold/10 px-3 py-1 text-xs tracking-wider text-amber-light uppercase">
                  Věrnostní program
                </span>
              </div>

              <div className="relative aspect-[4/5] overflow-hidden border border-white/10">
                <Image
                  src={images.loyaltyPoster}
                  alt="Věrnostní program Smokehouse — 7. shisha zdarma"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 400px"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <p className="text-label mb-3 text-amber-gold">Věrnostní program</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl">
            Zapojte se do věrnostního programu
          </h2>
          <div className="text-body mt-6 space-y-4 text-smoke-300 leading-relaxed">
            <p>
              Jednoduše naskenujte QR kód a přidejte si naši věrnostní kartu do peněženky ve svém
              telefonu. Za každou koupi shishy v Smokehouse získáte jednu samolepku.
            </p>
            <p>
              Nasbírejte <strong className="text-white">6 samolepek</strong> a{" "}
              <strong className="text-amber-light">7. shisha je úplně zdarma!</strong>
            </p>
            <p className="text-sm text-smoke-400">
              Samolepky sbíráte na všech našich pobočkách — Smokehouse Italská 25, Klimentská 26 a
              Ortenovo nám. 1631/16a.
            </p>
          </div>
          <button className="mt-8 cursor-pointer border border-amber-gold/60 bg-amber-gold/10 px-8 py-3.5 text-sm font-medium tracking-wide text-amber-light transition-all hover:border-amber-gold hover:bg-amber-gold/20">
            Přidat kartu do peněženky
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
}
