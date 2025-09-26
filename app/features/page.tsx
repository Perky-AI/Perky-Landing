"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollAnimation } from "@/components/scroll-animation"
import {
  Mail,
  CalendarDays,
  FileText,
  LayoutDashboard,
  Users,
  Workflow,
  Zap,
  Shield,
  BarChart,
  Bot,
  Clock,
  Globe,
} from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

const coreFeatures = [
  {
    icon: Mail,
    titleKey: 'feature.email.title',
    descriptionKey: 'feature.email.description',
    features: [
      'feature.email.categorization',
      'feature.email.responses',
      'feature.email.multilang',
      'feature.email.sentiment',
    ],
  },
  {
    icon: CalendarDays,
    titleKey: 'feature.calendar.title',
    descriptionKey: 'feature.calendar.description',
    features: ['feature.calendar.conflict', 'feature.calendar.timezone', 'feature.calendar.reschedule', 'feature.calendar.prep'],
  },
  {
    icon: FileText,
    titleKey: 'feature.document.title',
    descriptionKey: 'feature.document.description',
    features: ['feature.document.ocr', 'feature.document.validation', 'feature.document.summary', 'feature.document.format'],
  },
  {
    icon: LayoutDashboard,
    titleKey: 'feature.reporting.title',
    descriptionKey: 'feature.reporting.description',
    features: ['feature.reporting.templates', 'feature.reporting.sync', 'feature.reporting.analytics', 'feature.reporting.delivery'],
  },
  {
    icon: Users,
    titleKey: 'feature.hr.title',
    descriptionKey: 'feature.hr.description',
    features: ['feature.hr.screening', 'feature.hr.scheduling', 'feature.hr.communication', 'feature.hr.onboarding'],
  },
  {
    icon: Workflow,
    titleKey: 'feature.workflow.title',
    descriptionKey: 'feature.workflow.description',
    features: ['feature.workflow.builder', 'feature.workflow.integrations', 'feature.workflow.logic', 'feature.workflow.error'],
  },
]

const additionalFeatures = [
  { icon: Zap, titleKey: 'feature.additional.fast', descriptionKey: 'feature.additional.fast.desc' },
  { icon: Shield, titleKey: 'feature.additional.security', descriptionKey: 'feature.additional.security.desc' },
  { icon: BarChart, titleKey: 'feature.additional.analytics', descriptionKey: 'feature.additional.analytics.desc' },
  { icon: Bot, titleKey: 'feature.additional.learning', descriptionKey: 'feature.additional.learning.desc' },
  { icon: Clock, titleKey: 'feature.additional.operation', descriptionKey: 'feature.additional.operation.desc' },
  { icon: Globe, titleKey: 'feature.additional.scale', descriptionKey: 'feature.additional.scale.desc' },
]

export default function FeaturesPage() {
  const { t } = useLanguage()

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="mb-4">
              {t('nav.features')}
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
              <span dangerouslySetInnerHTML={{
                __html: t('features.hero.title').replace('Perky', '<span style="color: #9B30FF; font-weight: 900;">Perky</span>')
              }} />
            </h1>
            <p className="text-xl text-muted-foreground">
              <span dangerouslySetInnerHTML={{
                __html: t('features.hero.description').replace(/Perky/g, '<span style="color: #9B30FF; font-weight: 600;">Perky</span>')
              }} />
            </p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <ScrollAnimation>
        <section className="py-20 md:py-28 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span dangerouslySetInnerHTML={{
                  __html: t('features.core.title').replace('Perky', '<span style="color: #9B30FF; font-weight: 900;">Perky</span>')
                }} />
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t('features.core.subtitle')}
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {coreFeatures.map((feature) => (
                <Card key={feature.titleKey} className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-brand-blue/10 p-3 rounded-full">
                        <feature.icon className="w-8 h-8 text-brand-blue" />
                      </div>
                      <CardTitle className="text-xl">{t(feature.titleKey)}</CardTitle>
                    </div>
                    <p className="text-muted-foreground">{t(feature.descriptionKey)}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.features.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {t(item)}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Feature Showcase */}
      <ScrollAnimation>
        <section className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  <span dangerouslySetInnerHTML={{
                    __html: t('features.seeInAction.title').replace('Perky', '<span style="color: #9B30FF; font-weight: 900;">Perky</span>')
                  }} />
                </h2>
                <p className="text-muted-foreground mb-6">
                  <span dangerouslySetInnerHTML={{
                    __html: t('features.seeInAction.description').replace(/Perky/g, '<span style="color: #9B30FF; font-weight: 600;">Perky</span>')
                  }} />
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-brand-blue/10 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-brand-blue">1</span>
                    </div>
                    <p className="text-sm">{t('features.seeInAction.step1')}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-brand-blue/10 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-brand-blue">2</span>
                    </div>
                    <p className="text-sm">{t('features.seeInAction.step2')}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-brand-blue/10 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-brand-blue">3</span>
                    </div>
                    <p className="text-sm">{t('features.seeInAction.step3')}</p>
                  </div>
                </div>
              </div>
              <Image
                src="/features-illus.png"
                alt="Perky Workflow Demo"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Additional Features */}
      <ScrollAnimation>
        <section className="py-20 md:py-28 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('features.enterprise.title')}</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t('features.enterprise.subtitle')}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalFeatures.map((feature) => (
                <Card key={feature.titleKey} className="text-center p-6">
                  <CardContent className="space-y-4">
                    <div className="bg-brand-blue/10 p-4 rounded-full w-fit mx-auto">
                      <feature.icon className="w-8 h-8 text-brand-blue" />
                    </div>
                    <h3 className="text-lg font-semibold">{t(feature.titleKey)}</h3>
                    <p className="text-muted-foreground text-sm">{t(feature.descriptionKey)}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  )
}
