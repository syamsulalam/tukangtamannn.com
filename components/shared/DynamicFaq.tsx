"use client";

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, HelpCircle, ChevronDown, ChevronUp, CheckCircle, Tag, ShieldAlert, SlidersHorizontal } from "lucide-react";

interface FaqItem {
  id: string;
  category: "umum" | "biaya" | "garansi" | "teknis";
  q: string;
  a: string;
}

const renderAnswerWithPhoneLink = (text: string): ReactNode => {
  const phoneRegex = /(08\d{8,12})/g;
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = phoneRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const phone = match[0];
    const waDigits = phone.startsWith("62") ? phone : `62${phone.slice(1)}`;
    parts.push(
      <a
        key={`wa-${key++}`}
        href={`https://wa.me/${waDigits}?text=${encodeURIComponent("Halo Tim TukangTamannn.com, saya ingin berkonsultasi.")}`}
        target="_blank"
        rel="noreferrer"
        className="text-sage font-bold underline-offset-2 hover:underline"
      >
        {phone}
      </a>
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
};

const FAQ_LIST: FaqItem[] = [
  {
    id: "u1",
    category: "umum",
    q: "Apakah CV. SARIJAYA MAKMUR melayani survei lokasi secara gratis?",
    a: "Ya! Kami menyediakan layanan kunjungan survei lokasi GRATIS tanpa biaya sepeser pun untuk seluruh wilayah operasional aktif kami di Jawa Timur (Surabaya, Sidoarjo, Gresik, Malang, Pasuruan, Mojokerto) dan Bali (Denpasar, Badung, Gianyar, Ubud)."
  },
  {
    id: "u2",
    category: "umum",
    q: "Bagaimana proses pemesanan pembuatan taman berjalan?",
    a: "Prosesnya sangat transparan: 1) Konsultasi awal via WhatsApp atau Form website, 2) Survei lokasi fisik untuk pengukuran lahan, 3) Pembuatan sketsa desain 3D & rincian RAB tertulis, 4) Pembayaran DP & mobilisasi material, 5) Pengerjaan konstruksi, dan 6) Serah terima fisik serta mulainya masa garansi."
  },
  {
    id: "b1",
    category: "biaya",
    q: "Berapa kisaran harga pembuatan taman per meter persegi (m²)?",
    a: "Untuk pengerjaan standar (rumput gajah mini + kombinasi tanaman semak hias) berkisar antara Rp 350.000 - Rp 500.000 / m². Untuk konsep taman premium tropis berkisar antara Rp 600.000 - Rp 950.000 / m². Proyek eksklusif berskala besar dengan bonsai Pule purba atau kolam koi dihitung khusus melalui RAB hasil survei."
  },
  {
    id: "b2",
    category: "biaya",
    q: "Bagaimana sistem termin pembayaran di CV. SARIJAYA MAKMUR?",
    a: "Sistem termin standar kami adalah: Uang muka (DP) sebesar 30-40% sebelum mobilisasi alat & material, termin progres kerja (opsional untuk skala besar), dan pelunasan 100% setelah seluruh pekerjaan selesai dikerjakan dan dilakukan serah terima fisik (handover)."
  },
  {
    id: "g1",
    category: "garansi",
    q: "Apakah seluruh tanaman yang ditanam mendapatkan garansi?",
    a: "Benar sekali! Kami memberikan garansi tumbuh optimal selama 30 hari penuh sejak serah terima proyek selesai. Jika terdapat tanaman hias atau pohon besar pelindung yang layu atau mati dalam periode tersebut, tim kami akan segera melakukan penggantian unit baru tanpa biaya tambahan (Free of charge)."
  },
  {
    id: "g2",
    category: "garansi",
    q: "Bagaimana cara melakukan klaim garansi jika tanaman layu?",
    a: "Sangat mudah, Anda cukup memotret tanaman yang mengalami penurunan kesehatan tersebut dan mengirimkannya langsung ke kontak WhatsApp David Mauluddin ST. di 082131472864. Tim teknis pemeliharaan kami akan segera menjadwalkan kunjungan penggantian tanaman hias tersebut."
  },
  {
    id: "t1",
    category: "teknis",
    q: "Jenis pohon peneduh ikonik apa saja yang siap ditanam?",
    a: "Kami menyediakan koleksi pohon peneduh berkarakter mewah seperti Pohon Pule Bonsai Bonggol Besar Eksklusif, Kamboja Fosil Bali Batang Tua, Tabebuya Bunga Pink/Kuning (Sakura Indonesia), Ketapang Kencana, hingga Cemara Udang Berkarakter."
  },
  {
    id: "t2",
    category: "teknis",
    q: "Bagaimana cara merawat rumput taman agar tetap hijau?",
    a: "Penyiraman ideal dilakukan 2 kali sehari di pagi hari (sebelum pkl 08.00) dan sore hari (setelah pkl 16.00). Hindari menyiram di siang hari bolong. Lakukan pula pemangkasan rutin sebulan sekali serta pemberian pupuk organik dasar secara berkala setiap 3 bulan."
  }
];

export default function DynamicFaq() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"semua" | "umum" | "biaya" | "garansi" | "teknis">("semua");
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleOpen = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = FAQ_LIST.filter((item) => {
    const matchesSearch = 
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.a.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "semua" || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full space-y-8">
      {/* Search and Category Control Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white rounded-3xl p-5 border border-forest/10 shadow-sm">
        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-4 top-3 text-forest/40 w-4 h-4" />
          <input
            type="text"
            placeholder="Cari pertanyaan Anda..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 bg-cream/40 border border-forest/10 rounded-2xl text-xs font-semibold text-forest focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage placeholder:text-forest/30"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
          {[
            { id: "semua", label: "Semua FAQ", icon: HelpCircle },
            { id: "umum", label: "Proses & Umum", icon: SlidersHorizontal },
            { id: "biaya", label: "Harga & RAB", icon: Tag },
            { id: "garansi", label: "Garansi", icon: CheckCircle },
            { id: "teknis", label: "Teknis & Tanaman", icon: ShieldAlert }
          ].map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setSelectedCategory(tab.id as any);
                  setOpenId(null);
                }}
                className={`px-3 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 border transition-all cursor-pointer ${
                  isActive
                    ? "bg-forest text-white border-forest shadow-sm"
                    : "bg-white text-forest/70 border-forest/5 hover:bg-forest/[0.01]"
                }`}
              >
                <tab.icon size={12} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Accordion Questions List */}
      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((item, idx) => {
              const isOpen = openId === item.id;
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl border border-forest/5 overflow-hidden shadow-sm hover:border-sage/40 transition-colors"
                >
                  <button
                    onClick={() => toggleOpen(item.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 font-extrabold text-forest text-sm md:text-base hover:bg-forest/[0.01] transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="text-sage w-5 h-5 flex-shrink-0" />
                      <span>{item.q}</span>
                    </span>
                    <span className="w-8 h-8 rounded-lg bg-forest/5 flex items-center justify-center text-forest flex-shrink-0">
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-1 border-t border-forest/5 text-charcoal/70 text-xs md:text-sm font-medium leading-relaxed bg-cream/20">
                          {renderAnswerWithPhoneLink(item.a)}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 bg-white rounded-3xl border border-forest/5"
            >
              <HelpCircle className="text-forest/20 w-12 h-12 mx-auto mb-4" />
              <p className="text-forest/60 font-bold text-sm">Pertanyaan tidak ditemukan.</p>
              <p className="text-charcoal/40 text-xs font-semibold mt-1">Coba masukkan kata kunci pencarian yang berbeda.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
