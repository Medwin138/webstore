"use client";

import { useSyncExternalStore } from "react";

const listeners = new Set<() => void>();

export type Theme = "light" | "dark";

export function getThemeValue(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function useTheme(): Theme {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    getThemeValue,
    () => "light"
  );
}

export function setThemeValue(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  try {
    window.localStorage.setItem("theme", theme);
  } catch {
    // almacenamiento no disponible
  }
  listeners.forEach((listener) => listener());
}