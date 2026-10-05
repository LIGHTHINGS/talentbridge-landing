import type { Metadata } from 'next';
import PrivacyContent from './PrivacyContent';

export const metadata: Metadata = {
  title: 'Privacy Policy — Pincef TalentBridge',
  description:
    'Read the Pincef TalentBridge Privacy Policy to learn how we protect your personal information, maintain ethical AI transparency, and uphold global privacy standards.',
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
