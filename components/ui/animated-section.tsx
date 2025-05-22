"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ANIMATION_DURATION, ANIMATION_EASE, getCubicBezier } from "@/lib/animation-utils"
import type { ReactNode } from "react"

type AnimationType = "fade-up" | "fade-in" | "slide-left" | "slide-right" | "zoom-in" | "parallax"

interface AnimatedSectionProps {
  children: ReactNode
  type?: AnimationType
  delay?: number
  duration?: number
  className?: string
  threshold?: number
  rootMargin?: string
}

export default function AnimatedSection({
  children,
  type = "fade-up",
  delay = 0,
  duration = ANIMATION_DURATION.medium,
  className = "",
  threshold = 0.1,
  rootMargin = "0px",
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold,
    rootMargin,
    triggerOnce: true,
  })

  const getAnimationStyles = () => {
    const baseStyles = {
      opacity: isVisible ? 1 : 0,
      transform: "none",
      transition: `opacity ${duration}s ${getCubicBezier(
        ANIMATION_EASE.appleEase,
      )} ${delay}s, transform ${duration}s ${getCubicBezier(ANIMATION_EASE.appleEase)} ${delay}s`,
    }

    switch (type) {
      case "fade-up":
        return {
          ...baseStyles,
          transform: isVisible ? "translateY(0)" : "translateY(40px)",
        }
      case "fade-in":
        return baseStyles
      case "slide-left":
        return {
          ...baseStyles,
          transform: isVisible ? "translateX(0)" : "translateX(80px)",
        }
      case "slide-right":
        return {
          ...baseStyles,
          transform: isVisible ? "translateX(0)" : "translateX(-80px)",
        }
      case "zoom-in":
        return {
          ...baseStyles,
          transform: isVisible ? "scale(1)" : "scale(0.9)",
        }
      case "parallax":
        return {
          ...baseStyles,
          transform: isVisible ? "translateY(0)" : "translateY(100px)",
          transition: `opacity ${duration * 1.5}s ${getCubicBezier(
            ANIMATION_EASE.appleEase,
          )} ${delay}s, transform ${duration * 2}s ${getCubicBezier(ANIMATION_EASE.appleEase)} ${delay}s`,
        }
      default:
        return baseStyles
    }
  }

  return (
    <div ref={ref} className={className} style={getAnimationStyles()}>
      {children}
    </div>
  )
}
