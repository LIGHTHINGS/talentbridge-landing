import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImagePlaceholder from '@/components/ImagePlaceholder';

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#14141f]">
      {/* Header */}
      <Header activePage="features" />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-grid-light pt-14 pb-16 sm:pt-20 sm:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1
              className="text-4xl font-extrabold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl leading-[1.15]"
              style={{ fontFamily: 'var(--font-manrope)' }}
            >
              The <span className="text-[#f2622a]">Intelligence</span> Behind Every Match.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-sm sm:text-base leading-relaxed text-gray-600">
              Advanced AI algorithms designed to remove friction and bias from your hiring process.
            </p>

            {/* Central Holographic Neural Match Engine Visual Placeholder */}
            <div className="relative mx-auto mt-12 max-w-4xl sm:mt-16">
              <div className="relative rounded-2xl p-1 bg-gradient-to-b from-gray-200 to-gray-300/40 shadow-xl">
                <ImagePlaceholder
                  label="Neural Recruitment Matching Glass Display"
                  description="Transparent interface showing semantic candidate node mappings (Alex Chen 98% Match, Maria Rodriguez 95% Match) and deep skill correlations"
                  aspectRatio="aspect-[4/3] sm:aspect-[16/9]"
                  className="rounded-xl shadow-inner"
                  imageUrl='/featureImage.png'
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: COMING NEXT / ROADMAP */}
        <section className="py-16 sm:py-24 bg-white border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-[#f2622a]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f2622a]" />
              Coming Next
            </div>

            <h2
              className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl text-gray-950"
              style={{ fontFamily: 'var(--font-manrope)' }}
            >
              We&apos;re Just Getting Started.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base leading-relaxed text-gray-600">
              Future enhancements will make the platform even more intelligent.
            </p>

            {/* 4 Feature Roadmap Cards */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-left">
              {/* Card 1: AI Interview Questions */}
              <div className="flex flex-col justify-between rounded-2xl border border-gray-200/90 bg-white p-6 shadow-xs transition hover:shadow-md hover:border-gray-300">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-[#f2622a] border border-orange-100">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                        <line x1="12" y1="17" x2="12.01" y2="17" />
                      </svg>
                    </div>
                    <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-semibold text-emerald-700">
                      In Development
                    </span>
                  </div>

                  <h3
                    className="mt-5 text-base font-bold text-gray-900"
                    style={{ fontFamily: 'var(--font-manrope)' }}
                  >
                    AI Interview Questions
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-600">
                    Generate role-specific interview questions based on job requirements and candidate profiles.
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2 border-t border-gray-100 pt-4 text-xs text-gray-400">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>Estimated Q2 Rollout</span>
                </div>
              </div>

              {/* Card 2: Bias Detection */}
              <div className="flex flex-col justify-between rounded-2xl border border-gray-200/90 bg-white p-6 shadow-xs transition hover:shadow-md hover:border-gray-300">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-[#f2622a] border border-orange-100">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                        <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                        <path d="M7 21h10" />
                        <path d="M12 3v18" />
                        <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
                      </svg>
                    </div>
                    <span className="rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-[11px] font-semibold text-blue-700">
                      Q3 Roadmap
                    </span>
                  </div>

                  <h3
                    className="mt-5 text-base font-bold text-gray-900"
                    style={{ fontFamily: 'var(--font-manrope)' }}
                  >
                    Bias Detection
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-600">
                    Identify potential bias in recruitment evaluations and encourage fairer decision-making.
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2 border-t border-gray-100 pt-4 text-xs text-gray-400">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <span>Ethical AI Standard</span>
                </div>
              </div>

              {/* Card 3: Predictive Hiring Analytics */}
              <div className="flex flex-col justify-between rounded-2xl border border-gray-200/90 bg-white p-6 shadow-xs transition hover:shadow-md hover:border-gray-300">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-[#f2622a] border border-orange-100">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                        <polyline points="17 6 23 6 23 12" />
                      </svg>
                    </div>
                    <span className="rounded-full bg-purple-50 border border-purple-200 px-3 py-1 text-[11px] font-semibold text-purple-700">
                      In Research
                    </span>
                  </div>

                  <h3
                    className="mt-5 text-base font-bold text-gray-900"
                    style={{ fontFamily: 'var(--font-manrope)' }}
                  >
                    Predictive Hiring Analytics
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-600">
                    Use recruitment data to uncover trends and provide deeper hiring insights.
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2 border-t border-gray-100 pt-4 text-xs text-gray-400">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                  <span>Retention &amp; Velocity</span>
                </div>
              </div>

              {/* Card 4: More Integrations */}
              <div className="flex flex-col justify-between rounded-2xl border border-gray-200/90 bg-white p-6 shadow-xs transition hover:shadow-md hover:border-gray-300">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-[#f2622a] border border-orange-100">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="18" cy="5" r="3" />
                        <circle cx="6" cy="12" r="3" />
                        <circle cx="18" cy="19" r="3" />
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                      </svg>
                    </div>
                    <span className="rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-[11px] font-semibold text-amber-700">
                      Beta Soon
                    </span>
                  </div>

                  <h3
                    className="mt-5 text-base font-bold text-gray-900"
                    style={{ fontFamily: 'var(--font-manrope)' }}
                  >
                    More Integrations
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-600">
                    Connect recruitment workflows with other HR and business systems (ATS, HRIS, Slack, calendars).
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2 border-t border-gray-100 pt-4 text-xs text-gray-400">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="17 1 21 5 17 9" />
                    <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                    <polyline points="7 23 3 19 7 15" />
                    <path d="M21 13v2a4 4 0 0 1-4 4H3" />
                  </svg>
                  <span>Workday, Greenhouse, Ashby</span>
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
