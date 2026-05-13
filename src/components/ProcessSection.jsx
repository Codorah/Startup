"use client";
import { useLanguage } from '../context/LanguageContext';
import { CODORAH_TRANSLATIONS } from '../data/codorah';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import * as LucideIcons from 'lucide-react';

export default function ProcessSection() {
  const { lang } = useLanguage();
  const t = CODORAH_TRANSLATIONS[lang] || CODORAH_TRANSLATIONS.EN;
  const { process, whyUs } = t;
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      {/* WHY US */}
      <section id="pourquoi-nous" className="py-32 px-8 bg-white relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full bg-[#7C3AED]/4 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="text-[#7C3AED] text-[10px] font-mono tracking-[0.5em] uppercase mb-4 block">
              04 // {lang === 'FR' ? 'Valeur Ajoutée' : 'Value Added'}
            </span>
            <h2 className="text-4xl md:text-7xl font-black text-[#0F0A1E] tracking-tighter uppercase italic font-heading">
              {whyUs.title}
            </h2>
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
                  className="text-center p-8 bg-[#F8F7FF] border border-gray-100 hover:border-[#7C3AED]/30 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(124,58,237,0.1)] transition-all duration-500 group rounded-2xl"
                >
                  <div className="h-14 w-14 rounded-full bg-white border border-gray-200 mx-auto flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#7C3AED]/40 transition-all shadow-sm">
                    <Icon size={24} className="text-[#7C3AED]" />
                  </div>
                  <h4 className="text-[#0F0A1E] font-black mb-2 tracking-tight text-sm">{point.title}</h4>
                  <p className="text-[#6B7280] text-xs leading-relaxed">{point.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="processus" className="py-32 px-8 bg-[#F8F7FF] relative overflow-hidden">
        <div className="text-center mb-24 relative z-20">
          <span className="text-[#7C3AED] text-[10px] font-mono tracking-[0.5em] uppercase mb-4 block opacity-80">
            05 // {lang === 'FR' ? 'Le Cycle d\'Excellence' : 'The Execution Cycle'}
          </span>
          <h2 className="text-4xl md:text-7xl font-black text-[#0F0A1E] tracking-tighter uppercase italic font-heading">
            {process.title}
          </h2>
        </div>

        <div ref={containerRef} className="max-w-5xl mx-auto relative z-10 py-10">
          {/* Timeline line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 md:-translate-x-1/2"></div>
          <motion.div
            className="absolute left-[28px] md:left-1/2 top-0 w-[2px] bg-[#7C3AED] md:-translate-x-1/2 origin-top"
            style={{ height: lineHeight }}
          />

          <div className="space-y-24">
            {process.steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={step.id} className={`flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''} relative`}>
                  {/* Dot */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1, damping: 20 }}
                    className="absolute left-[28px] md:left-1/2 -ml-[12px] mt-1 w-6 h-6 rounded-full bg-white border-2 border-[#7C3AED] flex items-center justify-center font-black text-[10px] text-[#7C3AED] z-20 shadow-[0_0_0_4px_rgba(124,58,237,0.1)]"
                  >
                    {step.id}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className={`md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16'} pl-16 pt-0`}
                  >
                    <div className="bg-white p-10 rounded-3xl border border-gray-100 hover:border-[#7C3AED]/30 hover:shadow-[0_15px_40px_rgba(124,58,237,0.08)] transition-all duration-500 group relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-[#7C3AED] to-[#A855F7] group-hover:w-full transition-all duration-700 rounded-t-3xl"></div>
                      <p className="text-[#7C3AED] text-[10px] uppercase tracking-[0.4em] mb-3 font-mono font-bold">
                        Phase {step.id} // {step.subtitle}
                      </p>
                      <h4 className="text-2xl font-black text-[#0F0A1E] mb-4 uppercase tracking-tighter font-heading">{step.title}</h4>
                      <p className="text-[#6B7280] text-sm leading-relaxed">{step.desc}</p>
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
