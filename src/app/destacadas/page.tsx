import type { Metadata } from "next";
import { Star } from "lucide-react";
import { AppCard } from "@/components/AppCard";
import { featuredApps } from "@/data/apps";

export const metadata: Metadata = {
  title: "Aplicaciones destacadas",
  description:
    "Las mejores aplicaciones de WebStore seleccionadas por Edwin Laguna. Herramientas con la mayor valoración de usuarios.",
};

export default function DestacadasPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-amber-100/70 px-4 py-1.5 text-sm font-semibold text-amber-700 dark:bg-amber-500/10 dark:text-amber-400">
          <Star className="h-4 w-4 fill-current" /> Selección de Edwin Laguna
        </span>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          Aplicaciones destacadas
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-zinc-600 dark:text-zinc-400">
          Las herramientas mejor valoradas de la tienda, listas para usar.
        </p>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featuredApps.map((app) => (
          <AppCard key={app.slug} app={app} />
        ))}
      </div>
    </div>
  );
}