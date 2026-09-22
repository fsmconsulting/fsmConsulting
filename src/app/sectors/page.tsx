import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { InteriorHero, CtaBand } from "@/components/templates";
import { sectorsData } from "@/data/sectorsData";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sector Expertise | FSM Consulting Limited",
  description:
    "Explore FSM Consulting Limited's 15 priority development sectors across governance, agriculture, health, education, infrastructure, digital economy, and climate.",
};

export default function SectorsPage() {
  return (
    <div className="min-h-screen bg-white text-[#07131e] antialiased">
      {/* 1. Interior Hero */}
      <InteriorHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Sectors" },
        ]}
        title="Sector expertise"
        subtitle="Fifteen priority development sectors where our multidisciplinary teams deliver independent verification, technical assistance, and implementation acceleration."
        ctaText="Discuss an Assignment"
        ctaHref="/contact"
      />

      <main>
        {/* 2. Grid of 15 Sector Cards */}
        <section className="px-6 md:px-12 py-16 md:py-24 border-b border-gray-100">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {sectorsData.map((s) => (
                <Link
                  key={s.slug}
                  href={`/sectors/${s.slug}`}
                  className="group rounded-[22px] bg-[#F4F5F7] overflow-hidden border border-gray-200/80 hover:border-[#2F5FA8]/50 hover:shadow-md transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-navy">
                    <Image
                      src={s.image}
                      alt={s.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07131e]/80 via-[#07131e]/20 to-transparent" />
                  </div>

                  <div className="p-7 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="text-[19px] font-bold text-[#07131e] group-hover:text-[#2F5FA8] transition-colors leading-snug">
                        {s.name}
                      </h3>
                      <p className="mt-3 text-[14px] leading-relaxed text-[#5A6876] line-clamp-3">
                        {s.overview}
                      </p>
                    </div>

                    <div className="mt-6 pt-5 border-t border-gray-200/70 flex items-center justify-between">
                      <span className="text-[13.5px] font-semibold text-[#07131e] group-hover:text-[#2F5FA8] transition-colors">
                        Explore sector
                      </span>
                      <ArrowRight className="h-4 w-4 text-[#2F5FA8] transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Closing Action Band */}
        <CtaBand />
      </main>

      <Footer />
    </div>
  );
}
