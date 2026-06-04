import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rent Driver — Convoyage de véhicules privés",
  description:
    "Service premium de convoyage et de livraison de véhicules privés partout en France. Chauffeurs professionnels, assurés et disponibles 7j/7.",
  keywords: [
    "convoyage véhicule",
    "livraison voiture",
    "chauffeur privé",
    "transport véhicule France",
  ],
  authors: [{ name: "Rent Driver" }],
  openGraph: {
    title: "Rent Driver — Convoyage de véhicules privés",
    description:
      "Service premium de convoyage et de livraison de véhicules privés partout en France.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}
