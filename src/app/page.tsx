import Link from "next/link";
import { ArrowRight, Code2, Download, Eye, Sparkles, UserRound } from "lucide-react";
import { AppCard } from "@/components/AppCard";
import { featuredApps, apps, totalDownloads } from "@/data/apps";
import { profile, projects } from "@/data/profile";
import { formatNumber } from "@/data/helpers";

const stats = [
  { value: formatNumber(apps.length), label: "Aplicaciones publicadas" },
  { value: formatNumber(totalDownloads), label: "Descargas totales" },
  { value: formatNumber(profile.stats.projects), label: "Proyectos" },
  { value: `${profile.stats.years}+`, label: "Años de experiencia" },
];

const recentProjects = projects.slice(0, 3);

export default function Home() {
  return (
    <div className="animate-fade-in">
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(219,39,119,0.12),transparent_55%)]"
        />
        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-20 sm:px-6 sm:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="animate-fade-up text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
              WebStore profesional
            </p>
            <h1 className="animate-fade-up mt-4 text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl [animation-delay:100ms]">
              <span className="text-gradient">{profile.headline}</span>
            </h1>
            <p className="animate-fade-up mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400 [animation-delay:200ms]">
              {profile.summary} Explora aplicaciones para Android, Windows y Linux diseñadas para
              resolver problemas reales.
            </p>
            <div className="animate-fade-up mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row [animation-delay:300ms]">
              <Link
                href="/apps"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-gradient px-7 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-transform hover:scale-[1.03] sm:w-auto"
              >
                <Sparkles className="h-4.5 w-4.5" />
                Ver aplicaciones
              </Link>
              <Link
                href="/sobre-mi"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white/60 px-7 text-sm font-semibold text-zinc-800 backdrop-blur transition-colors hover:bg-white sm:w-auto dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-100 dark:hover:bg-zinc-800"
              >
                <UserRound className="h-4.5 w-4.5" />
                Mi perfil
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200/70 bg-white py-10 dark:border-zinc-800/70 dark:bg-zinc-950">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
              Aplicaciones destacadas
            </h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Herramientas que resuelven problemas reales.
            </p>
          </div>
          <Link
            href="/destacadas"
            className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-brand-600 hover:text-brand-500 dark:text-brand-400"
          >
            Ver todas <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredApps.slice(0, 3).map((app) => (
            <AppCard key={app.slug} app={app} />
          ))}
        </div>
      </section>

      <section className="border-y border-zinc-200/70 bg-white dark:border-zinc-800/70 dark:bg-zinc-950">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
            Tecnologías utilizadas
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-zinc-600 dark:text-zinc-400">
            El stack con el que construyo aplicaciones y automatizaciones.
          </p>
          <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
            {profile.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-brand-400 hover:text-brand-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-brand-500 dark:hover:text-brand-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
              Proyectos recientes
            </h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Selección de los últimos trabajos y herramientas.
            </p>
          </div>
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-brand-600 hover:text-brand-500 dark:text-brand-400"
          >
            Todos los proyectos <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {recentProjects.map((project) => (
            <Link
              key={project.slug}
              href={project.appSlug ? `/apps/${project.appSlug}` : project.github ?? "#"}
              target={project.appSlug ? undefined : "_blank"}
              rel={project.appSlug ? undefined : "noopener noreferrer"}
              className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-500/10 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-brand-500/50"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-2xl dark:bg-zinc-800">
                {project.icon}
              </span>
              <h3 className="mt-4 flex items-center gap-1.5 text-lg font-bold text-zinc-900 dark:text-zinc-50">
                {project.name}
                <Code2 className="h-4 w-4 text-zinc-400 transition-colors group-hover:text-brand-500" />
              </h3>
              <p className="mt-1.5 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
              <p className="mt-4 text-xs font-medium text-zinc-500 dark:text-zinc-500">
                {project.platform}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-brand-gradient">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-14 text-center sm:px-6 md:flex-row md:text-left">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              ¿Listo para probar mis aplicaciones?
            </h2>
            <p className="mt-2 text-white/80">
              Descarga gratis y empieza a automatizar tus tareas.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/apps"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-zinc-900 shadow-lg transition-transform hover:scale-[1.03]"
            >
              <Download className="h-4.5 w-4.5" />
              Explorar tienda
            </Link>
            <Link
              href="/contacto"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/40 px-7 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Eye className="h-4.5 w-4.5" />
              Contactar
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}