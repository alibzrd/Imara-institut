import { MapPin } from "lucide-react";

export default function ImFooter() {
  return (
    <footer
      id="contact"
      className="bg-[#1a0f0a] text-white/70 py-12 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <p
                className="text-2xl font-semibold text-white tracking-widest"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                IMARA
              </p>
              <p
                className="text-xs tracking-[0.25em] text-[#C4906A] uppercase mt-0.5"
                style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
              >
                Institut · Académie
              </p>
            </div>
            <p
              className="text-sm text-white/50 leading-relaxed"
              style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
            >
              Centre de beauté et de formation certifié Qualiopi à Lieusaint depuis
              2016.
            </p>
            <div className="flex gap-3 mt-5">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/imara.institut/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C4906A] transition-colors"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=100078260450863"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C4906A] transition-colors"
                aria-label="Facebook"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Institut */}
          <div>
            <h4
              className="text-white font-medium text-sm tracking-wider uppercase mb-4"
              style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
            >
              Institut
            </h4>
            <ul
              className="flex flex-col gap-2 text-sm"
              style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
            >
              {[
                "Extensions de cils",
                "Maquillage permanent",
                "Imara Gold — Radiofréquence",
                "Lumière pulsée",
                "Réhaussement de cils",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="https://www.planity.com/imara-77127-lieusaint"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#C4906A] transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Académie + Contact */}
          <div>
            <h4
              className="text-white font-medium text-sm tracking-wider uppercase mb-4"
              style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
            >
              Académie
            </h4>
            <ul
              className="flex flex-col gap-2 text-sm mb-6"
              style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
            >
              {["Toutes les formations", "Financement CPF / OPCO", "Planning des sessions", "S'inscrire"].map((s) => (
                <li key={s}>
                  <a
                    href="https://imarainstitut.com/formations/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#C4906A] transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>

            <div
              className="flex flex-col gap-2 text-sm"
              style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
            >
              <div className="flex items-center gap-2">
                <MapPin size={13} style={{ color: "#C4906A", flexShrink: 0 }} />
                <span>Lieusaint, 77127 Île-de-France</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-xs text-white/30"
            style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
          >
            © 2024 Imara Institut · N° d&apos;activité 11770645977
          </p>
          <div
            className="flex gap-4 text-xs text-white/30"
            style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
          >
            <a
              href="https://imarainstitut.com/cgv-de-formations"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/60 transition-colors"
            >
              CGV formations
            </a>
            <a
              href="https://imarainstitut.com/m-l"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/60 transition-colors"
            >
              Mentions légales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
