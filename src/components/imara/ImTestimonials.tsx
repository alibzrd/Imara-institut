"use client";
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const temoignages = [
  { nom: "Sarah M.", lieu: "Lieusaint", type: "Cliente Institut", tag: "Extensions de cils", texte: "Cela fait deux ans que je viens chez Imara pour mes extensions de cils. Nawel est une véritable artiste — résultat naturel, précis et durable. Je ne pourrais pas aller ailleurs." },
  { nom: "Aminata D.", lieu: "Île-de-France", type: "Stagiaire Académie", tag: "Formation Microblading", texte: "J'ai fait ma reconversion grâce à Imara. La formation microblading était complète, encadrée, et j'ai pu exercer dès la semaine suivante. Le suivi post-formation m'a vraiment aidée." },
  { nom: "Nadia K.", lieu: "Melun", type: "Cliente Institut", tag: "Imara Gold Visage", texte: "Le soin radiofréquence Imara Gold est incroyable. Résultat visible dès la première séance. L'équipe est professionnelle et à l'écoute. Je recommande vivement." },
  { nom: "Laura T.", lieu: "Croissy-Beaubourg", type: "Stagiaire Académie", tag: "Formation Extensions de Cils", texte: "Formation très complète, Lory explique tout avec patience. On repart avec son kit pro et les bases solides pour exercer. Merci Imara !" },
];

export default function ImTestimonials() {
  const [idx, setIdx] = useState(0);
  const t = temoignages[idx];

  return (
    <section id="temoignages" className="py-20 bg-[#0A0A0A]">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-[11px] tracking-[0.3em] text-[#C9A96E] uppercase mb-4 text-center" style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}>
          Témoignages
        </p>
        <h2 className="text-5xl md:text-6xl font-light text-white text-center mb-3" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
          Elles nous font confiance
        </h2>
        <div className="w-10 h-px bg-[#C9A96E] mx-auto mb-14" />

        <div className="border border-white/10 p-8 md:p-12 mb-8">
          <div className="flex gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} className="fill-[#C9A96E] text-[#C9A96E]" />
            ))}
          </div>
          <blockquote className="text-2xl md:text-3xl font-light text-white leading-relaxed mb-8 italic"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
            &ldquo;{t.texte}&rdquo;
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-[#C9A96E] flex items-center justify-center text-white text-xs font-bold"
              style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}>
              {t.nom[0]}
            </div>
            <div>
              <p className="text-white text-sm font-medium" style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}>{t.nom} · {t.lieu}</p>
              <p className="text-[#C9A96E] text-xs mt-0.5" style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}>{t.tag}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {temoignages.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)}
                className="transition-all"
                style={{ width: i === idx ? 24 : 6, height: 2, background: i === idx ? "#C9A96E" : "rgba(255,255,255,0.2)" }}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button onClick={() => setIdx((idx - 1 + temoignages.length) % temoignages.length)}
              className="w-10 h-10 border border-white/15 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 transition-colors">
              <ChevronLeft size={16} />
            </button>
            <button onClick={() => setIdx((idx + 1) % temoignages.length)}
              className="w-10 h-10 border border-white/15 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 transition-colors">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
