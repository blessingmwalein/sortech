'use client'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ContactForm from "@/components/contact-form"
import { ArrowRight, LightbulbIcon, ShieldIcon, CheckCircle, SmartphoneIcon } from "lucide-react"
import LearnIcon from "@/components/icons/learn_icon"
import GrowthIcon from "@/components/icons/growth_icon"
import EvolveIcon from "@/components/icons/evolve_icon"
import NumberCard from "@/components/ui/number-card"
import SectionTitle from "@/components/ui/section-title"
import PartnersSlider from "@/components/ui/partner-slider"
import FAQSection from "@/components/ui/faq-section"
import CTABanner from "@/components/ui/cta-banner"
import TestimonialCarousel from "@/components/ui/testimonial-carousel"
import StatsCounter from "@/components/ui/stats-counter"
import AnimatedImage from "@/components/ui/animated-image"
import AnimatedText from "@/components/ui/animated-text"
import AnimatedSection from "@/components/ui/animated-section"
import AnimatedButton from "@/components/ui/animated-button"
import AnimatedCard from "@/components/ui/animated-card"
import AnimatedWords from "@/components/ui/animated-words"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="container pb-40 m-8 relative z-10">
        <div className="relative h-[600px] rounded-[30px] overflow-hidden">
          <div className="absolute inset-0 bg-[#000000B2] z-10" />
          <AnimatedImage
            src="/background/home_back_1.jpg"
            alt="Modern home with smart technology"
            className="w-full h-full"
            imageClassName="w-full h-full object-cover" // important
            effect="zoom-in"
            duration={1.5} width={0} height={0}

          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 md:px-6">
            <AnimatedWords
              text="Simplifying Your Everyday Living"
              tag="p"
              className="text-white/80 mb-2 text-35px"
              delay={0.3}
            />
            <AnimatedText
              text="Secure Your Home"
              tag="h1"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 heading-1"
              delay={0.5}
              staggerDelay={0.03}
            />
            <AnimatedText
              text="With Sortech"
              tag="h1"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 heading-1"
              delay={0.8}
              staggerDelay={0.03}
            />
            <AnimatedSection type="fade-up" delay={1.2}>
              <AnimatedButton
                className="bg-transparent hover:bg-white-light text-white rounded-full border-2 border-white px-10 py-7 button-text-nomal"
                hoverEffect="glow"
              >
                Learn More
              </AnimatedButton>
            </AnimatedSection>
          </div>
        </div>
      </section>
      {/* Features Section with Overlap */}
      <section className="container -mt-60 relative z-20 px-4 md:px-6">
        <div className="flex flex-row flex-wrap justify-center gap-6">
          {[
            {
              icon: <LearnIcon />,
              title: "Learn",
              text: `We believe in continuous learning. There are always new ways to approach our customers' everyday problems.`,
              delay: 0.1,
            },
            {
              icon: <GrowthIcon />,
              title: "Growth",
              text: `Our approach is centered on sustainable, customer-centric growth, where we work together with our customers to achieve shared goals.`,
              delay: 0.3,
            },
            {
              icon: <EvolveIcon />,
              title: "Evolve",
              text: `Through continuous learning and growth, we aim to enhance our own capabilities and make a positive impact on the markets and communities we serve.`,
              delay: 0.5,
            },
          ].map(({ icon, title, text, delay }, index) => (
            <AnimatedSection key={index} type="fade-up" delay={delay}>
              <AnimatedCard
                className="bg-brand-teal sm:w-[280px] md:w-[300px] p-6 rounded-[30px] text-white flex flex-col items-center text-center shadow-lg border-4 border-white"
                hoverEffect="lift"
              >
                {icon}
                <h3 className="text-xl font-bold mb-2 mt-1">{title}</h3>
                <p className="text-white/80">{text}</p>
              </AnimatedCard>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Stats Counter Section */}
      <AnimatedSection type="fade-up" className="py-16 container px-4 md:px-6">
        <StatsCounter />
      </AnimatedSection>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <AnimatedSection type="fade-up">
            <div className="text-center mb-12">
              <SectionTitle title="What Our Clients Say" />
            </div>
          </AnimatedSection>
          <AnimatedSection type="fade-up" delay={0.2}>
            <TestimonialCarousel />
          </AnimatedSection>
        </div>
      </section>

      {/* Technology Partners */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <AnimatedSection type="fade-up">
            <div className="text-center mb-12">
              <SectionTitle title="Our Technology Partners" />
              <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
                We integrate with leading smart home technology providers to deliver seamless, reliable solutions.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Smart Lighting", logo: "/placeholder.svg?height=80&width=160", delay: 0.1 },
              { name: "Home Security", logo: "/placeholder.svg?height=80&width=160", delay: 0.2 },
              { name: "Entertainment Systems", logo: "/placeholder.svg?height=80&width=160", delay: 0.3 },
              { name: "Climate Control", logo: "/placeholder.svg?height=80&width=160", delay: 0.4 },
              { name: "Voice Assistants", logo: "/placeholder.svg?height=80&width=160", delay: 0.5 },
              { name: "Smart Appliances", logo: "/placeholder.svg?height=80&width=160", delay: 0.6 },
              { name: "Energy Management", logo: "/placeholder.svg?height=80&width=160", delay: 0.7 },
              { name: "Water Management", logo: "/placeholder.svg?height=80&width=160", delay: 0.8 },
            ].map((partner, index) => (
              <AnimatedSection key={index} type="fade-up" delay={partner.delay}>
                <div className="flex flex-col items-center">
                  <AnimatedCard
                    className="bg-white p-4 rounded-lg shadow-sm w-full h-24 flex items-center justify-center"
                    hoverEffect="glow"
                  >
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      width={160}
                      height={80}
                      className="max-h-16 object-contain"
                    />
                  </AnimatedCard>
                  <p className="mt-2 text-center text-sm text-gray-600">{partner.name}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section> */}

      {/* About Section */}
      <section className="py-12 container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <AnimatedSection type="slide-right">
            <div className="relative h-[500px] rounded-[30px]">
              <AnimatedImage
                src="/background/home_who.jpg"
                alt="Smart home interface"
                width={700}
                height={500}
                className="object-cover w-full h-full rounded-[30px]"
                effect="reveal"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection type="slide-left" className="ml-6">
            <AnimatedWords
              text="Who We Are"
              tag="h2"
              className="text-5xl font-bold mb-2"
              delay={0.2}
              staggerDelay={0.02}
            />
            <AnimatedWords
              text="And What You"
              tag="h2"
              className="text-5xl font-bold mb-2"
              delay={0.4}
              staggerDelay={0.02}
            />
            <AnimatedWords
              text="Get From Us"
              tag="h2"
              className="text-5xl font-bold mb-8"
              delay={0.6}
              staggerDelay={0.02}
            />
            <AnimatedSection type="fade-up" delay={0.8}>
              <p className="text-gray-600 mb-6">
                We specialize in cyber security, data privacy, home automation solutions and infrastructure management
                services.
              </p>
              <AnimatedButton
                onClick={() => router.push('/about-us')}
                className="mt-4 bg-white text-teal border-2 border-teal hover:bg-brand-teal hover:text-white rounded-full py-6 px-8 text-[18px]"
                hoverEffect="fill"
              >
                Learn More
              </AnimatedButton>
            </AnimatedSection>
          </AnimatedSection>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-16 container px-4 md:px-6">
        <AnimatedSection type="fade-up" className="text-center mb-12">
          <SectionTitle title="Benefits of Home Automation" />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <LightbulbIcon className="h-8 w-8 text-brand-teal" />,
              title: "Energy Efficiency",
              description:
                "Smart thermostats, lighting, and appliances optimize energy usage, reducing utility bills by up to 30%.",
              features: ["Automated temperature control", "Motion-activated lighting", "Smart power management"],
              delay: 0.1,
            },
            {
              icon: <ShieldIcon className="h-8 w-8 text-brand-teal" />,
              title: "Enhanced Security",
              description:
                "Comprehensive security systems with remote monitoring capabilities provide peace of mind whether you're home or away.",
              features: ["Smart locks and doorbell cameras", "Motion sensors and alarms", "24/7 monitoring options"],
              delay: 0.3,
            },
            {
              icon: <SmartphoneIcon className="h-8 w-8 text-brand-teal" />,
              title: "Convenience & Control",
              description:
                "Control your entire home from your smartphone or voice commands, creating personalized routines for different scenarios.",
              features: ["Voice-activated controls", "Customizable automation routines", "Remote access from anywhere"],
              delay: 0.5,
            },
          ].map((benefit, index) => (
            <AnimatedSection key={index} type="fade-up" delay={benefit.delay}>
              <AnimatedCard className="bg-white p-8 rounded-[25px] shadow-md border border-gray-100" hoverEffect="lift">
                <div className="bg-brand-teal/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
                <ul className="mt-4 space-y-2">
                  {benefit.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-teal mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedCard>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Product Categories */}
      <section className="container py-12 bg-gray-50">
        <div className=" px-4 md:px-6">
          <h4 className="text-lg font-normal mb-2 text-brand-teal">Our Solutions</h4>

          <SectionTitle title="Product Categories." />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="relative h-[400px] rounded-[30px] overflow-hidden group">
              <Image
                src="/background/home_automation.jpg"
                alt="Home Automation"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black/50 flex items-end p-4">
                <Link
                  href="/solutions/home-automation"
                  className="bg-transparent border-white border-2 text-white px-4 py-3 rounded-full text-base group-hover:bg-brand-teal transition-colors"
                >
                  Home Automation <ArrowRight className="h-4 w-4 inline ml-1" />
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-[30px] overflow-hidden group">
              <Image
                src="/background/enterprice-security.jpg"
                alt="Enterprise Security"
                width={400}
                height={200}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black/50 flex items-end p-4">
                <Link
                  href="/solutions/enterprise-security"
                  className="bg-transparent border-white border-2 text-white px-4 py-3 rounded-full text-base group-hover:bg-brand-teal transition-colors"
                >
                  Enterprise Security <ArrowRight className="h-4 w-4 inline ml-1" />
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-[30px] overflow-hidden group">
              <Image
                src="/background/obser.jpg"
                alt="Observability and Resilience"
                width={400}
                height={200}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black/50 flex items-end p-4">
                <Link
                  href="/solutions/observability-resilience"
                  className="bg-transparent border-white border-2 text-white px-4 py-3 rounded-full text-base group-hover:bg-brand-teal transition-colors"
                >
                  Observability and Resilience <ArrowRight className="h-4 w-4 inline ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 container px-4 md:px-6">
        <AnimatedSection type="fade-up">
          <h4 className="text-lg font-normal mb-2 text-brand-teal">Service Offering</h4>
          <SectionTitle title="Your Home. Simplified." />
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 stagger-children">
          <NumberCard number="01" label="Observability Platform Engineering" />
          <NumberCard number="02" label="Data Privacy Consulting" />
          <NumberCard number="03" label="Cyber Security Consulting" />
          <NumberCard number="04" label="Technical Support And Advisory" />
        </div>
      </section>
      {/* Industries Section */}
      <section className="py-12 bg-[#DAE9E9]">
        <div className="container px-4 md:px-6 py-6">
          <SectionTitle title="Industries Served." />

          <div className="flex flex-wrap gap-4 justify-center mt-6">
            {[
              "Banking & Finance",
              "Telecommunications",
              "Residential Homes",
              "Manufacturing",
              "Technology",
              "Insurance",
              "Transportation",
              "Energy and Utilities",
              "Healthcare",
            ].map((industry) => (
              <div key={industry} className="bg-[#B7D3D3] px-4 py-2 rounded-full text-black text-lg">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <PartnersSlider />

      {/* FAQ Section */}
      <section className="py-16 container px-4 md:px-6">
        <FAQSection
          faqs={[
            {
              question: "Can I control my home automation system when I'm away?",
              answer:
                "Yes, all our home automation systems include remote access capabilities through secure mobile apps. You can control lighting, security, climate, and entertainment systems from anywhere with an internet connection.",
            },
            {
              question: "Will home automation work with my existing devices?",
              answer:
                "In most cases, yes. We design our solutions to integrate with many existing systems and can advise on compatibility during our initial assessment. Our goal is to maximize the value of your current technology while enhancing it with new capabilities.",
            },
            {
              question: "How long does installation typically take?",
              answer:
                "Installation time varies based on the complexity of your system and the size of your home. A basic setup might take 1-2 days, while comprehensive whole-home automation could take 3-5 days. We provide a detailed timeline during the consultation phase.",
            },
            {
              question: "What happens if something stops working?",
              answer:
                "We offer comprehensive support packages with different response times based on your needs. Our standard support includes remote diagnostics, phone support, and on-site service when necessary. Many issues can be resolved remotely without a home visit.",
            },
            {
              question: "Is home automation expensive to maintain?",
              answer:
                "Modern home automation systems are designed for reliability and longevity. While there may be occasional software updates or hardware replacements, the maintenance costs are typically minimal compared to the benefits in convenience, security, and energy savings.",
            },
          ]}
        />
      </section>

      {/* CTA Banner */}
      <section className="py-16 container px-4 md:px-6">
        <CTABanner
          title="Transform Your Home Today"
          subtitle="Schedule a free consultation with our home automation experts."
          buttonText="Get Started"
          buttonLink="/contact"
        />
      </section>

      {/* Contact Section */}
      <section className="py-12  px-4 md:px-6">
        <ContactForm />
      </section>
    </div>
  )
}
