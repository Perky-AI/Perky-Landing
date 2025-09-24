"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { InfiniteSlider } from "@/components/core/infinite-slider"

// Grid removed; keeping only the slider presentation

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
          <p className="max-w-2xl mx-auto text-muted-foreground md:text-lg mb-16 md:mb-24">
            {t('home.integrations.subtitle')}
          </p>
          {/* Infinite slider of integrations logos */}
          <div className="mt-28 md:mt-40">
            <div className="h-10 md:h-16" />
            <div className="scale-[1.6] origin-top translate-y-6 md:translate-y-10">
              <InfiniteSlider gap={32} speedSeconds={16} reverse>
                <img src="/images/integrations/gmail.png" alt="Gmail" className="h-10 w-auto opacity-90" />
                <img src="/images/integrations/outlook.png" alt="Outlook" className="h-10 w-auto opacity-90" />
                <img src="/images/integrations/salesforce.png" alt="Salesforce" className="h-10 w-auto opacity-90" />
                <img src="/images/integrations/dropbox.png" alt="Dropbox" className="h-10 w-auto opacity-90" />
                <img src="/images/integrations/Gdrive.png" alt="Google Drive" className="h-10 w-auto opacity-90" />
                <img src="/images/integrations/Gsheets.png" alt="Google Sheets" className="h-10 w-auto opacity-90" />
                <img src="/images/integrations/googlecalendar.png" alt="Google Calendar" className="h-10 w-auto opacity-90" />
                <img src="/images/integrations/linkedin.png" alt="LinkedIn" className="h-10 w-auto opacity-90" />
              </InfiniteSlider>
            </div>
          </div>
        </div>
        {/* Slider only; cards removed */}
      </div>
    </section>
  )
}
