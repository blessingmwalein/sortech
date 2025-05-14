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
    <div className="relative flex flex-col md:flex-row rounded-[30px] overflow-visible bg-teal-light/30 pt-20 mb-20">
      {/* Form Card */}
      <div className="absolute -top-16 left-0 md:left-10 md:w-1/3 bg-teal p-8 rounded-[30px] shadow-lg z-10">
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
            className="w-full text-lg bg-white text-teal py-8 hover:bg-teal-light hover:text-white transition-colors rounded-full"
          >
            SEND MESSAGE
          </Button>
        </form>
      </div>

      {/* Message Section */}
      <div className="p-8 ml-10 md:ml-auto md:w-1/2 flex flex-col justify-center">
        <h3 className="text-2xl text-teal mb-2">Let's Work Together</h3>
        <h2 className="text-6xl font-bold mb-4">
          Send Us
          <br />A Message
          <br />
          Today!
        </h2>
      </div>
    </div>

  )
}
