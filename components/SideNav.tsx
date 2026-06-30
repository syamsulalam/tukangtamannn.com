"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";

const sections = [
  { id: "beranda", label: "Beranda" },
  { id: "layanan", label: "Layanan" },
  { id: "gaya", label: "Gaya Taman" },
  { id: "portofolio", label: "Portofolio" },
  { id: "kontak", label: "Kontak" },
];

export default function SideNav() {
  const [activeSection, setActiveSection] = useState("beranda");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
      
      if (window.scrollY < 100) {
        setActiveSection("beranda");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-4 items-center">
      {sections.map((section) => (
        <Link
          key={section.id}
          href={`#${section.id}`}
          className="relative group flex items-center justify-end"
          aria-label={section.label}
        >
          <span
            className={`absolute right-6 px-3 py-1 bg-forest text-white text-xs font-bold rounded-lg shadow-sm whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all pointer-events-none`}
          >
            {section.label}
          </span>
          <motion.div
            animate={{
              height: activeSection === section.id ? 24 : 8,
              backgroundColor: activeSection === section.id ? "#A4C3A2" : "#1A3C34",
              opacity: activeSection === section.id ? 1 : 0.3
            }}
            className="w-2 rounded-full cursor-pointer hover:bg-sage hover:opacity-100 transition-colors"
          />
        </Link>
      ))}
    </div>
  );
}
