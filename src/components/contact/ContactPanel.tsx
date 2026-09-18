"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const interestAreas = [
  "Implementation Acceleration",
  "Project Assurance",
  "Technical Expert Mobilization",
  "MEAL",
  "Governance & Public Sector Reform",
  "Digital Transformation",
  "Other",
];

export default function ContactPanel() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    window.setTimeout(() => setStatus("sent"), 500);
  }

  return (
    <section className="bg-white px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
        {/* Institutional contact details */}
        <div className="lg:col-span-5">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-blue-bright">
            Inquiries &middot; Advisory Engagements
          </span>
          <h2 className="mt-2 font-serif text-[28px] font-normal text-navy md:text-[38px]">
            Start a conversation
          </h2>
          <p className="mt-4 max-w-[46ch] text-[15px] leading-relaxed text-ink-muted">
            Tell us about the assignment, program, or delivery challenge you&rsquo;re
            facing. A member of the FSM leadership team will respond directly.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-[18px] w-[18px] text-blue-bright" strokeWidth={1.75} />
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">Email</p>
                <a href="mailto:info@fsmconsulting.com" className="text-[15px] font-medium text-navy hover:text-blue-bright transition-colors">
                  info@fsmconsulting.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-[18px] w-[18px] text-blue-bright" strokeWidth={1.75} />
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">Phone</p>
                <a href="tel:+2349040009512" className="text-[15px] font-medium text-navy hover:text-blue-bright transition-colors">
                  +234 904 000 9512
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-[18px] w-[18px] text-blue-bright" strokeWidth={1.75} />
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">Headquarters</p>
                <p className="text-[15px] text-navy">Abuja, Federal Capital Territory, Nigeria</p>
              </div>
            </div>
          </div>
        </div>

        {/* Engagement form */}
        <form onSubmit={handleSubmit} className="surface-card border border-navy/10 bg-canvas p-8 md:p-10 lg:col-span-7 shadow-sm">
          {status === "sent" ? (
            <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
              <p className="font-serif text-[24px] font-medium text-navy">Inquiry received</p>
              <p className="mt-2 max-w-[36ch] text-[14.5px] text-ink-muted">
                Thank you — a member of the FSM team will be in touch shortly.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" required />
              <Field label="Organization" name="organization" />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
              <Field label="Country" name="country" />
              <div>
                <label htmlFor="interest" className="block text-[13px] font-medium text-navy">
                  Area of interest
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="mt-1.5 w-full rounded-[var(--radius-card-sm)] border border-navy/15 bg-white px-3.5 py-2.5 text-[14px] text-navy outline-none focus:border-navy"
                >
                  {interestAreas.map((a) => (
                    <option key={a}>{a}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-[13px] font-medium text-navy">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="mt-1.5 w-full rounded-[var(--radius-card-sm)] border border-navy/15 bg-white px-3.5 py-2.5 text-[14px] text-navy outline-none focus:border-navy"
                />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="pill-btn inline-flex items-center bg-navy text-white hover:bg-navy-2 disabled:opacity-60 cursor-pointer"
                >
                  {status === "submitting" ? "Sending…" : "Start a conversation"}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-[13px] font-medium text-navy">
        {label}
        {required && <span className="text-navy/40"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-[var(--radius-card-sm)] border border-navy/15 bg-white px-3.5 py-2.5 text-[14px] text-navy outline-none focus:border-navy"
      />
    </div>
  );
}
