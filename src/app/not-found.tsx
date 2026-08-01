import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] items-center">
      <div className="container-content">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">404</p>
        <h1 className="mt-5 max-w-lg font-display text-display-md font-semibold text-foreground">
          This page hasn&apos;t converged.
        </h1>
        <p className="mt-4 max-w-md text-[14px] leading-relaxed text-muted">
          The page you&apos;re looking for doesn&apos;t exist, or may have moved. Let&apos;s
          get you back to solid ground.
        </p>
        <Link
          href="/"
          className="group mt-8 inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 text-[13px] font-medium text-background transition-transform duration-300 ease-signature hover:-translate-y-0.5"
        >
          Back to home
          <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
