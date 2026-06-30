"use client";

import { motion } from "motion/react";

export default function TrustSection() {
  return (
    <section className="py-[100px] bg-white px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-forest/10 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-sage/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="font-extrabold text-3xl md:text-5xl text-forest mb-16 tracking-tighter">
          Dipercaya oleh <span className="italic font-serif font-normal text-sage">Klien Terbaik</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <motion.div 
              key={item}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: item * 0.1, duration: 0.5 }}
              className="bg-white/40 backdrop-blur-md p-10 rounded-[32px] shadow-sm border border-forest/5 relative text-left hover:shadow-lg transition-all duration-300"
            >
              <div className="text-6xl text-sage font-serif absolute -top-4 right-8 opacity-20">&quot;</div>
              <p className="text-charcoal/70 text-sm leading-loose mb-6 relative z-10 font-medium">
                {item === 1 ? "Hasil luar biasa! Taman minimalis rumah kami sangat sejuk dan pengerjaannya sangat profesional, tepat waktu sesuai jadwal." 
                : item === 2 ? "Desain kolam koi dan pemilihan batunya sangat pas dengan karakter rumah kami. Tim sangat paham tentang sirkulasi air." 
                : "Perawatan rutin yang sangat membantu. Kini tanaman di pekarangan tidak ada yang layu, semuanya rimbun dan sehat terawat."}
              </p>
              <div>
                <h4 className="font-bold text-forest">Bpk. {['Budi', 'Ahmad', 'Anton'][item-1]}</h4>
                <p className="text-[10px] text-forest/50 font-bold uppercase tracking-[0.2em] mt-1">Klien {['Residensial', 'Komersial', 'Residensial'][item-1]}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
