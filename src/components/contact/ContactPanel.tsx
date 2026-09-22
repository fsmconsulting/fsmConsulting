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
    <section id="contact-panel" className="bg-white px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
        {/* Institutional contact details */}
        <div className="lg:col-span-5">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
            Inquiries &middot; Advisory Engagements
          </span>
          <h2 className="mt-2 text-[28px] md:text-[38px] font-bold tracking-tight text-[#07131e]">
            Start a conversation
          </h2>
          <p className="mt-4 max-w-[46ch] text-[15px] leading-relaxed text-gray-600">
            Tell us about the assignment, program, or delivery challenge you&rsquo;re
            facing. A member of the FSM leadership team will respond directly.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-[18px] w-[18px] text-[#2F5FA8]" strokeWidth={2} />
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-gray-400">Email</p>
                <a href="mailto:info@fsmconsulting.com" className="text-[15px] font-semibold text-[#07131e] hover:text-[#2F5FA8] transition-colors">
                  info@fsmconsulting.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-[18px] w-[18px] text-[#2F5FA8]" strokeWidth={2} />
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-gray-400">Phone</p>
                <a href="tel:+2349040009512" className="text-[15px] font-semibold text-[#07131e] hover:text-[#2F5FA8] transition-colors">
                  +234 904 000 9512
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-[18px] w-[18px] text-[#2F5FA8]" strokeWidth={2} />
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-gray-400">Headquarters</p>
                <p className="text-[15px] text-[#07131e] font-medium">Abuja, Federal Capital Territory, Nigeria</p>
              </div>
            </div>
          </div>
        </div>

        {/* Engagement form */}
        <form onSubmit={handleSubmit} className="rounded-[24px] border border-gray-100 bg-[#F4F5F7] p-8 md:p-10 lg:col-span-7 shadow-sm">
          {status === "sent" ? (
            <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
              <p className="text-[24px] font-bold text-[#07131e]">Inquiry received</p>
              <p className="mt-2 max-w-[36ch] text-[14.5px] text-gray-600">
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
                <label htmlFor="interest" className="block text-[13px] font-medium text-[#07131e]">
                  Area of interest
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="mt-1.5 w-full rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 text-[14px] text-[#07131e] outline-none focus:border-[#2F5FA8]"
                >
                  {interestAreas.map((a) => (
                    <option key={a}>{a}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-[13px] font-medium text-[#07131e]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="mt-1.5 w-full rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 text-[14px] text-[#07131e] outline-none focus:border-[#2F5FA8]"
                />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center justify-center rounded-full bg-[#2F5FA8] px-7 py-3 text-[14.5px] font-semibold text-white shadow-md hover:bg-[#264E8C] transition-all disabled:opacity-60 cursor-pointer"
                >
                  {status === "submitting" ? "Sending…" : "Submit Inquiry"}
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
      <label htmlFor={name} className="block text-[13px] font-medium text-[#07131e]">
        {label}
        {required && <span className="text-[#2F5FA8]"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 text-[14px] text-[#07131e] outline-none focus:border-[#2F5FA8]"
      />
    </div>
  );
}
