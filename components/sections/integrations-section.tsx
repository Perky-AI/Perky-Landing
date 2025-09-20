"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

interface Integration {
  name: string
  descriptionKey: string
  logo: string
}

const integrations: Integration[] = [
  {
    name: "Gmail",
    descriptionKey: 'integration.gmail.description',
    logo: "/images/integrations/gmail.png",
  },
  { 
    name: "Salesforce", 
    descriptionKey: 'integration.salesforce.description', 
    logo: "/images/integrations/salesforce.png" 
  },
  {
    name: "Microsoft Teams",
    descriptionKey: 'integration.teams.description',
    logo: "/images/integrations/teams.png",
  },
  { 
    name: "Google Workspace", 
    descriptionKey: 'integration.google.description', 
    logo: "/images/integrations/google.png" 
  },
]

export function IntegrationsSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            <span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
              {t('home.integrations.title')}
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground md:text-lg">
            {t('home.integrations.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {integrations.map((integration) => (
            <Card key={integration.name} className="flex flex-col h-full">
              <CardHeader className="flex flex-row items-center gap-4">
                <Image
                  src={integration.logo || "/placeholder.svg"}
                  alt={`${integration.name} logo`}
                  width={48}
                  height={48}
                />
                <CardTitle>{integration.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <CardDescription className="flex-1">{t(integration.descriptionKey)}</CardDescription>
                <div className="flex items-center justify-center gap-2 px-3 py-2 bg-green-50 border border-green-200 rounded-lg mt-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-green-700">
                    {t('home.integrations.viewIntegration')}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* More Integrations Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-brand-purple text-brand-purple hover:bg-brand-purple/10 hover:border-brand-purple/50 font-semibold"
            asChild
          >
            <Link href="/integrations">
              {t('home.integrations.more')}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
