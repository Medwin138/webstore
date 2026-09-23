import type { Metadata } from "next";
import { Briefcase, Code2, Quote, Wrench } from "lucide-react";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "Conoce a Edwin Laguna: Software Engineer y QA Automation Engineer especializado en automatización de pruebas y desarrollo de herramientas.",
};

export default function SobreMiPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <section className="grid items-center gap-10 lg:grid-cols-[auto_1fr]">
        <div className="relative mx-auto">
          <div className="absolute -inset-2 rounded-3xl bg-brand-gradient opacity-20 blur-xl" />
          <div className="relative flex h-48 w-48 items-center justify-center rounded-3xl bg-gradient-to-br from-brand-500 via-purple-500 to-pink-500 text-7xl font-extrabold text-white shadow-2xl">
            EL
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            {profile.name}
          </h1>
          <p className="mt-2 text-lg font-semibold text-gradient">{profile.role}</p>
          <blockquote className="mt-5 rounded-2xl border-l-4 border-brand-500 bg-white p-5 dark:bg-zinc-900">
            <Quote className="h-5 w-5 text-brand-500" />
            <p className="mt-2 text-zinc-700 dark:text-zinc-300">{profile.summary}</p>
          </blockquote>
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
            Mi objetivo es que todo lo que construyo sea útil, automatizado y bien probado:
            aplicaciones para usuarios finales y herramientas para equipos de QA.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          <Wrench className="h-6 w-6 text-brand-600 dark:text-brand-400" />
          Tecnologías
        </h2>
        <div className="mt-6 flex flex-wrap gap-2.5">
          {profile.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-brand-400 hover:text-brand-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-brand-500 dark:hover:text-brand-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            <Briefcase className="h-6 w-6 text-brand-600 dark:text-brand-400" />
            Experiencia
          </h2>
          <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <p className="text-3xl font-extrabold text-gradient">{profile.experience.years}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {profile.experience.sectors.map((sector) => (
                <span
                  key={sector}
                  className="rounded-full bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            <Code2 className="h-6 w-6 text-brand-600 dark:text-brand-400" />
            Lo que hago
          </h2>
          <div className="mt-6 grid gap-3">
            {[
              "Diseñar y ejecutar estrategias de automatización de pruebas.",
              "Desarrollar herramientas para equipos de QA y desarrollo.",
              "Construir aplicaciones de productividad multiplataforma.",
              "Integrar pipelines de CI/CD con tests automáticos.",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-white p-4 text-sm leading-6 text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
              >
                <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-brand-gradient" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}