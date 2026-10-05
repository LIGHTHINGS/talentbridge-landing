'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  CURRENCIES,
  CurrencyConfig,
  formatCurrencyPrice,
} from '@/lib/currency';

export default function PricingContent() {
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyConfig>(CURRENCIES.USD);
  const [rates, setRates] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    for (const [code, curr] of Object.entries(CURRENCIES)) {
      initial[code] = curr.defaultRate;
    }
    return initial;
  });
  const [isAutoDetected, setIsAutoDetected] = useState(true);
  const [detectedCountryName, setDetectedCountryName] = useState('Detecting...');
  const [billingCycle, setBillingCycle] = useState<'annual' | 'monthly'>('annual');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // IP Geolocation and live exchange rates detection
  useEffect(() => {
    // 1. Check if user already has a saved manual preference
    const savedCode = localStorage.getItem('talentbridge_currency');
    const isManual = localStorage.getItem('talentbridge_currency_manual') === 'true';

    async function detectGeoAndRates() {
      try {
        // Fetch geo & rates from internal API route
        const res = await fetch('/api/geo');
        if (res.ok) {
          const data = await res.json();

          // Update exchange rates
          if (data.rates) {
            setRates((prev) => ({ ...prev, ...data.rates }));
          }

          if (isManual && savedCode && CURRENCIES[savedCode]) {
            setSelectedCurrency(CURRENCIES[savedCode]);
            setIsAutoDetected(false);
            setDetectedCountryName(data.country || 'Custom');
          } else if (data.currency && CURRENCIES[data.currency]) {
            const matchedCurrency = CURRENCIES[data.currency];
            setSelectedCurrency(matchedCurrency);
            setIsAutoDetected(true);
            setDetectedCountryName(matchedCurrency.countryName);
          }
          return;
        }
      } catch {
        // Fallback to client-side checks
      }

      // Fallback 2: Client-side timezone check (e.g. Africa/Lagos -> Nigeria)
      try {
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
        if (timeZone.toLowerCase().includes('lagos') || timeZone.toLowerCase().includes('nigeria')) {
          if (!isManual) {
            setSelectedCurrency(CURRENCIES.NGN);
            setIsAutoDetected(true);
            setDetectedCountryName('Nigeria');
          }
          return;
        }
        if (timeZone.toLowerCase().includes('london')) {
          if (!isManual) {
            setSelectedCurrency(CURRENCIES.GBP);
            setIsAutoDetected(true);
            setDetectedCountryName('United Kingdom');
          }
          return;
        }
      } catch {
        // Keep default USD
      }
    }

    detectGeoAndRates();
  }, []);

  const handleSelectCurrency = (currency: CurrencyConfig) => {
    setSelectedCurrency(currency);
    setIsAutoDetected(false);
    setDropdownOpen(false);
    localStorage.setItem('talentbridge_currency', currency.code);
    localStorage.setItem('talentbridge_currency_manual', 'true');
  };

  const handleResetToAuto = async () => {
    localStorage.removeItem('talentbridge_currency');
    localStorage.removeItem('talentbridge_currency_manual');
    setIsAutoDetected(true);

    try {
      const res = await fetch('/api/geo');
      if (res.ok) {
        const data = await res.json();
        if (data.currency && CURRENCIES[data.currency]) {
          const matched = CURRENCIES[data.currency];
          setSelectedCurrency(matched);
          setDetectedCountryName(matched.countryName);
        }
      }
    } catch {
      // Fallback to timezone
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
      if (tz.toLowerCase().includes('lagos')) {
        setSelectedCurrency(CURRENCIES.NGN);
        setDetectedCountryName('Nigeria');
      } else {
        setSelectedCurrency(CURRENCIES.USD);
        setDetectedCountryName('United States');
      }
    }
  };

  const currentRate = rates[selectedCurrency.code] || selectedCurrency.defaultRate;

  // Base plan definitions anchored to USD ($)
  const starterPriceObj = formatCurrencyPrice(0, selectedCurrency, currentRate);
  
  // Professional: $89 / month billed annually, or $109 / month billed monthly
  const proUsdAmount = billingCycle === 'annual' ? 89 : 109;
  const proPriceObj = formatCurrencyPrice(proUsdAmount, selectedCurrency, currentRate);

  const plans = [
    {
      name: 'Starter',
      price: starterPriceObj.formatted,
      period: 'Forever free',
      usdReference: null,
      description: 'Ideal for early-stage startups and individual hiring managers.',
      highlighted: false,
      features: [
        'Up to 3 active job postings',
        'AI CV parsing & structured summaries',
        'Basic candidate ranking',
        'Standard email notifications',
        'Community support',
      ],
      cta: 'Get Started Free',
      ctaLink: '/recruiters',
    },
    {
      name: 'Professional',
      price: proPriceObj.formatted,
      period: billingCycle === 'annual' ? 'per month / billed annually' : 'per month / billed monthly',
      usdReference: selectedCurrency.code !== 'USD' ? `≈ $${proUsdAmount} USD / month` : null,
      description: 'Designed for fast-growing teams seeking surgical hiring precision.',
      highlighted: true,
      features: [
        'Unlimited active job postings',
        'Advanced semantic AI matching (99.8%)',
        'Predictive hiring velocity analytics',
        'Automated interview calendar scheduling',
        'Bias detection & fairness auditing',
        'Priority email & Slack support',
      ],
      cta: 'Start 14-Day Free Trial',
      ctaLink: '/recruiters',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'tailored to your scale',
      usdReference: null,
      description: 'Custom configurations, ATS integrations, and dedicated intelligence for enterprise HR.',
      highlighted: false,
      features: [
        'Custom hiring pipeline workflows',
        'Full ATS integration (Workday, Greenhouse, Ashby)',
        'Granular team permissions & audit logs',
        'SOC2 Type II compliance & custom SLA',
        'Dedicated talent intelligence architect',
      ],
      cta: 'Contact Sales',
      ctaLink: '#contact',
    },
  ];

  const faqs = [
    {
      question: 'How is the local currency price calculated?',
      answer:
        'All Pincef TalentBridge subscriptions are anchored to US Dollars ($ USD) as the primary global exchange baseline. When you access our platform from Nigeria, the UK, Europe, or other regions, our system detects your location and dynamically calculates the equivalent price in your local currency (such as Nigerian Naira ₦) using live foreign exchange rates.',
    },
    {
      question: 'Can I pay in Nigerian Naira (₦)?',
      answer:
        'Yes! For customers located in Nigeria, we support direct payments in Nigerian Naira (₦) through local Mastercard, Visa, Verve debit cards, bank transfers, and USSD via our regional payment gateways, as well as international cards through Stripe.',
    },
    {
      question: 'Can I choose to pay in USD ($) instead of my local currency?',
      answer:
        'Absolutely. You can change your preferred currency at any time using the currency dropdown selector located above the pricing tables. If you prefer to settle your invoices in USD ($), simply choose USD.',
    },
    {
      question: 'Will my subscription fee change if exchange rates fluctuate?',
      answer:
        'Subscriptions billed in USD remain completely fixed in USD. For customers billed in local currency (such as NGN), recurring renewals reflect the prevailing interbank exchange rate at the time of renewal, ensuring you are always charged a fair equivalent without hidden currency conversion fees.',
    },
    {
      question: 'Is there any commitment or cancellation penalty?',
      answer:
        'No commitment required. You can upgrade, downgrade, or cancel your subscription at any time directly from your billing settings. If you cancel, your access continues until the end of your prepaid billing period.',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#14141f]">
      {/* Header */}
      <Header activePage="pricing" />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-grid-light pt-12 pb-16 sm:pt-20 sm:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-[#f2622a]">
              <span>✦</span> Transparent Global Pricing
            </div>

            <h1
              className="mt-4 text-4xl font-extrabold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl leading-[1.15]"
              style={{ fontFamily: 'var(--font-manrope)' }}
            >
              Simple, Predictable <span className="text-[#f2622a]">Investment</span>.
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-gray-600">
              Pick the plan that fits your hiring velocity. Converted automatically to your local currency with live exchange rates anchored to USD.
            </p>

            {/* LOCATION & CURRENCY CONTROLLER BAR */}
            <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-orange-200/90 bg-gradient-to-r from-orange-50/70 via-white to-orange-50/50 p-4 sm:p-5 shadow-xs text-left">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                {/* Location Detection Indicator */}
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white border border-orange-200 text-2xl shadow-xs">
                    {selectedCurrency.flag}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#f2622a]">
                        {isAutoDetected ? 'Auto-Detected Location' : 'Selected Currency'}
                      </span>
                      {isAutoDetected && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-800">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
                          {detectedCountryName}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-700 mt-0.5">
                      Showing prices in <strong>{selectedCurrency.name} ({selectedCurrency.symbol})</strong>
                      {selectedCurrency.code !== 'USD' && (
                        <span className="text-gray-500 font-medium">
                          {' '}• 1 USD ≈ {selectedCurrency.symbol}{currentRate.toLocaleString(undefined, { maximumFractionDigits: selectedCurrency.decimals })}
                        </span>
                      )}
                    </p>
                  </div>
                </div>

                {/* Currency Switcher Dropdown */}
                <div className="relative flex items-center gap-2 self-start sm:self-center" ref={dropdownRef}>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-3.5 py-2 text-xs font-bold text-gray-800 shadow-xs hover:border-[#f2622a] hover:bg-orange-50/40 transition"
                      aria-expanded={dropdownOpen}
                    >
                      <span>{selectedCurrency.flag}</span>
                      <span>{selectedCurrency.code} ({selectedCurrency.symbol})</span>
                      <svg className="h-3.5 w-3.5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                      </svg>
                    </button>

                    {/* Dropdown Menu */}
                    {dropdownOpen && (
                      <div className="absolute right-0 z-50 mt-2 w-64 rounded-2xl border border-gray-200 bg-white p-2 shadow-2xl animate-in fade-in-50 duration-100">
                        <div className="px-2 py-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-400 border-b border-gray-100">
                          Select Currency (Base: USD $)
                        </div>
                        <div className="mt-1 max-h-60 overflow-y-auto space-y-1">
                          {Object.values(CURRENCIES).map((curr) => {
                            const isSelected = selectedCurrency.code === curr.code;
                            const rate = rates[curr.code] || curr.defaultRate;
                            return (
                              <button
                                key={curr.code}
                                type="button"
                                onClick={() => handleSelectCurrency(curr)}
                                className={`w-full flex items-center justify-between rounded-xl px-2.5 py-2 text-xs transition ${
                                  isSelected
                                    ? 'bg-orange-50 font-bold text-[#f2622a]'
                                    : 'text-gray-700 hover:bg-gray-50'
                                }`}
                              >
                                <div className="flex items-center gap-2">
                                  <span className="text-base">{curr.flag}</span>
                                  <div className="text-left">
                                    <p className="font-semibold text-gray-900 leading-tight">
                                      {curr.code} ({curr.symbol})
                                    </p>
                                    <p className="text-[10px] text-gray-500 leading-tight">
                                      {curr.name}
                                    </p>
                                  </div>
                                </div>
                                {curr.code !== 'USD' && (
                                  <span className="text-[10px] text-gray-400 font-mono">
                                    ≈{curr.symbol}{rate > 100 ? Math.round(rate) : rate.toFixed(2)}
                                  </span>
                                )}
                              </button>
                            );
                          })}
                        </div>

                        {!isAutoDetected && (
                          <div className="mt-2 pt-2 border-t border-gray-100">
                            <button
                              type="button"
                              onClick={handleResetToAuto}
                              className="w-full text-center rounded-lg py-1.5 text-[11px] font-semibold text-[#f2622a] hover:bg-orange-50 transition"
                            >
                              ⟲ Reset to Auto-Detect
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* BILLING CYCLE TOGGLE (Annual vs Monthly) */}
            <div className="mt-8 flex items-center justify-center gap-3">
              <span className={`text-xs sm:text-sm font-semibold ${billingCycle === 'monthly' ? 'text-gray-950 font-bold' : 'text-gray-500'}`}>
                Billed Monthly
              </span>
              <button
                type="button"
                onClick={() => setBillingCycle(billingCycle === 'annual' ? 'monthly' : 'annual')}
                className="relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-hidden"
                style={{ backgroundColor: billingCycle === 'annual' ? '#f2622a' : '#d1d5db' }}
                role="switch"
                aria-checked={billingCycle === 'annual'}
                aria-label="Toggle annual billing"
              >
                <span
                  className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                    billingCycle === 'annual' ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
              <div className="flex items-center gap-1.5">
                <span className={`text-xs sm:text-sm font-semibold ${billingCycle === 'annual' ? 'text-gray-950 font-bold' : 'text-gray-500'}`}>
                  Billed Annually
                </span>
                <span className="rounded-full bg-orange-100 px-2.5 py-0.5 text-[11px] font-bold text-[#f2622a] border border-orange-200">
                  Save 20%
                </span>
              </div>
            </div>

            {/* PRICING CARDS GRID */}
            <div className="mt-12 grid gap-8 md:grid-cols-3 text-left">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all ${
                    plan.highlighted
                      ? 'border-2 border-[#f2622a] bg-[#0e1224] text-white shadow-2xl scale-[1.02]'
                      : 'border border-gray-200/90 bg-white text-gray-900 shadow-xs hover:shadow-md'
                  }`}
                >
                  {plan.highlighted && (
                    <span className="absolute -top-3.5 right-6 rounded-full bg-[#f2622a] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-sm">
                      Most Popular
                    </span>
                  )}

                  <div>
                    <h3
                      className={`text-xl font-bold ${
                        plan.highlighted ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {plan.name}
                    </h3>
                    <p
                      className={`mt-2 text-xs sm:text-sm leading-relaxed ${
                        plan.highlighted ? 'text-slate-300' : 'text-gray-500'
                      }`}
                    >
                      {plan.description}
                    </p>

                    {/* Price and currency display */}
                    <div className="mt-6">
                      <div className="flex items-baseline gap-1.5 flex-wrap">
                        <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                          {plan.price}
                        </span>
                        <span
                          className={`text-xs ${
                            plan.highlighted ? 'text-slate-400' : 'text-gray-500'
                          }`}
                        >
                          {plan.period}
                        </span>
                      </div>

                      {/* USD baseline note if converted to local currency */}
                      {plan.usdReference && (
                        <div
                          className={`mt-1.5 text-[11px] font-medium ${
                            plan.highlighted ? 'text-orange-300' : 'text-[#f2622a]'
                          }`}
                        >
                          {plan.usdReference}
                        </div>
                      )}
                    </div>

                    <div
                      className={`my-6 h-px w-full ${
                        plan.highlighted ? 'bg-white/10' : 'bg-gray-100'
                      }`}
                    />

                    {/* Features List */}
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <span
                            className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs ${
                              plan.highlighted
                                ? 'bg-orange-500/20 text-[#f2622a]'
                                : 'bg-orange-50 text-[#f2622a]'
                            }`}
                          >
                            ✓
                          </span>
                          <span
                            className={`text-xs sm:text-sm ${
                              plan.highlighted ? 'text-slate-200' : 'text-gray-600'
                            }`}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <Link
                      href={plan.ctaLink}
                      className={`block w-full text-center rounded-xl py-3 text-sm font-semibold transition active:scale-[0.98] ${
                        plan.highlighted
                          ? 'bg-[#f2622a] text-white hover:bg-[#d94f1c] shadow-lg shadow-orange-500/20'
                          : 'border border-gray-200 bg-white text-gray-900 hover:bg-gray-50 hover:border-gray-300'
                      }`}
                    >
                      {plan.cta}
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* NIGERIA / REGIONAL PAYMENT METHODS BADGE */}
            {selectedCurrency.code === 'NGN' && (
              <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4 sm:p-5 text-left flex items-start gap-3.5">
                <span className="text-2xl mt-0.5">🇳🇬</span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-emerald-950">
                    Seamless Nigerian Payment Options
                  </h4>
                  <p className="mt-1 text-xs text-emerald-800 leading-relaxed">
                    Pay conveniently in <strong>Nigerian Naira (₦)</strong> using Nigerian debit cards (Mastercard, Visa, Verve), direct bank transfer, or USSD via Paystack and Stripe checkout. Zero foreign exchange markup.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS SECTION */}
        <section className="py-16 sm:py-24 bg-white border-t border-gray-100">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-[#f2622a]">
                Everything You Need to Know
              </span>
              <h2
                className="mt-3 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl"
                style={{ fontFamily: 'var(--font-manrope)' }}
              >
                Frequently Asked Questions
              </h2>
              <p className="mt-3 text-sm text-gray-600">
                Clear answers regarding currencies, billing, conversions, and payment methods.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-gray-200 bg-[#fbfaf8] overflow-hidden transition"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-5 text-left text-sm font-bold text-gray-900 hover:text-[#f2622a] transition"
                    >
                      <span>{faq.question}</span>
                      <span className={`ml-4 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-[#f2622a]' : 'text-gray-400'}`}>
                        ▼
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
