"use client";

import { useSyncExternalStore } from "react";

function emptySubscribe() {
  return () => {};
}

function getUrlParamValue(name: string): string {
  if (typeof window === "undefined") return "";
  try {
    return new URLSearchParams(window.location.search).get(name) ?? "";
  } catch {
    return "";
  }
}

export function useUrlParamValue(name: string): string {
  return useSyncExternalStore(
    emptySubscribe,
    () => getUrlParamValue(name),
    () => ""
  );
}