"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { question: "Berapa estimasi biaya pembuatan taman per meter persegi?", answer: "Biaya pembuatan taman sangat bervariasi bergantung pada jenis tanaman, material hardscape, dan tingkat kesulitan desain. Mulai dari Rp 350.000/m² untuk taman rumput standar hingga jutaan rupiah untuk konsep premium. Kami memberikan RAB transparan setelah survei lahan." },
  { question: "Apakah ada garansi untuk tanaman yang mati?", answer: "Ya, kami memberikan garansi tanaman hidup selama 2-4 minggu setelah serah terima proyek, khusus untuk tanaman yang mati bukan karena kelalaian penyiraman." },
  { question: "Berapa lama proses pengerjaan taman?", answer: "Durasi bervariasi. Taman minimalis area perumahan normalnya membutuhkan waktu 3-7 hari kerja. Sementara proyek lengkap dengan kolam koi atau gazebo bisa memakan waktu 2-4 minggu." },
  { question: "Apakah melayani perawatan taman bulanan?", answer: "Tentu. Kami menyediakan paket perawatan berkala yang mencakup pemangkasan, pemupukan, penyemprotan hama, dan perbaikan kecil agar taman Anda selalu tampil prima." }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-cream px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest/5 border border-forest/10 mb-6 w-fit mx-auto">
             <span className="w-1.5 h-1.5 rounded-full bg-sage"></span>
             <span className="text-[10px] font-bold text-forest/60 uppercase tracking-[0.2em]">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-forest tracking-tighter">
            Pertanyaan yang <span className="italic font-serif font-normal text-sage">Sering Diajukan</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              key={idx}
              className={`border border-forest/10 rounded-2xl overflow-hidden transition-colors ${openIndex === idx ? 'bg-white shadow-md' : 'bg-transparent'}`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-bold text-forest text-lg">{faq.question}</span>
                <span className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors ${openIndex === idx ? 'border-sage bg-sage text-forest' : 'border-forest/20 text-forest'}`}>
                  {openIndex === idx ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0 text-charcoal/70 font-medium leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
