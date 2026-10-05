import type { Metadata } from 'next';
import PricingContent from './PricingContent';

export const metadata: Metadata = {
  title: 'Pricing — Pincef TalentBridge',
  description:
    'Simple, transparent, and predictable investment for AI-powered hiring. Convert prices dynamically to Nigerian Naira (₦), US Dollars ($), and more based on live exchange rates.',
};

export default function PricingPage() {
  return <PricingContent />;
}
