"use client";

import { Check, Flame, Users, Wind } from "lucide-react";
import Image from "next/image";
import { images } from "@/lib/images";
import { ScrollReveal } from "./ScrollReveal";

const highlights = [
  "Unikátní atmosféra",
  "Široká nabídka příchutí",
  "Profesionální obsluha",
  "Skvělé nápoje",
];

const features = [
  {
    icon: Wind,
    title: "Jedinečná atmosféra a relaxace",
    text: "Příjemné prostředí a klidná atmosféra umožňují návštěvníkům skutečně si odpočinout a vychutnat si chvíle pohody.",
  },
  {
    icon: Flame,
    title: "Široká nabídka tabákových směsí",
    text: "Pestrou škálu tabákových směsí, které uspokojí i ty nejnáročnější milovníky vodních dýmek — od tradičních po exotické.",
  },
  {
    icon: Users,
    title: "Společenské zážitky s přáteli",
    text: "Ideální místo pro setkání s přáteli. Sdílení vodní dýmky vytváří příležitost pro konverzaci a posílení vztahů.",
  },
];

export function Features() {
  return (
    <section className="section-padding bg-smoke-900">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <ScrollReveal>
            <p className="text-label mb-3 text-amber-gold">Smokehouse</p>
            <h2 className="font-display text-2xl sm:text-3xl">Premium shisha experience</h2>
            <p className="text-body mt-4 text-smoke-300 leading-relaxed">
              Shisha bar Smokehouse je jedním z nejpopulárnějších míst pro milovníky vodních dýmek ve
              městě. Nachází se v srdci Prahy a nabízí nezapomenutelný zážitek spojený s odpočinkem
              a zábavou.
            </p>
            <ul className="mt-6 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-smoke-200">
                  <span className="flex h-5 w-5 items-center justify-center bg-amber-gold/20">
                    <Check className="h-3 w-3 text-amber-gold" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="relative mx-auto w-full max-w-sm md:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[3/4]">
              <Image
                src={images.features}
                alt="Smokehouse interiér"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 80vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-smoke-900/60 to-transparent" />
            </div>
          </ScrollReveal>

          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={0.1 * (index + 1)}>
                <article className="group border border-white/10 bg-smoke-800/50 p-6 transition-all hover:border-amber-gold/20 hover:bg-smoke-800">
                  <feature.icon className="mb-4 h-6 w-6 text-amber-gold transition-transform group-hover:scale-110" />
                  <h3 className="text-body mb-2 text-base font-semibold text-white">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-smoke-400">{feature.text}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
