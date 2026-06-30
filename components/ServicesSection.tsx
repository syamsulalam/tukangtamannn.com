"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Trees, Droplets, Tent, Layers, Scissors } from "lucide-react";

const services = [
  {
    title: "Pembuatan & Desain Taman",
    description: "Perancangan tata letak dan penanaman untuk estetika maksimal dari awal hingga akhir.",
    image: "https://picsum.photos/seed/gardenmaker/600/400",
    icon: Trees
  },
  {
    title: "Kolam Ikan & Water Feature",
    description: "Kolam koi, air terjun relief/tebing, dan elemen air minimalis penenang jiwa.",
    image: "https://picsum.photos/seed/koipond/600/400",
    icon: Droplets
  },
  {
    title: "Gazebo & Saung",
    description: "Bangunan kayu jati, bambu, atau kelapa untuk area bersantai yang teduh.",
    image: "https://picsum.photos/seed/gazebo/600/400",
    icon: Tent
  },
  {
    title: "Batu Alam & Lantai Carport",
    description: "Pemasangan ampyangan, sikat, dan berbagai batu alam untuk hardscape elegan.",
    image: "https://picsum.photos/seed/hardscape/600/400",
    icon: Layers
  },
  {
    title: "Perawatan & Renovasi",
    description: "Maintenance rutin, pemangkasan, pemupukan, dan revitalisasi taman lama Anda.",
    image: "https://picsum.photos/seed/maintenance/600/400",
    icon: Scissors
  },
];

export default function ServicesSection() {
  return (
    <section id="layanan" className="py-[120px] bg-cream px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest/5 border border-forest/10 mb-6 w-fit">
             <span className="w-1.5 h-1.5 rounded-full bg-sage"></span>
             <span className="text-[10px] font-bold text-forest/60 uppercase tracking-[0.2em]">Layanan Unggulan</span>
          </div>
          <h2 className="font-extrabold text-4xl md:text-5xl text-forest tracking-tighter mb-6 relative z-10">
            Layanan Lanskap <span className="italic font-serif font-normal text-sage">Komprehensif</span>
          </h2>
          <p className="text-charcoal/70 leading-relaxed font-medium">
            Menyatukan keahlian teknis dan visi artistik, kami menghadirkan layanan lengkap untuk mengubah dan merawat setiap sudut luar ruangan properti Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              key={service.title}
              className="bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-forest/5 transition-all duration-300 group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden m-2 rounded-2xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-forest shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <service.icon size={20} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-forest mb-2">
                  {service.title}
                </h3>
                <p className="text-charcoal/60 text-sm leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
