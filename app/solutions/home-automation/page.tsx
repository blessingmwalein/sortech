import { LightbulbIcon, ShieldIcon, CheckCircleIcon, ThermometerIcon } from "lucide-react"
import ContactForm from "@/components/contact-form"
import { PageHero } from "@/components/ui/page-header-title"
import SectionTitle from "@/components/ui/section-title"
import AnimatedSection from "@/components/ui/animated-section"
import AnimatedText from "@/components/ui/animated-text"
import AnimatedWords from "@/components/ui/animated-words"
import AnimatedImage from "@/components/ui/animated-image"
import AnimatedCard from "@/components/ui/animated-card"
import CTABanner from "@/components/ui/cta-banner"

export default function HomeAutomation() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Keeping the original structure */}
      <section className="relative h-[500px] w-full">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <AnimatedImage
          src="/background/home_2.png"
          alt="Smart home control panel"
          width={1200}
          height={500}
          className="w-full h-full"
          imageClassName="w-full h-full object-cover"
          effect="zoom-in"
          duration={1.5}
        />
        <PageHero subtitle="Sortech" title="Home Automation" buttonText="Learn More" />
      </section>

      {/* Overview Section - Enhanced with animations */}
      <section className="py-16 container px-4 md:px-6">
        <AnimatedSection type="fade-up">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <SectionTitle title="Smart Home Solutions" />
            <AnimatedWords
              text="Our Smart Home solution coordinates the technology in your life into complete, brilliant experiences that fit your lifestyle and are easy for your family to enjoy."
              className="text-gray-600 mt-4"
              delay={0.2}
              staggerDelay={0.01}
            />
            <AnimatedWords
              text="With one touch, dim the lights, play music, turn up the heat, lock the doors and arm the security system. Or, have your house respond to your schedule and needs without touching anything at all."
              className="text-gray-600 mt-4"
              delay={0.4}
              staggerDelay={0.01}
            />
          </div>
        </AnimatedSection>

        {/* Features - Enhanced with animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <AnimatedSection type="slide-right" delay={0.1}>
            <AnimatedImage
              src="/background/enter_1.jpg"
              alt="Smart home tablet interface"
              width={600}
              height={400}
              className="rounded-[25px] shadow-md w-full h-full object-cover"
              effect="reveal"
            />
          </AnimatedSection>

          <AnimatedSection type="slide-left" delay={0.3}>
            <div className="space-y-8">
              <div>
                <AnimatedText
                  text="Entertainment"
                  tag="h3"
                  className="text-xl font-semibold mb-2 text-brand-teal"
                  delay={0.1}
                />
                <AnimatedWords
                  text="Entertainment is more than just watching TV. It's having music and video in just one room or throughout your entire home. Our technology delivers exceptional entertainment experiences across popular brands such as Sonos, Apple TV, Roku and so much more, ensuring your automation system works with the products you already have and love."
                  className="text-gray-600"
                  delay={0.2}
                  staggerDelay={0.01}
                />
              </div>
              <div>
                <AnimatedWords
                  text="Smart Lighting"
                  tag="h3"
                  className="text-xl font-semibold mb-2 text-brand-teal"
                  delay={0.3}
                />
                <AnimatedWords
                  text="Whether for a new home or upgrading an existing home, we offer a variety of smart switches that are elegant and energy efficient, and with a variety of colors and finishes, they complement the decor of any home."
                  className="text-gray-600"
                  delay={0.4}
                  staggerDelay={0.01}
                />
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left content column */}
          <AnimatedSection type="slide-right" delay={0.1} className="order-2 md:order-1">
            <div className="space-y-8">
              <div>
                <AnimatedWords
                  text="Comfort and Convenience"
                  tag="h3"
                  className="text-xl font-semibold mb-2 text-brand-teal"
                  delay={0.1}
                />
                <AnimatedWords
                  text="We can help you deliver the right level of comfort in your home. We integrate shades, pool and spa control, and fireplace switches to bring a new level of comfort to your smart home. Door stations keep you connected to your home from anywhere."
                  className="text-gray-600"
                  delay={0.2}
                  staggerDelay={0.01}
                />
              </div>
              <div>
                <AnimatedWords
                  text="Safety and Security"
                  tag="h3"
                  className="text-xl font-semibold mb-2 text-brand-teal"
                  delay={0.3}
                />
                <AnimatedWords
                  text="By integrating with the leading brands in security cameras, NVRs, smart locks, and sensors, you can monitor your house 24/7 and be notified immediately if a door opens, the water heater leaks, or if you left the garage door open."
                  className="text-gray-600"
                  delay={0.4}
                  staggerDelay={0.01}
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Right image column */}
          <AnimatedSection type="slide-left" delay={0.3} className="order-1 md:order-2">
            <AnimatedImage
              src="/background/comfort_1.jpg"
              alt="Smart home security app"
              width={600}
              height={400}
              className="rounded-[25px] shadow-md w-full h-full object-cover"
              imageClassName="w-full h-full object-cover" 

              effect="reveal"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Detailed Solutions Section - New section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <AnimatedSection type="fade-up">
            <div className="text-center mb-12">
              <h4 className="text-lg font-normal mb-2 text-brand-teal">Our Solutions</h4>
              <SectionTitle title="Smart Home Features" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection type="fade-up" delay={0.1}>
              <AnimatedCard className="bg-white p-8 rounded-[25px] shadow-md text-center" hoverEffect="lift">
                <div className="bg-brand-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LightbulbIcon className="h-8 w-8 text-brand-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Smart Lighting</h3>
                <p className="text-gray-600 mb-4">
                  Control your home's lighting from anywhere, create custom scenes, and automate based on time or
                  events.
                </p>
                <ul className="text-left space-y-2">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-brand-teal mr-2 mt-1" />
                    <span className="text-gray-600">Energy-efficient LED solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-brand-teal mr-2 mt-1" />
                    <span className="text-gray-600">Motion-activated lighting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-brand-teal mr-2 mt-1" />
                    <span className="text-gray-600">Custom lighting scenes</span>
                  </li>
                </ul>
              </AnimatedCard>
            </AnimatedSection>

            <AnimatedSection type="fade-up" delay={0.3}>
              <AnimatedCard className="bg-white p-8 rounded-[25px] shadow-md text-center" hoverEffect="lift">
                <div className="bg-brand-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ThermometerIcon className="h-8 w-8 text-brand-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Climate Control</h3>
                <p className="text-gray-600 mb-4">
                  Maintain the perfect temperature in your home while reducing energy costs with smart climate control.
                </p>
                <ul className="text-left space-y-2">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-brand-teal mr-2 mt-1" />
                    <span className="text-gray-600">Smart thermostat integration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-brand-teal mr-2 mt-1" />
                    <span className="text-gray-600">Zone-based temperature control</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-brand-teal mr-2 mt-1" />
                    <span className="text-gray-600">Energy usage monitoring</span>
                  </li>
                </ul>
              </AnimatedCard>
            </AnimatedSection>

            <AnimatedSection type="fade-up" delay={0.5}>
              <AnimatedCard className="bg-white p-8 rounded-[25px] shadow-md text-center" hoverEffect="lift">
                <div className="bg-brand-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldIcon className="h-8 w-8 text-brand-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Security Systems</h3>
                <p className="text-gray-600 mb-4">
                  Protect your home with integrated security systems that you can monitor and control from anywhere.
                </p>
                <ul className="text-left space-y-2">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-brand-teal mr-2 mt-1" />
                    <span className="text-gray-600">Smart locks and doorbell cameras</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-brand-teal mr-2 mt-1" />
                    <span className="text-gray-600">Motion sensors and alarms</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-brand-teal mr-2 mt-1" />
                    <span className="text-gray-600">24/7 monitoring options</span>
                  </li>
                </ul>
              </AnimatedCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 container px-4 md:px-6">
        <AnimatedSection type="fade-up">
          <div className="text-center mb-12">
            <h4 className="text-lg font-normal mb-2 text-brand-teal">Why Choose Us</h4>
            <SectionTitle title="The Sortech Home Automation Advantage" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection type="slide-right" delay={0.1}>
            <AnimatedImage
              src="/background/home-1.avif"
              alt="Smart home installation"
              width={600}
              height={400}
              className="rounded-[25px] shadow-md w-full h-full object-cover"

              imageClassName="w-full h-full object-cover" 
              effect="reveal"
            />
          </AnimatedSection>

          <AnimatedSection type="slide-left" delay={0.3}>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-brand-teal">Expertise</h3>
                <p className="text-gray-600">
                  Our team brings years of specialized experience in home automation, ensuring you receive the highest
                  quality installation and support.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-brand-teal">Customized Solutions</h3>
                <p className="text-gray-600">
                  We tailor our solutions to your specific needs and preferences, creating a smart home system that
                  works perfectly for your lifestyle.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-brand-teal">Ongoing Support</h3>
                <p className="text-gray-600">
                  We provide comprehensive support and maintenance to ensure your smart home system continues to operate
                  flawlessly for years to come.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 container px-4 md:px-6">
        <AnimatedSection type="fade-up">
          <CTABanner
            title="Transform Your Home Today"
            subtitle="Schedule a free consultation with our home automation experts."
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
