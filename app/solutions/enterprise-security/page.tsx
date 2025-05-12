import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function EnterpriseSecurity() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="/placeholder.svg?height=500&width=1200"
          alt="Cybersecurity concept"
          width={1200}
          height={500}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center container px-4 md:px-6">
          <p className="text-white/80 mb-2">Sortech</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Enterprise Security</h1>
          <Button className="bg-teal hover:bg-teal-light text-white rounded-full">Learn More</Button>
        </div>
      </section>

      {/* Options Section */}
      <section className="py-16 container px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Enterprise Security Options</h2>

        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="bg-teal-light/20 p-6 rounded-lg relative">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold mb-2">1. Domain Management Advisory</h3>
                <p className="text-gray-600">
                  We enable organizations to strategically optimize their domain portfolios including DNS,
                  registrations, and SSL/TLS certificates to enhance security, compliance, and efficiency.
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
                <h3 className="text-xl font-semibold mb-2">2. Data Protection Advisory</h3>
                <p className="text-gray-600">
                  Our data protection services help organizations safeguard sensitive information through comprehensive
                  assessments, policy development, and implementation of robust security measures.
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
                <h3 className="text-xl font-semibold mb-2">3. Cyber Security</h3>
                <p className="text-gray-600">
                  We provide comprehensive cybersecurity solutions including threat detection, vulnerability
                  assessments, and security awareness training to protect your organization from evolving threats.
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
                <h3 className="text-xl font-semibold mb-2">4. SSL Certificates Products</h3>
                <p className="text-gray-600">
                  We offer a range of SSL certificate solutions to secure your websites and applications, ensuring data
                  encryption and building customer trust.
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
