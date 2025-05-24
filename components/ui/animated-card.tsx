"use client"

import type React from "react"
import { useState, type ReactNode } from "react"
import { ANIMATION_DURATION, ANIMATION_EASE, getCubicBezier } from "@/lib/animation-utils"

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  hoverEffect?: "lift" | "glow" | "tilt" | "border"
  duration?: number
}

export default function AnimatedCard({
  children,
  className = "",
  hoverEffect = "lift",
  duration = ANIMATION_DURATION.fast,
}: AnimatedCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (hoverEffect === "tilt") {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      setMousePosition({ x, y })
    }
  }

  const getCardStyles = (): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      transition: `transform ${duration}s ${getCubicBezier(ANIMATION_EASE.appleEase)}, 
                   box-shadow ${duration}s ${getCubicBezier(ANIMATION_EASE.appleEase)},
                   border-color ${duration}s ${getCubicBezier(ANIMATION_EASE.appleEase)}`,
    }

    switch (hoverEffect) {
      case "lift":
        return {
          ...baseStyles,
          transform: isHovered ? "translateY(-10px)" : "translateY(0)",
          boxShadow: isHovered
            ? "0 10px 30px rgba(0, 0, 0, 0.1)"
            : "0 2px 10px rgba(0, 0, 0, 0.05)",
        }
      case "glow":
        return {
          ...baseStyles,
          boxShadow: isHovered
            ? "0 0 30px rgba(0, 128, 128, 0.2)"
            : "0 2px 10px rgba(0, 0, 0, 0.05)",
        }
      case "tilt":
        const centerX = 150 // approximate half of w-[300px]
        const centerY = 100 // approximate half of h
        const rotateX = ((mousePosition.y - centerY) / centerY) * -5
        const rotateY = ((mousePosition.x - centerX) / centerX) * 5
        return {
          ...baseStyles,
          transform: isHovered
            ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
            : "perspective(1000px) rotateX(0deg) rotateY(0deg)",
        }
      case "border":
        return {
          ...baseStyles,
          borderColor: isHovered ? "var(--brand-teal)" : "transparent",
        }
      default:
        return baseStyles
    }
  }

  return (
    <div
      className={className}
      style={getCardStyles()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {children}
    </div>
  )
}
