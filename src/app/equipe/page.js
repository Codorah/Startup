"use client";
import { useLanguage } from '../../context/LanguageContext';
import { CODORAH_TRANSLATIONS } from '../../data/codorah';
import { Link as LinkIcon } from 'lucide-react';

export default function TeamPage() {
  const { lang } = useLanguage();
  const { team } = CODORAH_TRANSLATIONS[lang] || CODORAH_TRANSLATIONS.EN;

  return (
    <section className="pt-40 pb-20 px-10 bg-codorah-black min-h-screen">
      <h1 className="text-5xl md:text-8xl font-black mb-16 border-l-8 border-codorah-neonViolet pl-6 uppercase italic text-white tracking-tighter">
        {lang === 'FR' ? "L'unité d'élite" : "The Elite Unit"}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {team.map((member) => (
          <div key={member.name} className="bg-[#1A0B2E]/20 backdrop-blur-xl p-8 border border-white/5 hover:border-codorah-neonViolet/50 transition-all group rounded-2xl shadow-2xl relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-codorah-neonViolet/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <div className="relative z-10">
                <h2 className="text-2xl font-black text-white uppercase italic tracking-tight">{member.name}</h2>
                <p className="text-codorah-neonViolet text-[10px] font-mono mb-6 uppercase tracking-widest">[{member.role}]</p>
                <p className="text-gray-400 text-sm mb-10 leading-relaxed font-light">{member.bio}</p>
                <div className="pt-6 border-t border-white/5 flex justify-between items-center">
                   <span className="text-[10px] text-gray-500 font-mono uppercase tracking-[0.2em]">{member.specialty}</span>
                   <a href={member.linkedin} target="_blank" className="text-gray-600 hover:text-codorah-gold transition-colors">
                     <LinkIcon size={20} />
                   </a>
                </div>
             </div>
          </div>
        ))}
      </div>
    </section>
  );
}
