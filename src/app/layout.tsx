import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pincef TalentBridge — Smarter Recruitment. Better Talent. Faster Hiring.",
  description:
    "An AI-powered recruitment platform that helps recruiters screen, match, rank, and evaluate candidates with human-centric precision at scale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
