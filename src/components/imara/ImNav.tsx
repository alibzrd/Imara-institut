import Image from "next/image";
import Link from "next/link";

export default function ImNav({ light = false }: { light?: boolean }) {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${light ? "bg-white border-b border-[#E5E5E3]" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/imara">
          <Image
            src="/imara/logo.png"
            alt="Imara Institut"
            width={110}
            height={34}
            className={`h-8 w-auto ${light ? "" : "invert brightness-0 invert"}`}
            priority
          />
        </Link>

        <nav className="flex items-center gap-8">
          <Link
            href="/imara/prestations"
            className="text-xs tracking-widest uppercase transition-colors hover:text-[#C9A96E]"
            style={{
              fontFamily: "var(--font-dmsans), system-ui, sans-serif",
              color: light ? "#0A0A0A" : "rgba(255,255,255,0.7)",
            }}
          >
            Prestations
          </Link>
          <Link
            href="/imara/formations"
            className="text-xs tracking-widest uppercase transition-colors hover:text-[#C9A96E]"
            style={{
              fontFamily: "var(--font-dmsans), system-ui, sans-serif",
              color: light ? "#0A0A0A" : "rgba(255,255,255,0.7)",
            }}
          >
            Formations
          </Link>
          <Link
            href="/imara/inscription"
            className="text-xs tracking-widest uppercase px-5 py-2.5 border transition-colors"
            style={{
              fontFamily: "var(--font-dmsans), system-ui, sans-serif",
              borderColor: light ? "#C9A96E" : "rgba(201,169,110,0.6)",
              color: light ? "#C9A96E" : "#C9A96E",
            }}
          >
            S&apos;inscrire
          </Link>
        </nav>
      </div>
    </header>
  );
}
