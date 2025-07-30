import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";
import { Circles } from "@/components/Circles";
import { Suspense } from "react";
import { StructuredData, OrganizationStructuredData, WebsiteStructuredData } from "@/components/StructuredData";

import { SpeedInsights } from "@vercel/speed-insights/next";
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Minh Nhat - Frontend Developer",
    template: "%s | Minh Nhat"
  },
  description:
    "Minh Nhat is a passionate frontend developer specializing in React, Next.js, and modern web technologies. Creating engaging, responsive, and user-friendly web experiences with clean code and great design.",
  keywords: [
    "Minh Nhat",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript",
    "TypeScript",
    "Web Developer",
    "UI/UX Designer",
    "Responsive Design",
    "Portfolio"
  ],
  authors: [{ name: "Minh Nhat", url: "https://portfolio-fatalmistakehubs-projects.vercel.app" }],
  creator: "Minh Nhat",
  publisher: "Minh Nhat",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-fatalmistakehubs-projects.vercel.app",
    siteName: "Minh Nhat - Frontend Developer",
    title: "Minh Nhat - Frontend Developer & UI/UX Designer",
    description:
      "Passionate frontend developer specializing in React, Next.js, and modern web technologies. Creating engaging, responsive, and user-friendly web experiences.",
    images: [
      {
        url: "https://portfolio-fatalmistakehubs-projects.vercel.app/images/avt.jpg",
        width: 1200,
        height: 630,
        alt: "Minh Nhat - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Minh Nhat - Frontend Developer & UI/UX Designer",
    description:
      "Passionate frontend developer specializing in React, Next.js, and modern web technologies. Creating engaging, responsive, and user-friendly web experiences.",
    creator: "@minhnhat_dev",
    images: [
      {
        url: "https://portfolio-fatalmistakehubs-projects.vercel.app/images/avt.jpg",
        alt: "Minh Nhat - Frontend Developer",
      },
    ],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://portfolio-fatalmistakehubs-projects.vercel.app",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="google-site-verification" content="2x3KQk18neDmpdtVWTsMxh4BpyiRQtx16ZizkXzNZ-U" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://portfolio-fatalmistakehubs-projects.vercel.app" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Minh Nhat Portfolio" />
        <StructuredData />
        <OrganizationStructuredData />
        <WebsiteStructuredData />
      </head>
      <body
        className={twMerge(
          inter.className,
          "flex antialiased h-screen overflow-hidden bg-gray-100"
        )}
      >
        <Sidebar />
        <div className="lg:pl-2 lg:pt-2 bg-gray-100 flex-1 overflow-y-auto">
          <div className="relative flex-1 bg-white min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-200 overflow-y-auto">
            {children}
            <SpeedInsights />
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
