"use client";
import { Calendar, MessageCircle } from "lucide-react";

export default function ImFloating() {
  return (
    <div className="fixed bottom-5 left-0 right-0 z-50 pointer-events-none">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-end">
        {/* WhatsApp */}
        <a
          href="https://wa.me/33XXXXXXXXX?text=Bonjour%20Imara%20Institut%2C%20je%20souhaite%20avoir%20des%20informations."
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="Contacter par WhatsApp"
        >
          <MessageCircle size={20} className="text-white" fill="white" />
        </a>

        {/* Planity — mobile sticky CTA */}
        <a
          href="https://www.planity.com/imara-77127-lieusaint"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto md:hidden flex items-center gap-2 bg-[#C4906A] text-white text-sm font-medium px-5 py-3 rounded-full shadow-lg hover:bg-[#b07d5a] transition-colors"
          style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
        >
          <Calendar size={15} />
          Réserver un soin
        </a>
      </div>
    </div>
  );
}
