import Image from "next/image";
import { ArrowRight } from "lucide-react";

const soins = [
  {
    titre: "Extensions de Cils",
    desc: "Pose Mixte ou Volume Russe. Regard transformé, jusqu'à 4 semaines.",
    prix: "À partir de 100€",
    img: "/imara/soins/extensions-mixte.jpg",
  },
  {
    titre: "Maquillage Permanent",
    desc: "Microblading, sourcils, lèvres, eye-liner. Résultat naturel qui dure.",
    prix: "À partir de 210€",
    img: "/imara/soins/blading-shading.jpg",
  },
  {
    titre: "Imara Gold",
    desc: "Radiofréquence visage & corps. Soin anti-âge haute technologie.",
    prix: "Pack 3 séances : 255€",
    img: "/imara/soins/imara-gold-visage.jpeg",
  },
  {
    titre: "Imara Lips",
    desc: "Tatouage lèvres semi-permanent. Lèvres pulpeuses et définies.",
    prix: "250€",
    img: "/imara/soins/imara-lips.jpg",
  },
  {
    titre: "Eye Liner 3D",
    desc: "Regard intense et défini en permanence. Effet poudré ou classique.",
    prix: "À partir de 210€",
    img: "/imara/soins/eye-liner-3d.jpeg",
  },
  {
    titre: "Lumière Pulsée",
    desc: "Épilation longue durée. Peau douce sans contrainte quotidienne.",
    prix: "Grande zone : 770€",
    img: "/imara/soins/lumiere-pulsee.jpeg",
  },
];

export default function ImSoins() {
  return (
    <section id="soins" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="px-4 mb-8">
          <p
            className="text-sm tracking-widest text-[#C4906A] uppercase mb-2"
            style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
          >
            L&apos;Institut
          </p>
          <h2
            className="text-4xl md:text-5xl font-light text-[#2C2C2C]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Nos soins signature
          </h2>
        </div>

        {/* Carousel */}
        <div className="im-carousel px-4">
          {soins.map((s) => (
            <div
              key={s.titre}
              className="im-carousel-item w-64 md:w-72 rounded-2xl overflow-hidden flex flex-col bg-[#FAF8F5] border border-[#E8E4DF]"
            >
              {/* Real photo */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.titre}
                  fill
                  className="object-cover object-center"
                  sizes="288px"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3
                  className="text-xl font-semibold text-[#2C2C2C] mb-2"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  {s.titre}
                </h3>
                <p
                  className="text-[#6B6B6B] text-xs leading-relaxed mb-4 flex-1"
                  style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
                >
                  {s.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-semibold text-[#C4906A]"
                    style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
                  >
                    {s.prix}
                  </span>
                  <a
                    href="https://www.planity.com/imara-77127-lieusaint"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-medium text-[#2C2C2C] hover:text-[#C4906A] transition-colors"
                    style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
                  >
                    Réserver <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="px-4 mt-6">
          <a
            href="https://www.planity.com/imara-77127-lieusaint"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#C4906A] text-sm font-medium hover:gap-3 transition-all"
            style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
          >
            Voir tous nos soins &amp; tarifs <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
