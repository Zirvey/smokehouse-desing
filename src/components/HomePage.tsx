"use client";

import { About } from "@/components/About";
import { CtaSplit } from "@/components/CtaSplit";
import { Eshop } from "@/components/Eshop";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Locations } from "@/components/Locations";
import { Loyalty } from "@/components/Loyalty";
import { Navbar } from "@/components/Navbar";

export function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Locations />
      <CtaSplit />
      <Loyalty />
      <Features />
      <Eshop />
      <About />
      <Footer />
    </main>
  );
}
