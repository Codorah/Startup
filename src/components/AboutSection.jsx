/**
 * @file AboutSection.jsx
 * @description "Our Story" section — displays Codorah's mission, founding vision,
 * target audience, and key stats (Founded in Togo, Results-Oriented, Pan-African).
 * Content is fully driven by the CODORAH_TRANSLATIONS data object.
 */
"use client";
import { useLanguage } from '../context/LanguageContext';
import { CODORAH_TRANSLATIONS } from '../data/codorah';
import { motion } from 'framer-motion';


export default function AboutSection() {
  const { lang } = useLanguage();
  const { about } = CODORAH_TRANSLATIONS[lang] || CODORAH_TRANSLATIONS.EN;

  return (
    <section id="about" className="py-32 px-8 bg-[#F8F7FF] relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#7C3AED]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <div className="flex items-center gap-6 mb-8">
            <div className="w-16 h-[2px] bg-[#7C3AED]/40"></div>
            <span className="text-[#7C3AED] text-[10px] font-mono tracking-[0.5em] uppercase opacity-70">
              01 // {lang === 'FR' ? 'Notre Histoire' : 'Our Story'}
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-[#0F0A1E] mb-10 leading-[0.9] tracking-tighter uppercase italic font-heading">
            {about.title}
          </h2>

          <p className="text-[#6B7280] text-lg md:text-xl leading-relaxed mb-14 max-w-2xl font-light">
            {about.description}
          </p>

          <div className="p-10 bg-[#7C3AED]/5 border-l-4 border-[#7C3AED] rounded-r-2xl relative overflow-hidden group hover:bg-[#7C3AED]/8 transition-all duration-500">
            <div className="absolute top-4 right-6 text-6xl text-[#7C3AED]/10 font-serif leading-none">"</div>
            <p className="text-[#0F0A1E] italic text-xl font-light leading-relaxed relative z-10">
              {about.vision}
            </p>
          </div>

          {/* Audience cible */}
          {about.audience && (
            <div className="mt-8 flex items-start gap-4">
              <div className="w-8 h-8 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-[#7C3AED] text-sm">🎯</span>
              </div>
              <div>
                <p className="text-[9px] font-mono tracking-[0.3em] uppercase text-[#7C3AED]/60 mb-1">Public cible</p>
                <p className="text-[#6B7280] text-sm leading-relaxed">{about.audience}</p>
              </div>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {about.stats?.map((stat, i) => (
            <div
              key={i}
              className={`p-8 bg-white border border-gray-100 rounded-2xl flex flex-col items-center justify-center text-center group hover:border-[#7C3AED]/30 hover:shadow-[0_10px_40px_rgba(124,58,237,0.08)] transition-all duration-500 ${i === 2 ? 'sm:col-span-2' : ''}`}
            >
              <span className="text-5xl mb-5 block group-hover:scale-110 transition-transform duration-500">{stat.prefix}</span>
              <h4 className="text-[#0F0A1E] font-black tracking-[0.2em] uppercase text-[10px] group-hover:text-[#7C3AED] transition-colors">{stat.title}</h4>
              <div className="mt-5 w-6 h-[2px] bg-gray-200 group-hover:w-12 group-hover:bg-[#7C3AED] transition-all duration-500"></div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
