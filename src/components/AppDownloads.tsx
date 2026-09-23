"use client";

import { DownloadButtons } from "@/components/DownloadButtons";
import type { AppFile, Platform } from "@/data/apps";
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
  const urlPlatform = useUrlParamValue("platform");
  const platform: Platform =
    urlPlatform !== "" && files.some((f) => f.platform === urlPlatform)
      ? (urlPlatform as Platform)
      : files[0]?.platform ?? "android";

  return (
    <DownloadButtons appSlug={appSlug} version={version} files={files} platform={platform} />
  );
}