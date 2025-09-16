"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useLanguage } from "@/lib/language-context"

interface FAQ {
  questionKey: string
  answerKey: string
}

const faqs: FAQ[] = [
  {
    questionKey: 'home.faq.implementation.question',
    answerKey: 'home.faq.implementation.answer',
  },
  {
    questionKey: 'home.faq.tasks.question',
    answerKey: 'home.faq.tasks.answer',
  },
  {
    questionKey: 'home.faq.security.question',
    answerKey: 'home.faq.security.answer',
  },
  {
    questionKey: 'home.faq.custom.question',
    answerKey: 'home.faq.custom.answer',
  },
]

export function FaqSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            <span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
              {t('home.faq.title')}
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground md:text-lg">{t('home.faq.subtitle')}</p>
        </div>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg">{t(faq.questionKey)}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">{t(faq.answerKey)}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
