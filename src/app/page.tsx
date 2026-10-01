import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const RECRUITER_STEPS = [
  {
    step: "01",
    title: "Post a Job",
    body: "Draft high-impact job descriptions that the AI uses to understand your exact requirements.",
  },
  {
    step: "02",
    title: "AI Screens",
    body: "Our engine parses thousands of resumes instantly, identifying top-tier matches with surgical precision.",
  },
  {
    step: "03",
    title: "Better Decisions",
    body: "Review AI-generated summaries and ranking reports to hire the absolute best fit for your team.",
  },
];

const CANDIDATE_STEPS = [
  {
    step: "01",
    title: "Create Profile",
    body: "Upload your CV and let our AI build a dynamic profile that highlights your true potential.",
  },
  {
    step: "02",
    title: "Find & Apply",
    body: "Get matched with roles where you actually fit. No more sending applications into the void.",
  },
  {
    step: "03",
    title: "Track Applications",
    body: "Stay updated with transparent status indicators throughout the entire hiring journey.",
  },
];

const ENGINES = [
  {
    icon: "file",
    title: "AI CV Parsing",
    body: "Extract structured data from any resume format with 99.8% accuracy. Say goodbye to manual entry.",
  },
  {
    icon: "sparkle",
    title: "AI Resume Summaries",
    body: "Get a concise, objective summary of career highlights and unique value propositions in seconds.",
  },
  {
    icon: "search",
    title: "AI CV-to-Job Matching",
    body: "Context-aware matching that understands semantic skills and experience relevance beyond keywords.",
  },
  {
    icon: "chart",
    title: "AI Candidate Ranking",
    body: "Automatically rank candidates based on multidimensional scoring tailored specifically to your role.",
  },
  {
    icon: "target",
    title: "Competency Assessment",
    body: "Generate automated technical and soft skill assessments based on declared expertise.",
  },
  {
    icon: "compare",
    title: "Candidate Comparison",
    body: "Side-by-side comparative analytics to highlight subtle differences between top contenders.",
  },
];

