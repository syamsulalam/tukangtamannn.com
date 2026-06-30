"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { MoveRight, Sparkles, Building2, Palmtree, Mountain } from "lucide-react";

const styles = [
  { name: "Minimalis Modern", desc: "Bersih, rapi, populer untuk rumah tipe 36/45", image: "https://picsum.photos/seed/minimalist/800/600", icon: Building2 },
  { name: "Vertical Garden", desc: "Solusi hijau untuk lahan sempit & fasad gedung", image: "https://picsum.photos/seed/verticalgarden/800/600", icon: Sparkles },
  { name: "Zen Garden", desc: "Kering, tanpa rumput, kaya akan elemen batu & pasir", image: "https://picsum.photos/seed/zengarden/800/600", icon: Mountain },
  { name: "Taman Tropis", desc: "Rimbun, sejuk, dedaunan lebar berkarakter", image: "https://picsum.photos/seed/tropical/800/600", icon: Palmtree },
];

export default function StylesSection() {
  return (
    <section id="gaya" className="py-[120px] bg-forest text-cream px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sage opacity-10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sage/10 border border-sage/20 mb-6 w-fit">
               <span className="w-1.5 h-1.5 rounded-full bg-sage"></span>
               <span className="text-[10px] font-bold text-sage uppercase tracking-[0.2em]">Inspirasi Gaya</span>
            </div>
            <h2 className="font-extrabold text-4xl md:text-[56px] tracking-tighter mb-6 leading-[1.1]">
              Estetika yang <br/><span className="italic text-sage font-serif font-normal">Mencerminkan</span> Anda
            </h2>
            <p className="text-cream/70 leading-relaxed font-medium">
              Temukan gaya taman yang selaras dengan arsitektur bangunan dan karakter personal Anda. Setiap konsep dirancang khusus untuk memberi nyawa pada properti Anda.
            </p>
          </div>
          <button className="text-xs font-bold uppercase tracking-widest border-b-2 border-sage text-sage pb-1 hover:text-cream hover:border-cream transition-colors">
            Lihat Semua Panduan
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {styles.map((style, idx) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              key={style.name}
              className="relative rounded-[32px] overflow-hidden aspect-[4/3] md:aspect-[16/9] group"
            >
              <Image
                src={style.image}
                alt={style.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A3C34]/90 via-[#1A3C34]/40 to-transparent" />
              <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                <style.icon size={24} />
              </div>
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-extrabold text-2xl mb-2 text-white flex items-center gap-2">
                  {style.name}
                  <MoveRight size={20} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500 delay-100" />
                </h3>
                <p className="text-white/70 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">{style.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
