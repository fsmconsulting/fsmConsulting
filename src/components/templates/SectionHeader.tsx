export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  id?: string;
}

/**
 * SectionHeader (Conceptzilla Prism Grammar)
 * Left-aligned bold heading with optional eyebrow and subtitle, matching
 * "Our value, your advantage" and "Where we deliver".
 */
export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className = "",
  id,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-10 md:mb-14 ${isCenter ? "text-center mx-auto" : ""} ${className}`}>
      {eyebrow && (
        <span className="block font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8] mb-2.5">
          {eyebrow}
        </span>
      )}
      <h2
        id={id}
        className="text-[30px] sm:text-[34px] md:text-[40px] font-bold tracking-tight text-[#07131e] leading-[1.15]"
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3.5 text-[15px] sm:text-[16.5px] leading-relaxed text-[#5A6876] ${isCenter ? "max-w-2xl mx-auto" : "max-w-2xl"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

