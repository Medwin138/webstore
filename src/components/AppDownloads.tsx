"use client";

import { useState } from "react";
import { DownloadButtons } from "@/components/DownloadButtons";
import type { AppFile, Platform } from "@/data/apps";
import { platformMeta } from "@/data/helpers";
import { useUrlParamValue } from "@/hooks/useUrlParamValue";

export function AppDownloads({
  appSlug,
  version,
  files,
}: {
  appSlug: string;
  version: string;
  files: AppFile[];
}) {
  const [tab, setTab] = useState<Platform | null>(null);
  const urlPlatform = useUrlParamValue("platform");

  const selected: Platform =
    tab ??
    (urlPlatform && files.some((f) => f.platform === urlPlatform)
      ? (urlPlatform as Platform)
      : null) ??
    files[0]?.platform ??
    "android";

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {files.map((file) => (
          <button
            key={file.platform}
            type="button"
            onClick={() => setTab(file.platform)}
            className={
              selected === file.platform
                ? "rounded-full bg-brand-gradient px-4 py-2 text-sm font-semibold text-white shadow-md shadow-brand-500/25"
                : "rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-600 transition-colors hover:border-brand-400 hover:text-brand-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-brand-500 dark:hover:text-brand-300"
            }
          >
            {platformMeta[file.platform].emoji} {platformMeta[file.platform].label}
          </button>
        ))}
      </div>
      <div className="mt-5">
        <DownloadButtons appSlug={appSlug} version={version} files={files} platform={selected} />
      </div>
    </div>
  );
}