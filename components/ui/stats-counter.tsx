"use client"

import { useState, useEffect, useRef } from "react"

interface StatCounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  title: string
}

function StatCounter({ end, duration = 2000, suffix = "", prefix = "", title }: StatCounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const startTimeRef = useRef<number | null>(null)

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const progress = timestamp - startTimeRef.current

      const increment = Math.min(progress / duration, 1) * end
      countRef.current = Math.floor(increment)
      setCount(countRef.current)

      if (progress < duration) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          requestAnimationFrame(animate)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById(`stat-${title.replace(/\s+/g, "-").toLowerCase()}`)
    if (element) observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [end, duration, title])

  return (
    <div id={`stat-${title.replace(/\s+/g, "-").toLowerCase()}`} className="flex flex-col items-center text-center">
      <div className="text-4xl md:text-5xl font-bold text-brand-teal mb-2">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="text-gray-700">{title}</div>
    </div>
  )
}

export default function StatsCounter() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      <StatCounter end={500} suffix="+" title="Happy Clients" />
      <StatCounter end={50} suffix="+" title="Projects Completed" />
      <StatCounter end={10} title="Years Experience" />
      <StatCounter end={24} suffix="/7" title="Support Available" />
    </div>
  )
}
