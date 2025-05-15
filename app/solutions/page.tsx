import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import ContactForm from "@/components/contact-form"
import PageTitle from "@/components/ui/page_title"
import SectionTitle from "@/components/ui/section-title"
import NumberCard from "@/components/ui/number-card"

export default function Solutions() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 container px-4 md:px-6">
        <PageTitle title="Our Solutions" />
        <p className="text-brand-teal text-2xl mt-6 max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus leo consectetur vitae eget hac. Sagittis diam
          eros eu lacus magna purus donec at pharelius.
        </p>
      </section>

      {/* Solutions Categories */}
      <section className="">
        <div className="container px-4 md:px-6">
          <div className="space-y-1">
            {/* Home Automation */}
            <div className="relative h-[370px] w-full overflow-hidden">
              <Image
                src="/background/home_1.jpg"
                alt="Home Automation"
                width={1200}
                height={370}
                className="object-fill w-full "
              />
              <div className="absolute inset-0 bg-black/50 flex items-center p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Home Automation</h2>
              </div>
              <div className="absolute bottom-4 right-4">
                <Link href="/solutions/home-automation">
                  <Button className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black hover:bg-teal hover:text-white">
                    <ArrowRight className="h-8 w-8" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Enterprise Security */}
            <div className="relative h-[300px] w-full overflow-hidden">
              <Image
                src="/background/enterprice_1.jpg"
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
                  <Button className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black hover:bg-teal hover:text-white">
                    <ArrowRight className="h-8 w-8" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Observability And Resilience */}
            <div className="relative h-[300px] w-full overflow-hidden">
              <Image
                src="/background/obser_1.jpg"
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
                  <Button className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black hover:bg-teal hover:text-white">
                    <ArrowRight className="h-8 w-8" />
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
            <p className="text-gray-500 mb-2"></p>
            <h4 className="text-lg font-normal mb-2 text-brand-teal">
              Service Offering
            </h4>
            <SectionTitle title="Your Home. Simplified." />

          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            <NumberCard
              number="01"
              label="Observability Platform Engineering"
            />
            <NumberCard
              number="02"
              label="Data Privacy Consulting"
            />
            <NumberCard
              number="03"
              label="Cyber Security Consulting"
            />
            <NumberCard
              number="04"
              label="Technical Support And Advisory"
            />

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
