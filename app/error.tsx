"use client";

import { useEffect } from "react";
import { motion } from "motion/react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import Link from "next/link";

interface ErrorBoundaryProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  useEffect(() => {
    // Log the error to an analytics or error tracking service
    console.error("ErrorBoundary caught an unexpected exception:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center p-6 text-charcoal">
      {/* Background Soft Ambient Accents */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-sage opacity-20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-forest opacity-10 rounded-full blur-[120px] pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-forest/5 text-center relative z-10"
      >
        <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-500 mx-auto mb-6">
          <AlertTriangle size={32} />
        </div>

        <h1 className="text-2xl font-extrabold tracking-tight text-forest mb-3">
          Terjadi Kesalahan Sistem
        </h1>
        
        <p className="text-sm text-charcoal/70 font-medium mb-8 leading-relaxed">
          Mohon maaf, halaman ini mengalami gangguan sementara. Silakan coba memuat ulang halaman atau kembali ke Beranda.
        </p>

        {error.digest && (
          <div className="bg-cream/60 rounded-xl p-3 mb-8 text-left border border-forest/5">
            <span className="block text-[9px] uppercase tracking-wider font-bold text-forest/40 mb-1">
              Kode Pelacakan (Digest)
            </span>
            <span className="font-mono text-xs text-charcoal/60 select-all break-all">
              {error.digest}
            </span>
          </div>
        )}

        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => reset()}
            className="flex items-center justify-center gap-2 px-5 py-3.5 bg-forest hover:bg-forest/90 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md shadow-forest/10 hover:shadow-lg transition-all"
          >
            <RefreshCw size={14} />
            Muat Ulang
          </button>
          
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-5 py-3.5 bg-cream hover:bg-sage/10 text-forest font-bold text-xs uppercase tracking-wider rounded-xl border border-forest/10 transition-all"
          >
            <Home size={14} />
            Ke Beranda
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
