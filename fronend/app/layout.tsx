import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Instrument_Serif } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"
import { Header } from "@/components/header"
import { PageLoader } from "@/components/loading-spinner"

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument-serif",
  weight: "400",
})

export const metadata: Metadata = {
  title: "URL Shortener - Create Short Links Fast & Free",
  description: "Transform long URLs into short, shareable links with our powerful URL shortener. Fast, reliable, and completely free with analytics tracking.",
  keywords: ["URL shortener", "link shortener", "short URL", "custom short links", "free URL shortener", "link analytics"],
  authors: [{ name: "URL Shortener Team" }],
  creator: "URL Shortener",
  publisher: "URL Shortener",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://url-shorter.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "URL Shortener - Create Short Links Fast & Free",
    description: "Transform long URLs into short, shareable links with our powerful URL shortener. Fast, reliable, and completely free with analytics tracking.",
    url: "https://url-shorter.vercel.app",
    siteName: "URL Shortener",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "URL Shortener - Create Short Links",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "URL Shortener - Create Short Links Fast & Free",
    description: "Transform long URLs into short, shareable links with our powerful URL shortener. Fast, reliable, and completely free with analytics tracking.",
    images: ["/twitter-image.png"],
  },
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
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} antialiased`}>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Header />
        <Suspense fallback={<PageLoader />}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
