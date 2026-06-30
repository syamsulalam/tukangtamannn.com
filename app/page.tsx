import type { Metadata } from "next";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import StylesSection from "@/components/StylesSection";
import TestimonialSlider from "@/components/TestimonialSlider";
import FaqSection from "@/components/FaqSection";
import SideNav from "@/components/SideNav";
import ContactFormSection from "@/components/ContactFormSection";

export const metadata: Metadata = {
  title: "TukangTamannn.com | Jasa Pembuatan Taman Premium Jatim & Bali",
  description: "CV. SARIJAYA MAKMUR (David Mauluddin ST.) melayani jasa desain 3D & pembuatan taman premium, kolam ikan koi, & gazebo di Surabaya, Sidoarjo, Malang, Bali.",
  keywords: "tukang taman surabaya, tukang taman sidoarjo, tukang taman malang, tukang taman bali, kolam koi surabaya, gazebo sidoarjo, cv sarijaya makmur, david mauluddin",
  openGraph: {
    title: "TukangTamannn.com | Jasa Pembuatan Taman Premium",
    description: "Wujudkan taman asri impian Anda bersama tim profesional bergaransi resmi dari CV. SARIJAYA MAKMUR.",
    url: "https://tukangtamannn.com",
    type: "website"
  }
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "CV. SARIJAYA MAKMUR - TukangTamannn.com",
    "image": "https://picsum.photos/seed/surabayagarden/1200/600",
    "@id": "https://tukangtamannn.com",
    "url": "https://tukangtamannn.com",
    "telephone": "+6282131472864",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl Green Mansion Safir Sidoarjo",
      "addressLocality": "Sidoarjo",
      "addressRegion": "Jawa Timur",
      "postalCode": "61254",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -7.4478,
      "longitude": 112.7183
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "07:00",
      "closes": "21:00"
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Surabaya" },
      { "@type": "AdministrativeArea", "name": "Sidoarjo" },
      { "@type": "AdministrativeArea", "name": "Gresik" },
      { "@type": "AdministrativeArea", "name": "Malang" },
      { "@type": "AdministrativeArea", "name": "Pasuruan" },
      { "@type": "AdministrativeArea", "name": "Mojokerto" },
      { "@type": "AdministrativeArea", "name": "Denpasar" },
      { "@type": "AdministrativeArea", "name": "Badung" },
      { "@type": "AdministrativeArea", "name": "Gianyar" },
      { "@type": "AdministrativeArea", "name": "Ubud" }
    ]
  };

  return (
    <main className="min-h-screen flex flex-col pt-0 relative overflow-hidden bg-cream selection:bg-sage/40">
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Organic Background Accents */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-sage opacity-20 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[-100px] w-[600px] h-[600px] rounded-full bg-forest opacity-10 blur-[120px] pointer-events-none"></div>
      
      <SideNav />
      <Header />
      <HeroSection />
      <ServicesSection />
      <StylesSection />
      <PortfolioSection />
      <TestimonialSlider />
      <FaqSection />
      <ContactFormSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

