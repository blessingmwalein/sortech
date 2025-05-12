"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", phone: "", email: "", message: "" })
  }

  return (
    <div className="flex flex-col md:flex-row rounded-lg overflow-hidden">
      <div className="bg-teal p-8 md:w-1/2">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="NAME"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white text-white placeholder-white/70 py-2 focus:outline-none"
              required
            />
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="PHONE"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white text-white placeholder-white/70 py-2 focus:outline-none"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="EMAIL"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white text-white placeholder-white/70 py-2 focus:outline-none"
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="MESSAGE"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full bg-transparent border-b border-white text-white placeholder-white/70 py-2 focus:outline-none resize-none"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-white text-teal hover:bg-teal-light hover:text-white transition-colors rounded-full"
          >
            SEND MESSAGE
          </Button>
        </form>
      </div>
      <div className="bg-teal-light/30 p-8 md:w-1/2 flex flex-col justify-center">
        <h3 className="text-lg text-teal mb-2">Let's Work Together</h3>
        <h2 className="text-3xl font-bold mb-4">
          Send Us
          <br />A Message
          <br />
          Today!
        </h2>
      </div>
    </div>
  )
}
