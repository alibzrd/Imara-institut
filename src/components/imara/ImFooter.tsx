import { MapPin } from "lucide-react";
import Link from "next/link";

export default function ImFooter() {
  return (
    <footer id="contact" className="bg-[#0A0A0A] text-white/50 py-14 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <p className="text-xl font-light text-white tracking-widest mb-1" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>IMARA</p>
            <p className="text-[10px] tracking-[0.3em] text-[#C9A96E] uppercase mb-5" style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}>Institut · Académie</p>
            <p className="text-xs leading-relaxed mb-6" style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}>Centre de beauté et de formation certifié Qualiopi à Lieusaint depuis 2016.</p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/imara.institut/" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 border border-white/15 flex items-center justify-center hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors" aria-label="Instagram">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100078260450863" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 border border-white/15 flex items-center justify-center hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors" aria-label="Facebook">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          {/* Institut */}
          <div>
            <p className="text-[10px] tracking-[0.3em] text-white uppercase mb-5" style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}>Institut</p>
            <ul className="flex flex-col gap-2.5 text-xs" style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}>
              {["Extensions de cils", "Maquillage permanent", "Imara Gold", "Lumière pulsée", "Réhaussement de cils"].map((s) => (
                <li key={s}>
                  <a href="https://www.planity.com/imara-77127-lieusaint" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A96E] transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Académie */}
          <div>
            <p className="text-[10px] tracking-[0.3em] text-white uppercase mb-5" style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}>Académie</p>
            <ul className="flex flex-col gap-2.5 text-xs mb-6" style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}>
              {[
                { label: "Toutes les formations", href: "/imara/formations" },
                { label: "Financement CPF / OPCO", href: "#formations" },
                { label: "Planning des sessions", href: "#formations" },
                { label: "S'inscrire", href: "/imara/inscription" },
              ].map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="hover:text-[#C9A96E] transition-colors">{s.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2 text-xs" style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}>
              <MapPin size={11} style={{ color: "#C9A96E", flexShrink: 0 }} />
              <span>Lieusaint, 77127 Île-de-France</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-white/25" style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}>© 2024 Imara Institut · N° d&apos;activité 11770645977</p>
          <div className="flex gap-5 text-[10px] text-white/25" style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}>
            <a href="https://imarainstitut.com/cgv-de-formations" target="_blank" rel="noopener noreferrer" className="hover:text-white/50 transition-colors">CGV</a>
            <a href="https://imarainstitut.com/m-l" target="_blank" rel="noopener noreferrer" className="hover:text-white/50 transition-colors">Mentions légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
