"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Mail, Calendar, BarChart3, MessageCircle, Clock, Zap, TrendingUp } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

interface ComparisonFeature {
  id: string
  icon: React.ComponentType<{ className?: string }>
  titleKey: string
  withoutAI: {
    timeKey: string
    effort: number
    descriptionKey: string
    tooltip: string
  }
  withAI: {
    timeKey: string
    effort: number
    descriptionKey: string
    tooltip: string
  }
  timeSavedKey: string
}

const comparisonData: ComparisonFeature[] = [
  {
    id: "email",
    icon: Mail,
    titleKey: 'home.comparison.email.title',
    withoutAI: {
      timeKey: 'comparison.email.without.time',
      effort: 85,
      descriptionKey: 'home.comparison.email.without.description',
      tooltip: "Manually reading 200+ emails, crafting responses, organizing by priority",
    },
    withAI: {
      timeKey: 'comparison.email.with.time',
      effort: 15,
      descriptionKey: 'home.comparison.email.with.description',
      tooltip: "AI categorizes emails, drafts responses, schedules follow-ups automatically",
    },
    timeSavedKey: 'comparison.email.saved',
  },
  {
    id: "scheduling",
    icon: Calendar,
    titleKey: 'home.comparison.scheduling.title',
    withoutAI: {
      timeKey: 'comparison.scheduling.without.time',
      effort: 75,
      descriptionKey: 'home.comparison.scheduling.without.description',
      tooltip: "Multiple email exchanges, timezone conflicts, calendar checking",
    },
    withAI: {
      timeKey: 'comparison.scheduling.with.time',
      effort: 10,
      descriptionKey: 'home.comparison.scheduling.with.description',
      tooltip: "AI finds optimal times, handles conflicts, sends invites automatically",
    },
    timeSavedKey: 'comparison.scheduling.saved',
  },
  {
    id: "reporting",
    icon: BarChart3,
    titleKey: 'home.comparison.reporting.title',
    withoutAI: {
      timeKey: 'comparison.reporting.without.time',
      effort: 95,
      descriptionKey: 'home.comparison.reporting.without.description',
      tooltip: "Collecting data from multiple sources, creating charts, writing summaries",
    },
    withAI: {
      timeKey: 'comparison.reporting.with.time',
      effort: 8,
      descriptionKey: 'home.comparison.reporting.with.description',
      tooltip: "AI pulls data, creates visualizations, generates executive summaries",
    },
    timeSavedKey: 'comparison.reporting.saved',
  },
  {
    id: "support",
    icon: MessageCircle,
    titleKey: 'home.comparison.support.title',
    withoutAI: {
      timeKey: 'comparison.support.without.time',
      effort: 80,
      descriptionKey: 'home.comparison.support.without.description',
      tooltip: "Reading tickets, researching solutions, crafting responses",
    },
    withAI: {
      timeKey: 'comparison.support.with.time',
      effort: 20,
      descriptionKey: 'home.comparison.support.with.description',
      tooltip: "AI handles 80% of tickets, escalates complex issues to humans",
    },
    timeSavedKey: 'comparison.support.saved',
  },
]

function SimpleProgressBar({
  value,
  className = "",
  animated = false,
}: { value: number; className?: string; animated?: boolean }) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setDisplayValue(value)
      }, 300)
      return () => clearTimeout(timer)
    } else {
      setDisplayValue(value)
    }
  }, [value, animated])

  return (
    <div className="w-full bg-gray-200 rounded-full h-8 overflow-hidden">
      <div
        className={`h-full rounded-full transition-all duration-1500 ease-out ${className}`}
        style={{ width: `${displayValue}%` }}
      />
    </div>
  )
}

