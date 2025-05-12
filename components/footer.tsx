import Link from "next/link"
import { Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-teal text-white py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/solutions/home-automation" className="hover:underline">
                  Home Automation
                </Link>
              </li>
              <li>
                <Link href="/solutions/enterprise-security" className="hover:underline">
                  Enterprise Security
                </Link>
              </li>
              <li>
                <Link href="/solutions/observability-resilience" className="hover:underline">
                  Observability & Resilience
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="grid grid-cols-2 gap-2">
              <li>
                <Link href="/services/observability-platform" className="hover:underline">
                  Observability platform engineering
                </Link>
              </li>
              <li>
                <Link href="/services/data-privacy" className="hover:underline">
                  Data privacy consulting
                </Link>
              </li>
              <li>
                <Link href="/services/cyber-security" className="hover:underline">
                  Cyber security consulting
                </Link>
              </li>
              <li>
                <Link href="/services/technical-support" className="hover:underline">
                  Technical support and advisory
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/resources/whitepapers" className="hover:underline">
                    6.1 Whitepapers
                  </Link>
                </li>
                <li>
                  <Link href="/resources/faqs" className="hover:underline">
                    6.2 FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about-us/company-overview" className="hover:underline">
                    2.1 Company Overview
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-4 md:mb-0">
              <span>sortech</span>
            </div>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-teal-light">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="hover:text-teal-light">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://linkedin.com" className="hover:text-teal-light">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
