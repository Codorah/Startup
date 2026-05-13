"use client";
import { useLanguage } from '../context/LanguageContext';
import { CODORAH_TRANSLATIONS } from '../data/codorah';
import { FileText, Link as LinkIcon, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TeamSection() {
  const { lang } = useLanguage();
  const { team = [] } = CODORAH_TRANSLATIONS[lang] || CODORAH_TRANSLATIONS.EN;

  return (
    <section id="equipe" className="py-32 px-8 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7C3AED]/4 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#7C3AED] text-[10px] font-mono tracking-[0.4em] uppercase mb-4 block">
              06 // {lang === 'FR' ? 'L\'Équipe Core' : 'The Core Team'}
            </span>
            <h3 className="text-4xl md:text-7xl font-black text-[#0F0A1E] tracking-tighter uppercase italic font-heading">
              Elite <span className="text-[#7C3AED]">Architects</span>
            </h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-white border border-gray-100 p-8 rounded-3xl hover:border-[#7C3AED]/30 hover:shadow-[0_20px_60px_rgba(124,58,237,0.1)] transition-all duration-500 flex flex-col relative overflow-hidden"
            >
              {/* Top gradient accent */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-[#7C3AED] to-[#A855F7] group-hover:w-full transition-all duration-700 rounded-t-3xl"></div>

              {/* Photo */}
              <div className="relative mb-8">
                <div className="w-20 h-20 rounded-2xl bg-[#F8F7FF] border border-gray-200 overflow-hidden group-hover:border-[#7C3AED]/40 transition-all duration-500">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-3xl font-black text-[#7C3AED]/30">${member.name[0]}</div>`;
                    }}
                  />
                </div>
                <div className="absolute -top-3 -right-2 text-4xl font-black text-gray-100 font-mono italic">
                  0{i + 1}
                </div>
              </div>

              {/* Header */}
              <div className="mb-5">
                <p className="text-[#7C3AED] text-[9px] font-mono tracking-widest uppercase mb-2 opacity-70">[{member.role}]</p>
                <h4 className="text-xl font-black text-[#0F0A1E] tracking-tight leading-none mb-3 group-hover:text-[#7C3AED] transition-colors uppercase">
                  {member.name}
                </h4>
                <div className="flex items-center gap-2">
                  <div className="h-[2px] w-8 bg-[#7C3AED]/40"></div>
                  <span className="text-[9px] text-[#6B7280] font-mono tracking-widest uppercase">{member.specialty}</span>
                </div>
              </div>

              {/* Bio */}
              <p className="text-[#6B7280] text-sm mb-8 leading-relaxed flex-grow">{member.bio}</p>

              {/* Links */}
              <div className="flex gap-4 items-center pt-5 border-t border-gray-100 mt-auto">
                {member.cv && member.cv !== "#" && (
                  <a href={member.cv} target="_blank" rel="noopener noreferrer" className="text-[#6B7280] hover:text-[#7C3AED] transition-colors flex items-center gap-2 text-[9px] uppercase font-bold tracking-[0.2em]">
                    <FileText size={13} /> {lang === 'FR' ? 'CV' : 'CV'}
                  </a>
                )}
                <div className="flex gap-3 ml-auto">
                  {member.linkedin && member.linkedin !== "#" && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#6B7280] hover:text-[#7C3AED] transition-colors p-2 bg-gray-50 rounded-xl hover:bg-[#7C3AED]/10">
                      <LinkIcon size={14} />
                    </a>
                  )}
                  <a href="#" className="text-[#6B7280] hover:text-[#7C3AED] transition-colors p-2 bg-gray-50 rounded-xl hover:bg-[#7C3AED]/10">
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
