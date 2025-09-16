import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTop } from "@/components/scroll-to-top"
import { LanguageProvider } from "@/lib/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Perky - Multi-AI Agent Workflows | Intelligent Business Automation",
    template: "%s | Perky"
  },
  description: "Supercharge your business with intelligent automation using multi-AI agent workflows. Streamline operations, boost productivity, and scale efficiently with our AI-powered platform.",
  keywords: [
    "AI automation",
    "multi-agent workflows", 
    "business automation",
    "artificial intelligence",
    "workflow automation",
    "AI agents",
    "productivity tools",
    "business efficiency",
    "automation platform",
    "AI-powered workflows"
  ],
  authors: [{ name: "Perky Team" }],
  creator: "Perky",
  publisher: "Perky",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://perky.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://perky.com',
    siteName: 'Perky',
    title: 'Perky - Multi-AI Agent Workflows | Intelligent Business Automation',
    description: 'Supercharge your business with intelligent automation using multi-AI agent workflows. Streamline operations, boost productivity, and scale efficiently.',
    images: [
      {
        url: '/images/ai-dashboard.png',
        width: 1200,
        height: 630,
        alt: 'Perky AI Dashboard - Multi-AI Agent Workflows',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Perky - Multi-AI Agent Workflows | Intelligent Business Automation',
    description: 'Supercharge your business with intelligent automation using multi-AI agent workflows.',
    images: ['/images/ai-dashboard.png'],
    creator: '@perky',
    site: '@perky',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/perky-logo-min.png', type: 'image/png' },
    ],
    apple: [
      { url: '/perky-logo-min.png', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Perky" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <Navigation />
            {children}
            <ScrollToTop />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
