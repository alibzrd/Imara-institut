import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const formations = [
  {
    titre: "Microblading",
    desc: "Tracé poil à poil pour des sourcils naturels et définis.",
    duree: "2 jours",
    cpf: true,
    img: "/imara/soins/blading-shading.jpg",
  },
  {
    titre: "Extension de Cils",
    desc: "Techniques classique et Volume Russe. Pratique intensive.",
    duree: "2-3 jours",
    cpf: true,
    img: "/imara/soins/extensions-mixte.jpg",
  },
  {
    titre: "Microshading",
    desc: "Effet poudré naturel, parfaite complémentarité au Microblading.",
    duree: "2 jours",
    cpf: true,
    img: "/imara/soins/eye-liner-3d.jpeg",
  },
  {
    titre: "Eye Liner permanent",
    desc: "Regard intense et défini sans effort quotidien.",
    duree: "1-2 jours",
    cpf: true,
    img: "/imara/soins/eye-liner-classique.jpg",
  },
  {
    titre: "Imara Lips",
    desc: "Tatouage lèvres semi-permanent. Technique précise et naturelle.",
    duree: "1 jour",
    cpf: true,
    img: "/imara/soins/imara-lips.jpg",
  },
  {
    titre: "Hygiène & Salubrité",
    desc: "Formation réglementaire agréée ARS, obligatoire pour les instituts.",
    duree: "1 jour",
    cpf: false,
    img: "/imara/spa.jpg",
  },
];

export default function ImFormations() {
  return (
    <section id="formations" className="py-16 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto">
        <div className="px-4 mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p
              className="text-sm tracking-widest text-[#2A4A5E] uppercase mb-2"
              style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
            >
              L&apos;Académie
            </p>
            <h2
              className="text-4xl md:text-5xl font-light text-[#2C2C2C]"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Formez-vous avec les expertes
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Qualiopi ✓", "Agréé ARS ✓", "CPF & OPCO"].map((b) => (
              <span
                key={b}
                className="text-xs font-medium bg-[#2A4A5E]/10 text-[#2A4A5E] px-3 py-1 rounded-full"
                style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* Carousel */}
        <div className="im-carousel px-4">
          {formations.map((f) => (
            <div
              key={f.titre}
              className="im-carousel-item w-64 md:w-72 bg-white rounded-2xl overflow-hidden border border-[#E8E4DF] flex flex-col"
              style={{ borderTop: "3px solid #2A4A5E" }}
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={f.img}
                  alt={f.titre}
                  fill
                  className="object-cover object-center"
                  sizes="288px"
                />
                {f.cpf && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-[#4A7C59] text-white text-[10px] font-medium px-2 py-1 rounded-full" style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}>
                    <CheckCircle2 size={10} />
                    CPF éligible
                  </div>
                )}
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3
                  className="text-xl font-semibold text-[#2C2C2C] mb-2"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  {f.titre}
                </h3>
                <p
                  className="text-[#6B6B6B] text-xs leading-relaxed mb-4 flex-1"
                  style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
                >
                  {f.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs text-[#6B6B6B]"
                    style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
                  >
                    ⏱ {f.duree}
                  </span>
                  <a
                    href="/imara/inscription"
                    className="flex items-center gap-1 text-xs font-medium text-[#2A4A5E] hover:gap-2 transition-all"
                    style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
                  >
                    Programme <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="px-4 mt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <a
            href="/imara/inscription"
            className="inline-flex items-center gap-2 bg-[#2A4A5E] text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-[#1e3a4e] transition-colors"
            style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
          >
            Voir les 22 formations <ArrowRight size={14} />
          </a>
          <span
            className="text-xs text-[#6B6B6B]"
            style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
          >
            💳 Financement CPF · OPCO · Paiement en plusieurs fois
          </span>
        </div>
      </div>
    </section>
  );
}
