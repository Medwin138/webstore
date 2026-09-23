import Link from "next/link";
import { Download, Star } from "lucide-react";
import type { AppInformation } from "@/data/apps";
import { categoryLabel, formatDownloads, platformMeta } from "@/data/helpers";

export function AppCard({ app, platformQuery }: { app: AppInformation; platformQuery?: string }) {
  return (
    <Link
      href={platformQuery ? `/apps/${app.slug}?platform=${platformQuery}` : `/apps/${app.slug}`}
      className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-500/10 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-brand-500/50"
    >
      <div className="flex items-start justify-between">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-zinc-100 shadow-inner transition-transform duration-300 group-hover:scale-105 dark:bg-zinc-800">
          {app.iconImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={app.iconImage} alt={app.name} className="h-11 w-11 rounded-xl object-contain" />
          ) : (
            <span className="text-3xl">{app.icon}</span>
          )}
        </span>
        <span className="flex items-center gap-1 rounded-full bg-amber-100/70 px-2 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-500/10 dark:text-amber-400">
          <Star className="h-3.5 w-3.5 fill-current" />
          {app.rating.toFixed(1)}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        {app.name}
      </h3>
      <p className="mt-1.5 line-clamp-2 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        {app.shortDescription}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-brand-500/10 px-2.5 py-1 text-xs font-medium text-brand-700 dark:bg-brand-500/15 dark:text-brand-300">
          ⭐ {categoryLabel[app.category]}
        </span>
        <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
          v{app.version}
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-zinc-100 pt-4 dark:border-zinc-800">
        <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-500">
          {app.platforms.map((p) => (
            <span key={p} title={platformMeta[p].label}>
              {platformMeta[p].emoji}
            </span>
          ))}
        </div>
        <span className="flex items-center gap-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-500">
          <Download className="h-3.5 w-3.5" />
          {formatDownloads(app.downloads)}
        </span>
      </div>
    </Link>
  );
}