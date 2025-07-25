"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import SectionTitle from "./section-title"

type Partner = {
    id: number
    name: string
    logo: string
}

export default function PartnersSlider() {
    const partners: Partner[] = [
        { id: 1, name: "Bowers Wilkins", logo: "/partner-logos/bowers_wilkins_logos/bowers-wilkins.png" },
        { id: 2, name: "Control4", logo: "/partner-logos/control4-logo-rev-d/Control4_Logo_Black.png" },
        { id: 3, name: "Denon", logo: "/partner-logos/denon_brand_logos/denon-logo-vector.png" },
        { id: 4, name: "DigiCert", logo: "/partner-logos/digicert_logos/digicert-blue-logo-large.jpg" },
        { id: 5, name: "DNAKE", logo: "/partner-logos/dnake_logo/id0Oo6X-gH_logos.jpeg" },
        { id: 6, name: "GeoTrust", logo: "/partner-logos/geotrust_logo/GeoTrust/GeoTrust_idezKebcAh_0.png" },
        { id: 7, name: "GlobalSign", logo: "/partner-logos/globalSign_by_GMO_logos/GlobalSign_by_GMO.svg" },
        { id: 8, name: "Grafana", logo: "/partner-logos/grafana_logo/Grafana/Grafana_idfj9PYhOg_0.png" },
        { id: 9, name: "Kaspersky", logo: "/partner-logos/kaspersky_registered_partner/k_United_bw_Registered_Partner.png" },
        { id: 10, name: "Lutron", logo: "/partner-logos/lutron_logos/Lutron_Electronics_iddS6_I6ts_2.png" },
        { id: 11, name: "Marantz", logo: "/partner-logos/marantz_logo/Marantz-Logo_wine.png" },
        { id: 12, name: "MinIO", logo: "/partner-logos/minIO_logos/Stork-Black.png" },
        { id: 13, name: "ORVIBO", logo: "/partner-logos/orvibo/ORVIBO_idDKWoeD3N_3.jpeg" },
        { id: 14, name: "Sectigo", logo: "/partner-logos/sectigo_logos/PNG/Sectigo_Logo_Web.png" },
        { id: 15, name: "Thanos", logo: "/partner-logos/thanos_logo/thanos.svg" },
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const [visiblePartners, setVisiblePartners] = useState(6);

    // Responsive visible partners
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280) {
                setVisiblePartners(6); // xl screens
            } else if (window.innerWidth >= 1024) {
                setVisiblePartners(5); // lg screens
            } else if (window.innerWidth >= 768) {
                setVisiblePartners(4); // md screens
            } else if (window.innerWidth >= 640) {
                setVisiblePartners(3); // sm screens
            } else {
                setVisiblePartners(2); // mobile
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => {
            const maxIndex = partners.length - visiblePartners;
            return prevIndex >= maxIndex ? 0 : prevIndex + 1;
        });
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            const maxIndex = partners.length - visiblePartners;
            return prevIndex <= 0 ? maxIndex : prevIndex - 1;
        });
    };

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 4000); // Change slide every 4 seconds
        return () => clearInterval(interval);
    }, [visiblePartners]);

    return (
        <section className="py-16">
            {/* Header Section */}
            <div className=" mb-12">
                <div className="text-left">
                    <p className="text-brand-teal text-lg font-normal mb-2">Our Partners</p>
                    <SectionTitle title="They Trust Us" />
                    <p className="text-gray-600 mt-4 max-w-2xl">
                        We work with industry-leading partners to deliver cutting-edge technology solutions and services.
                    </p>
                </div>
            </div>

            {/* Full-width Partner Slider */}
            <div className="relative overflow-hidden">
                <div className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * (100 / visiblePartners)}%)` }}>
                    {partners.map((partner) => (
                        <div
                            key={partner.id}
                            className="flex-shrink-0 px-4"
                            style={{ width: `${100 / visiblePartners}%` }}
                        >
                            <div className="bg-white rounded-[20px] border border-gray-200 hover:border-brand-teal/30 transition-all duration-300 hover:shadow-lg p-6 h-[140px] flex items-center justify-center group">
                                <Image
                                    src={partner.logo || "/placeholder.svg"}
                                    alt={`${partner.name} logo`}
                                    width={140}
                                    height={80}
                                    className="object-contain max-h-[80px] max-w-[140px] filter grayscale group-hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Controls */}
                <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
                    <button
                        onClick={prevSlide}
                        className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200 flex items-center justify-center text-brand-teal hover:bg-brand-teal hover:text-white transition-all duration-300"
                        aria-label="Previous partners"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>
                </div>

                <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
                    <button
                        onClick={nextSlide}
                        className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200 flex items-center justify-center text-brand-teal hover:bg-brand-teal hover:text-white transition-all duration-300"
                        aria-label="Next partners"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>
                </div>

                {/* Slide Indicators */}
                <div className="flex justify-center mt-8 gap-2">
                    {Array.from({ length: Math.ceil(partners.length / visiblePartners) }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index * visiblePartners)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${Math.floor(currentIndex / visiblePartners) === index
                                    ? 'bg-brand-teal w-8'
                                    : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
