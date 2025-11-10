import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Team Portfolio - Modern & Sleek",
  description: "A modern and minimalistic team portfolio showcasing our talented members",
  keywords: ["team", "portfolio", "modern", "web development"],
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
      </body>
    </html>
  );
}
