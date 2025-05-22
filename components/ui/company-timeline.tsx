"use client"

import { CheckCircle } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ANIMATION_DURATION, ANIMATION_EASE, getCubicBezier } from "@/lib/animation-utils"
import AnimatedCard from "@/components/ui/animated-card"

interface TimelineEvent {
  year: string
  title: string
  description: string
}

export default function CompanyTimeline() {
  const events: TimelineEvent[] = [
    {
      year: "2024",
      title: "Company Formation",
      description:
        "Sortech Private Limited was established in August 2024 to address the gap in both Zimbabwean consumer and commercial markets for effective technology solutions.",
    },
    {
      year: "2024",
      title: "First Major Client",
      description:
        "Secured our first enterprise client, implementing comprehensive security solutions for a leading financial institution in Zimbabwe.",
    },
    {
      year: "2024",
      title: "Home Automation Launch",
      description:
        "Launched our home automation division, bringing smart home technology to residential customers across Zimbabwe.",
    },
    {
      year: "2025",
      title: "Future Growth",
      description:
        "Expanding our service offerings and market reach to become the leading technology solutions provider in Zimbabwe and beyond.",
    },
  ]

  const timelineItems = events.map((event, index) => {
    const { ref, isVisible } = useScrollAnimation({
      threshold: 0.1,
      triggerOnce: true,
    })

    return (
      <div
        key={index}
        ref={ref}
        className={`relative flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center`}
      >
        <div
          className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} mb-4 md:mb-0`}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : `translateX(${index % 2 === 0 ? "-50px" : "50px"})`,
            transition: `opacity ${ANIMATION_DURATION.medium}s ${getCubicBezier(
              ANIMATION_EASE.appleEase,
            )}, transform ${ANIMATION_DURATION.medium}s ${getCubicBezier(ANIMATION_EASE.appleEase)}`,
          }}
        >
          <AnimatedCard className="bg-white p-6 rounded-[20px] shadow-md" hoverEffect="lift">
            <div className="text-brand-teal font-bold text-xl mb-2">{event.year}</div>
            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
            <p className="text-gray-600">{event.description}</p>
          </AnimatedCard>
        </div>

        <div
          className="z-10 w-10 h-10 rounded-full bg-brand-teal flex items-center justify-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "scale(1)" : "scale(0)",
            transition: `opacity ${ANIMATION_DURATION.medium}s ${getCubicBezier(
              ANIMATION_EASE.appleEase,
            )} 0.3s, transform ${ANIMATION_DURATION.medium}s ${getCubicBezier(ANIMATION_EASE.appleEase)} 0.3s`,
          }}
        >
          <CheckCircle className="h-5 w-5 text-white" />
        </div>

        <div className="md:w-1/2"></div>
      </div>
    )
  })

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-brand-teal/30 transform md:-translate-x-1/2"></div>

      <div className="space-y-12">{timelineItems}</div>
    </div>
  )
}
