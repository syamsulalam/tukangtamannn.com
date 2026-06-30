"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import Breadcrumb from "./Breadcrumb";

interface PageHeroProps {
  title: string;
  subtitle: string;
  image: string;
  badge?: string;
  breadcrumbItems?: { label: string; href?: string }[];
}

export default function PageHero({ title, subtitle, image, badge = "Layanan TukangTamannn.com", breadcrumbItems }: PageHeroProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section ref={ref} className="relative w-full h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#1A3C34]/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent" />
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          {breadcrumbItems && <Breadcrumb items={breadcrumbItems} />}
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream/10 border border-cream/20 backdrop-blur-md mb-6 w-fit mx-auto mt-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sage" />
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/90">
              {badge}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tighter mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-medium max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
