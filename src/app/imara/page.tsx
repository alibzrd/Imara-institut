import Image from "next/image";
import Link from "next/link";

export default function ImaraHomePage() {
  return (
    <main className="h-screen flex flex-col md:flex-row overflow-hidden">
      {/* Logo centré */}
      <div className="absolute top-0 left-0 right-0 z-20 flex justify-center pt-8 pointer-events-none">
        <div className="text-center pointer-events-auto">
          <Image
            src="/imara/logo.png"
            alt="Imara Institut"
            width={140}
            height={43}
            className="h-10 w-auto mx-auto invert brightness-0"
            priority
          />
        </div>
      </div>

      {/* PRESTATIONS — gauche */}
      <Link
        href="/imara/prestations"
        className="group relative flex-1 flex items-end overflow-hidden"
      >
        <Image
          src="/imara/thumb-1.jpg"
          alt="Prestations Imara Institut"
          fill
          priority
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-80"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)" }}
        />
        {/* Label */}
        <div className="relative z-10 w-full p-8 md:p-12">
          <p
            className="text-[11px] tracking-[0.3em] text-[#C9A96E] uppercase mb-3"
            style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
          >
            Institut
          </p>
          <h2
            className="text-5xl md:text-6xl font-light text-white leading-none mb-4"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Prestations
          </h2>
          <div className="w-10 h-px bg-[#C9A96E] mb-5" />
          <span
            className="inline-flex items-center gap-2 text-white/60 text-xs tracking-wider uppercase group-hover:text-white/90 transition-colors"
            style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
          >
            Découvrir
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
              <path d="M0 5h14M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </span>
        </div>
      </Link>

      {/* Séparateur vertical */}
      <div className="hidden md:block w-px bg-white/20 z-10 self-stretch" />
      <div className="md:hidden h-px bg-white/20 z-10" />

      {/* FORMATIONS — droite */}
      <Link
        href="/imara/formations"
        className="group relative flex-1 flex items-end overflow-hidden"
      >
        <Image
          src="/imara/formations.jpg"
          alt="Formations Imara Académie"
          fill
          priority
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div
          className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-80"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)" }}
        />
        <div className="relative z-10 w-full p-8 md:p-12">
          <p
            className="text-[11px] tracking-[0.3em] text-[#C9A96E] uppercase mb-3"
            style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
          >
            Académie · Qualiopi · CPF
          </p>
          <h2
            className="text-5xl md:text-6xl font-light text-white leading-none mb-4"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Formations
          </h2>
          <div className="w-10 h-px bg-[#C9A96E] mb-5" />
          <span
            className="inline-flex items-center gap-2 text-white/60 text-xs tracking-wider uppercase group-hover:text-white/90 transition-colors"
            style={{ fontFamily: "var(--font-dmsans), system-ui, sans-serif" }}
          >
            22 programmes
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
              <path d="M0 5h14M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </span>
        </div>
      </Link>
    </main>
  );
}
