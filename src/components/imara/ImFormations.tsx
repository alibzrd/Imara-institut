import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const formations = [
  { titre: "Microblading", desc: "Tracé poil à poil. Sourcils naturels et définis.", duree: "2 jours", cpf: true, img: "/imara/soins/blading-shading.jpg", slug: "microblading" },
  { titre: "Extension de Cils", desc: "Techniques classique et Volume Russe. Pratique intensive.", duree: "2-3 jours", cpf: true, img: "/imara/soins/extensions-mixte.jpg", slug: "extension-cils-classique" },
  { titre: "Microshading", desc: "Effet poudré naturel, complément idéal au microblading.", duree: "2 jours", cpf: true, img: "/imara/soins/eye-liner-3d.jpeg", slug: "microshading" },
  { titre: "Eye Liner permanent", desc: "Regard intense et défini sans effort quotidien.", duree: "1-2 jours", cpf: true, img: "/imara/soins/eye-liner-classique.jpg", slug: "eye-liner-permanent" },
  { titre: "Imara Lips", desc: "Tatouage lèvres semi-permanent. Technique exclusive Imara.", duree: "1 jour", cpf: true, img: "/imara/soins/imara-lips.jpg", slug: "imara-lips" },
  { titre: "Hygiène & Salubrité", desc: "Formation réglementaire agréée ARS. Obligatoire.", duree: "1 jour", cpf: false, img: "/imara/spa.jpg", slug: "hygiene-salubrite" },
];

export default function ImFormations() {
  return (
    <section id="formations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="px-6 mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-[11px] tracking-[0.3em] text-[#C9A96E] uppercase mb-4" style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}>L'Académie</p>
            <h2 className="text-5xl md:text-6xl font-light text-[#0A0A0A]" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>Formez-vous avec les expertes</h2>
            <div className="w-10 h-px bg-[#C9A96E] mt-4" />
          </div>
          <div className="flex flex-wrap gap-2">
            {["Qualiopi ✓", "Agréé ARS ✓", "CPF & OPCO"].map((b) => (
              <span key={b} className="text-[10px] tracking-widest uppercase border border-[#C9A96E] text-[#C9A96E] px-3 py-1.5"
                style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}>{b}</span>
            ))}
          </div>
        </div>

        <div className="im-carousel px-6">
          {formations.map((f) => (
            <div key={f.titre} className="im-carousel-item w-72 bg-white flex flex-col border border-[#E5E5E3]" style={{ borderTop: "2px solid #C9A96E" }}>
              <div className="relative h-48 overflow-hidden">
                <Image src={f.img} alt={f.titre} fill className="object-cover object-center" sizes="288px" />
                {f.cpf && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-[#C9A96E] text-white text-[9px] tracking-widest uppercase px-2 py-1"
                    style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}>
                    <CheckCircle2 size={9} /> CPF
                  </div>
                )}
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-xl font-light text-[#0A0A0A] mb-1.5" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>{f.titre}</h3>
                <p className="text-xs text-[#888884] leading-relaxed mb-4 flex-1" style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}>{f.desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-[#E5E5E3]">
                  <span className="text-xs text-[#888884]" style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}>⏱ {f.duree}</span>
                  <Link href={`/imara/formations/${f.slug}`}
                    className="flex items-center gap-1 text-[11px] tracking-widest uppercase text-[#0A0A0A] hover:text-[#C9A96E] transition-colors"
                    style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}>
                    Détails <ArrowRight size={11} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="px-6 mt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <Link href="/imara/formations"
            className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white text-[11px] tracking-widest uppercase px-8 py-4 hover:bg-[#C9A96E] transition-colors"
            style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}>
            Voir les 22 formations <ArrowRight size={12} />
          </Link>
          <span className="text-xs text-[#888884]" style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}>
            💳 CPF · OPCO · Paiement en plusieurs fois
          </span>
        </div>
      </div>
    </section>
  );
}
