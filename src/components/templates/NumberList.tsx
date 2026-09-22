import { LucideIcon } from "lucide-react";

export interface NumberListItem {
  value: string;
  unit?: string;
  label: string;
  icon?: LucideIcon | React.ElementType;
}

export interface NumberListProps {
  items: NumberListItem[];
  className?: string;
}

/**
 * NumberList (Conceptzilla Prism Grammar)
 * Stacked metric list with thin horizontal dividers and circular icons on the right,
 * derived directly from "Our impact in numbers".
 */
export default function NumberList({ items, className = "" }: NumberListProps) {
  return (
    <div className={`divide-y divide-gray-200/90 border-y border-gray-200/90 ${className}`}>
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.label}
            className="py-6 sm:py-7 flex items-center justify-between gap-6 group transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
              <span className="text-[38px] sm:text-[46px] md:text-[52px] font-bold text-[#07131e] tracking-tight leading-none min-w-[130px] sm:min-w-[170px]">
                {item.value}
                {item.unit && (
                  <span className="ml-1 text-[18px] sm:text-[22px] font-semibold text-[#2F5FA8]">
                    {item.unit}
                  </span>
                )}
              </span>
              <span className="text-[15px] sm:text-[16.5px] text-[#07131e] font-medium leading-snug">
                {item.label}
              </span>
            </div>

            {Icon && (
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200/80 text-[#2F5FA8] shadow-xs group-hover:bg-[#2F5FA8] group-hover:text-white group-hover:border-[#2F5FA8] transition-all duration-200">
                <Icon className="w-4 h-4" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

