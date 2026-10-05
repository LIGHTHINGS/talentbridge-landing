'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TERMS_SECTIONS = [
  { id: 'acceptance', label: '1. Acceptance of Terms' },
  { id: 'eligibility', label: '2. Eligibility & Accounts' },
  { id: 'services-license', label: '3. Platform Services & License' },
  { id: 'candidate-terms', label: '4. Candidate Obligations' },
  { id: 'recruiter-terms', label: '5. Employer & Recruiter Rules' },
  { id: 'ai-disclaimers', label: '6. AI Advisory Disclaimers' },
  { id: 'billing-plans', label: '7. Subscriptions & Payments' },
  { id: 'intellectual-property', label: '8. Intellectual Property' },
  { id: 'prohibited-conduct', label: '9. Prohibited Activities' },
  { id: 'third-party-integrations', label: '10. Third-Party ATS Services' },
  { id: 'disclaimers', label: '11. Warranty Disclaimers' },
  { id: 'liability', label: '12. Limitation of Liability' },
  { id: 'termination', label: '13. Termination & Suspension' },
  { id: 'dispute-resolution', label: '14. Governing Law & Disputes' },
  { id: 'terms-contact', label: '15. Contact Legal Operations' },
];

export default function TermsContent() {
  const [activeSection, setActiveSection] = useState('acceptance');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

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

    TERMS_SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleCopyLink = (id: string) => {
    if (typeof window !== 'undefined') {
      const url = `${window.location.origin}/terms#${id}`;
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

  const filteredSections = TERMS_SECTIONS.filter((s) =>
    s.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
                <span>✦</span> Legal Agreement
              </div>

              {/* Title */}
              <h1
                className="mt-4 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl"
                style={{ fontFamily: 'var(--font-manrope)' }}
              >
                Terms of <span className="text-[#f2622a]">Service</span>
              </h1>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-600">
                These Terms of Service (&ldquo;Terms&rdquo;) form a binding legal contract between you and Pincef TalentBridge, establishing the terms and conditions under which you may use our platform, APIs, and AI hiring features.
              </p>

              {/* Metadata */}
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
              </div>

              {/* Switcher & Actions */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <div className="inline-flex rounded-xl bg-gray-100 p-1 border border-gray-200">
                  <Link
                    href="/privacy"
                    className="flex items-center gap-2 rounded-lg px-4 py-2 text-xs sm:text-sm font-medium text-gray-600 hover:text-gray-900 transition"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    Privacy Policy
                  </Link>
                  <Link
                    href="/terms"
                    className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-xs sm:text-sm font-bold text-[#f2622a] shadow-xs"
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
                  <span className="text-[11px] font-semibold text-gray-500">15 Sections</span>
                </div>

                {/* Filter input */}
                <div className="mt-3 relative">
                  <input
                    type="text"
                    placeholder="Search terms..."
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
                  <p className="font-bold text-[#f2622a]">Legal Questions?</p>
                  <p className="mt-1 text-[11px] text-gray-600">
                    Reach out for enterprise Master Service Agreements (MSAs):
                  </p>
                  <a
                    href="mailto:legal@pincef.com"
                    className="mt-2 inline-flex items-center gap-1 font-bold text-gray-900 hover:text-[#f2622a] underline text-[11px]"
                  >
                    legal@pincef.com →
                  </a>
                </div>
              </aside>

              {/* RIGHT CONTENT COLUMN */}
              <div className="space-y-8">
                {/* 1. ACCEPTANCE */}
                <section
                  id="acceptance"
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
                        Acceptance of Terms
                      </h2>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopyLink('acceptance')}
                      className="text-xs text-gray-400 hover:text-[#f2622a] transition"
                    >
                      {copiedId === 'acceptance' ? 'Copied!' : (
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                      )}
                    </button>
                  </div>

                  <div className="mt-4 space-y-4 text-xs sm:text-sm leading-relaxed text-gray-600">
                    <p>
                      By creating an account, accessing, or browsing Pincef TalentBridge, you expressly agree to be bound by these Terms of Service and our incorporated Privacy Policy. If you are entering into this agreement on behalf of a company, organization, or other legal entity, you represent and warrant that you possess the requisite authority to bind that entity.
                    </p>
                    <p>
                      If you do not agree to these Terms in their entirety, you must immediately discontinue your use of our website, platform services, and APIs.
                    </p>
                  </div>
                </section>

                {/* 2. ELIGIBILITY & ACCOUNTS */}
                <section
                  id="eligibility"
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
                        Eligibility & Account Registration
                      </h2>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopyLink('eligibility')}
                      className="text-xs text-gray-400 hover:text-[#f2622a] transition"
                    >
                      {copiedId === 'eligibility' ? 'Copied!' : (
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                      )}
                    </button>
                  </div>

                  <div className="mt-4 space-y-4 text-xs sm:text-sm leading-relaxed text-gray-600">
                    <p>
                      To register an account on TalentBridge, you must be at least 18 years of age and legally competent to enter into binding contracts. You agree to provide accurate, truthful, and complete information during registration and keep your account details current.
                    </p>
                    <p>
                      You are solely responsible for maintaining the confidentiality of your login credentials and for all activities conducted under your account. You agree to notify us immediately of any unauthorized access or security breach at <a href="mailto:security@pincef.com" className="text-[#f2622a] underline font-semibold">security@pincef.com</a>.
                    </p>
                  </div>
                </section>

                {/* 3. PLATFORM SERVICES & LICENSE */}
                <section
                  id="services-license"
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
                        Platform Services & License Grant
                      </h2>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopyLink('services-license')}
                      className="text-xs text-gray-400 hover:text-[#f2622a] transition"
                    >
                      {copiedId === 'services-license' ? 'Copied!' : (
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                      )}
                    </button>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-gray-600">
                    Subject to compliance with these Terms, Pincef grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Platform for your internal recruitment operations (if an employer) or personal employment search (if a candidate).
                  </p>
                </section>

                {/* 4. CANDIDATE OBLIGATIONS */}
                <section
                  id="candidate-terms"
                  className="rounded-2xl border border-gray-200/90 bg-white p-6 sm:p-8 shadow-xs scroll-mt-28"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 font-bold text-xs text-[#f2622a] border border-orange-200">
                        04
                      </span>
                      <h2
                        className="text-xl sm:text-2xl font-bold text-gray-950"
                        style={{ fontFamily: 'var(--font-manrope)' }}
                      >
                        Candidate Terms & Representation
                      </h2>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopyLink('candidate-terms')}
                      className="text-xs text-gray-400 hover:text-[#f2622a] transition"
                    >
                      {copiedId === 'candidate-terms' ? 'Copied!' : (
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                      )}
                    </button>
                  </div>

                  <div className="mt-4 space-y-4 text-xs sm:text-sm leading-relaxed text-gray-600">
                    <p>
                      Candidates agree that all credentials, employment histories, academic degrees, and work samples submitted on the Platform are genuine, accurate, and not misleading. Uploading forged certificates, misrepresenting employment timelines, or impersonating another professional constitutes grounds for immediate account termination.
                    </p>
                  </div>
                </section>

                {/* 5. EMPLOYER & RECRUITER RULES */}
                <section
                  id="recruiter-terms"
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
                        Employer & Recruiter Responsibilities
                      </h2>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopyLink('recruiter-terms')}
                      className="text-xs text-gray-400 hover:text-[#f2622a] transition"
                    >
                      {copiedId === 'recruiter-terms' ? 'Copied!' : (
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                      )}
                    </button>
                  </div>

                  <div className="mt-4 space-y-4 text-xs sm:text-sm leading-relaxed text-gray-600">
                    <p>
                      Recruiters and hiring companies warrant that all published job postings represent genuine, currently open employment opportunities. Employers agree to abide by all applicable equal employment opportunity laws, labor regulations, and fair workplace standards.
                    </p>
                    <p>
                      Candidate resumes and contact information obtained through TalentBridge may be used strictly for direct recruitment purposes and may not be redistributed, sold, or added to unsolicited bulk marketing campaigns.
                    </p>
                  </div>
                </section>

                {/* 6. AI ADVISORY DISCLAIMERS */}
                <section
                  id="ai-disclaimers"
                  className="rounded-2xl border-2 border-orange-200/90 bg-white p-6 sm:p-8 shadow-xs scroll-mt-28"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f2622a] font-bold text-xs text-white">
                        06
                      </span>
                      <h2
                        className="text-xl sm:text-2xl font-bold text-gray-950"
                        style={{ fontFamily: 'var(--font-manrope)' }}
                      >
                        AI Features, Matching & Advisory Disclaimers
                      </h2>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopyLink('ai-disclaimers')}
                      className="text-xs text-gray-400 hover:text-[#f2622a] transition"
                    >
                      {copiedId === 'ai-disclaimers' ? 'Copied!' : (
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                      )}
                    </button>
                  </div>

                  <div className="mt-4 space-y-4 text-xs sm:text-sm leading-relaxed text-gray-600">
                    <p>
                      <strong>Decision-Support Only:</strong> Pincef TalentBridge provides artificial intelligence scores, candidate summaries, and similarity matching as informative, non-binding decision-support indicators.
                    </p>
                    <div className="rounded-xl border border-orange-200 bg-orange-50/70 p-4 text-xs text-gray-800">
                      <strong>Explicit Notice:</strong> Pincef does not make final employment decisions, offer employment guarantees, or endorse any candidate or employer. Hiring teams retain sole responsibility for conducting background verifications, interviews, and final recruitment determinations.
                    </div>
                  </div>
                </section>

                {/* 7. SUBSCRIPTIONS & PAYMENTS */}
                <section
                  id="billing-plans"
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
                        Subscriptions, Billing & Cancellation
                      </h2>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopyLink('billing-plans')}
                      className="text-xs text-gray-400 hover:text-[#f2622a] transition"
                    >
                      {copiedId === 'billing-plans' ? 'Copied!' : (
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                      )}
                    </button>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-gray-600">
                    Paid subscriptions (e.g. Professional at $89/mo or Enterprise Custom) are billed in advance on a recurring monthly or annual basis. You may cancel your subscription at any time via your billing dashboard; cancellations take effect at the conclusion of your current billing cycle.
                  </p>
                </section>

                {/* 8. INTELLECTUAL PROPERTY */}
                <section
                  id="intellectual-property"
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
                        Intellectual Property & User Content
                      </h2>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopyLink('intellectual-property')}
                      className="text-xs text-gray-400 hover:text-[#f2622a] transition"
                    >
                      {copiedId === 'intellectual-property' ? 'Copied!' : (
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                      )}
                    </button>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-gray-600">
                    You retain full ownership of all resumes, job descriptions, and multimedia content uploaded to the platform. By uploading content, you grant Pincef a worldwide license to host, parse, and display such content solely to provide platform services. All underlying platform code, proprietary AI algorithms, designs, and brand marks remain the exclusive property of Pincef TalentBridge Ltd.
                  </p>
                </section>

                {/* 9. PROHIBITED CONDUCT */}
                <section
                  id="prohibited-conduct"
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
                        Prohibited Activities
                      </h2>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopyLink('prohibited-conduct')}
                      className="text-xs text-gray-400 hover:text-[#f2622a] transition"
                    >
                      {copiedId === 'prohibited-conduct' ? 'Copied!' : (
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                      )}
                    </button>
                  </div>

                  <div className="mt-4 space-y-2 text-xs sm:text-sm text-gray-600">
                    <p>Users may not:</p>
                    <ul className="space-y-1.5 list-disc pl-5">
                      <li>Use automated bots, web scrapers, or crawlers to extract candidate database records.</li>
                      <li>Reverse-engineer, decompile, or extract proprietary neural network weights or algorithms.</li>
                      <li>Publish fraudulent, predatory, or misleading job requisitions.</li>
                      <li>Circumvent account rate limits, authentication safeguards, or access control headers.</li>
                    </ul>
                  </div>
                </section>

                {/* 10. THIRD PARTY ATS */}
                <section
                  id="third-party-integrations"
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
                        Third-Party Integrations & ATS Connectors
                      </h2>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopyLink('third-party-integrations')}
                      className="text-xs text-gray-400 hover:text-[#f2622a] transition"
                    >
                      {copiedId === 'third-party-integrations' ? 'Copied!' : (
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                      )}
                    </button>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-gray-600">
                    TalentBridge integrates with external software including Greenhouse, Workday, and Google Calendar. Pincef is not liable for service interruptions or data handling performed by independent third-party platforms.
                  </p>
                </section>

                {/* 11. DISCLAIMERS */}
                <section
                  id="disclaimers"
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
                        Warranty Disclaimers
                      </h2>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopyLink('disclaimers')}
                      className="text-xs text-gray-400 hover:text-[#f2622a] transition"
                    >
                      {copiedId === 'disclaimers' ? 'Copied!' : (
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                      )}
                    </button>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-gray-600">
                    The platform is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind, whether express or implied. Pincef does not warrant that the platform will be uninterrupted, error-free, or completely secure.
                  </p>
                </section>

                {/* 12. LIMITATION OF LIABILITY */}
                <section
                  id="liability"
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
                        Limitation of Liability
                      </h2>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopyLink('liability')}
                      className="text-xs text-gray-400 hover:text-[#f2622a] transition"
                    >
                      {copiedId === 'liability' ? 'Copied!' : (
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                      )}
                    </button>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-gray-600">
                    To the maximum extent permitted by applicable law, Pincef shall not be liable for any indirect, incidental, punitive, or consequential damages, or loss of profits, data, or goodwill. In no event shall Pincef&apos;s aggregate liability exceed the greater of $100 or the total amounts paid by you to Pincef during the preceding twelve (12) months.
                  </p>
                </section>

                {/* 13. TERMINATION */}
                <section
                  id="termination"
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
                        Termination & Suspension
                      </h2>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopyLink('termination')}
                      className="text-xs text-gray-400 hover:text-[#f2622a] transition"
                    >
                      {copiedId === 'termination' ? 'Copied!' : (
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                      )}
                    </button>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-gray-600">
                    You may terminate your account at any time. We reserve the right to suspend or terminate accounts that breach these Terms or engage in fraudulent activities without prior notice.
                  </p>
                </section>

                {/* 14. DISPUTE RESOLUTION */}
                <section
                  id="dispute-resolution"
                  className="rounded-2xl border border-gray-200/90 bg-white p-6 sm:p-8 shadow-xs scroll-mt-28"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 font-bold text-xs text-[#f2622a] border border-orange-200">
                        14
                      </span>
                      <h2
                        className="text-xl sm:text-2xl font-bold text-gray-950"
                        style={{ fontFamily: 'var(--font-manrope)' }}
                      >
                        Governing Law & Dispute Resolution
                      </h2>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopyLink('dispute-resolution')}
                      className="text-xs text-gray-400 hover:text-[#f2622a] transition"
                    >
                      {copiedId === 'dispute-resolution' ? 'Copied!' : (
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                      )}
                    </button>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-gray-600">
                    These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria and the United Kingdom, without regard to conflicts of law principles. Any dispute arising out of or in connection with these Terms shall be resolved via binding commercial arbitration.
                  </p>
                </section>

                {/* 15. CONTACT LEGAL (MATCHING SCREENSHOT) */}
                <section
                  id="terms-contact"
                  className="rounded-3xl bg-gradient-to-br from-[#0e1224] via-[#13172b] to-[#1c1836] p-8 sm:p-10 text-white border border-white/10 shadow-2xl scroll-mt-28"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-[#f2622a]/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#f2622a]">
                        <span>⚡</span> Enterprise Legal Inquiries
                      </div>
                      <h2
                        className="mt-3 text-2xl sm:text-3xl font-extrabold text-white"
                        style={{ fontFamily: 'var(--font-manrope)' }}
                      >
                        Legal Operations & Inquiries
                      </h2>
                      <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                        For questions regarding these Terms, Master Service Agreements (MSAs), or bespoke enterprise terms, contact our counsel.
                      </p>
                    </div>

                    <a
                      href="mailto:legal@pincef.com"
                      className="self-start sm:self-center shrink-0 rounded-xl bg-[#f2622a] px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-orange-500/20 hover:bg-[#d94f1c] active:scale-[0.98] transition"
                    >
                      Contact Legal Team
                    </a>
                  </div>

                  {/* 4 Contact Tiles */}
                  <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xs">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Legal Counsel</p>
                      <a href="mailto:legal@pincef.com" className="mt-1 block text-sm font-bold text-white hover:text-[#f2622a] transition truncate">
                        legal@pincef.com
                      </a>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xs">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Enterprise Contracts</p>
                      <a href="mailto:enterprise@pincef.com" className="mt-1 block text-sm font-bold text-white hover:text-[#f2622a] transition truncate">
                        enterprise@pincef.com
                      </a>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xs">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Response SLA</p>
                      <p className="mt-1 text-sm font-bold text-white">Within 48 Business Hours</p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xs">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Global Offices</p>
                      <p className="mt-1 text-xs font-semibold text-slate-200">Pincef TalentBridge Ltd., Lagos & London</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
