import type { ExperienceEntry } from "@/types";
import { FadeIn } from "./fade-in";

export function ExperienceTimeline({ entries }: { entries: ExperienceEntry[] }) {
  return (
    <ol className="relative border-l border-border pl-8 sm:pl-10">
      {entries.map((entry, i) => (
        <li key={entry.role} className="mb-12 last:mb-0">
          <FadeIn delay={i * 0.08}>
            <span className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full border border-accent bg-background" />
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-dim">
              {entry.period}
            </p>
            <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
              {entry.role}
            </h3>
            <p className="mt-1 text-sm text-muted">{entry.organization}</p>
            <ul className="mt-3 max-w-2xl space-y-2">
              {entry.bullets.map((bullet) => (
                <li key={bullet} className="text-[14px] leading-relaxed text-muted">
                  <span className="mr-2 text-accent">—</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </FadeIn>
        </li>
      ))}
    </ol>
  );
}
