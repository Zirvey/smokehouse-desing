"use client";

import { ArrowRight, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { ScrollReveal } from "./ScrollReveal";

export function Eshop() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <Image
        src={images.eshop}
        alt="Shisha e-shop"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/75" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(202,138,4,0.18)_0%,transparent_70%)]" />
      <div className="ember-glow-slow pointer-events-none absolute bottom-0 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-ember-500/20 blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
        <ScrollReveal>
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center border border-amber-gold/40 bg-amber-gold/10">
            <ShoppingBag className="h-6 w-6 text-amber-light" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl">Shisha e-shop</h2>
          <p className="text-body mx-auto mt-4 max-w-xl text-smoke-300 leading-relaxed">
            Máme také e-shop, kde najdete širokou nabídku příslušenství k vodním dýmkám. Vybrané
            produkty, jako je tabák nebo uhlíky, si u nás můžete zakoupit i přímo na místě.
          </p>
          <Link
            href="https://www.smokehouseshop.cz/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow mt-8 inline-flex cursor-pointer items-center gap-2 bg-amber-gold px-8 py-3.5 text-sm font-bold tracking-[0.12em] text-smoke-950 uppercase transition-all hover:bg-amber-light"
          >
            Nakupovat
            <ArrowRight className="h-4 w-4" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
