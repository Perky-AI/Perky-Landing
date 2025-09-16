"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Calendar,
  Linkedin,
  Twitter,
  CheckCircle,
  AlertCircle,
  Building,
  Users,
  Zap,
} from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

const contactMethods = [
  {
    icon: Mail,
    titleKey: 'contact.email.title',
    descriptionKey: 'contact.email.description',
    primary: "hello@perky.com",
    secondaryKey: 'contact.response.time',
    actionKey: 'contact.send.email',
    href: "mailto:hello@perky.com",
    color: "text-white",
  },
  {
    icon: Building,
    titleKey: 'contact.partnership.title',
    descriptionKey: 'contact.partnership.description',
    primary: "hello@perky.com",
    secondaryKey: 'contact.discuss.possibilities',
    actionKey: 'contact.send.email',
    href: "mailto:hello@perky.com",
    color: "text-white",
  },
]

export default function ContactPage() {
  const { t } = useLanguage()

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="outline" className="mb-4">
              {t('common.contactUs')}
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">{t('contact.hero.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('contact.hero.description')}
            </p>
            
            {/* Quick Contact Info */}
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mt-12">
              <div className="bg-muted/50 rounded-lg p-6">
                <Mail className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="font-semibold mb-2">{t('contact.email.title')}</h3>
                <p className="text-sm text-muted-foreground">hello@perky.com</p>
                <p className="text-xs text-muted-foreground mt-1">{t('contact.response.time')}</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-6">
                <Building className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="font-semibold mb-2">{t('contact.partnership.title')}</h3>
                <p className="text-sm text-muted-foreground">hello@perky.com</p>
                <p className="text-xs text-muted-foreground mt-1">{t('contact.partnership.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <ScrollAnimation>
        <section className="py-20 md:py-28 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('contact.methods.title')}</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t('contact.methods.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {contactMethods.map((method) => (
                <Card key={method.titleKey} className="hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <CardHeader className="text-center">
                    <div
                      className={`mx-auto bg-background p-4 rounded-full mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <method.icon className={`w-8 h-8 ${method.color}`} />
                    </div>
                    <CardTitle className="text-lg">{t(method.titleKey)}</CardTitle>
                    <p className="text-sm text-muted-foreground">{t(method.descriptionKey)}</p>
                  </CardHeader>
                  <CardContent className="text-center space-y-2">
                    <p className="font-semibold">{method.primary}</p>
                    <p className="text-sm text-muted-foreground">{t(method.secondaryKey)}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full mt-4 bg-transparent"
                      asChild
                    >
                      <Link href={method.href} target="_blank" rel="noopener noreferrer">
                        {t(method.actionKey)}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Office Locations & Additional Info */}
      <ScrollAnimation>
        <section className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {/* Response Time Guarantee */}
                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      {t('contact.response.title')}
                    </h3>
                    <ul className="space-y-1 text-sm text-primary-foreground/90">
                      <li>• {t('contact.response.email')}</li>
                      <li>• {t('contact.response.general')}</li>
                      <li>• {t('contact.response.partnership')}</li>
                      <li>• {t('contact.response.feature')}</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* FAQ Section */}
                <Card>
                  <CardHeader>
                    <CardTitle>{t('contact.faq.title')}</CardTitle>
                    <p className="text-muted-foreground">{t('contact.faq.subtitle')}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="border-b pb-4">
                      <h4 className="font-semibold mb-2">{t('contact.faq.howToContact.question')}</h4>
                      <p className="text-sm text-muted-foreground">{t('contact.faq.howToContact.answer')}</p>
                    </div>
                    <div className="border-b pb-4">
                      <h4 className="font-semibold mb-2">{t('contact.faq.services.question')}</h4>
                      <p className="text-sm text-muted-foreground">{t('contact.faq.services.answer')}</p>
                    </div>
                    <div className="border-b pb-4">
                      <h4 className="font-semibold mb-2">{t('contact.faq.features.question')}</h4>
                      <p className="text-sm text-muted-foreground">{t('contact.faq.features.answer')}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{t('contact.faq.partnerships.question')}</h4>
                      <p className="text-sm text-muted-foreground">{t('contact.faq.partnerships.answer')}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  )
}
