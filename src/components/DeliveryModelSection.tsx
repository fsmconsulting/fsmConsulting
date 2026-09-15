import Link from "next/link";
import { Globe, Map, Building2, Users, LucideIcon } from "lucide-react";
import { capabilities, type Capability } from "@/data/capabilitiesData";

const iconMap: Record<Capability["icon"], LucideIcon> = {
  Globe,
  Map,
  Building2,
  Users,
};

export default function DeliveryModelSection() {
  return (
    <section
      id="delivery-model"
      className="delivery-model-section"
      aria-labelledby="delivery-model-heading"
    >
      {/* Header */}
      <div className="delivery-model-header">
        <span className="delivery-model-eyebrow">We deliver</span>
        <h2 id="delivery-model-heading" className="delivery-model-heading">
          From Global Expertise To Local Impact.
        </h2>
      </div>

      {/* Cards grid */}
      <div className="delivery-model-grid">
        {capabilities.map((cap) => {
          const Icon = iconMap[cap.icon];
          return (
            <Link
              key={cap.slug}
              href={`/capabilities/${cap.slug}`}
              className="delivery-card"
              aria-label={`Learn more about ${cap.title}`}
            >
              {/* Gold top accent bar — thickens on hover via CSS */}
              <span className="delivery-card-accent" aria-hidden="true" />

              {/* Icon */}
              <span className="delivery-card-icon" aria-hidden="true">
                <Icon size={28} strokeWidth={1.5} />
              </span>

              {/* Body */}
              <span className="delivery-card-title">{cap.title}</span>
              <span className="delivery-card-desc">{cap.tagline}</span>

              {/* Learn more affordance */}
              <span className="delivery-card-cta" aria-hidden="true">
                Learn more
                <span className="delivery-card-arrow">→</span>
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
