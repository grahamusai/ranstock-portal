import React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Ranstock - Corporate Wellness Platform",
  description:
    "Empower your team with data-driven wellness programs. Track engagement, run workshops, and build a healthier workplace culture.",
};

export const viewport: Viewport = {
  themeColor: "#3a8a5c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
