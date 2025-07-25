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
    <header className="sticky top-0 z-50 w-full bg-white py-2 ">
      <div className="w-full max-w-screen-2xl flex h-12 items-center justify-between px-0 container">
        {/* Logo */}
        <Link href="/" className=" flex items-center">
          <Image
            src="/sortech-logos/s-logo-teal.png"
            alt="Modern home with smart technology"
            width={220}
            height={80}
          />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="flex-1 hidden md:flex justify-end gap-6 mr-6">
          <Link
            href="/"
            className={`text-sm font-medium hover:underline ${isActive("/") ? "nav-text-selected" : "nav-text-unselected"}`}
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className={`text-sm font-medium hover:underline ${isActive("/about-us") ? "nav-text-selected" : "nav-text-unselected"}`}
          >
            About Us
          </Link>
          <Link
            href="/solutions"
            className={`text-sm font-medium hover:underline ${isActive("/solutions") ? "nav-text-selected" : "nav-text-unselected"}`}
          >
            Solutions
          </Link>
          <Link
            href="/product-brochures"
            className={`text-sm font-medium hover:underline ${isActive("/product-brochures") ? "nav-text-selected" : "nav-text-unselected"}`}
          >
            Product Brochures
          </Link>
          <Link
            href="/contact-us"
            className={`text-sm font-medium hover:underline ${isActive("/contact-us") ? "nav-text-selected" : "nav-text-unselected"}`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Get Quote + Mobile Menu */}
        <div className="flex items-center justify-end gap-2 mr-2">
          <Link href="/contact-us">
            <Button className="mr-2 rounded-full bg-white text-teal border-2 border-teal hover:bg-teal hover:text-white py-3 px-4 text-medium">
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
                  className={`text-lg font-medium hover:text-teal ${isActive("/") ? "nav-text-selected" : "nav-text-unselected"}`}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about-us"
                  className={`text-lg font-medium hover:text-teal ${isActive("/about-us") ? "nav-text-selected" : "nav-text-unselected"}`}
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/solutions"
                  className={`text-lg font-medium hover:text-teal ${isActive("/solutions") ? "nav-text-selected" : "nav-text-unselected"}`}
                  onClick={() => setIsOpen(false)}
                >
                  Solutions
                </Link>
                <Link
                  href="/product-brochures"
                  className={`text-lg font-medium hover:text-teal ${isActive("/product-brochures") ? "nav-text-selected" : "nav-text-unselected"}`}
                  onClick={() => setIsOpen(false)}
                >
                  Product Brochures
                </Link>
                <Link
                  href="/contact-us"
                  className={`text-lg font-medium hover:text-teal ${isActive("/contact-us") ? "nav-text-selected" : "nav-text-unselected"}`}
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
                <Link href="/contact-us" onClick={() => setIsOpen(false)}>
                  <Button className="w-full mt-4 rounded-full bg-teal text-white">Get Quote</Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>

  )
}
