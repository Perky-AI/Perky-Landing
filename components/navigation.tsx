"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"


export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

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
    <>
      <div
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
          isScrolled ? "px-4 pt-4" : "px-0 pt-0"
        )}
      >
        <header
          className={cn(
            "transition-all duration-500 ease-out transform-gpu will-change-transform",
            isScrolled
              ? "border border-border/40 bg-background/95 backdrop-blur-md shadow-2xl mx-auto max-w-6xl scale-[0.98] hover:scale-100"
              : "w-full bg-background/95 backdrop-blur-md shadow-none"
          )}
          style={{
            borderRadius: isScrolled ? "9999px" : "0px",
            transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1), border-radius 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
          }}
        >
          <div
            className={cn(
              "mx-auto flex h-[84px] items-center justify-between px-4 transition-all duration-500 ease-out md:px-6",
              isScrolled ? "max-w-6xl" : "max-w-7xl"
            )}
          >
            <div className="flex flex-shrink-0 items-center">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/Perky_logo_last.png"
                  alt="Perky Logo"
                  width={120}
                  height={32}
                  className={cn(
                    "h-12 w-auto transition-all duration-500 ease-out",
                    isScrolled ? "drop-shadow-xl" : "drop-shadow-md"
                  )}
                />
                <span className="sr-only">Perky</span>
              </Link>
            </div>

            <nav
              className={cn(
                "hidden md:flex items-center text-base font-semibold transition-all duration-500 ease-out",
                isScrolled ? "gap-6" : "gap-8"
              )}
            >
              <Link
                href="/features"
                className="rounded-full px-3 py-2 text-foreground transition-all duration-300 ease-out hover:scale-105 hover:bg-foreground/10"
              >
                {t('nav.features')}
              </Link>
              <Link
                href="/pricing"
                className="rounded-full px-3 py-2 text-foreground transition-all duration-300 ease-out hover:scale-105 hover:bg-foreground/10"
              >
                {t('nav.pricing')}
              </Link>
              <Link
                href="/contact"
                className="rounded-full px-3 py-2 text-foreground transition-all duration-300 ease-out hover:scale-105 hover:bg-foreground/10"
              >
                {t('nav.contact')}
              </Link>
            </nav>

            <div className="flex items-center gap-2">
              <div
                className={cn(
                  "hidden items-center transition-all duration-500 ease-out md:flex",
                  isScrolled ? "gap-3" : "gap-4"
                )}
              >
                <Button
                  asChild
                  className="rounded-full bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-lg transition-all duration-300 ease-out hover:scale-105 hover:from-brand-blue/90 hover:to-brand-purple/90"
                >
                  <Link href="/contact">{t('nav.getStarted')}</Link>
                </Button>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="hidden items-center gap-2 rounded-full border-border/60 bg-background/60 text-foreground transition-all duration-300 ease-out hover:scale-105 md:flex"
                    >
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

              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-background/60 p-0 text-base text-foreground shadow-sm transition-all duration-300 ease-out hover:scale-105 hover:bg-foreground/10 focus-visible:bg-foreground/10 focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                  >
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
                      <Button asChild className="w-full rounded-full bg-gradient-to-r from-brand-blue to-brand-purple text-white font-semibold transition-all duration-300 ease-out hover:scale-105 hover:from-brand-blue/90 hover:to-brand-purple/90">
                        <Link href="/contact" onClick={() => setIsOpen(false)}>
                          {t('nav.getStarted')}
                        </Link>
                      </Button>

                      {/* Mobile Language Selector */}
                      <div className="mt-4">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm" className="flex w-full items-center justify-center gap-2 rounded-full">
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
          </div>
        </header>
      </div>
      <div className="h-[84px]" aria-hidden="true" />
    </>
  )
}
