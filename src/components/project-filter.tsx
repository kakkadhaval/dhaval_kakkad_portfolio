"use client";

import { useMemo, useState } from "react";
import type { Project, ProjectDomain } from "@/types";
import { ProjectCard } from "./project-card";
import { cn } from "@/lib/utils";

const domains: (ProjectDomain | "All")[] = [
  "All",
  "Research",
  "Simulation",
  "Mechanical Design",
  "Automation",
  "CAD",
  "Medical Devices",
];

export function ProjectFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<(typeof domains)[number]>("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.domains.includes(active))),
    [active, projects]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {domains.map((domain) => (
          <button
            key={domain}
            onClick={() => setActive(domain)}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-[12.5px] transition-colors duration-300",
              active === domain
                ? "border-accent-dim bg-accent-dim/15 text-accent-bright"
                : "border-border-subtle text-muted hover:border-border hover:text-foreground"
            )}
          >
            {domain}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {filtered.map((project, i) => (
          <ProjectCard key={project.slug} project={project} delay={i * 0.05} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-sm text-muted-dim">No projects in this category yet.</p>
      )}
    </div>
  );
}
