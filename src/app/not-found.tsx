import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#F4F5F7] px-6 text-center">
      <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">404 &middot; Error</p>
      <h1 className="mt-3 text-[32px] md:text-[40px] font-bold tracking-tight text-[#07131e]">
        Page not found
      </h1>
      <p className="mt-3 max-w-[40ch] text-[15px] leading-relaxed text-gray-600">
        The page you are looking for could not be located or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-[#2F5FA8] px-7 py-3 text-[14.5px] font-semibold text-white shadow-md hover:bg-[#254e8c] transition-all"
      >
        Return to Home
      </Link>
    </main>
  );
}