function Tooltip({ content, children }: { content: string; children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseEnter = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
    setIsVisible(true)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  const handleMouseLeave = () => {
    setIsVisible(false)
  }

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isVisible && (
        <div
          className="fixed z-50 px-3 py-2 text-sm text-white bg-gray-900 rounded-lg shadow-lg pointer-events-none max-w-xs whitespace-normal animate-fade-in"
          style={{
            left: mousePosition.x + 15,
            top: mousePosition.y - 50,
          }}
        >
          {content}
          <div className="absolute bottom-0 left-2 transform translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      )}
    </div>
  )
}

export function ComparisonChart() {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <ScrollReveal delay={100}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
                {t('home.comparison.title')}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('home.comparison.subtitle')}
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Without AI Card */}
            <ScrollReveal direction="left" delay={200}>
              <Card className="bg-gradient-to-br from-gray-50 to-rose-50 border border-rose-200 h-full relative hover-lift">
                <CardHeader className="text-center">
                  <CardTitle className="text-rose-700 flex items-center justify-center gap-2 text-xl">
                    <Clock className="w-6 h-6" />
                    {t('home.comparison.withoutAI.title')}
                  </CardTitle>
                  <p className="text-rose-700 text-sm">{t('home.comparison.withoutAI.subtitle')}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {comparisonData.map((feature, index) => (
                    <div
                      key={feature.id}
                      className={`border-b border-rose-200 pb-3 last:border-b-0 animate-fade-in-up animate-delay-${(index + 1) * 100}`}
                    >
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="bg-rose-100 p-2 rounded-lg">
                            <feature.icon className="w-5 h-5 text-rose-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-base text-gray-900">{t(feature.titleKey)}</h4>
                            <p className="text-sm text-rose-700">{t(feature.withoutAI.descriptionKey)}</p>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-center">
                            <span className="text-lg font-bold text-rose-700">{t(feature.withoutAI.timeKey)}</span>
                          </div>
                          <SimpleProgressBar
                            value={feature.withoutAI.effort}
                            className="bg-rose-500"
                            animated={isInView}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* With AI Card */}
            <ScrollReveal direction="right" delay={400}>
              <Card className="bg-gradient-to-br from-brand-blue/5 to-brand-purple/10 border border-brand-blue/20 h-full relative hover-lift">
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center gap-2 text-xl">
                    <Zap className="w-6 h-6" />
                    <span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
                      {t('home.comparison.withAI.title')}
                    </span>
                  </CardTitle>
                  <p className="text-sm bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
                    {t('home.comparison.withAI.subtitle')}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {comparisonData.map((feature, index) => (
                    <div
                      key={feature.id}
                      className={`border-b border-brand-blue/20 pb-3 last:border-b-0 animate-fade-in-up animate-delay-${(index + 2) * 100}`}
                    >
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="bg-brand-blue/10 p-2 rounded-lg">
                            <feature.icon className="w-5 h-5 text-brand-blue" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-base text-gray-900">{t(feature.titleKey)}</h4>
                            <p className="text-sm text-brand-blue">{t(feature.withAI.descriptionKey)}</p>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-center">
                            <span className="text-lg font-bold bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">{t(feature.withAI.timeKey)}</span>
                          </div>
                          <SimpleProgressBar
                            value={feature.withAI.effort}
                            className="bg-brand-blue"
                            animated={isInView}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
                {/* Shimmer effect */}
                <div className="absolute inset-0 animate-shimmer opacity-30 pointer-events-none rounded-lg"></div>
              </Card>
            </ScrollReveal>
          </div>

          {/* Summary Stats */}
          <ScrollReveal delay={600}>
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <Card className="text-center bg-gradient-to-br from-brand-blue/5 to-brand-blue/10 border-brand-blue/20 hover-scale">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-brand-blue mb-2 animate-bounce-in">90%</div>
                  <p className="text-sm text-brand-blue">{t('home.comparison.stats.timeSaved')}</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-gradient-to-br from-brand-purple/5 to-brand-purple/10 border-brand-purple/20 hover-scale animate-delay-200">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-brand-purple mb-2 animate-bounce-in">50+</div>
                  <p className="text-sm text-brand-purple">{t('home.comparison.stats.hoursSaved')}</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-gradient-to-br from-brand-blue/5 to-brand-purple/10 border-brand-blue/20 hover-scale animate-delay-400">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent mb-2 animate-bounce-in">3x</div>
                  <p className="text-sm bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">{t('home.comparison.stats.productivity')}</p>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
