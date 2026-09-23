import { Platform, AppInformation } from "./apps";

export const platformMeta: Record<Platform, { label: string; emoji: string }> = {
  android: { label: "Android", emoji: "🤖" },
  windows: { label: "Windows", emoji: "🪟" },
  linux: { label: "Linux", emoji: "🐧" },
  otras: { label: "Otras", emoji: "💻" },
};

export const categoryLabel: Record<AppInformation["category"], string> = {
  productividad: "Productividad",
  herramientas: "Herramientas",
  desarrollo: "Desarrollo",
  multimedia: "Multimedia",
};

export function formatDownloads(n: number): string {
  if (n >= 1000) {
    return `${(n / 1000).toLocaleString("es-ES", { maximumFractionDigits: 1 })} mil`;
  }
  return n.toLocaleString("es-ES");
}

export function formatNumber(n: number): string {
  return n.toLocaleString("es-ES");
}