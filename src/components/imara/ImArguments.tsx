import Image from "next/image";
import { Award, Users, ShieldCheck } from "lucide-react";

const args = [
  { icon: Award, titre: "Expertise depuis 2016", texte: "Lory, fondatrice formée à Bangkok, et son équipe de 4 passionnées continuent de se former pour vous apporter le meilleur des techniques actuelles." },
  { icon: Users, titre: "Formations sur-mesure", texte: "Maximum 6 stagiaires par session encadrés par 3 formateurs. Kit professionnel inclus. 6 mois de suivi personnalisé post-formation." },
  { icon: ShieldCheck, titre: "Certification garantie", texte: "Certifiés Qualiopi. Agrément ARS. N° d'activité 11770645977. Vos droits CPF et OPCO sont utilisables ici." },
];

export default function ImArguments() {
  return (
    <section id="equipe" className="py-20 bg-[#F7F7F5]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-[11px] tracking-[0.3em] text-[#C9A96E] uppercase mb-4 text-center" style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}>
          Pourquoi nous choisir
        </p>
        <h2 className="text-5xl md:text-6xl font-light text-[#0A0A0A] text-center mb-3" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
          Pourquoi Imara Institut ?
        </h2>
        <div className="w-10 h-px bg-[#C9A96E] mx-auto mb-14" />

        <div className="grid md:grid-cols-3 gap-px bg-[#E5E5E3] mb-px">
          {args.map((a) => {
            const Icon = a.icon;
            return (
              <div key={a.titre} className="bg-[#F7F7F5] p-10 flex flex-col gap-5">
                <div className="w-10 h-10 border border-[#C9A96E] flex items-center justify-center">
                  <Icon size={18} style={{ color: "#C9A96E" }} />
                </div>
                <h3 className="text-2xl font-light text-[#0A0A0A]" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>{a.titre}</h3>
                <div className="w-6 h-px bg-[#C9A96E]" />
                <p className="text-sm text-[#888884] leading-relaxed" style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}>{a.texte}</p>
              </div>
            );
          })}
        </div>

        {/* Team photo */}
        <div className="relative h-72 md:h-96 overflow-hidden">
          <Image src="/imara/qui-sommes-nous.jpg" alt="L'équipe Imara Institut" fill className="object-cover object-center" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)" }} />
          <div className="absolute inset-0 flex items-end p-10">
            <div>
              <p className="text-[10px] tracking-[0.3em] text-[#C9A96E] uppercase mb-2" style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}>Notre équipe</p>
              <h3 className="text-3xl font-light text-white" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>Lory · Nawel · Maryline · Sofia</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
