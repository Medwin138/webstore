"use client";

import { useMemo } from "react";
import { BadgeCheck, Download } from "lucide-react";
import type { AppFile } from "@/data/apps";
import { platformMeta } from "@/data/helpers";
import { setLocalStorageValue, useLocalStorageValue } from "@/hooks/useLocalStorageValue";

interface Downloads {
  [key: string]: number;
}

export function DownloadButtons({
  appSlug,
  version,
  files,
}: {
  appSlug: string;
  version: string;
  files: AppFile[];
}) {
  const raw = useLocalStorageValue(`dl-${appSlug}`);
  const downloaded = useMemo<Downloads>(() => {
    try {
      return JSON.parse(raw || "{}");
    } catch {
      return {};
    }
  }, [raw]);

  function handleDownload(key: string) {
    const next: Downloads = { ...downloaded, [key]: (downloaded[key] ?? 0) + 1 };
    setLocalStorageValue(`dl-${appSlug}`, JSON.stringify(next));
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {files.map((file) => {
        const key = `${file.platform}-${version}`;
        const count = downloaded[key] ?? 0;
        return (
          <div
            key={key}
            className="flex items-center justify-between gap-3 rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="min-w-0">
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                {platformMeta[file.platform].emoji} {platformMeta[file.platform].label}
              </p>
              <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-500">
                {file.format}{version ? ` · v${version}` : ""} · {file.size}
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleDownload(key)}
              className={
                count > 0
                  ? "inline-flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400"
                  : "inline-flex shrink-0 items-center gap-1.5 rounded-full bg-brand-gradient px-4 py-2 text-sm font-semibold text-white shadow-md shadow-brand-500/25 transition-transform hover:scale-[1.03]"
              }
            >
              {count > 0 ? (
                <>
                  <BadgeCheck className="h-4 w-4" />
                  {count} {count === 1 ? "descarga" : "descargas"}
                </>
              ) : (
                <>
                  <Download className="h-4 w-4" />
                  Descargar {file.format}
                </>
              )}
            </button>
          </div>
        );
      })}
    </div>
  );
}