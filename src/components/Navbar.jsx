"use client";
import { motion, useScroll, useSpring } from 'framer-motion';
import { useLanguage, languages } from '../context/LanguageContext';
import { useState } from 'react';

const NAV_LINKS = {
  FR: { home: 'Accueil', about: 'À Propos', services: 'Services', projects: 'Projets', team: 'L\'Équipe', contact: 'Contact' },
  EN: { home: 'Home', about: 'About', services: 'Services', projects: 'Projects', team: 'Core', contact: 'Contact' },
  ES: { home: 'Inicio', about: 'Sobre', services: 'Servicios', projects: 'Proyectos', team: 'Equipo', contact: 'Contacto' },
  ZH: { home: '首页', about: '关于', services: '服务', projects: '项目', team: '团队', contact: '联系' }
};

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const { lang, changeLanguage } = useLanguage();
  const [showLangs, setShowLangs] = useState(false);
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100, damping: 30, restDelta: 0.001
  });

  const currentNav = NAV_LINKS[lang];

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-codorah-neonViolet origin-left z-[70] shadow-[0_0_10px_#8B5CF6]"
        style={{ scaleX }}
      />
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-10 py-6 backdrop-blur-md border-b border-white/5 bg-[#050508]/50">
        <div className="text-2xl font-bold tracking-tighter text-[#FFD700] italic font-heading uppercase">CODORAH</div>
        
        <div className="hidden lg:flex gap-8 text-[10px] uppercase tracking-[0.3em] font-bold">
          <a href="#accueil" className="hover:text-codorah-gold transition-colors">{currentNav.home}</a>
          <a href="#about" className="hover:text-codorah-gold transition-colors">{currentNav.about}</a>
          <a href="#services" className="hover:text-codorah-gold transition-colors">{currentNav.services}</a>
          <a href="#projets" className="hover:text-codorah-gold transition-colors">{currentNav.projects}</a>
          <a href="#equipe" className="hover:text-codorah-gold transition-colors">{currentNav.team}</a>
        </div>

        <div className="flex items-center gap-6">
          {/* Language Switcher */}
          <div className="relative">
            <button 
              onClick={() => setShowLangs(!showLangs)}
              className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-[10px] font-mono hover:bg-white/10 transition-all"
            >
              {languages.find(l => l.code === lang)?.flag} {lang}
            </button>
            {showLangs && (
              <div className="absolute top-full right-0 mt-2 bg-[#0A0511] border border-white/10 rounded-xl overflow-hidden shadow-2xl z-[80] min-w-[120px]">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => { changeLanguage(l.code); setShowLangs(false); }}
                    className={`w-full flex items-center gap-3 px-4 py-2 text-[10px] hover:bg-white/5 transition-all ${lang === l.code ? 'text-codorah-gold' : 'text-gray-400'}`}
                  >
                    <span>{l.flag}</span>
                    <span className="font-mono">{l.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <a href="#contact" className="bg-codorah-gold text-black px-6 py-2 text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform hover:shadow-[0_0_20px_rgba(255,215,0,0.4)]">
            {currentNav.contact}
          </a>
        </div>
      </nav>
    </>
  );
}
