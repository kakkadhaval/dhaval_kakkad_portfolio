import Link from "next/link";
import { Linkedin, Github, GraduationCap, BookMarked, Mail } from "lucide-react";

const socials = [
  { href: "https://linkedin.com/in/dhavalkakkad", label: "LinkedIn", icon: Linkedin },
  { href: "https://github.com/dhavalkakkad", label: "GitHub", icon: Github },
  { href: "https://scholar.google.com", label: "Google Scholar", icon: GraduationCap },
  { href: "https://www.researchgate.net", label: "ResearchGate", icon: BookMarked },
  { href: "mailto:dhavalkakkad2201@gmail.com", label: "Email", icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-border-subtle">
      <div className="container-content flex flex-col gap-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-sm font-medium text-foreground">Dhaval Kakkad</p>
          <p className="mt-1 text-[13px] text-muted-dim">
            Mechanical Engineer · Researcher · CFD Engineer
          </p>
        </div>

        <ul className="flex items-center gap-5">
          {socials.map(({ href, label, icon: Icon }) => (
            <li key={label}>
              <Link
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="text-muted transition-colors duration-300 hover:text-accent-bright"
              >
                <Icon size={17} strokeWidth={1.5} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="container-content border-t border-border-subtle py-5">
        <p className="text-xs text-muted-dim">
          © {new Date().getFullYear()} Dhaval Kakkad. Rajkot, Gujarat, India.
        </p>
      </div>
    </footer>
  );
}
