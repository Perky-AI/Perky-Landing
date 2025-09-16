"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

const plans = [
  {
    nameKey: 'pricing.starter.name',
    priceUSD: 30,
    periodKey: 'pricing.period.seatMonth',
    descriptionKey: 'pricing.starter.description',
    features: [
      'pricing.feature.agents5',
      'pricing.feature.tasks1k',
      'pricing.feature.email',
      'pricing.feature.document',
      'pricing.feature.support',
      'pricing.feature.api',
    ],
    notIncluded: ['pricing.feature.customWorkflows', 'pricing.feature.integrations', 'pricing.feature.supportPriority', 'pricing.feature.accountManager'],
    popular: false,
  },
  {
    nameKey: 'pricing.professional.name',
    priceUSD: 50,
    periodKey: 'pricing.period.seatMonth',
    descriptionKey: 'pricing.professional.description',
    features: [
      'pricing.feature.agents20',
      'pricing.feature.tasks10k',
      'pricing.feature.allFeatures',
      'pricing.feature.documentAdvanced',
      'pricing.feature.workflow',
      'pricing.feature.supportPriority',
      'pricing.feature.integrations',
      'pricing.feature.analytics',
    ],
    notIncluded: ['pricing.feature.tasksUnlimited', 'pricing.feature.accountManager'],
    popular: true,
  },
  {
    nameKey: 'pricing.enterprise.name',
    priceUSD: null, // Custom pricing
    periodKey: 'pricing.period.custom',
    descriptionKey: 'pricing.enterprise.description',
    features: [
      'pricing.feature.agentsUnlimited',
      'pricing.feature.tasksUnlimited',
      'pricing.feature.allFeatures',
      'pricing.feature.customIntegrations',
      'pricing.feature.accountManager',
      'pricing.feature.support247',
      'pricing.feature.onPremise',
      'pricing.feature.sla',
      'pricing.feature.training',
    ],
    notIncluded: [],
    popular: false,
  },
]

const faqs = [
  {
    questionKey: 'pricing.faq.calculation.question',
    answerKey: 'pricing.faq.calculation.answer',
  },
  {
    questionKey: 'pricing.faq.task.question',
    answerKey: 'pricing.faq.task.answer',
  },
  {
    questionKey: 'pricing.faq.discount.question',
    answerKey: 'pricing.faq.discount.answer',
  },
  {
    questionKey: 'pricing.faq.change.question',
    answerKey: 'pricing.faq.change.answer',
  },
  {
    questionKey: 'pricing.faq.setup.question',
    answerKey: 'pricing.faq.setup.answer',
  },
]

export default function PricingPage() {
  const { t, language } = useLanguage()

  // Currency conversion function
  const getPrice = (priceUSD: number | null) => {
    if (priceUSD === null) return null // Return null for custom pricing
    
    if (language === 'tr') {
      // Convert USD to TRY (30 USD = 1200 TRY, 50 USD = 2000 TRY)
      const priceTRY = priceUSD === 30 ? 1200 : priceUSD === 50 ? 2000 : priceUSD * 40
      return `₺${priceTRY.toLocaleString('tr-TR')}`
    } else {
      return `$${priceUSD}`
    }
  }

  return (
    <div className="bg-background text-foreground">
            {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            {/* Perky Logo */}
            <div className="flex justify-center mb-12">
              <Image
                src="/Perky_logo_last.png"
                alt="Perky AI"
                width={300}
                height={120}
                className="h-16 md:h-20 lg:h-24 object-contain"
                priority
              />
            </div>
 
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">{t('pricing.hero.title')}</h1>
            <p className="text-xl text-muted-foreground">
              {t('pricing.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <ScrollAnimation>
        <section className="py-20 md:py-28 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <Card
                  key={plan.nameKey}
                  className={`relative ${plan.popular ? "border-primary shadow-lg scale-105" : ""}`}
                >
                  {plan.popular && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">{t('pricing.mostPopular')}</Badge>}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{t(plan.nameKey)}</CardTitle>
                    <div className="mt-4">
                      {getPrice(plan.priceUSD) ? (
                        <>
                          <span className="text-4xl font-bold">{getPrice(plan.priceUSD)}</span>
                          <span className="text-muted-foreground">{t(plan.periodKey)}</span>
                        </>
                      ) : (
                        <span className="text-4xl font-bold">{t('pricing.period.custom')}</span>
                      )}
                    </div>
                    <p className="text-muted-foreground mt-2">{t(plan.descriptionKey)}</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <Button 
                      className={`w-full font-semibold text-base px-6 py-3 ${
                        plan.popular 
                          ? "bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-blue/90 hover:to-brand-purple/90 text-white shadow-lg" 
                          : "bg-white text-brand-purple border-2 border-brand-purple hover:bg-brand-purple/10 hover:border-brand-purple/50"
                      }`} 
                      asChild
                    >
                      <Link href="/contact">
                        {plan.nameKey === 'pricing.enterprise.name' ? t('pricing.contactSales') : t('pricing.getStarted')}
                      </Link>
                    </Button>

                    <div className="space-y-3">
                      <h4 className="font-semibold">{t('pricing.whatsIncluded')}</h4>
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <Check className="w-4 h-4 text-green-500" />
                          <span className="text-sm">{t(feature)}</span>
                        </div>
                      ))}

                      {plan.notIncluded.length > 0 && (
                        <>
                          <h4 className="font-semibold mt-6">{t('pricing.notIncluded')}</h4>
                          {plan.notIncluded.map((feature) => (
                            <div key={feature} className="flex items-center gap-3">
                              <X className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">{t(feature)}</span>
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* FAQ Section */}
      <ScrollAnimation>
        <section className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('pricing.faq.title')}</h2>
                <p className="text-xl text-muted-foreground">
                  {t('pricing.faq.subtitle')}
                </p>
              </div>

              <div className="space-y-8">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b pb-6">
                    <h3 className="text-lg font-semibold mb-3">{t(faq.questionKey)}</h3>
                    <p className="text-muted-foreground">{t(faq.answerKey)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* CTA Section */}
      <ScrollAnimation>
        <section className="py-20 md:py-28 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">{t('pricing.cta.title')}</h2>
              <p className="text-muted-foreground">
                {t('pricing.cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">{t('pricing.cta.trial')}</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">{t('pricing.cta.demo')}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  )
}
