"use client"

import React, { useEffect, useMemo, useRef, useState, useId } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"

type ParticlesProps = {
  id?: string
  className?: string
  background?: string
  minSize?: number
  maxSize?: number
  speed?: number
  particleColor?: string
  particleDensity?: number
}

export const SparklesCore = (props: ParticlesProps) => {
  const { id, className, background, minSize, maxSize, speed, particleColor, particleDensity } = props
  const [mounted, setMounted] = useState(false)
  const [ready, setReady] = useState(false)
  const particlesRef = useRef<any>(null)

  useEffect(() => {
    setMounted(true)
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setReady(true))
    return () => {
      try {
        particlesRef.current?.destroy?.()
      } catch {}
      particlesRef.current = null
    }
  }, [])

  const generatedId = useId()
  const options = useMemo(() => ({
    background: { color: { value: background || "transparent" } },
    fullScreen: { enable: false, zIndex: 0 },
    fpsLimit: 60,
    interactivity: {
      events: { onClick: { enable: false, mode: "push" }, resize: true as any },
      modes: { push: { quantity: 4 } },
    },
    particles: {
      color: { value: particleColor || "#ffffff" },
      move: { enable: true, speed: { min: 0.1, max: 0.8 }, direction: "none", outModes: { default: "out" } },
      number: { value: particleDensity || 120, density: { enable: true, width: 400, height: 400 } },
      opacity: { value: { min: 0.2, max: 0.6 }, animation: { enable: false } },
      shape: { type: "circle" },
      size: { value: { min: minSize || 1, max: maxSize || 3 } },
    },
    detectRetina: true,
  }), [background, minSize, maxSize, speed, particleColor, particleDensity])

  return (
    <div className={className}>
      {mounted && ready && (
        <Particles
          id={id || generatedId}
          className="h-full w-full"
          options={options}
          init={(engine) => {
            particlesRef.current = engine
          }}
        />
      )}
    </div>
  )
}


