"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Calculator, 
  Printer, 
  FileText, 
  Check, 
  Leaf, 
  Waves, 
  Layers, 
  Home,
  User,
  Phone,
  Calendar,
  Sparkles,
  Info
} from "lucide-react";


interface QuotationItem {
  name: string;
  qty: number;
  unit: string;
  rate: number;
  total: number;
}

export default function QuotationEstimator() {
  // Input states
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [selectedService, setSelectedService] = useState<"taman" | "kolam" | "gazebo" | "carport">("taman");
  
  // Custom modifiers
  const [size, setSize] = useState<number>(20); // in m² or unit size
  const [grassType, setGrassType] = useState<"gajah" | "jepang" | "swiss">("gajah");
  const [hasPule, setHasPule] = useState<boolean>(false);
  const [hasIrrigation, setHasIrrigation] = useState<boolean>(false);
  
  // For Kolam
  const [kolamDepth, setKolamDepth] = useState<"standard" | "deep">("standard");
  const [hasFilterSystem, setHasFilterSystem] = useState<boolean>(true);
  const [waterfallCount, setWaterfallCount] = useState<number>(1);
  
  // For Gazebo
  const [gazeboMaterial, setGazeboMaterial] = useState<"kelapa" | "ulin">("kelapa");
  
  // For Carport
  const [stoneType, setStoneType] = useState<"andesit" | "batusikat" | "paras">("batusikat");

  // Client-only state to satisfy purity constraints
  const [quoteId, setQuoteId] = useState<number>(7832);
  const [quoteDate, setQuoteDate] = useState<string>("30 Juni 2026");

  useEffect(() => {
    const timer = setTimeout(() => {
      setQuoteId(Math.floor(Math.random() * 9000) + 1000);
      setQuoteDate(new Date().toLocaleDateString("id-ID", { year: 'numeric', month: 'long', day: 'numeric' }));
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  // Calculate quotation

  const getCalculatedItems = (): QuotationItem[] => {
    const items: QuotationItem[] = [];

    if (selectedService === "taman") {
      let baseRate = 350000;
      let grassName = "Rumput Gajah Mini Standard (Terpasang)";
      if (grassType === "jepang") {
        baseRate = 420000;
        grassName = "Rumput Jepang Halus Premium (Terpasang)";
      } else if (grassType === "swiss") {
        baseRate = 500000;
        grassName = "Rumput Swiss Eksklusif (Terpasang)";
      }
      
      items.push({
        name: `Pekerjaan Landscaping: ${grassName} + Tanaman Semak Hias Shrub`,
        qty: size,
        unit: "m²",
        rate: baseRate,
        total: size * baseRate
      });

      if (hasPule) {
        items.push({
          name: "Pengadaan & Penanaman Pohon Pule Bonsai Mewah Bonggol Eksklusif (Tinggi >2.5m)",
          qty: 1,
          unit: "Pohon",
          rate: 12500000,
          total: 12500000
        });
      }

      if (hasIrrigation) {
        items.push({
          name: "Sistem Pengairan Otomatis (Drip Irrigation / Pop-up Sprinkler + Timer)",
          qty: 1,
          unit: "Lot",
          rate: 3500000,
          total: 3500000
        });
      }
    }

    else if (selectedService === "kolam") {
      let baseRate = 1800000; // per m²
      if (kolamDepth === "deep") baseRate = 2400000;
      
      items.push({
        name: `Konstruksi Kolam Koi + Pemasangan Batu Alam Dinding Kolam (Kedalaman ${kolamDepth === 'standard' ? '60-80cm' : '>100cm'})`,
        qty: size,
        unit: "m²",
        rate: baseRate,
        total: size * baseRate
      });

      if (hasFilterSystem) {
        items.push({
          name: "Instalasi Kamar Filter (Vortex + Bio-ring + Lampu UV Sterilizer Anti-Alga)",
          qty: 1,
          unit: "Unit",
          rate: 4500000,
          total: 4500000
        });
      }

      if (waterfallCount > 0) {
        items.push({
          name: "Seni Relief Tebing / Pancuran Air Terjun Cascading Batu Kali",
          qty: waterfallCount,
          unit: "Titik",
          rate: 1800000,
          total: waterfallCount * 1800000
        });
      }
    }

    else if (selectedService === "gazebo") {
      // Gazebo is size in m², rate is per m²
      let baseRate = 3200000; // Kelapa
      let materialName = "Kayu Kelapa Sulawesi Grade A (Atap Sirap Kayu / Genteng)";
      if (gazeboMaterial === "ulin") {
        baseRate = 6500000; // Ulin Kalimantan
        materialName = "Kayu Ulin Kalimantan Super Kuat (Atap Sirap Kayu Ulin)";
      }

      items.push({
        name: `Konstruksi Gazebo / Saung Kustom: Bahan ${materialName}`,
        qty: size,
        unit: "m²",
        rate: baseRate,
        total: size * baseRate
      });
      
      items.push({
        name: "Pekerjaan Finishing Wood-stain Ultran Lasur (Tahan Rayap & UV Matahari)",
        qty: 1,
        unit: "Lot",
        rate: 850000,
        total: 850000
      });
    }

    else if (selectedService === "carport") {
      let baseRate = 450000; // Sikat
      let stoneName = "Lantai Carport Cetak Batu Sikat Motif Geometris Komputer";
      if (stoneType === "andesit") {
        baseRate = 650000;
        stoneName = "Lantai Carport Pasang Batu Alam Andesit Flamed (Anti Licin)";
      } else if (stoneType === "paras") {
        baseRate = 550000;
        stoneName = "Pemasangan Batu Paras Kerobokan / Jogja";
      }

      items.push({
        name: `Pemasangan Lantai: ${stoneName}`,
        qty: size,
        unit: "m²",
        rate: baseRate,
        total: size * baseRate
      });

      items.push({
        name: "Coating Pelindung Batu Alam Gloss / Matte (Anti Lumut & Jamur)",
        qty: size,
        unit: "m²",
        rate: 45000,
        total: size * 45000
      });
    }

    return items;
  };

  const items = getCalculatedItems();
  const subtotal = items.reduce((sum, item) => sum + item.total, 0);
  const discount = subtotal > 15000000 ? subtotal * 0.05 : 0; // 5% discount for premium high budget projects
  const totalCost = subtotal - discount;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full">
      {/* Screen View Container */}
      <div className="print:hidden bg-white rounded-[40px] border border-forest/10 p-6 md:p-10 shadow-xl overflow-hidden relative">
        <div className="absolute top-0 right-0 w-48 h-48 bg-sage/5 rounded-bl-full pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-forest/5 pb-6">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest/5 border border-forest/10">
              <Calculator className="text-sage w-4 h-4 animate-pulse" />
              <span className="text-[10px] font-black text-forest/80 uppercase tracking-widest">Kalkulator RAB Mandiri</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-forest tracking-tight">
              Simulasi & <span className="font-serif italic font-normal text-sage">Estimasi Biaya</span>
            </h3>
          </div>
          
          <button
            onClick={handlePrint}
            className="flex items-center justify-center gap-2 bg-forest text-white hover:bg-forest/90 px-6 py-3 rounded-xl text-xs font-extrabold transition-all duration-300 shadow-lg shadow-forest/15 hover:shadow-forest/25 hover:-translate-y-0.5 cursor-pointer self-start md:self-auto"
          >
            <Printer size={16} /> Cetak Quotation Resmi (PDF)
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Controls Form Side */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Contact details for personalization */}
            <div className="bg-cream/40 p-5 rounded-2xl border border-forest/5 space-y-4">
              <span className="text-xs font-bold text-forest/60 uppercase tracking-wider block">1. Personalisasi Penawaran (Opsional)</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-forest/80 block">Nama Klien / Instansi</label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 text-forest/30 w-4 h-4" />
                    <input 
                      type="text" 
                      placeholder="Contoh: Bpk. Hermawan" 
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 bg-white border border-forest/10 rounded-xl text-xs font-semibold text-forest focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-forest/80 block">Nomor WhatsApp</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-2.5 text-forest/30 w-4 h-4" />
                    <input 
                      type="text" 
                      placeholder="Contoh: 081234567xxx" 
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 bg-white border border-forest/10 rounded-xl text-xs font-semibold text-forest focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Service Selection Tabs */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-forest/60 uppercase tracking-wider block">2. Pilih Kategori Layanan</span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: "taman", label: "Taman Premium", icon: Leaf },
                  { id: "kolam", label: "Kolam Ikan Koi", icon: Waves },
                  { id: "gazebo", label: "Gazebo / Saung", icon: Home },
                  { id: "carport", label: "Batu Sikat / Carport", icon: Layers }
                ].map((item) => {
                  const Icon = item.icon;
                  const isActive = selectedService === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setSelectedService(item.id as any);
                        setSize(item.id === "gazebo" ? 4 : 20); // standard starting sizes
                      }}
                      className={`flex flex-col items-center gap-2 p-3.5 rounded-xl border transition-all text-center cursor-pointer ${
                        isActive 
                          ? "bg-forest text-white border-forest shadow-md shadow-forest/15" 
                          : "bg-white border-forest/10 text-forest/70 hover:border-sage/40 hover:bg-forest/[0.01]"
                      }`}
                    >
                      <Icon size={18} className={isActive ? "text-sage" : "text-forest/60"} />
                      <span className="text-[10px] font-extrabold tracking-tight">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Custom Modifiers Form based on Selected Service */}
            <div className="bg-cream/40 p-5 rounded-2xl border border-forest/5 space-y-5">
              <span className="text-xs font-bold text-forest/60 uppercase tracking-wider block">3. Atur Dimensi & Material</span>

              {/* Common Size Slider */}
              <div className="space-y-2.5">
                <div className="flex justify-between items-center text-xs font-bold text-forest">
                  <span>
                    {selectedService === "taman" && "Estimasi Luas Area Taman"}
                    {selectedService === "kolam" && "Luas Permukaan Kolam (Panjang x Lebar)"}
                    {selectedService === "gazebo" && "Ukuran Gazebo (Contoh: 2x2 = 4m²)"}
                    {selectedService === "carport" && "Luas Area Lantai Carport / Dinding"}
                  </span>
                  <span className="text-sage bg-white border border-forest/5 px-2.5 py-1 rounded-lg">
                    {size} m²
                  </span>
                </div>
                <input 
                  type="range" 
                  min={selectedService === "gazebo" ? 4 : 5} 
                  max={selectedService === "gazebo" ? 16 : 150} 
                  value={size}
                  onChange={(e) => setSize(Number(e.target.value))}
                  className="w-full accent-forest cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-bold text-forest/30">
                  <span>Min: {selectedService === "gazebo" ? "4" : "5"} m²</span>
                  <span>Max: {selectedService === "gazebo" ? "16" : "150"} m²</span>
                </div>
              </div>

              {/* Conditionally rendered sub-questions */}
              {selectedService === "taman" && (
                <div className="space-y-4 pt-2 border-t border-forest/5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-forest">Pilihan Varietas Rumput Utama</label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: "gajah", label: "Gajah Mini", desc: "Toleran Teduh" },
                        { id: "jepang", label: "Jepang Halus", desc: "Matahari Penuh" },
                        { id: "swiss", label: "Swiss Mewah", desc: "Tekstur Lembut" }
                      ].map((grass) => (
                        <button
                          key={grass.id}
                          onClick={() => setGrassType(grass.id as any)}
                          className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                            grassType === grass.id 
                              ? "bg-white border-sage shadow-sm ring-1 ring-sage" 
                              : "bg-white border-forest/5 text-forest/70 hover:border-forest/20"
                          }`}
                        >
                          <div className="text-[10px] font-black text-forest">{grass.label}</div>
                          <div className="text-[9px] font-medium text-charcoal/50 mt-0.5">{grass.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <button
                      onClick={() => setHasPule(!hasPule)}
                      className={`flex items-center justify-between p-3 rounded-xl border text-left transition-all cursor-pointer bg-white ${
                        hasPule ? "border-sage bg-sage/5" : "border-forest/5 hover:border-forest/10"
                      }`}
                    >
                      <div>
                        <div className="text-[11px] font-extrabold text-forest">Pohon Pule Bonsai Mewah</div>
                        <div className="text-[9px] font-medium text-charcoal/50">Satu pohon ikonik eksklusif</div>
                      </div>
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                        hasPule ? "bg-sage border-sage text-white" : "border-forest/10"
                      }`}>
                        {hasPule && <Check size={12} />}
                      </div>
                    </button>

                    <button
                      onClick={() => setHasIrrigation(!hasIrrigation)}
                      className={`flex items-center justify-between p-3 rounded-xl border text-left transition-all cursor-pointer bg-white ${
                        hasIrrigation ? "border-sage bg-sage/5" : "border-forest/5 hover:border-forest/10"
                      }`}
                    >
                      <div>
                        <div className="text-[11px] font-extrabold text-forest">Sistem Penyiraman Otomatis</div>
                        <div className="text-[9px] font-medium text-charcoal/50">Drip irrigation + Timer digital</div>
                      </div>
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                        hasIrrigation ? "bg-sage border-sage text-white" : "border-forest/10"
                      }`}>
                        {hasIrrigation && <Check size={12} />}
                      </div>
                    </button>
                  </div>
                </div>
              )}

              {selectedService === "kolam" && (
                <div className="space-y-4 pt-2 border-t border-forest/5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-forest">Kedalaman Kolam Koi</label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: "standard", label: "Kedalaman Standar (60-80 cm)", desc: "Cocok untuk koi ukuran sedang" },
                        { id: "deep", label: "Kedalaman Profesional (>100 cm)", desc: "Mendukung pertumbuhan jumbo" }
                      ].map((dep) => (
                        <button
                          key={dep.id}
                          onClick={() => setKolamDepth(dep.id as any)}
                          className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                            kolamDepth === dep.id 
                              ? "bg-white border-sage shadow-sm ring-1 ring-sage" 
                              : "bg-white border-forest/5 text-forest/70 hover:border-forest/20"
                          }`}
                        >
                          <div className="text-[10px] font-black text-forest">{dep.label}</div>
                          <div className="text-[9px] font-medium text-charcoal/50 mt-0.5">{dep.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <button
                      onClick={() => setHasFilterSystem(!hasFilterSystem)}
                      className={`flex items-center justify-between p-3 rounded-xl border text-left transition-all cursor-pointer bg-white ${
                        hasFilterSystem ? "border-sage bg-sage/5" : "border-forest/5 hover:border-forest/10"
                      }`}
                    >
                      <div>
                        <div className="text-[11px] font-extrabold text-forest">Kamar Filter Berlapis</div>
                        <div className="text-[9px] font-medium text-charcoal/50">Mekanis-biologis + UV Lamp</div>
                      </div>
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                        hasFilterSystem ? "bg-sage border-sage text-white" : "border-forest/10"
                      }`}>
                        {hasFilterSystem && <Check size={12} />}
                      </div>
                    </button>

                    <div className="flex items-center justify-between p-3 rounded-xl border bg-white border-forest/5">
                      <div>
                        <div className="text-[11px] font-extrabold text-forest">Pancuran Air Terjun Tebing</div>
                        <div className="text-[9px] font-medium text-charcoal/50">Titik pancuran air alami</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => setWaterfallCount(Math.max(0, waterfallCount - 1))}
                          className="w-6 h-6 rounded-lg bg-forest/5 text-forest flex items-center justify-center font-bold text-xs"
                        >
                          -
                        </button>
                        <span className="text-xs font-black text-forest w-4 text-center">{waterfallCount}</span>
                        <button 
                          onClick={() => setWaterfallCount(Math.min(4, waterfallCount + 1))}
                          className="w-6 h-6 rounded-lg bg-forest/5 text-forest flex items-center justify-center font-bold text-xs"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedService === "gazebo" && (
                <div className="space-y-4 pt-2 border-t border-forest/5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-forest">Spesifikasi Material Kayu</label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: "kelapa", label: "Kayu Kelapa Sulawesi Grade A", desc: "Serat lurus, artistik, ekonomis" },
                        { id: "ulin", label: "Kayu Ulin Kalimantan Super", desc: "Anti rayap, tahan air, seumur hidup" }
                      ].map((mat) => (
                        <button
                          key={mat.id}
                          onClick={() => setGazeboMaterial(mat.id as any)}
                          className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                            gazeboMaterial === mat.id 
                              ? "bg-white border-sage shadow-sm ring-1 ring-sage" 
                              : "bg-white border-forest/5 text-forest/70 hover:border-forest/20"
                          }`}
                        >
                          <div className="text-[10px] font-black text-forest">{mat.label}</div>
                          <div className="text-[9px] font-medium text-charcoal/50 mt-0.5">{mat.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {selectedService === "carport" && (
                <div className="space-y-4 pt-2 border-t border-forest/5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-forest">Jenis Batu Alam & Finishing</label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: "batusikat", label: "Batu Sikat", desc: "Motif Carport" },
                        { id: "andesit", label: "Batu Andesit", desc: "Fasad / Lantai" },
                        { id: "paras", label: "Batu Paras", desc: "Dinding Ukir" }
                      ].map((stone) => (
                        <button
                          key={stone.id}
                          onClick={() => setStoneType(stone.id as any)}
                          className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                            stoneType === stone.id 
                              ? "bg-white border-sage shadow-sm ring-1 ring-sage" 
                              : "bg-white border-forest/5 text-forest/70 hover:border-forest/20"
                          }`}
                        >
                          <div className="text-[10px] font-black text-forest">{stone.label}</div>
                          <div className="text-[9px] font-medium text-charcoal/50 mt-0.5">{stone.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Live Preview / Quotation Card Side */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="bg-forest text-white rounded-3xl p-6 shadow-md relative overflow-hidden flex-grow flex flex-col justify-between">
              {/* Pattern inside background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] rounded-bl-full pointer-events-none" />
              
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="font-extrabold text-sm tracking-wider uppercase text-sage">TukangTamannn.com</h4>
                    <span className="text-[9px] text-white/50 font-bold block mt-0.5">CV. SARIJAYA MAKMUR Sidoarjo</span>
                  </div>
                  <FileText size={18} className="text-sage" />
                </div>

                <div className="space-y-4 mb-8">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-[9px] uppercase tracking-wider text-white/40 font-bold">Rincian Estimasi Item:</span>
                    <div className="space-y-3 mt-3">
                      {items.map((item, index) => (
                        <div key={index} className="flex justify-between items-start gap-3">
                          <div className="text-[11px] leading-relaxed font-bold max-w-[70%]">
                            {item.qty} {item.unit} x {item.name}
                          </div>
                          <span className="text-[11px] font-mono text-sage font-black flex-shrink-0">
                            Rp {item.total.toLocaleString("id-ID")}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {discount > 0 && (
                    <div className="flex justify-between items-center text-xs border-b border-white/10 pb-4 text-sage">
                      <span className="font-bold flex items-center gap-1">
                        <Sparkles size={12} /> Diskon Proyek Besar (5%)
                      </span>
                      <span className="font-mono font-black">-Rp {discount.toLocaleString("id-ID")}</span>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10 mb-4">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-white/50 font-bold block">Total Estimasi Biaya</span>
                      <span className="text-2xl md:text-3xl font-black font-sans text-white tracking-tight">
                        Rp {totalCost.toLocaleString("id-ID")}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[10px] text-white/60 font-semibold leading-relaxed bg-white/5 p-3 rounded-xl border border-white/5">
                  <Info size={13} className="text-sage flex-shrink-0" />
                  <p>*Kalkulasi bersifat estimasi acuan awal berdasarkan standar pengerjaan CV. SARIJAYA MAKMUR.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Hidden Print View (Kop Surat & Penawaran Resmi CV. SARIJAYA MAKMUR) */}
      <div className="hidden print:block bg-white text-black p-8 max-w-[210mm] min-h-[297mm] mx-auto text-xs font-sans">
        
        {/* Kop Surat */}
        <div className="flex items-center justify-between border-b-2 border-black pb-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center font-black text-2xl">
              S
            </div>
            <div>
              <h1 className="text-lg font-black tracking-tight uppercase">CV. SARIJAYA MAKMUR</h1>
              <p className="text-[9px] text-gray-600 font-bold">Desain Lansekap • Pembuatan Taman Premium • Kolam Koi • Gazebo</p>
              <p className="text-[8px] text-gray-500 font-medium">Jl Green Mansion Safir blok 16, Sidoarjo, Indonesia, 61253 | Tlp/Wa: <a href="https://wa.me/6282131472864" target="_blank" rel="noreferrer" className="underline hover:text-black">082131472864</a></p>
              <p className="text-[8px] text-gray-500 font-medium">
                IG: <a href="https://www.instagram.com/cv_sarijaya_makmur/" target="_blank" rel="noreferrer" className="underline hover:text-black">@cv_sarijaya_makmur</a>
                {" • "}
                FB: <a href="https://www.facebook.com/p/CV-SariJaya-Makmur-100028578145182/" target="_blank" rel="noreferrer" className="underline hover:text-black">CV. SariJaya Makmur</a>
              </p>
            </div>
          </div>
          <div className="text-right">
            <h2 className="text-sm font-black uppercase text-gray-800">Surat Penawaran Harga (Sby/Sda)</h2>
            <p className="text-[8px] text-gray-500 font-bold mt-1">Sertifikat Resmi CV. SARIJAYA MAKMUR</p>
          </div>
        </div>

        {/* Client details & Metadata */}
        <div className="grid grid-cols-2 gap-4 mb-6 border-b border-gray-200 pb-4">
          <div className="space-y-1">
            <p className="font-bold text-gray-500 uppercase text-[8px]">Kepada Yth:</p>
            <p className="font-black text-sm">{clientName || "Bpk / Ibu Pelanggan Setia"}</p>
            <p className="font-semibold text-gray-600">{clientPhone || "-"}</p>
            <p className="text-[9px] text-gray-500 font-medium">Tempat / Lokasi Proyek</p>
          </div>
          <div className="space-y-1 text-right">
            <p className="font-bold text-gray-500 uppercase text-[8px]">Dokumen Penawaran:</p>
            <p className="font-bold">No: SJM/Q/2026/{quoteId}</p>
            <p className="font-medium text-gray-600">Tanggal: {quoteDate}</p>
            <p className="text-xs font-bold text-gray-800 uppercase">Kategori: {selectedService.toUpperCase()}</p>
          </div>
        </div>

        <p className="mb-4 leading-relaxed">
          Bersama surat ini, kami dari <strong>CV. SARIJAYA MAKMUR</strong> mengajukan rincian estimasi anggaran biaya (RAB) pengerjaan proyek lansekap dengan spesifikasi teknis dan pilihan material sebagai berikut:
        </p>

        {/* Itemized Table */}
        <table className="w-full text-left border-collapse mb-8">
          <thead>
            <tr className="border-b border-black text-gray-700 uppercase text-[8px] font-bold">
              <th className="py-2">Deskripsi Spesifikasi Teknis & Pekerjaan</th>
              <th className="py-2 text-right">Volume</th>
              <th className="py-2 text-right">Harga Satuan (IDR)</th>
              <th className="py-2 text-right">Jumlah Total (IDR)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-[10px]">
            {items.map((item, idx) => (
              <tr key={idx} className="py-2">
                <td className="py-3 pr-4 font-bold">{item.name}</td>
                <td className="py-3 text-right font-semibold">{item.qty} {item.unit}</td>
                <td className="py-3 text-right font-mono">Rp {item.rate.toLocaleString("id-ID")}</td>
                <td className="py-3 text-right font-mono font-bold">Rp {item.total.toLocaleString("id-ID")}</td>
              </tr>
            ))}
            <tr className="font-bold border-t border-black">
              <td colSpan={3} className="py-3 text-right text-[11px]">Jumlah Subtotal Pekerjaan:</td>
              <td className="py-3 text-right font-mono text-[11px]">Rp {subtotal.toLocaleString("id-ID")}</td>
            </tr>
            {discount > 0 && (
              <tr className="font-bold text-gray-600">
                <td colSpan={3} className="py-2 text-right text-[10px]">Diskon Proyek Khusus:</td>
                <td className="py-2 text-right font-mono text-[10px]">-Rp {discount.toLocaleString("id-ID")}</td>
              </tr>
            )}
            <tr className="font-black text-base border-t-2 border-black bg-gray-50">
              <td colSpan={3} className="py-3 text-right">Total Anggaran (RAB Estimasi):</td>
              <td className="py-3 text-right font-mono text-black">Rp {totalCost.toLocaleString("id-ID")}</td>
            </tr>
          </tbody>
        </table>

        {/* Note / Terms */}
        <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl mb-8">
          <h4 className="font-bold text-[9px] uppercase tracking-wider text-gray-700 mb-2">Syarat & Ketentuan Penawaran:</h4>
          <ul className="list-disc pl-4 space-y-1 text-[9px] text-gray-600 font-semibold leading-relaxed">
            <li>Harga yang tercantum adalah <strong>estimasi acuan berdasar volume</strong>. Kepastian harga final diatur dalam dokumen kontrak resmi setelah survei lapangan detail.</li>
            <li>Pengerjaan mencakup seluruh pembersihan lahan awal, pupuk dasar organic, dan pengiriman material tanaman ke lokasi.</li>
            <li>Bergaransi hidup tanaman optimal selama 30 hari penuh sejak serah terima fisik.</li>
            <li>Pembayaran uang muka (DP) disepakati bersama CV. SARIJAYA MAKMUR sebelum pekerjaan konstruksi dimulai.</li>
          </ul>
        </div>

        {/* Signature */}
        <div className="flex justify-end pt-12">
          <div className="text-center w-48 space-y-16">
            <div className="space-y-1">
              <p className="text-[9px] text-gray-500 font-bold">Hormat Kami,</p>
              <p className="font-black">CV. SARIJAYA MAKMUR</p>
            </div>
            <div className="space-y-1">
              <p className="font-black border-b border-black pb-1">DAVID MAULUDDIN ST.</p>
              <p className="text-[9px] text-gray-500 font-bold">Direktur Utama & Owner</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
