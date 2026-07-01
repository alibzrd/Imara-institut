import Image from "next/image";
import { ArrowRight } from "lucide-react";

const soins = [
  { titre: "Extensions de Cils", desc: "Pose Mixte ou Volume Russe. Regard transformé jusqu'à 4 semaines.", prix: "À partir de 100€", img: "/imara/soins/extensions-mixte.jpg" },
  { titre: "Maquillage Permanent", desc: "Microblading, sourcils, lèvres, eye-liner. Résultat naturel qui dure.", prix: "À partir de 210€", img: "/imara/soins/blading-shading.jpg" },
  { titre: "Imara Gold", desc: "Radiofréquence visage & corps. Soin anti-âge haute technologie.", prix: "Pack 3 séances : 255€", img: "/imara/soins/imara-gold-visage.jpeg" },
  { titre: "Imara Lips", desc: "Tatouage lèvres semi-permanent. Lèvres pulpeuses et définies.", prix: "250€", img: "/imara/soins/imara-lips.jpg" },
  { titre: "Eye Liner 3D", desc: "Regard intense et défini en permanence. Effet poudré ou classique.", prix: "À partir de 210€", img: "/imara/soins/eye-liner-3d.jpeg" },
  { titre: "Lumière Pulsée", desc: "Épilation longue durée. Peau douce sans contrainte quotidienne.", prix: "Grande zone : 770€", img: "/imara/soins/lumiere-pulsee.jpeg" },
];

export default function ImSoins() {
  return (
    <section id="soins" className="py-20 bg-[#F7F7F5]">
      <div className="max-w-7xl mx-auto">
        <div className="px-6 mb-10">
          <p className="text-[11px] tracking-[0.3em] text-[#C9A96E] uppercase mb-4" style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}>L'Institut</p>
          <h2 className="text-5xl md:text-6xl font-light text-[#0A0A0A]" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>Nos soins signature</h2>
          <div className="w-10 h-px bg-[#C9A96E] mt-4" />
        </div>

        <div className="im-carousel px-6">
          {soins.map((s) => (
            <div key={s.titre} className="im-carousel-item w-72 bg-white flex flex-col border border-[#E5E5E3]">
              <div className="relative h-52 overflow-hidden">
                <Image src={s.img} alt={s.titre} fill className="object-cover object-center" sizes="288px" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-xl font-light text-[#0A0A0A] mb-1.5" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>{s.titre}</h3>
                <p className="text-xs text-[#888884] leading-relaxed mb-4 flex-1" style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}>{s.desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-[#E5E5E3]">
                  <span className="text-xs font-medium text-[#C9A96E]" style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}>{s.prix}</span>
                  <a href="https://www.planity.com/imara-77127-lieusaint" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[11px] tracking-widest uppercase text-[#0A0A0A] hover:text-[#C9A96E] transition-colors"
                    style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}>
                    Réserver <ArrowRight size={11} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="px-6 mt-8">
          <a href="https://www.planity.com/imara-77127-lieusaint" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[11px] tracking-widest uppercase text-[#C9A96E] hover:gap-3 transition-all"
            style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}>
            Voir tous nos soins &amp; tarifs <ArrowRight size={12} />
          </a>
        </div>
      </div>
    </section>
  );
}
