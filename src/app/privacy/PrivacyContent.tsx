'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SECTIONS = [
  { id: 'introduction', label: '1. Introduction & Overview' },
  { id: 'data-collected', label: '2. Information We Collect' },
  { id: 'how-we-use', label: '3. How We Use Information' },
  { id: 'ai-transparency', label: '4. AI & Algorithmic Governance' },
  { id: 'legal-basis', label: '5. Legal Basis for Processing' },
  { id: 'data-sharing', label: '6. Data Sharing & Third Parties' },
  { id: 'data-security', label: '7. Data Security & Encryption' },
  { id: 'data-retention', label: '8. Data Retention Policy' },
  { id: 'privacy-rights', label: '9. Your Privacy Rights & Choices' },
  { id: 'cookies', label: '10. Cookies & Tracking Technologies' },
  { id: 'international-transfers', label: '11. International Transfers' },
  { id: 'children-privacy', label: '12. Children\'s Privacy' },
  { id: 'policy-updates', label: '13. Changes to This Policy' },
  { id: 'contact-dpo', label: '14. Contact & Data Protection Officer' },
];

export default function PrivacyContent() {
  const [activeSection, setActiveSection] = useState('introduction');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [requestModalOpen, setRequestModalOpen] = useState(false);
  const [requestType, setRequestType] = useState('access');
  const [requestEmail, setRequestEmail] = useState('');
  const [requestSubmitted, setRequestSubmitted] = useState(false);

  // Active section scrollspy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0px -60% 0px',
        threshold: 0.1,
      }
    );

    SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleCopyLink = (id: string) => {
    if (typeof window !== 'undefined') {
      const url = `${window.location.origin}/privacy#${id}`;
      navigator.clipboard.writeText(url);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const filteredSections = SECTIONS.filter((s) =>
    s.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSubmitRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (requestEmail) {
      setRequestSubmitted(true);
      setTimeout(() => {
        setRequestSubmitted(false);
        setRequestModalOpen(false);
        setRequestEmail('');
      }, 2500);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#14141f]">
      <Header />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#fff7f2] via-[#fffbf9] to-white border-b border-[#e7e5e1]/80 py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#f2622a]">
                <span>✦</span> Legal & Compliance Center
              </div>

              {/* Title */}
              <h1
                className="mt-4 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl"
                style={{ fontFamily: 'var(--font-manrope)' }}
              >
                Privacy <span className="text-[#f2622a]">Policy</span>
              </h1>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-600">
                At Pincef TalentBridge, transparency and ethical responsibility are at the core of our AI-powered recruitment ecosystem. This Privacy Policy details how we collect, process, safeguard, and respect your personal information.
              </p>

              {/* Metadata & Switcher */}
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-gray-500 border-t border-gray-200/60 pt-4">
                <span className="flex items-center gap-1.5 font-medium text-gray-700">
                  <svg className="h-4 w-4 text-[#f2622a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  Effective Date: October 1, 2024
                </span>
                <span>•</span>
                <span>Last Updated: October 2024</span>
                <span>•</span>
                <span>Version 2.4</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1 text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  GDPR, CCPA & NDPR Compliant
                </span>
              </div>

              {/* Document Switcher & Print Actions */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <div className="inline-flex rounded-xl bg-gray-100 p-1 border border-gray-200">
                  <Link
                    href="/privacy"
                    className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-xs sm:text-sm font-bold text-[#f2622a] shadow-xs"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    Privacy Policy
                  </Link>
                  <Link
                    href="/terms"
                    className="flex items-center gap-2 rounded-lg px-4 py-2 text-xs sm:text-sm font-medium text-gray-600 hover:text-gray-900 transition"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                    Terms of Service
                  </Link>
                </div>

                <button
                  type="button"
                  onClick={handlePrint}
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3.5 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 shadow-xs transition"
                >
                  <svg className="h-4 w-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 6 2 18 2 18 9" />
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                    <rect x="6" y="14" width="12" height="8" />
                  </svg>
                  Print / Save PDF
                </button>

                <button
                  type="button"
                  onClick={() => setRequestModalOpen(true)}
                  className="inline-flex items-center gap-2 rounded-xl bg-orange-50 border border-orange-200 px-3.5 py-2 text-xs font-semibold text-[#f2622a] hover:bg-orange-100 transition shadow-xs"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" y1="3" x2="12" y2="15" />
                  </svg>
                  Data Subject Request
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN BODY: 2-COLUMN LAYOUT */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[280px_1fr] items-start">
              {/* LEFT SIDEBAR: Table of Contents */}
              <aside className="sticky top-24 hidden lg:block rounded-2xl border border-gray-200/90 bg-[#faf9f7] p-5 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">
                    Table of Contents
                  </h3>
                  <span className="text-[11px] font-semibold text-gray-500">14 Sections</span>
                </div>

                {/* Filter input */}
                <div className="mt-3 relative">
                  <input
                    type="text"
                    placeholder="Search sections..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs text-gray-800 placeholder-gray-400 focus:border-[#f2622a] focus:outline-hidden"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2 top-2 text-xs text-gray-400 hover:text-gray-600"
                    >
                      ×
                    </button>
                  )}
                </div>

                {/* Navigation links */}
                <nav className="mt-4 max-h-[calc(100vh-280px)] overflow-y-auto pr-1 space-y-1">
                  {filteredSections.map((section) => {
                    const isActive = activeSection === section.id;
                    return (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className={`group flex items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-medium transition ${
                          isActive
                            ? 'bg-orange-50 text-[#f2622a] font-semibold shadow-xs'
                            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                        }`}
                      >
                        <span className="truncate">{section.label}</span>
                        {isActive && (
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#f2622a]" />
                        )}
                      </a>
                    );
                  })}
                </nav>

                {/* Bottom Quick Help Box */}
                <div className="mt-6 rounded-xl border border-orange-200/80 bg-orange-50/70 p-3.5 text-xs text-gray-700">
                  <p className="font-bold text-[#f2622a]">Data Protection Office</p>
                  <p className="mt-1 text-[11px] text-gray-600">
                    Direct access to our DPO for legal & audit inquiries:
                  </p>
                  <a
                    href="mailto:privacy@pincef.com"
                    className="mt-2 inline-flex items-center gap-1 font-bold text-gray-900 hover:text-[#f2622a] underline text-[11px]"
                  >
                    privacy@pincef.com →
                  </a>
                </div>
              </aside>

              {/* RIGHT CONTENT COLUMN */}
              <div className="space-y-8">
                {/* 1. INTRODUCTION & OVERVIEW */}
                <section
                  id="introduction"
                  className="rounded-2xl border border-gray-200/90 bg-white p-6 sm:p-8 shadow-xs scroll-mt-28"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 font-bold text-xs text-[#f2622a] border border-orange-200">
                        01
                      </span>
                      <h2
                        className="text-xl sm:text-2xl font-bold text-gray-950"
                        style={{ fontFamily: 'var(--font-manrope)' }}
                      >
                        Introduction & Overview
                      </h2>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopyLink('introduction')}
                      title="Copy link to this section"
                      className="text-xs text-gray-400 hover:text-[#f2622a] transition flex items-center gap-1"
                    >
                      {copiedId === 'introduction' ? (
                        <span className="text-[#f2622a] font-semibold">Copied!</span>
                      ) : (
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                      )}
                    </button>
                  </div>

                  <div className="mt-5 space-y-4 text-xs sm:text-sm leading-relaxed text-gray-600">
                    <p>
                      Welcome to <strong>Pincef TalentBridge</strong> (&ldquo;TalentBridge&rdquo;, &ldquo;Pincef&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). We provide an artificial intelligence-driven recruitment intelligence platform that connects talented professionals with prospective employers through semantic matching, automated CV evaluation, and structured recruitment workflows.
                    </p>
                    <p>
                      This Privacy Policy governs the manner in which Pincef TalentBridge collects, uses, maintains, protects, and discloses information collected from candidates, recruiters, hiring managers, and visitors (collectively, &ldquo;Users&rdquo; or &ldquo;you&rdquo;) across our website, mobile interfaces, software applications, APIs, and associated services (the &ldquo;Platform&rdquo;).
                    </p>

                    {/* Notice Callout Box */}
                    <div className="rounded-xl border border-orange-200 bg-orange-50/70 p-4 text-xs text-gray-800">
                      <div className="flex items-start gap-2.5">
                        <svg className="h-5 w-5 shrink-0 text-[#f2622a] mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="8" x2="12" y2="12" />
                          <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        <div>
                          <strong className="text-gray-900 block font-semibold mb-1">
                            Roles Under Global Privacy Regulations (GDPR / NDPR / CCPA)
                          </strong>
                          <span>
                            When you register an account or create a public candidate profile, Pincef acts as a <strong>Data Controller</strong>. When an employer or enterprise recruiter uses TalentBridge to process job applications, interview scorecards, and internal hiring pipelines, Pincef acts as a <strong>Data Processor</strong> on behalf of that employer.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 2. INFORMATION WE COLLECT */}
                <section
                  id="data-collected"
                  className="rounded-2xl border border-gray-200/90 bg-white p-6 sm:p-8 shadow-xs scroll-mt-28"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 font-bold text-xs text-[#f2622a] border border-orange-200">
                        02
                      </span>
                      <h2
                        className="text-xl sm:text-2xl font-bold text-gray-950"
                        style={{ fontFamily: 'var(--font-manrope)' }}
                      >
                        Information We Collect
                      </h2>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopyLink('data-collected')}
                      title="Copy link to this section"
                      className="text-xs text-gray-400 hover:text-[#f2622a] transition"
                    >
                      {copiedId === 'data-collected' ? 'Copied!' : (
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                      )}
                    </button>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-gray-600">
                    We collect information in three ways: directly from you, automatically through your platform usage, and through trusted third-party integrations (such as LinkedIn, GitHub, or ATS software).
                  </p>

                  {/* 4 Cards Grid */}
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {/* Card A: Candidate Data */}
                    <div className="rounded-xl border border-gray-200/80 bg-[#fbfaf8] p-5 hover:border-orange-300 transition">
                      <div className="flex items-center gap-2.5 text-[#f2622a]">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 border border-orange-200">
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                        </div>
                        <h3 className="font-bold text-gray-900 text-sm">A. Candidate Profile & Career Data</h3>
                      </div>
                      <ul className="mt-3 space-y-1.5 text-xs text-gray-600">
                        <li className="flex items-start gap-2">
                          <span className="text-[#f2622a]">•</span>
                          <span>Full name, email address, telephone number, geographic location.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#f2622a]">•</span>
                          <span>Uploaded resumes/CVs, cover letters, and transcripts.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#f2622a]">•</span>
                          <span>Employment history, educational degrees, and certifications.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#f2622a]">•</span>
                          <span>Public portfolio links (e.g. GitHub, LinkedIn, Behance, personal domain).</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#f2622a]">•</span>
                          <span>Desired salary brackets, notice periods, and work authorization status.</span>
                        </li>
                      </ul>
                    </div>

                    {/* Card B: Employer Data */}
                    <div className="rounded-xl border border-gray-200/80 bg-[#fbfaf8] p-5 hover:border-purple-300 transition">
                      <div className="flex items-center gap-2.5 text-purple-600">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-50 border border-purple-200">
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                          </svg>
                        </div>
                        <h3 className="font-bold text-gray-900 text-sm">B. Recruiter & Employer Data</h3>
                      </div>
                      <ul className="mt-3 space-y-1.5 text-xs text-gray-600">
                        <li className="flex items-start gap-2">
                          <span className="text-purple-600">•</span>
                          <span>Company name, business registration, tax identification numbers.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-600">•</span>
                          <span>Recruiter contact info, seat management, and role permissions.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-600">•</span>
                          <span>Job descriptions, salary benchmarks, and hiring scorecards.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-600">•</span>
                          <span>Internal interview feedback, hiring stage logs, and decision tags.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-600">•</span>
                          <span>Billing addresses and payment transaction records (processed via Stripe).</span>
                        </li>
                      </ul>
                    </div>

                    {/* Card C: Interaction & AI Telemetry */}
                    <div className="rounded-xl border border-gray-200/80 bg-[#fbfaf8] p-5 hover:border-indigo-300 transition">
                      <div className="flex items-center gap-2.5 text-indigo-600">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 border border-indigo-200">
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="3" />
                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                          </svg>
                        </div>
                        <h3 className="font-bold text-gray-900 text-sm">C. AI Interaction & Telemetry</h3>
                      </div>
                      <ul className="mt-3 space-y-1.5 text-xs text-gray-600">
                        <li className="flex items-start gap-2">
                          <span className="text-indigo-600">•</span>
                          <span>Candidate search queries, filters applied, and saved roles.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-indigo-600">•</span>
                          <span>AI fit score assessments, match ratings, and recruiter interactions.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-indigo-600">•</span>
                          <span>Candidate skills verification assessments and automated summaries.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-indigo-600">•</span>
                          <span>Interview scheduling timestamps and calendar availability data.</span>
                        </li>
                      </ul>
                    </div>

                    {/* Card D: Technical & Log Data */}
                    <div className="rounded-xl border border-gray-200/80 bg-[#fbfaf8] p-5 hover:border-emerald-300 transition">
                      <div className="flex items-center gap-2.5 text-emerald-600">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 border border-emerald-200">
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                            <line x1="8" y1="21" x2="16" y2="21" />
                            <line x1="12" y1="17" x2="12" y2="21" />
                          </svg>
                        </div>
                        <h3 className="font-bold text-gray-900 text-sm">D. Technical & Device Data</h3>
                      </div>
                      <ul className="mt-3 space-y-1.5 text-xs text-gray-600">
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600">•</span>
                          <span>Internet Protocol (IP) address, browser version, and OS type.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600">•</span>
                          <span>Device hardware model, unique device identifiers, and language.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600">•</span>
                          <span>Log files, page response latency, crash reports, and system telemetry.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600">•</span>
                          <span>Essential session cookies and local storage tokens.</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Sensitive Data Callout */}
                  <div className="mt-5 rounded-xl border border-gray-200 bg-gray-50/80 p-4 text-xs text-gray-600">
                    <strong className="text-gray-900">Sensitive Information Exclusions: </strong>
                    TalentBridge does not intentionally collect or process biometric templates, genetic information, political affiliations, trade union memberships, or criminal history, unless explicitly mandated by statutory background verification laws in your jurisdiction.
                  </div>
                </section>

                {/* 3. HOW WE USE YOUR INFORMATION */}
                <section
                  id="how-we-use"
                  className="rounded-2xl border border-gray-200/90 bg-white p-6 sm:p-8 shadow-xs scroll-mt-28"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 font-bold text-xs text-[#f2622a] border border-orange-200">
                        03
                      </span>
                      <h2
                        className="text-xl sm:text-2xl font-bold text-gray-950"
                        style={{ fontFamily: 'var(--font-manrope)' }}
                      >
                        How We Use Your Information
                      </h2>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopyLink('how-we-use')}
                      title="Copy link to this section"
                      className="text-xs text-gray-400 hover:text-[#f2622a] transition"
                    >
                      {copiedId === 'how-we-use' ? 'Copied!' : (
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                      )}
                    </button>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-gray-600">
                    We process your information strictly for legitimate business objectives and in full alignment with global data protection frameworks:
                  </p>

                  <div className="mt-6 space-y-3">
                    {[
                      {
                        title: '1. Semantic Matching & Precision Candidate Discovery',
                        desc: 'Utilizing machine learning models to analyze job requirements against candidate CVs, generating relevance scores (e.g. 98% skill match) to speed up recruitment without subjective bias.',
                        badge: 'Core Functionality',
                      },
                      {
                        title: '2. Profile Structuring & Automated Competency Parsing',
                        desc: 'Converting unstructured PDF and Word documents into standardized talent profiles, highlighting core competencies, career achievements, and tech stack proficiencies.',
                        badge: 'AI Processing',
                      },
                      {
                        title: '3. Platform Communication & Interview Coordination',
                        desc: 'Transmitting application updates, interview calendar invites, recruiter direct messages, and system security alerts.',
                        badge: 'Communications',
                      },
                      {
                        title: '4. Bias Detection & Algorithmic Fairness Audits',
                        desc: 'Auditing job descriptions and automated suggestions to eliminate gender, racial, age, or socioeconomic bias before hiring managers view ranked results.',
                        badge: 'Ethical AI',
                      },
                      {
                        title: '5. Account Security, Fraud Prevention & Bot Mitigation',
                        desc: 'Verifying recruiter business domains, preventing fraudulent job postings, mitigating automated scrapers, and enforcing Multi-Factor Authentication (MFA).',
                        badge: 'Security',
                      },
                      {
                        title: '6. Regulatory Compliance & Enterprise Reporting',
                        desc: 'Fulfilling equal opportunity employment reporting obligations, tax documentation, and responding to lawful regulatory requests.',
                        badge: 'Compliance',
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl border border-gray-150 bg-[#fbfaf8] p-4 text-xs sm:text-sm hover:border-gray-300 transition flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                      >
                        <div className="space-y-1">
                          <h4 className="font-bold text-gray-900">{item.title}</h4>
                          <p className="text-gray-600 leading-relaxed text-xs">{item.desc}</p>
                        </div>
                        <span className="self-start sm:self-center shrink-0 rounded-full bg-white border border-gray-200 px-3 py-1 text-[11px] font-semibold text-gray-700 shadow-2xs">
                          {item.badge}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 4. AI & ALGORITHMIC GOVERNANCE (STANDOUT SECTION) */}
                <section
                  id="ai-transparency"
                  className="rounded-2xl border-2 border-orange-200/90 bg-white p-6 sm:p-8 shadow-xs scroll-mt-28"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f2622a] font-bold text-xs text-white">
                        04
                      </span>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#f2622a]">
                          Pincef Ethical AI Standard
                        </span>
                        <h2
                          className="text-xl sm:text-2xl font-bold text-gray-950"
                          style={{ fontFamily: 'var(--font-manrope)' }}
                        >
                          AI & Algorithmic Governance
                        </h2>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopyLink('ai-transparency')}
                      title="Copy link to this section"
                      className="text-xs text-gray-400 hover:text-[#f2622a] transition"
                    >
                      {copiedId === 'ai-transparency' ? 'Copied!' : (
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                      )}
                    </button>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-gray-600">
                    We maintain absolute transparency regarding how our artificial intelligence models operate. We reject black-box hiring algorithms and provide clear explanations of all automated operations.
                  </p>

                  {/* Structured Table */}
                  <div className="mt-6 overflow-x-auto rounded-xl border border-gray-200">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-[#faf9f7] border-b border-gray-200 text-gray-900 font-bold uppercase tracking-wider text-[11px]">
                        <tr>
                          <th className="px-4 py-3">AI Processing Task</th>
                          <th className="px-4 py-3">Algorithmic Function</th>
                          <th className="px-4 py-3">Impact on Candidate</th>
                          <th className="px-4 py-3">Human Oversight Safeguard</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 text-gray-600">
                        <tr className="hover:bg-gray-50/70">
                          <td className="px-4 py-3 font-semibold text-gray-900">
                            CV Parsing & Skill Extraction
                          </td>
                          <td className="px-4 py-3">
                            Natural Language Processing (NLP) extracts technical competencies & work timelines.
                          </td>
                          <td className="px-4 py-3">
                            Generates structured profile; saves candidate repetitive form-filling.
                          </td>
                          <td className="px-4 py-3">
                            <span className="inline-flex items-center gap-1 text-emerald-700 font-medium">
                              ✓ Candidate can edit any extracted data
                            </span>
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50/70">
                          <td className="px-4 py-3 font-semibold text-gray-900">
                            Candidate Fit Scoring (99.8%)
                          </td>
                          <td className="px-4 py-3">
                            Vector similarity matching between job requisitions and candidate competencies.
                          </td>
                          <td className="px-4 py-3">
                            Surfaces the candidate in search results for roles matching their proven expertise.
                          </td>
                          <td className="px-4 py-3">
                            <span className="inline-flex items-center gap-1 text-[#f2622a] font-medium">
                              ✓ Advisory only; 100% human recruiter decision
                            </span>
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50/70">
                          <td className="px-4 py-3 font-semibold text-gray-900">
                            Fairness & Anti-Bias Auditing
                          </td>
                          <td className="px-4 py-3">
                            Masking demographic proxies (name, age, gender indicators) during early screening.
                          </td>
                          <td className="px-4 py-3">
                            Ensures candidate is judged solely on objective merit and relevant experience.
                          </td>
                          <td className="px-4 py-3">
                            <span className="inline-flex items-center gap-1 text-purple-700 font-medium">
                              ✓ Continuous statistical parity checks
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Crucial Ethical Commitment Callout */}
                  <div className="mt-5 rounded-xl border border-orange-300 bg-orange-50/80 p-4 sm:p-5 text-xs sm:text-sm text-gray-800">
                    <div className="flex items-start gap-3">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f2622a] text-white font-bold text-xs mt-0.5">
                        !
                      </div>
                      <div>
                        <strong className="text-gray-950 font-bold block mb-1">
                          Our Strict &ldquo;Zero Autonomous Rejection&rdquo; Commitment:
                        </strong>
                        <p className="leading-relaxed text-gray-700">
                          Pincef TalentBridge <strong>NEVER</strong> allows artificial intelligence to make automated hiring, interview cancellation, or adverse rejection decisions. AI scores are strictly advisory recommendation signals intended to assist human hiring professionals. Every formal hiring decision is executed by a human recruiter.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 5. LEGAL BASIS FOR PROCESSING */}
                <section
                  id="legal-basis"
                  className="rounded-2xl border border-gray-200/90 bg-white p-6 sm:p-8 shadow-xs scroll-mt-28"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 font-bold text-xs text-[#f2622a] border border-orange-200">
                        05
                      </span>
                      <h2
                        className="text-xl sm:text-2xl font-bold text-gray-950"
                        style={{ fontFamily: 'var(--font-manrope)' }}
                      >
                        Legal Basis for Processing (GDPR Article 6)
                      </h2>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopyLink('legal-basis')}
                      title="Copy link to this section"
                      className="text-xs text-gray-400 hover:text-[#f2622a] transition"
                    >
                      {copiedId === 'legal-basis' ? 'Copied!' : (
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                      )}
                    </button>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-gray-600">
                    Under the European General Data Protection Regulation (GDPR) and the Nigeria Data Protection Act (NDPA), we process personal data under four primary legal grounds:
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2 text-xs">
                    <div className="rounded-xl border border-gray-200 bg-[#fbfaf8] p-4">
                      <span className="font-bold text-gray-900 block text-sm">Contractual Performance</span>
                      <p className="mt-1 text-gray-600 leading-relaxed">
                        Processing necessary to provide our platform services, manage your registered account, facilitate job applications, and process subscription payments.
                      </p>
                    </div>
                    <div className="rounded-xl border border-gray-200 bg-[#fbfaf8] p-4">
                      <span className="font-bold text-gray-900 block text-sm">Legitimate Interests</span>
                      <p className="mt-1 text-gray-600 leading-relaxed">
                        Maintaining platform cybersecurity, preventing fraudulent recruiter accounts, conducting algorithmic fairness audits, and optimizing matching speed.
                      </p>
                    </div>
                    <div className="rounded-xl border border-gray-200 bg-[#fbfaf8] p-4">
                      <span className="font-bold text-gray-900 block text-sm">Explicit Consent</span>
                      <p className="mt-1 text-gray-600 leading-relaxed">
                        When you explicitly opt into candidate discovery pools, allow third-party integrations (e.g., GitHub verification), or subscribe to job alert newsletters.
                      </p>
                    </div>
                    <div className="rounded-xl border border-gray-200 bg-[#fbfaf8] p-4">
                      <span className="font-bold text-gray-900 block text-sm">Legal & Statutory Mandate</span>
                      <p className="mt-1 text-gray-600 leading-relaxed">
                        Fulfilling tax withholding rules, accounting records, equal employment opportunity data reporting, and complying with court-issued warrants.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 6. DATA SHARING & THIRD PARTIES */}
                <section
                  id="data-sharing"
                  className="rounded-2xl border border-gray-200/90 bg-white p-6 sm:p-8 shadow-xs scroll-mt-28"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 font-bold text-xs text-[#f2622a] border border-orange-200">
                        06
                      </span>
                      <h2
                        className="text-xl sm:text-2xl font-bold text-gray-950"
                        style={{ fontFamily: 'var(--font-manrope)' }}
                      >
                        Data Sharing & Third Parties
                      </h2>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopyLink('data-sharing')}
                      title="Copy link to this section"
                      className="text-xs text-gray-400 hover:text-[#f2622a] transition"
                    >
                      {copiedId === 'data-sharing' ? 'Copied!' : (
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                      )}
                    </button>
                  </div>

                  <div className="mt-4 space-y-4 text-xs sm:text-sm leading-relaxed text-gray-600">
                    <p>
                      We share your information solely in the specific contexts outlined below:
                    </p>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>
                        <strong>With Prospective Employers:</strong> When a candidate applies for an active job requisition or sets their profile to &ldquo;Public Discovery,&rdquo; authorized recruiters from verified employers can review their CV, scorecards, and contact information.
                      </li>
                      <li>
                        <strong>Cloud & Infrastructure Sub-processors:</strong> We utilize Tier-1 cloud providers including Amazon Web Services (AWS), Vercel, Supabase (PostgreSQL), and Cloudflare for hosting, database encryption, and DDoS prevention.
                      </li>
                      <li>
                        <strong>Payment Processors:</strong> Enterprise billing is securely handled via PCI-DSS compliant providers (Stripe). Pincef does not store raw credit card numbers.
                      </li>
                      <li>
                        <strong>Applicant Tracking System (ATS) Integrations:</strong> At an employer&apos;s request, application data may synchronize with external ATS tools (e.g. Workday, Greenhouse, Ashby).
                      </li>
                      <li>
                        <strong>Legal & Regulatory Authorities:</strong> Where compelled by valid subpoena, legal process, or statutory national security requirements.
                      </li>
                    </ul>

                    {/* Zero Sale of Data Guarantee */}
                    <div className="rounded-xl border border-emerald-300 bg-emerald-50/70 p-4 text-xs text-emerald-950 font-medium">
                      <div className="flex items-center gap-2">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white text-[11px] font-bold">
                          ✓
                        </span>
                        <strong className="text-emerald-900 font-bold">We Never Sell Your Personal Information</strong>
                      </div>
                      <p className="mt-1.5 text-emerald-800 leading-relaxed">
                        Pincef TalentBridge has never sold, leased, or monetized personal information to commercial data brokers, ad networks, or data aggregators, and will never do so.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 7. DATA SECURITY & ENCRYPTION */}
                <section
                  id="data-security"
                  className="rounded-2xl border border-gray-200/90 bg-white p-6 sm:p-8 shadow-xs scroll-mt-28"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 font-bold text-xs text-[#f2622a] border border-orange-200">
                        07
                      </span>
                      <h2
                        className="text-xl sm:text-2xl font-bold text-gray-950"
                        style={{ fontFamily: 'var(--font-manrope)' }}
                      >
                        Data Security & Storage
                      </h2>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopyLink('data-security')}
                      title="Copy link to this section"
                      className="text-xs text-gray-400 hover:text-[#f2622a] transition"
                    >
                      {copiedId === 'data-security' ? 'Copied!' : (
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                      )}
                    </button>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-gray-600">
                    We implement defense-in-depth architectural security to safeguard candidate records and proprietary enterprise hiring assets:
                  </p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-gray-200/80 bg-[#fbfaf8] p-4 text-xs">
                      <div className="flex items-center gap-2 text-indigo-600 font-bold">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                        AES-256 & TLS 1.3 Encryption
                      </div>
                      <p className="mt-2 text-gray-600 leading-relaxed">
                        All data at rest is encrypted using AES-256 standard. All data in transit across public and private networks is secured via Transport Layer Security (TLS 1.3).
                      </p>
                    </div>

                    <div className="rounded-xl border border-gray-200/80 bg-[#fbfaf8] p-4 text-xs">
                      <div className="flex items-center gap-2 text-[#f2622a] font-bold">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                        RBAC & Multi-Factor Auth
                      </div>
                      <p className="mt-2 text-gray-600 leading-relaxed">
                        Granular role-based access controls (RBAC) ensure team members only access necessary files. Multi-factor authentication (MFA) is strictly enforced for recruiters.
                      </p>
                    </div>

                    <div className="rounded-xl border border-gray-200/80 bg-[#fbfaf8] p-4 text-xs">
                      <div className="flex items-center gap-2 text-purple-600 font-bold">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="2" y1="12" x2="22" y2="12" />
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                        SOC 2 Type II Alignment
                      </div>
                      <p className="mt-2 text-gray-600 leading-relaxed">
                        Our cloud infrastructure meets rigorous SOC 2 Type II and ISO 27001 physical, environmental, and operational security criteria.
                      </p>
                    </div>

                    <div className="rounded-xl border border-gray-200/80 bg-[#fbfaf8] p-4 text-xs">
                      <div className="flex items-center gap-2 text-emerald-600 font-bold">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        Continuous Vulnerability Testing
                      </div>
                      <p className="mt-2 text-gray-600 leading-relaxed">
                        We perform automated daily static application security testing (SAST), software dependency scanning, and periodic external penetration audits.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 8. DATA RETENTION POLICY */}
                <section
                  id="data-retention"
                  className="rounded-2xl border border-gray-200/90 bg-white p-6 sm:p-8 shadow-xs scroll-mt-28"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 font-bold text-xs text-[#f2622a] border border-orange-200">
                        08
                      </span>
                      <h2
                        className="text-xl sm:text-2xl font-bold text-gray-950"
                        style={{ fontFamily: 'var(--font-manrope)' }}
                      >
                        Data Retention Policy
                      </h2>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopyLink('data-retention')}
                      title="Copy link to this section"
                      className="text-xs text-gray-400 hover:text-[#f2622a] transition"
                    >
                      {copiedId === 'data-retention' ? 'Copied!' : (
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                      )}
                    </button>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-gray-600">
                    We retain personal information only for as long as necessary to fulfill the objectives described in this policy, unless a longer retention period is mandated by law:
                  </p>

                  <div className="mt-5 space-y-2.5 text-xs">
                    <div className="rounded-lg border border-gray-200 bg-[#fbfaf8] p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <strong className="text-gray-900 block font-semibold">Active Candidate & Recruiter Accounts</strong>
                        <span className="text-gray-600">Retained for the lifetime of your active platform registration.</span>
                      </div>
                      <span className="text-gray-700 font-bold bg-white border border-gray-200 px-2.5 py-1 rounded-md text-[11px] shrink-0">
                        Duration of Account
                      </span>
                    </div>

                    <div className="rounded-lg border border-gray-200 bg-[#fbfaf8] p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <strong className="text-gray-900 block font-semibold">Inactive Candidate Profiles</strong>
                        <span className="text-gray-600">Accounts with no login activity for 24 months receive notice before anonymization or deletion.</span>
                      </div>
                      <span className="text-gray-700 font-bold bg-white border border-gray-200 px-2.5 py-1 rounded-md text-[11px] shrink-0">
                        24 Months Inactivity
                      </span>
                    </div>

                    <div className="rounded-lg border border-gray-200 bg-[#fbfaf8] p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <strong className="text-gray-900 block font-semibold">Financial & Tax Transactions</strong>
                        <span className="text-gray-600">Invoices, payment references, and statutory enterprise billing records.</span>
                      </div>
                      <span className="text-gray-700 font-bold bg-white border border-gray-200 px-2.5 py-1 rounded-md text-[11px] shrink-0">
                        7 Years (Statutory)
                      </span>
                    </div>

                    <div className="rounded-lg border border-gray-200 bg-[#fbfaf8] p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <strong className="text-gray-900 block font-semibold">Anonymized Machine Learning Benchmarks</strong>
                        <span className="text-gray-600">De-identified aggregate statistical tokens used for platform benchmarking.</span>
                      </div>
                      <span className="text-gray-700 font-bold bg-white border border-gray-200 px-2.5 py-1 rounded-md text-[11px] shrink-0">
                        Indefinite (Aggregated)
                      </span>
                    </div>
                  </div>
                </section>

                {/* 9. YOUR PRIVACY RIGHTS & CHOICES */}
                <section
                  id="privacy-rights"
                  className="rounded-2xl border border-gray-200/90 bg-white p-6 sm:p-8 shadow-xs scroll-mt-28"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 font-bold text-xs text-[#f2622a] border border-orange-200">
                        09
                      </span>
                      <h2
                        className="text-xl sm:text-2xl font-bold text-gray-950"
                        style={{ fontFamily: 'var(--font-manrope)' }}
                      >
                        Your Privacy Rights & Choices
                      </h2>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopyLink('privacy-rights')}
                      title="Copy link to this section"
                      className="text-xs text-gray-400 hover:text-[#f2622a] transition"
                    >
                      {copiedId === 'privacy-rights' ? 'Copied!' : (
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                      )}
                    </button>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-gray-600">
                    Regardless of your geographic location, Pincef extends comprehensive privacy rights to all Users under GDPR, CCPA/CPRA, and NDPR:
                  </p>

                  {/* 6 Rights Cards */}
                  <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-xs">
                    <div className="rounded-xl border border-gray-200 bg-[#fbfaf8] p-4">
                      <h4 className="font-bold text-gray-900 text-sm">1. Right of Access</h4>
                      <p className="mt-1 text-gray-600 leading-relaxed">
                        Request a full export of all personal data, parsed CV tags, and assessment scores we hold regarding you.
                      </p>
                    </div>

                    <div className="rounded-xl border border-gray-200 bg-[#fbfaf8] p-4">
                      <h4 className="font-bold text-gray-900 text-sm">2. Right to Rectification</h4>
                      <p className="mt-1 text-gray-600 leading-relaxed">
                        Correct or update incomplete, outdated, or inaccurate personal information directly within your account settings.
                      </p>
                    </div>

                    <div className="rounded-xl border border-gray-200 bg-[#fbfaf8] p-4">
                      <h4 className="font-bold text-gray-900 text-sm">3. Right to Erasure</h4>
                      <p className="mt-1 text-gray-600 leading-relaxed">
                        The &ldquo;Right to be Forgotten&rdquo;—request the permanent deletion of your profile, resume files, and activity logs.
                      </p>
                    </div>

                    <div className="rounded-xl border border-gray-200 bg-[#fbfaf8] p-4">
                      <h4 className="font-bold text-gray-900 text-sm">4. Right to Data Portability</h4>
                      <p className="mt-1 text-gray-600 leading-relaxed">
                        Receive your profile, skills, and application data in a machine-readable JSON or standard CSV format.
                      </p>
                    </div>

                    <div className="rounded-xl border border-gray-200 bg-[#fbfaf8] p-4">
                      <h4 className="font-bold text-gray-900 text-sm">5. Right to Object to AI Processing</h4>
                      <p className="mt-1 text-gray-600 leading-relaxed">
                        Opt out of automated semantic matching or request human verification of any algorithmic score assigned to your profile.
                      </p>
                    </div>

                    <div className="rounded-xl border border-gray-200 bg-[#fbfaf8] p-4">
                      <h4 className="font-bold text-gray-900 text-sm">6. Right to Non-Discrimination</h4>
                      <p className="mt-1 text-gray-600 leading-relaxed">
                        We guarantee that exercising your legal privacy rights will never result in degraded platform access or penalty.
                      </p>
                    </div>
                  </div>

                  {/* Action CTA */}
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-orange-200 bg-orange-50/70 p-4">
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-gray-900">
                        Ready to exercise your privacy rights?
                      </p>
                      <p className="text-xs text-gray-600">
                        Submit a Data Subject Access Request (DSAR) online or contact our DPO directly.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setRequestModalOpen(true)}
                      className="rounded-lg bg-[#f2622a] px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-[#d94f1c] transition"
                    >
                      Open Data Request Form
                    </button>
                  </div>
                </section>

                {/* 10. COOKIES & TRACKING TECHNOLOGIES */}
                <section
                  id="cookies"
                  className="rounded-2xl border border-gray-200/90 bg-white p-6 sm:p-8 shadow-xs scroll-mt-28"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 font-bold text-xs text-[#f2622a] border border-orange-200">
                        10
                      </span>
                      <h2
                        className="text-xl sm:text-2xl font-bold text-gray-950"
                        style={{ fontFamily: 'var(--font-manrope)' }}
                      >
                        Cookies & Tracking Technologies
                      </h2>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopyLink('cookies')}
                      title="Copy link to this section"
                      className="text-xs text-gray-400 hover:text-[#f2622a] transition"
                    >
                      {copiedId === 'cookies' ? 'Copied!' : (
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                      )}
                    </button>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-gray-600">
                    We use cookies and local storage tokens to ensure platform functionality, remember user preferences, and measure performance:
                  </p>

                  <div className="mt-5 space-y-3 text-xs">
                    <div className="rounded-xl border border-gray-200 bg-[#fbfaf8] p-4">
                      <span className="font-bold text-gray-900 block">Strictly Necessary Cookies</span>
                      <p className="mt-1 text-gray-600 leading-relaxed">
                        Required for secure login authentication, CSRF mitigation, and session persistence. These cannot be disabled in our systems.
                      </p>
                    </div>
                    <div className="rounded-xl border border-gray-200 bg-[#fbfaf8] p-4">
                      <span className="font-bold text-gray-900 block">Functional & Preference Cookies</span>
                      <p className="mt-1 text-gray-600 leading-relaxed">
                        Remember your preferred search filters, saved candidate views, UI theme preferences, and localized language options.
                      </p>
                    </div>
                    <div className="rounded-xl border border-gray-200 bg-[#fbfaf8] p-4">
                      <span className="font-bold text-gray-900 block">Performance & Telemetry Cookies</span>
                      <p className="mt-1 text-gray-600 leading-relaxed">
                        Collect privacy-first anonymized traffic analytics to help us identify broken links, latency spikes, and optimize server capacity.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 11. INTERNATIONAL TRANSFERS */}
                <section
                  id="international-transfers"
                  className="rounded-2xl border border-gray-200/90 bg-white p-6 sm:p-8 shadow-xs scroll-mt-28"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 font-bold text-xs text-[#f2622a] border border-orange-200">
                        11
                      </span>
                      <h2
                        className="text-xl sm:text-2xl font-bold text-gray-950"
                        style={{ fontFamily: 'var(--font-manrope)' }}
                      >
                        International Data Transfers
                      </h2>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopyLink('international-transfers')}
                      title="Copy link to this section"
                      className="text-xs text-gray-400 hover:text-[#f2622a] transition"
                    >
                      {copiedId === 'international-transfers' ? 'Copied!' : (
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                      )}
                    </button>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-gray-600">
                    Pincef TalentBridge operates globally with servers located across the European Union, the United States, and Nigeria. When transferring data across international borders, we ensure adequate protection through Standard Contractual Clauses (SCCs) approved by the European Commission and valid transfer impact assessments under the Nigeria Data Protection Act.
                  </p>
                </section>

                {/* 12. CHILDREN'S PRIVACY */}
                <section
                  id="children-privacy"
                  className="rounded-2xl border border-gray-200/90 bg-white p-6 sm:p-8 shadow-xs scroll-mt-28"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 font-bold text-xs text-[#f2622a] border border-orange-200">
                        12
                      </span>
                      <h2
                        className="text-xl sm:text-2xl font-bold text-gray-950"
                        style={{ fontFamily: 'var(--font-manrope)' }}
                      >
                        Children&apos;s Privacy
                      </h2>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopyLink('children-privacy')}
                      title="Copy link to this section"
                      className="text-xs text-gray-400 hover:text-[#f2622a] transition"
                    >
                      {copiedId === 'children-privacy' ? 'Copied!' : (
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                      )}
                    </button>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-gray-600">
                    The Platform is engineered exclusively for working professionals and enterprise hiring organizations. We do not knowingly solicit or collect personal data from individuals under 18 years of age. If we learn that a minor has registered on the Platform, we will promptly terminate the account and purge all associated records.
                  </p>
                </section>

                {/* 13. CHANGES TO THIS PRIVACY POLICY */}
                <section
                  id="policy-updates"
                  className="rounded-2xl border border-gray-200/90 bg-white p-6 sm:p-8 shadow-xs scroll-mt-28"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 font-bold text-xs text-[#f2622a] border border-orange-200">
                        13
                      </span>
                      <h2
                        className="text-xl sm:text-2xl font-bold text-gray-950"
                        style={{ fontFamily: 'var(--font-manrope)' }}
                      >
                        Changes to This Privacy Policy
                      </h2>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopyLink('policy-updates')}
                      title="Copy link to this section"
                      className="text-xs text-gray-400 hover:text-[#f2622a] transition"
                    >
                      {copiedId === 'policy-updates' ? 'Copied!' : (
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                      )}
                    </button>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-gray-600">
                    We may revise this Privacy Policy periodically to reflect technological advancements, new features, or legislative changes. When material modifications occur, we will notify registered Users via email and by displaying a prominent banner on the platform at least 30 days prior to the effective date.
                  </p>
                </section>

                {/* 14. DARK NAVY CONTACT & DPO CARD (MATCHING SCREENSHOT) */}
                <section
                  id="contact-dpo"
                  className="rounded-3xl bg-gradient-to-br from-[#0e1224] via-[#13172b] to-[#1c1836] p-8 sm:p-10 text-white border border-white/10 shadow-2xl scroll-mt-28"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-[#f2622a]/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#f2622a]">
                        <span>⚡</span> Direct Legal Support
                      </div>
                      <h2
                        className="mt-3 text-2xl sm:text-3xl font-extrabold text-white"
                        style={{ fontFamily: 'var(--font-manrope)' }}
                      >
                        Questions or Privacy Concerns?
                      </h2>
                      <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                        Our dedicated Data Protection Office and Legal Operations team are standing by to assist with any questions, audits, or rights enforcement requests.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setRequestModalOpen(true)}
                      className="self-start sm:self-center shrink-0 rounded-xl bg-[#f2622a] px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-orange-500/20 hover:bg-[#d94f1c] active:scale-[0.98] transition"
                    >
                      Submit Privacy Request
                    </button>
                  </div>

                  {/* 4 Contact Tiles Grid */}
                  <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Tile 1: Email Legal */}
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xs">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/20 text-[#f2622a] mb-3">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      </div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Email Legal Team</p>
                      <a href="mailto:privacy@pincef.com" className="mt-1 block text-sm font-bold text-white hover:text-[#f2622a] transition truncate">
                        privacy@pincef.com
                      </a>
                    </div>

                    {/* Tile 2: DPO */}
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xs">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/20 text-purple-400 mb-3">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx="8.5" cy="7" r="4" />
                          <line x1="20" y1="8" x2="20" y2="14" />
                          <line x1="23" y1="11" x2="17" y2="11" />
                        </svg>
                      </div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Data Protection Officer</p>
                      <a href="mailto:dpo@pincef.com" className="mt-1 block text-sm font-bold text-white hover:text-[#f2622a] transition truncate">
                        dpo@pincef.com
                      </a>
                    </div>

                    {/* Tile 3: Response SLA */}
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xs">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400 mb-3">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                      </div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Response SLA</p>
                      <p className="mt-1 text-sm font-bold text-white">
                        Within 48 Business Hours
                      </p>
                    </div>

                    {/* Tile 4: Headquarters */}
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xs">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400 mb-3">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Global Operations</p>
                      <p className="mt-1 text-xs font-semibold text-slate-200">
                        Pincef TalentBridge Ltd., Lagos & London
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>

        {/* MODAL: DATA SUBJECT REQUEST FORM */}
        {requestModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
            <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 sm:p-8 shadow-2xl">
              <button
                type="button"
                onClick={() => setRequestModalOpen(false)}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 text-lg"
              >
                ✕
              </button>

              <div className="flex items-center gap-2.5 text-[#f2622a]">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 border border-orange-200">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'var(--font-manrope)' }}>
                  Submit Data Subject Request
                </h3>
              </div>

              <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                Under GDPR, CCPA, and NDPR, you are entitled to inspect, export, or request deletion of your personal data.
              </p>

              {requestSubmitted ? (
                <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-center">
                  <span className="text-2xl">🎉</span>
                  <h4 className="mt-2 text-sm font-bold text-emerald-900">Request Received Successfully</h4>
                  <p className="mt-1 text-xs text-emerald-700">
                    Our Data Protection Officer has logged your ticket and will verify your identity within 48 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitRequest} className="mt-5 space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Request Type
                    </label>
                    <select
                      value={requestType}
                      onChange={(e) => setRequestType(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs text-gray-900 focus:border-[#f2622a] focus:outline-hidden"
                    >
                      <option value="access">Access & Export Personal Data (Portability)</option>
                      <option value="erasure">Permanent Data Erasure (Right to be Forgotten)</option>
                      <option value="rectification">Rectify Inaccurate Information</option>
                      <option value="restrict">Restrict or Object to AI Matching</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Associated Account Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. jane.doe@example.com"
                      value={requestEmail}
                      onChange={(e) => setRequestEmail(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs text-gray-900 focus:border-[#f2622a] focus:outline-hidden"
                    />
                  </div>

                  <div className="pt-2 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setRequestModalOpen(false)}
                      className="rounded-lg border border-gray-200 px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="rounded-lg bg-[#f2622a] px-5 py-2 text-xs font-bold text-white shadow-xs hover:bg-[#d94f1c]"
                    >
                      Submit Request
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
