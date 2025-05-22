"use client"

import Image from "next/image"
import { Linkedin, Twitter, Mail } from "lucide-react"
import AnimatedSection from "@/components/ui/animated-section"
import AnimatedCard from "@/components/ui/animated-card"

interface TeamMember {
  name: string
  position: string
  bio: string
  image: string
  social?: {
    linkedin?: string
    twitter?: string
    email?: string
  }
}

export default function TeamSection() {
  const team: TeamMember[] = [
    {
      name: "David Moyo",
      position: "Founder & CEO",
      bio: "David brings over 15 years of experience in technology solutions and cybersecurity. His vision drives Sortech's mission to simplify technology for everyday living.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "david@sortech.com",
      },
    },
    {
      name: "Sarah Ndlovu",
      position: "Chief Technology Officer",
      bio: "Sarah leads our technical strategy with expertise in enterprise security and home automation. She ensures our solutions leverage cutting-edge technology.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
        email: "sarah@sortech.com",
      },
    },
    {
      name: "Michael Chigumira",
      position: "Head of Operations",
      bio: "Michael oversees our day-to-day operations, ensuring efficient delivery of solutions and exceptional customer service across all our projects.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "michael@sortech.com",
      },
    },
    {
      name: "Grace Mutasa",
      position: "Customer Success Manager",
      bio: "Grace ensures our clients receive the highest level of service and support. She works closely with clients to understand their evolving needs.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
        email: "grace@sortech.com",
      },
    },
  ]

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, index) => (
          <AnimatedSection key={index} type="fade-up" delay={index * 0.1}>
            <AnimatedCard className="bg-white rounded-[25px] shadow-md overflow-hidden group" hoverEffect="lift">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <div className="flex space-x-4">
                    {member.social?.linkedin && (
                      <a href={member.social.linkedin} className="text-white hover:text-brand-teal">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {member.social?.twitter && (
                      <a href={member.social.twitter} className="text-white hover:text-brand-teal">
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                    {member.social?.email && (
                      <a href={`mailto:${member.social.email}`} className="text-white hover:text-brand-teal">
                        <Mail className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-brand-teal mb-2">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </AnimatedCard>
          </AnimatedSection>
        ))}
      </div>
    </div>
  )
}
