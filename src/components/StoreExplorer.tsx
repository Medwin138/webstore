"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { AppCard } from "@/components/AppCard";
import type { AppInformation } from "@/data/apps";
import { categories, platforms } from "@/data/apps";

export function StoreExplorer({ apps }: { apps: AppInformation[] }) {
  const [query, setQuery] = useState("");
  const [platform, setPlatform] = useState<string>("todas");
  const [category, setCategory] = useState<string>("todas");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return apps.filter((app) => {
      const matchesPlatform = platform === "todas" || app.platforms.includes(platform as never);
      const matchesCategory = category === "todas" || app.category === category;
      const matchesQuery =
        q === "" ||
        app.name.toLowerCase().includes(q) ||
        app.shortDescription.toLowerCase().includes(q) ||
        app.description.toLowerCase().includes(q);
      return matchesPlatform && matchesCategory && matchesQuery;
    });
  }, [apps, query, platform, category]);

  return (
    <div>
      <div className="relative mx-auto max-w-xl">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar aplicaciones..."
          aria-label="Buscar aplicaciones"
          className="h-12 w-full rounded-full border border-zinc-200 bg-white pl-12 pr-4 text-sm text-zinc-900 shadow-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder:text-zinc-500"
        />
      </div>

      <div className="mt-8">
        <div className="flex flex-wrap justify-center gap-2">
          {platforms.map((p) => (
            <button
              key={p.value}
              type="button"
              onClick={() => setPlatform(p.value)}
              className={
                platform === p.value
                  ? "rounded-full bg-brand-gradient px-4 py-2 text-sm font-semibold text-white shadow-md shadow-brand-500/25"
                  : "rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-600 transition-colors hover:border-brand-400 hover:text-brand-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-brand-500 dark:hover:text-brand-300"
              }
            >
              {p.emoji} {p.label}
            </button>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c.value}
              type="button"
              onClick={() => setCategory(c.value)}
              className={
                category === c.value
                  ? "rounded-full bg-zinc-900 px-3.5 py-1.5 text-xs font-semibold text-white dark:bg-white dark:text-zinc-900"
                  : "rounded-full px-3.5 py-1.5 text-xs font-medium text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/10 dark:hover:text-white"
              }
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((app) => (
            <AppCard key={app.slug} app={app} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-2xl border border-dashed border-zinc-300 py-16 text-center dark:border-zinc-700">
          <p className="text-3xl">🔍</p>
          <p className="mt-3 font-semibold text-zinc-900 dark:text-zinc-50">
            No se encontraron aplicaciones
          </p>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            Prueba con otra búsqueda o cambia los filtros.
          </p>
        </div>
      )}
    </div>
  );
}