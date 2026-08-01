"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-signature",
        scrolled ? "border-b border-border-subtle bg-background/70 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <nav className="container-content flex h-16 items-center justify-between sm:h-20">
        <Link
          href="/"
          className="font-display text-sm font-semibold tracking-wide text-foreground"
        >
          DK
          <span className="ml-2 hidden text-muted-dim sm:inline">/ Dhaval Kakkad</span>
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href} className="relative">
                <Link
                  href={link.href}
                  className={cn(
                    "text-[13px] tracking-wide transition-colors duration-300",
                    active ? "text-foreground" : "text-muted hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
                <span
                  className={cn(
                    "absolute -bottom-2 left-0 h-px w-full bg-accent transition-opacity duration-300",
                    active ? "opacity-100" : "opacity-0"
                  )}
                />
              </li>
            );
          })}
        </ul>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center text-foreground md:hidden"
        >
          {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-b border-border-subtle bg-background/95 backdrop-blur-md transition-[max-height] duration-300 ease-signature md:hidden",
          open ? "max-h-80" : "max-h-0 border-transparent"
        )}
      >
        <ul className="container-content flex flex-col gap-1 py-4">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "block py-2.5 text-sm",
                  pathname === link.href ? "text-foreground" : "text-muted"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
