import { PatternBackground } from "@/components/ui/pattern-background"
import SectionTitle from "@/components/ui/section-title"
import Image from "next/image"

const brochures = [
  {
    name: "Bowers & Wilkins - BW001 800 Brochure A.pdf",
    label: "Bowers & Wilkins 800 Series",
  },
  {
    name: "Bowers & Wilkins - Formation Suite Brochure.pdf",
    label: "Bowers & Wilkins Formation Suite",
  },
  {
    name: "Control4 - 4sight Trifold.pdf",
    label: "Control4 4Sight Trifold",
  },
  {
    name: "Control4 - Building for the Automated Life Brochure.pdf",
    label: "Control4 Building for the Automated Life",
  },
  {
    name: "Control4 - Lighting Solutions Brochure.pdf",
    label: "Control4 Lighting Solutions",
  },
  {
    name: "Control4 - Smart Home Buyers Guide Brochure.pdf",
    label: "Control4 Smart Home Buyers Guide",
  },
  {
    name: "Control4 - State of the Smart Brochure.pdf",
    label: "Control4 State of the Smart",
  },
  {
    name: "Control4 - Vibrant Lighting.pdf",
    label: "Control4 Vibrant Lighting",
  },
  {
    name: "Denon - Living Legends 2024.pdf",
    label: "Denon Living Legends 2024",
  },
  {
    name: "Lutron - Lighting System RA2 Select Brochure.pdf",
    label: "Lutron Lighting System RA2 Select",
  },
  {
    name: "Lutron - Sivoia QS Triathlon Solutions Brochure.pdf",
    label: "Lutron Sivoia QS Triathlon Solutions",
  },
  {
    name: "Polk - Reserve Series Brochure 2022.pdf",
    label: "Polk Reserve Series 2022",
  },
  {
    name: "Polk - Signature Elite Series Brochure.pdf",
    label: "Polk Signature Elite Series",
  },
]

export default function ProductBrochuresPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Pattern background for branding */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <PatternBackground
          spacing={40}
          backgroundColor="#F8FAFA"
          vectorColor="#E0F2F2"
          style={{ opacity: 0.18 }}
        />
      </div>
      <div className="container mx-auto px-2 md:px-6 py-16 relative z-10">
        <SectionTitle title="Product Brochures" />
        <p className="mb-8 text-lg text-gray-700 text-center max-w-2xl mx-auto">
          Download our latest product brochures. Click any brochure to view or download the PDF.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {brochures.map((b) => (
            <div key={b.name} className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center border border-gray-100">
              <Image src="/placeholder-logo.png" alt="Brochure preview" width={80} height={80} className="mb-4" />
              <h3 className="font-semibold text-brand-teal mb-2 text-lg">{b.label}</h3>
              <a
                href={`/product-brochures/${encodeURIComponent(b.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-brand-teal text-white px-6 py-2 rounded-full font-semibold hover:bg-teal-700 transition w-full"
                download
                aria-label={`Download ${b.label} brochure as PDF`}
              >
                Download PDF
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 