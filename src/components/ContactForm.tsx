"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status !== "idle") return;
    setStatus("sending");
    window.setTimeout(() => setStatus("sent"), 900);
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-16 text-center dark:border-emerald-500/30 dark:bg-emerald-500/10">
        <CheckCircle2 className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />
        <h3 className="mt-4 text-lg font-bold text-zinc-900 dark:text-zinc-50">
          ¡Mensaje enviado!
        </h3>
        <p className="mt-2 max-w-sm text-sm text-zinc-600 dark:text-zinc-400">
          Gracias por escribirme. Te responderé en cuanto pueda.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full border border-zinc-300 px-5 py-2 text-sm font-semibold text-zinc-700 transition-colors hover:bg-white dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8 dark:border-zinc-800 dark:bg-zinc-900"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
            Nombre
          </label>
          <input
            id="name"
            required
            placeholder="Tu nombre"
            className="mt-2 h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder:text-zinc-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="tu@email.com"
            className="mt-2 h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder:text-zinc-500"
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
          Asunto
        </label>
        <input
          id="subject"
          required
          placeholder="¿Sobre qué quieres hablar?"
          className="mt-2 h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder:text-zinc-500"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
          Mensaje
        </label>
        <textarea
          id="message"
          required
          rows={5}
          placeholder="Cuéntame tu proyecto, duda o propuesta..."
          className="mt-2 w-full resize-none rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder:text-zinc-500"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-gradient px-7 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-transform hover:scale-[1.02] disabled:opacity-70"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-4.5 w-4.5 animate-spin" /> Enviando...
          </>
        ) : (
          <>
            <Send className="h-4.5 w-4.5" /> Enviar mensaje
          </>
        )}
      </button>
      <p className="text-center text-xs text-zinc-400 dark:text-zinc-500">
        Formulario de demostración del MVP visual.
      </p>
    </form>
  );
}