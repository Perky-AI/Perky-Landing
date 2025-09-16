"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function CtaBanner() {
  const { t } = useLanguage()

  return (
    <section className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="bg-gradient-to-r from-brand-blue to-brand-purple text-white rounded-2xl p-10 md:p-16 text-center shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            {t('home.cta.title')}
          </h2>
          <p className="max-w-xl mx-auto text-white/90 mb-8">
            {t('home.cta.description')}
          </p>
          <Button size="lg" className="w-full sm:w-auto bg-white text-brand-blue hover:bg-white/90 font-semibold" asChild>
            <Link href="/contact">{t('home.cta.button')}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
