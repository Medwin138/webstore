import type { Metadata } from "next";
import Link from "next/link";
import { Download, HardDrive, Smartphone } from "lucide-react";
import { apps } from "@/data/apps";
import { formatDownloads, platformMeta } from "@/data/helpers";

export const metadata: Metadata = {
  title: "Descargas",
  description:
    "Centro de descargas de WebStore. Todas las versiones de cada aplicación registradas por plataforma y versión.",
};

export default function DescargasPage() {
  const sorted = [...apps].sort((a, b) => b.downloads - a.downloads);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-500/10 px-4 py-1.5 text-sm font-semibold text-brand-700 dark:bg-brand-500/15 dark:text-brand-300">
          <Download className="h-4 w-4" /> Centro de descargas
        </span>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          Descargas
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-zinc-600 dark:text-zinc-400">
          Cada descarga se registra por aplicación, versión y plataforma. Todas las versiones se
          conservan.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="grid grid-cols-[1fr_auto] items-center gap-4 border-b border-zinc-100 bg-zinc-50 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950/50 sm:grid-cols-[1fr_auto_auto_auto]">
          <span>Aplicación</span>
          <span className="hidden sm:block">Versión</span>
          <span className="hidden sm:block">Plataformas</span>
          <span className="text-right">Descargas</span>
        </div>
        {sorted.map((app) => (
          <div
            key={app.slug}
            className="grid grid-cols-[1fr_auto] items-center gap-4 border-b border-zinc-100 px-5 py-4 last:border-0 dark:border-zinc-800 sm:grid-cols-[1fr_auto_auto_auto]"
          >
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-xl dark:bg-zinc-800">
                {app.icon}
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  {app.name}
                </p>
                <p className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-500">
                  <Smartphone className="h-3 w-3" /> {app.platforms.length} plataforma
                  {app.platforms.length > 1 ? "s" : ""}
                </p>
              </div>
            </div>
            <span className="hidden text-sm font-medium text-zinc-600 dark:text-zinc-400 sm:block">
              v{app.version}
            </span>
            <span className="hidden text-sm text-zinc-500 dark:text-zinc-500 sm:block">
              {app.platforms.map((p) => platformMeta[p].emoji).join(" ")}
            </span>
            <span className="flex justify-end items-center gap-1 text-sm font-bold text-zinc-900 dark:text-zinc-50">
              <HardDrive className="hidden h-4 w-4 text-zinc-400 sm:block" />
              {formatDownloads(app.downloads)}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-6 text-center text-sm text-zinc-500 dark:text-zinc-500">
        Visita cada aplicación en{" "}
        <Link
          href="/apps"
          className="font-medium text-brand-600 hover:underline dark:text-brand-400"
        >
          la tienda
        </Link>{" "}
        para descargar la versión que prefieras.
      </p>
    </div>
  );
}