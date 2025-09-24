"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, TrendingUp, Zap } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function MetricsSection() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLDivElement>(null)
  const clockRef = useRef<HTMLDivElement>(null)
  const hourglassRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight))

      if (clockRef.current) {
        const rotation = scrollProgress * 720
        clockRef.current.style.transform = `rotate(${rotation}deg)`
      }

      if (hourglassRef.current) {
        const scale = Math.max(0.5, 1 - scrollProgress * 0.5)
        const opacity = Math.max(0.3, 1 - scrollProgress * 0.7)
        hourglassRef.current.style.transform = `scale(${scale})`
        hourglassRef.current.style.opacity = opacity.toString()
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container px-4 md:px-6">
        <div
          ref={sectionRef}
          className="relative mb-2 md:mb-2 bg-gradient-to-r from-violet-100 to-purple-100 dark:from-gray-800 dark:to-violet-900 rounded-xl overflow-hidden"
        >
          <div className="px-6 md:px-10 py-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              {t('home.metrics.banner.title')}
            </h2>
            <div className="flex justify-center items-center gap-10 md:gap-16">
              <div className="relative">
                <div className="w-24 h-24 md:w-32 md:h-32 border-8 border-violet-300 dark:border-violet-600 rounded-full relative">
                  <div
                    ref={clockRef}
                    className="absolute inset-4 flex items-center justify-center"
                    style={{ willChange: "transform" }}
                  >
                    <div className="w-1 h-8 md:h-10 bg-violet-600 absolute origin-bottom" style={{ bottom: "50%" }}></div>
                    <div className="w-0.5 h-6 md:h-8 bg-violet-800 absolute origin-bottom" style={{ bottom: "50%" }}></div>
                    <div className="w-3 h-3 bg-violet-600 rounded-full absolute"></div>
                  </div>
                </div>
                <p className="mt-3 text-sm md:text-base font-semibold text-gray-700 dark:text-gray-300">{t('home.metrics.banner.before')}</p>
              </div>

              <div className="text-3xl md:text-4xl text-violet-600">→</div>

              <div className="relative">
                <div ref={hourglassRef} className="w-16 h-24 md:w-24 md:h-32 relative" style={{ willChange: "transform, opacity" }}>
                  <div className="w-full h-3 md:h-4 bg-violet-400 rounded-t-full"></div>
                  <div className="w-full h-16 md:h-24 bg-gradient-to-b from-violet-200 to-violet-400 relative">
                    <div className="absolute inset-x-0 top-0 h-8 md:h-12 bg-violet-300 animate-pulse"></div>
                  </div>
                  <div className="w-full h-3 md:h-4 bg-violet-400 rounded-b-full"></div>
                  <div className="absolute inset-0 opacity-50">
                    <div className="w-1 h-1 bg-violet-600 absolute top-2 left-2 animate-ping"></div>
                    <div className="w-1 h-1 bg-purple-600 absolute top-4 right-3 animate-ping" style={{ animationDelay: "0.2s" }}></div>
                    <div className="w-1 h-1 bg-violet-600 absolute bottom-6 left-4 animate-ping" style={{ animationDelay: "0.4s" }}></div>
                    <div className="w-1 h-1 bg-purple-600 absolute bottom-3 right-2 animate-ping" style={{ animationDelay: "0.6s" }}></div>
                  </div>
                </div>
                <p className="mt-3 text-sm md:text-base font-semibold text-violet-600">{t('home.metrics.banner.after')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center bg-gradient-to-br from-brand-blue/5 to-brand-blue/10 border border-brand-blue/20">
            <CardHeader>
              <CardTitle className="text-4xl font-black text-brand-blue">90%</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-medium flex items-center justify-center gap-2 text-foreground">
                <Zap className="w-5 h-5 text-brand-blue" /> {t('home.metrics.faster.title')}
              </p>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-br from-brand-purple/5 to-brand-purple/10 border border-brand-purple/20">
            <CardHeader>
              <CardTitle className="text-4xl font-black text-brand-purple">50%</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-medium flex items-center justify-center gap-2 text-foreground">
                <TrendingUp className="w-5 h-5 text-brand-purple" /> {t('home.metrics.reduction.title')}
              </p>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-br from-brand-blue/5 to-brand-purple/5 border border-brand-blue/20">
            <CardHeader>
              <CardTitle className="text-4xl font-black bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">3x</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-medium flex items-center justify-center gap-2 text-foreground">
                <Users className="w-5 h-5 bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent" /> {t('home.metrics.productivity.title')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
