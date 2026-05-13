"use client";
import { useLanguage } from '../context/LanguageContext';
import { CODORAH_TRANSLATIONS } from '../data/codorah';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

const SERVICE_GRADIENTS = [
  { from: '#7C3AED', to: '#A855F7', shadow: 'rgba(124,58,237,0.15)' },
  { from: '#2563EB', to: '#7C3AED', shadow: 'rgba(37,99,235,0.15)' },
  { from: '#059669', to: '#7C3AED', shadow: 'rgba(5,150,105,0.15)' },
];

export default function ServicesGrid({ limit }) {
  const { lang } = useLanguage();
  const { services = [] } = CODORAH_TRANSLATIONS[lang] || CODORAH_TRANSLATIONS.EN;
  const displayedServices = limit ? services.slice(0, limit) : services;

  return (
    <section id="services" className="py-24 px-8 bg-white relative overflow-hidden">
      {/* Subtle decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#7C3AED]/4 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#A855F7]/4 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#7C3AED] text-xs font-mono tracking-[0.5em] uppercase mb-4 block opacity-80">
            03 // {lang === 'FR' ? 'Ce Qu\'on Fait' : 'What We Do'}
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-[#0F0A1E] tracking-tighter uppercase italic font-heading">
            Nos <span className="text-[#7C3AED]">Services</span>
          </h2>
          <p className="text-[#6B7280] mt-6 max-w-xl mx-auto text-lg font-light leading-relaxed">
            {lang === 'FR'
              ? 'Sites web, applications, IA & formations — des solutions concrètes pour l\'entrepreneur africain.'
              : 'Websites, apps, AI & training — concrete solutions for the African entrepreneur.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service, i) => {
            const IconComponent = LucideIcons[service.icon] || LucideIcons.CheckCircle;
            const grad = SERVICE_GRADIENTS[i % SERVICE_GRADIENTS.length];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: 'easeOut' }}
                className="group flex flex-col bg-white border border-gray-100 rounded-3xl p-10 hover:border-[#7C3AED]/30 transition-all duration-500 hover:shadow-[0_20px_60px_-10px_rgba(124,58,237,0.12)] relative overflow-hidden cursor-pointer"
              >
                {/* Gradient accent on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"
                  style={{ background: `linear-gradient(135deg, ${grad.from}06 0%, transparent 60%)` }}
                />

                {/* Icon */}
                <div
                  className="h-16 w-16 rounded-2xl flex items-center justify-center mb-10 relative z-10 transition-transform duration-500 group-hover:scale-110"
                  style={{ background: `linear-gradient(135deg, ${grad.from}15, ${grad.to}10)`, border: `1px solid ${grad.from}20` }}
                >
                  <IconComponent size={28} style={{ color: grad.from }} />
                </div>

                <h3 className="text-2xl font-black text-[#0F0A1E] mb-4 relative z-10 uppercase tracking-tight font-heading group-hover:text-[#7C3AED] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#6B7280] mb-10 flex-grow relative z-10 leading-relaxed text-sm">
                  {service.desc}
                </p>

                <ul className="space-y-3 mt-auto relative z-10 border-t border-gray-100 pt-8">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center text-xs text-[#6B7280] font-medium gap-3">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: grad.from }} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Bottom accent bar */}
                <div
                  className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-700 rounded-b-3xl"
                  style={{ background: `linear-gradient(to right, ${grad.from}, ${grad.to})` }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-[#7C3AED] text-white px-10 py-4 rounded-xl font-black uppercase tracking-[0.2em] text-sm hover:bg-[#6D28D9] hover:shadow-[0_10px_40px_rgba(124,58,237,0.3)] transition-all duration-300"
          >
            {lang === 'FR' ? 'Démarrer un Projet' : 'Start a Project'}
            <LucideIcons.ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
