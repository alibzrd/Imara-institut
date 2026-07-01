import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ImUniversPicker() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-[11px] tracking-[0.3em] text-[#C9A96E] uppercase mb-4" style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}>
          Choisissez votre univers
        </p>
        <h2 className="text-center text-5xl md:text-6xl font-light text-[#0A0A0A] mb-3" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
          Pour vous, pour votre carrière
        </h2>
        <div className="w-10 h-px bg-[#C9A96E] mx-auto mb-14" />

        <div className="grid md:grid-cols-2 gap-px bg-[#E5E5E3]">
          {/* Institut */}
          <a href="#soins" className="group relative overflow-hidden min-h-96 flex flex-col justify-end bg-white">
            <Image src="/imara/thumb-1.jpg" alt="Institut" fill className="object-cover object-center transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)" }} />
            <div className="relative p-8">
              <p className="text-[10px] tracking-[0.3em] text-[#C9A96E] uppercase mb-2" style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}>Institut</p>
              <h3 className="text-4xl font-light text-white mb-3" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>Soins &amp; Beauté</h3>
              <p className="text-white/60 text-sm mb-5 max-w-sm" style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}>Extensions de cils, maquillage permanent, radiofréquence Imara Gold. 120m² dédiés à votre beauté.</p>
              <span className="inline-flex items-center gap-2 text-white/50 text-xs tracking-widest uppercase group-hover:text-[#C9A96E] transition-colors" style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}>
                Découvrir <ArrowRight size={14} />
              </span>
            </div>
          </a>

          {/* Académie */}
          <a href="#formations" className="group relative overflow-hidden min-h-96 flex flex-col justify-end bg-white">
            <Image src="/imara/formations.jpg" alt="Académie" fill className="object-cover object-center transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)" }} />
            <div className="relative p-8">
              <p className="text-[10px] tracking-[0.3em] text-[#C9A96E] uppercase mb-2" style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}>Académie · Qualiopi · CPF</p>
              <h3 className="text-4xl font-light text-white mb-3" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>Formations certifiantes</h3>
              <p className="text-white/60 text-sm mb-5 max-w-sm" style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}>22 formations professionnelles. Max 6 stagiaires · Kit inclus · 6 mois de suivi. CPF &amp; OPCO acceptés.</p>
              <span className="inline-flex items-center gap-2 text-white/50 text-xs tracking-widest uppercase group-hover:text-[#C9A96E] transition-colors" style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}>
                22 programmes <ArrowRight size={14} />
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
