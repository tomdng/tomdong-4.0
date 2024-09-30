import React from "react";
import { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";

import "./globals.css";

export const metadata: Metadata = {
  title: "Tommy's Site",
  description: "A tiny plot of internet space for me.",
  authors: { name: "Tommy Dong", url: "https://tomdong.io/" },
  icons: {
    icon: "favicon.ico",
  },
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-serif",
});

// TODO: Navbar
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable}`}>
      <body className="dark:bg-black dark:text-white">{children}</body>
    </html>
  );
}
