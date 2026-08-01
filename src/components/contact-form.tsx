import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { FadeIn } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Dhaval Kakkad for research collaboration, consulting, or opportunities.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-28 sm:pt-40 sm:pb-36">
      <section className="container-content grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr,1.15fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let's talk"
            description="Open to research collaboration, consulting engagements, and academic opportunities."
          />

          <FadeIn delay={0.1} className="mt-10 space-y-5">
            <div className="flex items-start gap-3">
              <Mail size={17} strokeWidth={1.5} className="mt-0.5 text-accent" />
              <div>
                <p className="text-[13.5px] text-foreground">dhavalkakkad2201@gmail.com</p>
                <p className="mt-0.5 text-[12.5px] text-muted-dim">Best for research & professional inquiries</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={17} strokeWidth={1.5} className="mt-0.5 text-accent" />
              <div>
                <p className="text-[13.5px] text-foreground">+91 91066 78202</p>
                <p className="mt-0.5 text-[12.5px] text-muted-dim">Available for calls by prior arrangement</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={17} strokeWidth={1.5} className="mt-0.5 text-accent" />
              <div>
                <p className="text-[13.5px] text-foreground">Rajkot, Gujarat, India</p>
                <p className="mt-0.5 text-[12.5px] text-muted-dim">Open to remote collaboration</p>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.15}>
          <ContactForm />
        </FadeIn>
      </section>
    </div>
  );
}
