"use client";
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const NAV_ITEMS = {
  FR: [
    { id: 'accueil', label: 'Start' },
    { id: 'about', label: 'Origine' },
    { id: 'vision', label: 'Momentum' },
    { id: 'services', label: 'Solutions' },
    { id: 'process', label: 'Cycle' },
    { id: 'projets', label: 'Logic' },
    { id: 'equipe', label: 'Elite' },
    { id: 'contact', label: 'Init' },
  ],
  EN: [
    { id: 'accueil', label: 'Start' },
    { id: 'about', label: 'Origin' },
    { id: 'vision', label: 'Momentum' },
    { id: 'services', label: 'Solutions' },
    { id: 'process', label: 'Cycle' },
    { id: 'projets', label: 'Logic' },
    { id: 'equipe', label: 'Elite' },
    { id: 'contact', label: 'Init' },
  ],
  ES: [
    { id: 'accueil', label: 'Inicio' },
    { id: 'about', label: 'Origen' },
    { id: 'vision', label: 'Impulso' },
    { id: 'services', label: 'Servicios' },
    { id: 'process', label: 'Ciclo' },
    { id: 'projets', label: 'Proyectos' },
    { id: 'equipe', label: 'Elite' },
    { id: 'contact', label: 'Init' },
  ],
  ZH: [
    { id: 'accueil', label: '开始' },
    { id: 'about', label: '起源' },
    { id: 'vision', label: '动力' },
    { id: 'services', label: '解决方案' },
    { id: 'process', label: '阶段' },
    { id: 'projets', label: '项目' },
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
      { threshold: 0.5 }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-10 top-1/2 -translate-y-1/2 z-[40] hidden lg:flex flex-col gap-8 items-end">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollTo(item.id)}
          className="group flex items-center gap-4 transition-all duration-500 outline-none"
        >
          <AnimatePresence>
            {activeSection === item.id && (
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="text-[10px] font-mono tracking-[0.2em] text-codorah-gold uppercase font-bold"
              >
                {item.label}
              </motion.span>
            )}
          </AnimatePresence>
          <div className="relative">
            <div 
              className={`w-1 h-8 transition-all duration-700 ${
                activeSection === item.id 
                ? 'bg-codorah-gold h-12 shadow-[0_0_15px_rgba(255,215,0,0.5)]' 
                : 'bg-white/10 group-hover:bg-white/30'
              }`}
            />
          </div>
        </button>
      ))}
      <div className="absolute right-[-2px] top-0 bottom-0 w-[1px] bg-white/5 -z-10"></div>
    </div>
  );
}
