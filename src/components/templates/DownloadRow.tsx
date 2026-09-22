import { FileText, Download } from "lucide-react";

export interface DownloadItem {
  title: string;
  description: string;
  fileType: string;
  fileSize: string;
  href: string;
  category?: string;
}

export interface DownloadRowProps {
  item: DownloadItem;
  className?: string;
}

/**
 * DownloadRow (Conceptzilla Prism Grammar)
 * Clean tabular row for official due-diligence files and procurement documents.
 * Displays title, description, file type, file size, and download action.
 */
export default function DownloadRow({ item, className = "" }: DownloadRowProps) {
  return (
    <div
      className={`rounded-[18px] bg-white p-5 sm:p-6 border border-gray-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all hover:border-[#2F5FA8]/40 hover:shadow-sm ${className}`}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-[#F4F5F7] text-[#2F5FA8] border border-gray-200/60">
          <FileText className="h-5 w-5" />
        </div>
        <div>
          {item.category && (
            <span className="block font-mono text-[10.5px] uppercase tracking-wider text-[#2F5FA8] font-semibold mb-0.5">
              {item.category}
            </span>
          )}
          <h4 className="text-[16px] font-bold text-[#07131e] tracking-tight">
            {item.title}
          </h4>
          <p className="mt-1 text-[13.5px] text-[#5A6876] leading-relaxed max-w-xl">
            {item.description}
          </p>
          <div className="mt-2 flex items-center gap-3 text-[12px] font-mono text-gray-600">
            <span className="rounded bg-gray-100 px-2 py-0.5 font-semibold text-[#07131e]">
              {item.fileType}
            </span>
            <span>{item.fileSize}</span>
          </div>
        </div>
      </div>

      <div className="sm:shrink-0 self-end sm:self-center">
        <a
          href={item.href}
          download
          className="inline-flex items-center gap-2 rounded-full bg-[#F4F5F7] hover:bg-[#07131e] text-[#07131e] hover:text-white px-5 py-2.5 text-[13.5px] font-semibold transition-all duration-200 border border-gray-200 hover:border-[#07131e]"
        >
          <Download className="h-4 w-4" />
          <span>Download</span>
        </a>
      </div>
    </div>
  );
}

