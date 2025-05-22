"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import type { ButtonProps } from "@radix-ui/react-button"
import { ANIMATION_DURATION, ANIMATION_EASE, getCubicBezier } from "@/lib/animation-utils"

interface AnimatedButtonProps extends ButtonProps {
  children: React.ReactNode
  className?: string
  hoverEffect?: "scale" | "glow" | "slide" | "fill"
  duration?: number
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export default function AnimatedButton({
  children,
  className = "",
  hoverEffect = "scale",
  duration = ANIMATION_DURATION.fast,
  onClick,
  ...props
}: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getButtonStyles = (): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      position: "relative",
      overflow: "hidden",
      transition: `transform ${duration}s ${getCubicBezier(ANIMATION_EASE.appleEase)}, 
                   box-shadow ${duration}s ${getCubicBezier(ANIMATION_EASE.appleEase)}`,
    }

    switch (hoverEffect) {
      case "scale":
        return {
          ...baseStyles,
          transform: isHovered ? "scale(1.05)" : "scale(1)",
        }
      case "glow":
        return {
          ...baseStyles,
          boxShadow: isHovered ? "0 0 20px rgba(0, 128, 128, 0.5)" : "none",
        }
      case "slide":
      case "fill":
        return baseStyles
      default:
        return baseStyles
    }
  }

  const getOverlayStyles = (): React.CSSProperties => {
    if (hoverEffect !== "slide" && hoverEffect !== "fill") return {}

    const baseStyles: React.CSSProperties = {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      transition: `transform ${duration}s ${getCubicBezier(ANIMATION_EASE.appleEase)}`,
      zIndex: -1,
    }

    if (hoverEffect === "slide") {
      return {
        ...baseStyles,
        background: "var(--brand-teal)",
        transform: isHovered ? "translateX(0)" : "translateX(-100%)",
      }
    }

    if (hoverEffect === "fill") {
      return {
        ...baseStyles,
        background: "var(--brand-teal)",
        transform: isHovered ? "scaleX(1)" : "scaleX(0)",
        transformOrigin: "left",
      }
    }

    return baseStyles
  }

  return (
    <Button
      className={className}
      style={getButtonStyles()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      {...props}
    >
      <div style={getOverlayStyles()} />
      {children}
    </Button>
  )
}
