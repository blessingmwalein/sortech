import { BarChart3, CheckCircleIcon, LineChartIcon, ShieldIcon } from "lucide-react"
import ContactForm from "@/components/contact-form"
import { PageHero } from "@/components/ui/page-header-title"
import SectionTitle from "@/components/ui/section-title"
import { type ServiceItem, ServicesAccordion } from "@/components/ui/services_accordions"
import AnimatedSection from "@/components/ui/animated-section"
import AnimatedText from "@/components/ui/animated-text"
import AnimatedWords from "@/components/ui/animated-words"
import AnimatedImage from "@/components/ui/animated-image"
import AnimatedCard from "@/components/ui/animated-card"
import CTABanner from "@/components/ui/cta-banner"
import { PatternBackground } from "@/components/ui/pattern-background"

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
]

export default function ObservabilityResilience() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Keeping the original structure */}
      <section className="relative h-[300px] md:h-[500px] w-full overflow-hidden">
        {/* Pattern background overlay for branding */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <PatternBackground
            spacing={40}
            backgroundColor="transparent"
            vectorColor="#E0F2F2"
            style={{ opacity: 0.22 }}
          />
        </div>
        <div className="absolute inset-0 bg-black/40 z-10" />
        <AnimatedImage
          src="/background/obser_3.jpg"
          alt="Data monitoring dashboard"
          width={1200}
          height={500}
          className="w-full h-full"
          imageClassName="w-full h-full object-cover"
          effect="parallax"
          parallaxStrength={7}
          duration={1.5}
        />
        <PageHero subtitle="Sortech" title="Observability & Resilience" buttonText="Learn More" />
      </section>

      {/* Options Section - Enhanced with animations */}
      <section className="py-12 md:py-16 container px-2 md:px-6 relative overflow-hidden">
        {/* Pattern background overlay for branding */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <PatternBackground
            spacing={50}
            backgroundColor="transparent"
            vectorColor="#B7D3D3"
            style={{ opacity: 0.13 }}
          />
        </div>
        <div className="relative z-10">
          <AnimatedSection type="fade-up">
            <div className="text-center mb-16">
              <SectionTitle title="Observability & Resilience Options" />
              <AnimatedWords
                text="Gain complete visibility into your systems and ensure business continuity with our comprehensive observability solutions"
                className="text-gray-600 mt-4 max-w-3xl mx-auto"
                delay={0.2}
                staggerDelay={0.01}
              />
            </div>
          </AnimatedSection>

          <AnimatedSection type="fade-up" delay={0.3}>
            <ServicesAccordion items={services} />
          </AnimatedSection>
        </div>
      </section>

      {/* Detailed Solutions Section - New section with more details */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <AnimatedSection type="fade-up">
            <div className="text-center mb-12">
              <h4 className="text-lg font-normal mb-2 text-brand-teal">Our Approach</h4>
              <SectionTitle title="How We Enhance Your Observability" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <AnimatedSection type="slide-right" delay={0.1}>
              <AnimatedImage
                src="/background/security-3.avif"
                alt="System monitoring dashboard"
                width={600}
                height={400}
                className="rounded-[25px] shadow-md w-full h-full object-cover"
                imageClassName="w-full h-full object-cover"
                effect="reveal"
              />
            </AnimatedSection>

            <AnimatedSection type="slide-left" delay={0.3}>
              <AnimatedWords
                text="Comprehensive Monitoring Solutions"
                tag="h3"
                className="text-2xl font-bold mb-4 text-brand-teal"
                delay={0.1}
              />
              <AnimatedWords
                text="We design and implement monitoring solutions that provide complete visibility into your systems, applications, and infrastructure. Our approach ensures you have the insights needed to identify and resolve issues before they impact your business."
                className="text-gray-700 mb-6"
                delay={0.2}
                staggerDelay={0.01}
              />
              <ul className="space-y-3 stagger-children">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-brand-teal mr-2 mt-1" />
                  <span>Real-time metrics collection and visualization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-brand-teal mr-2 mt-1" />
                  <span>Custom dashboard creation for key business metrics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-brand-teal mr-2 mt-1" />
                  <span>Automated alerting and notification systems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-brand-teal mr-2 mt-1" />
                  <span>Historical data analysis for trend identification</span>
                </li>
              </ul>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <AnimatedSection type="slide-right" delay={0.1} className="order-2 md:order-1">
              <AnimatedWords
                text="Resilient Infrastructure Design"
                tag="h3"
                className="text-2xl font-bold mb-4 text-brand-teal"
                delay={0.1}
              />
              <AnimatedWords
                text="We help you build resilient systems that can withstand disruptions and recover quickly from failures. Our approach focuses on designing redundancy, implementing robust backup strategies, and creating comprehensive disaster recovery plans."
                className="text-gray-700 mb-6"
                delay={0.2}
                staggerDelay={0.01}
              />
              <ul className="space-y-3 stagger-children">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-brand-teal mr-2 mt-1" />
                  <span>High-availability system architecture</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-brand-teal mr-2 mt-1" />
                  <span>Automated backup and recovery processes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-brand-teal mr-2 mt-1" />
                  <span>Disaster recovery planning and testing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-brand-teal mr-2 mt-1" />
                  <span>Business continuity strategy development</span>
                </li>
              </ul>
            </AnimatedSection>

            <AnimatedSection type="slide-left" delay={0.3} className="order-1 md:order-2">
              <AnimatedImage
                src="/background/ob-1.jpg"
                alt="Resilient infrastructure diagram"
                width={600}
                height={500}
                className="rounded-[25px] shadow-md w-full h-full object-cover"
                imageClassName="w-full h-[400px] object-cover"
                effect="reveal"
              />
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection type="slide-right" delay={0.1}>
              <AnimatedImage
                src="/background/perfomance.avif"
                alt="Performance optimization"
                width={600}
                height={400}
                className="rounded-[25px] shadow-md w-full h-full object-cover"
                imageClassName="w-full h-full"
                effect="reveal"
              />
            </AnimatedSection>

            <AnimatedSection type="slide-left" delay={0.3}>
              <AnimatedText
                text="Performance Optimization"
                tag="h3"
                className="text-2xl font-bold mb-4 text-brand-teal"
                delay={0.1}
              />
              <AnimatedWords
                text="We analyze your system performance data to identify bottlenecks and optimization opportunities. Our experts help you improve response times, reduce resource usage, and enhance overall system efficiency."
                className="text-gray-700 mb-6"
                delay={0.2}
                staggerDelay={0.01}
              />
              <ul className="space-y-3 stagger-children">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-brand-teal mr-2 mt-1" />
                  <span>Performance bottleneck identification</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-brand-teal mr-2 mt-1" />
                  <span>Resource utilization analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-brand-teal mr-2 mt-1" />
                  <span>Capacity planning and scaling recommendations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-brand-teal mr-2 mt-1" />
                  <span>Continuous improvement processes</span>
                </li>
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 container px-4 md:px-6">
        <AnimatedSection type="fade-up">
          <div className="text-center mb-12">
            <h4 className="text-lg font-normal mb-2 text-brand-teal">Why Choose Us</h4>
            <SectionTitle title="The Sortech Observability Advantage" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedSection type="fade-up" delay={0.1}>
            <AnimatedCard className="bg-white p-8 rounded-[25px] shadow-md text-center" hoverEffect="lift">
              <div className="bg-brand-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-brand-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Proactive Monitoring</h3>
              <p className="text-gray-600">
                Identify and resolve issues before they impact your business operations or customer experience.
              </p>
            </AnimatedCard>
          </AnimatedSection>

          <AnimatedSection type="fade-up" delay={0.3}>
            <AnimatedCard className="bg-white p-8 rounded-[25px] shadow-md text-center" hoverEffect="lift">
              <div className="bg-brand-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldIcon className="h-8 w-8 text-brand-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Business Continuity</h3>
              <p className="text-gray-600">
                Maintain operations during disruptions with robust disaster recovery planning and implementation.
              </p>
            </AnimatedCard>
          </AnimatedSection>

          <AnimatedSection type="fade-up" delay={0.5}>
            <AnimatedCard className="bg-white p-8 rounded-[25px] shadow-md text-center" hoverEffect="lift">
              <div className="bg-brand-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <LineChartIcon className="h-8 w-8 text-brand-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Performance Insights</h3>
              <p className="text-gray-600">
                Gain valuable insights into your system performance to drive continuous improvement and optimization.
              </p>
            </AnimatedCard>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 container px-4 md:px-6">
        <AnimatedSection type="fade-up">
          <CTABanner
            title="Enhance Your System Visibility Today"
            subtitle="Schedule a free consultation with our observability experts."
            buttonText="Get Started"
            buttonLink="/contact-us"
          />
        </AnimatedSection>
      </section>

      {/* Contact Section */}
      <section className="py-16 container px-4 md:px-6">
        <AnimatedSection type="fade-up">
          <ContactForm />
        </AnimatedSection>
      </section>
    </div>
  )
}
