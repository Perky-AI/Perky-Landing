"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right" | "scale"
  delay?: number
  threshold?: number
  className?: string
}

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  threshold = 0.1,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("in-view")
          }, delay)
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
  }, [delay, threshold])

  const getAnimationClass = () => {
    switch (direction) {
      case "left":
        return "scroll-animate-left"
      case "right":
        return "scroll-animate-right"
      case "scale":
        return "scroll-animate-scale"
      default:
        return "scroll-animate"
    }
  }

  return (
    <div ref={ref} className={`${getAnimationClass()} ${className}`}>
      {children}
    </div>
  )
}
