"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, MapPin, Phone, MessageCircle, CheckCircle2, AlertCircle, RefreshCw } from "lucide-react";

const WHATSAPP_NUMBER = "6282131472864";

const SERVICE_LABELS: Record<string, string> = {
  pembuatan: "Pembuatan Taman Baru",
  kolam: "Pembuatan Kolam / Gazebo",
  perawatan: "Perawatan / Renovasi",
  konsultasi: "Konsultasi Desain"
};

const buildWhatsAppMessage = (data: { name: string; phone: string; service: string; message: string }) => {
  const serviceName = SERVICE_LABELS[data.service] || data.service || "Tidak memilih layanan spesifik";
  const lines = [
    "Halo Tim TukangTamannn.com,",
    "",
    "Saya ingin berkonsultasi mengenai proyek taman dan ingin mengajukan jadwal survei.",
    "",
    "Biodata Singkat:",
    `• Nama        : ${data.name}`,
    `• WhatsApp    : ${data.phone}`,
    `• Layanan     : ${serviceName}`,
    "",
    "Cerita Proyek:",
    data.message,
    "",
    "Mohon info lebih lanjut mengenai estimasi biaya & jadwal kunjungan. Terima kasih."
  ];
  return lines.join("\n");
};

export default function ContactFormSection() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    service: "",
    message: ""
  });

  const [honeypot, setHoneypot] = useState("");
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [toastMessage, setToastMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  const formatPhoneMask = (val: string) => {
    let cleaned = val.replace(/[^\d+]/g, "");

    if (cleaned.startsWith("+")) {
      cleaned = "+" + cleaned.replace(/\+/g, "");
    } else {
      cleaned = cleaned.replace(/\+/g, "");
    }

    if (cleaned.startsWith("+62")) {
      const digits = cleaned.slice(3).replace(/\D/g, "");
      if (digits.length === 0) return "+62 ";
      if (digits.length <= 3) return `+62 ${digits}`;
      if (digits.length <= 7) return `+62 ${digits.slice(0, 3)}-${digits.slice(3)}`;
      return `+62 ${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7, 12)}`;
    } else if (cleaned.startsWith("62")) {
      const digits = cleaned.slice(2).replace(/\D/g, "");
      if (digits.length === 0) return "+62 ";
      if (digits.length <= 3) return `+62 ${digits}`;
      if (digits.length <= 7) return `+62 ${digits.slice(0, 3)}-${digits.slice(3)}`;
      return `+62 ${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7, 12)}`;
    } else {
      const digits = cleaned.replace(/\D/g, "");
      if (digits.length <= 4) return digits;
      if (digits.length <= 8) return `${digits.slice(0, 4)}-${digits.slice(4)}`;
      return `${digits.slice(0, 4)}-${digits.slice(4, 8)}-${digits.slice(8, 13)}`;
    }
  };

  const validateField = (id: string, value: string) => {
    let errorMsg = "";
    if (id === "name") {
      if (!value.trim()) {
        errorMsg = "Nama lengkap wajib diisi";
      } else if (value.trim().length < 3) {
        errorMsg = "Nama harus terdiri dari minimal 3 karakter";
      } else if (!/^[a-zA-Z\s\.]+$/.test(value)) {
        errorMsg = "Nama hanya boleh berisi huruf, spasi, dan titik";
      }
    } else if (id === "phone") {
      if (!value.trim()) {
        errorMsg = "Nomor WhatsApp wajib diisi";
      } else {
        const cleanPhone = value.replace(/[^0-9+]/g, "");
        if (!/^(08|\+628)[0-9]{8,13}$/.test(cleanPhone)) {
          errorMsg = "Nomor WhatsApp tidak valid (Contoh: 0812-3456-7890, 10-14 digit)";
        }
      }
    } else if (id === "service") {
      if (!value) {
        errorMsg = "Silakan pilih salah satu opsi layanan";
      }
    } else if (id === "message") {
      if (!value.trim()) {
        errorMsg = "Cerita proyek atau pesan wajib diisi";
      } else if (value.trim().length < 10) {
        errorMsg = "Berikan deskripsi minimal 10 karakter agar kami dapat memahami kebutuhan Anda";
      }
    }
    return errorMsg;
  };

  const handleBlur = (id: string) => {
    setTouched(prev => ({ ...prev, [id]: true }));
    const errorMsg = validateField(id, formState[id as keyof typeof formState]);
    setErrors(prev => ({ ...prev, [id]: errorMsg }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    let finalValue = value;

    if (id === "phone") {
      finalValue = formatPhoneMask(value);
    }

    setFormState(prev => ({ ...prev, [id]: finalValue }));

    if (touched[id]) {
      const errorMsg = validateField(id, finalValue);
      setErrors(prev => ({ ...prev, [id]: errorMsg }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (honeypot) {
      console.warn("Spam bot detected and blocked.");
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormState({ name: "", phone: "", service: "", message: "" });
        setTouched({});
        setErrors({});
      }, 800);
      return;
    }

    const newErrors: { [key: string]: string } = {};
    let hasErrors = false;

    Object.keys(formState).forEach((key) => {
      const errorMsg = validateField(key, formState[key as keyof typeof formState]);
      if (errorMsg) {
        newErrors[key] = errorMsg;
        hasErrors = true;
      }
    });

    setErrors(newErrors);
    setTouched({
      name: true,
      phone: true,
      service: true,
      message: true
    });

    if (hasErrors) {
      setToastMessage({ text: "Harap perbaiki kesalahan pengisian form sebelum mengirim.", type: "error" });
      setTimeout(() => setToastMessage(null), 4000);
      return;
    }

    setIsSubmitting(true);

    try {
      const message = buildWhatsAppMessage(formState);
      const ownerWa = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

      const newTab = window.open(ownerWa, "_blank", "noopener,noreferrer");
      if (!newTab) {
        throw new Error("Popup diblokir oleh browser");
      }

      setIsSuccess(true);
      setToastMessage({
        text: "Pesan Anda telah disiapkan di WhatsApp. Selesaikan pengiriman dari aplikasi WhatsApp Anda.",
        type: "success"
      });
      setFormState({ name: "", phone: "", service: "", message: "" });
      setTouched({});
      setErrors({});
    } catch (err) {
      console.error("Failed to open WhatsApp:", err);
      setToastMessage({
        text: `Tidak dapat membuka WhatsApp secara otomatis. Silakan hubungi kami langsung via WhatsApp di 0821-3147-2864.`,
        type: "error"
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setToastMessage(null), 6000);
    }
  };

  return (
    <section id="kontak" className="py-24 bg-forest text-white px-6 relative overflow-hidden">
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-sage opacity-10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Floating Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-md border text-sm font-medium max-w-md ${
              toastMessage.type === "success"
                ? "bg-[#1A3C34]/95 text-white border-sage/40"
                : "bg-red-950/95 text-red-200 border-red-500/30"
            }`}
          >
            {toastMessage.type === "success" ? (
              <CheckCircle2 size={18} className="text-sage" />
            ) : (
              <AlertCircle size={18} className="text-red-400" />
            )}
            <span>{toastMessage.text}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6 w-fit">
             <span className="w-1.5 h-1.5 rounded-full bg-sage"></span>
             <span className="text-[10px] font-bold text-white/80 uppercase tracking-[0.2em]">Hubungi Kami</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6">
            Mari Diskusikan <span className="italic font-serif font-normal text-sage">Proyek Anda</span>
          </h2>
          <p className="text-white/70 font-medium leading-relaxed mb-12 max-w-md">
            Punya ide taman impian? Atau butuh bantuan merawat lanskap yang ada? Isi formulir di samping dan pesan Anda akan langsung kami terima di WhatsApp Tim TukangTamannn.com.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-sage flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Kantor Pusat</h4>
                <p className="text-white/70 text-sm">Jl Green Mansion Safir blok 16, Sidoarjo, Indonesia, 61253</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-sage flex-shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Kontak Bisnis (Tlp/Wa)</h4>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Halo Tim TukangTamannn.com, saya ingin berkonsultasi.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sage hover:text-white text-sm font-bold transition-colors underline-offset-4 hover:underline"
                >
                  082131472864
                </a>
                <p className="text-white/50 text-xs mt-0.5">David Mauluddin ST. (Owner of CV. SARIJAYA MAKMUR)</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-sage flex-shrink-0">
                <MessageCircle size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Respons Cepat</h4>
                <p className="text-white/70 text-sm">Pesan formulir masuk langsung ke WhatsApp David. Respon dalam 1x24 jam di jam kerja.</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[40px] p-8 md:p-10 shadow-2xl relative min-h-[500px]"
        >
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-cream/90 backdrop-blur rounded-[40px] shadow-sm z-10"
              >
                <div className="w-20 h-20 bg-[#25D366]/15 rounded-full flex items-center justify-center text-[#25D366] mb-6">
                  <MessageCircle size={40} className="text-[#25D366]" />
                </div>
                <h3 className="text-2xl font-extrabold text-forest mb-2 tracking-tight">Pesan WhatsApp Siap Dikirim!</h3>
                <p className="text-charcoal/70 font-medium mb-8 max-w-sm">Browser Anda telah membuka WhatsApp dengan pesan yang sudah diformat lengkap. Cukup tekan tombol kirim di WhatsApp untuk menghubungi tim kami.</p>

                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-3 bg-forest text-white font-bold rounded-xl text-sm flex items-center gap-2 shadow-lg shadow-forest/20 hover:bg-forest/90 transition-all group"
                >
                  <RefreshCw size={16} className="group-hover:rotate-180 transition-transform duration-500" />
                  Kirim Pesan Lain
                </button>
              </motion.div>
            ) : (
              <motion.form
                suppressHydrationWarning
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-5"
                onSubmit={handleSubmit}
              >
                <div className="absolute overflow-hidden opacity-0 w-0 h-0 -z-10 pointer-events-none">
                  <label htmlFor="address_verification">Address Verification</label>
                  <input
                    type="text"
                    id="address_verification"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Name Input */}
                <div className="relative group" suppressHydrationWarning>
                  <input
                    suppressHydrationWarning
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={handleChange}
                    onBlur={() => handleBlur("name")}
                    disabled={isSubmitting}
                    className={`peer w-full bg-cream/50 border rounded-xl px-4 py-4 text-charcoal outline-none transition-all placeholder-transparent ${
                      touched.name && errors.name
                        ? "border-red-400 focus:border-red-500"
                        : touched.name && !errors.name
                        ? "border-emerald-400 focus:border-emerald-500"
                        : "border-forest/10 focus:border-sage"
                    }`}
                    placeholder="Nama Lengkap"
                    required
                  />
                  <label htmlFor="name" className="absolute left-4 top-1 text-[10px] uppercase tracking-widest font-bold text-forest/50 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-forest/40 peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-sage">Nama Lengkap</label>

                  <AnimatePresence>
                    {touched.name && errors.name && (
                      <motion.p
                        initial={{ opacity: 0, height: 0, y: -4 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -4 }}
                        transition={{ duration: 0.2 }}
                        className="text-xs text-red-500 font-bold mt-1.5 flex items-center gap-1.5 overflow-hidden"
                      >
                        <AlertCircle size={13} className="flex-shrink-0" /> {errors.name}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Phone Input */}
                <div className="relative group" suppressHydrationWarning>
                  <input
                    suppressHydrationWarning
                    type="tel"
                    id="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    onBlur={() => handleBlur("phone")}
                    disabled={isSubmitting}
                    className={`peer w-full bg-cream/50 border rounded-xl px-4 py-4 text-charcoal outline-none transition-all placeholder-transparent pt-6 pb-2 ${
                      touched.phone && errors.phone
                        ? "border-red-400 focus:border-red-500"
                        : touched.phone && !errors.phone
                        ? "border-emerald-400 focus:border-emerald-500"
                        : "border-forest/10 focus:border-sage"
                    }`}
                    placeholder="Nomor WhatsApp"
                    required
                  />
                  <label htmlFor="phone" className="absolute left-4 top-1 text-[10px] uppercase tracking-widest font-bold text-forest/50 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-forest/40 peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-sage">Nomor WhatsApp</label>

                  <AnimatePresence>
                    {touched.phone && errors.phone && (
                      <motion.p
                        initial={{ opacity: 0, height: 0, y: -4 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -4 }}
                        transition={{ duration: 0.2 }}
                        className="text-xs text-red-500 font-bold mt-1.5 flex items-center gap-1.5 overflow-hidden"
                      >
                        <AlertCircle size={13} className="flex-shrink-0" /> {errors.phone}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Service Select */}
                <div suppressHydrationWarning>
                  <div className="relative">
                    <select
                      suppressHydrationWarning
                      id="service"
                      value={formState.service}
                      onChange={handleChange}
                      onBlur={() => handleBlur("service")}
                      disabled={isSubmitting}
                      className={`w-full bg-cream/50 border rounded-xl px-4 py-4 text-charcoal outline-none transition-colors appearance-none font-medium pr-10 ${
                        touched.service && errors.service
                          ? "border-red-400 focus:border-red-500"
                          : touched.service && !errors.service
                          ? "border-emerald-400 focus:border-emerald-500"
                          : "border-forest/10 focus:border-sage"
                      }`}
                      required
                    >
                      <option value="" disabled className="text-forest/40">Pilih Layanan...</option>
                      <option value="pembuatan">Pembuatan Taman Baru</option>
                      <option value="kolam">Pembuatan Kolam / Gazebo</option>
                      <option value="perawatan">Perawatan / Renovasi</option>
                      <option value="konsultasi">Konsultasi Desain</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-forest/60">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>

                  <AnimatePresence>
                    {touched.service && errors.service && (
                      <motion.p
                        initial={{ opacity: 0, height: 0, y: -4 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -4 }}
                        transition={{ duration: 0.2 }}
                        className="text-xs text-red-500 font-bold mt-1.5 flex items-center gap-1.5 overflow-hidden"
                      >
                        <AlertCircle size={13} className="flex-shrink-0" /> {errors.service}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Message Textarea */}
                <div className="relative group" suppressHydrationWarning>
                  <textarea
                    suppressHydrationWarning
                    id="message"
                    value={formState.message}
                    onChange={handleChange}
                    onBlur={() => handleBlur("message")}
                    disabled={isSubmitting}
                    rows={4}
                    className={`peer w-full bg-cream/50 border rounded-xl px-4 py-4 text-charcoal outline-none transition-all resize-none placeholder-transparent pt-6 ${
                      touched.message && errors.message
                        ? "border-red-400 focus:border-red-500"
                        : touched.message && !errors.message
                        ? "border-emerald-400 focus:border-emerald-500"
                        : "border-forest/10 focus:border-sage"
                    }`}
                    placeholder="Pesan Tambahan"
                    required
                  ></textarea>
                  <label htmlFor="message" className="absolute left-4 top-2 text-[10px] uppercase tracking-widest font-bold text-forest/50 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-forest/40 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-sage">Ceritakan Proyek Anda</label>

                  <AnimatePresence>
                    {touched.message && errors.message && (
                      <motion.p
                        initial={{ opacity: 0, height: 0, y: -4 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -4 }}
                        transition={{ duration: 0.2 }}
                        className="text-xs text-red-500 font-bold mt-1.5 flex items-center gap-1.5 overflow-hidden"
                      >
                        <AlertCircle size={13} className="flex-shrink-0" /> {errors.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#25D366] text-white font-bold py-4 rounded-xl shadow-lg shadow-[#25D366]/20 hover:bg-[#1ebe5d] transition-all flex items-center justify-center gap-2 group disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      Menyiapkan Pesan WhatsApp...
                      <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"></div>
                    </span>
                  ) : (
                    <>
                      Kirim via WhatsApp
                      <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-[10px] text-charcoal/50 text-center font-medium leading-relaxed">
                  Dengan mengirim, Anda akan diarahkan ke WhatsApp untuk menyelesaikan konsultasi dengan Tim TukangTamannn.com.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
