import Image from "next/image";
import { Calendar, GraduationCap, MapPin } from "lucide-react";

export default function ImCtaFinal() {
  return (
    <section className="py-16 px-4 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-light text-[#2C2C2C] text-center mb-4"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          Prête à franchir le pas ?
        </h2>
        <p
          className="text-center text-[#6B6B6B] text-base mb-10 max-w-md mx-auto"
          style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
        >
          Soin bien-être ou formation professionnelle — Imara vous accompagne.
        </p>

        <div className="grid md:grid-cols-2 gap-5 mb-10">
          {/* Institut CTA */}
          <div className="rounded-2xl overflow-hidden relative min-h-64 flex flex-col justify-end">
            <Image
              src="/imara/team-1.jpg"
              alt="Réserver un soin Imara Institut"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)",
              }}
            />
            <div className="relative p-6 flex flex-col gap-3">
              <div>
                <h3
                  className="text-2xl font-semibold text-white mb-1"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  Envie d&apos;un soin ?
                </h3>
                <p
                  className="text-white/60 text-xs"
                  style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
                >
                  Réservez en ligne via Planity, rapide et sans engagement.
                </p>
              </div>
              <a
                href="https://www.planity.com/imara-77127-lieusaint"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#C4906A] text-white font-medium py-3 rounded-lg hover:bg-[#b07d5a] transition-colors text-sm"
                style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
              >
                <Calendar size={14} />
                Réserver maintenant
              </a>
            </div>
          </div>

          {/* Académie CTA */}
          <div className="rounded-2xl overflow-hidden relative min-h-64 flex flex-col justify-end">
            <Image
              src="/imara/team-2.jpg"
              alt="S'inscrire à une formation Imara Académie"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(20,50,70,0.3) 60%, transparent 100%)",
              }}
            />
            <div className="relative p-6 flex flex-col gap-3">
              <div>
                <h3
                  className="text-2xl font-semibold text-white mb-1"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  Projet de formation ?
                </h3>
                <p
                  className="text-white/60 text-xs"
                  style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
                >
                  Notre chargée de formations répond à toutes vos questions.
                </p>
              </div>
              <a
                href="/imara/inscription"
                className="flex items-center justify-center gap-2 bg-[#2A4A5E] text-white font-medium py-3 rounded-lg hover:bg-[#1e3a4e] transition-colors text-sm"
                style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
              >
                <GraduationCap size={14} />
                S&apos;inscrire ou se renseigner
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-[#6B6B6B] text-sm">
          <MapPin size={15} style={{ color: "#C4906A" }} />
          <span style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}>
            Imara Institut · 120m² · Lieusaint, 77127 Île-de-France
          </span>
        </div>
      </div>
    </section>
  );
}
