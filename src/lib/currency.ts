export interface CurrencyConfig {
  code: string;
  symbol: string;
  name: string;
  flag: string;
  countryName: string;
  countryCodes: string[];
  defaultRate: number; // 1 USD = X Currency
  decimals: number;
  roundingStep?: number;
}

export const CURRENCIES: Record<string, CurrencyConfig> = {
  USD: {
    code: 'USD',
    symbol: '$',
    name: 'US Dollar',
    flag: '🇺🇸',
    countryName: 'United States',
    countryCodes: ['US'],
    defaultRate: 1,
    decimals: 0,
  },
  NGN: {
    code: 'NGN',
    symbol: '₦',
    name: 'Nigerian Naira',
    flag: '🇳🇬',
    countryName: 'Nigeria',
    countryCodes: ['NG'],
    defaultRate: 1350,
    decimals: 0,
    roundingStep: 500, // round to nearest 500 for clean prices
  },
  GBP: {
    code: 'GBP',
    symbol: '£',
    name: 'British Pound',
    flag: '🇬🇧',
    countryName: 'United Kingdom',
    countryCodes: ['GB', 'UK'],
    defaultRate: 0.76,
    decimals: 0,
  },
  EUR: {
    code: 'EUR',
    symbol: '€',
    name: 'Euro',
    flag: '🇪🇺',
    countryName: 'European Union',
    countryCodes: ['DE', 'FR', 'ES', 'IT', 'NL', 'IE', 'BE', 'PT', 'AT', 'FI'],
    defaultRate: 0.89,
    decimals: 0,
  },
  CAD: {
    code: 'CAD',
    symbol: 'CA$',
    name: 'Canadian Dollar',
    flag: '🇨🇦',
    countryName: 'Canada',
    countryCodes: ['CA'],
    defaultRate: 1.35,
    decimals: 0,
  },
  AUD: {
    code: 'AUD',
    symbol: 'A$',
    name: 'Australian Dollar',
    flag: '🇦🇺',
    countryName: 'Australia',
    countryCodes: ['AU'],
    defaultRate: 1.48,
    decimals: 0,
  },
  KES: {
    code: 'KES',
    symbol: 'KSh',
    name: 'Kenyan Shilling',
    flag: '🇰🇪',
    countryName: 'Kenya',
    countryCodes: ['KE'],
    defaultRate: 129,
    decimals: 0,
    roundingStep: 50,
  },
  GHS: {
    code: 'GHS',
    symbol: 'GH₵',
    name: 'Ghanaian Cedi',
    flag: '🇬🇭',
    countryName: 'Ghana',
    countryCodes: ['GH'],
    defaultRate: 15.5,
    decimals: 0,
  },
  ZAR: {
    code: 'ZAR',
    symbol: 'R',
    name: 'South African Rand',
    flag: '🇿🇦',
    countryName: 'South Africa',
    countryCodes: ['ZA'],
    defaultRate: 18.2,
    decimals: 0,
  },
};

/**
 * Finds the default currency for a given ISO 2-letter country code.
 */
export function getCurrencyForCountry(countryCode: string): CurrencyConfig {
  const code = countryCode.toUpperCase();
  for (const curr of Object.values(CURRENCIES)) {
    if (curr.countryCodes.includes(code)) {
      return curr;
    }
  }
  return CURRENCIES.USD;
}

/**
 * Formats a USD amount into the target currency using the provided exchange rate.
 * The primary anchor is always USD ($).
 */
export function formatCurrencyPrice(
  amountUsd: number,
  currency: CurrencyConfig,
  exchangeRate: number
): {
  formatted: string;
  rawAmount: number;
  usdEquivalent: string;
} {
  if (amountUsd === 0) {
    return {
      formatted: `${currency.symbol}0`,
      rawAmount: 0,
      usdEquivalent: '$0',
    };
  }

  let converted = amountUsd * exchangeRate;

  // Apply clean rounding if configured (e.g. for NGN, round to nearest 500)
  if (currency.roundingStep && currency.roundingStep > 1) {
    converted = Math.round(converted / currency.roundingStep) * currency.roundingStep;
  } else {
    converted = Math.round(converted);
  }

  const formattedNumber = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: currency.decimals,
    minimumFractionDigits: currency.decimals,
  }).format(converted);

  return {
    formatted: `${currency.symbol}${formattedNumber}`,
    rawAmount: converted,
    usdEquivalent: `$${amountUsd}`,
  };
}
