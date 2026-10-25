import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hossainahmad.dev"),
  title: "Hossain Ahmad — Full-Stack Web Developer",
  description:
    "Official portfolio of Hossain Ahmad, Full-Stack Web Developer and Assistant Programmer at Gazipur City Corporation. Building modern, high-performance web applications with React, Next.js, TypeScript, Node.js, and MongoDB.",
  keywords: [
    "Hossain Ahmad",
    "Full-Stack Web Developer",
    "Assistant Programmer",
    "Gazipur City Corporation",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Tailwind CSS",
  ],
  authors: [{ name: "Hossain Ahmad" }],
  creator: "Hossain Ahmad",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/hossainahmad",
    title: "Hossain Ahmad — Full-Stack Web Developer",
    description:
      "Full-Stack Web Developer & Assistant Programmer at Gazipur City Corporation. Building modern, high-performance web applications.",
    siteName: "Hossain Ahmad Portfolio",
    images: [
      {
        url: "/covers/og-site.png",
        width: 1200,
        height: 630,
        alt: "Hossain Ahmad Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hossain Ahmad — Full-Stack Web Developer",
    description:
      "Full-Stack Web Developer & Assistant Programmer at Gazipur City Corporation.",
    creator: "@hossain888",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#090d16] text-slate-100 font-sans">
        {children}
      </body>
    </html>
  );
}
