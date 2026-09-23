"use client";

import { Download } from "lucide-react";
import type { AppFile, Platform } from "@/data/apps";
import { platformMeta } from "@/data/helpers";

const RELEASES_URL = "https://github.com/Medwin138/webstore/releases";

export function DownloadButtons({
  appSlug,
  version,
  files,
  platform,
}: {
  appSlug: string;
  version: string;
  files: AppFile[];
  platform?: Platform;
}) {
  const filtered = platform ? files.filter((file) => file.platform === platform) : files;

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {filtered.map((file) => {
        const href = file.url ?? `${RELEASES_URL}?q=${encodeURIComponent(appSlug)}`;
        return (
          <a
            key={`${file.platform}-${version}`}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group flex items-center justify-between gap-3 rounded-2xl border border-zinc-200 bg-white p-4 transition-colors hover:border-brand-400 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-brand-500"
          >
            <div className="min-w-0">
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                {platformMeta[file.platform].emoji} {platformMeta[file.platform].label}
              </p>
              <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-500">
                {file.format}{version ? ` · v${version}` : ""} · {file.size}
              </p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-brand-gradient px-4 py-2 text-sm font-semibold text-white shadow-md shadow-brand-500/25 transition-transform group-hover:scale-[1.03]">
              <Download className="h-4 w-4" />
              Descargar {file.format}
            </span>
          </a>
        );
      })}
    </div>
  );
}