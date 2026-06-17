"use client";

import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { ScrollReveal } from "./ScrollReveal";

export function About() {
  return (
    <section id="onas" className="section-padding bg-smoke-950">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <ScrollReveal direction="left" className="relative">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={images.about}
              alt="O nás - Smokehouse"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 hidden border border-amber-gold/20 bg-smoke-800 p-4 lg:block">
            <p className="font-display text-2xl text-amber-gold">10+</p>
            <p className="mt-1 text-xs tracking-wider text-smoke-400 uppercase">let tradice</p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <p className="text-label mb-3 text-amber-gold">O nás</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl">Náš příběh</h2>
          <div className="text-body mt-6 space-y-4 text-smoke-300 leading-relaxed">
            <p>
              Naši milí hosté — vy všichni, kteří k nám do Smokehouse chodíte, i vy, kteří se k nám
              třeba teprve vypravíte. Dovolte, abychom krátce zavzpomínali na dobu před deseti,
              jedenácti lety, když jsme teprve snili o tom, že otevřeme svou kavárnu s vodními
              dýmkami a skvělou atmosférou.
            </p>
            <p>
              Jako milovníci dýmek jsme už měli nějaké zkušenosti, a tak jsme si předsevzali, že
              vytvoříme podnik, do jakého bychom sami rádi chodili. Během pár měsíců se nám podařilo
              vybudovat Smokehouse v Italské ulici s úžasnou atmosférou.
            </p>
          </div>
          <Link
            href="#onas"
            className="mt-8 inline-block cursor-pointer border border-white/20 bg-smoke-800 px-8 py-3.5 text-sm font-medium tracking-wide transition-all hover:border-amber-gold/40 hover:bg-smoke-700"
          >
            Více o nás
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
