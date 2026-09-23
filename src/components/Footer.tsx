import Link from "next/link";
import { GitBranch, Mail, MapPin, MonitorSmartphone } from "lucide-react";
import { apps, totalDownloads } from "@/data/apps";

const footerLinks = [
  { href: "/", label: "Inicio" },
  { href: "/apps", label: "Aplicaciones" },
  { href: "/destacadas", label: "Destacadas" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/sobre-mi", label: "Sobre mí" },
  { href: "/contacto", label: "Contacto" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient text-white">
                <MonitorSmartphone className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-bold text-zinc-900 dark:text-zinc-50">Edwin Laguna</p>
                <p className="text-xs font-medium text-brand-600 dark:text-brand-400">WebStore</p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              Aplicaciones útiles, herramientas y soluciones digitales desarrolladas por Edwin
              Laguna. Crea. Automatiza. Simplifica.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Navegación</h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-600 transition-colors hover:text-brand-600 dark:text-zinc-400 dark:hover:text-brand-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Tienda</h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="/apps"
                  className="text-sm text-zinc-600 transition-colors hover:text-brand-600 dark:text-zinc-400 dark:hover:text-brand-400"
                >
                  {apps.length} aplicaciones
                </Link>
              </li>
              <li>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  {totalDownloads.toLocaleString("es-ES")} descargas
                </span>
              </li>
              <li>
                <span className="flex items-center gap-1.5 text-sm text-zinc-600 dark:text-zinc-400">
                  <MapPin className="h-4 w-4" /> España
                </span>
              </li>
            </ul>
            <div className="mt-4 flex gap-2">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 text-zinc-500 transition-colors hover:border-brand-500 hover:text-brand-600 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-brand-400"
              >
                <GitBranch className="h-4.5 w-4.5" />
              </a>
              <a
                href="mailto:hola@edwinlaguna.dev"
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 text-zinc-500 transition-colors hover:border-brand-500 hover:text-brand-600 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-brand-400"
              >
                <Mail className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-zinc-200 pt-6 text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-500 sm:flex-row">
          <p>© {year} Edwin Laguna — WebStore. Todos los derechos reservados.</p>
          <p>Hecho con Next.js y Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}