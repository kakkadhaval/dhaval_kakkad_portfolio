"use client";

import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [values, setValues] = useState({ name: "", email: "", subject: "", message: "" });

  const update = (key: keyof typeof values) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues((v) => ({ ...v, [key]: e.target.value }));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const mailto = `mailto:dhavalkakkad2201@gmail.com?subject=${encodeURIComponent(
      values.subject || "Portfolio inquiry"
    )}&body=${encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`)}`;
    window.location.href = mailto;
    setStatus("sent");
  };

  if (status === "sent") {
    return (
      <div className="flex items-start gap-3 rounded-lg border border-border-subtle bg-surface/40 p-6">
        <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" />
        <div>
          <p className="font-display text-[15px] font-semibold text-foreground">
            Your email client should now be open
          </p>
          <p className="mt-1 text-[13px] leading-relaxed text-muted">
            If nothing opened, write directly to{" "}
            <a href="mailto:dhavalkakkad2201@gmail.com" className="text-accent hover:text-accent-bright">
              dhavalkakkad2201@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name">
          <input
            id="name"
            required
            value={values.name}
            onChange={update("name")}
            className="field-input"
            placeholder="Your name"
          />
        </Field>
        <Field label="Email" htmlFor="email">
          <input
            id="email"
            type="email"
            required
            value={values.email}
            onChange={update("email")}
            className="field-input"
            placeholder="you@example.com"
          />
        </Field>
      </div>

      <Field label="Subject" htmlFor="subject">
        <input
          id="subject"
          required
          value={values.subject}
          onChange={update("subject")}
          className="field-input"
          placeholder="What is this regarding?"
        />
      </Field>

      <Field label="Message" htmlFor="message">
        <textarea
          id="message"
          required
          rows={5}
          value={values.message}
          onChange={update("message")}
          className="field-input resize-none"
          placeholder="Write your message"
        />
      </Field>

      <button
        type="submit"
        className="group inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 text-[13px] font-medium text-background transition-transform duration-300 ease-signature hover:-translate-y-0.5"
      >
        Send message
        <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
      </button>

      <style jsx>{`
        :global(.field-input) {
          width: 100%;
          background: transparent;
          border: 1px solid #232327;
          border-radius: 0.5rem;
          padding: 0.7rem 0.9rem;
          font-size: 13.5px;
          color: #f4f4f3;
          transition: border-color 0.3s ease;
        }
        :global(.field-input::placeholder) {
          color: #6e6e77;
        }
        :global(.field-input:focus) {
          outline: none;
          border-color: #7b9cd9;
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block font-mono text-[11px] uppercase tracking-[0.1em] text-muted-dim">
        {label}
      </label>
      {children}
    </div>
  );
}
