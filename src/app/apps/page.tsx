import type { Metadata } from "next";
import { apps } from "@/data/apps";
import { StoreExplorer } from "@/components/StoreExplorer";

export const metadata: Metadata = {
  title: "Aplicaciones",
  description:
    "Explora todas las aplicaciones de WebStore para Android, Windows y Linux. Busca por categoría, plataforma y descarga gratis.",
};

export default function AppsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          Aplicaciones
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-zinc-600 dark:text-zinc-400">
          Herramientas y soluciones digitales para Android, Windows y Linux. Todas gratuitas.
        </p>
      </div>
      <div className="mt-10">
        <StoreExplorer apps={apps} />
      </div>
    </div>
  );
}