"use client"
import { CheckCircle } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ANIMATION_DURATION, ANIMATION_EASE, getCubicBezier } from "@/lib/animation-utils"
import AnimatedImage from "@/components/ui/animated-image"

interface Feature {
  title: string
  description: string
  image: string
  benefits: string[]
}

interface FeaturesShowcaseProps {
  features: Feature[]
}

export default function FeaturesShowcase({ features }: FeaturesShowcaseProps) {
  const featureElements = features.map((feature, index) => {
    const { ref, isVisible } = useScrollAnimation({
      threshold: 0.1,
      triggerOnce: true,
    })

    return (
      <div
        key={index}
        ref={ref}
        className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : `translateY(${index % 2 === 0 ? "40px" : "-40px"})`,
          transition: `opacity ${ANIMATION_DURATION.medium}s ${getCubicBezier(
            ANIMATION_EASE.appleEase,
          )}, transform ${ANIMATION_DURATION.medium}s ${getCubicBezier(ANIMATION_EASE.appleEase)}`,
        }}
      >
        <div className="md:w-1/2">
          <div className="relative h-[400px] rounded-[25px] overflow-hidden shadow-md">
            <AnimatedImage
              src={feature.image || "/placeholder.svg"}
              alt={feature.title}
              width={600}
              height={400}
              className="object-cover"
              effect={index % 2 === 0 ? "zoom-in" : "reveal"}
            />
          </div>
        </div>

        <div className="md:w-1/2">
          <h3
            className="text-2xl font-bold mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: `opacity ${ANIMATION_DURATION.medium}s ${getCubicBezier(
                ANIMATION_EASE.appleEase,
              )} 0.2s, transform ${ANIMATION_DURATION.medium}s ${getCubicBezier(ANIMATION_EASE.appleEase)} 0.2s`,
            }}
          >
            {feature.title}
          </h3>
          <p
            className="text-gray-700 mb-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: `opacity ${ANIMATION_DURATION.medium}s ${getCubicBezier(
                ANIMATION_EASE.appleEase,
              )} 0.3s, transform ${ANIMATION_DURATION.medium}s ${getCubicBezier(ANIMATION_EASE.appleEase)} 0.3s`,
            }}
          >
            {feature.description}
          </p>

          <div className="space-y-3">
            {feature.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-start"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity ${ANIMATION_DURATION.medium}s ${getCubicBezier(
                    ANIMATION_EASE.appleEase,
                  )} ${0.4 + idx * 0.1}s, transform ${ANIMATION_DURATION.medium}s ${getCubicBezier(
                    ANIMATION_EASE.appleEase,
                  )} ${0.4 + idx * 0.1}s`,
                }}
              >
                <CheckCircle className="h-5 w-5 text-brand-teal mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  })

  return <div className="space-y-24">{featureElements}</div>
}
