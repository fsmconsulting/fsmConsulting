import React from "react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

export interface DarkCardProps {
  badge?: string;
  icon?: LucideIcon | React.ElementType;
  title: string;
  subtitle?: string;
  sections?: Array<{ label: string; text: string }>;
  ctaText?: string;
  ctaHref?: string;
  children?: React.ReactNode;
  className?: string;
}

/**
 * DarkCard (Conceptzilla Prism Grammar)
 * Vertical card in deep institutional midnight navy (#07131E)
 * Used for highlighted evidence, focus delivery areas, and interactive forms.
 */
export default function DarkCard({
  badge,
  icon: Icon,
  title,
  subtitle,
  sections,
  ctaText,
  ctaHref,
  children,
  className = "",
}: DarkCardProps) {
  return (
    <div
      className={`rounded-[28px] bg-[#07131e] p-8 sm:p-10 text-white shadow-xl border border-white/10 flex flex-col justify-between ${className}`}
    >
      <div>
        {/* Top Header Row */}
        <div className="flex items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            {Icon && (
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
                <Icon className="h-5 w-5" />
              </div>
            )}
            <div>
              {badge && (
                <span className="block font-mono text-[11px] uppercase tracking-wider text-[#9BC2F5]">
                  {badge}
                </span>
              )}
              <h3 className="text-[20px] sm:text-[22px] font-bold text-white tracking-tight">
                {title}
              </h3>
            </div>
          </div>
        </div>

        {subtitle && (
          <p className="mt-5 text-[14.5px] leading-relaxed text-gray-300">
            {subtitle}
          </p>
        )}

        {/* Structured Sections (e.g. Challenge / Delivery) */}
        {sections && sections.length > 0 && (
          <div className="mt-6 space-y-5">
            {sections.map((sec) => (
              <div key={sec.label} className="border-l-2 border-[#2F5FA8] pl-4">
                <span className="block text-[11.5px] font-semibold uppercase tracking-wider text-gray-400">
                  {sec.label}
                </span>
                <p className="mt-1 text-[13.5px] leading-relaxed text-gray-200">
                  {sec.text}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Optional Custom Body / Form */}
        {children && <div className="mt-6">{children}</div>}
      </div>

      {/* Action CTA */}
      {ctaText && ctaHref && (
        <div className="mt-8 pt-6 border-t border-white/10">
          <Link
            href={ctaHref}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#07131e] px-6 py-3 text-[14px] font-semibold transition-all duration-200"
          >
            <span>{ctaText}</span>
            <span>&rarr;</span>
          </Link>
        </div>
      )}
    </div>
  );
}

