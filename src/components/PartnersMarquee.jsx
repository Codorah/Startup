"use client";
import { motion } from "framer-motion";

const PARTNERS = [
  "TOGO COM", "MOOV AFRICA", "UNDP", "MINISTÈRE DU NUMÉRIQUE", "TECH HUB LOMÉ", "ENERGY GENERATION",
  "TOGO COM", "MOOV AFRICA", "UNDP", "MINISTÈRE DU NUMÉRIQUE", "TECH HUB LOMÉ", "ENERGY GENERATION"
];

export default function PartnersMarquee() {
  return (
    <div className="w-full bg-[#F8F7FF] py-12 overflow-hidden flex whitespace-nowrap relative z-20 border-t border-gray-100">
      {/* Section label */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[9px] font-mono tracking-[0.4em] text-[#9CA3AF] uppercase">
        Ils nous font confiance
      </div>

      <motion.div
        className="flex gap-20 items-center mt-4"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
      >
        {PARTNERS.map((partner, i) => (
          <span
            key={i}
            className="text-[#0F0A1E]/20 font-black text-2xl md:text-3xl tracking-tighter uppercase hover:text-[#7C3AED]/60 transition-colors duration-300 cursor-default select-none"
          >
            {partner}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
