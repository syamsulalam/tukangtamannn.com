"use client";

import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <div className="print:hidden fixed bottom-8 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="bg-forest text-white px-4 py-2 rounded-2xl rounded-br-none text-xs font-bold shadow-xl shadow-forest/20 animate-pulse pointer-events-auto"
      >
        Tanya Biaya Per Meter?
      </motion.div>
      <motion.a
        href="https://wa.me/6282131472864" 
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
        className="w-16 h-16 bg-forest rounded-full shadow-2xl shadow-forest/30 flex items-center justify-center cursor-pointer border-[3px] border-white/80 group pointer-events-auto relative overflow-hidden backdrop-blur-md"
        aria-label="Hubungi via WhatsApp"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <MessageCircle size={28} className="text-white group-hover:scale-110 transition-transform relative z-10" />
      </motion.a>
    </div>
  );
}
