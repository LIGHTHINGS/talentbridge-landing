const NAV_LINKS = ["Solutions", "Features", "How It Works", "Pricing"];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-navy)]">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-orange)]" />
          </span>
          <span
            className="text-[15px] font-semibold tracking-tight"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Pincef TalentBridge
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm text-[var(--color-ink)]/70 transition hover:text-[var(--color-ink)]"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <a
            href="#book-demo"
            className="rounded-full border border-[var(--color-ink)]/15 px-4 py-2 text-sm font-medium transition hover:border-[var(--color-ink)]/40"
          >
            Book Demo
          </a>
          <a
            href="#get-started"
            className="rounded-full bg-[var(--color-orange)] px-4 py-2 text-sm font-medium text-white transition hover:bg-[var(--color-orange-dark)]"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
