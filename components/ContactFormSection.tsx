"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, MapPin, Phone, CheckCircle2, AlertCircle, ExternalLink, Copy } from "lucide-react";

const WHATSAPP_NUMBER = "6282131472864";

const SERVICE_LABELS: Record<string, string> = {
  pembuatan: "Pembuatan Taman Baru",
  kolam: "Pembuatan Kolam / Gazebo",
  perawatan: "Perawatan / Renovasi",
  konsultasi: "Konsultasi Desain"
};

const buildWhatsAppMessage = (data: { name: string; phone: string; service: string; message: string }) => {
  const serviceName = SERVICE_LABELS[data.service] || data.service || "—";
  const lines = [
    "Halo Tim TukangTamannn.com,",
    "",
    "Saya ingin berkonsultasi mengenai proyek taman dan mengajukan jadwal survei.",
    "",
    "*Biodata Singkat*",
    `• Nama        : ${data.name || "—"}`,
    `• WhatsApp    : ${data.phone || "—"}`,
    `• Layanan     : ${serviceName}`,
    "",
    "*Cerita Proyek*",
    data.message || "—",
    "",
    "Mohon info lebih lanjut mengenai estimasi biaya & jadwal kunjungan. Terima kasih."
  ];
  return lines.join("\n");
};

const buildWhatsAppLink = (data: { name: string; phone: string; service: string; message: string }) => {
  const message = buildWhatsAppMessage(data);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

interface FormState {
  name: string;
  phone: string;
  service: string;
  message: string;
}

const validateForm = (form: FormState) => {
  const errors: { [key: string]: string } = {};
  if (!form.name.trim()) {
    errors.name = "Nama lengkap wajib diisi";
  } else if (form.name.trim().length < 3) {
    errors.name = "Nama harus terdiri dari minimal 3 karakter";
  } else if (!/^[a-zA-Z\s\.]+$/.test(form.name)) {
    errors.name = "Nama hanya boleh berisi huruf, spasi, dan titik";
  }

  if (!form.phone.trim()) {
    errors.phone = "Nomor WhatsApp wajib diisi";
  } else {
    const cleanPhone = form.phone.replace(/[^0-9+]/g, "");
    if (!/^(08|\+628)[0-9]{8,13}$/.test(cleanPhone)) {
      errors.phone = "Nomor WhatsApp tidak valid (Contoh: 0812-3456-7890)";
    }
  }

  if (!form.service) {
    errors.service = "Silakan pilih salah satu opsi layanan";
  }

  if (!form.message.trim()) {
    errors.message = "Cerita proyek atau pesan wajib diisi";
  } else if (form.message.trim().length < 10) {
    errors.message = "Minimal 10 karakter agar kami memahami kebutuhan Anda";
  }

  return errors;
};

export default function ContactFormSection() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    phone: "",
    service: "",
    message: ""
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    let finalValue = value;

    if (id === "phone") {
      finalValue = formatPhoneMask(value);
    }

    setFormState(prev => {
      const next = { ...prev, [id]: finalValue };
      setErrors(validateForm(next));
      return next;
    });
  };

  const liveLink = useMemo(() => buildWhatsAppLink(formState), [formState]);
  const liveMessage = useMemo(() => buildWhatsAppMessage(formState), [formState]);
  const isValid = useMemo(() => Object.keys(errors).length === 0, [errors]);
  const filledCount = useMemo(
    () => [formState.name, formState.phone, formState.service, formState.message].filter(v => v.trim().length > 0).length,
    [formState]
  );

  useEffect(() => {
    if (!toastMessage) return;
    const t = setTimeout(() => setToastMessage(null), 3500);
    return () => clearTimeout(t);
  }, [toastMessage]);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(liveLink);
      setToastMessage({ text: "Tautan WhatsApp disalin ke clipboard.", type: "success" });
    } catch {
      setToastMessage({ text: "Gagal menyalin. Salin manual dari kolom di bawah.", type: "error" });
    }
  };

  return (
    <section id="kontak" className="py-24 bg-forest text-white px-6 relative overflow-hidden">
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-sage opacity-10 rounded-full blur-[100px] pointer-events-none"></div>

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
            Isi formulir di samping dan tombol WhatsApp akan otomatis terisi dengan pesan yang sudah diformat lengkap. Tinggal klik — tab baru WhatsApp langsung terbuka.
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
                  rel="noopener noreferrer"
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
                <p className="text-white/70 text-sm">Pesan masuk langsung ke WhatsApp David. Respon dalam 1x24 jam di jam kerja.</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[40px] p-8 md:p-10 shadow-2xl relative"
        >
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-5"
          >
            {/* Name Input */}
            <div className="relative group" suppressHydrationWarning>
              <input
                suppressHydrationWarning
                type="text"
                id="name"
                value={formState.name}
                onChange={handleChange}
                className={`peer w-full bg-cream/50 border rounded-xl px-4 py-4 text-charcoal outline-none transition-all placeholder-transparent ${
                  errors.name
                    ? "border-red-400 focus:border-red-500"
                    : formState.name
                    ? "border-emerald-400 focus:border-emerald-500"
                    : "border-forest/10 focus:border-sage"
                }`}
                placeholder="Nama Lengkap"
              />
              <label htmlFor="name" className="absolute left-4 top-1 text-[10px] uppercase tracking-widest font-bold text-forest/50 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-forest/40 peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-sage">Nama Lengkap</label>

              <AnimatePresence>
                {errors.name && (
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
                className={`peer w-full bg-cream/50 border rounded-xl px-4 py-4 text-charcoal outline-none transition-all placeholder-transparent pt-6 pb-2 ${
                  errors.phone
                    ? "border-red-400 focus:border-red-500"
                    : formState.phone
                    ? "border-emerald-400 focus:border-emerald-500"
                    : "border-forest/10 focus:border-sage"
                }`}
                placeholder="Nomor WhatsApp"
              />
              <label htmlFor="phone" className="absolute left-4 top-1 text-[10px] uppercase tracking-widest font-bold text-forest/50 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-forest/40 peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-sage">Nomor WhatsApp</label>

              <AnimatePresence>
                {errors.phone && (
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
                  className={`w-full bg-cream/50 border rounded-xl px-4 py-4 text-charcoal outline-none transition-colors appearance-none font-medium pr-10 ${
                    errors.service
                      ? "border-red-400 focus:border-red-500"
                      : formState.service
                      ? "border-emerald-400 focus:border-emerald-500"
                      : "border-forest/10 focus:border-sage"
                  }`}
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
                {errors.service && (
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
                rows={4}
                className={`peer w-full bg-cream/50 border rounded-xl px-4 py-4 text-charcoal outline-none transition-all resize-none placeholder-transparent pt-6 ${
                  errors.message
                    ? "border-red-400 focus:border-red-500"
                    : formState.message
                    ? "border-emerald-400 focus:border-emerald-500"
                    : "border-forest/10 focus:border-sage"
                }`}
                placeholder="Pesan Tambahan"
              ></textarea>
              <label htmlFor="message" className="absolute left-4 top-2 text-[10px] uppercase tracking-widest font-bold text-forest/50 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-forest/40 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-sage">Ceritakan Proyek Anda</label>

              <AnimatePresence>
                {errors.message && (
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

            {/* Send Button — always a live <a> with current wa.me link */}
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={!isValid}
              onClick={(e) => { if (!isValid) e.preventDefault(); }}
              className={`w-full font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 group ${
                isValid
                  ? "bg-[#25D366] text-white shadow-[#25D366]/20 hover:bg-[#1ebe5d] cursor-pointer"
                  : "bg-forest/20 text-forest/50 cursor-not-allowed shadow-none"
              }`}
            >
              <MessageCircle size={18} className={isValid ? "text-white" : "text-forest/50"} />
              {isValid ? "Kirim via WhatsApp" : "Lengkapi formulir terlebih dahulu"}
              {isValid && <ExternalLink size={16} className="opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />}
            </a>

            {/* Live URL preview + completion status */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider">
                <span className={isValid ? "text-emerald-600" : "text-charcoal/40"}>
                  {filledCount}/4 field terisi {isValid && "• Siap kirim"}
                </span>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="text-forest/50 hover:text-forest transition-colors flex items-center gap-1"
                >
                  <Copy size={11} />
                  Salin tautan
                </button>
              </div>
              <p className="text-[9px] text-charcoal/40 font-mono leading-relaxed break-all bg-cream/50 rounded-lg p-2 border border-forest/5">
                {liveLink}
              </p>
              <details className="text-[10px] text-charcoal/50">
                <summary className="cursor-pointer font-bold uppercase tracking-wider hover:text-forest transition-colors">
                  Preview pesan yang akan dikirim
                </summary>
                <pre className="mt-2 text-[10px] text-charcoal/70 font-mono whitespace-pre-wrap break-words leading-relaxed bg-cream/50 rounded-lg p-2 border border-forest/5 max-h-32 overflow-y-auto">
                  {liveMessage}
                </pre>
              </details>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
