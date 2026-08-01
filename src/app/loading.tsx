export default function Loading() {
  return (
    <div className="container-content pt-32 sm:pt-40">
      <div className="h-3 w-40 animate-pulse rounded bg-surface-raised" />
      <div className="mt-6 h-10 w-2/3 animate-pulse rounded bg-surface-raised" />
      <div className="mt-4 h-4 w-1/2 animate-pulse rounded bg-surface-raised" />
    </div>
  );
}
