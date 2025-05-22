"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ANIMATION_DURATION, ANIMATION_EASE, getCubicBezier } from "@/lib/animation-utils"
import { PatternBackground } from "./pattern-background"

interface NumberCardProps {
  number: string
  label: string
  backgroundColor?: string
  vectorColor?: string
}

const NumberCard = ({
  number,
  label,
  backgroundColor = "#008080",
  vectorColor = "rgba(0, 128, 128, 0.12)",
}: NumberCardProps) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <div
      ref={ref}
      className="relative text-white rounded-[30px] overflow-hidden h-[340px] p-6 flex flex-col justify-between"
      style={{
        backgroundColor,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity ${ANIMATION_DURATION.medium}s ${getCubicBezier(
          ANIMATION_EASE.appleEase,
        )}, transform ${ANIMATION_DURATION.medium}s ${getCubicBezier(ANIMATION_EASE.appleEase)}`,
      }}
    >
      {/* Pattern as background layer */}
      <div className="absolute inset-0 z-0">
        <PatternBackground spacing={100} backgroundColor={backgroundColor} vectorColor={vectorColor} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        {/* Number in top-left */}
        <div
          className="text-6xl font-bold"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(-20px)",
            transition: `opacity ${ANIMATION_DURATION.medium}s ${getCubicBezier(
              ANIMATION_EASE.appleEase,
            )} 0.2s, transform ${ANIMATION_DURATION.medium}s ${getCubicBezier(ANIMATION_EASE.appleEase)} 0.2s`,
          }}
        >
          {number}
        </div>

        {/* Label at bottom-center */}
        <div
          className="flex justify-center mb-2"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: `opacity ${ANIMATION_DURATION.medium}s ${getCubicBezier(
              ANIMATION_EASE.appleEase,
            )} 0.4s, transform ${ANIMATION_DURATION.medium}s ${getCubicBezier(ANIMATION_EASE.appleEase)} 0.4s`,
          }}
        >
          <p className="text-3xl text-center font-semibold">{label}</p>
        </div>
      </div>
    </div>
  )
}

export default NumberCard
