"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { MessageSquare, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ANIMATION_DURATION, ANIMATION_EASE, getCubicBezier } from "@/lib/animation-utils"

export default function ChatButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hello! How can we help you today?", isUser: false },
  ])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Delay the appearance of the chat button for a smoother page load
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    // Add user message
    setMessages([...messages, { text: message, isUser: true }])
    setMessage("")

    // Simulate response after a short delay
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "Thanks for your message! One of our team members will get back to you shortly.",
          isUser: false,
        },
      ])
    }, 1000)
  }

  return (
    <div
      className="fixed bottom-6 right-6 z-50"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity ${ANIMATION_DURATION.medium}s ${getCubicBezier(ANIMATION_EASE.appleEase)}, transform ${ANIMATION_DURATION.medium}s ${getCubicBezier(ANIMATION_EASE.appleEase)}`,
      }}
    >
      {isOpen && (
        <div
          className="bg-white rounded-[20px] shadow-lg w-80 md:w-96 mb-4 overflow-hidden"
          style={{
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
            transition: `opacity ${ANIMATION_DURATION.medium}s ${getCubicBezier(ANIMATION_EASE.appleEase)}, transform ${ANIMATION_DURATION.medium}s ${getCubicBezier(ANIMATION_EASE.appleEase)}`,
          }}
        >
          <div className="bg-brand-teal p-4 text-white flex justify-between items-center">
            <h3 className="font-semibold">Sortech Support</h3>
            <button onClick={toggleChat} className="text-white hover:text-gray-200">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="h-80 overflow-y-auto p-4 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-3 ${msg.isUser ? "text-right" : "text-left"}`}
                style={{
                  opacity: 1,
                  transform: "translateY(0)",
                  animation: `fadeUp ${ANIMATION_DURATION.medium}s ${getCubicBezier(ANIMATION_EASE.appleEase)} forwards ${index * 0.1}s`,
                }}
              >
                <div
                  className={`inline-block p-3 rounded-lg max-w-[80%] ${
                    msg.isUser
                      ? "bg-brand-teal text-white rounded-tr-none"
                      : "bg-gray-200 text-gray-800 rounded-tl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200 flex">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-brand-teal"
            />
            <button
              type="submit"
              className="bg-brand-teal text-white p-2 rounded-r-lg hover:bg-teal-700"
              style={{
                transition: `background-color ${ANIMATION_DURATION.fast}s ${getCubicBezier(ANIMATION_EASE.appleEase)}`,
              }}
            >
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      )}

      <Button
        onClick={toggleChat}
        className="w-14 h-14 rounded-full bg-brand-teal text-white shadow-lg hover:bg-teal-700 flex items-center justify-center"
        style={{
          transition: `transform ${ANIMATION_DURATION.fast}s ${getCubicBezier(ANIMATION_EASE.appleEase)}, background-color ${ANIMATION_DURATION.fast}s ${getCubicBezier(ANIMATION_EASE.appleEase)}`,
          transform: isOpen ? "scale(1.1)" : "scale(1)",
          animation: isVisible ? `pulse 3s ${getCubicBezier(ANIMATION_EASE.appleEase)} infinite` : "none",
        }}
      >
        <MessageSquare className="h-6 w-6" />
      </Button>
    </div>
  )
}
