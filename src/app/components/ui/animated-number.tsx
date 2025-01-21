"use client"

import React, { useState, useEffect } from "react"

interface AnimatedNumberProps {
  value: number
  duration?: number
  className?: string
  prefix?: string
  fixed?: number
}

export const formatCurrency = (value: number | undefined, prefix = "$", fixed = 0) => {
  if (value === undefined || value === 0) return "--"
  if (value >= 1e9) {
    return prefix + (value / 1e9).toFixed(1) + "B"
  } else if (value >= 1e6) {
    return prefix + (value / 1e6).toFixed(1) + "M"
  } else if (value >= 1e3) {
    return prefix + (value / 1e3).toFixed(1) + "K"
  } else if (value < 1) {
    return "0"
  } else {
    return prefix + (fixed ? value.toFixed(fixed) : value.toString())
  }
}

export function AnimatedNumber({
  value,
  duration = 1000,
  className = "",
  prefix = "",
  fixed = 0,
}: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    let startTime: number | null = null
    const startValue = displayValue

    const animateValue = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const currentValue = startValue + progress * (value - startValue)
      setDisplayValue(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animateValue)
      }
    }

    requestAnimationFrame(animateValue)
  }, [value, duration])

  return <span className={`tabular-nums ${className}`}>{formatCurrency(displayValue, prefix, fixed)}</span>
}

