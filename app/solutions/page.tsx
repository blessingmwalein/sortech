import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function Solutions() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 container px-4 md:px-6">
        <h1 className="text-4xl font-bold mb-6 flex items-center">
          Our Solutions <span className="ml-2 text-teal">↘</span>
        </h1>
        <p className="text-gray-600 max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus leo consectetur vitae eget hac. Sagittis diam
          eros eu lacus magna purus donec at pharelius.
        </p>
      </section>

      {/* Solutions Categories */}
      <section className="py-8">
        <div className="container px-4 md:px-6">
          <div className="space-y-1">
            {/* Home Automation */}
            <div className="relative h-[300px] w-full overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=1200"
                alt="Home Automation"
                width={1200}
                height={300}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Home Automation</h2>
              </div>
              <div className="absolute bottom-4 right-4">
                <Link href="/solutions/home-automation">
                  <Button className="rounded-full bg-white text-black hover:bg-teal hover:text-white">
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Enterprise Security */}
            <div className="relative h-[300px] w-full overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=1200"
                alt="Enterprise Security"
                width={1200}
                height={300}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Enterprise Security</h2>
              </div>
              <div className="absolute bottom-4 right-4">
                <Link href="/solutions/enterprise-security">
                  <Button className="rounded-full bg-white text-black hover:bg-teal hover:text-white">
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Observability And Resilience */}
            <div className="relative h-[300px] w-full overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=1200"
                alt="Observability And Resilience"
                width={1200}
                height={300}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Observability And Resilience</h2>
              </div>
              <div className="absolute bottom-4 right-4">
                <Link href="/solutions/observability-resilience">
                  <Button className="rounded-full bg-white text-black hover:bg-teal hover:text-white">
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <p className="text-gray-500 mb-2">Service Offering</p>
            <h2 className="text-3xl font-bold">
              Your Home. <span className="font-normal">Simplified.</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-teal p-6 rounded-lg text-white">
              <h3 className="text-3xl font-bold mb-2">01</h3>
              <p className="text-sm">Observability Platform Engineering</p>
            </div>
            <div className="bg-teal p-6 rounded-lg text-white">
              <h3 className="text-3xl font-bold mb-2">02</h3>
              <p className="text-sm">Data Privacy Consulting</p>
            </div>
            <div className="bg-teal p-6 rounded-lg text-white">
              <h3 className="text-3xl font-bold mb-2">03</h3>
              <p className="text-sm">Cyber Security Consulting</p>
            </div>
            <div className="bg-teal p-6 rounded-lg text-white">
              <h3 className="text-3xl font-bold mb-2">04</h3>
              <p className="text-sm">Technical Support And Advisory</p>
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
