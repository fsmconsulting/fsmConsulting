import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-sand px-6 text-center">
      <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-blue-accent">404</p>
      <h1 className="mt-3 font-serif text-[28px] font-medium text-navy md:text-[36px]">
        Page not found
      </h1>
      <p className="mt-3 max-w-[40ch] text-[15px] leading-relaxed text-ink-muted">
        The page you are looking for could not be located.
      </p>
      <Link
        href="/"
        className="pill-btn mt-8 inline-flex items-center bg-navy text-white hover:bg-navy-2"
      >
        Return home
      </Link>
    </main>
  );
}
