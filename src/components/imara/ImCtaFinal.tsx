import Image from "next/image";
import { Calendar, GraduationCap, MapPin } from "lucide-react";

export default function ImCtaFinal() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-[11px] tracking-[0.3em] text-[#C9A96E] uppercase mb-4 text-center" style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}>
          Prêtes à commencer ?
        </p>
        <h2 className="text-5xl md:text-6xl font-light text-[#0A0A0A] text-center mb-3" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
          Prête à franchir le pas ?
        </h2>
        <div className="w-10 h-px bg-[#C9A96E] mx-auto mb-14" />

        <div className="grid md:grid-cols-2 gap-px bg-[#E5E5E3]">
          {/* Institut */}
          <div className="relative min-h-80 flex flex-col justify-end overflow-hidden">
            <Image src="/imara/team-1.jpg" alt="Réserver un soin" fill className="object-cover object-center" sizes="(max-width: 768px) 100vw, 50vw" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)" }} />
            <div className="relative p-8">
              <h3 className="text-3xl font-light text-white mb-2" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>Envie d&apos;un soin ?</h3>
              <p className="text-white/50 text-xs mb-5" style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}>Réservez en ligne via Planity, sans engagement.</p>
              <a href="https://www.planity.com/imara-77127-lieusaint" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#C9A96E] text-white text-[11px] tracking-widest uppercase px-7 py-3.5 hover:bg-[#a07840] transition-colors"
                style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}>
                <Calendar size={12} /> Réserver maintenant
              </a>
            </div>
          </div>

          {/* Académie */}
          <div className="relative min-h-80 flex flex-col justify-end overflow-hidden">
            <Image src="/imara/team-2.jpg" alt="S'inscrire à une formation" fill className="object-cover object-center" sizes="(max-width: 768px) 100vw, 50vw" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)" }} />
            <div className="relative p-8">
              <h3 className="text-3xl font-light text-white mb-2" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>Projet de formation ?</h3>
              <p className="text-white/50 text-xs mb-5" style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}>Notre chargée de formations répond à toutes vos questions.</p>
              <a href="/imara/inscription"
                className="inline-flex items-center gap-2 bg-white text-[#0A0A0A] text-[11px] tracking-widest uppercase px-7 py-3.5 hover:bg-[#C9A96E] hover:text-white transition-colors"
                style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}>
                <GraduationCap size={12} /> S&apos;inscrire
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-[#888884] text-xs mt-8" style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}>
          <MapPin size={12} style={{ color: "#C9A96E" }} />
          Imara Institut · 120m² · Lieusaint, 77127 Île-de-France
        </div>
      </div>
    </section>
  );
}
