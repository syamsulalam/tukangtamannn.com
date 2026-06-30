import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & Edukasi Lanskap | CV. SARIJAYA MAKMUR",
  description: "Dapatkan tips perawatan taman musim kemarau, perbandingan biaya taman per meter, inspirasi tanaman dalam ruangan, dan pemilihan rumput bersama CV. SARIJAYA MAKMUR.",
  keywords: "blog taman, estimasi biaya taman 2026, merawat rumput gajah mini, inspirasi taman indoor",
};

export default function BlogHub() {
  const articles = [
    { slug: "biaya-pembuatan-taman-per-meter-2026", title: "Berapa estimasi biaya pembuatan taman per meter tahun 2026?", category: "Edukasi & Biaya", image: "https://picsum.photos/seed/cost/600/400" },
    { slug: "tips-merawat-taman-musim-kemarau", title: "7 Tips merawat taman agar tetap hijau di musim kemarau.", category: "Perawatan", image: "https://picsum.photos/seed/care/600/400" },
    { slug: "memilih-jenis-rumput-lahan-teduh", title: "Cara memilih jenis rumput yang cocok untuk lahan teduh.", category: "Panduan Material", image: "https://picsum.photos/seed/grassguide/600/400" },
    { slug: "inspirasi-desain-taman-bawah-tangga", title: "Inspirasi desain taman di bawah tangga (Indoor Garden).", category: "Inspirasi Ruang", image: "https://picsum.photos/seed/indoorgarden/600/400" },
  ];

  return (
    <main className="min-h-screen flex flex-col pt-0 relative overflow-hidden bg-cream selection:bg-sage/40">
      <Header />
      
      <section className="pt-40 pb-20 px-6 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sage opacity-10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto relative z-10 text-center">
             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest/5 border border-forest/10 mb-6 w-fit mx-auto">
                <span className="w-1.5 h-1.5 rounded-full bg-sage animate-ping"></span>
                <span className="text-[10px] font-bold text-forest/60 uppercase tracking-[0.2em]">Jurnal Alam Pintar</span>
             </div>
             <h1 className="font-extrabold text-5xl md:text-6xl text-forest tracking-tighter mb-6">
                Edukasi & <span className="italic font-serif font-normal text-sage">Wawasan</span> Lanskap
             </h1>
             <p className="text-charcoal/70 max-w-2xl mx-auto leading-relaxed font-medium">
                Kumpulan artikel, tips perawatan, dan panduan lengkap dari ahli lanskap kami untuk menjaga taman yang indah secara berkelanjutan.
             </p>
          </div>
      </section>

      <section className="pb-32 px-6">
         <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article, idx) => (
               <div
                  key={idx}
                  className="bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden border border-forest/5 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col hover:-translate-y-1"
               >
                  <div className="relative h-64 overflow-hidden rounded-t-3xl m-2 mb-0">
                     <Image
                        src={article.image}
                        alt="Blog Thumbs"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                     />
                     <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg text-[10px] font-bold text-forest uppercase tracking-widest shadow-sm">
                        {article.category}
                     </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow justify-between">
                     <h3 className="font-bold text-xl text-forest mb-6 leading-relaxed group-hover:text-sage transition-colors cursor-pointer">{article.title}</h3>
                     <Link href={`/blog/${article.slug}`} className="flex items-center gap-2 text-sm font-bold text-charcoal/50 hover:text-forest transition-colors w-fit border-b border-transparent hover:border-forest pb-1">
                        Baca Selengkapnya <ArrowRight size={14} />
                     </Link>
                  </div>
               </div>
            ))}
         </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
