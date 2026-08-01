"use client";

import { useEffect } from "react";
import { RotateCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to your monitoring service of choice.
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[80vh] items-center">
      <div className="container-content">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">Error</p>
        <h1 className="mt-5 max-w-lg font-display text-display-md font-semibold text-foreground">
          Something didn&apos;t simulate correctly.
        </h1>
        <p className="mt-4 max-w-md text-[14px] leading-relaxed text-muted">
          An unexpected error occurred while rendering this page. You can try
          again, or head back to the homepage.
        </p>
        <button
          onClick={reset}
          className="group mt-8 inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 text-[13px] font-medium text-background transition-transform duration-300 ease-signature hover:-translate-y-0.5"
        >
          <RotateCcw size={14} className="transition-transform duration-300 group-hover:-rotate-45" />
          Try again
        </button>
      </div>
    </div>
  );
}
