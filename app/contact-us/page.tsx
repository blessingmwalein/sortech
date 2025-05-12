import ContactForm from "@/components/contact-form"

export default function ContactUs() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 container px-4 md:px-6">
        <h1 className="text-4xl font-bold mb-12 text-center">Contact Us</h1>
        <div className="max-w-4xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </div>
  )
}
