"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { branches } from "@/lib/locations";
import { images } from "@/lib/images";
import { BranchesMap } from "./BranchesMap";
import { ScrollReveal } from "./ScrollReveal";

const locationCards = [
  { ...branches[0], image: images.locations.klimentska },
  { ...branches[1], image: images.locations.italska },
  { ...branches[2], image: images.locations.ortenovo },
];

export function Locations() {
  return (
    <section id="pobocky" className="section-padding relative bg-smoke-900">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-gold/30 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <ScrollReveal className="mb-12 text-center sm:mb-16">
          <p className="text-label mb-3 text-amber-gold">Naše pobočky</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl">Tři adresy, jedna atmosféra</h2>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {locationCards.map((location, index) => (
            <ScrollReveal key={location.name} delay={index * 0.15}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden border border-white/10 bg-smoke-800"
              >
                <div className="relative h-64 overflow-hidden bg-smoke-900">
                  <div className="absolute -inset-px transition-transform duration-700 will-change-transform group-hover:scale-110">
                    <Image
                      src={location.image}
                      alt={location.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-smoke-900 via-smoke-900/20 to-transparent" />
                  </div>
                  <div className="absolute bottom-4 left-4 z-10">
                    <span className="font-display text-2xl tracking-wide">{location.name}</span>
                  </div>
                </div>

                <div className="space-y-4 p-6">
                  <div className="flex items-start gap-3 text-smoke-300">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-gold" />
                    <span>{location.address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-smoke-300">
                    <Phone className="h-4 w-4 shrink-0 text-amber-gold" />
                    <a
                      href={`tel:${location.phone.replace(/\s/g, "")}`}
                      className="cursor-pointer transition-colors hover:text-amber-light"
                    >
                      {location.phone}
                    </a>
                  </div>

                  <div className="flex flex-col gap-2 pt-2 sm:flex-row">
                    <a
                      href={location.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 cursor-pointer items-center justify-center gap-2 border border-white/15 py-2.5 text-sm transition-all hover:border-amber-gold/40 hover:text-amber-light"
                    >
                      Navigace
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <Link
                      href="#mapa"
                      className="flex flex-1 cursor-pointer items-center justify-center bg-smoke-600 py-2.5 text-sm transition-all hover:bg-smoke-500"
                    >
                      Zobrazit na mapě
                    </Link>
                  </div>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>

        <div id="mapa">
          <BranchesMap />
        </div>
      </div>
    </section>
  );
}
