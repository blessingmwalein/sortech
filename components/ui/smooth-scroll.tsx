"use client"

import type React from "react"

import { useEffect, useState } from "react"

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [scrollValue, setScrollValue] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    let rafId: number
    let lastScrollTop = window.scrollY

    const handleScroll = () => {
      if (!isScrolling) {
        setIsScrolling(true)
      }

      // Cancel any pending animation frame
      if (rafId) {
        cancelAnimationFrame(rafId)
      }

      // Schedule a new animation frame
      rafId = requestAnimationFrame(() => {
        const currentScrollTop = window.scrollY
        setScrollValue(currentScrollTop)
        lastScrollTop = currentScrollTop

        // Set a timeout to detect when scrolling stops
        setTimeout(() => {
          if (lastScrollTop === window.scrollY) {
            setIsScrolling(false)
          }
        }, 100)
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
    }
  }, [isScrolling])

  return (
    <div
      style={{
        transform: `translateY(${-scrollValue}px)`,
        transition: isScrolling ? "none" : "transform 0.5s cubic-bezier(0.42, 0, 0.58, 1)",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  )
}
