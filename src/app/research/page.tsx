import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { PublicationCard } from "@/components/publication-card";
import { FadeIn } from "@/components/fade-in";
import { publications } from "@/lib/data";

export const metadata: Metadata = {
  title: "Research & Publications",
  description:
    "Research overview, methodologies, and publications by Dhaval Kakkad in computational fluid dynamics, thermal engineering, and biomedical device design.",
};

const methodologies = [
  "Computational Fluid Dynamics (CFD)",
  "Finite Element Analysis (FEA)",
  "Design of Experiments (DOE)",
  "Response Surface Methodology (RSM)",
  "Experimental Validation",
];

const software = ["ANSYS Fluent", "ANSYS Workbench", "Siemens NX", "SolidWorks", "AutoCAD"];

const futureDirections = [
  "Simulation-informed design of accessible rehabilitation robotics",
  "Extending battery thermal management research to next-generation cell chemistries",
  "Biomechanically validated surgical instrument design frameworks",
  "Coupling optimization algorithms with CFD for faster design convergence",
];

export default function ResearchPage() {
  return (
    <div className="pt-32 sm:pt-40">
      <section className="container-content">
        <SectionHeading
          eyebrow="Research"
          title="Research overview"
          description="My research centers on using computational modeling to make design decisions defensible — replacing intuition with simulation, and simulation with validated evidence, across thermal systems and medical devices."
        />
      </section>

      <section className="container-content mt-20 grid grid-cols-1 gap-10 sm:mt-24 sm:grid-cols-3">
        <FadeIn>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
            Methodologies
          </h3>
          <ul className="mt-4 space-y-2 text-[13.5px] text-muted">
            {methodologies.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </FadeIn>
        <FadeIn delay={0.06}>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
            Software used
          </h3>
          <ul className="mt-4 space-y-2 text-[13.5px] text-muted">
            {software.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </FadeIn>
        <FadeIn delay={0.12}>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
            Future directions
          </h3>
          <ul className="mt-4 space-y-2 text-[13.5px] text-muted">
            {futureDirections.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </FadeIn>
      </section>

      <section className="container-content mt-28 pb-28 sm:mt-36 sm:pb-36">
        <SectionHeading eyebrow="Publications" title="Papers & academic work" />
        <div className="mt-12 space-y-6">
          {publications.map((pub) => (
            <PublicationCard key={pub.title} pub={pub} />
          ))}
        </div>
      </section>
    </div>
  );
}
