"use client";
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { CODORAH_TRANSLATIONS } from '../data/codorah';

export default function VisionSection() {
  const { lang } = useLanguage();
  const { vision } = CODORAH_TRANSLATIONS[lang] || CODORAH_TRANSLATIONS.EN;

  return (
    <section id="vision" className="py-40 px-8 bg-codorah-black relative overflow-hidden flex items-center justify-center min-h-screen">
      {/* Immersive Ferrari Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/bg/ferrari_vision.png" 
          alt="Cyber Ferrari" 
          className="w-full h-full object-cover opacity-60 hover:scale-105 transition-all duration-[3s] scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-codorah-black via-codorah-black/60 to-codorah-black"></div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-codorah-neonViolet/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10 group">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="text-codorah-neonViolet text-xs font-mono tracking-[0.5em] uppercase mb-16 block opacity-80 animate-pulse">
            02 // Vision & Momentum
          </span>
          
          <h2 className="text-4xl md:text-8xl font-black text-white leading-tight tracking-tighter uppercase italic mb-16 px-4">
            "{vision.quote.split('?').map((part, i, arr) => (
              <span key={i}>
                {i === 0 ? (
                  <>
                    <span className="text-white">{part.split(',')[0]}</span>
                    <span className="text-codorah-neonViolet">, {part.split(',')[1]}</span>
                  </>
                ) : (
                  <span className="text-codorah-gold block mt-2 text-2xl md:text-5xl font-bold not-italic tracking-[0.1em]">
                    {part}{i < arr.length - 1 ? '?' : ''}
                  </span>
                )}
              </span>
            ))}"
          </h2>
          
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-codorah-neonViolet mb-6 shadow-[0_0_30px_rgba(139,92,246,0.5)] bg-codorah-black">
              <img src="/assets/team/elodie.jpg" alt={vision.author} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
            </div>
            <p className="text-white font-bold tracking-[0.4em] uppercase text-sm">{vision.author}</p>
            <p className="text-codorah-neonViolet text-[10px] font-mono tracking-[0.2em] uppercase mt-2 opacity-60">
               {vision.role}
            </p>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative corners */}
      <div className="absolute top-20 left-20 w-10 h-10 border-t-2 border-l-2 border-white/10"></div>
      <div className="absolute bottom-20 right-20 w-10 h-10 border-b-2 border-r-2 border-white/10"></div>
    </section>
  );
}
