"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

type Partner = {
    id: number
    name: string
    logo: string
}

export default function PartnersSlider() {
    const partners: Partner[] = [
        { id: 1, name: "Bowers Wilkins", logo: "/partner-logos/bowers_wilkins_logos/bowers-wilkins.png" },
        { id: 2, name: "ORVIBO", logo: "/partner-logos/control4-logo-rev-d/Control4_Logo_Black.png" },
        { id: 3, name: "DNAKE", logo: "/partner-logos/denon_brand_logos/denon-logo-vector.png" },
        { id: 4, name: "MINIO", logo: "/partner-logos/digicert_logos/digicert-blue-logo-large.jpg" },
        { id: 5, name: "Partner 5", logo: "/partner-logos/dnake_logo/id0Oo6X-gH_logos.jpeg" },
        { id: 6, name: "Partner 6", logo: "/partner-logos/geotrust_logo/GeoTrust/GeoTrust_idezKebcAh_0.png" },
        { id: 7, name: "Partner 7", logo: "/partner-logos/globalSign_by_GMO_logos/GlobalSign_by_GMO.svg" },
        { id: 8, name: "Partner 8", logo: "/partner-logos/grafana_logo/Grafana/Grafana_idfj9PYhOg_0.png" },
        { id: 9, name: "Partner 9", logo: "/partner-logos/kaspersky_registered_partner/k_United_bw_Registered_Partner.png" },
        { id: 10, name: "Partner 10", logo: "/partner-logos/lutron_logos/Lutron_Electronics_iddS6_I6ts_2.png" },
        { id: 11, name: "Partner 11", logo: "/partner-logos/marantz_logo/Marantz-Logo_wine.png" },
        { id: 12, name: "Partner 12", logo: "/partner-logos/minIO_logos/Stork-Black.png" },
        { id: 13, name: "Partner 13", logo: "/partner-logos/orvibo/ORVIBO_idDKWoeD3N_3.jpeg" },
        { id: 14, name: "Partner 14", logo: "/partner-logos/sectigo_logos/PNG/Sectigo_Logo_Web.png" },
        { id: 15, name: "Partner 15", logo: "/partner-logos/thanos_logo/thanos.svg" },
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const visiblePartners = 4;
    const maxIndex = Math.max(0, partners.length - visiblePartners);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + visiblePartners));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - visiblePartners));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-16 container px-4 md:px-6">
            <div className="flex flex-col md:flex-row">
                {/* Left Side - Titles */}
                <div className="md:w-1/3 mb-8 md:mb-0">
                    <p className="text-emerald-600 text-lg">Our Partners</p>
                    <h2 className="text-3xl font-bold mt-2">They Trust Us</h2>
                </div>

                {/* Right Side - Slider */}
                <div className="md:w-2/3 relative">
                    <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4 transition-all duration-500">

                        {partners
                            .slice(currentIndex, currentIndex + visiblePartners)
                            .map((partner) => (
                                <div
                                    key={partner.id}
                                    className="bg-white rounded-[30px] border-2 border-gray-200  flex items-center justify-center w-full h-[150px]"
                                >
                                    <Image
                                        src={partner.logo || "/placeholder.svg"}
                                        alt={partner.name}
                                        width={120}
                                        height={80}
                                        className="object-contain max-h-[100px] max-w-[150px]"
                                    />
                                </div>
                            ))}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-end gap-2 mt-6">
                        <button
                            onClick={prevSlide}
                            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                            aria-label="Previous partners"
                        >
                            <ChevronLeft className="h-5 w-5 text-brand-teal" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="ml-4 p-2 rounded-full bg-brand-teal hover:bg-brand-teal transition-colors"
                            aria-label="Next partners"
                        >
                            <ChevronRight className="h-5 w-5 text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </section>

    )
}
