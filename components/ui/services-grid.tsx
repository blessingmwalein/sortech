"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import AnimatedCard from "@/components/ui/animated-card"
import AnimatedSection from "@/components/ui/animated-section"
import AnimatedImage from "@/components/ui/animated-image"

interface Service {
  title: string
  description: string
  icon: string
  link: string
  image: string
}

interface ServicesGridProps {
  services: Service[]
}

export default function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <AnimatedSection key={index} type="fade-up" delay={index * 0.1}>
          <AnimatedCard
            className="bg-white rounded-[25px] shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300"
            hoverEffect="lift"
          >
            <div className="relative h-48">
              <AnimatedImage
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                width={500}
                height={300}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                effect="zoom-in"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-brand-teal/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Image
                    src={service.icon || "/placeholder.svg"}
                    alt={`${service.title} icon`}
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                </div>
              </div>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link
                href={service.link}
                className="inline-flex items-center text-brand-teal hover:text-teal-700 font-medium group"
              >
                Learn More{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </AnimatedCard>
        </AnimatedSection>
      ))}
    </div>
  )
}
