import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ContactForm from "@/components/contact-form"
import { ArrowRight, LightbulbIcon, ShieldIcon, BarChart3Icon } from "lucide-react"
import LearnIcon from "@/components/icons/learn_icon"
import GrowthIcon from "@/components/icons/growth_icon"
import EvolveIcon from "@/components/icons/evolve_icon"
import { PatternBackground } from "@/components/ui/pattern-background"
import NumberCard from "@/components/ui/number-card"
import SectionTitle from "@/components/ui/section-title"
import PartnersSlider from "@/components/ui/partner-slider"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="container pb-40 m-8 relative z-10">
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
      <section className="container -mt-60 relative z-20 px-4 md:px-6">
        <div className="flex flex-wrap justify-center gap-6 ">
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
              className="bg-brand-teal w-[300px] p-6 rounded-[30px] text-white flex flex-col items-center text-center shadow-lg border-4 border-white"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative h-[500px] rounded-[30px]">
            <Image
              src="/background/home_who.jpg"
              alt="Smart home interface"
              width={700}
              height={500}
              className="object-cover w-full h-full rounded-[30px]"
            />
          </div>
          <div className="ml-6">
            <h2 className="text-5xl font-bold mb-8">
              Who We Are
              <br />
              And What You
              <br />
              Get From Us
            </h2>
            <p className="text-gray-600 mb-6">
              We specialize in cyber security, data privacy, home automation solutions and infrastructure management services.
            </p>
            <Button className=" mt-4 bg-white text-teal border-2 border-teal hover:bg-brand-teal hover:text-white rounded-full py-6 px-8 text-[18px]">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="container py-12 bg-gray-50">
        <div className=" px-4 md:px-6">
          <h4 className="text-lg font-normal mb-2 text-brand-teal">
            Our Solutions
          </h4>

          <SectionTitle title="Product Categories." />

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

      {/* Services Section */}
      <section className="py-12 container px-4 md:px-6">
        <h4 className="text-lg font-normal mb-2 text-brand-teal">
          Service Offering
        </h4>
        <SectionTitle title="Your Home. Simplified." />

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
      </section>

      {/* Industries Section */}
      <section className="py-12 bg-[#DAE9E9]">
        <div className="container px-4 md:px-6 py-6">

          <SectionTitle title="Industries Served." />

          <div className="flex flex-wrap gap-4 justify-center mt-6">
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
              <div key={industry} className="bg-[#B7D3D3] px-4 py-2 rounded-full text-black text-lg">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <PartnersSlider />

      {/* Contact Section */}
      <section className="py-12  px-4 md:px-6">
        <ContactForm />
      </section>
    </div>
  )
}
