"use client";
import { Calendar, MessageCircle } from "lucide-react";

export default function ImFloating() {
  return (
    <div className="fixed bottom-5 left-0 right-0 z-50 pointer-events-none">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-end">
        <a href="https://wa.me/33XXXXXXXXX?text=Bonjour%20Imara%20Institut" target="_blank" rel="noopener noreferrer"
          className="pointer-events-auto w-11 h-11 bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="WhatsApp">
          <MessageCircle size={18} className="text-white" fill="white" />
        </a>
        <a href="https://www.planity.com/imara-77127-lieusaint" target="_blank" rel="noopener noreferrer"
          className="pointer-events-auto md:hidden flex items-center gap-2 bg-[#C9A96E] text-white text-[11px] tracking-widest uppercase px-5 py-3 shadow-lg hover:bg-[#a07840] transition-colors"
          style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}>
          <Calendar size={13} /> Réserver
        </a>
      </div>
    </div>
  );
}
