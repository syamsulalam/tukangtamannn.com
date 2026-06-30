"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    text: "Hasil luar biasa! Taman minimalis rumah kami sangat sejuk dan pengerjaannya sangat profesional, tepat waktu sesuai jadwal.",
    author: "Bpk. Budi Santoso",
    role: "Klien Residensial, Surabaya Barat",
    image: "https://picsum.photos/seed/budi_client/150/150"
  },
  {
    text: "Desain kolam koi dan pemilihan batunya sangat pas dengan karakter rumah kami. Tim sangat paham tentang sirkulasi air sehingga kolam selalu jernih.",
    author: "Ibu Amanda",
    role: "Klien Residensial, Denpasar, Bali",
    image: "https://picsum.photos/seed/amanda_client/150/150"
  },
  {
    text: "Perawatan rutin yang sangat membantu. Kini tanaman di pekarangan tidak ada yang layu, semuanya rimbun dan sehat terawat tanpa repot.",
    author: "Bpk. Anton",
    role: "Klien Komersial (Cafe), Malang",
    image: "https://picsum.photos/seed/anton_client/150/150"
  }
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-white px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-sage/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest/5 border border-forest/10 mb-6 w-fit mx-auto">
             <span className="w-1.5 h-1.5 rounded-full bg-sage"></span>
             <span className="text-[10px] font-bold text-forest/60 uppercase tracking-[0.2em]">Kisah Sukses</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-forest tracking-tighter">
            Dipercaya oleh <span className="italic font-serif font-normal text-sage">Klien Terbaik</span>
          </h2>
        </div>

        <div className="relative bg-cream/40 border border-forest/5 rounded-[40px] p-8 md:p-16 shadow-md">
          <Quote className="absolute top-8 left-8 text-sage/20 w-24 h-24 rotate-180" />
          
          <div className="relative h-[250px] md:h-[200px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center z-10 w-full"
              >
                <p className="text-lg md:text-2xl font-medium text-charcoal/80 leading-relaxed mb-8 max-w-3xl mx-auto italic">
                  &quot;{testimonials[current].text}&quot;
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative border-2 border-white shadow-sm">
                    <Image src={testimonials[current].image} alt={testimonials[current].author} fill className="object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-forest">{testimonials[current].author}</h4>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-forest/50">{testimonials[current].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prevSlide} className="w-10 h-10 rounded-full border border-forest/20 flex items-center justify-center text-forest hover:bg-forest hover:text-white transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button onClick={nextSlide} className="w-10 h-10 rounded-full border border-forest/20 flex items-center justify-center text-forest hover:bg-forest hover:text-white transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
