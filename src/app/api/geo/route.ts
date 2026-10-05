import { NextRequest, NextResponse } from 'next/server';
import { CURRENCIES, getCurrencyForCountry } from '@/lib/currency';

export async function GET(request: NextRequest) {
  // Check hosting headers for country
  let countryCode =
    request.headers.get('x-vercel-ip-country') ||
    request.headers.get('cf-ipcountry') ||
    request.headers.get('x-country-code') ||
    '';

  // If running locally or header not present, we can attempt a fast external IP lookup
  let ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || '';

  if (!countryCode) {
    try {
      const countryRes = await fetch('https://api.country.is/', {
        next: { revalidate: 86400 }, // cache 24h
      });
      if (countryRes.ok) {
        const data = await countryRes.json();
        if (data.country) {
          countryCode = data.country;
          ip = data.ip || ip;
        }
      }
    } catch {
      // Fallback silently if offline
    }
  }

  // Fetch latest exchange rates with 1 hour cache
  const rates: Record<string, number> = {};
  // Default to built-in rates first
  for (const [code, config] of Object.entries(CURRENCIES)) {
    rates[code] = config.defaultRate;
  }

  try {
    const rateRes = await fetch('https://open.er-api.com/v6/latest/USD', {
      next: { revalidate: 3600 }, // 1 hour caching
    });
    if (rateRes.ok) {
      const rateData = await rateRes.json();
      if (rateData && rateData.rates) {
        for (const code of Object.keys(CURRENCIES)) {
          if (rateData.rates[code]) {
            rates[code] = rateData.rates[code];
          }
        }
      }
    }
  } catch {
    // Keep default rates if external API unreachable
  }

  const detectedConfig = countryCode ? getCurrencyForCountry(countryCode) : CURRENCIES.USD;

  return NextResponse.json({
    country: countryCode || 'US',
    ip,
    currency: detectedConfig.code,
    rates,
    base: 'USD',
  });
}
