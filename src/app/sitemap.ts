import type { MetadataRoute } from "next";
import { apps } from "@/data/apps";

const baseUrl = "https://Medwin138.github.io/webstore";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: "daily", priority: 1 },
    { url: `${baseUrl}/apps/`, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/destacadas/`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/proyectos/`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${baseUrl}/sobre-mi/`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/contacto/`, changeFrequency: "monthly", priority: 0.4 },
    { url: `${baseUrl}/descargas/`, changeFrequency: "daily", priority: 0.8 },
  ];

  const appRoutes: MetadataRoute.Sitemap = apps.map((app) => ({
    url: `${baseUrl}/apps/${app.slug}/`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...appRoutes];
}