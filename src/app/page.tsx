import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImagePlaceholder from '@/components/ImagePlaceholder';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#14141f]">
      {/* Header */}
      <Header activePage="platform" />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-grid-light pt-14 pb-16 sm:pt-20 sm:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            {/* Title with decorative sparkles */}
            <div className="relative inline-block max-w-4xl">
              {/* Left subtle sparkle */}
              <span className="absolute -left-6 -top-2 text-gray-400 sm:-left-10 sm:top-2">
                <svg className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
              </span>

              <h1
                className="text-4xl font-extrabold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl leading-[1.12]"
                style={{ fontFamily: 'var(--font-manrope)' }}
              >
                Smarter Recruitment. Better Talent.{' '}
                <span className="text-[#f2622a] inline-flex items-center gap-1.5">
                  Faster Hiring.
                  <svg className="h-6 w-6 sm:h-7 sm:w-7 text-[#f2622a] inline-block" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                  </svg>
                </span>
              </h1>
            </div>

            <p className="mx-auto mt-6 max-w-2xl text-sm sm:text-base leading-relaxed text-gray-600">
              Where transparency meets precision. Recruitment redefined for both sides of the hiring equation. Hire smarter with AI and experience a faster, modern talent acquisition platform.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/recruiters"
                className="rounded-lg bg-[#f2622a] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#d94f1c] active:scale-[0.98]"
              >
                Start Hiring
              </Link>
              <Link
                href="/candidates"
                className="rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-800 shadow-xs transition hover:bg-gray-50 hover:border-gray-300 active:scale-[0.98]"
              >
                Find Jobs
              </Link>
            </div>

            {/* Central Hero Image Placeholder with Floating Badge */}
            <div className="relative mx-auto mt-12 max-w-4xl sm:mt-16">
              {/* Right decorative burst */}
              <div className="pointer-events-none absolute -right-4 -top-8 text-[#f2622a] opacity-80 sm:-right-8 sm:-top-10">
                <svg className="h-10 w-10 sm:h-12 sm:w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                </svg>
              </div>

              <div className="relative rounded-2xl p-1 bg-gradient-to-b from-gray-200 to-gray-300/40 shadow-xl">
                <ImagePlaceholder
                  label="Recruitment Analytics Workspace"
                  description="Professional reviewing candidates on high-tech tablet displaying real-time match rankings"
                  aspectRatio="aspect-[4/3] sm:aspect-[16/9]"
                  className="rounded-xl shadow-inner"
                  imageUrl='/image1.png'
                >
                  {/* Floating match badge bottom right */}
                  <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex items-center gap-3 rounded-xl border border-gray-100 bg-white/95 px-4 py-2.5 shadow-lg backdrop-blur-sm sm:px-5 sm:py-3">
                    <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-orange-50 text-[#f2622a] border border-orange-200">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                        <polyline points="17 6 23 6 23 12" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <p className="text-base sm:text-lg font-bold leading-none text-gray-900">85%</p>
                      <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-gray-500">
                        Faster Screening
                      </p>
                    </div>
                  </div>
                </ImagePlaceholder>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: TOO MANY CVS. TOO LITTLE TIME */}
        <section className="relative overflow-hidden bg-[#0d1021] bg-grid-dark py-16 sm:py-24 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Left Content */}
              <div>
                <h2
                  className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl leading-tight"
                  style={{ fontFamily: 'var(--font-manrope)' }}
                >
                  Too Many <span className="text-[#f2622a]">CVs</span>. Too Little Time.
                </h2>
                <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-300 max-w-xl">
                  Our recruitment platform transforms tedious resume screening into a fast, data-driven workflow. Automatically extract structured candidate profiles, remove bias, and rank candidates with incredible precision.
                </p>

                {/* 3 Key Points */}
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500/20 text-[#f2622a] border border-orange-500/30">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2-6.3-4.6-6.3 4.6 2.3-7.2-6-4.4h7.6z" />
                      </svg>
                    </span>
                    <span className="text-sm sm:text-base font-medium text-slate-200">
                      10x faster resume screening &amp; shortlist
                    </span>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500/20 text-[#f2622a] border border-orange-500/30">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2-6.3-4.6-6.3 4.6 2.3-7.2-6-4.4h7.6z" />
                      </svg>
                    </span>
                    <span className="text-sm sm:text-base font-medium text-slate-200">
                      Objective AI competency scoring &amp; ranking
                    </span>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500/20 text-[#f2622a] border border-orange-500/30">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2-6.3-4.6-6.3 4.6 2.3-7.2-6-4.4h7.6z" />
                      </svg>
                    </span>
                    <span className="text-sm sm:text-base font-medium text-slate-200">
                      Transparent candidate-recruiter messaging
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Content: Applicant Shortlist Card UI */}
              <div className="relative">
                <div className="rounded-2xl border border-white/10 bg-[#161b33]/90 p-5 sm:p-6 shadow-2xl backdrop-blur-md">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="h-2 w-2 rounded-full bg-[#f2622a]" />
                      <span className="text-sm font-semibold tracking-wide text-white">
                        Applicant Shortlist
                      </span>
                    </div>
                    <span className="text-xs text-slate-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                      AI Ranked
                    </span>
                  </div>

                  {/* Candidate Items */}
                  <div className="mt-4 space-y-3">
                    {/* Candidate 1 */}
                    <div className="flex items-center justify-between rounded-xl bg-white/5 p-3.5 transition hover:bg-white/10 border border-white/5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-600/30 text-purple-300 font-bold text-sm border border-purple-500/30">
                          JD
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white leading-snug">Jane Doe</p>
                          <p className="text-xs text-slate-400">Senior Frontend Engineer</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-1 text-xs font-semibold text-emerald-400">
                        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="18 15 12 9 6 15" />
                        </svg>
                        94% Match
                      </div>
                    </div>

                    {/* Candidate 2 */}
                    <div className="flex items-center justify-between rounded-xl bg-white/5 p-3.5 transition hover:bg-white/10 border border-white/5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-600/30 text-indigo-300 font-bold text-sm border border-indigo-500/30">
                          AS
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white leading-snug">Alex Smith</p>
                          <p className="text-xs text-slate-400">Product Designer</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 rounded-lg bg-orange-500/15 border border-orange-500/30 px-2.5 py-1 text-xs font-semibold text-orange-400">
                        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="18 15 12 9 6 15" />
                        </svg>
                        89% Match
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: PRECISION ENGINEERING FOR EVERY ROLE */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="text-3xl font-extrabold tracking-tight sm:text-4xl text-gray-950"
              style={{ fontFamily: 'var(--font-manrope)' }}
            >
              <span className="text-[#f2622a]">Precision</span> Engineering for Every Role
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-gray-600">
              A dual-sided platform built to remove friction and drive modern talent acquisition workflows.
            </p>

            {/* Two Side-by-Side Cards */}
            <div className="mt-12 grid gap-8 md:grid-cols-2 text-left">
              {/* For Recruiters Card */}
              <div className="rounded-2xl border border-gray-200/90 bg-white p-6 sm:p-8 shadow-xs hover:shadow-md transition">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-[#f2622a] border border-orange-200">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                  </div>
                  <h3
                    className="text-xl font-bold text-gray-900"
                    style={{ fontFamily: 'var(--font-manrope)' }}
                  >
                    For Recruiters
                  </h3>
                </div>

                <div className="mt-6 space-y-6">
                  {/* Step 1 */}
                  <div className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100/70 text-xs font-bold text-[#f2622a]">
                      01
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">Post a Job</h4>
                      <p className="mt-1 text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Draft high-impact job descriptions that the AI uses to understand your exact requirements.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100/70 text-xs font-bold text-[#f2622a]">
                      02
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">AI Screens</h4>
                      <p className="mt-1 text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Our engine parses thousands of resumes instantly, identifying top-tier matches with surgical precision.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100/70 text-xs font-bold text-[#f2622a]">
                      03
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">Better Decisions</h4>
                      <p className="mt-1 text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Review AI-generated summaries and ranking reports to hire the absolute best fit for your team.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* For Candidates Card */}
              <div className="rounded-2xl border border-gray-200/90 bg-white p-6 sm:p-8 shadow-xs hover:shadow-md transition">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600 border border-purple-200">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <h3
                    className="text-xl font-bold text-gray-900"
                    style={{ fontFamily: 'var(--font-manrope)' }}
                  >
                    For Candidates
                  </h3>
                </div>

                <div className="mt-6 space-y-6">
                  {/* Step 1 */}
                  <div className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-100/70 text-xs font-bold text-purple-700">
                      01
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">Create Profile</h4>
                      <p className="mt-1 text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Upload your CV and let our AI build a dynamic profile that highlights your true potential.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-100/70 text-xs font-bold text-purple-700">
                      02
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">Find &amp; Apply</h4>
                      <p className="mt-1 text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Get matched with roles where you actually fit. No more sending applications into the void.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-100/70 text-xs font-bold text-purple-700">
                      03
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">Track Applications</h4>
                      <p className="mt-1 text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Stay updated with transparent status indicators throughout the entire hiring journey.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: CORE INTELLIGENCE ENGINES */}
        <section className="bg-[#edeef1] py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="text-3xl font-extrabold tracking-tight sm:text-4xl text-gray-950"
              style={{ fontFamily: 'var(--font-manrope)' }}
            >
              Core <span className="text-[#f2622a]">Intelligence</span> Engines
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-gray-600">
              Advanced algorithms designed to remove friction and bias from the hiring process.
            </p>

            {/* 6 Dark Cards Grid */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left">
              {/* Card 1 */}
              <div className="rounded-2xl border border-slate-800 bg-[#0e1224] p-6 text-white shadow-lg transition hover:border-slate-700 hover:shadow-xl">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f2622a] text-white">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <h4 className="mt-5 text-base font-bold text-white">AI CV Parsing</h4>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300">
                  Extract structured data from any resume format with 99.8% accuracy. Say goodbye to manual entry.
                </p>
              </div>

              {/* Card 2 */}
              <div className="rounded-2xl border border-slate-800 bg-[#0e1224] p-6 text-white shadow-lg transition hover:border-slate-700 hover:shadow-xl">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f2622a] text-white">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h4 className="mt-5 text-base font-bold text-white">AI Resume Summaries</h4>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300">
                  Get a concise, objective summary of career highlights and unique value propositions in seconds.
                </p>
              </div>

              {/* Card 3 */}
              <div className="rounded-2xl border border-slate-800 bg-[#0e1224] p-6 text-white shadow-lg transition hover:border-slate-700 hover:shadow-xl">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f2622a] text-white">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </div>
                <h4 className="mt-5 text-base font-bold text-white">AI CV-to-Job Matching</h4>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300">
                  Context-aware matching that understands semantic skills and experience relevance beyond keywords.
                </p>
              </div>

              {/* Card 4 */}
              <div className="rounded-2xl border border-slate-800 bg-[#0e1224] p-6 text-white shadow-lg transition hover:border-slate-700 hover:shadow-xl">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f2622a] text-white">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                </div>
                <h4 className="mt-5 text-base font-bold text-white">AI Candidate Ranking</h4>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300">
                  Automatically rank candidates based on multidimensional scoring tailored specifically to your role.
                </p>
              </div>

              {/* Card 5 */}
              <div className="rounded-2xl border border-slate-800 bg-[#0e1224] p-6 text-white shadow-lg transition hover:border-slate-700 hover:shadow-xl">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f2622a] text-white">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <h4 className="mt-5 text-base font-bold text-white">Competency Assessment</h4>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300">
                  Generate automated technical and soft skill assessments based on declared expertise.
                </p>
              </div>

              {/* Card 6 */}
              <div className="rounded-2xl border border-slate-800 bg-[#0e1224] p-6 text-white shadow-lg transition hover:border-slate-700 hover:shadow-xl">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f2622a] text-white">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="16 3 21 3 21 8" />
                    <line x1="4" y1="20" x2="21" y2="3" />
                    <polyline points="21 16 21 21 16 21" />
                    <line x1="15" y1="15" x2="21" y2="21" />
                    <line x1="4" y1="4" x2="9" y2="9" />
                  </svg>
                </div>
                <h4 className="mt-5 text-base font-bold text-white">Candidate Comparison</h4>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300">
                  Side-by-side comparative analytics to highlight subtle differences between top contenders.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: DUAL BOTTOM BANNER CARDS */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Left Card: Recruiter CTA */}
              <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gray-900 p-8 sm:p-10 text-white min-h-[320px] flex flex-col justify-end shadow-xl">
                <ImagePlaceholder
                  label="Office Team Workspace"
                  description="Recruiting leadership evaluating candidate profiles"
                  aspectRatio="aspect-[16/9]"
                  // dark={true}
                  className="absolute inset-0 h-full w-full rounded-3xl"
                  imageUrl='/image2.png'
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/70 to-transparent" />

                <div className="relative z-10 max-w-md">
                  <h3
                    className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
                    style={{ fontFamily: 'var(--font-manrope)' }}
                  >
                    Hire Smarter with AI.
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-gray-200">
                    Review AI-generated summaries, candidate rankings, and hire with surgical precision.
                  </p>
                  <Link
                    href="/recruiters"
                    className="mt-6 inline-block rounded-lg bg-black/90 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition hover:bg-black active:scale-[0.98] border border-white/20"
                  >
                    Start Hiring as Recruiter
                  </Link>
                </div>
              </div>

              {/* Right Card: Candidate CTA */}
              <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-orange-950 p-8 sm:p-10 text-white min-h-[320px] flex flex-col justify-end shadow-xl">
                <ImagePlaceholder
                  label="Candidate Career Growth"
                  description="Candidate exploring matching roles and insights"
                  aspectRatio="aspect-auto"
                  dark
                  className="absolute inset-0 h-full w-full rounded-3xl"
                  imageUrl='/image3.png'
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#c54316] via-[#f2622a]/70 to-transparent" />

                <div className="relative z-10 max-w-md">
                  <h3
                    className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
                    style={{ fontFamily: 'var(--font-manrope)' }}
                  >
                    Find Opportunities That Match Your Skills.
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-orange-50">
                    Upload your CV and let our AI match you with roles where you actually fit.
                  </p>
                  <Link
                    href="/candidates"
                    className="mt-6 inline-block rounded-lg bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-100 active:scale-[0.98]"
                  >
                    Search Open Roles
                  </Link>
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
