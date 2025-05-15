import Image from "next/image"
import ContactForm from "@/components/contact-form"
import SectionTitle from "@/components/ui/section-title"
import { CategoryCard } from "@/components/ui/category_card"
import PageTitle from "@/components/ui/page_title";

export default function AboutUs() {
  const categories = [
    {
      title: "Home Automation",
      description:
        "Our Smart Home solution coordinates the technology in your life into complete, brilliant experiences interactions that fit your lifestyle and are easy for your family to enjoy.",
      imageUrl: "/background/home_automation.jpg",
    },
    {
      title: "Enterprise Security",
      description:
        "We enable organizations to strategically optimize their domain portfolios including DNS, registrations, and SSL/TLS certificates to enhance security, compliance, and efficiency.",
      imageUrl: "/background/enterprice-security.jpg",
    },
    {
      title: "Observability & Resilience",
      description:
        "Our consultants conduct comprehensive system assessments to design and deploy tailored monitoring solutions aligned with your technical requirements.",
      imageUrl: "/background/obser.jpg",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="  ">
        <div className="grid grid-cols-1 gap-8">
          {/* Background Image with Title Overlay */}
          <div className="relative h-[450px] overflow-hidden">
            <Image
              src="/background/about_back.jpg"
              alt="Laptop and glasses on desk"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-4 left-4  bg-opacity-60 text-black px-6 py-2 rounded">
              <PageTitle title="About Us" />
            </div>
          </div>

          {/* Description Below the Image */}
          <div className="space-y-6 md:max-w-6xl px-6 md:px-8 py-4 ">
            <p className="font-semibold text-lg">

              Sortech Private Limited is a technology company formed in August 2024 that specializes in cyber
              security, data privacy, home automation solutions and infrastructure management services.
            </p>
            <p className="font-normal text-lg">
              We realized that there is a gap in both the Zimbabwean consumer and commercial markets for technology
              solutions that cost effectively meets customer needs.
            </p>
            <p className="font-normal text-lg">
              With the ever-changing technology landscape, we believe our youthful team is geared to face the
              challenges and help our customers simplify their everyday living.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="">
            <SectionTitle title="Our Values" />
          </div>
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

      {/* Solutions Section */}
      <section className="py-16 container px-4 md:px-6">
        <div className="text-center mb-12">
          <h4 className="text-lg font-normal mb-2 text-brand-teal">
            Our Solutions
          </h4>

          <SectionTitle title="Product Categories." />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              description={category.description}
              imageUrl={category.imageUrl}
            />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 container px-4 md:px-6">
        <ContactForm />
      </section>
    </div>
  )
}
