"use client";
import { useLanguage } from '../../context/LanguageContext';
import { CODORAH_TRANSLATIONS } from '../../data/codorah';
import { Link as LinkIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TeamPage() {
  const { lang } = useLanguage();
  const { team } = CODORAH_TRANSLATIONS[lang] || CODORAH_TRANSLATIONS.EN;

  return (
    <section className="pt-40 pb-24 px-8 bg-[#F8F7FF] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-[#7C3AED] text-[10px] font-mono tracking-[0.5em] uppercase mb-4 block">
            Codorah // Core Team
          </span>
          <h1 className="text-5xl md:text-8xl font-black mb-4 border-l-4 border-[#7C3AED] pl-6 uppercase italic text-[#0F0A1E] tracking-tighter">
            {lang === 'FR' ? "L'Unité d'Élite" : "The Elite Unit"}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white border border-gray-100 p-8 hover:border-[#7C3AED]/30 hover:shadow-[0_15px_40px_rgba(124,58,237,0.1)] transition-all duration-500 group rounded-3xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-[#7C3AED] to-[#A855F7] group-hover:w-full transition-all duration-700 rounded-t-3xl"></div>
              <div className="w-20 h-20 rounded-2xl overflow-hidden mb-6 border border-gray-200 group-hover:border-[#7C3AED]/40 transition-all">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <h2 className="text-xl font-black text-[#0F0A1E] uppercase italic tracking-tight mb-1 group-hover:text-[#7C3AED] transition-colors">{member.name}</h2>
              <p className="text-[#7C3AED] text-[9px] font-mono mb-5 uppercase tracking-widest opacity-70">[{member.role}]</p>
              <p className="text-[#6B7280] text-sm mb-8 leading-relaxed">{member.bio}</p>
              <div className="pt-5 border-t border-gray-100 flex justify-between items-center">
                <span className="text-[9px] text-[#9CA3AF] font-mono uppercase tracking-[0.2em]">{member.specialty}</span>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#9CA3AF] hover:text-[#7C3AED] transition-colors p-2 hover:bg-[#7C3AED]/10 rounded-xl">
                  <LinkIcon size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
