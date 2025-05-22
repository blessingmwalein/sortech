"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { ANIMATION_DURATION, ANIMATION_EASE, getCubicBezier } from "@/lib/animation-utils"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { ref, isVisible } = useScrollAnimation()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      setEmail("")
    }, 1500)
  }

  return (
    <div
      ref={ref}
      className="bg-brand-teal/10 rounded-[20px] p-6"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity ${ANIMATION_DURATION.medium}s ${getCubicBezier(ANIMATION_EASE.appleEase)}, transform ${ANIMATION_DURATION.medium}s ${getCubicBezier(ANIMATION_EASE.appleEase)}`,
      }}
    >
      <h3 className="text-xl font-semibold mb-3 text-gray-800">Stay Updated</h3>
      <p className="text-gray-600 mb-4">Subscribe to our newsletter for the latest technology insights and updates.</p>

      {isSubmitted ? (
        <div
          className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center"
          style={{
            animation: `fadeIn ${ANIMATION_DURATION.medium}s ${getCubicBezier(ANIMATION_EASE.appleEase)} forwards`,
          }}
        >
          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
          <p className="text-green-700">Thank you for subscribing!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-teal"
              required
              style={{
                transition: `border-color ${ANIMATION_DURATION.fast}s ${getCubicBezier(ANIMATION_EASE.appleEase)}, box-shadow ${ANIMATION_DURATION.fast}s ${getCubicBezier(ANIMATION_EASE.appleEase)}`,
              }}
            />
          </div>
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-brand-teal text-white hover:bg-teal-700"
            style={{
              transition: `background-color ${ANIMATION_DURATION.fast}s ${getCubicBezier(ANIMATION_EASE.appleEase)}, transform ${ANIMATION_DURATION.fast}s ${getCubicBezier(ANIMATION_EASE.appleEase)}`,
            }}
          >
            {isLoading ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Subscribing...
              </span>
            ) : (
              "Subscribe"
            )}
          </Button>
        </form>
      )}
    </div>
  )
}
