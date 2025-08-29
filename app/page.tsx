'use client'
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ContactForm from "@/components/contact-form"
import { ArrowRight, LightbulbIcon, ShieldIcon, CheckCircle, SmartphoneIcon, ChevronLeft, ChevronRight, LockIcon, MonitorIcon, WifiIcon, DatabaseIcon, CpuIcon, CloudIcon, EyeIcon, SettingsIcon, ZapIcon, BrainCircuitIcon } from "lucide-react"
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
import { useState, useEffect } from "react"

export default function Home() {
  const router = useRouter()
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Main services slider data
  const heroSlides = [
    {
      title: "Secure Your Home",
      subtitle: "With Smart Automation",
      description: "Transform your living space with intelligent home automation solutions that provide security, comfort, and energy efficiency.",
      buttonText: "Explore Home Automation",
      buttonAction: () => router.push('/solutions/home-automation'),
      backgroundImage: "/background/home/hand-holding-smartphone-home.jpg"
    },
    {
      title: "Enterprise Security",
      subtitle: "Advanced Protection",
      description: "Comprehensive cybersecurity solutions and data protection services to safeguard your business operations and sensitive information.",
      buttonText: "Learn About Security",
      buttonAction: () => router.push('/solutions/enterprise-security'),
      backgroundImage: "/background/enterprice_1.jpg"
    },
    {
      title: "Observability & Resilience",
      subtitle: "System Monitoring",
      description: "Professional monitoring and resilience solutions to ensure your systems are always running at peak performance.",
      buttonText: "Discover Monitoring",
      buttonAction: () => router.push('/solutions/observability-resilience'),
      backgroundImage: "/background/obse/onser_1.jpg"
    },
    {
      title: "Technology Consulting",
      subtitle: "Expert Guidance",
      description: "Strategic technology consulting to help you make informed decisions and implement the right solutions for your needs.",
      buttonText: "Get Consultation",
      buttonAction: () => router.push('/contact-us'),
      backgroundImage: "/background/it/it_1.jpg"
    }
  ]

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000) // Change slide every 6 seconds

    return () => clearInterval(timer)
  }, [heroSlides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }
  return (
    <div className="flex flex-col min-h-screen mobile-px-2 md:px-6 lg:px-10">
      {/* Hero Section - Responsive Slider */}
      <section className="pb-20 mt-6 relative z-10">
        <div className="relative aspect-[4/3] sm:aspect-[16/9] md:aspect-[16/7] lg:aspect-[5/2] rounded-[15px] sm:rounded-[25px] overflow-hidden">
          {/* Slider Images */}
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <AnimatedImage
                src={slide.backgroundImage}
                alt={slide.title}
                className="w-full h-full"
                imageClassName="w-full h-full"
                effect="parallax"
                parallaxStrength={3}
                duration={1.5}
                width={0}
                height={0}
              />
            </div>
          ))}

          {/* Overlay */}
          <div className="absolute inset-0 bg-[#0000005d] z-10" />

          {/* Content */}
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-start text-left px-3 sm:px-6 md:px-8 lg:px-12">
            <div className="max-w-xl sm:max-w-2xl">
              <AnimatedWords
                text="Simplifying Your Everyday Living"
                tag="p"
                className="text-white/80 mb-1 sm:mb-2 mobile-text-sm"
                delay={0.3}
              />
              <AnimatedText
                text={heroSlides[currentSlide].title}
                tag="h1"
                className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-1 sm:mb-2 leading-tight"
                delay={0.5}
                staggerDelay={0.03}
              />
              <AnimatedText
                text={heroSlides[currentSlide].subtitle}
                tag="h2"
                className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-4 leading-tight"
                delay={0.8}
                staggerDelay={0.03}
              />
              <AnimatedSection type="fade-up" delay={1.0}>
                <p className="text-white/90 mb-4 sm:mb-6 mobile-text-sm max-w-sm sm:max-w-lg leading-relaxed">
                  {heroSlides[currentSlide].description}
                </p>
              </AnimatedSection>
              <AnimatedSection type="fade-up" delay={1.2}>
                <AnimatedButton
                  onClick={heroSlides[currentSlide].buttonAction}
                  className="bg-transparent hover:bg-white/10 text-white rounded-full border-2 border-white px-3 sm:px-4 md:px-6 py-2 sm:py-3 mobile-text-sm transition-all duration-300"
                  hoverEffect="glow"
                >
                  {heroSlides[currentSlide].buttonText}
                </AnimatedButton>
              </AnimatedSection>
            </div>
          </div>

          {/* Navigation Controls - Bottom Right */}
          <div className="absolute bottom-4 right-4 z-30 flex items-center gap-3">
            {/* Prev/Next Buttons */}
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Slide Indicators */}
            <div className="flex gap-2 ml-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${index === currentSlide
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/75'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Features Section with Overlap - Specialization Areas */}
      <section className="  relative z-20">
        <div className="mx-2 sm:mx-1 md:mx-1">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 xl:gap-3 xl:flex-nowrap">
            {[
              {
                icon: <SmartphoneIcon className="w-32 h-32" />,
                title: "Secure Smart Home",
                text: `Smart IoT devices, security cameras, intelligent lighting, and complete home automation solutions with security-first approach.`,
                delay: 0.1,
              },
              {
                icon: <ShieldIcon className="w-32 h-32" />,
                title: "Enterprise and Consumer Security",
                text: `Comprehensive cybersecurity solutions, SSL certificates, and penetration testing for both enterprise and consumer environments.`,
                delay: 0.2,
              },
              {
                icon: <LockIcon className="w-32 h-32" />,
                title: "Data Protection Advisory",
                text: `Expert guidance on data privacy compliance, GDPR requirements, and data protection strategies for your organization.`,
                delay: 0.3,
              },
              {
                icon: <CheckCircle className="w-32 h-32" />,
                title: "ISO27001 Advisory",
                text: `Professional ISO27001 certification consulting, implementation guidance, and ongoing compliance support services.`,
                delay: 0.4,
              },
              {
                icon: <MonitorIcon className="w-32 h-32" />,
                title: "Observability",
                text: `Advanced monitoring with Prometheus, Grafana, and Thanos solutions for comprehensive system observability and performance insights.`,
                delay: 0.5,
              },
            ].map(({ icon, title, text, delay }, index) => (
              <AnimatedSection key={index} type="fade-up" delay={delay}>
                <AnimatedCard
                  className="relative bg-brand-teal w-full max-w-[280px] sm:w-[260px] xl:w-[280px] h-[260px] sm:h-[280px] rounded-[20px] sm:rounded-[25px] overflow-hidden shadow-xl border-3 border-white group flex-shrink-0"
                  hoverEffect="lift"
                >
                  {/* Large cutout icon as background - white color */}
                  <div className="absolute -top-6 sm:-top-8 -right-6 sm:-right-8 text-white/15 group-hover:text-white/25 transition-colors duration-300">
                    {index === 0 && <SmartphoneIcon className="w-40 sm:w-48 h-40 sm:h-48" />}
                    {index === 1 && <ShieldIcon className="w-40 sm:w-48 h-40 sm:h-48" />}
                    {index === 2 && <LockIcon className="w-40 sm:w-48 h-40 sm:h-48" />}
                    {index === 3 && <CheckCircle className="w-40 sm:w-48 h-40 sm:h-48" />}
                    {index === 4 && <MonitorIcon className="w-40 sm:w-48 h-40 sm:h-48" />}
                  </div>

                  {/* Content overlay */}
                  <div className="relative z-10 p-4 sm:p-6 h-full flex flex-col justify-center">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 leading-tight">{title}</h3>
                      <p className="text-white/90 mobile-text-sm leading-relaxed">{text}</p>
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </AnimatedCard>
              </AnimatedSection>
            ))}
          </div>
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

      {/* About Section - Matching Design */}
      <section className="section-spacing">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Side - Image with Smart Home Interface Overlay */}
          <AnimatedSection type="slide-right">
            <div className="relative h-[400px] sm:h-[450px] lg:h-[500px] rounded-[20px] sm:rounded-[25px] overflow-hidden">
              <AnimatedImage
                src="/background/home/future.jpeg"
                alt="Smart home interface"
                width={700}
                height={500}
                className="object-cover w-full h-full rounded-[25px]"
                effect="reveal"
              />

              {/* Smart Home Interface Overlay - matching the design */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Central Home Icon */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-40 h-40 bg-white/20 backdrop-blur-sm rounded-full border-2 border-white/50 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center">
                    <SmartphoneIcon className="w-12 h-12 text-brand-teal" />
                  </div>
                </div>

                {/* Connecting Lines and Icons */}
                <div className="absolute -top-24 left-1/2 transform -translate-x-1/2">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full border border-white/50 flex items-center justify-center">
                    <ShieldIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-0.5 h-16 bg-white/50 mx-auto"></div>
                </div>

                <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2">
                  <div className="w-0.5 h-16 bg-white/50 mx-auto"></div>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full border border-white/50 flex items-center justify-center">
                    <LockIcon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="absolute top-1/2 -left-24 transform -translate-y-1/2">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full border border-white/50 flex items-center justify-center">
                    <MonitorIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className="h-0.5 w-16 bg-white/50 absolute top-1/2 right-16 transform -translate-y-1/2"></div>
                </div>

                <div className="absolute top-1/2 -right-24 transform -translate-y-1/2">
                  <div className="h-0.5 w-16 bg-white/50 absolute top-1/2 left-16 transform -translate-y-1/2"></div>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full border border-white/50 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Corner Tech Service Icons */}
                <div className="absolute -top-20 -left-20">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full border border-white/50 flex items-center justify-center">
                    <WifiIcon className="w-7 h-7 text-white" />
                  </div>
                </div>

                <div className="absolute -top-20 -right-20">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full border border-white/50 flex items-center justify-center">
                    <CloudIcon className="w-7 h-7 text-white" />
                  </div>
                </div>

                <div className="absolute -bottom-20 -left-20">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full border border-white/50 flex items-center justify-center">
                    <DatabaseIcon className="w-7 h-7 text-white" />
                  </div>
                </div>

                <div className="absolute -bottom-20 -right-20">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full border border-white/50 flex items-center justify-center">
                    <CpuIcon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Additional Tech Service Icons - Outer Ring */}
                <div className="absolute -top-8 -left-24">
                  <div className="w-10 h-10 bg-white/15 backdrop-blur-sm rounded-full border border-white/40 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>

                <div className="absolute -top-24 -left-8">
                  <div className="w-10 h-10 bg-white/15 backdrop-blur-sm rounded-full border border-white/40 flex items-center justify-center">
                    <ShieldIcon className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="absolute -top-8 -right-24">
                  <div className="w-10 h-10 bg-white/15 backdrop-blur-sm rounded-full border border-white/40 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="absolute -top-24 -right-8">
                  <div className="w-10 h-10 bg-white/15 backdrop-blur-sm rounded-full border border-white/40 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>

                <div className="absolute -bottom-8 -left-24">
                  <div className="w-10 h-10 bg-white/15 backdrop-blur-sm rounded-full border border-white/40 flex items-center justify-center">
                    <LightbulbIcon className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="absolute -bottom-24 -left-8">
                  <div className="w-10 h-10 bg-white/15 backdrop-blur-sm rounded-full border border-white/40 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>

                <div className="absolute -bottom-8 -right-24">
                  <div className="w-10 h-10 bg-white/15 backdrop-blur-sm rounded-full border border-white/40 flex items-center justify-center">
                    <MonitorIcon className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="absolute -bottom-24 -right-8">
                  <div className="w-10 h-10 bg-white/15 backdrop-blur-sm rounded-full border border-white/40 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Side - Content Card matching the design */}
          <AnimatedSection type="slide-left">
            <div className="bg-white p-6 sm:p-8 rounded-[20px] sm:rounded-[25px] shadow-xl border border-gray-100">
              <AnimatedWords
                text="Who We Are"
                tag="h2"
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 text-gray-900 leading-tight"
                delay={0.2}
                staggerDelay={0.02}
              />
              <AnimatedWords
                text="And What You"
                tag="h2"
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 text-gray-900 leading-tight"
                delay={0.4}
                staggerDelay={0.02}
              />
              <AnimatedWords
                text="Get From Us"
                tag="h2"
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900 leading-tight"
                delay={0.6}
                staggerDelay={0.02}
              />

              <AnimatedSection type="fade-up" delay={0.8}>
                <p className="text-gray-600 mb-4 sm:mb-6 mobile-text-sm leading-relaxed">
                  We specialize in cyber security, data privacy, home automation solutions and infrastructure management services.
                </p>

                <p className="text-gray-600 mb-4 sm:mb-6 mobile-text-sm leading-relaxed">
                  Sortech Private Limited is a technology company formed in August 2024. We bridge the gap in both Zimbabwean consumer and commercial markets for cost-effective technology solutions.
                </p>

                <AnimatedButton
                  onClick={() => router.push('/about-us')}
                  className="bg-brand-teal text-white hover:bg-teal-700 rounded-full px-6 sm:px-8 py-2 sm:py-3 font-semibold transition-all inline-flex items-center gap-2 mobile-text-sm"
                  hoverEffect="glow"
                >
                  Learn More
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </AnimatedButton>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </section>
      {/* Benefits Section */}
      {/* <section className="py-16 container px-4 md:px-6">
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
      </section> */}
      <section className="section-spacing-sm relative overflow-hidden">
        <SectionTitle title="Industries Served." />

        <div className="mobile-px-2 py-4 sm:py-6 relative z-10">

          <div className="flex flex-wrap gap-2 sm:gap-4 justify-center mt-4 sm:mt-6">
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
              <div key={industry} className="bg-[#B7D3D3] px-3 sm:px-4 py-2 rounded-full text-black mobile-text-sm">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Product Categories */}
      <section className="section-spacing-sm">
        <h4 className="mobile-text-base font-normal mb-2 text-brand-teal">Our Solutions</h4>
        <SectionTitle title="Product Categories." />

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
          {[
            {
              key: "home-automation",
              title: "Home Automation",
              img: "/background/home/home-time.jpg",
              link: "/solutions/home-automation",
              offerings: [
                { number: "01", label: "Entertainment Integration" },
                { number: "02", label: "Smart Lighting Solutions" },
                { number: "03", label: "Comfort & Convenience" },
                { number: "04", label: "Safety & Security Systems" },
              ],
            },
            {
              key: "enterprise-security",
              title: "Enterprise Security",
              img: "/background/home/cyber.jpg",
              link: "/solutions/enterprise-security",
              offerings: [
                { number: "01", label: "Domain Management Advisory" },
                { number: "02", label: "Data Protection Advisory" },
                { number: "03", label: "Cyber Security Solutions" },
                { number: "04", label: "SSL Certificates Products" },
              ],
            },
            {
              key: "observability-resilience",
              title: "Observability and Resilience",
              img: "/background/home/observe.jpg",
              link: "/solutions/observability-resilience",
              offerings: [
                { number: "01", label: "Prometheus Monitoring" },
                { number: "02", label: "Grafana Dashboards" },
                { number: "03", label: "Data Recovery & Resilience" },
                { number: "04", label: "Technical Support" },
              ],
            },
          ].map((cat) => (
            <div key={cat.key} className={`relative h-[320px] sm:h-[380px] md:h-[400px] rounded-[25px] sm:rounded-[30px] overflow-hidden group cursor-pointer border-3 transition-all duration-300 ${activeCategory === cat.key
              ? 'border-brand-teal shadow-lg scale-105'
              : 'border-transparent hover:border-brand-teal/50'
              }`}
              onClick={() => setActiveCategory(activeCategory === cat.key ? null : cat.key)}
              tabIndex={0}
              role="button"
              aria-pressed={activeCategory === cat.key}
              aria-label={`Show offerings for ${cat.title}`}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setActiveCategory(activeCategory === cat.key ? null : cat.key) }}
            >
              <Image
                src={cat.img}
                alt={`${cat.title} background image`}
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
              <div className={`absolute inset-0 flex items-end p-3 sm:p-4 transition-all duration-300 ${activeCategory === cat.key
                ? 'bg-brand-teal/70'
                : 'bg-black/50'
                }`}>
                <span className={`border-2 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-full mobile-text-sm font-semibold transition-all duration-300 ${activeCategory === cat.key
                  ? 'bg-white text-brand-teal border-white'
                  : 'bg-transparent border-white group-hover:bg-brand-teal'
                  }`}>
                  {cat.title} <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 inline ml-1" />
                </span>
              </div>

              {/* Active indicator */}
              {activeCategory === cat.key && (
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-5 h-5 sm:w-6 sm:h-6 bg-brand-teal rounded-full flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Active Category Details */}
        {activeCategory && (
          <AnimatedSection type="fade-up" className="mt-8 sm:mt-12">
            <div className="rounded-[25px] sm:rounded-[30px]">
              <SectionTitle
                title={
                  [
                    { key: "home-automation", title: "Home Automation Solutions" },
                    { key: "enterprise-security", title: "Enterprise Security Services" },
                    { key: "observability-resilience", title: "Observability & Resilience" },
                  ].find(cat => cat.key === activeCategory)?.title || "Our Services"
                }
              />

              <p className="text-gray-600 mb-6 sm:mb-8 mobile-text-sm leading-relaxed">
                Explore our comprehensive offerings in this category
              </p>



              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {[
                  {
                    key: "home-automation",
                    offerings: [
                      { number: "01", label: "Entertainment Integration" },
                      { number: "02", label: "Smart Lighting Solutions" },
                      { number: "03", label: "Comfort & Convenience" },
                      { number: "04", label: "Safety & Security Systems" },
                    ],
                  },
                  {
                    key: "enterprise-security",
                    offerings: [
                      { number: "01", label: "Domain Management Advisory" },
                      { number: "02", label: "Data Protection Advisory" },
                      { number: "03", label: "Cyber Security Solutions" },
                      { number: "04", label: "SSL Certificates Products" },
                    ],
                  },
                  {
                    key: "observability-resilience",
                    offerings: [
                      { number: "01", label: "Prometheus Monitoring" },
                      { number: "02", label: "Grafana Dashboards" },
                      { number: "03", label: "Data Recovery & Resilience" },
                      { number: "04", label: "Technical Support" },
                    ],
                  },
                ].find(cat => cat.key === activeCategory)?.offerings.map((offering, index) => (
                  <AnimatedSection key={index} type="fade-up" delay={0.1 * (index + 1)}>
                    <NumberCard number={offering.number} label={offering.label} />
                  </AnimatedSection>
                ))}
              </div>

              <div className="text-center mt-6 sm:mt-8">
                <Link
                  href={[
                    { key: "home-automation", link: "/solutions/home-automation" },
                    { key: "enterprise-security", link: "/solutions/enterprise-security" },
                    { key: "observability-resilience", link: "/solutions/observability-resilience" },
                  ].find(cat => cat.key === activeCategory)?.link || "#"}
                  className="inline-flex items-center gap-2 bg-brand-teal text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-teal-700 transition-all mobile-text-sm"
                >
                  Learn More About This Category
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        )}
      </section>

      {/* Industries Section */}

      {/* Partners Section */}
      <PartnersSlider />

      {/* FAQ Section */}

      {/* CTA Banner */}
      {/* <section className="py-16 container px-4 md:px-6">
        <CTABanner
          title="Transform Your Home Today"
          subtitle="Schedule a free consultation with our home automation experts."
          buttonText="Get Started"
          buttonLink="/contact"
        />
      </section> */}


    </div>
  )
}
