"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { usePathname } from "next/navigation" // For getting the active path
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname() // To track the active path

  // Function to determine if a link is active
  const isActive = (path: string) => pathname === path

  return (
    <header className="sticky top-0 z-50 w-full bg-white py-2">
      <div className="w-full max-w-screen-2xl flex h-12 items-center justify-between mobile-px-2 container">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/sortech-logos/s-logo-teal.png"
            alt="Modern home with smart technology"
            width={250}
            height={80}
            className=""
          />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="flex-1 hidden md:flex justify-end gap-4 lg:gap-6 mr-4 lg:mr-6">
          <Link
            href="/"
            className={`mobile-text-sm font-medium hover:underline ${isActive("/") ? "nav-text-selected" : "nav-text-unselected"}`}
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className={`mobile-text-sm font-medium hover:underline ${isActive("/about-us") ? "nav-text-selected" : "nav-text-unselected"}`}
          >
            About Us
          </Link>
          <Link
            href="/solutions"
            className={`mobile-text-sm font-medium hover:underline ${isActive("/solutions") ? "nav-text-selected" : "nav-text-unselected"}`}
          >
            Solutions
          </Link>
          <Link
            href="/product-brochures"
            className={`mobile-text-sm font-medium hover:underline ${isActive("/product-brochures") ? "nav-text-selected" : "nav-text-unselected"}`}
          >
            Product Brochures
          </Link>
          <Link
            href="/contact-us"
            className={`mobile-text-sm font-medium hover:underline ${isActive("/contact-us") ? "nav-text-selected" : "nav-text-unselected"}`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Get Quote + Mobile Menu */}
        <div className="flex items-center justify-end gap-1 sm:gap-2">
          <Link href="/contact-us" className="hidden sm:block">
            <Button className="rounded-full bg-white text-teal border-2 border-teal hover:bg-teal hover:text-white py-2 sm:py-3 px-3 sm:px-4 mobile-text-sm">
              Get Quote
            </Button>
          </Link>

          {/* Mobile Menu Sheet */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  href="/"
                  className={`mobile-text-lg font-medium hover:text-teal ${isActive("/") ? "nav-text-selected" : "nav-text-unselected"}`}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about-us"
                  className={`mobile-text-lg font-medium hover:text-teal ${isActive("/about-us") ? "nav-text-selected" : "nav-text-unselected"}`}
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/solutions"
                  className={`mobile-text-lg font-medium hover:text-teal ${isActive("/solutions") ? "nav-text-selected" : "nav-text-unselected"}`}
                  onClick={() => setIsOpen(false)}
                >
                  Solutions
                </Link>
                <Link
                  href="/product-brochures"
                  className={`mobile-text-lg font-medium hover:text-teal ${isActive("/product-brochures") ? "nav-text-selected" : "nav-text-unselected"}`}
                  onClick={() => setIsOpen(false)}
                >
                  Product Brochures
                </Link>
                <Link
                  href="/contact-us"
                  className={`mobile-text-lg font-medium hover:text-teal ${isActive("/contact-us") ? "nav-text-selected" : "nav-text-unselected"}`}
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
                <Link href="/contact-us" onClick={() => setIsOpen(false)}>
                  <Button className="w-full mt-4 rounded-full bg-teal text-white mobile-text-base">Get Quote</Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>

  )
}
