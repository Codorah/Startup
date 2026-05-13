"use client";
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const NAV_ITEMS = {
  FR: [
    { id: 'accueil', label: 'Start' },
    { id: 'about', label: 'Origine' },
    { id: 'vision', label: 'Vision' },
    { id: 'services', label: 'Services' },
    { id: 'process', label: 'Process' },
    { id: 'equipe', label: 'Équipe' },
    { id: 'contact', label: 'Contact' },
  ],
  EN: [
    { id: 'accueil', label: 'Start' },
    { id: 'about', label: 'About' },
    { id: 'vision', label: 'Vision' },
    { id: 'services', label: 'Services' },
    { id: 'process', label: 'Process' },
    { id: 'equipe', label: 'Team' },
    { id: 'contact', label: 'Contact' },
  ],
  ES: [
    { id: 'accueil', label: 'Inicio' },
    { id: 'about', label: 'Sobre' },
    { id: 'vision', label: 'Visión' },
    { id: 'services', label: 'Servicios' },
    { id: 'process', label: 'Proceso' },
    { id: 'equipe', label: 'Equipo' },
    { id: 'contact', label: 'Contacto' },
  ],
  ZH: [
    { id: 'accueil', label: '开始' },
    { id: 'about', label: '关于' },
    { id: 'vision', label: '愿景' },
    { id: 'services', label: '服务' },
    { id: 'process', label: '流程' },
    { id: 'equipe', label: '团队' },
    { id: 'contact', label: '联系' },
  ]
};

export default function SideNav() {
  const { lang } = useLanguage();
  const [activeSection, setActiveSection] = useState('accueil');
  const items = NAV_ITEMS[lang] || NAV_ITEMS.EN;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-[40] hidden lg:flex flex-col gap-6 items-end">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollTo(item.id)}
          className="group flex items-center gap-3 transition-all duration-500 outline-none"
        >
          <AnimatePresence>
            {activeSection === item.id && (
              <motion.span
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 16 }}
                className="text-[9px] font-mono tracking-[0.2em] text-[#7C3AED] uppercase font-bold"
              >
                {item.label}
              </motion.span>
            )}
          </AnimatePresence>
          <div
            className={`w-1 rounded-full transition-all duration-500 ${
              activeSection === item.id
                ? 'h-10 bg-[#7C3AED] shadow-[0_0_10px_rgba(124,58,237,0.4)]'
                : 'h-5 bg-gray-300 group-hover:bg-gray-400'
            }`}
          />
        </button>
      ))}
      <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gray-100 -z-10"></div>
    </div>
  );
}
