"use client"

import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import React, { useEffect, useMemo, useState } from "react"
import dynamic from "next/dynamic"

const SparklesCore = dynamic(() => import("@/components/core/sparkles-core").then(mod => mod.SparklesCore), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-muted/30" />,
})

export function HeroSection() {
  const { t, language } = useLanguage()

  const rotatingWords = language === 'tr'
    ? [
        'otomatikleştiriyor',
        'dönüştürüyor',
        'hızlandırıyor',
        'optimize ediyor',
        'devrimleştiriyor',
        'akıcılaştırıyor',
      ]
    : [
        'automates',
        'transforms',
        'accelerates',
        'optimizes',
        'revolutionizes',
        'streamlines',
      ]

  const [wordIndex, setWordIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % rotatingWords.length)
        setIsVisible(true)
      }, 200)
    }, 2000)

    return () => clearInterval(interval)
  }, [rotatingWords.length])

  const sparklesBackground = useMemo(
    () => (
      <SparklesCore
        id="perky-particles"
        background="transparent"
        minSize={0.8}
        maxSize={2.5}
        particleDensity={140}
        className="w-full h-full"
        particleColor="#9B30FF"
        speed={2}
      />
    ),
    [],
  )

  return (
    <section className="relative w-full py-16 md:py-20 lg:py-24 overflow-hidden bg-transparent">
      {/* Sparkles Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {sparklesBackground}
      </div>

      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 items-center gap-12">
          <div>
            <ScrollReveal direction="left" delay={150}>
              <div className="text-left space-y-5" style={{ paddingBottom: '0.5rem' }}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-relaxed" style={{ minHeight: '1.4em', overflow: 'visible' }}>
                  {language === 'tr' ? 'Perky AI iş süreçlerinizi' : 'Perky AI'}{' '}
                  <span
                    className={
                      `inline-block bg-gradient-to-r from-[#9B30FF] to-[#1E90FF] bg-clip-text text-transparent transition-all duration-200 ` +
                      (isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1')
                    }
                    style={{ paddingBottom: '0.2em' }}
                  >
                    {rotatingWords[wordIndex]}
                  </span>
                  {language === 'en' ? ' your business processes' : ''}
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl lg:text-2xl">
                  {t('hero.subheadline')}
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="w-full sm:w-auto bg-gradient-to-r from-[#9B30FF] to-[#1E90FF] text-white hover:opacity-95 font-bold px-6 py-3 shadow-lg shadow-[rgba(30,144,255,0.25)]">
                    <Link href="/pricing">{t('hero.demoButton')}</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-white text-foreground hover:bg-white/90 shadow-md border-transparent">
                    <Link href="/features">{t('hero.learnMore')}</Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
          <div>
            <ScrollReveal direction="right" delay={250}>
              <div className="relative w-full mt-6 md:mt-0">
                {/* Ellipse frame */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                  <span className="block w-[290%] md:w-[80%] h-[78%] md:h-[130%] rounded-full border border-white/20 dark:border-white/10 shadow-[0_0_40px_rgba(155,48,255,0.25)]" />
                  {/* Orbiting agents */}
                  <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <div className="relative w-[352%] md:w-[96.8%] h-[94.6%] md:h-[157.3%] origin-center animate-orbit-350-310" style={{ transformOrigin: '50% 50%' }}>
                      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                        <Image src="/agent1.png" alt="Agent 1" width={56} height={56} className="h-10 w-10 md:h-14 md:w-14 transform scale-[2.5] bg-transparent" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <div className="relative w-[352%] md:w-[96.8%] h-[94.6%] md:h-[157.3%] origin-center animate-orbit-10-50" style={{ transformOrigin: '50% 50%' }}>
                      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                        <Image src="/agent2.png" alt="Agent 2" width={56} height={56} className="h-10 w-10 md:h-14 md:w-14 transform scale-[2.5] bg-transparent" />
                      </div>
                    </div>
                  </div>
                </div>
                <Image
                  src="/illus1.png"
                  alt="Perky hero illustration"
                  width={1280}
                  height={720}
                  className="w-[46%] md:w-[60%] h-auto object-contain mx-auto relative z-10"
                  priority
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}

