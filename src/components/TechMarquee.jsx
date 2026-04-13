"use client";
import { motion } from "framer-motion";

const TECH_STACK = [
  "NEXT.JS", "REACT", "ARTIFICIAL INTELLIGENCE", "PANAFRICAN TECH", "FRAMER MOTION", 
  "THREE.JS", "CYBERSECURITY", "NO-CODE", "LLM", "PROMPT ENGINEERING", "FASTAPI",
  "NEXT.JS", "REACT", "ARTIFICIAL INTELLIGENCE", "PANAFRICAN TECH", "FRAMER MOTION", // Duplicate for seamless infinite scroll
  "THREE.JS", "CYBERSECURITY", "NO-CODE", "LLM", "PROMPT ENGINEERING", "FASTAPI"
];

export default function TechMarquee() {
  return (
    <div className="w-full bg-codorah-neonViolet py-3 overflow-hidden flex whitespace-nowrap relative z-20 border-y border-white/20 shadow-[0_0_20px_rgba(139,92,246,0.3)]">
      {/* 
        On utilise framer-motion pour animer la div.
        On translate le conteneur complet pour créer la boucle
      */}
      <motion.div
        className="flex gap-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30, // Plus c'est grand, plus c'est lent
        }}
      >
        {TECH_STACK.map((tech, i) => (
          <span key={i} className="text-black font-black text-sm md:text-base tracking-[0.3em] uppercase opacity-90 px-4">
            {tech} <span className="text-black/30 ml-8 text-xl">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
