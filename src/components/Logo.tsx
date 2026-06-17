"use client";

import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";

type LogoProps = {
  className?: string;
  href?: string;
  priority?: boolean;
};

export function Logo({ className = "", href = "#uvod", priority = false }: LogoProps) {
  const image = (
    <Image
      src={images.logo}
      alt="Smokehouse"
      width={160}
      height={52}
      priority={priority}
      className={`h-8 w-auto max-w-[130px] object-contain sm:h-9 sm:max-w-[150px] ${className}`}
    />
  );

  if (!href) return image;

  return (
    <Link href={href} className="inline-flex shrink-0 cursor-pointer items-center">
      {image}
    </Link>
  );
}
