import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import ContactForm from "@/components/contact-form"
import { PageHero } from "@/components/ui/page-header-title"
import SectionTitle from "@/components/ui/section-title"
import { useState } from "react"
import { ServicesAccordion } from "@/components/ui/services_accordions"
type ServiceItem = {
  id: number
  title: string
  description: string
  content?: string
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Domain Management Advisory",
    description:
      "We enable organizations to strategically optimize their domain portfolios including DNS, registrations, and SSL/TLS certificates to enhance security, compliance, and efficiency.",
    content:
      "Our domain management services include comprehensive audits of your domain portfolio, strategic recommendations for consolidation or expansion, DNS optimization, and proactive monitoring for security threats. We help you establish robust governance processes and ensure timely renewals to prevent business disruption.",
  },
  {
    id: 2,
    title: "Data Protection Advisory",
    description:
      "Our data protection services help organizations safeguard sensitive information through comprehensive assessments, policy development, and implementation of robust security measures.",
    content:
      "We conduct thorough data protection impact assessments, develop tailored data protection policies, implement technical safeguards, and provide ongoing monitoring and compliance support. Our approach ensures your organization meets regulatory requirements while maintaining operational efficiency.",
  },
  {
    id: 3,
    title: "Cyber Security",
    description:
      "We provide comprehensive cybersecurity solutions including threat detection, vulnerability assessments, and security awareness training to protect your organization from evolving threats.",
    content:
      "Our cybersecurity services include penetration testing, security architecture reviews, incident response planning, and employee security awareness programs. We help you build a resilient security posture that adapts to emerging threats while maintaining business continuity.",
  },
  {
    id: 4,
    title: "SSL Certificates Products",
    description:
      "We offer a range of SSL certificate solutions to secure your websites and applications, ensuring data encryption and building customer trust.",
    content:
      "Our SSL certificate offerings include domain validation (DV), organization validation (OV), and extended validation (EV) certificates. We provide guidance on certificate selection, implementation support, and automated renewal management to ensure continuous protection of your digital assets.",
  },
]
export default function EnterpriseSecurity() {


  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="/background/security_back.jpg"
          alt="Cybersecurity concept"
          width={1200}
          height={500}
          className="object-cover w-full h-full"
        />
        <PageHero subtitle="Sortech" title="Enterprise Security" buttonText="Learn More" />

      </section>

      {/* Options Section */}
      <section className="py-16 container px-4 md:px-6">
        {/* <h2 className="text-3xl font-bold mb-12 text-center">Enterprise Security Options</h2> */}

        <div className="text-center mb-16">
          <SectionTitle title="Enterprise Security Solutions" />
        </div>

        <ServicesAccordion items={services} />
      </section>

      {/* Contact Section */}
      <section className="py-16 container px-4 md:px-6">
        <ContactForm />
      </section>
    </div>
  )
}
