"use client";

import { useSyncExternalStore } from "react";

const listeners = new Set<() => void>();

function getStorageValue(key: string): string {
  if (typeof window === "undefined") return "";
  try {
    return window.localStorage.getItem(key) ?? "";
  } catch {
    return "";
  }
}

export function setLocalStorageValue(key: string, raw: string) {
  try {
    window.localStorage.setItem(key, raw);
  } catch {
    // almacenamiento no disponible
  }
  listeners.forEach((listener) => listener());
}

export function useLocalStorageValue(key: string): string {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    () => getStorageValue(key),
    () => ""
  );
}