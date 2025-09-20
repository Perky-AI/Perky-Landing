"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Mail, CalendarDays, FileText, LayoutDashboard, Users, Workflow } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

interface Feature {
  icon: LucideIcon
  titleKey: string
  descriptionKey: string
  color: string
}

const features: Feature[] = [
  {
    icon: Mail,
    titleKey: 'home.features.email.title',
    descriptionKey: 'home.features.email.description',
    color: 'brand-blue'
  },
  {
    icon: CalendarDays,
    titleKey: 'home.features.calendar.title',
    descriptionKey: 'home.features.calendar.description',
    color: 'brand-purple'
  },
  {
    icon: FileText,
    titleKey: 'home.features.document.title',
    descriptionKey: 'home.features.document.description',
    color: 'brand-blue'
  },
  {
    icon: LayoutDashboard,
    titleKey: 'home.features.reporting.title',
    descriptionKey: 'home.features.reporting.description',
    color: 'brand-purple'
  },
  {
    icon: Users,
    titleKey: 'home.features.hr.title',
    descriptionKey: 'home.features.hr.description',
    color: 'brand-blue'
  },
  {
    icon: Workflow,
    titleKey: 'home.features.workflow.title',
    descriptionKey: 'home.features.workflow.description',
    color: 'brand-purple'
  },
]

export function FeaturesSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container px-4 md:px-6">
        <ScrollReveal delay={100}>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
              <span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
                {t('home.features.title')}
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl leading-relaxed">
              {t('home.features.description')}
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.titleKey} delay={200 + index * 100}>
              <Card className="flex h-full flex-col items-center text-center p-6 hover-lift bg-gradient-to-br from-background to-muted/20 border-border/50">
                <CardHeader>
                  <div className={`bg-${feature.color}/10 p-4 rounded-full mb-4 animate-pulse-glow border border-${feature.color}/20`}>
                    <feature.icon className={`w-8 h-8 text-${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold">{t(feature.titleKey)}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground text-base leading-relaxed">{t(feature.descriptionKey)}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
