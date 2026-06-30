"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Leaf, MapPin, Target, ShieldCheck } from "lucide-react";
import ProcessSection from "@/components/ProcessSection";
import TeamSection from "@/components/TeamSection";
import ContactFormSection from "@/components/ContactFormSection";

export default function TentangKami() {
  return (
    <main className="min-h-screen flex flex-col pt-0 relative overflow-hidden bg-cream selection:bg-sage/40">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest/5 border border-forest/10 mb-6 w-fit">
                   <span className="w-1.5 h-1.5 rounded-full bg-sage"></span>
                   <span className="text-[10px] font-bold text-forest/60 uppercase tracking-[0.2em]">Tentang Kami</span>
                </div>
                <h1 className="font-extrabold text-5xl md:text-6xl text-forest tracking-tighter mb-6 leading-[1.1]">
                   Berdedikasi untuk <br/><span className="italic font-serif font-normal text-sage">Menghijaukan</span> Ruang Anda.
                </h1>
                <p className="text-charcoal/70 leading-relaxed font-medium mb-8 text-lg">
                   TukangTamannn.com berawal dari misi sederhana: mengembalikan ruang hijau pada arsitektur modern perkotaan yang gersang. Dengan pengalaman lebih dari 10 tahun, kami tidak hanya menjadi kontraktor taman, melainkan seniman lanskap.
                </p>
                <div className="flex gap-8 border-t border-forest/10 pt-8 mt-8">
                   <div>
                       <span className="block text-3xl font-extrabold text-forest mb-1">10+</span>
                       <span className="text-xs uppercase tracking-widest font-bold text-forest/50">Tahun Pengalaman</span>
                   </div>
                   <div>
                       <span className="block text-3xl font-extrabold text-forest mb-1">150+</span>
                       <span className="text-xs uppercase tracking-widest font-bold text-forest/50">Proyek Selesai</span>
                   </div>
                </div>
             </div>
             
             <div className="relative">
                <div className="aspect-square md:aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl relative z-10 border border-white/40">
                   <Image src="https://picsum.photos/seed/teamwork/800/800" alt="Tim Tukang Taman" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                {/* Accent Blob */}
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-sage rounded-full blur-[80px] opacity-40 z-0"></div>
             </div>
          </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white relative">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-extrabold text-forest tracking-tight">Nilai Inti Pekerjaan Kami</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                  { icon: Target, title: "Akurasi Desain", desc: "Setiap detail tanaman dan hardscape diimplementasikan persis seperti rancangan 3D yang disepakati." },
                  { icon: ShieldCheck, title: "Kualitas Premium", desc: "Material kayu, batu, dan pompa kolam berspesifikasi tinggi, dilengkapi dengan masa garansi tanam." },
                  { icon: MapPin, title: "Pengetahuan Lokal", desc: "Pakar dalam memilih kombinasi tanaman yang bertahan luar biasa di iklim tropis Jawa Timur dan Bali." }
               ].map((val, idx) => (
                  <motion.div 
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: idx * 0.1 }}
                     key={idx} 
                     className="p-8 rounded-3xl bg-cream/40 border border-forest/5 hover:bg-forest/5 transition-colors"
                  >
                     <div className="w-14 h-14 rounded-2xl bg-forest text-white flex items-center justify-center mb-6 shadow-lg shadow-forest/20">
                        <val.icon size={24} />
                     </div>
                     <h3 className="font-bold text-xl text-forest mb-4">{val.title}</h3>
                     <p className="text-charcoal/70 font-medium leading-relaxed">{val.desc}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
      
      <ProcessSection />
      <TeamSection />
      <ContactFormSection />

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
