import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Globe, Map, Building2, Users, ArrowLeft, LucideIcon } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Closing from "@/components/Closing";
import {
  capabilities,
  getCapabilityBySlug,
  type Capability,
} from "@/data/capabilitiesData";

/* ── Static params ── */
export function generateStaticParams() {
  return capabilities.map((c) => ({ slug: c.slug }));
}

/* ── Metadata ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cap = getCapabilityBySlug(slug);
  if (!cap) return { title: "Not Found | FSM Consulting Limited" };
  return {
    title: `${cap.title} | FSM Consulting Limited`,
    description: cap.summary,
  };
}

/* ── Icon map ── */
const iconMap: Record<Capability["icon"], LucideIcon> = {
  Globe,
  Map,
  Building2,
  Users,
};

/* ── Page ── */
export default async function CapabilityDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cap = getCapabilityBySlug(slug);
  if (!cap) notFound();

  const Icon = iconMap[cap.icon];
  const currentIndex = capabilities.findIndex((c) => c.slug === slug);
  const otherCaps = capabilities.filter((c) => c.slug !== slug);

  return (
    <>
      <Nav />
      <main>
        {/* ── Hero ── */}
        <section className="bg-[#07131e] py-16 px-6 text-white md:py-24 md:px-10">
          <div className="mx-auto max-w-5xl">
            <Link
              href="/#positioning"
              className="group inline-flex items-center gap-2 text-[13.5px] font-mono text-white/70 hover:text-white transition-colors"
            >
              <ArrowLeft size={14} strokeWidth={2} aria-hidden="true" />
              <span>Back to positioning</span>
            </Link>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white">
                <Icon size={30} strokeWidth={1.5} />
              </div>
              <span className="font-mono text-[12px] uppercase tracking-wider text-[#9BC2F5]">
                Delivery Level {currentIndex + 1} of 4
              </span>
            </div>

            <h1 className="mt-6 text-[34px] md:text-[46px] font-bold leading-tight tracking-tight text-white">
              {cap.title}
            </h1>
            <p className="mt-4 max-w-2xl text-[16px] md:text-[18px] leading-relaxed text-white/80">
              {cap.summary}
            </p>
          </div>
        </section>

        {/* ── Full description & Practice Links ── */}
        <section className="bg-white px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-5xl grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-6 text-[16px] leading-relaxed text-gray-700">
              {cap.fullDescription.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-5 space-y-6">
              {cap.relatedServices.length > 0 && (
                <div className="rounded-[20px] border border-gray-100 bg-[#F4F5F7] p-7">
                  <h3 className="text-[17px] font-bold text-[#07131e]">
                    Connected Practice Areas
                  </h3>
                  <ul className="mt-4 space-y-2 text-[13.5px] text-gray-600">
                    {cap.relatedServices.map((s) => (
                      <li key={s} className="flex items-baseline gap-2">
                        <span className="text-[#2F5FA8]">&bull;</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {cap.relatedSectors.length > 0 && (
                <div className="rounded-[20px] border border-gray-100 bg-[#F4F5F7] p-7">
                  <h3 className="text-[17px] font-bold text-[#07131e]">
                    Relevant Sector Verticals
                  </h3>
                  <ul className="mt-4 space-y-2 text-[13.5px] text-gray-600">
                    {cap.relatedSectors.map((s) => (
                      <li key={s} className="flex items-baseline gap-2">
                        <span className="text-[#2F5FA8]">&bull;</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </section>

        {/* ── Other capabilities ── */}
        <section className="border-t border-gray-100 bg-[#F4F5F7] px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#07131e]">
              Explore the full delivery model
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {otherCaps.map((other) => {
                const OtherIcon = iconMap[other.icon];
                return (
                  <Link
                    key={other.slug}
                    href={`/capabilities/${other.slug}`}
                    className="group flex flex-col justify-between rounded-[20px] border border-gray-200/80 bg-white p-6 transition-all hover:border-[#2F5FA8]/40 hover:shadow-md"
                    aria-label={`Learn more about ${other.title}`}
                  >
                    <div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F4F5F7] text-[#07131e] group-hover:bg-[#2F5FA8] group-hover:text-white transition-colors">
                        <OtherIcon size={20} strokeWidth={1.5} />
                      </div>
                      <h3 className="mt-4 text-[17px] font-bold text-[#07131e] group-hover:text-[#2F5FA8] transition-colors">
                        {other.title}
                      </h3>
                      <p className="mt-2 text-[13px] leading-relaxed text-gray-500">
                        {other.tagline}
                      </p>
                    </div>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#2F5FA8]">
                      <span>Explore</span>
                      <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <Closing />
      </main>
      <Footer />
    </>
  );
}
