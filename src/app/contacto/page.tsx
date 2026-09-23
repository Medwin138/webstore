import type { Metadata } from "next";
import { GitBranch, Globe, Mail } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta con Edwin Laguna para proyectos, colaboraciones, dudas sobre las aplicaciones o propuestas profesionales.",
};

const channels = [
  {
    label: "Email",
    value: "hola@edwinlaguna.dev",
    href: "mailto:hola@edwinlaguna.dev",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/edwinlaguna",
    href: "https://github.com/",
    icon: GitBranch,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/edwinlaguna",
    href: "https://www.linkedin.com/",
    icon: Globe,
  },
];

export default function ContactoPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          Contacto
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-zinc-600 dark:text-zinc-400">
          ¿Tienes un proyecto en mente, dudas sobre alguna aplicación o propuestas de
          colaboración? Escríbeme.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Vías de contacto
          </h2>
          <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            También puedes encontrarme en estos canales:
          </p>
          <ul className="mt-6 space-y-3">
            {channels.map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-4 transition-colors hover:border-brand-400 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-brand-500"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:bg-brand-500/15 dark:text-brand-400">
                    <channel.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                      {channel.label}
                    </p>
                    <p className="truncate text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                      {channel.value}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}