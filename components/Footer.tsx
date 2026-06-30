import Link from "next/link";
import { Leaf, MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-forest border-t border-forest/10 pt-[100px] pb-6 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          <div className="lg:col-span-1 border-r border-forest/5 pr-6">
            <Link href="/" className="flex items-center gap-3 group mb-6">
              <div className="w-10 h-10 bg-forest rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
                 <div className="w-3.5 h-3.5 bg-sage rotate-45 rounded-sm"></div>
              </div>
              <span className="font-bold text-xl tracking-tight text-forest">
                Tukang<span className="text-sage">Tamannn.com</span>
              </span>
            </Link>
            <p className="text-charcoal/70 text-sm leading-relaxed mb-8 font-medium">
              Spesialis desain dan pembuatan taman premium oleh CV. SARIJAYA MAKMUR. Kami menghadirkan mahakarya lanskap hijau yang asri dan menenangkan.
            </p>
            <div className="flex gap-4">
              <span className="w-10 h-10 rounded-full border border-forest/10 flex items-center justify-center hover:bg-forest hover:text-white transition-colors cursor-pointer text-forest">
                <Instagram size={18} />
              </span>
              <span className="w-10 h-10 rounded-full border border-forest/10 flex items-center justify-center hover:bg-forest hover:text-white transition-colors cursor-pointer text-forest">
                <Facebook size={18} />
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg text-forest mb-6">Layanan Utama</h4>
            <ul className="space-y-3">
              {[
                { name: 'Pembuatan Taman Premium', href: '/layanan/jasa-pembuatan-taman' },
                { name: 'Kolam Ikan Koi & Air Terjun', href: '/layanan/pembuatan-kolam-ikan-water-feature' },
                { name: 'Gazebo & Saung Kayu', href: '/layanan/pembuatan-gazebo-saung' },
                { name: 'Batu Alam & Lantai Carport', href: '/layanan/pemasangan-batu-alam-lantai-carport' },
                { name: 'Perawatan & Renovasi Taman', href: '/layanan/perawatan-renovasi-taman' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-charcoal/70 hover:text-forest font-medium transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg text-forest mb-6">Inspirasi & Katalog</h4>
            <ul className="space-y-3">
              {[
                { name: 'Taman Minimalis Modern', href: '/gaya/taman-minimalis-modern' },
                { name: 'Vertical Garden (Taman Tegak)', href: '/gaya/vertical-garden' },
                { name: 'Taman Kering / Zen Garden', href: '/gaya/taman-kering-zen' },
                { name: 'Katalog Rumput Taman', href: '/katalog/jenis-rumput' },
                { name: 'Pohon Peneduh & Fosil Ikonik', href: '/katalog/pohon-peneduh-ikonik' },
                { name: 'Tanaman Hias & Bunga', href: '/katalog/tanaman-hias-bunga' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-charcoal/70 hover:text-forest font-medium transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg text-forest mb-6">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="text-charcoal/70 font-semibold text-xs uppercase tracking-wider">
                CV. SARIJAYA MAKMUR
                <span className="block font-medium normal-case text-sm mt-0.5 text-forest">David Mauluddin ST.</span>
              </li>
              <li className="flex gap-3 text-charcoal/70 font-medium text-sm items-start">
                <MapPin size={18} className="text-sage flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed text-xs">Jl Green Mansion Safir blok 16, Sidoarjo, Indonesia, 61253</span>
              </li>
              <li className="flex gap-3 text-charcoal/70 font-medium text-sm items-center">
                <Phone size={18} className="text-sage flex-shrink-0" />
                <span className="text-xs">082131472864</span>
              </li>
              <li className="pt-3 border-t border-forest/5">
                <span className="block text-[10px] uppercase tracking-wider font-bold text-forest/40 mb-2">Area Layanan Terpopuler</span>
                <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs">
                  <Link href="/area-layanan/surabaya" className="text-charcoal/70 hover:text-forest transition-colors font-semibold">Taman Surabaya</Link>
                  <span className="text-forest/20">•</span>
                  <Link href="/area-layanan/sidoarjo" className="text-charcoal/70 hover:text-forest transition-colors font-semibold">Taman Sidoarjo</Link>
                  <span className="text-forest/20">•</span>
                  <Link href="/area-layanan/gresik" className="text-charcoal/70 hover:text-forest transition-colors font-semibold">Taman Gresik</Link>
                  <span className="text-forest/20">•</span>
                  <Link href="/area-layanan/malang" className="text-charcoal/70 hover:text-forest transition-colors font-semibold">Taman Malang</Link>
                  <span className="text-forest/20">•</span>
                  <Link href="/area-layanan/pasuruan" className="text-charcoal/70 hover:text-forest transition-colors font-semibold">Taman Pasuruan</Link>
                  <span className="text-forest/20">•</span>
                  <Link href="/area-layanan/mojokerto" className="text-charcoal/70 hover:text-forest transition-colors font-semibold">Taman Mojokerto</Link>
                  <span className="text-forest/20">•</span>
                  <Link href="/area-layanan/denpasar" className="text-charcoal/70 hover:text-forest transition-colors font-semibold">Taman Denpasar</Link>
                  <span className="text-forest/20">•</span>
                  <Link href="/area-layanan/badung" className="text-charcoal/70 hover:text-forest transition-colors font-semibold">Taman Badung</Link>
                  <span className="text-forest/20">•</span>
                  <Link href="/area-layanan/gianyar" className="text-charcoal/70 hover:text-forest transition-colors font-semibold">Taman Gianyar</Link>
                  <span className="text-forest/20">•</span>
                  <Link href="/area-layanan/ubud" className="text-charcoal/70 hover:text-forest transition-colors font-semibold">Taman Ubud</Link>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-forest/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-forest/40 uppercase tracking-[0.2em]">
          <p suppressHydrationWarning>&copy; {new Date().getFullYear()} TukangTamannn.com & CV. SARIJAYA MAKMUR.</p>
          <div className="flex gap-4">
            <Link href="/syarat-ketentuan" className="hover:text-forest transition-colors">Syarat & Ketentuan</Link>
            <Link href="/kebijakan-privasi" className="hover:text-forest transition-colors">Kebijakan Privasi</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
