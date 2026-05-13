"use client";
import { motion, useScroll, useSpring } from 'framer-motion';
import { useLanguage, languages } from '../context/LanguageContext';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = {
  FR: { home: 'Accueil', about: 'À Propos', services: 'Services', team: 'L\'Équipe', contact: 'Contact' },
  EN: { home: 'Home', about: 'About', services: 'Services', team: 'Team', contact: 'Contact' },
  ES: { home: 'Inicio', about: 'Sobre', services: 'Servicios', team: 'Equipo', contact: 'Contacto' },
  ZH: { home: '首页', about: '关于', services: '服务', team: '团队', contact: '联系' }
};

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const { lang, changeLanguage } = useLanguage();
  const [showLangs, setShowLangs] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100, damping: 30, restDelta: 0.001
  });

  const currentNav = NAV_LINKS[lang] || NAV_LINKS.EN;

  return (
    <>
      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#7C3AED] origin-left z-[70]"
        style={{ scaleX }}
      />

      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-10 py-5 backdrop-blur-md border-b border-black/5 bg-white/80 shadow-[0_1px_20px_rgba(0,0,0,0.04)]">
        {/* Logo */}
        <div className="text-xl font-black tracking-tighter text-[#7C3AED] italic font-heading uppercase">CODORAH</div>

        {/* Desktop nav */}
        <div className="hidden lg:flex gap-8 text-[10px] uppercase tracking-[0.3em] font-bold text-[#0F0A1E]/60">
          <a href="#accueil" className="hover:text-[#7C3AED] transition-colors">{currentNav.home}</a>
          <a href="#about" className="hover:text-[#7C3AED] transition-colors">{currentNav.about}</a>
          <a href="#services" className="hover:text-[#7C3AED] transition-colors">{currentNav.services}</a>
          <a href="#equipe" className="hover:text-[#7C3AED] transition-colors">{currentNav.team}</a>
        </div>

        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setShowLangs(!showLangs)}
              className="flex items-center gap-2 bg-gray-100 border border-gray-200 px-3 py-1.5 rounded-full text-[10px] font-mono hover:bg-gray-200 transition-all text-[#0F0A1E]"
            >
              {languages.find(l => l.code === lang)?.flag} {lang}
            </button>
            {showLangs && (
              <div className="absolute top-full right-0 mt-2 bg-white border border-gray-100 rounded-xl overflow-hidden shadow-xl z-[80] min-w-[130px]">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => { changeLanguage(l.code); setShowLangs(false); }}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-[10px] hover:bg-gray-50 transition-all ${lang === l.code ? 'text-[#7C3AED] font-bold' : 'text-[#6B7280]'}`}
                  >
                    <span>{l.flag}</span>
                    <span className="font-mono">{l.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Contact CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex bg-[#7C3AED] text-white px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#6D28D9] hover:shadow-[0_8px_30px_rgba(124,58,237,0.3)] transition-all duration-300"
          >
            {currentNav.contact}
          </a>

          {/* Mobile menu toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 rounded-xl border border-gray-200 text-[#0F0A1E]">
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed top-[65px] left-0 right-0 z-40 bg-white border-b border-gray-100 shadow-lg px-6 py-6 flex flex-col gap-5 lg:hidden">
          {[
            ['#accueil', currentNav.home],
            ['#about', currentNav.about],
            ['#services', currentNav.services],
            ['#equipe', currentNav.team],
            ['#contact', currentNav.contact],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-bold uppercase tracking-widest text-[#0F0A1E] hover:text-[#7C3AED] transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
