"use client";

import { Moon, Sun } from "lucide-react";
import { setThemeValue, useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const theme = useTheme();
  const dark = theme === "dark";

  function toggle() {
    setThemeValue(dark ? "light" : "dark");
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Activar modo claro" : "Activar modo oscuro"}
      className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 text-zinc-600 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-white/10"
    >
      {dark ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
    </button>
  );
}