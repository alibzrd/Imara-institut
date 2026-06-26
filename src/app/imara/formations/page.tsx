import Image from "next/image";
import Link from "next/link";
import ImNav from "@/components/imara/ImNav";
import { formations, categories } from "@/lib/imara-data";

export default function FormationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <ImNav light />

      {/* Hero */}
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 border-b border-[#E5E5E3]">
          <p
            className="text-[11px] tracking-[0.3em] text-[#C9A96E] uppercase mb-4"
            style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
          >
            Académie Imara · Certifié Qualiopi · CPF éligible
          </p>
          <h1
            className="text-6xl md:text-8xl font-light text-[#0A0A0A] leading-none"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Formations
          </h1>
          <div className="w-12 h-px bg-[#C9A96E] mt-5" />
        </div>
      </div>

      {/* Grid par catégorie */}
      {categories.map((cat) => {
        const catFormations = formations.filter((f) => f.categorie === cat);
        return (
          <section key={cat} className="max-w-7xl mx-auto px-6 py-14 border-b border-[#E5E5E3]">
            <p
              className="text-[11px] tracking-[0.3em] text-[#C9A96E] uppercase mb-8"
              style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
            >
              {cat}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-[#E5E5E3]">
              {catFormations.map((f) => (
                <Link
                  key={f.slug}
                  href={`/imara/formations/${f.slug}`}
                  className="group relative bg-white overflow-hidden block"
                >
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={f.img}
                      alt={f.titre}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-108"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    {/* Overlay hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />

                    {/* CPF badge */}
                    {f.cpf && (
                      <div
                        className="absolute top-3 left-3 text-[9px] tracking-widest uppercase px-2 py-1"
                        style={{
                          background: "#C9A96E",
                          color: "white",
                          fontFamily: "var(--font-dmsans), system-ui, sans-serif",
                        }}
                      >
                        CPF
                      </div>
                    )}
                  </div>

                  {/* Label */}
                  <div className="p-4 border-t border-[#E5E5E3]">
                    <h3
                      className="text-base font-light text-[#0A0A0A] leading-snug mb-1"
                      style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                    >
                      {f.titre}
                    </h3>
                    <p
                      className="text-[11px] text-[#888884]"
                      style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
                    >
                      {f.duree}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}

      {/* Footer minimal */}
      <footer className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p
          className="text-xs text-[#888884]"
          style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
        >
          © 2024 Imara Institut · Lieusaint (77127)
        </p>
        <Link
          href="/imara/inscription"
          className="text-xs tracking-widest uppercase px-6 py-3 border border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E] hover:text-white transition-colors"
          style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
        >
          S&apos;inscrire à une formation
        </Link>
      </footer>
    </div>
  );
}
