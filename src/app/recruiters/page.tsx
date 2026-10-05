import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImagePlaceholder from '@/components/ImagePlaceholder';

export default function RecruitersPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#14141f]">
      {/* Header */}
      <Header activePage="recruiters" />

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
                  Scale Your Team with{' '}
                  <span className="text-[#f2622a]">Precision</span>.
                </h1>
                <p className="mt-6 text-sm sm:text-base leading-relaxed text-gray-600 max-w-lg">
                  Hire smarter with AI. Screen CVs, identify qualified candidates, and build diverse teams faster than ever.
                </p>

                {/* Hero CTAs */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="#sourcing"
                    className="rounded-lg bg-[#f2622a] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#d94f1c] active:scale-[0.98]"
                  >
                    Start Hiring Now
                  </Link>
                  <Link
                    href="#contact"
                    className="rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-800 shadow-xs transition hover:bg-gray-50 hover:border-gray-300 active:scale-[0.98]"
                  >
                    Book a Demo
                  </Link>
                </div>
              </div>

              {/* Right Column: Hero Image with Floating Badge */}
              <div className="relative">
                <div className="relative rounded-2xl p-1 bg-gradient-to-b from-gray-200 to-gray-300/40 shadow-xl">
                  <ImagePlaceholder
                    label="Recruiting Team Collaboration"
                    description="Hiring leaders and HR professionals reviewing candidate shortlist data together"
                    aspectRatio="aspect-[4/3]"
                    className="rounded-xl shadow-inner min-h-[280px] sm:min-h-[360px]"
                    imageUrl='/recruiters1.png'
                  >
                    {/* Floating Time to Hire Badge (bottom left of image) */}
                    <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-3 rounded-xl border border-gray-100 bg-white/95 px-4 py-2.5 shadow-lg backdrop-blur-sm sm:px-5 sm:py-3">
                      <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-purple-50 text-purple-600 border border-purple-200">
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <p className="text-xs font-medium text-gray-500">Time to Hire</p>
                        <p className="text-base sm:text-lg font-bold text-[#f2622a] leading-none mt-0.5">
                          -40%
                        </p>
                      </div>
                    </div>
                  </ImagePlaceholder>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: INTELLIGENT SOURCING */}
        <section id="sourcing" className="py-16 sm:py-24 bg-white border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="text-3xl font-extrabold tracking-tight sm:text-4xl text-gray-950"
              style={{ fontFamily: 'var(--font-manrope)' }}
            >
              Intelligent Sourcing
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-gray-600">
              Automate the heavy lifting and focus on what matters most: connecting with top talent.
            </p>

            {/* 4 Cards Grid (2x2) */}
            <div className="mt-12 grid gap-8 md:grid-cols-2 text-left">
              {/* Card 1: Job description generation (with embedded image placeholder) */}
              <div className="flex flex-col justify-between rounded-2xl border border-gray-200/90 bg-white p-6 sm:p-8 shadow-xs hover:shadow-md transition">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-700 border border-purple-100">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                  </div>
                  <h3
                    className="mt-5 text-xl font-bold text-gray-900"
                    style={{ fontFamily: 'var(--font-manrope)' }}
                  >
                    Job description generation
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-600">
                    Generate polished job description tailored to your role, edit and publish in seconds. Change draft to generate.
                  </p>
                </div>

                {/* Embedded Image Placeholder */}
                <div className="mt-6 overflow-hidden rounded-xl border border-gray-200">
                  <ImagePlaceholder
                    label="AI Job Description Studio"
                    description="Recruiter managing dynamic talent attributes in holographic studio"
                    aspectRatio="aspect-[16/7]"
                    className="min-h-[140px]"
                    imageUrl='/recruiters2.png'
                  />
                </div>
              </div>

              {/* Card 2: Hiring pipeline */}
              <div className="flex flex-col justify-between rounded-2xl border border-gray-200/90 bg-white p-6 sm:p-8 shadow-xs hover:shadow-md transition">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-700 border border-purple-100">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="12 2 2 7 12 12 22 7 12 2" />
                      <polyline points="2 17 12 22 22 17" />
                      <polyline points="2 12 12 17 22 12" />
                    </svg>
                  </div>
                  <h3
                    className="mt-5 text-xl font-bold text-gray-900"
                    style={{ fontFamily: 'var(--font-manrope)' }}
                  >
                    Hiring pipeline
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-600">
                    Choose a hiring flow that works for your organization, define every stage.
                  </p>
                </div>

                {/* Pipeline Stages list */}
                <div className="mt-6 space-y-3.5 rounded-xl bg-gray-50/80 p-5 border border-gray-100">
                  <div className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[11px] font-bold text-[#f2622a]">
                      1
                    </span>
                    <p className="text-xs sm:text-sm text-gray-700 leading-snug">
                      <span className="font-bold text-gray-900">Standard:</span> Skip interviews hire from top 5 ranked.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-100 text-[11px] font-bold text-purple-700">
                      2
                    </span>
                    <p className="text-xs sm:text-sm text-gray-700 leading-snug">
                      <span className="font-bold text-gray-900">Premium:</span> Send assessments to top 10 and interview scores above 90%.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[11px] font-bold text-blue-700">
                      3
                    </span>
                    <p className="text-xs sm:text-sm text-gray-700 leading-snug">
                      <span className="font-bold text-gray-900">Custom:</span> Customize your hiring process, 2-3 assessments, interviews, it&apos;s up to you.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: Interviews Scheduling */}
              <div className="flex flex-col justify-between rounded-2xl border border-gray-200/90 bg-white p-6 sm:p-8 shadow-xs hover:shadow-md transition">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-700 border border-purple-100">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>
                  <h3
                    className="mt-5 text-xl font-bold text-gray-900"
                    style={{ fontFamily: 'var(--font-manrope)' }}
                  >
                    Interviews Scheduling
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-600">
                    Automatically coordinate and book interviews between candidates and recruiters. Send interview invite via mail to the candidates, add to calendars.
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 rounded-lg bg-emerald-50 px-3.5 py-2.5 text-xs text-emerald-800 border border-emerald-100">
                  <svg className="h-4 w-4 shrink-0 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Google Calendar, Outlook &amp; Zoom integrations synced automatically</span>
                </div>
              </div>

              {/* Card 4: Seamless team collaboration */}
              <div className="flex flex-col justify-between rounded-2xl border border-gray-200/90 bg-white p-6 sm:p-8 shadow-xs hover:shadow-md transition">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-700 border border-purple-100">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h3
                    className="mt-5 text-xl font-bold text-gray-900"
                    style={{ fontFamily: 'var(--font-manrope)' }}
                  >
                    Seamless team collaboration.
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-600">
                    Share candidate profiles, leave synchronized notes, and manage interview stages with granular access controls designed for enterprise HR teams.
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 rounded-lg bg-purple-50 px-3.5 py-2.5 text-xs text-purple-800 border border-purple-100">
                  <svg className="h-4 w-4 shrink-0 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <span>Role-based permissions &amp; SOC2 Type II compliance ready</span>
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
