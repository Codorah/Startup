"use client";
import { useLanguage } from '../context/LanguageContext';
import { FileText, GitBranch, ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TeamSection() {
  const { lang } = useLanguage();
  
  const title = lang === 'FR' ? 'La Fondatrice' : 'The Founder';
  
  return (
    <section id="equipe" className="py-32 px-8 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7C3AED]/4 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:items-center text-center justify-between mb-16 gap-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#7C3AED] text-[10px] font-mono tracking-[0.4em] uppercase mb-4 block">
              06 // {title}
            </span>
            <h3 className="text-4xl md:text-6xl font-black text-[#0F0A1E] tracking-tighter uppercase italic font-heading">
              Elodie <span className="text-[#7C3AED]">Atana</span>
            </h3>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group bg-white border border-gray-100 p-8 md:p-12 rounded-[2.5rem] hover:border-[#7C3AED]/30 hover:shadow-[0_20px_60px_rgba(124,58,237,0.1)] transition-all duration-500 flex flex-col md:flex-row relative overflow-hidden gap-10 items-center"
        >
          {/* Top gradient accent */}
          <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-[#7C3AED] to-[#A855F7] group-hover:w-full transition-all duration-700 rounded-t-3xl"></div>

          {/* Photo */}
          <div className="relative flex-shrink-0">
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-3xl bg-[#F8F7FF] border border-gray-200 overflow-hidden group-hover:border-[#7C3AED]/40 transition-all duration-500 shadow-xl">
              <img
                src="/assets/team/elodie.png"
                alt="Elodie Atana"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#7C3AED] text-white text-[10px] font-mono font-bold px-4 py-2 rounded-xl shadow-lg transform rotate-3 group-hover:-rotate-3 transition-transform">
              CEO & FOUNDER
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col flex-grow text-left">
            <p className="text-[#7C3AED] text-[10px] font-mono tracking-widest uppercase mb-3 opacity-80">
              [Architecte IA & Full Stack Dev]
            </p>
            <h4 className="text-2xl font-black text-[#0F0A1E] tracking-tight leading-none mb-4 group-hover:text-[#7C3AED] transition-colors uppercase">
              Visionnaire de l'Innovation
            </h4>
            
            <p className="text-[#6B7280] text-sm mb-6 leading-relaxed">
              {lang === 'FR' 
                ? "Serial entrepreneure et architecte de l'innovation, Elodie fusionne l'IA générative et le développement moderne pour créer des solutions à fort impact social. Elle dirige Codorah avec une vision claire : rendre la technologie de pointe accessible et adaptée aux réalités africaines."
                : "Serial entrepreneur and innovation architect, Elodie merges generative AI and modern development to create high social impact solutions. She leads Codorah with a clear vision: making cutting-edge technology accessible and tailored to African realities."}
            </p>

            {/* Links */}
            <div className="flex flex-wrap gap-4 items-center pt-6 border-t border-gray-100 mt-auto">
              <a 
                href="https://portfolio-js-elodie.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 bg-[#0F0A1E] text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#7C3AED] transition-colors"
              >
                {lang === 'FR' ? 'Voir le Portfolio' : 'View Portfolio'} <ArrowRight size={14} />
              </a>
              
              <a href="https://portfolio-js-elodie.vercel.app/mon-cv.pdf" target="_blank" rel="noopener noreferrer" className="text-[#6B7280] hover:text-[#7C3AED] transition-colors flex items-center gap-2 text-[10px] uppercase font-bold tracking-[0.2em] px-4 hidden sm:flex">
                <FileText size={14} /> CV
              </a>
              
              <div className="flex gap-3 ml-auto">
                <a href="https://linkedin.com/in/elodieatana" target="_blank" rel="noopener noreferrer" className="text-[#6B7280] hover:text-[#7C3AED] transition-colors p-2.5 bg-gray-50 rounded-xl hover:bg-[#7C3AED]/10">
                  <ExternalLink size={16} />
                </a>
                <a href="https://github.com/elodieatana" target="_blank" rel="noopener noreferrer" className="text-[#6B7280] hover:text-[#7C3AED] transition-colors p-2.5 bg-gray-50 rounded-xl hover:bg-[#7C3AED]/10">
                  <GitBranch size={16} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
