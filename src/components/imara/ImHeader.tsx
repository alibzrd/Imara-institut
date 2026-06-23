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
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/imara" className="flex items-center">
          <Image
            src="/imara/logo.png"
            alt="Imara Institut"
            width={120}
            height={37}
            className="h-9 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#6B6B6B] hover:text-[#C4906A] transition-colors"
              style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://www.planity.com/imara-77127-lieusaint"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#C4906A] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#b07d5a] transition-colors"
            style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
          >
            <Calendar size={14} />
            Réserver
          </a>
        </nav>

        {/* Mobile: book + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href="https://www.planity.com/imara-77127-lieusaint"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-[#C4906A] text-white text-xs font-medium px-3 py-2 rounded-lg"
          >
            <Calendar size={12} />
            Réserver
          </a>
          <button onClick={() => setOpen(!open)} className="text-[#2C2C2C] p-1">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#FAF8F5] border-t border-[#E8E4DF] px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[#2C2C2C] text-base font-medium py-1"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
