import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { Timeline } from "@/components/timeline";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { SkillCard } from "@/components/skill-card";
import { FadeIn } from "@/components/fade-in";
import { education, experience, skills, achievements } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Educational journey, engineering philosophy, and research mindset of Dhaval Kakkad, a mechanical engineer and CFD researcher.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 sm:pt-40">
      <section className="container-content">
        <SectionHeading eyebrow="About" title="A researcher's approach to engineering" />

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:gap-16">
          <FadeIn className="space-y-5 text-[15px] leading-relaxed text-muted">
            <p>
              My engineering journey began in automobile engineering, working through
              the practical realities of vehicle systems and manufacturing. Over time,
              I found myself drawn less to what a design was, and more to why it
              behaved the way it did — the flow around it, the heat moving through it,
              the stresses hidden inside it. That question led me into computational
              fluid dynamics and simulation-driven design, which I am now pursuing
              through a Master&apos;s degree in Mechanical Engineering (CAD/CAM).
            </p>
            <p>
              Today I serve as Director of Research &amp; Development at Vyom
              Surgicals, an early-stage medical device startup, where I lead two
              products through concept, design, and validation using Siemens NX,
              SolidWorks, FEA, and CFD. I treat simulation as a way of asking better
              questions before committing to a physical prototype — not as a
              replacement for experimentation, but as a way of making experimentation
              more deliberate. Observing live neurosurgical procedures firsthand has
              shaped that mindset further, grounding instrument design decisions in
              real procedural constraints rather than intuition alone.
            </p>
            <p>
              My long-term ambition is academic: to teach, research, and mentor at the
              intersection of mechanical and biomedical engineering, and to help the
              next generation of engineers see simulation not as a checkbox, but as a
              genuine tool for understanding.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="rounded-lg border border-border-subtle bg-surface/40 p-7">
              <h3 className="font-display text-[15px] font-semibold text-foreground">
                Engineering values
              </h3>
              <ul className="mt-4 space-y-3 text-[13.5px] leading-relaxed text-muted">
                <li>— Validate before you trust a simulation.</li>
                <li>— Design decisions should be traceable to evidence, not habit.</li>
                <li>— The best instrument is one its user stops noticing.</li>
                <li>— Research is only useful once it&apos;s written clearly.</li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="container-content mt-28 sm:mt-36">
        <SectionHeading eyebrow="Experience" title="Professional experience" />
        <div className="mt-12">
          <ExperienceTimeline entries={experience} />
        </div>
      </section>

      <section className="container-content mt-28 sm:mt-36">
        <SectionHeading eyebrow="Education" title="Academic background" />
        <div className="mt-12">
          <Timeline entries={education} />
        </div>
      </section>

      <section className="container-content mt-28 sm:mt-36">
        <SectionHeading
          eyebrow="Expertise"
          title="Skills & areas of interest"
          description="A practical toolkit spanning computational analysis, design, and applied research."
        />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <FadeIn key={group.category} delay={i * 0.05}>
              <SkillCard group={group} />
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="container-content mt-28 pb-28 sm:mt-36 sm:pb-36">
        <SectionHeading
          eyebrow="Beyond the lab"
          title="Leadership & recognition"
          description="A few things outside the workshop that have shaped how I lead and communicate."
        />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {achievements.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.05}>
              <div className="rounded-lg border border-border-subtle bg-surface/40 p-6">
                <h3 className="font-display text-[14.5px] font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{item.detail}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
