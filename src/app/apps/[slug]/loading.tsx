export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="h-4 w-32 animate-pulse rounded-full bg-zinc-200 dark:bg-zinc-800" />
      <div className="mt-10 flex gap-6">
        <div className="h-24 w-24 animate-pulse rounded-3xl bg-zinc-200 dark:bg-zinc-800" />
        <div className="flex-1 space-y-3">
          <div className="h-9 w-64 animate-pulse rounded-full bg-zinc-200 dark:bg-zinc-800" />
          <div className="h-5 w-96 max-w-full animate-pulse rounded-full bg-zinc-200 dark:bg-zinc-800" />
          <div className="h-5 w-72 animate-pulse rounded-full bg-zinc-200 dark:bg-zinc-800" />
        </div>
      </div>
      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-44 animate-pulse rounded-2xl bg-zinc-200 dark:bg-zinc-800" />
        ))}
      </div>
    </div>
  );
}