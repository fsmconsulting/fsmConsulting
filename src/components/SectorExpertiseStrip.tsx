import Link from "next/link";
import {
  Landmark,
  Wheat,
  HeartPulse,
  GraduationCap,
  HardHat,
  Briefcase,
  TrendingUp,
  Cpu,
  Leaf,
  ShieldHalf,
  Users,
  Map,
  Banknote,
  Droplets,
  Zap,
  LucideIcon,
} from "lucide-react";
import { sectorStrip } from "@/data/sectorsData";

const iconMap: Record<string, LucideIcon> = {
  Landmark,
  Wheat,
  HeartPulse,
  GraduationCap,
  HardHat,
  Briefcase,
  TrendingUp,
  Cpu,
  Leaf,
  ShieldHalf,
  Users,
  Map,
  Banknote,
  Droplets,
  Zap,
};

function SectorTile({
  sector,
  className,
  style,
}: {
  sector: (typeof sectorStrip)[number];
  className: string;
  style?: React.CSSProperties;
}) {
  const Icon = iconMap[sector.iconName] ?? Landmark;
  return (
    <Link
      href={`/sectors/${sector.slug}`}
      className={className}
      aria-label={sector.name}
      style={style}
    >
      <span className="sector-strip-icon" aria-hidden="true" style={{ color: sector.iconColor }}>
        <Icon size={26} strokeWidth={1.5} />
      </span>
      <span className="sector-strip-label">{sector.name}</span>
    </Link>
  );
}

export default function SectorExpertiseStrip() {
  return (
    <section
      id="sector-expertise"
      aria-labelledby="sector-expertise-heading"
      className="sector-strip-section"
    >
      {/* Section Header */}
      <div className="sector-strip-header">
        <span className="sector-strip-eyebrow">Where we work</span>
        <h2 id="sector-expertise-heading" className="sector-strip-heading">
          Deep expertise across 15 development sectors
        </h2>
      </div>

      {/* Desktop / Tablet Grid — 5 cols on desktop, 3 on tablet */}
      <div className="sector-strip-grid" role="list">
        {sectorStrip.map((sector) => (
          <SectorTile
            key={sector.slug}
            sector={sector}
            className="sector-strip-tile"
          />
        ))}
      </div>

      {/* Mobile horizontal scroll strip */}
      <div className="sector-strip-scroll" role="list" aria-label="Sector list">
        {sectorStrip.map((sector) => (
          <SectorTile
            key={`m-${sector.slug}`}
            sector={sector}
            className="sector-strip-tile-mobile"
          />
        ))}
      </div>
    </section>
  );
}
