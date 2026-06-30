import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import QuotationEstimator from "@/components/shared/QuotationEstimator";
import DynamicFaq from "@/components/shared/DynamicFaq";
import { 
  ArrowLeft, 
  MapPin, 
  ShieldCheck, 
  Sparkles, 
  Star, 
  HelpCircle, 
  Calculator, 
  TrendingUp, 
  PhoneCall 
} from "lucide-react";
import { citiesData } from "@/data/cities";

interface PageProps {
  params: Promise<{ city: string }>;
}

// Dynamically generate SEO metadata for each city to dominate local search rankings
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const data = citiesData[city];
  
  if (!data) {
    return {
      title: "Kota Tidak Ditemukan | TukangTamannn.com",
    };
  }

  return {
    title: data.metaTitle,
    description: data.metaDesc,
    keywords: `tukang taman ${data.name}, tukang taman premium ${data.name}, jasa taman ${data.name}, pembuat taman ${data.name}, kolam koi ${data.name}, gazebo ${data.name}, taman minimalis ${data.name}, cv sarijaya makmur, david mauluddin`,
    openGraph: {
      title: data.metaTitle,
      description: data.metaDesc,
      url: `https://tukangtamannn.com/area-layanan/${data.slug}`,
      siteName: "TukangTamannn.com",
      images: [
        {
          url: data.image,
          width: 1200,
          height: 600,
          alt: `Layanan Tukang Taman ${data.name}`,
        }
      ],
      type: "website",
    }
  };
}

