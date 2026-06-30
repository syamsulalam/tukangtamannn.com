"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight, 
  Tag, 
  ClipboardList, 
  Plus, 
  Minus, 
  Sparkles, 
  Info 
} from "lucide-react";

interface ProcessStep {
  title: string;
  desc: string;
}

interface PriceItem {
  item: string;
  price: string;
  unit: string;
}

interface FaqItem {
  q: string;
  a: string;
}

interface ContentBlockProps {
  content: string;
  benefits: string[];
  detailedContent?: string[];
  processSteps?: ProcessStep[];
  pricingTable?: PriceItem[];
  faq?: FaqItem[];
}

export default function ContentBlock({ 
  content, 
  benefits, 
  detailedContent = [], 
  processSteps = [], 
  pricingTable = [], 
  faq = [] 
}: ContentBlockProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <section className="py-20 bg-cream px-6 relative">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Main Content & Description Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-forest/5 relative overflow-hidden"
        >
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-sage/10 rounded-bl-full pointer-events-none" />
          
          <div className="flex items-center gap-2.5 mb-6">
            <Sparkles className="text-sage w-5 h-5" />
            <h2 className="text-2xl md:text-3xl font-extrabold text-forest tracking-tight">
              Ikhtisar & <span className="font-serif italic font-normal text-sage">Detail Informasi</span>
            </h2>
          </div>

          <p className="text-charcoal/80 leading-loose text-lg font-medium mb-8">
            {content}
          </p>

          {/* Detailed Content Paragraphs if available */}
          {detailedContent.length > 0 && (
            <div className="space-y-6 text-charcoal/70 leading-relaxed font-medium text-sm md:text-base border-t border-forest/10 pt-8 mt-8">
              {detailedContent.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          )}
        </motion.div>

        {/* Benefits Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-extrabold text-forest tracking-tight flex items-center gap-2">
            <CheckCircle2 className="text-sage" size={24} />
            Keunggulan & Nilai Tambah
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                key={idx} 
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-forest/5 hover:border-sage/40 hover:shadow-md transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-forest/5 flex items-center justify-center text-sage flex-shrink-0 mt-0.5">
                  <CheckCircle2 size={16} />
                </div>
                <span className="text-charcoal/80 font-bold leading-relaxed text-sm">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Steps Section */}
        {processSteps.length > 0 && (
          <div className="space-y-8">
            <div className="flex items-center gap-2.5">
              <ClipboardList className="text-sage" size={24} />
              <h3 className="text-2xl font-extrabold text-forest tracking-tight">
                Bagaimana Kami <span className="font-serif italic font-normal text-sage">Bekerja</span>
              </h3>
            </div>
            
            <div className="relative pl-6 border-l border-forest/10 ml-4 space-y-10">
              {processSteps.map((step, idx) => (
                <motion.div 
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  key={idx} 
                  className="relative"
                >
                  {/* Step Number Dot */}
                  <div className="absolute -left-[37px] top-0.5 w-6 h-6 bg-forest text-white rounded-full flex items-center justify-center text-xs font-black shadow-md shadow-forest/20">
                    {idx + 1}
                  </div>
                  
                  <div className="bg-white p-6 rounded-2xl border border-forest/5 shadow-sm hover:shadow-md transition-all">
                    <h4 className="font-extrabold text-forest text-base mb-1.5">{step.title}</h4>
                    <p className="text-charcoal/70 text-xs md:text-sm font-medium leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Pricing Estimator Section */}
        {pricingTable.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center gap-2.5">
              <Tag className="text-sage" size={24} />
              <h3 className="text-2xl font-extrabold text-forest tracking-tight">
                Estimasi Biaya & <span className="font-serif italic font-normal text-sage">Spesifikasi</span>
              </h3>
            </div>

            <div className="bg-white rounded-3xl border border-forest/5 shadow-sm overflow-hidden">
              <div className="p-6 bg-forest/5 border-b border-forest/10 flex gap-3 items-center">
                <Info size={16} className="text-forest" />
                <p className="text-xs text-charcoal/70 font-semibold leading-relaxed">
                  *Harga di bawah merupakan estimasi acuan awal. Biaya riil proyek ditentukan setelah survei lahan resmi dan kesepakatan desain final.
                </p>
              </div>
              <div className="divide-y divide-forest/5">
                {pricingTable.map((price, idx) => (
                  <div key={idx} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-3 hover:bg-forest/[0.01] transition-colors">
                    <div>
                      <h4 className="font-extrabold text-forest text-sm md:text-base">{price.item}</h4>
                    </div>
                    <div className="flex items-center gap-1.5 md:text-right flex-shrink-0">
                      <span className="text-sage font-black text-base md:text-lg">{price.price}</span>
                      <span className="text-charcoal/40 text-xs font-bold uppercase">/ {price.unit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Topically Localized FAQs Section */}
        {faq.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center gap-2.5">
              <HelpCircle className="text-sage" size={24} />
              <h3 className="text-2xl font-extrabold text-forest tracking-tight">
                Pertanyaan <span className="font-serif italic font-normal text-sage">Sering Diajukan</span>
              </h3>
            </div>

            <div className="space-y-4">
              {faq.map((item, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div 
                    key={idx} 
                    className="bg-white rounded-2xl border border-forest/5 overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 font-bold text-forest text-sm md:text-base hover:bg-forest/[0.01] transition-colors"
                    >
                      <span>{item.q}</span>
                      <span className="w-8 h-8 rounded-lg bg-forest/5 flex items-center justify-center text-forest flex-shrink-0">
                        {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                      </span>
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 pt-1 border-t border-forest/5 text-charcoal/70 text-xs md:text-sm font-medium leading-relaxed">
                            {item.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
