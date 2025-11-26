import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "Team PRSM - Innovation Across Disciplines",
  description: "A cross-disciplinary team from SUTD combining engineering, design, and computing to solve real-world challenges",
  keywords: ["team", "portfolio", "SUTD", "engineering", "design", "computing", "innovation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
