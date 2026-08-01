import type { Project } from "@/types";
import { FadeIn } from "./fade-in";

export function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  return (
    <FadeIn delay={delay}>
      <article className="group flex h-full flex-col rounded-lg border border-border-subtle bg-surface/40 p-6 transition-all duration-300 ease-signature hover:border-border hover:bg-surface sm:p-7">
        <div className="flex flex-wrap gap-2">
          {project.domains.map((domain) => (
            <span
              key={domain}
              className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[10.5px] uppercase tracking-[0.08em] text-muted-dim"
            >
              {domain}
            </span>
          ))}
        </div>

        <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-foreground">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-[14px] leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-5 space-y-3 border-t border-border-subtle pt-4">
          <div>
            <p className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-muted-dim">
              Challenge
            </p>
            <p className="mt-1 text-[13px] leading-relaxed text-muted">{project.challenge}</p>
          </div>
          <div>
            <p className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-muted-dim">
              Result
            </p>
            <p className="mt-1 text-[13px] leading-relaxed text-muted">{project.result}</p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded border border-border-subtle px-2 py-1 text-[11px] text-muted-dim"
            >
              {tech}
            </span>
          ))}
        </div>
      </article>
    </FadeIn>
  );
}
