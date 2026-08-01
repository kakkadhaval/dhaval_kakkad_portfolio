"use client";

import { useState } from "react";
import { ChevronDown, Copy, Check } from "lucide-react";
import type { Publication } from "@/types";
import { cn } from "@/lib/utils";

function toCitation(pub: Publication) {
  return `${pub.authors} (${pub.year}). ${pub.title}. ${pub.journal}.`;
}

function toBibtex(pub: Publication) {
  const key = pub.title.split(" ").slice(0, 2).join("").replace(/[^a-zA-Z0-9]/g, "");
  return `@article{${key}${pub.year},
  title   = {${pub.title}},
  author  = {${pub.authors}},
  journal = {${pub.journal}},
  year    = {${pub.year}}
}`;
}

export function PublicationCard({ pub }: { pub: Publication }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState<"citation" | "bibtex" | null>(null);

  const copy = async (text: string, kind: "citation" | "bibtex") => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(kind);
      setTimeout(() => setCopied(null), 1800);
    } catch {
      // clipboard unavailable — silently ignore
    }
  };

  return (
    <article className="rounded-lg border border-border-subtle bg-surface/40 p-6 sm:p-8">
      <div className="flex flex-wrap items-center gap-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
          {pub.year}
        </span>
        <span
          className={cn(
            "rounded-full border px-2.5 py-0.5 text-[11px]",
            pub.status === "Published"
              ? "border-accent-dim text-accent-bright"
              : "border-border text-muted"
          )}
        >
          {pub.status}
        </span>
      </div>

      <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-foreground">
        {pub.title}
      </h3>
      <p className="mt-1 text-sm text-muted">{pub.journal}</p>
      <p className="mt-1 text-[13px] text-muted-dim">{pub.authors}</p>

      <p className="mt-4 max-w-3xl text-[14px] leading-relaxed text-muted">{pub.abstract}</p>

      <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px]">
        <span className="text-muted-dim">
          DOI: <span className="text-muted">{pub.doi ?? "Available upon request"}</span>
        </span>
        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center gap-1 text-accent transition-colors hover:text-accent-bright"
        >
          Citation & BibTeX
          <ChevronDown
            size={14}
            className={cn("transition-transform duration-300", open && "rotate-180")}
          />
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden transition-[max-height] duration-300 ease-signature",
          open ? "max-h-96 mt-4" : "max-h-0"
        )}
      >
        <div className="space-y-4">
          <div>
            <div className="mb-1.5 flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-dim">
                Citation
              </span>
              <button
                onClick={() => copy(toCitation(pub), "citation")}
                aria-label="Copy citation"
                className="text-muted-dim hover:text-foreground"
              >
                {copied === "citation" ? <Check size={13} /> : <Copy size={13} />}
              </button>
            </div>
            <p className="rounded border border-border-subtle bg-background p-3 font-mono text-[12.5px] leading-relaxed text-muted">
              {toCitation(pub)}
            </p>
          </div>
          <div>
            <div className="mb-1.5 flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-dim">
                BibTeX
              </span>
              <button
                onClick={() => copy(toBibtex(pub), "bibtex")}
                aria-label="Copy BibTeX"
                className="text-muted-dim hover:text-foreground"
              >
                {copied === "bibtex" ? <Check size={13} /> : <Copy size={13} />}
              </button>
            </div>
            <pre className="overflow-x-auto rounded border border-border-subtle bg-background p-3 font-mono text-[12px] leading-relaxed text-muted">
              {toBibtex(pub)}
            </pre>
          </div>
        </div>
      </div>
    </article>
  );
}
