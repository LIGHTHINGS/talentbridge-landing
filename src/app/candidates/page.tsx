import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImagePlaceholder from '@/components/ImagePlaceholder';

export default function CandidatesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#14141f]">
      {/* Header */}
      <Header activePage="candidates" />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-grid-light pt-12 pb-16 sm:pt-20 sm:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Left Column */}
              <div>
                <h1
                  className="text-4xl font-extrabold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl leading-[1.15]"
                  style={{ fontFamily: 'var(--font-manrope)' }}
                >
                  Your <span className="text-[#f2622a]">Career,</span>
                  <br />
                  <span className="text-[#f2622a]">Amplified</span> by AI.
                </h1>
                <p className="mt-6 text-sm sm:text-base leading-relaxed text-gray-600 max-w-lg">
                  Find opportunities that match your skills. Get noticed by the right employers through AI-enhanced profiles.
                </p>

                {/* Hero CTAs */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="#why-us"
                    className="rounded-lg bg-[#f2622a] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#d94f1c] active:scale-[0.98]"
                  >
                    Build Your Profile
                  </Link>
                  <Link
                    href="#roles"
                    className="rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-800 shadow-xs transition hover:bg-gray-50 hover:border-gray-300 active:scale-[0.98]"
                  >
                    Explore Roles
                  </Link>
                </div>
              </div>

              {/* Right Column: Hero Image with Keyboard HUD */}
              <div className="relative">
                <div className="relative rounded-2xl p-1 bg-gradient-to-b from-gray-200 to-gray-300/40 shadow-xl">
                  <ImagePlaceholder
                    label="Recruitment OS Precision Engineering"
                    description="Hands on keyboard with futuristic holographic skill scores (AI Match Score: 98%)"
                    aspectRatio="aspect-[4/3]"
                    className="rounded-xl shadow-inner min-h-[280px] sm:min-h-[360px]"
                    imageUrl='/candidate.svg'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: WHY USE OUR PLATFORM */}
        <section id="why-us" className="py-16 sm:py-24 bg-white border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#f2622a]">
              Why Use Our Platform?
            </p>
            <h2
              className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl text-gray-950"
              style={{ fontFamily: 'var(--font-manrope)' }}
            >
              Recruitment Built Around Better Decisions.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-gray-600">
              Equip candidates and hiring teams with deep, automated intelligence designed to clarify, streamline, and elevate every career step.
            </p>

            {/* 6 White Cards Grid (3x2) */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left">
              {/* Card 1: 1. Save Time */}
              <div className="rounded-2xl border border-gray-200/90 bg-white p-6 sm:p-7 shadow-xs hover:shadow-md transition">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-[#f2622a] border border-orange-200">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <h3
                  className="mt-5 text-base font-bold text-gray-900"
                  style={{ fontFamily: 'var(--font-manrope)' }}
                >
                  1. Save Time
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-600">
                  Reduce hours of manual CV screening with instant automated summaries and structured competency parsing.
                </p>
              </div>

              {/* Card 2: 2. Find Better Matches */}
              <div className="rounded-2xl border border-gray-200/90 bg-white p-6 sm:p-7 shadow-xs hover:shadow-md transition">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-50 text-purple-600 border border-purple-200">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <h3
                  className="mt-5 text-base font-bold text-gray-900"
                  style={{ fontFamily: 'var(--font-manrope)' }}
                >
                  2. Find Better Matches
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-600">
                  Identify candidates whose verified skills, potential, and experience align seamlessly with actual role requirements.
                </p>
              </div>

              {/* Card 3: 3. Evaluate Consistently */}
              <div className="rounded-2xl border border-gray-200/90 bg-white p-6 sm:p-7 shadow-xs hover:shadow-md transition">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 text-amber-600 border border-amber-200">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                    <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                    <path d="M7 21h10" />
                    <path d="M12 3v18" />
                    <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
                  </svg>
                </div>
                <h3
                  className="mt-5 text-base font-bold text-gray-900"
                  style={{ fontFamily: 'var(--font-manrope)' }}
                >
                  3. Evaluate Consistently
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-600">
                  Use structured, objective criteria and automated scoring benchmarks to assess every candidate fairly and equitably.
                </p>
              </div>

              {/* Card 4: 4. See the Bigger Picture */}
              <div className="rounded-2xl border border-gray-200/90 bg-white p-6 sm:p-7 shadow-xs hover:shadow-md transition">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 border border-indigo-200">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3
                  className="mt-5 text-base font-bold text-gray-900"
                  style={{ fontFamily: 'var(--font-manrope)' }}
                >
                  4. See the Bigger Picture
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-600">
                  Move beyond a flat CV and understand hidden candidate strengths, potential gaps, contextual competencies, and growth trajectories.
                </p>
              </div>

              {/* Card 5: 5. Stay Organized */}
              <div className="rounded-2xl border border-gray-200/90 bg-white p-6 sm:p-7 shadow-xs hover:shadow-md transition">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-[#f2622a] border border-orange-200">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
                  </svg>
                </div>
                <h3
                  className="mt-5 text-base font-bold text-gray-900"
                  style={{ fontFamily: 'var(--font-manrope)' }}
                >
                  5. Stay Organized
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-600">
                  Keep active roles, candidate applications, interview feedback, and talent insights harmonized in a single unified dashboard.
                </p>
              </div>

              {/* Card 6: 6. Make Informed Decisions */}
              <div className="rounded-2xl border border-gray-200/90 bg-white p-6 sm:p-7 shadow-xs hover:shadow-md transition">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-50 text-purple-600 border border-purple-200">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                    <path d="M9 18h6" />
                    <path d="M10 22h4" />
                  </svg>
                </div>
                <h3
                  className="mt-5 text-base font-bold text-gray-900"
                  style={{ fontFamily: 'var(--font-manrope)' }}
                >
                  6. Make Informed Decisions
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-600">
                  Harness synthesized AI-generated insights to support—not replace—human intuition, empathy, and professional judgment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: DARK ETHICAL AI PHILOSOPHY CARD */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-r from-[#111326] via-[#1a172e] to-[#261c30] p-8 sm:p-12 text-white border border-white/10 shadow-2xl">
              <div className="grid items-center gap-10 lg:grid-cols-12">
                {/* Left Text Block */}
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-[#f2622a]/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#f2622a]">
                    <span>⚡</span>
                    Ethical AI Philosophy
                  </div>

                  <h3
                    className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight"
                    style={{ fontFamily: 'var(--font-manrope)' }}
                  >
                    AI Insights. Human Decisions.
                  </h3>

                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-300 max-w-xl">
                    AI helps you process information faster, but you remain in full control of the hiring decision. These tools are engineered to empower recruiters and candidates—not automatically make hiring verdicts for them.
                  </p>
                </div>

                {/* Right Visual Workflow Pill */}
                <div className="lg:col-span-5 flex flex-col sm:flex-row items-center justify-center gap-3">
                  {/* Step 1: AI Precision */}
                  <div className="w-full sm:w-auto flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3 shadow-inner backdrop-blur-sm">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-500/20 text-[#f2622a]">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Processing
                      </p>
                      <p className="text-sm font-bold text-white">AI Precision</p>
                    </div>
                  </div>

                  {/* Plus separator */}
                  <span className="text-lg font-bold text-slate-400">+</span>

                  {/* Step 2: Human Judgment */}
                  <div className="w-full sm:w-auto flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3 shadow-inner backdrop-blur-sm">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-purple-500/20 text-purple-400">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Final Call
                      </p>
                      <p className="text-sm font-bold text-white">Human Judgment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
