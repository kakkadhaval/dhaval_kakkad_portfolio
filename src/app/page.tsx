import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, Waves, Cpu, FlaskConical, Lightbulb } from "lucide-react";
import { StreamlineBackground } from "@/components/streamline-background";
import { FadeIn } from "@/components/fade-in";

const pillars = [
  {
    icon: FlaskConical,
    title: "Research",
    description: "CFD-driven investigation into thermal systems and simulation-led design.",
  },
  {
    icon: Cpu,
    title: "Engineering",
    description: "CAD/CAM, mechanical design, and biomedical device development.",
  },
  {
    icon: Waves,
    title: "Simulation",
    description: "Finite element and fluid dynamics modeling grounded in validation.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Translating computational insight into products that work in the real world.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dhaval Kakkad",
  jobTitle: "Mechanical Engineer & CFD Researcher",
  description:
    "Mechanical engineer and researcher specializing in computational fluid dynamics, EV battery thermal management, and simulation-driven product design.",
  url: "https://dhavalkakkad.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rajkot",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Government Engineering College, Rajkot",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-16 sm:pt-20">
        <StreamlineBackground />
        <div className="container-content relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.15fr,0.85fr] lg:gap-10">
          <div>
            <FadeIn>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                Mechanical Engineer · Researcher · CFD Engineer
              </p>
            </FadeIn>

            <FadeIn delay={0.08}>
              <h1 className="mt-6 max-w-4xl font-display text-display-xl font-bold text-balance text-foreground">
                Dhaval Kakkad
              </h1>
            </FadeIn>

            <FadeIn delay={0.16}>
              <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base">
                I work at the intersection of computational fluid dynamics, thermal
                engineering, and product design — building simulation-driven solutions
                for problems in electric mobility and medical devices, and validating
                them against the real world.
              </p>
            </FadeIn>

            <FadeIn delay={0.24}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Link
                  href="/research"
                  className="group inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 text-[13px] font-medium text-background transition-transform duration-300 ease-signature hover:-translate-y-0.5"
                >
                  View Research
                  <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-[13px] font-medium text-foreground transition-colors duration-300 hover:border-accent-dim"
                >
                  Projects
                </Link>
                <Link
                  href="/cv/dhaval-kakkad-cv.pdf"
                  className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-[13px] font-medium text-muted transition-colors duration-300 hover:text-foreground"
                >
                  <Download size={14} />
                  Download CV
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-[13px] font-medium text-muted transition-colors duration-300 hover:text-foreground"
                >
                  Contact
                </Link>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.14} className="hidden justify-self-center lg:flex lg:justify-self-end">
            <div className="relative aspect-[3/4] w-full max-w-[320px] overflow-hidden rounded-lg border border-border-subtle">
              <Image
                src="/dhaval-hero.webp"
                alt="Dhaval Kakkad"
                fill
                sizes="320px"
                priority
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-border-subtle py-20 sm:py-28">
        <div className="container-content">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, i) => (
              <FadeIn key={pillar.title} delay={i * 0.06}>
                <pillar.icon size={20} strokeWidth={1.4} className="text-accent" />
                <h3 className="mt-4 font-display text-[15px] font-semibold text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted">
                  {pillar.description}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
