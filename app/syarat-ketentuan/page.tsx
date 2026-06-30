import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Shield, FileText, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan Layanan | CV. SARIJAYA MAKMUR",
  description: "Aturan main dan kesepakatan resmi pengerjaan proyek lanskap bersama CV. SARIJAYA MAKMUR. Garansi tanaman, tata cara pembayaran DP, dan survei.",
  keywords: "syarat ketentuan tukang taman, cv sarijaya makmur, garansi taman, kontrak kerja taman",
};

export default function SyaratKetentuan() {

  return (
    <main className="min-h-screen flex flex-col pt-0 relative overflow-hidden bg-cream selection:bg-sage/40">
      <Header />
      
      {/* Hero Header */}
      <section className="pt-40 pb-16 px-6 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest/5 border border-forest/10 mb-6 w-fit mx-auto">
            <FileText className="text-sage w-4 h-4" />
            <span className="text-[10px] font-bold text-forest/60 uppercase tracking-[0.2em]">Dokumen Legal</span>
          </div>
          <h1 className="font-extrabold text-4xl md:text-5xl text-forest tracking-tighter mb-4">
            Syarat & <span className="italic font-serif font-normal text-sage">Ketentuan Layanan</span>
          </h1>
          <p className="text-charcoal/70 text-sm md:text-base max-w-lg mx-auto font-medium">
            Aturan main dan kesepakatan resmi pengerjaan proyek lanskap bersama CV. SARIJAYA MAKMUR.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-32 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-forest/5">
          <div className="space-y-8 text-charcoal/80 leading-relaxed font-medium text-sm md:text-base">
            <div>
              <h2 className="text-xl font-bold text-forest mb-3 flex items-center gap-2">
                <CheckCircle2 className="text-sage w-5 h-5" /> 1. Ketentuan Umum
              </h2>
              <p className="pl-7">
                Seluruh kesepakatan pengerjaan taman, kolam, gazebo, atau lanskap di bawah merek <strong>TukangTamannn.com</strong> dijalankan secara resmi oleh badan usaha <strong>CV. SARIJAYA MAKMUR</strong> milik <strong>David Mauluddin ST.</strong> yang berkedudukan di Sidoarjo, Indonesia.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-forest mb-3 flex items-center gap-2">
                <CheckCircle2 className="text-sage w-5 h-5" /> 2. Proses Survei & Desain
              </h2>
              <p className="pl-7">
                Survei lokasi wilayah Jawa Timur dan Bali terjadwal secara berkala. Estimasi biaya awal bersifat acuan umum. Biaya riil proyek ditentukan berdasarkan pengukuran resmi di lapangan dan kesepakatan desain final (sketsa 2D/3D).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-forest mb-3 flex items-center gap-2">
                <CheckCircle2 className="text-sage w-5 h-5" /> 3. Pembayaran & Uang Muka (DP)
              </h2>
              <p className="pl-7">
                Pekerjaan baru akan dimulai setelah klien menyetujui Rencana Anggaran Biaya (RAB) tertulis dan membayar uang muka (DP) sesuai persentase yang disepakati bersama CV. SARIJAYA MAKMUR. Pelunasan sisa pembayaran dilakukan segera setelah seluruh proses serah terima fisik selesai di lapangan.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-forest mb-3 flex items-center gap-2">
                <CheckCircle2 className="text-sage w-5 h-5" /> 4. Masa Garansi Tanam & Pemeliharaan
              </h2>
              <p className="pl-7">
                Kami memberikan garansi tumbuh optimal untuk semua jenis pohon besar (seperti Pule, Kamboja Fosil, Tabebuya) dan tanaman hias premium selama 30 hari kalender sejak tanggal serah terima pekerjaan. Tanaman yang terbukti layu atau mati dalam masa garansi akibat kelalaian teknis penanaman kami akan diganti baru secara gratis tanpa biaya tambahan dari klien.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-forest mb-3 flex items-center gap-2">
                <CheckCircle2 className="text-sage w-5 h-5" /> 5. Hak Cipta Desain & Dokumentasi
              </h2>
              <p className="pl-7">
                CV. SARIJAYA MAKMUR memegang hak cipta atas seluruh berkas desain 3D asli dan berhak menggunakan foto atau video hasil dokumentasi proyek selesai sebagai portofolio resmi promosi perusahaan, dengan tetap menjaga kerahasiaan identitas dan alamat spesifik klien demi privasi.
              </p>
            </div>

            <div className="pt-8 border-t border-forest/10 mt-8 text-center text-xs text-charcoal/50 font-bold uppercase tracking-wider">
              Terakhir diperbarui: Juni 2026 • CV. SARIJAYA MAKMUR
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
