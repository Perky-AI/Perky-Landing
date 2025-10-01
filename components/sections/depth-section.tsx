"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, FileText, Sparkles, Check, Zap } from "lucide-react"

const cardVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.92 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: index * 0.15,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  }),
}

const mockupVariants = {
  hidden: { opacity: 0, scale: 0.85, rotateY: -14 },
  visible: (index: number) => ({
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.9,
      delay: index * 0.15 + 0.25,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  }),
}

const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <motion.div
      animate={{ rotate: 360, scale: [1, 1.15, 1] }}
      transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      className="absolute top-1/4 -left-24 h-64 w-64 rounded-full bg-brand-purple/10 blur-3xl"
    />
    <motion.div
      animate={{ rotate: -360, scale: [1.1, 1, 1.1] }}
      transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-1/4 -right-32 h-80 w-80 rounded-full bg-brand-blue/10 blur-3xl"
    />
  </div>
)

type DepthFeature = {
  icon: typeof FileText
  title: string
  subtitle: string
  points: string[]
  image: {
    src: string
    alt: string
  }
  mockupBg: string
}

const FeatureCard = ({ feature, index }: { feature: DepthFeature; index: number }) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: "-120px" })
  const Icon = feature.icon
  const isReversed = index % 2 === 1

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`grid items-center gap-10 lg:gap-16 ${isReversed ? "lg:grid-cols-[1fr,1.05fr]" : "lg:grid-cols-[1.05fr,1fr]"}`}
    >
      <motion.div
        className={`space-y-6 lg:space-y-8 ${isReversed ? "lg:order-2" : ""}`}
        initial={{ opacity: 0, x: isReversed ? 40 : -40 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isReversed ? 40 : -40 }}
        transition={{ duration: 0.6, delay: index * 0.15 + 0.1 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ type: "spring", stiffness: 220, damping: 18, delay: index * 0.15 + 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border border-brand-purple/30 bg-brand-purple/10 px-4 py-2"
        >
          <Icon className="h-5 w-5 text-brand-purple" />
          <Sparkles className="h-4 w-4 text-brand-purple animate-pulse" />
        </motion.div>

        <motion.h3
          className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
        >
          {feature.title}
        </motion.h3>

        <motion.p
          className="text-base lg:text-lg text-muted-foreground leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
        >
          {feature.subtitle}
        </motion.p>

        <motion.ul
          className="space-y-3"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: index * 0.15 + 0.35 }}
        >
          {feature.points.map((point, pointIndex) => (
            <motion.li
              key={`${point}-${pointIndex}`}
              className="group flex items-center gap-3 text-foreground/80"
              initial={{ opacity: 0, x: -24 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
              transition={{ duration: 0.55, delay: index * 0.15 + 0.4 + pointIndex * 0.1 }}
            >
              <motion.span
                whileHover={{ scale: 1.15, rotate: 360 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-[0_0_14px_rgba(99,102,255,0.35)]"
              >
                <Check className="h-3.5 w-3.5" />
              </motion.span>
              <span className="transition-colors group-hover:text-foreground">{point}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      <motion.div
        className={`${isReversed ? "lg:order-1" : ""} relative`}
        custom={index}
        variants={mockupVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="relative">
          <div className="relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.15 + 0.45 }}
              className="relative w-full"
            >
              <div className="relative mx-auto w-full max-w-[1200px] aspect-[16/9]">
                <Image
                  src={feature.image.src}
                  alt={feature.image.alt}
                  fill
                  priority={index === 0}
                  quality={100}
                  placeholder="empty"
                  sizes="(min-width: 1280px) 1100px, (min-width: 1024px) 75vw, 100vw"
                  className="object-contain shadow-[0_25px_60px_rgba(24,94,255,0.18)]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function DepthSection() {
  const { t } = useLanguage()

  const headerRef = useRef<HTMLDivElement | null>(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" })

  const features: DepthFeature[] = [
    {
      icon: FileText,
      title: t('home.depth.document.title'),
      subtitle: t('home.depth.document.description'),
      points: [
        t('home.depth.document.feature1'),
        t('home.depth.document.feature2'),
        t('home.depth.document.feature3'),
      ],
      image: {
        src: "/document-analyzer.png",
        alt: t('home.depth.document.title'),
      },
      mockupBg: "from-brand-purple/20 via-brand-purple/10 to-brand-blue/10",
    },
    {
      icon: Calendar,
      title: t('home.depth.calendar.title'),
      subtitle: t('home.depth.calendar.description'),
      points: [
        t('home.depth.calendar.feature1'),
        t('home.depth.calendar.feature2'),
        t('home.depth.calendar.feature3'),
      ],
      image: {
        src: "/Schedule-calendar.png",
        alt: t('home.depth.calendar.title'),
      },
      mockupBg: "from-brand-blue/20 via-brand-blue/10 to-brand-purple/10",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-brand-blue/5 to-background py-20 sm:py-24 lg:py-28">
      <AnimatedBackground />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.75 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight"
          >
            <span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
              {t('home.depth.title')}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-base sm:text-lg text-muted-foreground"
          >
            {t('home.depth.description')}
          </motion.p>
        </motion.div>

        <div className="space-y-20 lg:space-y-28">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
