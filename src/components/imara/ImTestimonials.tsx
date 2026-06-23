"use client";
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const temoignages = [
  {
    nom: "Sarah M.",
    lieu: "Lieusaint",
    type: "Cliente Institut",
    tag: "Extensions de cils",
    tagColor: "#C4906A",
    texte:
      "Cela fait deux ans que je viens chez Imara pour mes extensions de cils. Nawel est une véritable artiste — le résultat est naturel, précis et dure longtemps. Je ne pourrais pas aller ailleurs.",
    note: 5,
  },
  {
    nom: "Aminata D.",
    lieu: "Île-de-France",
    type: "Stagiaire Académie",
    tag: "Formation Microblading",
    tagColor: "#2A4A5E",
    texte:
      "J'ai fait ma reconversion grâce à Imara. La formation microblading était complète, encadrée, et j'ai pu exercer dès la semaine suivante avec mon kit. Le suivi post-formation m'a vraiment aidée à me lancer.",
    note: 5,
  },
  {
    nom: "Nadia K.",
    lieu: "Melun",
    type: "Cliente Institut",
    tag: "Imara Gold Visage",
    tagColor: "#B8913F",
    texte:
      "Le soin radiofréquence Imara Gold est incroyable. Résultat visible dès la première séance. L'équipe est professionnelle et à l'écoute. Je recommande vivement.",
    note: 5,
  },
  {
    nom: "Laura T.",
    lieu: "Croissy-Beaubourg",
    type: "Stagiaire Académie",
    tag: "Formation Extensions de Cils",
    tagColor: "#2A4A5E",
    texte:
      "Formation très complète, Lory explique tout avec patience. On repart avec notre kit pro et les bases solides pour exercer. Merci Imara !",
    note: 5,
  },
];

export default function ImTestimonials() {
  const [idx, setIdx] = useState(0);
  const t = temoignages[idx];

  return (
    <section id="temoignages" className="py-16 px-4" style={{ background: "linear-gradient(135deg, #1a0f08 0%, #2A4A5E 100%)" }}>
      <div className="max-w-3xl mx-auto">
        <p
          className="text-sm tracking-widest text-[#E8C4A0]/70 uppercase mb-3 text-center"
          style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
        >
          Témoignages
        </p>
        <h2
          className="text-4xl md:text-5xl font-light text-white text-center mb-12"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          Elles nous font confiance
        </h2>

        {/* Card */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-6">
          {/* Stars */}
          <div className="flex gap-0.5 mb-4">
            {[...Array(t.note)].map((_, i) => (
              <Star key={i} size={14} className="fill-[#B8913F] text-[#B8913F]" />
            ))}
          </div>

          <blockquote
            className="text-white/90 text-lg md:text-xl leading-relaxed mb-6 italic"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            &ldquo;{t.texte}&rdquo;
          </blockquote>

          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
              style={{
                background: t.tagColor,
                fontFamily: "var(--font-dmsans), system-ui, sans-serif",
              }}
            >
              {t.nom[0]}
            </div>
            <div>
              <p
                className="text-white font-medium text-sm"
                style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
              >
                {t.nom} · {t.lieu}
              </p>
              <div className="flex items-center gap-2 mt-0.5">
                <span
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{
                    background: `${t.tagColor}30`,
                    color: t.tagColor === "#2A4A5E" ? "#A8D4E8" : t.tagColor,
                    fontFamily: "var(--font-dmsans), system-ui, sans-serif",
                  }}
                >
                  {t.tag}
                </span>
                <span
                  className="text-white/40 text-xs"
                  style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
                >
                  {t.type}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {temoignages.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === idx ? "bg-[#C4906A] w-6" : "bg-white/30"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setIdx((idx - 1 + temoignages.length) % temoignages.length)}
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => setIdx((idx + 1) % temoignages.length)}
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
