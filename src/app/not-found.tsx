import Link from "next/link";
import { MoveLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-28 text-center sm:px-6">
      <p className="text-7xl font-extrabold text-gradient">404</p>
      <h1 className="mt-4 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Página no encontrada
      </h1>
      <p className="mt-2 max-w-md text-zinc-600 dark:text-zinc-400">
        La página que buscas no existe o ha sido movida. Vuelve a la tienda para seguir
        explorando.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-brand-gradient px-7 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-transform hover:scale-[1.03]"
      >
        <MoveLeft className="h-4.5 w-4.5" /> Volver al inicio
      </Link>
    </div>
  );
}