import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Shield, Lock, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Kebijakan Privasi Klien | CV. SARIJAYA MAKMUR",
  description: "Kebijakan perlindungan data pribadi dan privasi lokasi residensial maupun komersial Anda bersama CV. SARIJAYA MAKMUR.",
  keywords: "kebijakan privasi tukang taman, perlindungan data, cv sarijaya makmur",
};

export default function KebijakanPrivasi() {

  return (
    <main className="min-h-screen flex flex-col pt-0 relative overflow-hidden bg-cream selection:bg-sage/40">
      <Header />
      
      {/* Hero Header */}
      <section className="pt-40 pb-16 px-6 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest/5 border border-forest/10 mb-6 w-fit mx-auto">
            <Shield className="text-sage w-4 h-4" />
            <span className="text-[10px] font-bold text-forest/60 uppercase tracking-[0.2em]">Kebijakan Privasi</span>
          </div>
          <h1 className="font-extrabold text-4xl md:text-5xl text-forest tracking-tighter mb-4">
            Kebijakan <span className="italic font-serif font-normal text-sage">Privasi Klien</span>
          </h1>
          <p className="text-charcoal/70 text-sm md:text-base max-w-lg mx-auto font-medium">
            Komitmen kami untuk melindungi data pribadi dan privasi lokasi residensial maupun komersial Anda.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-32 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-forest/5">
          <div className="space-y-8 text-charcoal/80 leading-relaxed font-medium text-sm md:text-base">
            <div>
              <h2 className="text-xl font-bold text-forest mb-3 flex items-center gap-2">
                <Lock className="text-sage w-5 h-5" /> 1. Pengumpulan Data Informasi
              </h2>
              <p className="pl-7">
                Saat Anda mengisi form konsultasi di <strong>TukangTamannn.com</strong> atau melakukan diskusi melalui WhatsApp resmi kami di <strong>082131472864</strong>, kami mengumpulkan nama lengkap, nomor telepon aktif, pilihan kategori layanan, dan detail deskripsi proyek yang Anda butuhkan.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-forest mb-3 flex items-center gap-2">
                <Lock className="text-sage w-5 h-5" /> 2. Penggunaan Data Informasi
              </h2>
              <p className="pl-7">
                Informasi yang Anda berikan hanya digunakan untuk kepentingan internal <strong>CV. SARIJAYA MAKMUR</strong>, yaitu untuk: menyusun penawaran harga resmi (RAB), menjadwalkan kunjungan survei fisik ke properti Anda, menghubungi Anda terkait progres pengerjaan proyek, serta melakukan koordinasi layanan purna jual (masa pemantauan garansi tanaman).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-forest mb-3 flex items-center gap-2">
                <Lock className="text-sage w-5 h-5" /> 3. Kerahasiaan & Keamanan Lokasi
              </h2>
              <p className="pl-7">
                Kami sangat menghormati keamanan dan kenyamanan hunian Anda. Alamat spesifik, foto detail rumah pribadi, lokasi geografis (pinpoint Google Maps), serta detail kontak pribadi Anda tidak akan pernah kami sebarluaskan, jual, atau sewakan kepada pihak ketiga mana pun tanpa seizin tertulis dari Anda.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-forest mb-3 flex items-center gap-2">
                <Lock className="text-sage w-5 h-5" /> 4. Dokumentasi Gambar & Video
              </h2>
              <p className="pl-7">
                Dokumentasi hasil pengerjaan akhir proyek yang kami publikasikan di website ini maupun media sosial kami hanya menampilkan visual keasrian taman, kolam, atau lanskap tanpa menyingkap nama pemilik, nomor rumah spesifik, atau identitas privat penghuni rumah demi kenyamanan privasi klien kami.
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
