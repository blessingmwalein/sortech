import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import ContactForm from "@/components/contact-form"
import { PageHero } from "@/components/ui/page-header-title"
import SectionTitle from "@/components/ui/section-title"
import { ServiceItem, ServicesAccordion } from "@/components/ui/services_accordions"


const services: ServiceItem[] = [
  {
    id: 1,
    title: "Prometheus",
    description:
      "Our consultants conduct comprehensive system assessments to design and deploy tailored monitoring solutions aligned with your technical requirements. We provide end-to-end guidance including:",
    content: [
      "Strategic Architecture: Customized Prometheus stack design following observability best practices.",
      "Code Instrumentation: Seamless metric integration for your applications.",
      "Production Optimization: Metric labelling, aggregation, and alert configuration for actionable insights.",
    ],
  },
  {
    id: 2,
    title: "Grafana",
    description:
      "We implement and customize Grafana dashboards to visualize your metrics and logs, providing real-time insights into your systems' performance and health.",
    content: [],
  },
  {
    id: 3,
    title: "Data recovery and resilience",
    description:
      "Our data recovery and resilience solutions ensure business continuity through robust backup strategies, disaster recovery planning, and system redundancy implementations.",
    content: [],
  },
  {
    id: 4,
    title: "Technical support",
    description:
      "We provide comprehensive technical support services to ensure your monitoring and resilience systems operate optimally, with rapid response to incidents and proactive maintenance.",
    content: [],
  },
];

export default function ObservabilityResilience() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="/background/obser_3.jpg"
          alt="Data monitoring dashboard"
          width={1200}
          height={500}
          className="object-cover w-full h-full"
        />
        <PageHero subtitle="Sortech" title="Enterprise Security" buttonText="Learn More" />
      </section>

      {/* Options Section */}
      <section className="py-16 container px-4 md:px-6">

        <div className="text-center mb-8">
          <SectionTitle title="Observability & Resilience Options" />
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
