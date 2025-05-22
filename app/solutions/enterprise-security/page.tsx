import { ShieldIcon, LockIcon, ServerIcon, CheckCircleIcon } from "lucide-react"
import ContactForm from "@/components/contact-form"
import { PageHero } from "@/components/ui/page-header-title"
import SectionTitle from "@/components/ui/section-title"
import { ServicesAccordion } from "@/components/ui/services_accordions"
import AnimatedSection from "@/components/ui/animated-section"
import AnimatedText from "@/components/ui/animated-text"
import AnimatedWords from "@/components/ui/animated-words"
import AnimatedImage from "@/components/ui/animated-image"
import AnimatedCard from "@/components/ui/animated-card"
import CTABanner from "@/components/ui/cta-banner"

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
      {/* Hero Section - Keeping the original structure */}
      <section className="relative h-[500px] w-full">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <AnimatedImage
          src="/background/security_back.jpg"
          alt="Cybersecurity concept"
          width={1200}
          height={500}
          className="w-full h-full"
          imageClassName="w-full h-full object-cover"
          effect="zoom-in"
          duration={1.5}
        />
        <PageHero subtitle="Sortech" title="Enterprise Security" buttonText="Learn More" />
      </section>

      {/* Options Section - Enhanced with animations */}
      <section className="py-16 container px-4 md:px-6">
        <AnimatedSection type="fade-up">
          <div className="text-center mb-16">
            <SectionTitle title="Enterprise Security Solutions" />
            <AnimatedWords
              text="Comprehensive security solutions to protect your business from evolving cyber threats"
              className="text-gray-600 mt-4 max-w-3xl mx-auto"
              delay={0.2}
              staggerDelay={0.01}
            />
          </div>
        </AnimatedSection>

        <AnimatedSection type="fade-up" delay={0.3}>
          <ServicesAccordion items={services} />
        </AnimatedSection>
      </section>

      {/* Detailed Solutions Section - New section with more details */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <AnimatedSection type="fade-up">
            <div className="text-center mb-12">
              <h4 className="text-lg font-normal mb-2 text-brand-teal">Our Approach</h4>
              <SectionTitle title="How We Secure Your Business" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <AnimatedSection type="slide-right" delay={0.1}>
              <AnimatedImage
                src="/background/security-1.avif"
                alt="Security assessment"
                width={600}
                height={400}
                className="rounded-[25px] shadow-md w-full h-full object-cover"
              imageClassName="w-full h-full object-cover" 

                effect="reveal"
              />
            </AnimatedSection>

            <AnimatedSection type="slide-left" delay={0.3}>
              <AnimatedWords
                text="Comprehensive Security Assessment"
                tag="h3"
                className="text-2xl font-bold mb-4 text-brand-teal"
                delay={0.1}
              />
              <AnimatedWords
                text="We begin with a thorough assessment of your current security posture, identifying vulnerabilities and areas for improvement. Our experts analyze your infrastructure, applications, and processes to develop a complete understanding of your security landscape."
                className="text-gray-700 mb-6"
                delay={0.2}
                staggerDelay={0.01}
              />
              <ul className="space-y-3 stagger-children">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-brand-teal mr-2 mt-1" />
                  <span>Infrastructure vulnerability assessment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-brand-teal mr-2 mt-1" />
                  <span>Application security testing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-brand-teal mr-2 mt-1" />
                  <span>Security policy review</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-brand-teal mr-2 mt-1" />
                  <span>Compliance gap analysis</span>
                </li>
              </ul>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <AnimatedSection type="slide-right" delay={0.1} className="order-2 md:order-1">
              <AnimatedWords
                text="Tailored Security Solutions"
                tag="h3"
                className="text-2xl font-bold mb-4 text-brand-teal"
                delay={0.1}
              />
              <AnimatedWords
                text="Based on our assessment, we develop and implement customized security solutions designed to address your specific needs and challenges. Our approach ensures that you receive the right level of protection without unnecessary complexity or cost."
                className="text-gray-700 mb-6"
                delay={0.2}
                staggerDelay={0.01}
              />
              <ul className="space-y-3 stagger-children">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-brand-teal mr-2 mt-1" />
                  <span>Advanced threat protection systems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-brand-teal mr-2 mt-1" />
                  <span>Data encryption and protection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-brand-teal mr-2 mt-1" />
                  <span>Access control and identity management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-brand-teal mr-2 mt-1" />
                  <span>Security monitoring and incident response</span>
                </li>
              </ul>
            </AnimatedSection>

            <AnimatedSection type="slide-left" delay={0.3} className="order-1 md:order-2">
              <AnimatedImage
                src="/background/security-2.avif"
                alt="Security solutions"
                width={600}
                height={400}
                className="rounded-[25px] shadow-md w-full h-full object-cover"
              imageClassName="w-full h-full object-cover" 

                effect="reveal"
              />
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection type="slide-right" delay={0.1}>
              <AnimatedImage
                src="/background/security-3.avif"
                alt="Ongoing security monitoring"
                width={600}
                height={400}
                className="rounded-[25px] shadow-md w-full h-full object-cover"
              imageClassName="w-full h-full object-cover" 

                effect="reveal"
              />
            </AnimatedSection>

            <AnimatedSection type="slide-left" delay={0.3}>
              <AnimatedWords
                text="Continuous Monitoring and Improvement"
                tag="h3"
                className="text-2xl font-bold mb-4 text-brand-teal"
                delay={0.1}
              />
              <AnimatedWords
                text="Security is not a one-time effort but an ongoing process. We provide continuous monitoring, regular assessments, and proactive updates to ensure your security posture remains strong against evolving threats."
                className="text-gray-700 mb-6"
                delay={0.2}
                staggerDelay={0.01}
              />
              <ul className="space-y-3 stagger-children">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-brand-teal mr-2 mt-1" />
                  <span>24/7 security monitoring</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-brand-teal mr-2 mt-1" />
                  <span>Regular security assessments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-brand-teal mr-2 mt-1" />
                  <span>Threat intelligence updates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-brand-teal mr-2 mt-1" />
                  <span>Security posture improvement recommendations</span>
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
            <SectionTitle title="The Sortech Security Advantage" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedSection type="fade-up" delay={0.1}>
            <AnimatedCard className="bg-white p-8 rounded-[25px] shadow-md text-center" hoverEffect="lift">
              <div className="bg-brand-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldIcon className="h-8 w-8 text-brand-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expertise</h3>
              <p className="text-gray-600">
                Our team brings years of specialized experience in cybersecurity, ensuring you receive the highest
                quality protection.
              </p>
            </AnimatedCard>
          </AnimatedSection>

          <AnimatedSection type="fade-up" delay={0.3}>
            <AnimatedCard className="bg-white p-8 rounded-[25px] shadow-md text-center" hoverEffect="lift">
              <div className="bg-brand-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <LockIcon className="h-8 w-8 text-brand-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Comprehensive Protection</h3>
              <p className="text-gray-600">
                We provide end-to-end security solutions that address all aspects of your digital infrastructure.
              </p>
            </AnimatedCard>
          </AnimatedSection>

          <AnimatedSection type="fade-up" delay={0.5}>
            <AnimatedCard className="bg-white p-8 rounded-[25px] shadow-md text-center" hoverEffect="lift">
              <div className="bg-brand-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ServerIcon className="h-8 w-8 text-brand-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Proactive Approach</h3>
              <p className="text-gray-600">
                We don't just react to threats—we anticipate them, helping you stay ahead of potential security issues.
              </p>
            </AnimatedCard>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 container px-4 md:px-6">
        <AnimatedSection type="fade-up">
          <CTABanner
            title="Secure Your Business Today"
            subtitle="Schedule a free security assessment with our experts."
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
