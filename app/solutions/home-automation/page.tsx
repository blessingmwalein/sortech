import Image from "next/image"
import { Button } from "@/components/ui/button"
import ContactForm from "@/components/contact-form"

export default function HomeAutomation() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="/placeholder.svg?height=500&width=1200"
          alt="Smart home control panel"
          width={1200}
          height={500}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center container px-4 md:px-6">
          <p className="text-white/80 mb-2">Sortech</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Home Automation</h1>
          <Button className="bg-teal hover:bg-teal-light text-white rounded-full">Learn More</Button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-gray-600">
            Our Smart Home solution coordinates the technology in your life into complete, brilliant experiences
            interactions that fit your lifestyle and are easy for your family to enjoy.
          </p>
          <p className="text-gray-600 mt-4">
            With one touch, dim the lights, play music, turn up the heat, lock the doors and arm the security system.
            Or, have your house respond to your schedule and needs without touching anything at all.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[400px]">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Smart home tablet interface"
              width={600}
              height={400}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Entertainment</h3>
              <p className="text-gray-600">
                Entertainment is more than just watching TV. It's having music and video in just one room or throughout
                your entire home. Our technology delivers exceptional entertainment experiences across popular brands
                such as Sonos, Apple TV, Roku and so much more, ensuring your automation system works with the products
                you already have and love.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Smart lighting</h3>
              <p className="text-gray-600">
                Whether for a new home or upgrading an existing home, we offer a variety of smart switches that are
                elegant and energy efficient, and with a variety of colors and finishes, they complement the decor of
                any home.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-16">
          <div className="order-2 md:order-1 space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Comfort and Convenience</h3>
              <p className="text-gray-600">
                We can help you deliver the right level of comfort in your home, we can integrate shades, pool and spa
                control, and fireplace switches to bring a new level of comfort to your smart home. Door stations keep
                you connected to your home from anywhere.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Safety and security</h3>
              <p className="text-gray-600">
                By integrating with the leading brands in security cameras, NVRs, smart locks and sensors, you can
                monitor your house 24x7 and be notified immediately if a door opens, the water heater leaks or if you
                left the garage door open.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] order-1 md:order-2">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Smart home security app"
              width={600}
              height={400}
              className="object-cover w-full h-full rounded-lg"
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
