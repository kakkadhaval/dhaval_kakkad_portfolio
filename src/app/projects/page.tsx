import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { ProjectFilter } from "@/components/project-filter";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Engineering and research projects by Dhaval Kakkad spanning CFD simulation, mechanical design, medical devices, and robotics.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-28 sm:pt-40 sm:pb-36">
      <section className="container-content">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="A cross-section of research and applied engineering projects, filterable by domain."
        />
        <div className="mt-12">
          <ProjectFilter projects={projects} />
        </div>
      </section>
    </div>
  );
}
