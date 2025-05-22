"use client"

import type React from "react"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ANIMATION_DURATION, ANIMATION_EASE, getCubicBezier } from "@/lib/animation-utils"
import Image from "next/image"
import { useEffect, useState } from "react"

interface AnimatedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  imageClassName?: string
  effect?: "fade-in" | "zoom-in" | "parallax" | "reveal"
  delay?: number
  duration?: number
  threshold?: number
  rootMargin?: string
  parallaxStrength?: number
}

export default function AnimatedImage({
  src,
  alt,
  width,
  height,
  className = "",
  imageClassName = "w-full",
  effect = "fade-in",
  delay = 0,
  duration = ANIMATION_DURATION.medium,
  threshold = 0.1,
  rootMargin = "0px",
  parallaxStrength = 100,
}: AnimatedImageProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold,
    rootMargin,
    triggerOnce: false,
  })

  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    if (effect === "parallax") {
      const handleScroll = () => {
        setScrollY(window.scrollY)
      }

      window.addEventListener("scroll", handleScroll, { passive: true })
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [effect])

  const getContainerStyles = () => {
    const baseStyles: React.CSSProperties = {
      opacity: isVisible ? 1 : 0,
      transition: `opacity ${duration}s ${getCubicBezier(ANIMATION_EASE.appleEase)} ${delay}s`,
      overflow: "hidden",
    }

    if (effect === "reveal") {
      return {
        ...baseStyles,
        position: "relative",
      }
    }

    return baseStyles
  }

  const getImageStyles = () => {
    const baseStyles: React.CSSProperties = {}

    switch (effect) {
      case "zoom-in":
        return {
          ...baseStyles,
          transform: isVisible ? "scale(1)" : "scale(1.1)",
          transition: `transform ${duration * 1.5}s ${getCubicBezier(ANIMATION_EASE.appleEase)} ${delay}s`,
        }
      case "parallax":
        return {
          ...baseStyles,
          transform: `translateY(${isVisible ? -scrollY / parallaxStrength : 0}px)`,
          transition: "transform 0.1s linear",
        }
      case "reveal":
        return {
          ...baseStyles,
          transform: "translateY(0)",
        }
      default:
        return baseStyles
    }
  }

  const getRevealStyles = () => {
    if (effect !== "reveal") return {}

    return {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "white",
      transform: isVisible ? "translateY(100%)" : "translateY(0)",
      transition: `transform ${duration}s ${getCubicBezier(ANIMATION_EASE.appleEase)} ${delay}s`,
    } as React.CSSProperties
  }

  return (
  <div ref={ref} className={`${className} relative w-full h-full`} style={getContainerStyles()}>
  <Image
    src={src || "/placeholder.svg"}
    alt={alt}
    fill
    className={`${imageClassName} object-cover`} // Ensure it fills the container
    style={getImageStyles()}
  />
  {effect === "reveal" && <div style={getRevealStyles()} />}
</div>


  )
}
