"use client"

import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import React, { useEffect, useRef, useState } from "react"

export function HeroSection() {
  const { t, language } = useLanguage()

  const rotatingWords = language === 'tr'
    ? [
        'otomatikleştiriyor',
        'dönüştürüyor',
        'hızlandırıyor',
        'optimize ediyor',
        'devrimleştiriyor',
        'akıcılaştırıyor',
      ]
    : [
        'automates',
        'transforms',
        'accelerates',
        'optimizes',
        'revolutionizes',
        'streamlines',
      ]

  const [wordIndex, setWordIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % rotatingWords.length)
        setIsVisible(true)
      }, 200)
    }, 2000)

    return () => clearInterval(interval)
  }, [rotatingWords.length])

  return (
    <section className="relative w-full py-16 md:py-20 lg:py-24 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-muted/30 -z-20" />
      {/* Cherry petal canvas animation */}
      <PetalCanvas />
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 items-center gap-12">
          <div>
            <ScrollReveal direction="left" delay={150}>
              <div className="text-left space-y-5" style={{ paddingBottom: '0.5rem' }}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-relaxed" style={{ minHeight: '1.4em', overflow: 'visible' }}>
                  {language === 'tr' ? 'Perky AI iş süreçlerinizi' : 'Perky AI'}{' '}
                  <span
                    className={
                      `inline-block bg-gradient-to-r from-[#9B30FF] to-[#1E90FF] bg-clip-text text-transparent transition-all duration-200 ` +
                      (isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1')
                    }
                    style={{ paddingBottom: '0.2em' }}
                  >
                    {rotatingWords[wordIndex]}
                  </span>
                  {language === 'en' ? ' your business processes' : ''}
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl lg:text-2xl">
                  {t('hero.subheadline')}
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="w-full sm:w-auto bg-gradient-to-r from-[#9B30FF] to-[#1E90FF] text-white hover:opacity-95 font-bold px-6 py-3 shadow-lg shadow-[rgba(30,144,255,0.25)]">
                    <Link href="/pricing">{t('hero.demoButton')}</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-white text-foreground hover:bg-white/90 shadow-md border-transparent">
                    <Link href="/features">{t('hero.learnMore')}</Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
          <div>
            <ScrollReveal direction="right" delay={250}>
              <div className="relative w-full mt-6 md:mt-0">
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                  <span className="block w-[290%] md:w-[80%] h-[78%] md:h-[130%] rounded-full border border-white/20 dark:border-white/10 shadow-[0_0_40px_rgba(155,48,255,0.25)]" />
                  {/* Revolving agents along ellipse */}
                  <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <div className="relative w-[352%] md:w-[96.8%] h-[94.6%] md:h-[157.3%] origin-center animate-orbit-350-310" style={{ transformOrigin: '50% 50%' }}>
                      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                        <Image src="/agent1.png" alt="Agent 1" width={56} height={56} className="h-10 w-10 md:h-14 md:w-14 transform scale-[2.5] bg-transparent" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <div className="relative w-[352%] md:w-[96.8%] h-[94.6%] md:h-[157.3%] origin-center animate-orbit-10-50" style={{ transformOrigin: '50% 50%' }}>
                      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                        <Image src="/agent2.png" alt="Agent 2" width={56} height={56} className="h-10 w-10 md:h-14 md:w-14 transform scale-[2.5] bg-transparent" />
                      </div>
                    </div>
                  </div>
                </div>
                <Image
                  src="/illus1.png"
                  alt="Perky hero illustration"
                  width={1280}
                  height={720}
                  className="w-[46%] md:w-[60%] h-auto object-contain mx-auto"
                  priority
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
function PetalCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ensuredCanvas = canvas as HTMLCanvasElement
    const ensuredContainer = container as HTMLDivElement
    const maybeCtx = ensuredCanvas.getContext('2d')
    if (!maybeCtx) return
    const drawCtx = maybeCtx as CanvasRenderingContext2D

    let animationFrameId = 0
    const TOTAL = 100
    const petalArray: PetalParticle[] = []

    const petalImg = new globalThis.Image()
    petalImg.src = 'https://djjjk9bjm164h.cloudfront.net/petal.png'

    function sizeToContainer() {
      ensuredCanvas.width = Math.floor(window.innerWidth)
      ensuredCanvas.height = Math.floor(window.innerHeight)
    }

    sizeToContainer()

    let mouseX = 0
    function touchHandler(e: MouseEvent | TouchEvent) {
      // Use window width to preserve original behavior
      const clientX = (e as TouchEvent).touches?.[0]?.clientX ?? (e as MouseEvent).clientX ?? 0
      mouseX = window.innerWidth ? clientX / window.innerWidth : 0
    }

    window.addEventListener('mousemove', touchHandler)
    window.addEventListener('touchmove', touchHandler, { passive: true })

    function handleResize() {
      sizeToContainer()
    }
    window.addEventListener('resize', handleResize)

    class PetalParticle {
      x: number
      y: number
      w: number
      h: number
      opacity: number
      flip: number
      xSpeed: number
      ySpeed: number
      flipSpeed: number

      constructor() {
        this.x = Math.random() * ensuredCanvas.width
        this.y = (Math.random() * ensuredCanvas.height * 2) - ensuredCanvas.height
        this.w = 25 + Math.random() * 15
        this.h = 20 + Math.random() * 10
        this.opacity = this.w / 40
        this.flip = Math.random()
        this.xSpeed = 0.2 + Math.random() * 1.0
        this.ySpeed = 0.1 + Math.random() * 0.7
        this.flipSpeed = Math.random() * 0.03
      }

      draw() {
        if (this.y > ensuredCanvas.height || this.x > ensuredCanvas.width) {
          this.x = -petalImg.width
          this.y = (Math.random() * ensuredCanvas.height * 2) - ensuredCanvas.height
          this.xSpeed = 0.5 + Math.random() * 1.0
          this.ySpeed = 0.3 + Math.random() * 0.7
          this.flip = Math.random()
        }
        drawCtx.globalAlpha = this.opacity
        drawCtx.drawImage(
          petalImg,
          this.x,
          this.y,
          this.w * (0.6 + (Math.abs(Math.cos(this.flip)) / 3)),
          this.h * (0.8 + (Math.abs(Math.sin(this.flip)) / 5))
        )
      }

      animate() {
        this.x += this.xSpeed + mouseX * 2
        this.y += this.ySpeed + mouseX * 0.6
        this.flip += this.flipSpeed
        this.draw()
      }
    }

    function render() {
      drawCtx.clearRect(0, 0, ensuredCanvas.width, ensuredCanvas.height)
      petalArray.forEach(p => p.animate())
      animationFrameId = window.requestAnimationFrame(render)
    }

    function init() {
      petalArray.length = 0
      for (let i = 0; i < TOTAL; i++) {
        petalArray.push(new PetalParticle())
      }
      render()
    }

    if (petalImg.complete) {
      init()
    } else {
      petalImg.addEventListener('load', init)
    }

    return () => {
      window.cancelAnimationFrame(animationFrameId)
      petalImg.removeEventListener('load', init)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', touchHandler)
      window.removeEventListener('touchmove', touchHandler)
    }
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}

