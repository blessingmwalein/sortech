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

const AboutUs = () => {
  return (
    <div className="bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-[#000000B2] z-10" />
        <AnimatedImage
          src="/background/about_back.jpg"
          alt="Sortech team working on technology solutions"
          width={1920}
          height={500}
          className="object-cover w-full h-full"
          effect="zoom-in"
          duration={1.5}
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 md:px-6">
          <AnimatedWords
            text="About Us"
            tag="h1"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            delay={0.3}
            staggerDelay={0.03}
          />
          <AnimatedWords
            text="Simplifying technology for everyday living"
            tag="p"
            className="text-white/80 text-xl max-w-3xl"
            delay={0.6}
            staggerDelay={0.01}
          />
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-16 container px-4 md:px-6">
        <AnimatedSection type="fade-up">
          <div className="text-center mb-12">
            <SectionTitle title="Who We Are" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection type="slide-right" delay={0.2}>
            <AnimatedImage
              src="/sortech-logos/s-logo-tealback.jpg"
              alt="Sortech team"
              width={600}
              height={400}
              className="rounded-[25px] shadow-md"
              //  className=""
            imageClassName="w-full h-full object-cover" 
              effect="reveal"
            />
          </AnimatedSection>

          <AnimatedSection type="slide-left" delay={0.4}>
            <div className="space-y-6">
              <AnimatedWords
                text="Sortech Private Limited is a technology company formed in August 2024 that specializes in cyber security, data privacy, home automation solutions and infrastructure management services."
                className="text-gray-700 text-lg"
                delay={0.5}
                staggerDelay={0.01}
              />

              <AnimatedWords
                text="We realized that there is a gap in both the Zimbabwean consumer and commercial markets for technology solutions that cost effectively meets customer needs."
                className="text-gray-700 text-lg"
                delay={0.7}
                staggerDelay={0.01}
              />

              <AnimatedWords
                text="With the ever-changing technology landscape, we believe our youthful team is geared to face the challenges and help our customers simplify their everyday living."
                className="text-gray-700 text-lg"
                delay={0.9}
                staggerDelay={0.01}
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-brand-gray-50">
        <div className="container px-4 md:px-6">
          <AnimatedSection type="fade-up">
            <div className="text-center mb-12">
              <SectionTitle title="Our Core Values" />
            </div>
          </AnimatedSection>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {/* Rotated Card */}
            <div className="relative">
              <div className="bg-teal p-6 rounded-[25px] text-white transform -rotate-6 origin-bottom-left shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Customer Centric</h3>
                <p>
                  We design solutions specifically tailored to your needs and deliver them with exceptional attention to
                  detail.
                </p>
              </div>
            </div>

            {/* Normal Cards */}
            <div className="bg-white p-6 rounded-[25px] border shadow">
              <h3 className="text-xl font-semibold mb-4">Professionalism</h3>
              <p>Our team operates under the highest level of transparency, open communication and accountability.</p>
            </div>
            <div className="bg-white p-6 rounded-[25px] border shadow">
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p>Our team delivers highly optimized solutions to meet your needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <AnimatedSection type="slide-right" delay={0.1}>
            <AnimatedCard className="bg-white p-8 rounded-[25px] shadow-md border border-gray-100" hoverEffect="lift">
              <AnimatedWords
                text="Our Mission"
                tag="h3"
                className="text-2xl font-bold mb-4 text-brand-teal"
                delay={0.2}
              />
              <AnimatedWords
                text="To simplify everyday living through innovative technology solutions that are accessible, reliable, and tailored to our customers' unique needs."
                tag="p"
                className="text-gray-700"
                delay={0.3}
                staggerDelay={0.01}
              />
            </AnimatedCard>
          </AnimatedSection>

          <AnimatedSection type="slide-left" delay={0.3}>
            <AnimatedCard className="bg-white p-8 rounded-[25px] shadow-md border border-gray-100" hoverEffect="lift">
              <AnimatedWords
                text="Our Vision"
                tag="h3"
                className="text-2xl font-bold mb-4 text-brand-teal"
                delay={0.4}
              />
              <AnimatedWords
                text="To be the leading provider of integrated technology solutions in Zimbabwe, recognized for our innovation, reliability, and customer-centric approach."
                tag="p"
                className="text-gray-700"
                delay={0.5}
                staggerDelay={0.01}
              />
            </AnimatedCard>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 container px-4 md:px-6">
        <AnimatedSection type="fade-up">
          <div className="text-center mb-12">
            <h4 className="text-lg font-normal mb-2 text-brand-teal">Our People</h4>
            <SectionTitle title="Meet Our Team" />
            <AnimatedWords
              text="Our diverse team of experts brings together years of experience in technology, security, and customer service."
              className="text-gray-600 mt-4 max-w-3xl mx-auto"
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
      <section className="py-16 bg-brand-gray-50">
        <div className="container px-4 md:px-6">
          <AnimatedSection type="fade-up">
            <div className="text-center mb-12">
              <SectionTitle title="Our Solutions" />
              <AnimatedWords
                text="We offer a wide range of technology solutions to meet your specific needs."
                className="text-gray-600 mt-4 max-w-3xl mx-auto"
                delay={0.2}
                staggerDelay={0.01}
              />
            </div>
          </AnimatedSection>
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

      {/* CTA Banner */}
      <section className="py-16 container px-4 md:px-6">
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
        <div className="container px-4 md:px-6 text-center">
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
