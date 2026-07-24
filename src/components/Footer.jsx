import { Dumbbell } from "lucide-react";

const FOOTER_LINKS = [
  { label: "Funciones", href: "#funciones" },
  { label: "Planes", href: "#planes" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-10 sm:px-6 md:flex-row md:justify-between lg:px-8">
        {/* Logo reducido */}
        <a
          href="#inicio"
          className="group flex items-center gap-2.5 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-400 shadow-[0_0_16px_rgba(16,185,129,0.35)] transition-transform duration-300 group-hover:-rotate-6">
            <Dumbbell aria-hidden="true" className="h-4 w-4 text-white" strokeWidth={2.4} />
          </span>
          <span className="text-sm font-extrabold tracking-tight text-white">
            GymFlow <span className="font-medium text-slate-500">· Management Suite</span>
          </span>
        </a>

        {/* Enlaces rápidos */}
        <nav
          aria-label="Enlaces del pie de página"
          className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2"
        >
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded text-sm text-slate-400 transition-colors hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            className="rounded text-sm text-slate-400 transition-colors hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            Admin
          </button>
        </nav>

        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} GymFlow. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
