"use client";

import Image from "next/image";
import { images } from "@/lib/images";
import { ScrollReveal } from "./ScrollReveal";

export function Loyalty() {
  return (
    <section id="vernost" className="section-padding relative overflow-hidden bg-smoke-900">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-gold/30 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-16 xl:gap-20">
        <ScrollReveal direction="left">
          <div className="mx-auto w-full max-w-[420px]">
            <Image
              src={images.loyaltyPoster}
              alt="Smokehouse věrnostní karta — 7. shisha zdarma"
              width={768}
              height={1086}
              className="h-auto w-full"
              sizes="(max-width: 1024px) 90vw, 420px"
              priority={false}
            />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <h2 className="font-display text-2xl text-white sm:text-3xl md:text-4xl">
            Zapojte se do věrnostního programu
          </h2>
          <div className="text-body mt-6 space-y-5 text-smoke-300 leading-relaxed">
            <p>
              Jednoduše naskenujte QR kód a přidejte si naši věrnostní kartu do peněženky ve svém
              telefonu.
              <br />
              Za každou koupi shishy v Smokehouse získáte jednu samolepku. Nasbírejte 6 samolepek a
              7. shisha je úplně zdarma!
            </p>
            <p>
              <strong className="font-semibold text-white">Samolepky sbíráte na všech našich pobočkách</strong>
              <br />
              <strong className="font-semibold text-white">
                – Smokehouse Italská 25, Smokehouse Klimentská 26 a Ortenovo nám. 1631/16a.
              </strong>
            </p>
            <p>
              Rychlé, jednoduché a rozhodně to stojí za to – nenechte si svou shishu zdarma ujít!
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
