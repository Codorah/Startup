"use client";
import { useLanguage } from '../context/LanguageContext';
import { CODORAH_TRANSLATIONS } from '../data/codorah';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import * as LucideIcons from 'lucide-react';

export default function ProcessSection() {
  const { lang } = useLanguage();
  const { process, whyUs } = CODORAH_TRANSLATIONS[lang];
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      {/* WHY US SECTION */}
      <section id="pourquoi-nous" className="py-32 px-8 bg-codorah-black border-t border-white/5 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-codorah-neonViolet/5 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="text-codorah-neonViolet text-[10px] font-mono tracking-[0.5em] uppercase mb-4 block animate-pulse">
              04 // {lang === 'FR' ? 'Valeur Ajoutée' : 'Value Defined'}
            </span>
            <h2 className="text-4xl md:text-8xl font-black text-white tracking-tighter uppercase italic">{whyUs.title}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyUs.points.map((point, i) => {
              const Icon = LucideIcons[point.icon] || LucideIcons.CheckCircle;
              return (
                <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1, duration: 0.5 }}
                   className="text-center p-8 bg-[#1A0B2E]/30 border border-white/5 hover:border-codorah-neonViolet/50 hover:bg-[#1A0B2E]/60 hover:-translate-y-2 transition-all group rounded-xl shadow-xl backdrop-blur-sm"
                >
                  <div className="h-16 w-16 rounded-full bg-codorah-black border border-white/10 mx-auto flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-codorah-gold/50 transition-transform shadow-[0_0_20px_rgba(139,92,246,0.1)]">
                    <Icon size={28} className="text-codorah-neonViolet group-hover:text-codorah-gold transition-colors" />
                  </div>
                  <h4 className="text-white font-bold mb-3 tracking-tight">{point.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed font-light">{point.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section id="processus" className="py-32 px-8 bg-[#050508] relative overflow-hidden">
        <div className="text-center mb-24 relative z-20">
          <span className="text-codorah-neonViolet text-[10px] font-mono tracking-[0.5em] uppercase mb-4 block opacity-80 animate-pulse">
            05 // {lang === 'FR' ? 'Le Cycle d\'Excellence' : 'The Execution Cycle'}
          </span>
          <h2 className="text-4xl md:text-8xl font-black text-white tracking-tighter uppercase italic">{process.title}</h2>
        </div>

        <div ref={containerRef} className="max-w-5xl mx-auto relative z-10 py-10">
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 md:-translate-x-1/2"></div>
          <motion.div 
            className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-codorah-neonViolet via-codorah-neonViolet to-transparent md:-translate-x-1/2 origin-top shadow-[0_0_20px_#8B5CF6]"
            style={{ height: lineHeight }}
          ></motion.div>

          <div className="space-y-24">
            {process.steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={step.id} className={`flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''} relative`}>
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="absolute left-[28px] md:left-1/2 -ml-[24px] mt-2 w-12 h-12 rounded-full bg-codorah-black border-4 border-[#1A0B2E] flex items-center justify-center font-black text-codorah-neonViolet z-20 shadow-[0_0_30px_rgba(139,92,246,0.5)]"
                  >
                    {step.id}
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`md:w-1/2 ${isEven ? 'md:pl-20' : 'md:pr-20'} pl-24 pt-2`}
                  >
                    <div className="bg-[#1A0B2E]/20 backdrop-blur-md p-8 rounded-2xl border border-white/5 hover:border-codorah-neonViolet/30 hover:bg-[#1A0B2E]/40 transition-all shadow-2xl relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-codorah-neonViolet/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative z-10">
                        <p className="text-codorah-neonViolet text-[10px] uppercase tracking-[0.2em] mb-3 font-mono opacity-60 italic">Phase {step.id} // {step.subtitle}</p>
                        <h4 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">{step.title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed font-light">{step.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
