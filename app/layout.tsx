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
  metadataBase: new URL("https://champ.now"), // 🔁 change to your domain

  title: {
    default: "Champ | Full Stack Developer",
    template: "%s | Champ",
  },

  description:
    "Full-stack developer building high-performance, reliable web applications. Available for freelance and contract work.",

  keywords: [
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Web Developer Portfolio",
    "Freelance Developer",
    "Website Performance Optimization",
  ],

  authors: [{ name: "Champ" }],
  creator: "Champ",

  openGraph: {
    title: "Champ | Full Stack Developer",
    description:
      "Building fast, scalable, and reliable web applications. Let's work together.",
    url: "https://champ.now",
    siteName: "Champ Portfolio",
    images: [
      {
        url: "/og-image.png", // 🔁 create this (important)
        width: 1200,
        height: 630,
        alt: "Champ Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Champ | Full Stack Developer",
    description:
      "Building fast, scalable, and reliable web applications.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://champ.now",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
