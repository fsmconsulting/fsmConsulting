"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { contactInfo } from "@/data/siteData";
import { openMailto } from "@/lib/mailto";

export default function PartnerEnquiryForm() {
  const [formData, setFormData] = useState({
    firmName: "",
    contactName: "",
    email: "",
    tenderRef: "",
    country: "",
    deadline: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openMailto({
      to: contactInfo.email,
      subject: `Teaming Enquiry: ${formData.firmName || "Partner Submission"} - ${formData.tenderRef || "African Assignment"}`,
      body: `Firm Name: ${formData.firmName}
Contact Name: ${formData.contactName}
Contact Email: ${formData.email}
Tender / Opportunity Reference: ${formData.tenderRef}
Target Country / Market: ${formData.country}
Submission Deadline: ${formData.deadline}

Assignment Scope & Proposed Teaming:
${formData.message}
`,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 text-left">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="partner-firmName" className="block text-[13px] font-semibold text-gray-200 mb-1.5">
            Firm / Institution Name *
          </label>
          <input
            id="partner-firmName"
            type="text"
            required
            value={formData.firmName}
            onChange={(e) => setFormData({ ...formData, firmName: e.target.value })}
            placeholder="e.g. Overseas Advisory Group"
            className="w-full rounded-[12px] bg-white/10 px-4 py-3 text-[14px] text-white placeholder-gray-400 border border-white/20 focus:border-[#9BC2F5] focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="partner-contactName" className="block text-[13px] font-semibold text-gray-200 mb-1.5">
            Contact Person Name *
          </label>
          <input
            id="partner-contactName"
            type="text"
            required
            value={formData.contactName}
            onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
            placeholder="e.g. John Doe"
            className="w-full rounded-[12px] bg-white/10 px-4 py-3 text-[14px] text-white placeholder-gray-400 border border-white/20 focus:border-[#9BC2F5] focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="partner-email" className="block text-[13px] font-semibold text-gray-200 mb-1.5">
            Official Email Address *
          </label>
          <input
            id="partner-email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="johndoe@institution.org"
            className="w-full rounded-[12px] bg-white/10 px-4 py-3 text-[14px] text-white placeholder-gray-400 border border-white/20 focus:border-[#9BC2F5] focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="partner-tenderRef" className="block text-[13px] font-semibold text-gray-200 mb-1.5">
            Opportunity / Tender Reference
          </label>
          <input
            id="partner-tenderRef"
            type="text"
            value={formData.tenderRef}
            onChange={(e) => setFormData({ ...formData, tenderRef: e.target.value })}
            placeholder="e.g. World Bank RFP / State EOI"
            className="w-full rounded-[12px] bg-white/10 px-4 py-3 text-[14px] text-white placeholder-gray-400 border border-white/20 focus:border-[#9BC2F5] focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="partner-country" className="block text-[13px] font-semibold text-gray-200 mb-1.5">
            Target Country / Assignment Location *
          </label>
          <input
            id="partner-country"
            type="text"
            required
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            placeholder="e.g. Nigeria (Federal or States)"
            className="w-full rounded-[12px] bg-white/10 px-4 py-3 text-[14px] text-white placeholder-gray-400 border border-white/20 focus:border-[#9BC2F5] focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="partner-deadline" className="block text-[13px] font-semibold text-gray-200 mb-1.5">
            Submission Deadline
          </label>
          <input
            id="partner-deadline"
            type="text"
            value={formData.deadline}
            onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
            placeholder="e.g. 15 April 2026"
            className="w-full rounded-[12px] bg-white/10 px-4 py-3 text-[14px] text-white placeholder-gray-400 border border-white/20 focus:border-[#9BC2F5] focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="partner-message" className="block text-[13px] font-semibold text-gray-200 mb-1.5">
          Teaming Objectives &amp; Required Capability *
        </label>
        <textarea
          id="partner-message"
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Describe assignment scope, expected teaming model (JV, Sub-consultant, Field Partner), and technical disciplines needed..."
          className="w-full rounded-[12px] bg-white/10 px-4 py-3 text-[14px] text-white placeholder-gray-400 border border-white/20 focus:border-[#9BC2F5] focus:outline-none resize-none"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-[#2F5FA8] hover:bg-[#264E8C] px-8 py-3.5 text-[14.5px] font-semibold text-white shadow-lg transition-colors cursor-pointer"
        >
          <Send className="h-4 w-4" />
          <span>Send enquiry</span>
        </button>
        <p className="mt-3 text-[12.5px] text-gray-400">
          Note: Opens your email client with the message prefilled for submission to {contactInfo.email}.
        </p>
      </div>
    </form>
  );
}
