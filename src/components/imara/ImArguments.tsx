import Image from "next/image";
import { Award, Users, ShieldCheck } from "lucide-react";

const args = [
  {
    icon: Award,
    color: "#C4906A",
    bg: "#C4906A15",
    titre: "Expertise depuis 2016",
    texte:
      "Lory, fondatrice formée à Bangkok, et son équipe de 4 passionnées continuent de se former pour vous apporter le meilleur des techniques actuelles.",
  },
  {
    icon: Users,
    color: "#2A4A5E",
    bg: "#2A4A5E15",
    titre: "Formations sur-mesure",
    texte:
      "Maximum 6 stagiaires par session, encadrés par 3 formateurs. Kit de démarrage professionnel inclus. 6 mois de suivi personnalisé après votre formation.",
  },
  {
    icon: ShieldCheck,
    color: "#4A7C59",
    bg: "#4A7C5915",
    titre: "Certification garantie",
    texte:
      "Certifiés Qualiopi. Agrément de l'Agence Régionale de Santé. N° d'activité 11770645977. Vos droits CPF et OPCO sont utilisables ici.",
  },
];

export default function ImArguments() {
  return (
    <section id="equipe" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <p
          className="text-sm tracking-widest text-[#C4906A] uppercase mb-3 text-center"
          style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
        >
          Pourquoi nous choisir
        </p>
        <h2
          className="text-4xl md:text-5xl font-light text-[#2C2C2C] text-center mb-12"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          Pourquoi choisir Imara Institut ?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {args.map((a) => {
            const Icon = a.icon;
            return (
              <div
                key={a.titre}
                className="rounded-2xl p-7 flex flex-col gap-4"
                style={{ background: a.bg }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: `${a.color}20` }}
                >
                  <Icon size={22} style={{ color: a.color }} />
                </div>
                <h3
                  className="text-2xl font-semibold text-[#2C2C2C]"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  {a.titre}
                </h3>
                <p
                  className="text-[#6B6B6B] text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
                >
                  {a.texte}
                </p>
              </div>
            );
          })}
        </div>

        {/* Real team photo */}
        <div className="rounded-2xl overflow-hidden relative h-72 md:h-96">
          <Image
            src="/imara/qui-sommes-nous.jpg"
            alt="L'équipe Imara Institut"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1280px) 100vw, 1200px"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)",
            }}
          />
          <div className="absolute inset-0 flex items-end p-8">
            <div>
              <p
                className="text-xs tracking-widest text-[#E8C4A0] uppercase mb-2"
                style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
              >
                Notre équipe
              </p>
              <h3
                className="text-3xl font-semibold text-white mb-1"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Lory · Nawel · Maryline · Sofia
              </h3>
              <p
                className="text-white/60 text-sm"
                style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
              >
                4 expertes passionnées à votre service depuis Lieusaint
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
