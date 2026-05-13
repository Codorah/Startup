"use client";
import { motion } from "framer-motion";

const TECH_STACK = [
  "NEXT.JS", "REACT", "INTELLIGENCE ARTIFICIELLE", "PANAFRICAN TECH", "FRAMER MOTION",
  "THREE.JS", "CYBERSECURITY", "NO-CODE", "LLM", "PROMPT ENGINEERING", "FASTAPI",
  "NEXT.JS", "REACT", "INTELLIGENCE ARTIFICIELLE", "PANAFRICAN TECH", "FRAMER MOTION",
  "THREE.JS", "CYBERSECURITY", "NO-CODE", "LLM", "PROMPT ENGINEERING", "FASTAPI"
];

export default function TechMarquee() {
  return (
    <div className="w-full bg-[#7C3AED] py-3.5 overflow-hidden flex whitespace-nowrap relative z-20 border-y border-[#7C3AED]/20">
      <motion.div
        className="flex gap-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
      >
        {TECH_STACK.map((tech, i) => (
          <span key={i} className="text-white/90 font-black text-sm tracking-[0.3em] uppercase px-4 flex items-center gap-8">
            {tech}
            <span className="text-white/30 text-lg">◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
