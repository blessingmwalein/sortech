"use client"

import type React from "react"
import { useRef, useEffect, useState } from "react"

interface PatternBackgroundProps {
  vectorColor?: string
  backgroundColor?: string
  patternSpacing?: number
  spacing?: number
  scaleWithSpacing?: boolean
  baseScale?: number
  className?: string
  style?: React.CSSProperties
}

export const PatternBackground: React.FC<PatternBackgroundProps> = ({
  vectorColor = "#E0F2F2",
  backgroundColor = "#008080",
  patternSpacing = 60,
  spacing = 0,
  scaleWithSpacing = true,
  baseScale = 1,
  className = "",
  style = {},
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        })
      }
    }

    // Initial dimensions
    updateDimensions()

    // Update dimensions on resize
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  // Calculate how many vectors we need based on container size and spacing
  const actualSpacing = patternSpacing + spacing
  const columns = Math.ceil(dimensions.width / actualSpacing) + 1
  const rows = Math.ceil(dimensions.height / actualSpacing) + 1

  // Generate pattern grid
  const renderPattern = () => {
    const patterns = []
    // Calculate actual spacing with the additional spacing value
    const actualSpacing = patternSpacing + spacing

    // Calculate scale factor based on spacing if scaleWithSpacing is true
    const scaleFactor = scaleWithSpacing ? baseScale * (1 + spacing / 100) : baseScale

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        patterns.push(
          <g
            key={`${row}-${col}`}
            transform={`translate(${col * actualSpacing}, ${row * actualSpacing}) scale(${scaleFactor})`}
            style={{ transformOrigin: "center" }}
          >
            <path
              d="M42.614 71.876C38.669 69.257 39.437 64.223 40.336 60.044C41.334 55.728 40.76 51.978 38.112 48.086C32.465 39.206 22.407 34.517 13.04 30.6C8.486 28.183 3.344 24.435 1.62 18.514C-0.35 9.468 3.904 3.8 11.997 2.262C16.684 1.574 22.754 2.146 26.991 5.008C31.495 8.003 32.104 13.926 33.262 19.659C34.059 22.59 35.116 25.557 37.315 27.409C38.895 28.455 41.315 29.588 43.233 30.26C45.465 31.481 47.867 31.546 49.957 30.286C51.9 29.056 53.3 27.979 55.413 28.429C68.816 30.075 55.568 79.423 42.628 71.87L42.614 71.876Z"
              fill={vectorColor}
              style={{ mixBlendMode: "multiply" }}
            />
          </g>,
        )
      }
    }
    return patterns
  }

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden  ${className}`}
      style={{
        backgroundColor,
        width: "100%",
        height: "100%",
        ...style,
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        preserveAspectRatio="xMidYMid slice"
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        {renderPattern()}
      </svg>
    </div>
  )
}
