import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./imara.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dmsans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Imara Institut — Institut Esthétique & Centre de Formation | Lieusaint (77)",
  description:
    "Institut esthétique et centre de formation certifié Qualiopi à Lieusaint. Extensions de cils, maquillage permanent, microblading. 22 formations CPF éligibles. Depuis 2016.",
  keywords: [
    "extension de cils Lieusaint",
    "microblading Lieusaint 77",
    "maquillage permanent Seine-et-Marne",
    "formation extension de cils Île-de-France",
    "formation microblading CPF",
    "centre de formation beauté 77",
  ],
  openGraph: {
    title: "Imara Institut — Beauté & Formation à Lieusaint",
    description:
      "Soins du regard, maquillage permanent et formations certifiantes en Île-de-France. Réservez en ligne.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function ImaraLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="min-h-screen bg-[#FAF8F5] text-[#2C2C2C] antialiased" style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
