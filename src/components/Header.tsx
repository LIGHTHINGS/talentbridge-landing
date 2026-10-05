'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
  activePage?: 'platform' | 'features' | 'recruiters' | 'candidates' | 'pricing';
}

const NAV_ITEMS = [
  { label: 'Platform', href: '/', key: 'platform' },
  { label: 'Features', href: '/features', key: 'features' },
  { label: 'Recruiters', href: '/recruiters', key: 'recruiters' },
  { label: 'Candidates', href: '/candidates', key: 'candidates' },
  { label: 'Pricing', href: '/pricing', key: 'pricing' },
];

export default function Header({ activePage = 'platform' }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e7e5e1] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#12121c] border-2 border-orange-500/20 shadow-sm transition group-hover:scale-105">
            <div className="h-3.5 w-3.5 rounded-full bg-[#f2622a] ring-2 ring-orange-200/50" />
          </div> */}
          <div>
            <Image src='/pincef-logo.png' height={40} width={50}  alt='logo'/>
          </div>
          <span
            className="text-lg font-bold tracking-tight text-[#14141f]"
            style={{ fontFamily: 'var(--font-manrope)' }}
          >
            Pincef TalentBridge
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = activePage === item.key;
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`relative py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-[#f2622a] font-semibold'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-[22px] left-0 right-0 h-[2.5px] rounded-full bg-[#f2622a]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/candidates"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 transition hover:bg-gray-50 hover:border-gray-300 shadow-xs"
          >
            Find Jobs
          </Link>
          <Link
            href="/recruiters"
            className="rounded-lg bg-[#f2622a] px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-[#d94f1c] active:scale-[0.98]"
          >
            Start Hiring
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-700 md:hidden hover:bg-gray-50"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? (
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-gray-200 bg-white px-4 py-5 shadow-lg md:hidden">
          <nav className="flex flex-col space-y-3">
            {NAV_ITEMS.map((item) => {
              const isActive = activePage === item.key;
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-base font-medium transition ${
                    isActive
                      ? 'bg-orange-50 text-[#f2622a] font-semibold'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="h-2 w-2 rounded-full bg-[#f2622a]" />
                  )}
                </Link>
              );
            })}
          </nav>
          <div className="mt-5 flex flex-col gap-2.5 pt-4 border-t border-gray-100">
            <Link
              href="/candidates"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center rounded-lg border border-gray-200 bg-white py-2.5 text-sm font-medium text-gray-800 shadow-xs hover:bg-gray-50"
            >
              Find Jobs
            </Link>
            <Link
              href="/recruiters"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center rounded-lg bg-[#f2622a] py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#d94f1c]"
            >
              Start Hiring
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
