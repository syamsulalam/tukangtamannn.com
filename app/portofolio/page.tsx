"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { ArrowRight } from "lucide-react";

export default function PortofolioHub() {
  const categories = [
    { name: "Rumah Tinggal", count: 85, image: "https://picsum.photos/seed/portresidential/800/600" },
    { name: "Perkantoran & Pabrik", count: 32, image: "https://picsum.photos/seed/portoffice/800/600" },
    { name: "Area Publik & Cafe", count: 47, image: "https://picsum.photos/seed/portpublic/800/600" },
  ];

  return (
    <main className="min-h-screen flex flex-col pt-0 relative overflow-hidden bg-cream selection:bg-sage/40">
      <Header />
      
      <section className="pt-40 pb-20 px-6 relative">
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-sage opacity-20 blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest/5 border border-forest/10 mb-6 w-fit mx-auto">
             <span className="w-1.5 h-1.5 rounded-full bg-sage"></span>
             <span className="text-[10px] font-bold text-forest/60 uppercase tracking-[0.2em]">Galeri Pilihan</span>
          </div>
          <h1 className="font-extrabold text-5xl md:text-6xl text-forest tracking-tighter mb-6">
            Karya <span className="italic font-serif font-normal text-sage">Terdahulu</span>
          </h1>
          <p className="text-charcoal/70 max-w-2xl mx-auto leading-relaxed font-medium">
            Jelajahi rekam jejak dedikasi kami dalam menghijaukan lebih dari 150+ proyek komersial dan residensial. Pilih kategori untuk melihat studi kasus mendalam.
          </p>
        </div>
      </section>

      <section className="pb-32 px-6">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
                <Link href={`#konsultasi`} key={idx} className="group">
                    <motion.div
                       initial={{ opacity: 0, y: 30 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: idx * 0.1 }}
                       className="relative rounded-[32px] overflow-hidden aspect-[3/4] shadow-xl"
                    >
                        <Image
                           src={cat.image}
                           alt={cat.name}
                           fill
                           className="object-cover group-hover:scale-105 transition-transform duration-700"
                           referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/40 to-transparent opacity-80" />
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            <span className="text-sage font-bold text-sm tracking-widest uppercase mb-2">{cat.count} Proyek</span>
                            <h3 className="text-3xl font-extrabold text-white mb-4">{cat.name}</h3>
                            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md group-hover:bg-sage group-hover:border-sage group-hover:text-forest transition-all text-white">
                                <ArrowRight size={18} />
                            </div>
                        </div>
                    </motion.div>
                </Link>
            ))}
         </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
