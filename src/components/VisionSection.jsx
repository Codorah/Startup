"use client";
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { CODORAH_TRANSLATIONS } from '../data/codorah';

export default function VisionSection() {
  const { lang } = useLanguage();
  const { vision } = CODORAH_TRANSLATIONS[lang] || CODORAH_TRANSLATIONS.EN;

  return (
    <section id="vision" className="py-32 px-8 relative overflow-hidden flex items-center justify-center min-h-[60vh] bg-[#0F0A1E]">
      {/* Purple glow blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#7C3AED]/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#A855F7]/10 blur-[100px] pointer-events-none" />

      {/* Decorative corner lines */}
      <div className="absolute top-10 left-10 w-12 h-12 border-t-2 border-l-2 border-white/10"></div>
      <div className="absolute bottom-10 right-10 w-12 h-12 border-b-2 border-r-2 border-white/10"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="text-[#A78BFA] text-xs font-mono tracking-[0.5em] uppercase mb-16 block opacity-80">
            02 // Vision &amp; Momentum
          </span>

          <div className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter uppercase italic mb-16 px-4">
            <span className="text-[#A78BFA]">"</span>
            {vision.quote.split('?').map((part, i, arr) => (
              <span key={i}>
                {i === 0 ? (
                  <>
                    <span className="text-white">{part.split(',')[0]}</span>
                    {part.split(',')[1] && (
                      <span className="text-[#C4B5FD]">, {part.split(',')[1]}</span>
                    )}
                  </>
                ) : (
                  <span className="text-[#7C3AED] block mt-2 text-2xl md:text-4xl font-bold not-italic tracking-[0.05em]">
                    {part}{i < arr.length - 1 ? '?' : ''}
                  </span>
                )}
              </span>
            ))}
            <span className="text-[#A78BFA]">"</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#7C3AED]/60 mb-6 shadow-[0_0_30px_rgba(124,58,237,0.4)] bg-[#0F0A1E]">
              <img
                src="/assets/team/elodie.jpg"
                alt={vision.author}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <p className="text-white font-bold tracking-[0.3em] uppercase text-sm">{vision.author}</p>
            <p className="text-[#A78BFA] text-[10px] font-mono tracking-[0.2em] uppercase mt-2 opacity-70">
              {vision.role}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
