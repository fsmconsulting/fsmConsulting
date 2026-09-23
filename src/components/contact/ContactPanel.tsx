"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { contactInfo } from "@/data/siteData";
import { openMailto } from "@/lib/mailto";

export default function ContactPanel() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    openMailto({
      to: contactInfo.email,
      subject: `Enquiry: ${formData.name}${formData.organization ? ` - ${formData.organization}` : ""}`,
      body: `Full Name: ${formData.name}
Organization / Institution: ${formData.organization}
Email Address: ${formData.email}
Phone Number: ${formData.phone}
Country / Location: ${formData.country}

Message / Assignment Details:
${formData.message}
`,
    });
  };

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
            facing. Our leadership team responds directly to formal and technical inquiries.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-[18px] w-[18px] text-[#2F5FA8]" strokeWidth={2} />
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-gray-400">Email</p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-[15px] font-semibold text-[#07131e] hover:text-[#2F5FA8] transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-[18px] w-[18px] text-[#2F5FA8]" strokeWidth={2} />
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-gray-400">Phone</p>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                  className="text-[15px] font-semibold text-[#07131e] hover:text-[#2F5FA8] transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-[18px] w-[18px] text-[#2F5FA8]" strokeWidth={2} />
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-gray-400">Headquarters</p>
                <p className="text-[15px] text-[#07131e] font-medium">{contactInfo.address}</p>
                <p className="text-[13px] text-gray-500 mt-0.5">Abuja, Nigeria</p>
              </div>
            </div>

            {contactInfo.linkedin && (
              <div className="flex items-start gap-3">
                <Globe className="mt-0.5 h-[18px] w-[18px] text-[#2F5FA8]" strokeWidth={2} />
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-gray-400">LinkedIn</p>
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] font-semibold text-[#07131e] hover:text-[#2F5FA8] transition-colors"
                  >
                    FSM Consulting Limited &rarr;
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Engagement form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-[24px] border border-gray-100 bg-[#F4F5F7] p-8 md:p-10 lg:col-span-7 shadow-sm"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className="block text-[13px] font-medium text-[#07131e]">
                Full Name <span className="text-[#2F5FA8]">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1.5 w-full rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 text-[14px] text-[#07131e] outline-none focus:border-[#2F5FA8]"
              />
            </div>

            <div>
              <label htmlFor="contact-organization" className="block text-[13px] font-medium text-[#07131e]">
                Organization / Institution
              </label>
              <input
                id="contact-organization"
                name="organization"
                type="text"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                className="mt-1.5 w-full rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 text-[14px] text-[#07131e] outline-none focus:border-[#2F5FA8]"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-[13px] font-medium text-[#07131e]">
                Email Address <span className="text-[#2F5FA8]">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-1.5 w-full rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 text-[14px] text-[#07131e] outline-none focus:border-[#2F5FA8]"
              />
            </div>

            <div>
              <label htmlFor="contact-phone" className="block text-[13px] font-medium text-[#07131e]">
                Phone Number
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="mt-1.5 w-full rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 text-[14px] text-[#07131e] outline-none focus:border-[#2F5FA8]"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="contact-country" className="block text-[13px] font-medium text-[#07131e]">
                Country / Location
              </label>
              <input
                id="contact-country"
                name="country"
                type="text"
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                placeholder="e.g. Nigeria, Senegal, Kenya"
                className="mt-1.5 w-full rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 text-[14px] text-[#07131e] outline-none focus:border-[#2F5FA8]"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="contact-message" className="block text-[13px] font-medium text-[#07131e]">
                Message / Assignment Details <span className="text-[#2F5FA8]">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Outline assignment scope, timeline, geographic location, or institutional inquiry..."
                className="mt-1.5 w-full rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 text-[14px] text-[#07131e] outline-none focus:border-[#2F5FA8]"
              />
            </div>

            <div className="sm:col-span-2 pt-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-[#2F5FA8] px-8 py-3.5 text-[14.5px] font-semibold text-white shadow-md hover:bg-[#264E8C] transition-all cursor-pointer"
              >
                Send enquiry
              </button>
              <span className="ml-4 text-[13px] text-gray-500">
                Opens your email client
              </span>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
