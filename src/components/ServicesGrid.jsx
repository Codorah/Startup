/**
 * @file ServicesGrid.jsx
 * @description Displays Codorah's service offerings in a responsive grid.
 * Each card is clickable and opens a modal with a pre-filled WhatsApp booking link,
 * allowing visitors to instantly schedule a consultation for the selected service.
 *
 * @config WHATSAPP_NUMBER — Set this to Codorah's WhatsApp number (international format, no '+').
 */
"use client";
import { useLanguage } from '../context/LanguageContext';
import { CODORAH_TRANSLATIONS } from '../data/codorah';
import { motion, AnimatePresence } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { useState } from 'react';


const WHATSAPP_NUMBER = "22871672565";

const SERVICE_GRADIENTS = [
  { from: '#7C3AED', to: '#A855F7', shadow: 'rgba(124,58,237,0.2)' },
  { from: '#2563EB', to: '#7C3AED', shadow: 'rgba(37,99,235,0.2)' },
  { from: '#059669', to: '#10B981', shadow: 'rgba(5,150,105,0.2)' },
  { from: '#DC2626', to: '#7C3AED', shadow: 'rgba(220,38,38,0.2)' },
  { from: '#D97706', to: '#7C3AED', shadow: 'rgba(217,119,6,0.2)' },
  { from: '#0891B2', to: '#7C3AED', shadow: 'rgba(8,145,178,0.2)' },
];

