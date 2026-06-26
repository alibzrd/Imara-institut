import Image from "next/image";
import Link from "next/link";
import ImNav from "@/components/imara/ImNav";
import { prestations } from "@/lib/imara-data";

export default function PrestationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <ImNav light />

      <div className="pt-16">
        {/* Hero */}
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 border-b border-[#E5E5E3]">
          <p
            className="text-[11px] tracking-[0.3em] text-[#C9A96E] uppercase mb-4"
            style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
          >
            Institut Imara · Lieusaint (77)
          </p>
          <h1
            className="text-6xl md:text-8xl font-light text-[#0A0A0A] leading-none"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Prestations
          </h1>
          <div className="w-12 h-px bg-[#C9A96E] mt-5" />
        </div>

        {/* Grille prestations */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E5E3]">
            {prestations.map((p) => (
              <a
                key={p.titre}
                href="https://www.planity.com/imara-77127-lieusaint"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white overflow-hidden block"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.titre}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                </div>

                {/* Info */}
                <div className="p-6 border-t border-[#E5E5E3] flex items-start justify-between gap-4">
                  <div>
                    <h3
                      className="text-xl font-light text-[#0A0A0A] leading-tight mb-1"
                      style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                    >
                      {p.titre}
                    </h3>
                    <p
                      className="text-[12px] text-[#888884]"
                      style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
                    >
                      {p.description}
                    </p>
                  </div>
                  <p
                    className="text-sm font-medium text-[#C9A96E] whitespace-nowrap flex-shrink-0"
                    style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
                  >
                    {p.prix}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Réservation CTA */}
        <div className="max-w-7xl mx-auto px-6 py-16 border-t border-[#E5E5E3] text-center">
          <p
            className="text-[11px] tracking-[0.3em] text-[#888884] uppercase mb-4"
            style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
          >
            Réservation en ligne
          </p>
          <h2
            className="text-4xl md:text-5xl font-light text-[#0A0A0A] mb-6"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Prenez rendez-vous
          </h2>
          <a
            href="https://www.planity.com/imara-77127-lieusaint"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#0A0A0A] text-white text-xs tracking-widest uppercase px-10 py-4 hover:bg-[#C9A96E] transition-colors"
            style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
          >
            Réserver sur Planity
          </a>
        </div>

        {/* Footer */}
        <footer className="max-w-7xl mx-auto px-6 py-8 border-t border-[#E5E5E3] flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-xs text-[#888884]"
            style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
          >
            © 2024 Imara Institut · Lieusaint (77127)
          </p>
          <div className="flex gap-6">
            <Link href="/imara/formations" className="text-xs text-[#888884] hover:text-[#C9A96E] transition-colors" style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}>
              Formations
            </Link>
            <Link href="/imara/inscription" className="text-xs text-[#888884] hover:text-[#C9A96E] transition-colors" style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}>
              S&apos;inscrire
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
