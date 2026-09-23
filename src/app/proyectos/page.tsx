import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, GitBranch } from "lucide-react";
import { projects } from "@/data/profile";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Proyectos de Edwin Laguna: aplicaciones, herramientas de QA y automatización. Enlaces a GitHub y a la tienda.",
};

export default function ProyectosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          Mis proyectos
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-zinc-600 dark:text-zinc-400">
          Aplicaciones, herramientas y automatizaciones que he desarrollado.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-500/10 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-brand-500/50"
          >
            <div className="flex items-start justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-2xl dark:bg-zinc-800">
                {project.icon}
              </span>
              <span className="flex rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                {project.platform.split(" · ")[0]}
              </span>
            </div>
            <h2 className="mt-4 text-lg font-bold text-zinc-900 dark:text-zinc-50">{project.name}</h2>
            <p className="mt-1.5 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {project.description}
            </p>
            <div className="mt-5 flex items-center gap-3 border-t border-zinc-100 pt-4 dark:border-zinc-800">
              {project.appSlug && (
                <Link
                  href={`/apps/${project.appSlug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-500 dark:text-brand-400"
                >
                  Ver en tienda <ArrowUpRight className="h-4 w-4" />
                </Link>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                >
                  <GitBranch className="h-4 w-4" /> GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}