import ContactForm from "@/components/contact-form"
import { PageHero } from "@/components/ui/page-header-title"
import SectionTitle from "@/components/ui/section-title"
import Image from "next/image"

export default function ContactUs() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="/background/obser_3.jpg"
          alt="Data monitoring dashboard"
          width={1200}
          height={500}
          className="object-cover w-full h-full"
        />
        <PageHero subtitle="Sortech" title="Gen In Touch With Us" buttonText="Learn More" />
      </section>

      <section className="py-16 container px-4 md:px-6">
        <div className="text-center mb-16">
          <SectionTitle title="Contact Us" />
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          <ContactForm />
        </div>
      </section>
    </div>
  )
}
