import Image from "next/image"
import ContactForm from "@/components/contact-form"

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-6 flex items-center">
              About Us <span className="ml-2 text-teal">↘</span>
            </h1>
            <div className="space-y-4">
              <p>
                Sortech Private Limited is a technology company formed in August 2024 that specializes in cyber
                security, data privacy, home automation solutions and infrastructure management services.
              </p>
              <p>
                We realized that there is a gap in both the Zimbabwean consumer and commercial markets for technology
                solutions that cost effectively meets customer needs.
              </p>
              <p>
                With the ever-changing technology landscape, we believe our youthful team is geared to face the
                challenges and help our customers simplify their everyday living.
              </p>
            </div>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Laptop and glasses on desk"
              width={600}
              height={400}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-teal p-6 rounded-lg text-white">
              <h3 className="text-xl font-semibold mb-4">Customer Centric</h3>
              <p>
                We design solutions specifically tailored to your needs and deliver them with exceptional attention to
                detail.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Professionalism</h3>
              <p>Our team operates under the highest level of transparency, open communication and accountability.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p>Our team delivers highly optimized solutions to meet your needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 container px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-teal mb-2">Our Solutions</p>
          <h2 className="text-3xl font-bold">
            Product <span className="font-normal">Categories</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4 relative h-[200px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Home Automation"
                width={400}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Home Automation</h3>
            <p className="text-gray-600 mb-4">
              Our Smart Home solution coordinates the technology in your life into complete, brilliant experiences
              interactions that fit your lifestyle and are easy for your family to enjoy.
            </p>
          </div>
          <div>
            <div className="mb-4 relative h-[200px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Enterprise Security"
                width={400}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
            <p className="text-gray-600 mb-4">
              We enable organizations to strategically optimize their domain portfolios including DNS, registrations,
              and SSL/TLS certificates to enhance security, compliance, and efficiency.
            </p>
          </div>
          <div>
            <div className="mb-4 relative h-[200px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Observability & Resilience"
                width={400}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Observability & Resilience</h3>
            <p className="text-gray-600 mb-4">
              Our consultants conduct comprehensive system assessments to design and deploy tailored monitoring
              solutions aligned with your technical requirements.
            </p>
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
