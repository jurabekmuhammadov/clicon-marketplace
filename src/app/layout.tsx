"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import { useHeaderStore } from "@/store/store";
import { metadata } from "@/data/metadata";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const { results } = useHeaderStore();

  return (
    <html lang="en">
      <head>
        <title>{metadata.title?.toString()}</title>
        <meta name="description" content={metadata.description?.toString()} />
      </head>
      <body className={`${inter.className} ${results.length > 0 ? "overflow-hidden" : "overflow-auto"}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
