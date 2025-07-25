import { MapPin, Phone, Mail, Clock } from "lucide-react"
import FAQSection from "@/components/ui/faq-section"
import SectionTitle from "@/components/ui/section-title"
import AnimatedSection from "@/components/ui/animated-section"
import AnimatedText from "@/components/ui/animated-text"
import AnimatedWords from "@/components/ui/animated-words"
import AnimatedCard from "@/components/ui/animated-card"
import AnimatedImage from "@/components/ui/animated-image"

const ContactUs = () => {
  return (
    <>
      {/* Contact Information */}
      <section className="py-12 md:py-16 container px-2 md:px-6 relative overflow-hidden">
        <div className="relative z-10">
          <AnimatedSection type="fade-up">
            <div className="text-center mb-12">
              <SectionTitle title="Get In Touch" />
              <AnimatedWords
                text="We're here to help with all your technology needs. Reach out to us through any of the channels below."
                className="text-gray-600 mt-4 max-w-3xl mx-auto"
                delay={0.2}
                staggerDelay={0.01}
              />
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection type="fade-up" delay={0.1}>
              <AnimatedCard className="bg-white p-8 rounded-[25px] shadow-md text-center" hoverEffect="lift">
                <div className="bg-brand-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-brand-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Visit Us</h3>
                <p className="text-gray-600">123 Tech Avenue</p>
                <p className="text-gray-600">Harare, Zimbabwe</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-teal mt-2 inline-block hover:underline"
                  aria-label="View map location"
                >
                  View on Map
                </a>
              </AnimatedCard>
            </AnimatedSection>

            <AnimatedSection type="fade-up" delay={0.3}>
              <AnimatedCard className="bg-white p-8 rounded-[25px] shadow-md text-center" hoverEffect="lift">
                <div className="bg-brand-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-brand-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Call Us</h3>
                <p className="text-gray-600">+263 123 456 789</p>
                <p className="text-gray-600">+263 987 654 321</p>
                <p className="text-gray-600 mt-2">Support: +263 456 789 123</p>
              </AnimatedCard>
            </AnimatedSection>

            <AnimatedSection type="fade-up" delay={0.5}>
              <AnimatedCard className="bg-white p-8 rounded-[25px] shadow-md text-center" hoverEffect="lift">
                <div className="bg-brand-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-brand-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Email Us</h3>
                <p className="text-gray-600">info@sortech.com</p>
                <p className="text-gray-600">support@sortech.com</p>
                <p className="text-gray-600 mt-2">sales@sortech.com</p>
              </AnimatedCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-12 bg-gray-50 relative overflow-hidden">
        <div className="container px-2 md:px-6 relative z-10">
          <AnimatedSection type="fade-up">
            <div className="max-w-3xl mx-auto bg-white rounded-[25px] shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-brand-teal mr-3" />
                  <AnimatedText
                    text="Business Hours"
                    tag="h3"
                    className="text-xl font-semibold"
                    delay={0.1}
                    staggerDelay={0.02}
                  />
                </div>

                <div className="space-y-3 stagger-children">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Monday - Friday</span>
                    <span className="text-gray-600">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Saturday</span>
                    <span className="text-gray-600">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Sunday</span>
                    <span className="text-gray-600">Closed</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Public Holidays</span>
                    <span className="text-gray-600">Closed</span>
                  </div>
                </div>

                <AnimatedSection type="fade-up" delay={0.5}>
                  <div className="mt-6 bg-brand-teal/10 p-4 rounded-lg">
                    <p className="text-gray-700">
                      <span className="font-medium">24/7 Support:</span> Emergency technical support is available for
                      our enterprise clients outside of regular business hours.
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 container px-4 md:px-6">
        <AnimatedSection type="fade-up">
          <div className="rounded-[25px] overflow-hidden shadow-md h-[400px] relative">
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <p className="text-gray-600">Interactive Map Would Be Embedded Here</p>
              <AnimatedImage
                src="/placeholder.svg?height=400&width=1200"
                alt="Map location"
                width={1200}
                height={400}
                className="object-cover"
                effect="zoom-in"
              />
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="container px-2 md:px-6 relative z-10">
          {/* <AnimatedSection type="fade-up">
            <div className="text-center mb-12">
              <SectionTitle title="Frequently Asked Questions" />
            </div>
          </AnimatedSection> */}

          <AnimatedSection type="fade-up" delay={0.3}>
            <FAQSection
              faqs={[
                {
                  question: "How quickly can you respond to a service request?",
                  answer:
                    "For standard service requests, we aim to respond within 24 hours. Enterprise clients with support contracts receive priority response based on their service level agreement, with critical issues addressed within 2-4 hours.",
                },
                {
                  question: "Do you offer on-site consultations?",
                  answer:
                    "Yes, we provide on-site consultations for both residential and commercial clients. The initial consultation includes a comprehensive assessment of your needs and a detailed proposal for solutions tailored to your requirements.",
                },
                {
                  question: "What areas do you service?",
                  answer:
                    "We currently service Harare and surrounding areas within a 50km radius. For enterprise clients, we can arrange service throughout Zimbabwe. Please contact us for specific location inquiries.",
                },
                {
                  question: "Do you offer maintenance contracts?",
                  answer:
                    "Yes, we offer various maintenance and support packages for both our home automation and enterprise security solutions. These can be customized based on your specific needs and budget.",
                },
              ]}
            />
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

export default ContactUs
