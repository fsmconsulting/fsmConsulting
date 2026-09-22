"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { contactInfo } from "@/data/siteData";
import { openMailto } from "@/lib/mailto";

const disciplines = [
  "Development Planning and Policy",
  "Project Management and Implementation Support",
  "Monitoring, Evaluation, Accountability and Learning (MEAL)",
  "Governance and Public Sector Reform",
  "Environmental and Social Safeguards",
  "Land Administration and Governance",
  "Agriculture and Rural Development",
  "Health Systems Strengthening",
  "Education and Skills Development",
  "Infrastructure and Urban Development",
  "Climate Change and Sustainability",
  "Gender Equality and Social Inclusion",
  "Financial Management and Procurement",
  "Digital Transformation and Data Analytics",
];

export default function ExpertRegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    discipline: disciplines[0],
    yearsExperience: "",
    linkedin: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openMailto({
      to: contactInfo.email,
      subject: `Expert Roster Application: ${formData.fullName} - ${formData.discipline}`,
      body: `Full Name: ${formData.fullName}
Email Address: ${formData.email}
Country of Residence: ${formData.country}
Primary Technical Discipline: ${formData.discipline}
Years of Relevant Experience: ${formData.yearsExperience}
LinkedIn Profile URL: ${formData.linkedin}

Brief Professional Summary:
${formData.message}

(Note: Please remember to attach your CV / Resume to this email before sending.)
`,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 text-left">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="expert-fullName" className="block text-[13px] font-semibold text-gray-200 mb-1.5">
            Full Name *
          </label>
          <input
            id="expert-fullName"
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g. Dr. Amina Bello"
            className="w-full rounded-[12px] bg-white/10 px-4 py-3 text-[14px] text-white placeholder-gray-400 border border-white/20 focus:border-[#9BC2F5] focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="expert-email" className="block text-[13px] font-semibold text-gray-200 mb-1.5">
            Email Address *
          </label>
          <input
            id="expert-email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="amina.bello@example.org"
            className="w-full rounded-[12px] bg-white/10 px-4 py-3 text-[14px] text-white placeholder-gray-400 border border-white/20 focus:border-[#9BC2F5] focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="expert-country" className="block text-[13px] font-semibold text-gray-200 mb-1.5">
            Country of Residence *
          </label>
          <input
            id="expert-country"
            type="text"
            required
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            placeholder="e.g. Nigeria, Senegal, Kenya, UK"
            className="w-full rounded-[12px] bg-white/10 px-4 py-3 text-[14px] text-white placeholder-gray-400 border border-white/20 focus:border-[#9BC2F5] focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="expert-yearsExperience" className="block text-[13px] font-semibold text-gray-200 mb-1.5">
            Years of Relevant Experience *
          </label>
          <input
            id="expert-yearsExperience"
            type="number"
            min="0"
            required
            value={formData.yearsExperience}
            onChange={(e) => setFormData({ ...formData, yearsExperience: e.target.value })}
            placeholder="e.g. 10"
            className="w-full rounded-[12px] bg-white/10 px-4 py-3 text-[14px] text-white placeholder-gray-400 border border-white/20 focus:border-[#9BC2F5] focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="expert-discipline" className="block text-[13px] font-semibold text-gray-200 mb-1.5">
            Primary Technical Discipline *
          </label>
          <select
            id="expert-discipline"
            value={formData.discipline}
            onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
            className="w-full rounded-[12px] bg-[#07131e] px-4 py-3 text-[14px] text-white border border-white/20 focus:border-[#9BC2F5] focus:outline-none"
          >
            {disciplines.map((d) => (
              <option key={d} value={d} className="bg-[#07131e] text-white">
                {d}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="expert-linkedin" className="block text-[13px] font-semibold text-gray-200 mb-1.5">
            LinkedIn Profile URL
          </label>
          <input
            id="expert-linkedin"
            type="url"
            value={formData.linkedin}
            onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
            placeholder="https://linkedin.com/in/username"
            className="w-full rounded-[12px] bg-white/10 px-4 py-3 text-[14px] text-white placeholder-gray-400 border border-white/20 focus:border-[#9BC2F5] focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="expert-message" className="block text-[13px] font-semibold text-gray-200 mb-1.5">
          Brief Professional Summary *
        </label>
        <textarea
          id="expert-message"
          required
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Summarize key qualifications, institutional donor experience (World Bank, AfDB, UN, etc.), and operational strengths..."
          className="w-full rounded-[12px] bg-white/10 px-4 py-3 text-[14px] text-white placeholder-gray-400 border border-white/20 focus:border-[#9BC2F5] focus:outline-none resize-none"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-[#2F5FA8] hover:bg-[#264E8C] px-8 py-3.5 text-[14.5px] font-semibold text-white shadow-lg transition-colors cursor-pointer"
        >
          <Send className="h-4 w-4" />
          <span>Submit Profile</span>
        </button>
        <p className="mt-3 text-[12.5px] text-[#9BC2F5] font-medium">
          Note: Opens your email client. Please attach your CV to the email that opens.
        </p>
      </div>
    </form>
  );
}
