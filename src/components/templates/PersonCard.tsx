import Image from "next/image";
import Link from "next/link";

export interface PersonCardProps {
  name: string;
  role: string;
  bio: string;
  photoSrc?: string;
  photoAlt?: string;
  disciplines?: string[];
  href?: string;
  linkText?: string;
  variant?: "horizontal" | "vertical";
  className?: string;
}

/**
 * PersonCard (Conceptzilla Prism Grammar)
 * Portrait card for leadership, board directors, and key experts.
 * Features crisp photography with rounded-[24px] corners, institutional typography, and discipline chips.
 */
export default function PersonCard({
  name,
  role,
  bio,
  photoSrc,
  photoAlt,
  disciplines,
  href,
  linkText = "View Profile",
  variant = "horizontal",
  className = "",
}: PersonCardProps) {
  if (variant === "vertical") {
    return (
      <div className={`rounded-[24px] bg-[#F4F5F7] p-6 sm:p-8 border border-gray-200/60 flex flex-col justify-between ${className}`}>
        <div>
          {photoSrc && (
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px] bg-gray-200 mb-6 shadow-md border border-gray-200">
              <Image
                src={photoSrc}
                alt={photoAlt || name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 340px"
              />
            </div>
          )}

          <h3 className="text-[20px] font-bold text-[#07131e] tracking-tight">{name}</h3>
          <p className="mt-1 text-[13px] font-semibold text-[#2F5FA8]">{role}</p>
          <p className="mt-3 text-[14px] leading-relaxed text-[#5A6876]">{bio}</p>

          {disciplines && disciplines.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {disciplines.map((d) => (
                <span
                  key={d}
                  className="rounded-full bg-white px-3 py-1 font-mono text-[11px] font-medium text-gray-600 border border-gray-200/60"
                >
                  {d}
                </span>
              ))}
            </div>
          )}
        </div>

        {href && (
          <div className="mt-6 pt-4 border-t border-gray-200">
            <Link
              href={href}
              className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#07131e] hover:text-[#2F5FA8] transition-colors"
            >
              <span>{linkText}</span>
              <span>&rarr;</span>
            </Link>
          </div>
        )}
      </div>
    );
  }

  // Horizontal variant (default, matching ExpertiseRelyOn)
  return (
    <div
      className={`rounded-[28px] bg-[#F4F5F7] p-6 sm:p-8 md:p-10 border border-gray-200/70 shadow-sm ${className}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {photoSrc && (
          <div className="md:col-span-4 lg:col-span-4">
            <div className="relative aspect-[4/5] w-full max-w-[280px] mx-auto md:max-w-none overflow-hidden rounded-[20px] bg-gray-200 shadow-md border border-gray-200">
              <Image
                src={photoSrc}
                alt={photoAlt || name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 320px"
              />
            </div>
          </div>
        )}

        <div className={photoSrc ? "md:col-span-8 lg:col-span-8" : "md:col-span-12"}>
          <span className="block font-mono text-[11px] uppercase tracking-wider text-[#2F5FA8] font-semibold mb-1">
            Executive Profile
          </span>
          <h3 className="text-[24px] sm:text-[28px] font-bold text-[#07131e] tracking-tight">
            {name}
          </h3>
          <p className="mt-1 text-[14px] sm:text-[15px] font-semibold text-gray-700">
            {role}
          </p>
          <p className="mt-4 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#5A6876]">
            {bio}
          </p>

          {disciplines && disciplines.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {disciplines.map((d) => (
                <span
                  key={d}
                  className="rounded-full bg-white px-3.5 py-1 font-mono text-[11.5px] font-medium text-gray-600 border border-gray-200/80 shadow-xs"
                >
                  {d}
                </span>
              ))}
            </div>
          )}

          {href && (
            <div className="mt-6">
              <Link
                href={href}
                className="inline-flex items-center gap-2 rounded-full bg-[#07131e] text-white hover:bg-[#2F5FA8] px-6 py-2.5 text-[14px] font-semibold transition-all duration-200"
              >
                <span>{linkText}</span>
                <span>&rarr;</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

