import Image from "next/image";
import Link from "next/link";
import { Quote } from "lucide-react";
import { founderData } from "@/data/founderData";

interface FounderSectionProps {
  variant?: "homepage" | "full";
  headingLevel?: "h1" | "h2";
  id?: string;
}

export default function FounderSection({
  variant = "homepage",
  headingLevel = "h2",
  id = "founder",
}: FounderSectionProps) {
  const Heading = headingLevel;

  return (
    <section
      id={id}
      aria-label="Leadership - Founder & CEO"
      className="bg-white py-16 md:py-24 border-t border-gray-100"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        {/* Top Eyebrow */}
        <div className="mb-8 md:mb-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
            {founderData.eyebrow}
          </p>
        </div>

        {/* Row 1: Portrait (35%) + Bio (65%) */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12 items-start">
          {/* Portrait Column (Desktop ~35%) */}
          <div className="md:col-span-4 lg:col-span-4">
            <div className="relative aspect-[4/5] w-full max-w-[320px] md:max-w-none mx-auto overflow-hidden rounded-[24px] bg-gray-100 shadow-xl border border-gray-100">
              <Image
                src={founderData.photoPath}
                alt={founderData.photoAlt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 35vw, 360px"
                priority={false}
              />
            </div>
          </div>

          {/* Bio Column (Desktop ~65%) */}
          <div className="md:col-span-8 lg:col-span-8 flex flex-col justify-center">
            {/* Name */}
            <Heading className="text-[26px] md:text-[30px] font-bold leading-snug tracking-tight text-[#07131e]">
              {founderData.name}
            </Heading>

            {/* Title Line */}
            <p className="mt-1 text-[13px] md:text-[13.5px] font-medium text-gray-500">
              {founderData.title}
            </p>

            {/* Brand Accent Divider */}
            <div className="my-4 h-1 w-14 rounded-full bg-[#2F5FA8]" />

            {/* Bio Paragraph */}
            <p className="text-[14px] md:text-[15px] leading-relaxed text-gray-600">
              {founderData.bio}
            </p>
          </div>
        </div>

        {/* Row 2: Quote Block (below the bio/portrait row) */}
        <div className="mt-12 md:mt-16 pt-10 md:pt-12 border-t border-gray-100">
          <div className="max-w-4xl border-l-4 border-[#2F5FA8] pl-6 md:pl-10 py-2">
            {/* Decorative Quote Icon & Eyebrow */}
            <div className="flex items-center gap-3 mb-3">
              <Quote className="h-6 w-6 text-[#2F5FA8] shrink-0" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2F5FA8]">
                {founderData.quoteEyebrow}
              </span>
            </div>

            {/* Blockquote */}
            <blockquote className="space-y-3.5 text-[15px] md:text-[16px] leading-[1.7] text-gray-700 italic">
              {variant === "homepage" ? (
                <>
                  <p>{founderData.quoteParagraphs[0]}</p>
                  <div className="not-italic pt-1">
                    <Link
                      href="/about#founder"
                      className="group inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#2F5FA8] hover:text-[#264E8C] transition-colors"
                    >
                      <span>Read the full statement</span>
                      <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                        &rarr;
                      </span>
                    </Link>
                  </div>
                </>
              ) : (
                founderData.quoteParagraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))
              )}
            </blockquote>

            {/* Attribution */}
            <cite className="not-italic block mt-6 pt-4 border-t border-gray-100">
              <span className="block text-[13px] font-bold text-[#07131e]">
                {founderData.attributionName}
              </span>
              <span className="block text-[11.5px] text-gray-500 mt-0.5">
                {founderData.attributionTitle}
              </span>
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
}
