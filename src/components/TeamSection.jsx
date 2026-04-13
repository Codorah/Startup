"use client";
import { useLanguage } from '../context/LanguageContext';
import { CODORAH_TRANSLATIONS } from '../data/codorah';
import { FileText, Link as LinkIcon, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { TiltCard } from './TiltCard';

export default function TeamSection() {
  const { lang } = useLanguage();
  const { team = [] } = CODORAH_TRANSLATIONS[lang] || CODORAH_TRANSLATIONS.EN;

  return (
    <section id="equipe" className="py-32 px-8 bg-[#050508] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-codorah-neonViolet/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-codorah-neonViolet text-[10px] font-mono tracking-[0.4em] uppercase mb-4 block animate-pulse">
               07 // {lang === 'FR' ? 'L\'Équipe Core' : 'The Core Team'}
            </span>
            <h3 className="text-4xl md:text-8xl font-black text-white tracking-tighter uppercase italic">
              Elite <span className="text-codorah-neonViolet">Architects</span>
            </h3>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {team.map((member, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="h-full perspective-1000"
            >
              <TiltCard className="h-full w-full">
                <div className="group relative bg-[#1A0B2E]/20 border border-white/5 p-8 hover:border-codorah-neonViolet/50 transition-all duration-500 rounded-2xl h-full flex flex-col shadow-2xl backdrop-blur-sm overflow-hidden">
                  
                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-codorah-neonViolet/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  {/* Photo Container */}
                  <div className="relative mb-8">
                    <div className="w-24 h-24 rounded-2xl bg-codorah-black border-2 border-white/10 overflow-hidden relative group-hover:border-codorah-neonViolet/50 transition-all duration-500 shadow-xl">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-[10px] text-white/20 font-mono italic">CORE_SRC</div>';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-codorah-black/80 to-transparent"></div>
                    </div>
                    
                    {/* Index Number */}
                    <div className="absolute -top-4 -right-2 text-4xl font-black text-white/5 font-mono italic">
                      0{i + 1}
                    </div>
                  </div>

                  {/* Header */}
                  <div className="mb-6">
                    <p className="text-codorah-neonViolet text-[10px] font-mono tracking-widest uppercase mb-2 opacity-60">[{member.role}]</p>
                    <h4 className="text-3xl font-black text-white tracking-tight leading-none mb-4 group-hover:text-codorah-gold transition-colors uppercase italic">
                      {member.name}
                    </h4>
                    <div className="flex items-center gap-2">
                      <div className="h-[2px] w-8 bg-codorah-neonViolet opacity-50"></div>
                      <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">{member.specialty}</span>
                    </div>
                  </div>

                  {/* Bio (Short) */}
                  <p className="text-gray-400 text-sm mb-10 leading-relaxed font-light flex-grow">
                    {member.bio}
                  </p>

                  {/* Extended Bio Overlay (on Hover) */}
                  <div className="absolute inset-0 bg-[#0A0511] p-8 flex flex-col justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] z-10">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-codorah-gold via-codorah-neonViolet to-codorah-gold"></div>
                    <span className="text-codorah-neonViolet text-[10px] font-mono tracking-[0.3em] uppercase mb-4 opacity-70">Focus Expertise</span>
                    <h5 className="text-white text-lg font-bold mb-6 tracking-tight leading-snug uppercase italic">
                       {member.role.split('&')[0]} <span className="text-codorah-gold not-italic">Strategist</span>
                    </h5>
                    <p className="text-gray-300 text-sm leading-relaxed font-light italic opacity-90">
                      "{member.extendedBio}"
                    </p>
                    <div className="mt-8 flex items-center gap-4">
                      <div className="h-[1px] flex-grow bg-white/10"></div>
                      <div className="w-2 h-2 rounded-full bg-codorah-neonViolet animate-ping"></div>
                    </div>
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-6 items-center pt-6 border-t border-white/5 mt-auto relative z-20">
                    {member.cv && member.cv !== "#" && (
                      <a href={member.cv} target="_blank" rel="noopener noreferrer" className="text-white hover:text-codorah-gold transition-all flex items-center gap-2 text-[10px] uppercase font-bold tracking-[0.2em] group/link">
                        <FileText size={14} className="group-hover/link:animate-pulse" /> {lang === 'FR' ? 'Voir CV' : 'View CV'}
                      </a>
                    )}
                    <div className="flex gap-4 ml-auto">
                      {member.linkedin && member.linkedin !== "#" && (
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-codorah-neonViolet transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10">
                          <LinkIcon size={16} />
                        </a>
                      )}
                      <a href="#" className="text-gray-600 hover:text-codorah-gold transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10">
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
