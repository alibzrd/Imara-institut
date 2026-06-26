import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ImNav from "@/components/imara/ImNav";
import { formations, getFormationBySlug } from "@/lib/imara-data";

export function generateStaticParams() {
  return formations.map((f) => ({ slug: f.slug }));
}

export default async function FormationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const formation = getFormationBySlug(slug);
  if (!formation) notFound();

  const autres = formations.filter((f) => f.slug !== slug && f.categorie === formation.categorie).slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      <ImNav light />

      <div className="pt-16">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 py-5 border-b border-[#E5E5E3]">
          <nav
            className="flex items-center gap-2 text-[11px] tracking-widest uppercase text-[#888884]"
            style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
          >
            <Link href="/imara" className="hover:text-[#C9A96E] transition-colors">Imara</Link>
            <span>/</span>
            <Link href="/imara/formations" className="hover:text-[#C9A96E] transition-colors">Formations</Link>
            <span>/</span>
            <span className="text-[#0A0A0A]">{formation.categorie}</span>
          </nav>
        </div>

        {/* Hero split */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 min-h-[60vh]">
            {/* Photo */}
            <div className="relative min-h-72 md:min-h-full">
              <Image
                src={formation.img}
                alt={formation.titre}
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Contenu */}
            <div className="flex flex-col justify-between p-8 md:p-14 border-l border-[#E5E5E3]">
              <div>
                <p
                  className="text-[11px] tracking-[0.3em] text-[#C9A96E] uppercase mb-5"
                  style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
                >
                  {formation.categorie}
                </p>
                <h1
                  className="text-4xl md:text-5xl font-light text-[#0A0A0A] leading-tight mb-3"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  {formation.titre}
                </h1>
                <div className="w-10 h-px bg-[#C9A96E] mb-7" />

                <p
                  className="text-base text-[#888884] leading-relaxed mb-8"
                  style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
                >
                  {formation.detail}
                </p>

                {/* Infos */}
                <div className="grid grid-cols-2 gap-px bg-[#E5E5E3] mb-10">
                  {[
                    { label: "Durée", value: formation.duree },
                    { label: "Kit matériel", value: formation.kit ? "Inclus" : "Non inclus" },
                    { label: "Financement CPF", value: formation.cpf ? "Éligible" : "Non éligible" },
                    { label: "Effectif", value: "6 stagiaires max" },
                    { label: "Suivi", value: "6 mois inclus" },
                    { label: "Certification", value: "Qualiopi" },
                  ].map(({ label, value }) => (
                    <div key={label} className="bg-white p-4">
                      <p
                        className="text-[10px] tracking-widest uppercase text-[#888884] mb-1"
                        style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
                      >
                        {label}
                      </p>
                      <p
                        className="text-sm font-medium text-[#0A0A0A]"
                        style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
                      >
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col gap-3">
                <Link
                  href={`/imara/inscription?formation=${encodeURIComponent(formation.titre)}`}
                  className="flex items-center justify-center gap-2 bg-[#0A0A0A] text-white text-xs tracking-widest uppercase px-8 py-4 hover:bg-[#C9A96E] transition-colors"
                  style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
                >
                  S&apos;inscrire à cette formation
                </Link>
                <Link
                  href="/imara/formations"
                  className="text-center text-xs tracking-widest uppercase text-[#888884] hover:text-[#0A0A0A] transition-colors py-2"
                  style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
                >
                  ← Toutes les formations
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Autres formations de la même catégorie */}
        {autres.length > 0 && (
          <div className="max-w-7xl mx-auto px-6 py-14 border-t border-[#E5E5E3]">
            <p
              className="text-[11px] tracking-[0.3em] text-[#C9A96E] uppercase mb-8"
              style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
            >
              Du même univers — {formation.categorie}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#E5E5E3]">
              {autres.map((f) => (
                <Link
                  key={f.slug}
                  href={`/imara/formations/${f.slug}`}
                  className="group relative bg-white overflow-hidden block"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={f.img}
                      alt={f.titre}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="25vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                  </div>
                  <div className="p-4 border-t border-[#E5E5E3]">
                    <h3
                      className="text-sm font-light text-[#0A0A0A]"
                      style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                    >
                      {f.titre}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
