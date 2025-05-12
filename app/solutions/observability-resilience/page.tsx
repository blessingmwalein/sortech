import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function ObservabilityResilience() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="/placeholder.svg?height=500&width=1200"
          alt="Data monitoring dashboard"
          width={1200}
          height={500}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center container px-4 md:px-6">
          <p className="text-white/80 mb-2">Sortech</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Observability & Resilience</h1>
          <Button className="bg-teal hover:bg-teal-light text-white rounded-full">Learn More</Button>
        </div>
      </section>

      {/* Options Section */}
      <section className="py-16 container px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Observability & Resilience Options</h2>

        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="bg-teal-light/20 p-6 rounded-lg relative">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold mb-2">1. Prometheus</h3>
                <p className="text-gray-600 mb-4">
                  Our consultants conduct comprehensive system assessments to design and deploy tailored monitoring
                  solutions aligned with your technical requirements. We provide end-to-end guidance including:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-teal mr-2">•</span>
                    <span>
                      Strategic Architecture: Customized Prometheus stack design following observability best practices.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-2">•</span>
                    <span>Code Instrumentation: Seamless metric integration for your applications.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-2">•</span>
                    <span>
                      Production Optimization: Metric labelling, aggregation, and alert configuration for actionable
                      insights.
                    </span>
                  </li>
                </ul>
              </div>
              <Button className="bg-teal text-white rounded-full h-10 w-10 flex items-center justify-center p-0 mt-2">
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="bg-teal-light/20 p-6 rounded-lg relative">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold mb-2">2. Grafana</h3>
                <p className="text-gray-600">
                  We implement and customize Grafana dashboards to visualize your metrics and logs, providing real-time
                  insights into your systems' performance and health.
                </p>
              </div>
              <Button className="bg-teal text-white rounded-full h-10 w-10 flex items-center justify-center p-0">
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="bg-teal-light/20 p-6 rounded-lg relative">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold mb-2">3. Data recovery and resilience</h3>
                <p className="text-gray-600">
                  Our data recovery and resilience solutions ensure business continuity through robust backup
                  strategies, disaster recovery planning, and system redundancy implementations.
                </p>
              </div>
              <Button className="bg-teal text-white rounded-full h-10 w-10 flex items-center justify-center p-0">
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="bg-teal-light/20 p-6 rounded-lg relative">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold mb-2">4. Technical support</h3>
                <p className="text-gray-600">
                  We provide comprehensive technical support services to ensure your monitoring and resilience systems
                  operate optimally, with rapid response to incidents and proactive maintenance.
                </p>
              </div>
              <Button className="bg-teal text-white rounded-full h-10 w-10 flex items-center justify-center p-0">
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 container px-4 md:px-6">
        <ContactForm />
      </section>
    </div>
  )
}
