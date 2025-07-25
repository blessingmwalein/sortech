import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { PatternBackground } from "@/components/ui/pattern-background"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sortech - Technology Solutions",
  description:
    "Sortech specializes in cyber security, data privacy, home automation solutions and infrastructure management services.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={` overflow-x-hidden`}>
        {/* Full viewport pattern background */}
        <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
          <PatternBackground
            spacing={45}
            backgroundColor="transparent"
            vectorColor="#B7D3D3"
            style={{
              opacity: 0.13,
            }}
          />
        </div>

        {/* Content with proper z-index layering */}
        <div className="relative z-10">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
