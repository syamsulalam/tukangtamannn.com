"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center pt-32 pb-12 overflow-hidden px-6">
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Hero Messaging */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-12 xl:col-span-7 flex flex-col justify-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest/5 border border-forest/10 mb-8 w-fit"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-sage" />
            <span suppressHydrationWarning className="text-[10px] uppercase font-bold tracking-[0.2em] text-forest/60">
              Jasa Tukang Taman Profesional {new Date().getFullYear()}
            </span>
          </motion.div>
          
          <h1 className="text-[56px] md:text-[72px] font-extrabold leading-[1.05] tracking-tighter text-forest mb-6">
            Ubah Halaman <br/>
            <span className="text-charcoal inline-block">Jadi </span>
            <span className="text-sage italic font-serif font-normal ml-3">Mahakarya</span> <br className="hidden md:block"/> Alam.
          </h1>
          
          <p className="text-lg text-charcoal/70 max-w-lg leading-relaxed mb-10">
            Menghadirkan harmoni alam ke ruang Anda melalui desain elegan, material premium, dan pengerjaan profesional yang mengutamakan nilai estetika.
          </p>
          
          {/* Quick Links */}
          <div className="flex flex-wrap gap-4 mb-4">
            <Link
              href="#portofolio"
              className="bg-forest text-white px-8 py-4 rounded-xl text-sm font-bold shadow-lg shadow-forest/20 hover:bg-forest/90 transition-all flex items-center gap-2 group"
            >
              Lihat Mahakarya Kami
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
        </motion.div>

        {/* Right: Modern Grid Preview */}
        <div className="lg:col-span-12 xl:col-span-5 relative mt-8 lg:mt-0">
          <div className="grid grid-cols-2 gap-4 items-center">
            {/* Portfolio Card 1 */}
            <div className="space-y-4">
              <div className="h-[250px] md:h-[300px] w-full rounded-3xl bg-forest overflow-hidden relative shadow-2xl">
                 <Image
                   src="https://picsum.photos/seed/tropicalzen/600/800"
                   alt="Tropical Zen"
                   fill
                   className="object-cover"
                   referrerPolicy="no-referrer"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-forest/80 to-transparent"></div>
                 <div className="absolute bottom-6 left-6">
                    <p className="text-white/60 text-[10px] font-bold tracking-widest uppercase">REMAJA RESIDENCE</p>
                    <p className="text-white font-bold font-serif text-lg">Tropical Zen</p>
                 </div>
              </div>
              <div className="h-[140px] w-full rounded-3xl bg-sage/80 backdrop-blur-sm border border-white/20 p-6 flex flex-col justify-end shadow-xl relative overflow-hidden">
                 <div className="absolute top-[-20px] right-[-20px] w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
                 <span className="text-4xl font-bold text-forest">150+</span>
                 <span className="text-xs font-bold text-forest/80 uppercase tracking-widest">Proyek Selesai</span>
              </div>
            </div>
            {/* Portfolio Card 2 */}
            <div className="space-y-4 pt-0 md:pt-12">
              <div className="h-[140px] w-full rounded-3xl bg-white/60 backdrop-blur-md border border-forest/10 p-6 flex flex-col justify-end shadow-lg">
                 <span className="text-4xl font-extrabold text-forest relative z-10 flex items-center gap-1">4.9<span className="text-lg text-sage">★</span></span>
                 <span className="text-[10px] font-bold text-forest/60 uppercase tracking-widest">Rating Google</span>
              </div>
              <div className="h-[250px] md:h-[300px] w-full rounded-3xl bg-charcoal overflow-hidden relative shadow-2xl">
                 <Image
                   src="https://picsum.photos/seed/rooftop/600/800"
                   alt="Rooftop Garden"
                   fill
                   className="object-cover"
                   referrerPolicy="no-referrer"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                 <div className="absolute bottom-6 left-6">
                    <p className="text-white/60 text-[10px] font-bold tracking-widest uppercase">OFFICE PARK</p>
                    <p className="text-white font-bold font-serif text-lg">Rooftop Garden</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