export default async function CityDetail({ params }: PageProps) {
  const { city } = await params;
  const data = citiesData[city];

  if (!data) {
    return notFound();
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": `Jasa Tukang Taman ${data.name} - CV. SARIJAYA MAKMUR`,
    "image": data.image,
    "telephone": "+6282131472864",
    "url": `https://tukangtamannn.com/area-layanan/${data.slug}`,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": data.region === "Bali" ? "Denpasar" : "Jl Green Mansion Safir Sidoarjo",
      "addressLocality": data.name,
      "addressRegion": data.region,
      "addressCountry": "ID"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": data.name
    },
    "description": data.metaDesc
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Berapa biaya pembuatan taman per meter di ${data.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Biaya pembuatan taman di ${data.name} berkisar antara Rp 350.000 hingga Rp 500.000 per meter persegi, tergantung pada jenis tanaman hias, luas area, dan kerumitan elemen hardscape.`
        }
      },
      {
        "@type": "Question",
        "name": "Apakah CV. SARIJAYA MAKMUR memberikan garansi hidup tanaman?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ya, seluruh pengerjaan taman oleh CV. SARIJAYA MAKMUR dilengkapi dengan jaminan garansi tertulis untuk penggantian gratis jika ada tanaman yang layu atau mati selama masa pemeliharaan awal."
        }
      },
      {
        "@type": "Question",
        "name": `Apakah ada biaya survei lokasi untuk area ${data.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Tidak ada. Tim kami menyediakan survei lokasi fisik dan konsultasi tatap muka gratis untuk seluruh wilayah ${data.name}.`
        }
      }
    ]
  };

  return (
    <main className="min-h-screen flex flex-col pt-0 relative overflow-hidden bg-cream selection:bg-sage/40">
      {/* Dynamic SEO JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />
      
      {/* Dynamic City Hero Header */}
      <section className="pt-40 pb-16 px-6 relative bg-white border-b border-forest/5 print:hidden">
        <div className="absolute inset-0 bg-forest/[0.01] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          
          {/* Breadcrumb / Back Navigation */}
          <div className="flex flex-wrap items-center gap-2 mb-8 text-xs font-bold uppercase tracking-wider text-forest/50">
            <Link href="/" className="hover:text-sage transition-colors">Beranda</Link>
            <span>/</span>
            <Link href="/area-layanan" className="hover:text-sage transition-colors">Area Layanan</Link>
            <span>/</span>
            <span className="text-forest font-black">{data.name}</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-forest/50 uppercase tracking-widest mb-6">
            <span className="bg-sage/10 text-forest px-3.5 py-1.5 rounded-lg font-extrabold flex items-center gap-1">
              <MapPin size={12} className="text-sage" /> {data.region}
            </span>
            <span className="flex items-center gap-1.5"><ShieldCheck size={13} className="text-sage" /> Garansi Resmi CV. SJM</span>
            <span className="flex items-center gap-1.5"><Star size={13} className="text-sage" /> 5.0 Rating Kepuasan</span>
          </div>

          <h1 className="font-extrabold text-3xl md:text-5xl lg:text-6xl text-forest tracking-tighter mb-6 leading-tight">
            {data.title}
          </h1>

          <p className="text-charcoal/80 text-sm md:text-base max-w-3xl font-medium mb-10 leading-relaxed">
            {data.subtitle}
          </p>

          {/* Optimized Hero Image Showcase */}
          <div className="aspect-[2/1] relative w-full rounded-[40px] overflow-hidden shadow-2xl border border-forest/5">
            <Image 
              src={data.image} 
              alt={data.title} 
              fill 
              className="object-cover" 
              referrerPolicy="no-referrer"
              priority 
            />
            {/* Highlight overlay */}
            <div className="absolute bottom-6 left-6 bg-forest/90 backdrop-blur-md border border-white/10 text-white px-5 py-3 rounded-2xl flex items-center gap-2.5 shadow-xl max-w-sm">
              <Sparkles size={16} className="text-sage flex-shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-widest font-extrabold text-white/60">Rekomendasi Proyek Lokal</p>
                <p className="text-[11px] font-bold leading-relaxed">{data.localProjectHighlight}</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Core Content & Key Benefits Grid */}
      <section className="py-16 px-6 print:hidden">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Detailed Local Content Body */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6 text-charcoal/80 leading-relaxed text-sm md:text-base font-medium">
              <h2 className="text-2xl font-black text-forest tracking-tight">
                Mengapa Memilih Jasa Pembuatan Taman Kami di {data.name}?
              </h2>
              <p>{data.content}</p>
              {data.detailedContent.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Localized Focus Callout */}
            <div className="bg-sage/10 rounded-3xl p-6 md:p-8 border border-sage/20 space-y-3">
              <span className="text-[10px] font-black uppercase text-forest tracking-wider flex items-center gap-1.5">
                <TrendingUp size={14} className="text-sage" /> Pendekatan Spesifik Wilayah {data.name}
              </span>
              <p className="text-xs md:text-sm text-forest font-bold leading-relaxed">
                {data.localFocus}
              </p>
            </div>
          </div>

          {/* Localized Side Features Summary Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-[32px] p-6 md:p-8 border border-forest/10 shadow-sm sticky top-28 space-y-6">
              <h3 className="font-extrabold text-forest text-lg flex items-center gap-2 mb-4 border-b border-forest/5 pb-3">
                <ShieldCheck className="text-sage w-5 h-5 flex-shrink-0" />
                Benefit Khusus Area {data.name}
              </h3>
              <ul className="space-y-4">
                {data.benefits.map((benefit, index) => (
                  <li key={index} className="flex gap-2.5 text-xs md:text-sm text-charcoal/70 leading-relaxed font-semibold">
                    <span className="text-sage font-black mt-0.5">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-forest/5 text-center">
                <p className="text-xs text-charcoal/50 font-bold mb-4">Butuh Survei Lokasi di {data.name}?</p>
                <a 
                  href={`https://wa.me/6282131472864?text=Halo%20TukangTamannn.com,%20saya%20tertarik%20mengajukan%20jadwal%20survei%20lokasi%20di%20kota%20${encodeURIComponent(data.name)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-forest text-white hover:bg-forest/90 py-4 px-4 rounded-xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-forest/10 hover:shadow-forest/20 transition-all cursor-pointer"
                >
                  <PhoneCall size={16} /> Hubungi David Mauluddin
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Quotation Engine Segment */}
      <section className="pb-16 px-6 relative z-10">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="text-center max-w-xl mx-auto mb-10 print:hidden">
            <div className="inline-flex items-center gap-1 px-3 py-1 bg-forest/5 border border-forest/10 rounded-full text-[9px] font-bold uppercase tracking-wider text-forest/70 mb-3">
              <Calculator size={11} className="text-sage" /> Kalkulasi Transparan
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-forest tracking-tight">
              Hitung Biaya Penawaran Anda di <span className="font-serif italic font-normal text-sage">{data.name}</span>
            </h2>
            <p className="text-xs text-charcoal/60 font-semibold mt-2">
              Atur ukuran luas pekarangan dan material premium Anda untuk melihat live estimasi harga resmi dari CV. SARIJAYA MAKMUR. Anda dapat langsung mencetak penawaran resmi ini.
            </p>
          </div>

          <QuotationEstimator />
        </div>
      </section>

      {/* Dynamic & Searchable FAQ Segment */}
      <section className="py-16 px-6 bg-white border-t border-b border-forest/5 print:hidden">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center max-w-xl mx-auto">
            <div className="inline-flex items-center gap-1 px-3 py-1 bg-forest/5 border border-forest/10 rounded-full text-[9px] font-bold uppercase tracking-wider text-forest/70 mb-3">
              <HelpCircle size={11} className="text-sage" /> FAQ Dinamis
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-forest tracking-tight">
              Pusat Informasi & <span className="font-serif italic font-normal text-sage">Tanya Jawab</span>
            </h2>
            <p className="text-xs text-charcoal/60 font-semibold mt-2">
              Gunakan bilah pencarian atau filter kategori di bawah untuk menemukan solusi seputar pengerjaan taman Anda secara interaktif.
            </p>
          </div>

          <DynamicFaq />
        </div>
      </section>

      {/* Local Authority Call to Action Banner */}
      <section className="py-24 px-6 print:hidden">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1A3C34] text-white rounded-[40px] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-[-50%] left-[-10%] w-[300px] h-[300px] bg-sage opacity-20 rounded-full blur-[80px]" />
            <h3 className="text-2xl md:text-4xl font-extrabold mb-4 relative z-10 tracking-tight leading-tight">
              Siap Wujudkan Taman Terbaik Anda di {data.name}?
            </h3>
            <p className="text-white/80 max-w-lg mx-auto font-medium mb-8 text-xs md:text-sm relative z-10 leading-relaxed">
              Jadwalkan survei lokasi fisik Anda di area {data.name} secara GRATIS hari ini. Konsultasikan langsung bersama David Mauluddin ST. (Owner CV. SARIJAYA MAKMUR).
            </p>
            <div className="flex justify-center relative z-10">
              <a 
                href={`https://wa.me/6282131472864?text=Halo%20David%20Mauluddin%20ST.,%20saya%20tertarik%20mengajukan%20survei%20lokasi%20taman%20di%20area%20${encodeURIComponent(data.name)}`}
                target="_blank" 
                rel="noreferrer" 
                className="bg-sage text-forest px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl hover:-translate-y-1"
              >
                Hubungi via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Local Sibling Cities Contextual Silo Interlinking */}
      <section className="pb-24 px-6 print:hidden">
        <div className="max-w-5xl mx-auto">
          <h4 className="text-center text-xs font-bold uppercase tracking-widest text-forest/40 mb-6">
            Wilayah Layanan CV. SARIJAYA MAKMUR Lainnya di {data.region}
          </h4>
          <div className="flex flex-wrap justify-center gap-2.5">
            {Object.values(citiesData)
              .filter(sibling => sibling.region === data.region && sibling.slug !== data.slug)
              .map(sibling => (
                <Link
                  key={sibling.slug}
                  href={`/area-layanan/${sibling.slug}`}
                  className="bg-white hover:bg-forest text-forest hover:text-white px-4.5 py-2.5 rounded-xl text-xs font-bold border border-forest/5 hover:border-forest transition-all duration-200 flex items-center gap-1.5 shadow-sm hover:shadow-md"
                >
                  <MapPin size={11} className="text-sage" />
                  <span>Jasa Taman {sibling.name}</span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
