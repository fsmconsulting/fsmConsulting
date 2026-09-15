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
        <section className="cap-detail-hero">
          <div className="cap-detail-hero-inner">
            <Link href="/#delivery-model" className="cap-detail-back">
              <ArrowLeft size={14} strokeWidth={2} aria-hidden="true" />
              Back to delivery model
            </Link>

            <div className="cap-detail-hero-icon" aria-hidden="true">
              <Icon size={36} strokeWidth={1.25} />
            </div>

            <p className="cap-detail-eyebrow">Delivery Model · {currentIndex + 1} of 4</p>
            <h1 className="cap-detail-title">{cap.title}</h1>
            <p className="cap-detail-summary">{cap.summary}</p>
          </div>
        </section>

        {/* ── Full description ── */}
        <section className="cap-detail-body">
          <div className="cap-detail-body-inner">
            <div className="cap-detail-content">
              {cap.fullDescription.split("\n\n").map((para, i) => (
                <p key={i} className={para.startsWith("TODO:") ? "cap-detail-todo" : ""}>
                  {para}
                </p>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="cap-detail-sidebar">
              {cap.relatedServices.length > 0 && (
                <div className="cap-detail-sidebar-block">
                  <h3 className="cap-detail-sidebar-heading">Related services</h3>
                  <ul className="cap-detail-sidebar-list">
                    {cap.relatedServices.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              )}

              {cap.relatedSectors.length > 0 && (
                <div className="cap-detail-sidebar-block">
                  <h3 className="cap-detail-sidebar-heading">Relevant sectors</h3>
                  <ul className="cap-detail-sidebar-list">
                    {cap.relatedSectors.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </section>

        {/* ── Other capabilities ── */}
        <section className="cap-detail-others">
          <div className="cap-detail-others-inner">
            <h2 className="cap-detail-others-heading">Explore the full delivery model</h2>
            <div className="cap-detail-others-grid">
              {otherCaps.map((other) => {
                const OtherIcon = iconMap[other.icon];
                return (
                  <Link
                    key={other.slug}
                    href={`/capabilities/${other.slug}`}
                    className="cap-detail-other-card"
                    aria-label={`Learn more about ${other.title}`}
                  >
                    <span className="cap-detail-other-icon" aria-hidden="true">
                      <OtherIcon size={22} strokeWidth={1.5} />
                    </span>
                    <span className="cap-detail-other-title">{other.title}</span>
                    <span className="cap-detail-other-desc">{other.tagline}</span>
                    <span className="cap-detail-other-arrow" aria-hidden="true">→</span>
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
