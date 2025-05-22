"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ANIMATION_DURATION, ANIMATION_EASE, getCubicBezier } from "@/lib/animation-utils"
import { type ReactNode, useEffect, useState } from "react"
import type { JSX } from "react/jsx-runtime"

interface AnimatedTextProps {
  text: string
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
  className?: string
  delay?: number
  staggerDelay?: number
  threshold?: number
  rootMargin?: string
}

export default function AnimatedText({
  text,
  tag = "p",
  className = "",
  delay = 0,
  staggerDelay = 0.02,
  threshold = 0.1,
  rootMargin = "0px",
}: AnimatedTextProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold,
    rootMargin,
    triggerOnce: true,
  })

  const [renderedText, setRenderedText] = useState<ReactNode[]>([])

  useEffect(() => {
    if (isVisible) {
      const characters = text.split("")
      const animatedCharacters = characters.map((char, index) => (
        <span
          key={index}
          style={{
            display: "inline-block",
            opacity: 0,
            transform: "translateY(20px)",
            animation: `fadeUpIn ${ANIMATION_DURATION.medium}s ${getCubicBezier(
              ANIMATION_EASE.appleEase,
            )} forwards ${delay + index * staggerDelay}s`,
            // Add this line to preserve whitespace
            whiteSpace: "pre",
          }}
        >
          {char}
        </span>
      ))
      setRenderedText(animatedCharacters)
    }
  }, [isVisible, text, delay, staggerDelay])

  const Tag = tag as keyof JSX.IntrinsicElements

  return (
    <>
      <style jsx global>{`
        @keyframes fadeUpIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <Tag ref={ref} className={className}>
        {isVisible ? renderedText : text}
      </Tag>
    </>
  )
}
