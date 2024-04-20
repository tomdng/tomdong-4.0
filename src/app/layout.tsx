import React from "react";
import { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Tommy's Tract",
  description: "A tiny plot of internet space for me.",
  authors: { name: "Tommy Dong", url: "https://tomdong.io/" },
  icons: {
    icon: "/favicon.ico",
  },
};

// TODO: Navbar
// TODO: Font integration (what are variable fonts again?)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
