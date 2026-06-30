"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import Link from "next/link";
import { 
  Menu, 
  X, 
  ArrowRight, 
  ChevronDown, 
  Sprout, 
  Compass, 
  BookOpen, 
  Droplets, 
  Hammer, 
  Home, 
  Layers, 
  TreePine, 
  Layout, 
  Trees, 
  Eye,
  MapPin
} from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<"layanan" | "gaya" | "katalog" | "area" | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<"layanan" | "gaya" | "katalog" | "area" | null>(null);

  const brandName = "TukangTamannn.com";

  // Mega Menu Data structure
  const menuData = {
    layanan: {
      title: "Layanan Pembuatan & Perawatan",
      description: "Dari perencanaan konsep estetik hingga pemeliharaan jangka panjang oleh tenaga ahli.",
      icon: Sprout,
      categories: [
        {
          title: "Desain & Konstruksi",
          icon: Hammer,
          items: [
            { name: "Pembuatan Taman Premium", href: "/layanan/jasa-pembuatan-taman", desc: "Perancangan tata letak & vegetasi artistik sesuai kontur tanah." },
            { name: "Kolam Ikan & Water Feature", href: "/layanan/pembuatan-kolam-ikan-water-feature", desc: "Kolam koi natural, air terjun relief tebing, & filtrasi otomatis." },
            { name: "Pembuatan Gazebo & Saung", href: "/layanan/pembuatan-gazebo-saung", desc: "Konstruksi gazebo kayu jati, saung bambu, & atap sirap premium." }
          ]
        },
        {
          title: "Hardscape & Pemeliharaan",
          icon: Layout,
          items: [
            { name: "Batu Alam & Lantai Carport", href: "/layanan/pemasangan-batu-alam-lantai-carport", desc: "Lantai carport ampyangan/batu sikat & fasad batu alam premium." },
            { name: "Perawatan & Renovasi Taman", href: "/layanan/perawatan-renovasi-taman", desc: "Pemangkasan berkala, pemupukan organik, & penyelamatan taman mati." }
          ]
        }
      ]
    },
    gaya: {
      title: "Inspirasi Gaya & Desain Taman",
      description: "Temukan konsep taman terbaik yang selaras dengan karakter arsitektur hunian Anda.",
      icon: Compass,
      categories: [
        {
          title: "Konsep Modern & Minimalis",
          icon: Home,
          items: [
            { name: "Taman Minimalis Modern", href: "/gaya/taman-minimalis-modern", desc: "Komposisi geometris bersih, kontras batu koral, & minim perawatan." },
            { name: "Vertical Garden", href: "/gaya/vertical-garden", desc: "Modul dinding hijau dengan sistem penyiraman otomatis drip." }
          ]
        },
        {
          title: "Konsep Spesifik & Eksotis",
          icon: Trees,
          items: [
            { name: "Taman Kering / Zen Garden", href: "/gaya/taman-kering-zen", desc: "Filosofi meditasi Jepang dengan harmoni pasir, batu, & pohon pule." },
            { name: "Taman Tropis Rimbun", href: "/gaya/taman-tropis", desc: "Eksotisme daun lebar, rimbun teduh, & mikroklimat asri alami." },
            { name: "Taman Atap (Roof Garden)", href: "/gaya/roof-garden", desc: "Dapatkan dak beton oase urban dengan sistem drainase anti bocor." }
          ]
        }
      ]
    },
    katalog: {
      title: "Katalog Material & Vegetasi",
      description: "Pilihan jenis tanaman, rumput, dan material hardscape premium penunjang estetika.",
      icon: BookOpen,
      categories: [
        {
          title: "Flora & Vegetasi",
          icon: TreePine,
          items: [
            { name: "Katalog Jenis Rumput", href: "/katalog/jenis-rumput", desc: "Rumput Gajah Mini, Jepang, Peking, & solusi rumput sintetis premium." },
            { name: "Pohon Peneduh & Ikonik", href: "/katalog/pohon-peneduh-ikonik", desc: "Focal point eksklusif pohon pule, tabebuya sakura, & kamboja fosil." },
            { name: "Tanaman Hias & Bunga", href: "/katalog/tanaman-hias-bunga", desc: "Penyusunan softscape semak berlapis bromelia, puring, & soka warna." }
          ]
        },
        {
          title: "Komponen Struktural",
          icon: Layers,
          items: [
            { name: "Komponen Hardscape", href: "/katalog/komponen-hardscape", desc: "Lampu taman uplight, batu koral tabur hias, & pot terrazzo artistik." }
          ]
        }
      ]
    },
    area: {
      title: "Wilayah Operasional Resmi",
      description: "Layanan survei gratis, konsultasi, dan pembuatan taman premium di Jawa Timur & Bali.",
      icon: MapPin,
      categories: [
        {
          title: "Jawa Timur",
          icon: Compass,
          items: [
            { name: "Surabaya", href: "/area-layanan/surabaya", desc: "Tukang taman premium Surabaya & sekitarnya." },
            { name: "Sidoarjo", href: "/area-layanan/sidoarjo", desc: "Kantor pusat, respon cepat di Sidoarjo." },
            { name: "Gresik", href: "/area-layanan/gresik", desc: "Taman minimalis penyejuk udara di Gresik." },
            { name: "Malang", href: "/area-layanan/malang", desc: "Konsep taman villa tropis di Malang & Batu." },
            { name: "Pasuruan", href: "/area-layanan/pasuruan", desc: "Taman tropis & gazebo di Prigen & Pasuruan." },
            { name: "Mojokerto", href: "/area-layanan/mojokerto", desc: "Taman etnik Majapahit style di Mojokerto." }
          ]
        },
        {
          title: "Provinsi Bali",
          icon: Trees,
          items: [
            { name: "Denpasar", href: "/area-layanan/denpasar", desc: "Taman tropis resort Bali di Denpasar." },
            { name: "Badung & Canggu", href: "/area-layanan/badung", desc: "Lansekap villa Canggu, Seminyak, Uluwatu." },
            { name: "Gianyar", href: "/area-layanan/gianyar", desc: "Taman berseni tinggi & patung paras di Gianyar." },
            { name: "Ubud", href: "/area-layanan/ubud", desc: "Taman rainforest & yoga deck di Ubud." }
          ]
        }
      ]
    }
  };

  const toggleMobileAccordion = (menu: "layanan" | "gaya" | "katalog" | "area") => {
    if (mobileAccordion === menu) {
      setMobileAccordion(null);
    } else {
      setMobileAccordion(menu);
    }
  };

  return (
    <div 
      className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl z-50"
      onMouseLeave={() => setActiveMenu(null)}
    >
      <header className="w-full bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl flex items-center justify-between px-6 py-4 md:px-8 shadow-md transition-all duration-300">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-forest rounded-xl flex items-center justify-center transition-all duration-300 group-hover:rotate-12 shadow-md shadow-forest/15">
            <Sprout size={18} className="text-sage" />
          </div>
          <span className="font-extrabold text-lg tracking-tight text-forest">
            Tukang<span className="text-sage">Tamannn.com</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          
          {/* Layanan Mega Link */}
          <button
            onMouseEnter={() => setActiveMenu("layanan")}
            className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1 transition-colors ${
              activeMenu === "layanan" ? "text-sage" : "text-forest/80 hover:text-forest"
            }`}
          >
            Layanan
            <ChevronDown size={14} className={`transition-transform duration-200 ${activeMenu === "layanan" ? "rotate-180" : ""}`} />
          </button>

          {/* Konsep Mega Link */}
          <button
            onMouseEnter={() => setActiveMenu("gaya")}
            className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1 transition-colors ${
              activeMenu === "gaya" ? "text-sage" : "text-forest/80 hover:text-forest"
            }`}
          >
            Konsep
            <ChevronDown size={14} className={`transition-transform duration-200 ${activeMenu === "gaya" ? "rotate-180" : ""}`} />
          </button>

          {/* Katalog Mega Link */}
          <button
            onMouseEnter={() => setActiveMenu("katalog")}
            className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1 transition-colors ${
              activeMenu === "katalog" ? "text-sage" : "text-forest/80 hover:text-forest"
            }`}
          >
            Katalog
            <ChevronDown size={14} className={`transition-transform duration-200 ${activeMenu === "katalog" ? "rotate-180" : ""}`} />
          </button>

          <Link href="/portofolio" className="text-xs font-bold text-forest/80 hover:text-forest transition-colors uppercase tracking-wider">
            Portofolio
          </Link>
          
          {/* Area Mega Link */}
          <button
            onMouseEnter={() => setActiveMenu("area")}
            className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1 transition-colors ${
              activeMenu === "area" ? "text-sage" : "text-forest/80 hover:text-forest"
            }`}
          >
            Area
            <ChevronDown size={14} className={`transition-transform duration-200 ${activeMenu === "area" ? "rotate-180" : ""}`} />
          </button>

          <Link href="/blog" className="text-xs font-bold text-forest/80 hover:text-forest transition-colors uppercase tracking-wider">
            Edukasi
          </Link>
          <Link href="/tentang-kami" className="text-xs font-bold text-forest/80 hover:text-forest transition-colors uppercase tracking-wider">
            Tentang
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/#kontak"
            className="bg-forest text-white px-5 py-2.5 rounded-xl text-xs font-extrabold shadow-lg shadow-forest/15 hover:bg-forest/90 hover:shadow-forest/20 hover:-translate-y-0.5 transition-all inline-flex items-center gap-1.5 group"
          >
            Konsultasi Gratis
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-forest w-8 h-8 flex items-center justify-center rounded-lg bg-forest/5 hover:bg-forest/10 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* Desktop Mega Menu Dropdown */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="hidden md:block absolute top-full left-0 w-full mt-2 bg-white/95 backdrop-blur-xl border border-forest/10 rounded-2xl p-8 shadow-2xl z-50 overflow-hidden"
            onMouseEnter={() => setActiveMenu(activeMenu)}
          >
            {/* Background Soft Accent */}
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-sage/5 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="grid grid-cols-12 gap-8 relative z-10">
              {/* Left Column: Info Card */}
              <div className="col-span-4 border-r border-forest/5 pr-6 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-forest/5 text-forest flex items-center justify-center mb-4">
                    {(() => {
                      const Icon = menuData[activeMenu].icon;
                      return <Icon size={20} />;
                    })()}
                  </div>
                  <h3 className="font-extrabold text-lg text-forest mb-2">
                    {menuData[activeMenu].title}
                  </h3>
                  <p className="text-xs text-charcoal/70 font-medium leading-relaxed">
                    {menuData[activeMenu].description}
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t border-forest/5">
                  <Link 
                    href="/#kontak"
                    onClick={() => setActiveMenu(null)}
                    className="text-xs font-bold text-sage flex items-center gap-1.5 hover:text-forest transition-colors group"
                  >
                    Minta Penawaran Harga
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right Columns: Categorized items */}
              <div className="col-span-8 grid grid-cols-2 gap-6">
                {menuData[activeMenu].categories.map((category, idx) => (
                  <div key={idx} className="space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-forest/5">
                      <category.icon size={15} className="text-sage" />
                      <h4 className="text-xs font-extrabold text-forest uppercase tracking-wider">
                        {category.title}
                      </h4>
                    </div>
                    <ul className="space-y-3">
                      {category.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <Link 
                            href={item.href}
                            onClick={() => setActiveMenu(null)}
                            className="block p-2 rounded-xl hover:bg-forest/[0.03] transition-colors group"
                          >
                            <span className="block text-xs font-bold text-forest group-hover:text-sage transition-colors mb-0.5 flex items-center gap-1">
                              {item.name}
                              <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                            </span>
                            <span className="block text-[10px] text-charcoal/50 leading-relaxed font-medium">
                              {item.desc}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-4 bg-white/95 backdrop-blur-xl border border-white/30 rounded-2xl p-5 flex flex-col gap-3 shadow-xl max-h-[85vh] overflow-y-auto"
          >
            {/* Layanan Accordion */}
            <div className="border-b border-forest/5 pb-2">
              <button
                onClick={() => toggleMobileAccordion("layanan")}
                className="w-full text-left text-xs font-extrabold text-forest uppercase tracking-wider py-2 px-2 flex justify-between items-center hover:bg-forest/5 rounded-lg"
              >
                <span>Layanan</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${mobileAccordion === "layanan" ? "rotate-180" : ""}`} />
              </button>
              
              {mobileAccordion === "layanan" && (
                <div className="pl-4 mt-2 space-y-3">
                  {menuData.layanan.categories.map((cat, catIdx) => (
                    <div key={catIdx} className="space-y-1">
                      <span className="block text-[9px] font-bold uppercase tracking-widest text-forest/40 px-2 mt-2">
                        {cat.title}
                      </span>
                      {cat.items.map((item, itemIdx) => (
                        <Link
                          key={itemIdx}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-xs font-medium text-charcoal hover:text-sage py-1.5 px-2 rounded hover:bg-forest/[0.02]"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Konsep Accordion */}
            <div className="border-b border-forest/5 pb-2">
              <button
                onClick={() => toggleMobileAccordion("gaya")}
                className="w-full text-left text-xs font-extrabold text-forest uppercase tracking-wider py-2 px-2 flex justify-between items-center hover:bg-forest/5 rounded-lg"
              >
                <span>Konsep</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${mobileAccordion === "gaya" ? "rotate-180" : ""}`} />
              </button>
              
              {mobileAccordion === "gaya" && (
                <div className="pl-4 mt-2 space-y-3">
                  {menuData.gaya.categories.map((cat, catIdx) => (
                    <div key={catIdx} className="space-y-1">
                      <span className="block text-[9px] font-bold uppercase tracking-widest text-forest/40 px-2 mt-2">
                        {cat.title}
                      </span>
                      {cat.items.map((item, itemIdx) => (
                        <Link
                          key={itemIdx}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-xs font-medium text-charcoal hover:text-sage py-1.5 px-2 rounded hover:bg-forest/[0.02]"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Katalog Accordion */}
            <div className="border-b border-forest/5 pb-2">
              <button
                onClick={() => toggleMobileAccordion("katalog")}
                className="w-full text-left text-xs font-extrabold text-forest uppercase tracking-wider py-2 px-2 flex justify-between items-center hover:bg-forest/5 rounded-lg"
              >
                <span>Katalog</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${mobileAccordion === "katalog" ? "rotate-180" : ""}`} />
              </button>
              
              {mobileAccordion === "katalog" && (
                <div className="pl-4 mt-2 space-y-3">
                  {menuData.katalog.categories.map((cat, catIdx) => (
                    <div key={catIdx} className="space-y-1">
                      <span className="block text-[9px] font-bold uppercase tracking-widest text-forest/40 px-2 mt-2">
                        {cat.title}
                      </span>
                      {cat.items.map((item, itemIdx) => (
                        <Link
                          key={itemIdx}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-xs font-medium text-charcoal hover:text-sage py-1.5 px-2 rounded hover:bg-forest/[0.02]"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Area Accordion */}
            <div className="border-b border-forest/5 pb-2">
              <button
                onClick={() => toggleMobileAccordion("area")}
                className="w-full text-left text-xs font-extrabold text-forest uppercase tracking-wider py-2 px-2 flex justify-between items-center hover:bg-forest/5 rounded-lg"
              >
                <span>Area</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${mobileAccordion === "area" ? "rotate-180" : ""}`} />
              </button>
              
              {mobileAccordion === "area" && (
                <div className="pl-4 mt-2 space-y-3">
                  {menuData.area.categories.map((cat, catIdx) => (
                    <div key={catIdx} className="space-y-1">
                      <span className="block text-[9px] font-bold uppercase tracking-widest text-forest/40 px-2 mt-2">
                        {cat.title}
                      </span>
                      {cat.items.map((item, itemIdx) => (
                        <Link
                          key={itemIdx}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-xs font-medium text-charcoal hover:text-sage py-1.5 px-2 rounded hover:bg-forest/[0.02]"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                  <div className="pt-2 border-t border-forest/5">
                    <Link
                      href="/area-layanan"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xs font-bold text-sage py-1.5 px-2 rounded hover:bg-forest/[0.02]"
                    >
                      Lihat Semua Wilayah →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Regular Links */}
            <Link
              href="/portofolio"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-extrabold text-forest uppercase tracking-wider py-1.5 px-2 hover:bg-forest/5 rounded-lg border-b border-forest/5 pb-2"
            >
              Portofolio
            </Link>
            
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-extrabold text-forest uppercase tracking-wider py-1.5 px-2 hover:bg-forest/5 rounded-lg border-b border-forest/5 pb-2"
            >
              Blog & Edukasi
            </Link>

            <Link
              href="/tentang-kami"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-extrabold text-forest uppercase tracking-wider py-1.5 px-2 hover:bg-forest/5 rounded-lg pb-2"
            >
              Tentang Kami
            </Link>

            {/* CTA */}
            <Link
              href="/#kontak"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-forest text-white px-6 py-3 rounded-xl text-center text-xs font-extrabold mt-2 shadow-lg shadow-forest/15 flex justify-center items-center gap-1.5 group"
            >
              Konsultasi Gratis
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
