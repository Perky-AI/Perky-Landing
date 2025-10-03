"use client"

import Link from "next/link"
import Image from "next/image"

import { SocialLinks } from "@/components/ui/social-links"
import { useLanguage } from "@/lib/language-context"

export function FooterSection() {
  const { t } = useLanguage()

  return (
    <footer className="bg-background py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <Image 
                src="/Perky_logo_last.png" 
                alt="Perky Logo" 
                width={120} 
                height={32} 
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground">{t('home.footer.tagline')}</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">{t('home.footer.product.title')}</h4>
            <ul className="space-y-1">
              <li>
                <Link href="/features" className="text-sm text-muted-foreground hover:text-primary">
                  {t('nav.features')}
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-muted-foreground hover:text-primary">
                  {t('nav.pricing')}
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">{t('home.footer.company.title')}</h4>
            <ul className="space-y-1">
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3 md:flex md:items-center md:justify-end">
            <SocialLinks
              socials={[
                {
                  name: "Instagram",
                  image: "https://link-hover-lndev.vercel.app/instagram.png",
                  href: "https://instagram.com/perky.tr/",
                },
                {
                  name: "LinkedIn",
                  image: "https://link-hover-lndev.vercel.app/linkedin.png",
                  href: "https://www.linkedin.com/company/perky-tr",
                },
              ]}
              className="md:justify-end"
            />
          </div>
        </div>
        <div className="mt-8 pt-8 border-t flex justify-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Perky. {t('home.footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  )
}
