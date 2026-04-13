"use client";
import { motion } from "framer-motion";

const PARTNERS = [
  "TOGO COM", "MOOV AFRICA", "UNDP", "MINISTÈRE DU NUMÉRIQUE", "TECH HUB LOMÉ", "ENERGY GENERATION",
  "TOGO COM", "MOOV AFRICA", "UNDP", "MINISTÈRE DU NUMÉRIQUE", "TECH HUB LOMÉ", "ENERGY GENERATION"
];

export default function PartnersMarquee() {
  return (
    <div className="w-full bg-codorah-black/50 py-12 overflow-hidden flex whitespace-nowrap relative z-20 border-t border-white/5 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
      <motion.div
        className="flex gap-20 items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 40,
        }}
      >
        {PARTNERS.map((partner, i) => (
          <span key={i} className="text-white font-black text-2xl md:text-4xl tracking-tighter uppercase opacity-30">
            {partner}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
