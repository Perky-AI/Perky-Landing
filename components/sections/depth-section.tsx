"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { BeforeAfterSlider } from "@/components/before-after-slider"

export function DepthSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container px-4 md:px-6 space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            <span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
              {t('home.depth.title')}
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-muted-foreground md:text-lg">
            {t('home.depth.description')}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">{t('home.depth.document.title')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('home.depth.document.description')}
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>{t('home.depth.document.feature1')}</li>
              <li>{t('home.depth.document.feature2')}</li>
              <li>{t('home.depth.document.feature3')}</li>
            </ul>
          </div>
          <BeforeAfterSlider
            beforeImage="/slider1.png"
            afterImage="/slider2.png"
            beforeAlt="Intelligent Document Processing - Before"
            afterAlt="Intelligent Document Processing - After"
            width={800}
            height={500}
            className="w-full"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="/Schedule-calendar.png"
            alt="Autonomous Calendar Management"
            width={800}
            height={500}
            className="rounded-xl shadow-lg w-full md:order-last"
          />
          <div>
            <h3 className="text-2xl font-bold mb-4">{t('home.depth.calendar.title')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('home.depth.calendar.description')}
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>{t('home.depth.calendar.feature1')}</li>
              <li>{t('home.depth.calendar.feature2')}</li>
              <li>{t('home.depth.calendar.feature3')}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
