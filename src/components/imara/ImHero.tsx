"use client";
import Image from "next/image";
import { Calendar, GraduationCap, Star } from "lucide-react";

export default function ImHero() {
  return (
    <section className="relative min-h-screen flex items-end pb-16 overflow-hidden">
      {/* Real hero photo */}
      <Image
        src="/imara/hero.jpg"
        alt="Imara Institut — soin esthétique"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.15) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
        <div className="max-w-xl">
          <div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-xs px-3 py-1.5 rounded-full mb-6"
            style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C4906A]" />
            Institut &amp; Académie · Lieusaint · depuis 2016
          </div>

          <h1
            className="text-5xl md:text-7xl font-light text-white leading-tight mb-4"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Votre beauté,
            <br />
            <em className="font-semibold not-italic" style={{ color: "#E8C4A0" }}>
              votre expertise.
            </em>
          </h1>

          <p
            className="text-white/70 text-base md:text-lg mb-8 max-w-md"
            style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
          >
            Centre de beauté certifié et académie de formation professionnelle en
            Île&#8209;de&#8209;France.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a
              href="https://www.planity.com/imara-77127-lieusaint"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#C4906A] hover:bg-[#b07d5a] text-white font-medium px-6 py-3.5 rounded-lg transition-colors"
              style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
            >
              <Calendar size={16} />
              Réserver un soin
            </a>
            <a
              href="#formations"
              className="flex items-center justify-center gap-2 border border-white/40 hover:border-white/80 text-white font-medium px-6 py-3.5 rounded-lg transition-colors backdrop-blur-sm"
              style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
            >
              <GraduationCap size={16} />
              Voir les formations
            </a>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-[#B8913F] text-[#B8913F]" />
              ))}
            </div>
            <span
              className="text-white/60 text-sm"
              style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
            >
              +200 clientes satisfaites
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-40">
        <div className="w-px h-8 bg-white animate-pulse" />
      </div>
    </section>
  );
}
