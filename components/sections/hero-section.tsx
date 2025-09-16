"use client"

import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative w-full py-12 md:py-20 lg:py-24 overflow-hidden">
      {/* Enhanced background with brand elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-muted/30 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-blue/10 via-transparent to-brand-purple/10 -z-10" />
      
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left" delay={200}>
            <div className="space-y-4 text-center md:text-left">
              
              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
                {t('hero.title')}
              </h1>

              {/* Subheadline */}
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-brand-purple leading-relaxed">
                {t('hero.subheadline')}
              </h2>
              
              {/* Key Benefits */}
              <div className="space-y-3 max-w-[600px] mx-auto md:mx-0">
                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 bg-brand-blue rounded-full mt-1.5 flex-shrink-0"></div>
                  <p className="text-foreground text-base font-medium leading-relaxed">{t('hero.benefit1')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 bg-brand-purple rounded-full mt-1.5 flex-shrink-0"></div>
                  <p className="text-foreground text-base font-medium leading-relaxed">{t('hero.benefit2')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 bg-gradient-to-r from-brand-blue to-brand-purple rounded-full mt-1.5 flex-shrink-0"></div>
                  <p className="text-foreground text-base font-medium leading-relaxed">{t('hero.benefit3')}</p>
                </div>
              </div>

              {/* Social Proof */}
              <div className="flex flex-wrap items-center gap-3 p-3 bg-gradient-to-r from-brand-blue/5 to-brand-purple/5 border border-brand-blue/10 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-black bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">10x</span>
                  <span className="text-xs font-medium text-foreground">{t('hero.stats.productivity')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-black text-brand-purple">24/7</span>
                  <span className="text-xs font-medium text-foreground">{t('hero.stats.uptime')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-black text-brand-blue">70%</span>
                  <span className="text-xs font-medium text-foreground">{t('hero.stats.savings')}</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button asChild size="lg" className="w-full sm:w-auto bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-blue/90 hover:to-brand-purple/90 text-white font-bold text-base px-6 py-3 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0">
                  <Link href="/contact">
                    {t('hero.demoButton')}
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-2 border-brand-purple/30 text-brand-purple hover:bg-brand-purple/10 hover:border-brand-purple/50 font-semibold text-base px-6 py-3 transition-all duration-300">
                  <Link href="/features">
                    {t('hero.learnMore')}
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={400}>
            <div className="relative w-full">
              <Image
                src="/images/Hero_image.png"
                alt="Hero Image"
                width={1200}
                height={900}
                className="w-full h-auto min-h-[350px] max-h-[500px] object-cover rounded-xl shadow-2xl hover-scale transition-transform duration-300"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
