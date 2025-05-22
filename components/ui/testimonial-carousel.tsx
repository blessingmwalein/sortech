"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface Testimonial {
    id: number
    name: string
    position: string
    company: string
    quote: string
    image: string
}

export default function TestimonialCarousel() {
    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: "Sarah Johnson",
            position: "CTO",
            company: "TechVision Inc.",
            quote:
                "Sortech transformed our home security system with their innovative automation solutions. The team was professional, knowledgeable, and delivered beyond our expectations.",
            image: "/placeholder.svg?height=100&width=100",
        },
        {
            id: 2,
            name: "Michael Chen",
            position: "Operations Director",
            company: "Global Finance",
            quote:
                "Their enterprise security solutions have significantly strengthened our data protection framework. Sortech's expertise in cybersecurity is unmatched in the industry.",
            image: "/placeholder.svg?height=100&width=100",
        },
        {
            id: 3,
            name: "Tendai Moyo",
            position: "IT Manager",
            company: "Sunrise Telecoms",
            quote:
                "The observability platform implemented by Sortech has given us unprecedented visibility into our systems. Their technical support is responsive and highly skilled.",
            image: "/placeholder.svg?height=100&width=100",
        },
    ]

    const [current, setCurrent] = useState(0)

    const next = () => {
        setCurrent((current + 1) % testimonials.length)
    }

    const prev = () => {
        setCurrent((current - 1 + testimonials.length) % testimonials.length)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            next()
        }, 8000)
        return () => clearInterval(interval)
    }, [current])

    return (
        <div className="relative bg-white rounded-[30px] shadow-lg p-8 md:p-12 overflow-hidden">
            <div className="absolute top-8 left-8 text-brand-teal opacity-20">
                <Quote size={80} />
            </div>

            <div className="relative z-10">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/4 flex justify-center">
                        <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-brand-teal">
                            <Image
                                src={testimonials[current].image || "/placeholder.svg"}
                                alt={testimonials[current].name}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="md:w-3/4">
                        <p className="text-gray-700 text-lg italic mb-6">{testimonials[current].quote}</p>
                        <div className="border-t border-gray-200 pt-4">
                            <h4 className="font-bold text-xl">{testimonials[current].name}</h4>
                            <p className="text-brand-teal">
                                {testimonials[current].position}, {testimonials[current].company}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-end gap-2 mt-6">
                <Button
                    onClick={prev}
                    variant="outline"
                    size="icon"
                    className="rounded-full border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white"
                >
                    <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                    onClick={next}
                    variant="outline"
                    size="icon"
                    className="rounded-full border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white"
                >
                    <ChevronRight className="h-5 w-5" />
                </Button>
            </div>
        </div>
    )
}
