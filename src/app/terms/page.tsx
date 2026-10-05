import type { Metadata } from 'next';
import TermsContent from './TermsContent';

export const metadata: Metadata = {
  title: 'Terms of Service — Pincef TalentBridge',
  description:
    'Review the terms of service, platform usage licenses, employer responsibilities, candidate representation rules, and ethical AI standards for Pincef TalentBridge.',
};

export default function TermsPage() {
  return <TermsContent />;
}
