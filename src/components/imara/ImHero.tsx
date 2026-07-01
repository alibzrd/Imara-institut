"use client";
import Image from "next/image";
import { Calendar, GraduationCap, Star } from "lucide-react";

export default function ImHero() {
  return (
    <section className="relative min-h-screen flex items-end pb-16 overflow-hidden">
      <Image
        src="/imara/hero.jpg"
        alt="Imara Institut"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          <div
            className="inline-flex items-center gap-2 border border-white/20 text-white/70 text-[10px] tracking-[0.25em] uppercase px-4 py-2 mb-8"
            style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
          >
            <span className="w-1 h-1 bg-[#C9A96E]" />
            Institut &amp; Académie · Lieusaint · depuis 2016
          </div>

          <h1
            className="text-6xl md:text-8xl font-light text-white leading-none mb-4"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Votre beauté,
            <br />
            <em className="not-italic" style={{ color: "#C9A96E" }}>votre expertise.</em>
          </h1>

          <div className="w-12 h-px bg-[#C9A96E] mb-8" />

          <p
            className="text-white/60 text-base mb-10 max-w-md"
            style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
          >
            Centre de beauté certifié et académie de formation professionnelle en Île-de-France.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a
              href="https://www.planity.com/imara-77127-lieusaint"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#C9A96E] hover:bg-[#a07840] text-white text-xs tracking-widest uppercase px-8 py-4 transition-colors"
              style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
            >
              <Calendar size={14} />
              Réserver un soin
            </a>
            <a
              href="#formations"
              className="flex items-center justify-center gap-2 border border-white/30 hover:border-white text-white text-xs tracking-widest uppercase px-8 py-4 transition-colors"
              style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
            >
              <GraduationCap size={14} />
              Voir les formations
            </a>
          </div>

          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} className="fill-[#C9A96E] text-[#C9A96E]" />
            ))}
            <span className="text-white/40 text-xs ml-1" style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}>
              +200 clientes satisfaites
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-30">
        <div className="w-px h-10 bg-white animate-pulse" />
      </div>
    </section>
  );
}
