"use client";
import { useLanguage } from '../context/LanguageContext';
import { CODORAH_TRANSLATIONS } from '../data/codorah';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { TiltCard } from './TiltCard';

export default function ServicesGrid({ limit }) {
  const { lang } = useLanguage();
  const { services } = CODORAH_TRANSLATIONS[lang];
  const displayedServices = limit ? services.slice(0, limit) : services;

  return (
    <section id="services" className="py-24 px-8 bg-[#0a0a0f] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-codorah-neonViolet text-xs font-mono tracking-[0.5em] uppercase mb-4 block opacity-80 animate-pulse">
            03 // {lang === 'FR' ? 'Notre Moteur' : 'Our Engine'}
          </span>
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase italic">
            Solutions <span className="text-codorah-neonViolet italic">Impact</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service, i) => {
            const IconComponent = LucideIcons[service.icon] || LucideIcons.CheckCircle;
            
            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="h-full perspective-1000"
              >
                <TiltCard className="h-full w-full block">
                  <div className="p-8 border border-white/5 bg-codorah-black hover:border-codorah-neonViolet transition-all group flex flex-col h-full rounded-md relative overflow-hidden shadow-lg hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.5)]">
                    
                    {/* Animated Hover Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-codorah-neonViolet/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                    <div className="h-14 w-14 rounded-full bg-[#1A0B2E] border border-white/5 text-codorah-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10 shadow-[0_0_15px_rgba(255,215,0,0.1)] group-hover:shadow-[0_0_20px_rgba(255,215,0,0.4)]">
                      <IconComponent size={28} className="group-hover:rotate-12 transition-transform duration-500" />
                    </div>
                    {service.id === 'ia-gen' && (
                      <div className="absolute top-8 right-8 bg-[#8B5CF6] text-white px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] z-20 shadow-[0_0_20px_rgba(139,92,246,0.6)] flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></div>
                        {lang === 'FR' ? 'Certifiant' : 'Certified'}
                      </div>
                    )}
                    <h3 className="text-2xl font-black text-white mb-4 relative z-10 uppercase tracking-tight">{service.title}</h3>
                    <p className="text-gray-400 mb-8 flex-grow relative z-10 leading-relaxed font-light">{service.desc}</p>
                    
                    <ul className="space-y-3 mt-auto relative z-10">
                      {service.features.map((feature, j) => (
                        <li key={j} className="flex items-center text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                          <LucideIcons.Check size={14} className="text-codorah-neonViolet mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
