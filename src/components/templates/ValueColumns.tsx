import { LucideIcon } from "lucide-react";

export interface ValueColumnItem {
  icon?: LucideIcon | React.ElementType;
  title: string;
  body: string;
}

export interface ValueColumnsProps {
  items: ValueColumnItem[];
  className?: string;
}

/**
 * ValueColumns (Conceptzilla Prism Grammar)
 * 4-column open layout with clean icons, bold titles, and institutional copy.
 */
export default function ValueColumns({ items, className = "" }: ValueColumnsProps) {
  return (
    <div className={`grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 ${className}`}>
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.title} className="flex flex-col items-start">
            {Icon && (
              <div className="flex h-9 w-9 items-center justify-center text-[#07131e] mb-3">
                <Icon className="h-5 w-5 text-[#07131e]" strokeWidth={1.8} />
              </div>
            )}
            <h3 className="text-[16px] font-semibold text-[#07131e] tracking-tight">
              {item.title}
            </h3>
            <p className="mt-2.5 text-[14px] leading-relaxed text-[#5A6876]">
              {item.body}
            </p>
          </div>
        );
      })}
    </div>
  );
}

