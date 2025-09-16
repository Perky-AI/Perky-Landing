import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Perky for AI automation solutions. Contact us for general inquiries, partnerships, or feature requests. We respond within 24 hours.",
  openGraph: {
    title: "Contact Perky - Get AI Automation Support",
    description: "Get in touch with Perky for AI automation solutions. Contact us for general inquiries, partnerships, or feature requests. We respond within 24 hours.",
    images: [
      {
        url: '/images/ai-dashboard.png',
        width: 1200,
        height: 630,
        alt: 'Contact Perky - AI Automation Support',
      },
    ],
  },
  twitter: {
    title: "Contact Perky - Get AI Automation Support",
    description: "Get in touch with Perky for AI automation solutions. Contact us for general inquiries, partnerships, or feature requests. We respond within 24 hours.",
    images: ['/images/ai-dashboard.png'],
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 