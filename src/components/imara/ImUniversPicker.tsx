import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ImUniversPicker() {
  return (
    <section className="py-16 px-4 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto">
        <p
          className="text-center text-sm tracking-widest text-[#C4906A] uppercase mb-3"
          style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
        >
          Choisissez votre univers
        </p>
        <h2
          className="text-center text-4xl md:text-5xl font-light text-[#2C2C2C] mb-10"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          Pour vous, pour votre carrière
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Institut card */}
          <a
            href="#soins"
            className="group relative overflow-hidden rounded-2xl min-h-80 flex flex-col justify-end transition-transform hover:scale-[1.02]"
          >
            <Image
              src="/imara/thumb-1.jpg"
              alt="Institut Imara — soins esthétiques"
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Dark overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)",
              }}
            />
            <div className="relative p-7">
              <p
                className="text-xs tracking-widest text-[#E8C4A0] uppercase mb-1"
                style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
              >
                Institut
              </p>
              <h3
                className="text-3xl font-semibold text-white mb-2"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Soins &amp; Beauté
              </h3>
              <p
                className="text-white/70 text-sm leading-relaxed mb-4"
                style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
              >
                Extensions de cils, maquillage permanent, radiofréquence Imara Gold.
                Un espace de 120m² pensé pour votre bien-être.
              </p>
              <div
                className="flex items-center gap-2 text-[#E8C4A0] text-sm font-medium group-hover:gap-3 transition-all"
                style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
              >
                Découvrir les soins <ArrowRight size={16} />
              </div>
            </div>
          </a>

          {/* Académie card */}
          <a
            href="#formations"
            className="group relative overflow-hidden rounded-2xl min-h-80 flex flex-col justify-end transition-transform hover:scale-[1.02]"
          >
            <Image
              src="/imara/formations.jpg"
              alt="Académie Imara — formations certifiantes"
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(20,50,70,0.4) 60%, transparent 100%)",
              }}
            />
            <div className="relative p-7">
              <p
                className="text-xs tracking-widest text-[#A8D4E8] uppercase mb-1"
                style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
              >
                Académie
              </p>
              <h3
                className="text-3xl font-semibold text-white mb-2"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Formations certifiantes
              </h3>
              <p
                className="text-white/70 text-sm leading-relaxed mb-4"
                style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
              >
                22 formations professionnelles. Max 6 stagiaires, 3 formateurs. Kit
                inclus. 6 mois de suivi. Financement CPF &amp; OPCO acceptés.
              </p>
              <div
                className="flex items-center gap-2 text-[#A8D4E8] text-sm font-medium group-hover:gap-3 transition-all"
                style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
              >
                Voir les formations <ArrowRight size={16} />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
