"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { branches } from "@/lib/locations";
import { images } from "@/lib/images";
import { EmberOverlay } from "./EmberOverlay";

const branchAddresses = branches.map((b) => ({ address: b.address }));

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.35]);

  return (
    <section id="uvod" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 scale-105">
        <Image
          src={images.hero}
          alt="Shisha lounge atmosféra"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-smoke-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
      </motion.div>

      <EmberOverlay />

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto w-full max-w-4xl px-4 pt-36 pb-16 text-center sm:px-6 sm:pt-40"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-label mb-4 text-amber-light/90"
        >
          Smokehouse shisha lounge | Restaurace
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-display text-[clamp(1.75rem,6vw,4.5rem)]"
        >
          3 pobočky
          <br />
          <span className="text-gradient-gold">3 shisha prostředí</span>
        </motion.h1>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mx-auto mt-8 flex max-w-lg flex-col gap-3 text-left sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-6 sm:gap-y-2 sm:text-center"
        >
          {branchAddresses.map((branch) => (
            <li key={branch.address} className="flex items-center gap-2 text-sm text-smoke-300 sm:text-base">
              <MapPin className="h-4 w-4 shrink-0 text-amber-gold" />
              <span>{branch.address}</span>
            </li>
          ))}
        </motion.ul>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-body mx-auto mt-6 max-w-2xl text-base text-smoke-300 sm:text-lg"
        >
          Jsme útulný shisha lounge s příjemnou atmosférou, burgery a koktejly v srdci Prahy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
        >
          <Link
            href="#pobocky"
            className="btn-glow cursor-pointer bg-amber-gold px-8 py-3.5 text-center text-sm font-bold tracking-wide text-smoke-950 uppercase transition-all hover:bg-amber-light"
          >
            Naše pobočky
          </Link>
          <Link
            href="#rezervace"
            className="btn-glow cursor-pointer border border-white/30 px-8 py-3.5 text-center text-sm font-semibold tracking-wide text-white uppercase transition-all hover:border-ember-400/60 hover:bg-white/5"
          >
            Rezervovat stůl
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown className="h-6 w-6 text-smoke-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
