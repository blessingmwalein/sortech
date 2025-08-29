import { ArrowRight } from "lucide-react"
import TeamSection from "@/components/ui/team-section"
import CTABanner from "@/components/ui/cta-banner"
import SectionTitle from "@/components/ui/section-title"
import AnimatedSection from "@/components/ui/animated-section"
// import AnimatedWords from "@/components/ui/animated-text"
import AnimatedWords from "@/components/ui/animated-words"
import AnimatedButton from "@/components/ui/animated-button"
import AnimatedCard from "@/components/ui/animated-card"
import AnimatedImage from "@/components/ui/animated-image"
import Image from "next/image"
import Link from "next/link"
import { PatternBackground } from "@/components/ui/pattern-background"

const AboutUs = () => {
  return (
    <div className="bg-white relative">
      {/* Hero Section with Background Image */}
      <section className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
        {/* Pattern background overlay for branding */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <PatternBackground
            spacing={40}
            backgroundColor="transparent"
            vectorColor="#E0F2F2"
            style={{ opacity: 0.22 }}
          />
        </div>
        <div className="absolute inset-0 bg-[#000000B2] z-10" />
        <AnimatedImage
          src="/background/about_back.jpg"
          alt="Sortech team working on technology solutions"
          width={1920}
          height={500}
          className="object-cover w-full h-full"
          effect="parallax"
          parallaxStrength={7}
          duration={1.5}
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center mobile-px-2">
          <AnimatedWords
            text="About Us"
            tag="h1"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4 leading-tight"
            delay={0.3}
            staggerDelay={0.03}
          />
          <AnimatedWords
            text="Simplifying technology for everyday living"
            tag="p"
            className="text-white/80 mobile-text-base max-w-2xl sm:max-w-3xl leading-relaxed"
            delay={0.6}
            staggerDelay={0.01}
          />
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="section-spacing container mobile-px-2">
        <AnimatedSection type="fade-up">
          <div className="text-center mb-6 sm:mb-8">
            <SectionTitle title="Who We Are" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <AnimatedSection type="slide-right" delay={0.2}>
            <AnimatedImage
              src="/sortech-logos/s-logo-tealback.jpg"
              alt="Sortech team"
              width={600}
              height={400}
              className="rounded-[20px] sm:rounded-[25px] shadow-md"
              imageClassName="w-full h-full object-cover" 
              effect="reveal"
            />
          </AnimatedSection>

          <AnimatedSection type="slide-left" delay={0.4}>
            <div className="space-y-4 sm:space-y-6">
              <AnimatedWords
                text="Sortech Private Limited is a technology company formed in August 2024 that specializes in cyber security, data privacy, home automation solutions and infrastructure management services."
                className="text-gray-700 mobile-text-base leading-relaxed"
                delay={0.5}
                staggerDelay={0.01}
              />

              <AnimatedWords
                text="We realized that there is a gap in both the Zimbabwean consumer and commercial markets for technology solutions that cost effectively meets customer needs."
                className="text-gray-700 mobile-text-base leading-relaxed"
                delay={0.7}
                staggerDelay={0.01}
              />

              <AnimatedWords
                text="With the ever-changing technology landscape, we believe our youthful team is geared to face the challenges and help our customers simplify their everyday living."
                className="text-gray-700 mobile-text-base leading-relaxed"
                delay={0.9}
                staggerDelay={0.01}
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-spacing bg-brand-gray-50 relative overflow-hidden">
        {/* Pattern background for branding */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <PatternBackground
            spacing={50}
            backgroundColor="transparent"
            vectorColor="#B7D3D3"
            style={{ opacity: 0.13 }}
          />
        </div>
        <div className="container mobile-px-2 relative z-10">
          <AnimatedSection type="fade-up">
            <div className="text-center mb-8 sm:mb-12">
              <SectionTitle title="Our Core Values" />
            </div>
          </AnimatedSection>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-6 sm:mt-10">
            {/* Rotated Card */}
            <div className="relative">
              <div className="bg-teal p-5 sm:p-6 rounded-[20px] sm:rounded-[25px] text-white transform -rotate-3 sm:-rotate-6 origin-bottom-left shadow-lg">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Customer Centric</h3>
                <p className="mobile-text-sm leading-relaxed">
                  We design solutions specifically tailored to your needs and deliver them with exceptional attention to
                  detail.
                </p>
              </div>
            </div>

            {/* Normal Cards */}
            <div className="bg-white p-5 sm:p-6 rounded-[20px] sm:rounded-[25px] border shadow">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Professionalism</h3>
              <p className="mobile-text-sm leading-relaxed">Our team operates under the highest level of transparency, open communication and accountability.</p>
            </div>
            <div className="bg-white p-5 sm:p-6 rounded-[20px] sm:rounded-[25px] border shadow">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Innovation</h3>
              <p className="mobile-text-sm leading-relaxed">Our team delivers highly optimized solutions to meet your needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-spacing container mobile-px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          <AnimatedSection type="slide-right" delay={0.1}>
            <AnimatedCard className="bg-white p-6 sm:p-8 rounded-[20px] sm:rounded-[25px] shadow-md border border-gray-100" hoverEffect="lift">
              <AnimatedWords
                text="Our Mission"
                tag="h3"
                className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-brand-teal"
                delay={0.2}
              />
              <AnimatedWords
                text="To simplify everyday living through innovative technology solutions that are accessible, reliable, and tailored to our customers' unique needs."
                tag="p"
                className="text-gray-700 mobile-text-sm leading-relaxed"
                delay={0.3}
                staggerDelay={0.01}
              />
            </AnimatedCard>
          </AnimatedSection>

          <AnimatedSection type="slide-left" delay={0.3}>
            <AnimatedCard className="bg-white p-6 sm:p-8 rounded-[20px] sm:rounded-[25px] shadow-md border border-gray-100" hoverEffect="lift">
              <AnimatedWords
                text="Our Vision"
                tag="h3"
                className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-brand-teal"
                delay={0.4}
              />
              <AnimatedWords
                text="To be the leading provider of integrated technology solutions in Zimbabwe, recognized for our innovation, reliability, and customer-centric approach."
                tag="p"
                className="text-gray-700 mobile-text-sm leading-relaxed"
                delay={0.5}
                staggerDelay={0.01}
              />
            </AnimatedCard>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-spacing container mobile-px-2">
        <AnimatedSection type="fade-up">
          <div className="text-center mb-8 sm:mb-12">
            <h4 className="mobile-text-base font-normal mb-2 text-brand-teal">Our People</h4>
            <SectionTitle title="Meet Our Team" />
            <AnimatedWords
              text="Our diverse team of experts brings together years of experience in technology, security, and customer service."
              className="text-gray-600 mt-3 sm:mt-4 max-w-3xl mx-auto mobile-text-sm leading-relaxed"
              delay={0.2}
              staggerDelay={0.01}
            />
          </div>
        </AnimatedSection>
        <AnimatedSection type="fade-up" delay={0.3}>
          <TeamSection />
        </AnimatedSection>
      </section>

      {/* Solutions Section */}
      <section className="section-spacing bg-brand-gray-50">
        <div className="container mobile-px-2">
          <AnimatedSection type="fade-up">
            <div className="text-center mb-8 sm:mb-12">
              <SectionTitle title="Our Solutions" />
              <AnimatedWords
                text="We offer a wide range of technology solutions to meet your specific needs."
                className="text-gray-600 mt-3 sm:mt-4 max-w-3xl mx-auto mobile-text-sm leading-relaxed"
                delay={0.2}
                staggerDelay={0.01}
              />
            </div>
          </AnimatedSection>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
            <div className="relative h-[320px] sm:h-[400px] rounded-[25px] sm:rounded-[30px] overflow-hidden group">
              <Image
                src="/background/home_automation.jpg"
                alt="Home Automation"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black/50 flex items-end p-3 sm:p-4">
                <Link
                  href="/solutions/home-automation"
                  className="bg-transparent border-white border-2 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-full mobile-text-sm group-hover:bg-brand-teal transition-colors"
                >
                  Home Automation <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 inline ml-1" />
                </Link>
              </div>
            </div>
            <div className="relative h-[320px] sm:h-[400px] rounded-[25px] sm:rounded-[30px] overflow-hidden group">
              <Image
                src="/background/enterprice-security.jpg"
                alt="Enterprise Security"
                width={400}
                height={200}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black/50 flex items-end p-3 sm:p-4">
                <Link
                  href="/solutions/enterprise-security"
                  className="bg-transparent border-white border-2 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-full mobile-text-sm group-hover:bg-brand-teal transition-colors"
                >
                  Enterprise Security <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 inline ml-1" />
                </Link>
              </div>
            </div>
            <div className="relative h-[320px] sm:h-[400px] rounded-[25px] sm:rounded-[30px] overflow-hidden group">
              <Image
                src="/background/obser.jpg"
                alt="Observability and Resilience"
                width={400}
                height={200}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black/50 flex items-end p-3 sm:p-4">
                <Link
                  href="/solutions/observability-resilience"
                  className="bg-transparent border-white border-2 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-full mobile-text-sm group-hover:bg-brand-teal transition-colors"
                >
                  Observability and Resilience <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 inline ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-spacing container mobile-px-2">
        <AnimatedSection type="fade-up">
          <CTABanner
            title="Partner With Us"
            subtitle="Let's work together to simplify your technology needs."
            buttonText="Contact Our Team"
            buttonLink="/contact"
            variant="secondary"
          />
        </AnimatedSection>
      </section>

      {/* Contact Section */}
      {/* <section className="py-16">
        <div className="container px-2 md:px-6 text-center">
          <AnimatedSection type="fade-up">
            <SectionTitle title="Contact Us" />
            <AnimatedWords
              text="Have questions? Reach out to us today to learn more about our services and how we can help your business."
              className="text-gray-600 mt-4 max-w-3xl mx-auto mb-8"
              delay={0.2}
              staggerDelay={0.01}
            />
            <AnimatedButton size="lg" className="bg-brand-teal text-white hover:bg-brand-teal-700" hoverEffect="scale">
              Get in Touch <ArrowRight className="ml-2" />
            </AnimatedButton>
          </AnimatedSection>
        </div>
      </section> */}
    </div>
  )
}

export default AboutUs
