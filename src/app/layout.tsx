import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smokehouse | Shisha Lounge & Restaurace Praha",
  description:
    "Premium shisha lounge s 3 pobočkami v Praze. Vodní dýmka, burgery, koktejly a nezapomenutelná atmosféra.",
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
