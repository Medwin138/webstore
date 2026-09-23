import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  Check,
  Download,
  HardDrive,
  Star,
  UserRound,
} from "lucide-react";
import { AppCard } from "@/components/AppCard";
import { AppDownloads } from "@/components/AppDownloads";
import { apps, getAppBySlug } from "@/data/apps";
import { categoryLabel, formatDownloads, platformMeta } from "@/data/helpers";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return apps.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const app = getAppBySlug(slug);
  if (!app) return { title: "Aplicación no encontrada" };

  return {
    title: `${app.name} - Aplicación para ${app.platforms
      .map((p) => platformMeta[p].label)
      .join(" y ")}`,
    description: `${app.shortDescription} Descarga ${app.name} gratis. ${app.downloads.toLocaleString(
      "es-ES"
    )} descargas, valoración ${app.rating} estrellas.`,
    openGraph: {
      title: app.name,
      description: app.shortDescription,
      type: "website",
    },
  };
}

export default async function AppDetailPage({ params }: Props) {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app) {
    notFound();
  }

  const related = apps.filter((a) => a.category === app.category && a.slug !== app.slug).slice(0, 3);
  const screenshotColors = [
    "from-indigo-500/80 to-purple-500/80",
    "from-purple-500/80 to-pink-500/80",
    "from-sky-500/80 to-indigo-500/80",
  ];

  return (
    <div className="animate-fade-in">
      <div className="border-b border-zinc-200/70 bg-white dark:border-zinc-800/70 dark:bg-zinc-950">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <Link
            href="/apps"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 transition-colors hover:text-brand-600 dark:hover:text-brand-400"
          >
            <ArrowLeft className="h-4 w-4" /> Volver a aplicaciones
          </Link>

          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start">
            <span className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-zinc-100 shadow-inner dark:bg-zinc-800">
              {app.iconImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={app.iconImage}
                  alt={app.name}
                  className="h-20 w-20 rounded-2xl object-contain"
                />
              ) : (
                <span className="text-6xl">{app.icon}</span>
              )}
            </span>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                  {app.name}
                </h1>
                <span className="flex items-center gap-1 rounded-full bg-amber-100/70 px-2.5 py-1 text-sm font-semibold text-amber-700 dark:bg-amber-500/10 dark:text-amber-400">
                  <Star className="h-4 w-4 fill-current" />
                  {app.rating.toFixed(1)}
                </span>
              </div>
              <p className="mt-2 max-w-2xl text-lg leading-7 text-zinc-600 dark:text-zinc-400">
                {app.shortDescription}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-brand-500/10 px-3 py-1.5 text-xs font-semibold text-brand-700 dark:bg-brand-500/15 dark:text-brand-300">
                  ⭐ {categoryLabel[app.category]}
                </span>
                <span className="rounded-full bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                  v{app.version}
                </span>
                {app.platforms.map((p) => (
                  <span
                    key={p}
                    className="rounded-full bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                  >
                    {platformMeta[p].emoji} {platformMeta[p].label}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-500 dark:text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <Download className="h-4 w-4" /> {formatDownloads(app.downloads)} descargas
                </span>
                <span className="flex items-center gap-1.5">
                  <HardDrive className="h-4 w-4" /> {app.size}
                </span>
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="h-4 w-4" /> Actualizado el {app.updatedAt}
                </span>
                <span className="flex items-center gap-1.5">
                  <UserRound className="h-4 w-4" /> {app.developer}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl space-y-16 px-4 py-14 sm:px-6">
        <section>
          <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Acerca de
          </h2>
          <p className="mt-3 max-w-3xl leading-8 text-zinc-600 dark:text-zinc-400">
            {app.description}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Características
          </h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {app.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-4 text-sm font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                  <Check className="h-4 w-4" />
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Capturas de pantalla
          </h2>
          <div className="mt-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {app.screenshots?.length ? (
              app.screenshots.map((src, i) => (
                <figure
                  key={src}
                  className="overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={`Captura ${i + 1} de ${app.name}`}
                    loading="lazy"
                    className="aspect-[9/16] w-full object-cover"
                  />
                </figure>
              ))
            ) : (
              screenshotColors.map((color, i) => (
                <div
                  key={i}
                  className={`relative flex h-44 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${color}`}
                >
                  <span className="text-5xl drop-shadow-lg">{app.icon}</span>
                  <span className="absolute bottom-3 right-4 rounded-full bg-black/30 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
                    Vista {i + 1}
                  </span>
                </div>
              ))
            )}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Descargas
          </h2>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Selecciona tu plataforma para descargar la versión {app.version}. Si la versión no
            está disponible para tu plataforma, el botón no aparecerá.
          </p>
          <div className="mt-5">
            <AppDownloads appSlug={app.slug} version={app.version} files={app.files} />
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Requisitos
            </h2>
            <ul className="mt-5 divide-y divide-zinc-100 rounded-2xl border border-zinc-200 bg-white dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-900">
              {app.platforms.map((p) => (
                <li key={p} className="flex items-center justify-between px-5 py-3.5">
                  <span className="flex items-center gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    {platformMeta[p].emoji} {platformMeta[p].label}
                  </span>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">
                    {app.requirements[p]}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Historial de versiones
            </h2>
            <ul className="mt-5 space-y-3">
              {app.releases.map((release) => (
                <li
                  key={release.version}
                  className="rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-zinc-900 dark:text-zinc-50">
                      {release.version}
                    </span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-500">{release.date}</span>
                  </div>
                  <p className="mt-1.5 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {release.notes}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {related.length > 0 && (
          <section>
            <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Aplicaciones similares
            </h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((app) => (
                <AppCard key={app.slug} app={app} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}