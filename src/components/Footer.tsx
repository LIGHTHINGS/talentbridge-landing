const FOOTER_COLUMNS = [
  {
    heading: "Company",
    links: ["Global", "Careers", "LinkedIn"],
  },
  {
    heading: "Legal",
    links: ["Privacy Policy", "Terms of Service"],
  },
  {
    heading: "Resources",
    links: ["Contact", "Support", "Documentation"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-navy)]">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-orange)]" />
              </span>
              <span
                className="text-[15px] font-semibold tracking-tight"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                Pincef TalentBridge
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--color-ink)]/55">
              Precision in Recruitment. Building the future of talent
              acquisition with ethical AI.
            </p>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink)]/40">
                {col.heading}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[var(--color-ink)]/70 transition hover:text-[var(--color-ink)]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-[var(--color-line)] pt-6 text-xs text-[var(--color-ink)]/40">
          © {new Date().getFullYear()} Pincef TalentBridge. All rights
          reserved. Precision in Recruitment.
        </div>
      </div>
    </footer>
  );
}
