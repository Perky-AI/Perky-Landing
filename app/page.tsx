"use client"

import { HeroSection } from "@/components/sections/hero-section"

import { FeaturesSection } from "@/components/sections/features-section"
import { DepthSection } from "@/components/sections/depth-section"
import { MetricsSection } from "@/components/sections/metrics-section"
import { ComparisonChart } from "@/components/sections/comparison-chart"
import { IntegrationsSection } from "@/components/sections/integrations-section"

import { FaqSection } from "@/components/sections/faq-section"
import { CtaBanner } from "@/components/sections/cta-banner"
import { FooterSection } from "@/components/sections/footer-section"
import { ScrollReveal } from "@/components/scroll-reveal"
import Script from "next/script"

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Perky",
    "description": "Supercharge your business with intelligent automation using multi-AI agent workflows. Streamline operations, boost productivity, and scale efficiently with our AI-powered platform.",
    "url": "https://perky.com",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150"
    },
    "provider": {
      "@type": "Organization",
      "name": "Perky",
      "url": "https://perky.com",
      "logo": "https://perky.com/Perky_logo_last.png"
    },
    "featureList": [
      "Multi-AI Agent Workflows",
      "Intelligent Automation",
      "Business Process Optimization",
      "Productivity Enhancement",
      "Scalable AI Solutions"
    ]
  }

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Perky",
    "url": "https://perky.com",
    "logo": "https://perky.com/Perky_logo_last.png",
    "description": "Leading provider of multi-AI agent workflow solutions for business automation",
    "sameAs": [
      "https://twitter.com/perky",
      "https://linkedin.com/company/perky",
      "https://github.com/perky"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "contact@perky.com"
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Script
        id="organization-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      
      <HeroSection />

      <FeaturesSection />
      <ScrollReveal delay={200}>
        <DepthSection />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <MetricsSection />
      </ScrollReveal>
      <ComparisonChart />
      <ScrollReveal delay={200}>
        <IntegrationsSection />
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <FaqSection />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <CtaBanner />
      </ScrollReveal>
      <FooterSection />
    </main>
  )
}
