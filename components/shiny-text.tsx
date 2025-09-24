"use client"

import React from "react"
import styles from "./ShinyText.module.css"

interface ShinyTextProps {
  text: string
  disabled?: boolean
  speed?: number
  className?: string
}

export default function ShinyText({ text, disabled = false, speed = 5, className = '' }: ShinyTextProps) {
  const animationDuration = `${speed}s`
  return (
    <span
      className={`${styles.shinyText} ${disabled ? styles.disabled : ''} ${className}`}
      style={{ ['--animation-duration' as any]: animationDuration }}
      data-text={text}
    >
      <span className={styles.content}>{text}</span>
    </span>
  )
}


