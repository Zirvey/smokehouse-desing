"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, UtensilsCrossed } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { ScrollReveal } from "./ScrollReveal";

const cards = [
  {
    id: "menu",
    title: "Jídelní a nápojový lístek",
    subtitle: "Vaříme každý den",
    cta: "Prohlédnout",
    href: "#menu",
    icon: UtensilsCrossed,
    image: images.menu,
  },
  {
    id: "rezervace",
    title: "Rezervace místa",
    subtitle: "Neváhejte a rezervujte rovnou",
    cta: "Vytvořit rezervaci",
    href: "#rezervace",
    icon: Calendar,
    image: images.reservation,
  },
];

export function CtaSplit() {
  return (
    <section className="section-padding bg-smoke-950">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
        {cards.map((card, index) => (
          <ScrollReveal key={card.id} delay={index * 0.15}>
            <Link href={card.href} className="group relative block h-[320px] cursor-pointer overflow-hidden sm:h-[380px] lg:h-[420px]">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20 transition-colors duration-500 group-hover:from-black/90" />

              <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10">
                <motion.div
                  initial={false}
                  whileHover={{ x: 4 }}
                  className="mb-4 flex h-12 w-12 items-center justify-center border border-amber-gold/40 bg-amber-gold/10"
                >
                  <card.icon className="h-5 w-5 text-amber-light" />
                </motion.div>

                <h3 className="font-display text-xl sm:text-2xl lg:text-3xl">{card.title}</h3>
                <p className="mt-2 text-smoke-300">{card.subtitle}</p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-amber-light transition-colors group-hover:text-white">
                  {card.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>

              <div className="absolute inset-0 border border-transparent transition-colors duration-500 group-hover:border-amber-gold/30" />
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
