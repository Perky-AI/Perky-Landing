"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"


export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const handleLanguageChange = (newLanguage: 'en' | 'tr') => {
    setLanguage(newLanguage)
    setIsOpen(false)
  }

  const languages = [
    { code: 'tr', name: 'TR', flag: 'tr' },
    { code: 'en', name: 'ENG', flag: 'en' }
  ]

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center px-4 md:px-6">
        <div className="flex-shrink-0 ml-8">
          <Link href="/" className="flex items-center">
            <Image 
              src="/Perky_logo_last.png" 
              alt="Perky Logo" 
              width={120} 
              height={32} 
              className="h-12 w-auto"
            />
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-6">
          <nav className="hidden md:flex items-center space-x-4 text-base font-semibold">
            <Link href="/features" className="transition-colors hover:text-foreground/80">
              {t('nav.features')}
            </Link>
            <Link href="/pricing" className="transition-colors hover:text-foreground/80">
              {t('nav.pricing')}
            </Link>
            <Link href="/contact" className="transition-colors hover:text-foreground/80">
              {t('nav.contact')}
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
            <Button asChild className="bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-blue/90 hover:to-brand-purple/90 text-white font-semibold border-0">
              <Link href="/contact">{t('nav.getStarted')}</Link>
            </Button>
            
            {/* Language Selector - Hidden on mobile since it's in hamburger menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="hidden md:flex items-center gap-2">
                  <Image 
                    src={currentLanguage.flag === 'tr' ? '/tr-flag.svg' : '/uk-flag.png'} 
                    alt={`${currentLanguage.name} flag`}
                    width={16} 
                    height={12} 
                    className="rounded-sm"
                  />
                  <span>{currentLanguage.name}</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code as 'en' | 'tr')}
                    className={language === lang.code ? 'bg-accent' : ''}
                  >
                    <span className="mr-2">
                      <Image 
                        src={lang.flag === 'tr' ? '/tr-flag.svg' : '/uk-flag.png'} 
                        alt={`${lang.name} flag`}
                        width={16} 
                        height={12} 
                        className="rounded-sm"
                      />
                    </span>
                    <span>{lang.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="pl-1">
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between px-4 py-2">
                <Link href="/" className="flex items-center space-x-2">
                  <Image 
                    src="/Perky_logo_last.png" 
                    alt="Perky Logo" 
                    width={120} 
                    height={32} 
                    className="h-12 w-auto"
                  />
                </Link>
                <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex-1 overflow-auto py-2">
                <nav className="grid items-start px-4 text-base font-semibold">
                  <Link
                    href="/features"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-foreground transition-all hover:text-foreground/80"
                    onClick={() => setIsOpen(false)}
                  >
                    {t('nav.features')}
                  </Link>
                  <Link
                    href="/pricing"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-foreground transition-all hover:text-foreground/80"
                    onClick={() => setIsOpen(false)}
                  >
                    {t('nav.pricing')}
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-foreground transition-all hover:text-foreground/80"
                    onClick={() => setIsOpen(false)}
                  >
                    {t('nav.contact')}
                  </Link>
                </nav>
              </div>
              <div className="border-t px-4 py-2">
                <Button asChild className="w-full bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-blue/90 hover:to-brand-purple/90 text-white font-semibold border-0">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    {t('nav.getStarted')}
                  </Link>
                </Button>
                
                {/* Mobile Language Selector */}
                <div className="mt-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-2">
                        <Image 
                          src={currentLanguage.flag === 'tr' ? '/tr-flag.svg' : '/uk-flag.png'} 
                          alt={`${currentLanguage.name} flag`}
                          width={16} 
                          height={12} 
                          className="rounded-sm"
                        />
                        <span>{currentLanguage.name}</span>
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-full">
                      {languages.map((lang) => (
                        <DropdownMenuItem
                          key={lang.code}
                          onClick={() => handleLanguageChange(lang.code as 'en' | 'tr')}
                          className={language === lang.code ? 'bg-accent' : ''}
                        >
                          <span className="mr-2">
                            <Image 
                              src={lang.flag === 'tr' ? '/tr-flag.svg' : '/uk-flag.png'} 
                              alt={`${lang.name} flag`}
                              width={16} 
                              height={12} 
                              className="rounded-sm"
                            />
                          </span>
                          <span>{lang.name}</span>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