function ServiceModal({ service, grad, lang, onClose }) {
  if (!service) return null;
  const IconComponent = LucideIcons[service.icon] || LucideIcons.CheckCircle;
  const message = encodeURIComponent(
    lang === 'FR'
      ? `Bonjour Codorah 👋\n\nJe suis intéressé(e) par votre service *${service.title}*.\n\nJ'aimerais en discuter et prendre rendez-vous.\n\nMerci !`
      : `Hello Codorah 👋\n\nI'm interested in your service *${service.title}*.\n\nI'd like to discuss it and book an appointment.\n\nThank you!`
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          onClick={e => e.stopPropagation()}
          className="bg-white rounded-[2rem] w-full max-w-lg overflow-hidden shadow-2xl relative"
        >
          {/* Header gradient */}
          <div
            className="h-2 w-full"
            style={{ background: `linear-gradient(to right, ${grad.from}, ${grad.to})` }}
          />

          <div className="p-8">
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <LucideIcons.X size={18} />
            </button>

            {/* Icon + title */}
            <div className="flex items-center gap-5 mb-6">
              <div
                className="h-14 w-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: `linear-gradient(135deg, ${grad.from}20, ${grad.to}15)`, border: `1px solid ${grad.from}30` }}
              >
                <IconComponent size={26} style={{ color: grad.from }} />
              </div>
              <div>
                <p className="text-[10px] font-mono tracking-widest uppercase mb-1" style={{ color: grad.from }}>
                  {lang === 'FR' ? 'Service Sélectionné' : 'Selected Service'}
                </p>
                <h3 className="text-xl font-black text-[#0F0A1E] uppercase tracking-tight font-heading">
                  {service.title}
                </h3>
              </div>
            </div>

            {/* Description */}
            <p className="text-[#6B7280] text-sm leading-relaxed mb-6 border-l-2 pl-4" style={{ borderColor: grad.from + '40' }}>
              {service.desc}
            </p>

            {/* Features */}
            <ul className="grid grid-cols-2 gap-2 mb-8">
              {service.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-xs text-[#374151] font-medium">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: grad.from }} />
                  {f}
                </li>
              ))}
            </ul>

            {/* CTA WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl text-white font-black uppercase tracking-[0.2em] text-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              style={{ background: `linear-gradient(135deg, ${grad.from}, ${grad.to})`, boxShadow: `0 8px 30px ${grad.shadow}` }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {lang === 'FR' ? 'Prendre Rendez-vous via WhatsApp' : 'Book via WhatsApp'}
            </a>

            <p className="text-center text-[10px] text-gray-400 font-mono mt-4 tracking-wider">
              {lang === 'FR' ? 'Réponse en moins de 2h · Gratuit · Sans engagement' : 'Reply within 2h · Free · No commitment'}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function ServicesGrid({ limit }) {
  const { lang } = useLanguage();
  const { services = [] } = CODORAH_TRANSLATIONS[lang] || CODORAH_TRANSLATIONS.EN;
  const displayedServices = limit ? services.slice(0, limit) : services;
  const [selectedService, setSelectedService] = useState(null);
  const [selectedGrad, setSelectedGrad] = useState(null);

  const handleServiceClick = (service, grad) => {
    setSelectedService(service);
    setSelectedGrad(grad);
  };

  return (
    <>
      <section id="services" className="py-32 px-8 bg-white relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#7C3AED]/5 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#A855F7]/4 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-[#7C3AED] text-xs font-mono tracking-[0.5em] uppercase mb-4 block opacity-80">
              03 // {lang === 'FR' ? 'Ce Qu\'on Fait' : 'What We Do'}
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-[#0F0A1E] tracking-tighter uppercase italic font-heading">
              Nos <span className="text-[#7C3AED]">Services</span>
            </h2>
            <p className="text-[#6B7280] mt-6 max-w-lg mx-auto text-base font-light leading-relaxed">
              {lang === 'FR'
                ? 'Clique sur un service pour discuter avec nous directement sur WhatsApp 💬'
                : 'Click a service to discuss it with us directly on WhatsApp 💬'}
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedServices.map((service, i) => {
              const IconComponent = LucideIcons[service.icon] || LucideIcons.CheckCircle;
              const grad = SERVICE_GRADIENTS[i % SERVICE_GRADIENTS.length];

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: 'easeOut' }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  onClick={() => handleServiceClick(service, grad)}
                  className="group flex flex-col bg-white border border-gray-100 rounded-3xl p-8 hover:border-[#7C3AED]/25 transition-all duration-400 cursor-pointer relative overflow-hidden select-none"
                  style={{ '--shadow': grad.shadow }}
                >
                  {/* Hover gradient bg */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"
                    style={{ background: `linear-gradient(135deg, ${grad.from}08 0%, transparent 70%)` }}
                  />

                  {/* Bottom bar */}
                  <div
                    className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-600 rounded-b-3xl pointer-events-none"
                    style={{ background: `linear-gradient(to right, ${grad.from}, ${grad.to})` }}
                  />

                  {/* Icon */}
                  <div
                    className="h-14 w-14 rounded-2xl flex items-center justify-center mb-8 relative z-10 transition-all duration-400 group-hover:scale-110 group-hover:shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${grad.from}18, ${grad.to}10)`,
                      border: `1px solid ${grad.from}25`,
                    }}
                  >
                    <IconComponent size={26} style={{ color: grad.from }} />
                  </div>

                  <h3 className="text-lg font-black text-[#0F0A1E] mb-3 relative z-10 uppercase tracking-tight font-heading group-hover:text-[#7C3AED] transition-colors leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-[#6B7280] mb-8 flex-grow relative z-10 leading-relaxed text-sm">
                    {service.desc}
                  </p>

                  <ul className="space-y-2.5 mt-auto relative z-10 border-t border-gray-100 pt-6">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center text-xs text-[#6B7280] font-medium gap-2.5">
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: grad.from }} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Click hint */}
                  <div className="flex items-center gap-2 mt-6 relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="h-px flex-grow" style={{ background: grad.from + '30' }} />
                    <span className="text-[9px] font-mono uppercase tracking-widest" style={{ color: grad.from }}>
                      {lang === 'FR' ? 'Prendre RDV →' : 'Book →'}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-[#0F0A1E] text-white px-10 py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-[#7C3AED] hover:shadow-[0_10px_40px_rgba(124,58,237,0.3)] transition-all duration-300"
            >
              {lang === 'FR' ? 'Démarrer un Projet' : 'Start a Project'}
              <LucideIcons.ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          grad={selectedGrad}
          lang={lang}
          onClose={() => { setSelectedService(null); setSelectedGrad(null); }}
        />
      )}
    </>
  );
}