function EngineIcon({ name }: { name: string }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "file":
      return (
        <svg {...common}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
        </svg>
      );
    case "sparkle":
      return (
        <svg {...common}>
          <path d="M12 3l1.8 4.9L19 9.7l-4.9 1.8L12 16.4l-1.8-4.9L5 9.7l4.9-1.8z" />
        </svg>
      );
    case "search":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" />
        </svg>
      );
    case "chart":
      return (
        <svg {...common}>
          <path d="M3 3v18h18" />
          <path d="M7 15l4-5 3 3 5-7" />
        </svg>
      );
    case "target":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="12" cy="12" r="0.6" fill="currentColor" />
        </svg>
      );
    case "compare":
      return (
        <svg {...common}>
          <path d="M8 3v18M16 3v18" />
          <path d="M4 8h4M4 16h4M16 8h4M16 16h4" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Home() {
  return (
    <div id="top" className="flex min-h-full flex-col bg-white text-[var(--color-ink)]">
      <Header />

      <main className="flex-1">
        {/* HERO */}
        <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pt-24">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
            <div>
              <h1
                className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                Smarter Recruitment.
                <br />
                Better Talent.
                <br />
                Faster Hiring.
              </h1>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[var(--color-ink)]/60">
                An AI-powered recruitment platform that helps recruiters
                screen, match, rank, and evaluate candidates with
                human-centric precision at scale.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#get-started"
                  className="rounded-full bg-[var(--color-orange)] px-6 py-3 text-sm font-medium text-white transition hover:bg-[var(--color-orange-dark)]"
                >
                  Start Hiring Now
                </a>
                <a
                  href="#opportunities"
                  className="rounded-full border border-[var(--color-ink)]/15 px-6 py-3 text-sm font-medium transition hover:border-[var(--color-ink)]/40"
                >
                  Find Opportunities
                </a>
              </div>

              <div className="mt-12">
                <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-ink)]/35">
                  Trusted by teams at
                </p>
                <div className="mt-3 flex items-center gap-3">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full bg-[var(--color-ink)]/10"
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <ImagePlaceholder
                imageUrl="/public/team.png"
                ratio="aspect-[4/3]"
              />
              <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-[var(--color-line)] bg-white px-4 py-3 shadow-[0_12px_30px_-12px_rgba(20,20,31,0.25)] sm:left-8">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-orange)]/10 text-[var(--color-orange)]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 17l5-5 4 4 8-9" />
                    <path d="M14 6h6v6" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold leading-none">85%</p>
                  <p className="mt-1 text-xs text-[var(--color-ink)]/50">
                    Faster Screening
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRECISION ENGINEERING INTRO */}
        <section id="how-it-works" className="border-t border-[var(--color-line)] bg-[var(--color-cream)]/60">
          <div className="mx-auto max-w-3xl px-6 py-20 text-center">
            <h2
              className="text-2xl font-bold tracking-tight sm:text-3xl"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Precision Engineering for Every Role
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-[var(--color-ink)]/60">
              Two distinct journeys, one unified objective: making
              recruitment effortless and highly effective.
            </p>
          </div>
        </section>

        {/* FOR RECRUITERS */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr]">
            <div>
              <div className="mb-6 flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--color-ink)] text-white">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M4 19h16M4 15h10M4 11h16M4 7h10" />
                  </svg>
                </span>
                <h3
                  className="text-lg font-semibold"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  For Recruiters
                </h3>
              </div>

              <ol className="space-y-8">
                {RECRUITER_STEPS.map((s) => (
                  <li key={s.step} className="flex gap-4">
                    <span className="text-sm font-semibold text-[var(--color-ink)]/25">
                      {s.step}
                    </span>
                    <div>
                      <p className="text-sm font-semibold">{s.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-[var(--color-ink)]/60">
                        {s.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <ImagePlaceholder
              imageUrl="/public/computer.png"
              ratio="aspect-[4/3.2]"
            />
          </div>
        </section>

        {/* FOR CANDIDATES */}
        <section id="solutions" className="mx-auto max-w-6xl px-6 pb-20">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr]">
            <ImagePlaceholder
              imageUrl="/public/lady.png"
              ratio="aspect-[4/3.2]"
              className="order-2 lg:order-1"
            />

            <div className="order-1 lg:order-2">
              <div className="mb-6 flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--color-orange)] text-white">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" />
                  </svg>
                </span>
                <h3
                  className="text-lg font-semibold"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  For Candidates
                </h3>
              </div>

              <ol className="space-y-8">
                {CANDIDATE_STEPS.map((s) => (
                  <li key={s.step} className="flex gap-4">
                    <span className="text-sm font-semibold text-[var(--color-ink)]/25">
                      {s.step}
                    </span>
                    <div>
                      <p className="text-sm font-semibold">{s.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-[var(--color-ink)]/60">
                        {s.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* CORE INTELLIGENCE ENGINES */}
        <section id="features" className="bg-[var(--color-navy)] py-20 text-white">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-xl text-center">
              <h2
                className="text-2xl font-bold tracking-tight sm:text-3xl"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                Core Intelligence Engines
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-white/55">
                Advanced algorithms designed to remove friction and bias from
                the hiring process.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {ENGINES.map((engine) => (
                <div
                  key={engine.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-orange)]/15 text-[var(--color-orange)]">
                    <EngineIcon name={engine.icon} />
                  </span>
                  <h4 className="mt-5 text-[15px] font-semibold">
                    {engine.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    {engine.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DUAL AUDIENCE CTA CARDS */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative flex min-h-[280px] flex-col justify-end overflow-hidden rounded-3xl border border-[var(--color-line)] p-8">
              <ImagePlaceholder
                imageUrl="/publc/team.png"
                ratio="aspect-auto"
                dark
                className="absolute inset-0 rounded-3xl"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
              <div className="relative">
                <h3
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  Hire Smarter with AI.
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/75">
                  Screen CVs, identify qualified candidates, and build
                  diverse teams faster than ever.
                </p>
                <a
                  href="#recruiter-trial"
                  className="mt-5 inline-block rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[var(--color-ink)] transition hover:bg-white/90"
                >
                  Start Recruiter Trial
                </a>
              </div>
            </div>

            <div className="relative flex min-h-[280px] flex-col justify-end overflow-hidden rounded-3xl border border-[var(--color-line)] p-8">
              <ImagePlaceholder
                imageUrl="/public/lady.png"
                ratio="aspect-auto"
                dark
                className="absolute inset-0 rounded-3xl"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[var(--color-orange-dark)]/95 via-[var(--color-orange)]/45 to-[var(--color-orange)]/10" />
              <div className="relative">
                <h3
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  Join as a Candidate.
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/85">
                  Find opportunities that match your skills. Get noticed by
                  the right employers through AI-enhanced profiles.
                </p>
                <a
                  href="#candidate-profile"
                  className="mt-5 inline-block rounded-full bg-black/80 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-black"
                >
                  Create Candidate Profile
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section id="pricing" className="bg-[var(--color-cream)]/60">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="rounded-[2rem] bg-white px-8 py-16 text-center shadow-[0_20px_60px_-30px_rgba(20,20,31,0.2)]">
              <h2
                className="text-2xl font-bold tracking-tight sm:text-3xl"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                Ready to Transform Recruitment?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-[var(--color-ink)]/60">
                Join forward-thinking companies and talented professionals on
                the world&apos;s most advanced hiring platform.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#get-started"
                  className="rounded-full bg-[var(--color-orange)] px-6 py-3 text-sm font-medium text-white transition hover:bg-[var(--color-orange-dark)]"
                >
                  Start Hiring
                </a>
                <a
                  href="#opportunities"
                  className="rounded-full border border-[var(--color-ink)]/15 px-6 py-3 text-sm font-medium transition hover:border-[var(--color-ink)]/40"
                >
                  Find Your Next Opportunity
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
