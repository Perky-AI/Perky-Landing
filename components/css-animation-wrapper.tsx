"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

interface CSSAnimationWrapperProps {
  children: ReactNode
  animation?:
    | "fade-in"
    | "fade-in-up"
    | "fade-in-down"
    | "fade-in-left"
    | "fade-in-right"
    | "scale-in"
    | "scale-in-bounce"
    | "bounce-in"
    | "rotate-in"
  delay?: number
  threshold?: number
  triggerOnce?: boolean
  className?: string
}

export function CSSAnimationWrapper({
  children,
  animation = "fade-in-up",
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
  className = "",
}: CSSAnimationWrapperProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!triggerOnce || !hasTriggered)) {
          setTimeout(() => {
            setIsVisible(true)
            if (triggerOnce) {
              setHasTriggered(true)
            }
          }, delay)
        } else if (!triggerOnce && !entry.isIntersecting) {
          setIsVisible(false)
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay, threshold, triggerOnce, hasTriggered])

  return (
    <div ref={ref} className={`${isVisible ? `animate-${animation}` : ""} ${className}`}>
      {children}
    </div>
  )
}
