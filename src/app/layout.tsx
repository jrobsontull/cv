import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jakert.me"),
  title: {
    default: "Jake Robson-Tull — Computational Chemist & Structural Biologist",
    template: "%s | Jake Robson-Tull",
  },
  description:
    "Computational chemist and structural biologist building macrocycle modeling and cryo-EM tools at Schrödinger.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.jakert.me/",
    siteName: "Jake Robson-Tull",
    title: "Jake Robson-Tull — Computational Chemist & Structural Biologist",
    description:
      "Computational chemist and structural biologist building macrocycle modeling and cryo-EM tools at Schrödinger.",
  },
  twitter: {
    card: "summary",
    title: "Jake Robson-Tull — Computational Chemist & Structural Biologist",
    description:
      "Computational chemist and structural biologist building macrocycle modeling and cryo-EM tools at Schrödinger.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
