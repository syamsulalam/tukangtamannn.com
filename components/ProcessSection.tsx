"use client";

import { motion } from "motion/react";
import { ClipboardList, PenTool, Sprout, CheckCircle } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    { icon: ClipboardList, title: "1. Konsultasi & Survei", desc: "Diskusi kebutuhan Anda dan pengamatan langsung kondisi lahan, pencahayaan, serta struktur tanah." },
    { icon: PenTool, title: "2. Desain & Rencana", desc: "Pembuatan visualisasi 3D dan Rencana Anggaran Biaya (RAB) yang transparan untuk persetujuan Anda." },
    { icon: Sprout, title: "3. Eksekusi Proyek", desc: "Pengerjaan fisik oleh tim ahli mulai dari hardscape hingga penanaman softscape dengan presisi." },
    { icon: CheckCircle, title: "4. Serah Terima & Garansi", desc: "Finalisasi detail taman dan pemberian panduan perawatan serta layanan garansi tanaman hidup." }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden px-6">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sage/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest/5 border border-forest/10 mb-6 w-fit mx-auto">
             <span className="w-1.5 h-1.5 rounded-full bg-sage"></span>
             <span className="text-[10px] font-bold text-forest/60 uppercase tracking-[0.2em]">Metodologi</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-forest tracking-tighter">
            Proses Kerja <span className="italic font-serif font-normal text-sage">Terstruktur</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              key={idx}
              className="bg-cream/40 rounded-3xl p-8 border border-forest/5 hover:bg-white hover:shadow-xl transition-all duration-300 relative group"
            >
              <div className="absolute top-8 right-8 text-forest/5 font-extrabold text-6xl group-hover:text-sage/10 transition-colors pointer-events-none">0{idx + 1}</div>
              <div className="w-14 h-14 bg-forest text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-forest/20 group-hover:scale-110 transition-transform">
                <step.icon size={24} />
              </div>
              <h3 className="font-bold text-xl text-forest mb-4 relative z-10">{step.title}</h3>
              <p className="text-charcoal/70 font-medium leading-relaxed relative z-10">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
