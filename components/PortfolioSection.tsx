"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { LayoutGrid, Home as HomeIcon, Briefcase, MapPin, Store } from "lucide-react";

const projects = [
  { id: 1, title: "Residencial Minimalis", category: "Rumah Tinggal", height: "h-[400px]", image: "https://picsum.photos/seed/port1/800/1000" },
  { id: 2, title: "Vertical Garden Kantor", category: "Perkantoran", height: "h-[300px]", image: "https://picsum.photos/seed/port2/800/600" },
  { id: 3, title: "Kawasan Tropis Hotel", category: "Area Publik", height: "h-[500px]", image: "https://picsum.photos/seed/port3/800/1200" },
  { id: 4, title: "Rooftop Zen Garden", category: "Komersial", height: "h-[350px]", image: "https://picsum.photos/seed/port4/800/700" },
  { id: 5, title: "Kolam Koi Modern", category: "Rumah Tinggal", height: "h-[450px]", image: "https://picsum.photos/seed/port5/800/900" },
  { id: 6, title: "Jalur Setapak Ampyangan", category: "Area Publik", height: "h-[300px]", image: "https://picsum.photos/seed/port6/800/600" },
];

const categories = [
  { name: "Semua", icon: LayoutGrid },
  { name: "Rumah Tinggal", icon: HomeIcon },
  { name: "Perkantoran", icon: Briefcase },
  { name: "Area Publik", icon: MapPin },
  { name: "Komersial", icon: Store }
];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("Semua");
  
  const filteredProjects = activeFilter === "Semua" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portofolio" className="py-[120px] bg-cream px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest/5 border border-forest/10 mb-6 w-fit">
             <span className="w-1.5 h-1.5 rounded-full bg-sage"></span>
             <span className="text-[10px] font-bold text-forest/60 uppercase tracking-[0.2em]">Galeri Mahakarya</span>
          </div>
          <h2 className="font-extrabold text-4xl md:text-5xl text-forest tracking-tighter mb-6">
            Jejak <span className="italic font-serif font-normal text-sage">Karya Kami</span>
          </h2>
          <p className="text-charcoal/70 leading-relaxed font-medium">
            Menelusuri portofolio dedikasi kami. Dari hunian pribadi hingga kawasan komersial, setiap proyek adalah bukti komitmen pada detail dan kualitas.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveFilter(cat.name)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeFilter === cat.name 
                  ? "bg-forest text-white shadow-md" 
                  : "bg-white/50 text-forest border border-forest/10 hover:bg-forest/5"
              }`}
            >
              <cat.icon size={16} className={activeFilter === cat.name ? "text-sage" : "text-forest/60"} />
              {cat.name}
            </button>
          ))}
        </div>

        {/* Masonry Layout */}
        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className={`relative rounded-3xl overflow-hidden break-inside-avoid w-full ${project.height} group cursor-pointer shadow-lg`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#1A3C34]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-multiply" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-sage mb-1 block">
                    {project.category}
                  </span>
                  <h3 className="font-extrabold text-xl text-white">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
