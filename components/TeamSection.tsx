"use client";

import { motion } from "motion/react";
import Image from "next/image";

const team = [
  { name: "Andi Saputra", role: "Lead Landscape Architect", image: "https://picsum.photos/seed/andi/400/500" },
  { name: "Budi Hartono", role: "Hardscape Specialist", image: "https://picsum.photos/seed/budi/400/500" },
  { name: "Citra Lestari", role: "Horticulturist", image: "https://picsum.photos/seed/citra/400/500" },
  { name: "Deni Ardiansyah", role: "Project Manager", image: "https://picsum.photos/seed/deni/400/500" },
];

export default function TeamSection() {
  return (
    <section className="py-24 bg-cream px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest/5 border border-forest/10 mb-6 w-fit mx-auto">
             <span className="w-1.5 h-1.5 rounded-full bg-sage"></span>
             <span className="text-[10px] font-bold text-forest/60 uppercase tracking-[0.2em]">Tim Ahli Kami</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-forest tracking-tighter">
            Seniman di Balik <span className="italic font-serif font-normal text-sage">Lanskap</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              key={idx}
              className="group relative rounded-[32px] overflow-hidden aspect-[3/4] shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <h3 className="font-bold text-xl text-white mb-1">{member.name}</h3>
                <p className="text-sage font-medium text-sm">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
