import type { EducationEntry } from "@/types";
import { FadeIn } from "./fade-in";

export function Timeline({ entries }: { entries: EducationEntry[] }) {
  return (
    <ol className="relative border-l border-border pl-8 sm:pl-10">
      {entries.map((entry, i) => (
        <li key={entry.degree} className="mb-12 last:mb-0">
          <FadeIn delay={i * 0.08}>
            <span className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full border border-accent bg-background" />
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-dim">
              {entry.period}
            </p>
            <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
              {entry.degree}
            </h3>
            <p className="mt-1 text-sm text-muted">
              {entry.institution}
              {entry.affiliation ? ` · ${entry.affiliation}` : ""}
            </p>
            <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-muted">
              {entry.detail}
            </p>
          </FadeIn>
        </li>
      ))}
    </ol>
  );
}
