'use client'

import { useState } from "react"
import { ChevronRight } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export interface ServiceItem {
  id: number | string
  title: string
  description: string
  content?: string | string[]
}

interface ServicesAccordionProps {
  items: ServiceItem[]
  className?: string
}

export function ServicesAccordion({ items, className }: ServicesAccordionProps) {
  const [expandedId, setExpandedId] = useState<number | string | null>(null)

  const toggleAccordion = (id: number | string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className={cn("space-y-6 max-w-6xl mx-auto", className)}>
      {items.map((item) => (
        <div
          key={item.id}
          className={cn(
            "bg-teal-light/20 p-6 rounded-[25px] transition-all duration-300 ease-in-out",
            expandedId === item.id ? "shadow-md" : "",
          )}
        >
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-2">
                {typeof item.id === 'number' ? `${item.id}. ` : ''}{item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
            <Button
              className={cn(
                "bg-teal text-white rounded-full h-10 w-10 flex items-center justify-center p-0 transition-transform duration-300",
                expandedId === item.id ? "rotate-90" : "",
              )}
              onClick={() => toggleAccordion(item.id)}
              aria-expanded={expandedId === item.id}
              aria-controls={`content-${item.id}`}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <div
            id={`content-${item.id}`}
            className={cn(
              "mt-4 overflow-hidden transition-all duration-300 ease-in-out",
              expandedId === item.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
            )}
          >
            {item.content && (
              <div className="pt-4 border-t border-teal/20 text-gray-700 space-y-2">
                {Array.isArray(item.content) ? (
                  <ul className="list-disc pl-5">
                    {item.content.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{item.content}</p>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
