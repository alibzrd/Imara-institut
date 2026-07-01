"use client";
import { useState, useEffect } from "react";
import { Menu, X, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ImHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#soins", label: "Institut" },
    { href: "#formations", label: "Académie" },
    { href: "#equipe", label: "Notre histoire" },
    { href: "#temoignages", label: "Témoignages" },
    { href: "/imara/inscription", label: "S'inscrire" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white border-b border-[#E5E5E3]" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/imara">
          <Image
            src="/imara/logo.png"
            alt="Imara Institut"
            width={120}
            height={37}
            className={`h-9 w-auto transition-all ${scrolled ? "" : "brightness-0 invert"}`}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-xs tracking-widest uppercase transition-colors hover:text-[#C9A96E] ${scrolled ? "text-[#0A0A0A]" : "text-white/80"}`}
              style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://www.planity.com/imara-77127-lieusaint"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 text-xs tracking-widest uppercase px-5 py-2.5 border transition-colors hover:bg-[#C9A96E] hover:border-[#C9A96E] hover:text-white ${scrolled ? "border-[#C9A96E] text-[#C9A96E]" : "border-white/50 text-white"}`}
            style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
          >
            <Calendar size={12} />
            Réserver
          </a>
        </nav>

        {/* Mobile */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href="https://www.planity.com/imara-77127-lieusaint"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-[#C9A96E] text-white text-xs px-3 py-2"
            style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
          >
            <Calendar size={11} />
            Réserver
          </a>
          <button onClick={() => setOpen(!open)} className={scrolled ? "text-[#0A0A0A]" : "text-white"}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-[#E5E5E3] px-6 py-5 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-xs tracking-widest uppercase text-[#0A0A0A] hover:text-[#C9A96E] transition-colors"
              style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
