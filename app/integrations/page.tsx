"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"

const categories = [
  {
    nameKey: 'integrations.category.communication',
    integrations: [
      { name: "Slack", descriptionKey: 'integration.slack.description', logo: "/images/integrations/slack.png" },
      { name: "Microsoft Teams", descriptionKey: 'integration.teams.description', logo: "/images/integrations/teams.png" },
      { name: "Gmail", descriptionKey: 'integration.gmail.description', logo: "/images/integrations/gmail.png" },
      { name: "Outlook", descriptionKey: 'integration.outlook.description', logo: "/images/integrations/outlook.png" },
    ],
  },
  {
    nameKey: 'integrations.category.crm',
    integrations: [
      {
        name: "Salesforce",
        descriptionKey: 'integration.salesforce.description',
        logo: "/images/integrations/salesforce.png",
      },
      { name: "HubSpot", descriptionKey: 'integration.hubspot.description', logo: "/images/integrations/hubspot.png" },
      { name: "Pipedrive", descriptionKey: 'integration.pipedrive.description', logo: "/images/integrations/pipedrive.png" },
      { name: "Zendesk", descriptionKey: 'integration.zendesk.description', logo: "/images/integrations/zendesk.png" },
    ],
  },
  {
    nameKey: 'integrations.category.productivity',
    integrations: [
      {
        name: "Google Workspace",
        descriptionKey: 'integration.google.description',
        logo: "/images/integrations/google.png",
      },
      { name: "Microsoft 365", descriptionKey: 'integration.microsoft.description', logo: "/images/integrations/microsoft.png" },
      { name: "Notion", descriptionKey: 'integration.notion.description', logo: "/images/integrations/notion.png" },
      { name: "Airtable", descriptionKey: 'integration.airtable.description', logo: "/images/integrations/airtable.png" },
    ],
  },
  {
    nameKey: 'integrations.category.development',
    integrations: [
      { name: "GitHub", descriptionKey: 'integration.github.description', logo: "/images/integrations/github.png" },
      { name: "Jira", descriptionKey: 'integration.jira.description', logo: "/images/integrations/jira.png" },
      { name: "GitLab", descriptionKey: 'integration.gitlab.description', logo: "/images/integrations/gitlab.png" },
      { name: "Linear", descriptionKey: 'integration.linear.description', logo: "/images/integrations/linear.png" },
    ],
  },
]

export default function IntegrationsPage() {
  const { t } = useLanguage()

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="mb-4">
              {t('nav.integrations')}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">{t('integrations.hero.title')}</h1>
            <p className="text-xl text-muted-foreground">
              {t('integrations.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Integration Categories */}
      <ScrollAnimation>
        <section className="py-20 md:py-28 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('integrations.popular.title')}</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t('integrations.popular.subtitle')}
              </p>
            </div>

            <div className="space-y-16">
              {categories.map((category) => (
                <div key={category.nameKey}>
                  <h3 className="text-2xl font-bold mb-8 text-center">{t(category.nameKey)}</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.integrations.map((integration) => (
                      <Card key={integration.name} className="hover:shadow-lg transition-shadow flex flex-col h-full">
                        <CardHeader className="text-center">
                          <Image
                            src={integration.logo || "/placeholder.svg"}
                            alt={`${integration.name} logo`}
                            width={64}
                            height={64}
                            className="mx-auto mb-4"
                          />
                          <CardTitle className="text-lg">{integration.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center flex flex-col flex-1">
                          <p className="text-muted-foreground text-sm mb-4 flex-1">{t(integration.descriptionKey)}</p>
                          <div className="flex items-center justify-center gap-2 px-3 py-2 bg-green-50 border border-green-200 rounded-lg">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium text-green-700">
                              {t('integrations.viewButton')}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Custom Integrations */}
      <ScrollAnimation>
        <section className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">{t('integrations.custom.title')}</h2>
                <p className="text-muted-foreground mb-6">
                  {t('integrations.custom.description')}
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                    <div className="w-3 h-3 bg-brand-blue rounded-full flex-shrink-0" />
                    <span className="text-base font-medium">{t('integrations.custom.api')}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                    <div className="w-3 h-3 bg-brand-blue rounded-full flex-shrink-0" />
                    <span className="text-base font-medium">{t('integrations.custom.webhook')}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                    <div className="w-3 h-3 bg-brand-blue rounded-full flex-shrink-0" />
                    <span className="text-base font-medium">{t('integrations.custom.database')}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                    <div className="w-3 h-3 bg-brand-blue rounded-full flex-shrink-0" />
                    <span className="text-base font-medium">{t('integrations.custom.legacy')}</span>
                  </div>
                </div>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-blue/90 hover:to-brand-purple/90 text-white font-semibold text-base px-8 py-4 shadow-lg"
                  asChild
                >
                  <Link href="/contact">
                    {t('integrations.custom.button')}
                  </Link>
                </Button>
              </div>
              <Image
                src="/integrations-image.png"
                alt="Custom Integrations"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  )
}
