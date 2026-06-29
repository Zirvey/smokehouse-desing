import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smokehouse — Design Concept (Unofficial)",
  description:
    "Neoficiální redesign koncept webu Smokehouse — shisha lounge v Praze. Portfolio projekt, není oficiální web smokehouse.cz.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className="overflow-x-hidden">
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
