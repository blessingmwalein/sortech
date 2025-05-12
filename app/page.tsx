import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ContactForm from "@/components/contact-form"
import { ArrowRight, LightbulbIcon, ShieldIcon, BarChart3Icon } from "lucide-react"
import LearnIcon from "@/components/icons/learn_icon"
import GrowthIcon from "@/components/icons/growth_icon"
import EvolveIcon from "@/components/icons/evolve_icon"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pb-40 px-5 relative z-10">
        <div className="relative h-[600px] rounded-[30px] overflow-hidden">
          <div className="absolute inset-0 bg-[#000000B2] z-10" />
          <Image
            src="/background/home_back_1.jpg"
            alt="Modern home with smart technology"
            width={1200}
            height={600}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 md:px-6">
            <p className="text-white/80 mb-2 text-35px">Simplifying Your Everyday Living</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 heading-1">
              Secure Your Home<br />With Sortech
            </h1>
            <Button className="bg-transparent hover:bg-white-light text-white rounded-full border-2 border-white px-10 py-7 button-text-nomal">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section with Overlap */}
      <section className="-mt-48 relative z-20 px-4 md:px-6">
        <div className="flex flex-wrap justify-center gap-6 container">
          {[
            {
              icon: <LearnIcon />,
              title: "Learn",
              text: `We believe in continuous
learning. There are always new
ways to approaching our
customers’ everyday problems.`
            },
            {
              icon: <GrowthIcon />,
              title: "Growth",
              text: `Our approach is centered on
sustainable, customer-centric
growth, where we work together
with our customers to achieve
shared goals.`
            },
            {
              icon: <EvolveIcon />,
              title: "Evolve",
              text: `Through continuous learning and growth, we aim to enhance
our own capabilities and make a
positive impact on the markets
and communities we serve.`
            }
          ].map(({ icon, title, text }, index) => (
            <div
              key={index}
              className="bg-teal w-[300px] p-6 rounded-[30px] text-white flex flex-col items-center text-center shadow-lg border-4 border-white"
            >
              {icon}
              <h3 className="text-xl font-bold mb-2 mt-1">{title}</h3>
              <p className="text-white/80">{text}</p>
            </div>
          ))}
        </div>
      </section>



      {/* About Section */}
      <section className="py-12 container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[400px]">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Smart home interface"
              width={600}
              height={400}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Who We Are
              <br />
              And What You
              <br />
              Get From Us
            </h2>
            <p className="text-gray-600 mb-6">
              We specialize in cyber security, data privacy, home automation solutions and infrastructure management
              services. With the ever-changing technology landscape, our youthful team is geared to face the challenges
              and help our customers simplify their everyday living.
            </p>
            <Button className="bg-white text-teal border border-teal hover:bg-teal hover:text-white rounded-full">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-2">
            Product <span className="text-gray-400">Categories</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="relative h-[200px] rounded-lg overflow-hidden group">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Home Automation"
                width={400}
                height={200}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black/50 flex items-end p-4">
                <Link
                  href="/solutions/home-automation"
                  className="bg-black/70 text-white px-4 py-2 rounded-full text-sm group-hover:bg-teal transition-colors"
                >
                  Home Automation <ArrowRight className="h-4 w-4 inline ml-1" />
                </Link>
              </div>
            </div>
            <div className="relative h-[200px] rounded-lg overflow-hidden group">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Enterprise Security"
                width={400}
                height={200}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black/50 flex items-end p-4">
                <Link
                  href="/solutions/enterprise-security"
                  className="bg-black/70 text-white px-4 py-2 rounded-full text-sm group-hover:bg-teal transition-colors"
                >
                  Enterprise Security <ArrowRight className="h-4 w-4 inline ml-1" />
                </Link>
              </div>
            </div>
            <div className="relative h-[200px] rounded-lg overflow-hidden group">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Observability and Resilience"
                width={400}
                height={200}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black/50 flex items-end p-4">
                <Link
                  href="/solutions/observability-resilience"
                  className="bg-black/70 text-white px-4 py-2 rounded-full text-sm group-hover:bg-teal transition-colors"
                >
                  Observability and Resilience <ArrowRight className="h-4 w-4 inline ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 container px-4 md:px-6">
        <h2 className="text-2xl font-bold mb-8">
          Your Home. <span className="font-normal">Simplified.</span>
        </h2>
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
      </section>

      {/* Industries Section */}
      <section className="py-12 bg-teal-light/20">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-8">
            Industries <span className="text-gray-500">Served</span>
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              "Banking & Finance",
              "Telecommunications",
              "Residential Homes",
              "Manufacturing",
              "Technology",
              "Insurance",
              "Transportation",
              "Energy and Utilities",
              "Healthcare",
            ].map((industry) => (
              <div key={industry} className="bg-teal-light/30 px-4 py-2 rounded-full text-teal text-sm">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 container px-4 md:px-6">
        <h2 className="text-2xl font-bold mb-8">
          Our Partners <span className="text-gray-500">They Trust Us</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((partner) => (
            <div key={partner} className="border p-6 rounded-lg flex items-center justify-center h-32">
              <Image
                src="/placeholder.svg?height=80&width=160"
                alt={`Partner ${partner}`}
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 container px-4 md:px-6">
        <ContactForm />
      </section>
    </div>
  )
}
