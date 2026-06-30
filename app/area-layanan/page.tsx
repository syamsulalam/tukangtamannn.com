import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { MapPin, ArrowRight, ShieldCheck, Star, Sparkles, Building2 } from "lucide-react";
import { citiesData } from "@/data/cities";

export const metadata: Metadata = {
  title: "Area Layanan Jasa Tukang Taman | CV. SARIJAYA MAKMUR",
  description: "Daftar lengkap wilayah pengerjaan taman, kolam koi, dan gazebo di Jawa Timur (Surabaya, Sidoarjo, Gresik, Malang) & Bali (Denpasar, Badung, Ubud) oleh CV. SARIJAYA MAKMUR.",
  keywords: "area layanan tukang taman, tukang taman surabaya, tukang taman sidoarjo, tukang taman gresik, tukang taman malang, tukang taman bali, badung, seminyak, ubud",
  openGraph: {
    title: "Area Layanan Jasa Tukang Taman | CV. SARIJAYA MAKMUR",
    description: "Hubungi David Mauluddin ST. untuk survei gratis wilayah Jawa Timur dan Bali. Spesialis taman & lanskap berkualitas tinggi.",
    type: "website",
  }
};

export default function AreaLayanan() {
  const citiesList = Object.values(citiesData);
  const jatimCities = citiesList.filter(c => c.region === "Jawa Timur");
  const baliCities = citiesList.filter(c => c.region === "Bali");

  return (
    <main className="min-h-screen flex flex-col pt-0 relative overflow-hidden bg-cream selection:bg-sage/40">
      <Header />
      
      {/* Hero Header Section */}
      <section className="pt-40 pb-20 px-6 relative bg-white border-b border-forest/5">
        <div className="absolute inset-0 bg-forest/[0.01] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest/5 border border-forest/10 mb-6 w-fit mx-auto">
            <MapPin className="text-sage w-4 h-4" />
            <span className="text-[10px] font-black text-forest/70 uppercase tracking-[0.25em]">Wilayah Operasional Resmi</span>
          </div>
          
          <h1 className="font-extrabold text-4xl md:text-6xl text-forest tracking-tighter mb-6 leading-none">
            Area Layanan <span className="italic font-serif font-normal text-sage">Tukang Taman</span>
          </h1>
          
          <p className="text-charcoal/80 text-sm md:text-base max-w-2xl mx-auto font-medium leading-relaxed">
            CV. SARIJAYA MAKMUR dipimpin oleh <strong className="text-forest">David Mauluddin ST.</strong> melayani jasa konsultasi, desain, dan pembuatan taman premium secara eksklusif untuk 2 provinsi utama: <strong className="text-forest">Jawa Timur</strong> & <strong className="text-forest">Bali</strong>.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mt-10">
            {[
              { icon: ShieldCheck, title: "Survei Gratis", desc: "Kunjungan pengukuran & diskusi lahan tanpa biaya." },
              { icon: Star, title: "Garansi 30 Hari", desc: "Jaminan tanaman mati diganti baru tanpa biaya tambahan." },
              { icon: Building2, title: "Badan Usaha Resmi", desc: "Transaksi aman & profesional di bawah CV. SARIJAYA MAKMUR." }
            ].map((feat, idx) => (
              <div key={idx} className="bg-cream/40 p-4 rounded-2xl border border-forest/5 text-center">
                <feat.icon className="text-sage w-6 h-6 mx-auto mb-2" />
                <h3 className="font-bold text-xs text-forest uppercase tracking-wider mb-1">{feat.title}</h3>
                <p className="text-[11px] text-charcoal/60 font-semibold leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regions Showcases */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-24">
          
          {/* East Java Region */}
          <div className="space-y-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-forest/10 pb-6">
              <div>
                <span className="text-[10px] font-black uppercase text-sage tracking-widest block mb-2">Klaster Area I</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-forest tracking-tight">
                  Layanan Jawa Timur <span className="font-serif italic font-normal text-sage">Surabaya & Sekitarnya</span>
                </h2>
              </div>
              <p className="text-xs md:text-sm text-charcoal/60 max-w-md font-semibold leading-relaxed">
                Melayani pengerjaan lanskap residensial elite, vertical garden perkantoran, kolam ikan koi mewah, dan lantai carport batu sikat presisi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {jatimCities.map((city) => (
                <div key={city.slug} className="group bg-white rounded-[32px] border border-forest/5 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                  <div>
                    {/* City Image WebP Optimized placeholder */}
                    <div className="aspect-[3/2] relative w-full overflow-hidden">
                      <Image 
                        src={city.image}
                        alt={`Tukang Taman ${city.name}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl font-bold text-[10px] uppercase text-forest tracking-widest flex items-center gap-1 shadow-sm">
                        <MapPin size={10} className="text-sage" />
                        {city.name}
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <h3 className="font-extrabold text-lg text-forest group-hover:text-sage transition-colors leading-snug">
                        {city.title}
                      </h3>
                      <p className="text-xs text-charcoal/70 font-semibold leading-relaxed line-clamp-3">
                        {city.content}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2">
                    <Link 
                      href={`/area-layanan/${city.slug}`}
                      className="w-full bg-forest/5 hover:bg-forest text-forest hover:text-white py-3 px-4 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                    >
                      Kunjungi Halaman {city.name} <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bali Region */}
          <div className="space-y-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-forest/10 pb-6">
              <div>
                <span className="text-[10px] font-black uppercase text-sage tracking-widest block mb-2">Klaster Area II</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-forest tracking-tight">
                  Layanan Provinsi Bali <span className="font-serif italic font-normal text-sage">Resort & Villa Style</span>
                </h2>
              </div>
              <p className="text-xs md:text-sm text-charcoal/60 max-w-md font-semibold leading-relaxed">
                Melayani pengerjaan taman tropis resort bernilai seni tinggi, pool decking batu andesit flamed, relief batu paras, dan saung kayu ulin kalimantan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {baliCities.map((city) => (
                <div key={city.slug} className="group bg-white rounded-[32px] border border-forest/5 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                  <div>
                    {/* City Image WebP Optimized placeholder */}
                    <div className="aspect-[3/2] relative w-full overflow-hidden">
                      <Image 
                        src={city.image}
                        alt={`Tukang Taman ${city.name}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl font-bold text-[10px] uppercase text-forest tracking-widest flex items-center gap-1 shadow-sm">
                        <MapPin size={10} className="text-sage" />
                        {city.name}
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <h3 className="font-extrabold text-lg text-forest group-hover:text-sage transition-colors leading-snug">
                        {city.title}
                      </h3>
                      <p className="text-xs text-charcoal/70 font-semibold leading-relaxed line-clamp-3">
                        {city.content}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2">
                    <Link 
                      href={`/area-layanan/${city.slug}`}
                      className="w-full bg-forest/5 hover:bg-forest text-forest hover:text-white py-3 px-4 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                    >
                      Kunjungi Halaman {city.name} <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Special Office highlight */}
      <section className="pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1A3C34] text-white rounded-[40px] p-8 md:p-14 relative overflow-hidden shadow-2xl">
            <div className="absolute -top-1/2 -left-10 w-[300px] h-[300px] bg-sage opacity-20 rounded-full blur-[80px]" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-4 max-w-lg">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-[9px] font-bold uppercase tracking-wider">
                  <Sparkles size={11} className="text-sage" /> Kantor Pusat Resmi Sidoarjo
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight">Kantor Pusat CV. SARIJAYA MAKMUR</h3>
                <p className="text-xs text-white/80 font-medium leading-relaxed">
                  Jl Green Mansion Safir blok 16, Sidoarjo, Indonesia, 61253. Kami merancang desain 3D arsitektural dan mengoordinasikan pengiriman seluruh logistik material peneduh ke seluruh wilayah di Jawa Timur dan Bali.
                </p>
              </div>
              <a 
                href="https://wa.me/6282131472864?text=Halo%20David%20Mauluddin%20ST.,%20saya%20tertarik%20mengajukan%20survei%20lokasi%20langsung%20ke%20properti%20saya."
                target="_blank" 
                rel="noreferrer" 
                className="bg-sage text-forest px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl hover:-translate-y-1 text-center w-full md:w-auto shrink-0"
              >
                Konsultasi WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
