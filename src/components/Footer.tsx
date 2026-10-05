import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
export default function Footer() {
  return (
    <footer className="w-full border-t border-[#e7e5e1] bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              {/* <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#12121c] border-2 border-orange-500/20">
                <div className="h-3 w-3 rounded-full bg-[#f2622a]" />
              </div> */}
              <div>
                <Image src='/pincef-logo.png' height={40} width={50} alt='logo' />
              </div>
              <span
                className="text-base font-bold tracking-tight text-[#14141f]"
                style={{ fontFamily: 'var(--font-manrope)' }}
              >
                Pincef TalentBridge
              </span>
            </Link>

            <div className="space-y-2 text-xs leading-relaxed text-gray-500 max-w-sm">
              <p>© {`${new Date().getFullYear()}`} Pincef TalentBridge. Powered by AI Intelligence.</p>
              <p>
                Precision in Recruitment. Building the future of talent
                acquisition with ethical AI.
              </p>
            </div>
          </div>

          {/* Column 1: Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="/about"
                  className="text-xs sm:text-sm text-gray-500 transition hover:text-[#f2622a]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-xs sm:text-sm text-gray-500 transition hover:text-[#f2622a]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">
              Legal
            </h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="/privacy"
                  className="text-xs sm:text-sm text-gray-500 transition hover:text-[#f2622a]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-xs sm:text-sm text-gray-500 transition hover:text-[#f2622a]"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">
              Support
            </h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="/help"
                  className="text-xs sm:text-sm text-gray-500 transition hover:text-[#f2622a]"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-gray-500 transition hover:text-[#f2622a]"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-gray-500 transition hover:text-[#f2622a]"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
