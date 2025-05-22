import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface CTABannerProps {
  title: string
  subtitle?: string
  buttonText: string
  buttonLink: string
  variant?: "primary" | "secondary"
}

export default function CTABanner({ title, subtitle, buttonText, buttonLink, variant = "primary" }: CTABannerProps) {
  return (
    <div
      className={`rounded-[30px] p-12 ${
        variant === "primary" ? "bg-brand-teal text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{title}</h2>
          {subtitle && <p className={variant === "primary" ? "text-white/80" : "text-gray-600"}>{subtitle}</p>}
        </div>
        <Link href={buttonLink}>
          <Button
            className={`rounded-full px-8 py-6 text-lg ${
              variant === "primary"
                ? "bg-white text-brand-teal hover:bg-gray-100"
                : "bg-brand-teal text-white hover:bg-teal-700"
            }`}
          >
            {buttonText} <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
