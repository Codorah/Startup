"use client";
import { useLanguage } from '../context/LanguageContext';
import { CODORAH_TRANSLATIONS } from '../data/codorah';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const { lang } = useLanguage();
  const { contact } = CODORAH_TRANSLATIONS[lang] || CODORAH_TRANSLATIONS.EN;

  return (
    <section id="contact" className="py-32 px-8 bg-[#F8F7FF] relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#7C3AED]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#7C3AED] text-[10px] font-mono tracking-[0.5em] uppercase mb-4 block">
              07 // {lang === 'FR' ? 'Initialisation' : 'Get in Touch'}
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-[#0F0A1E] mb-8 tracking-tighter italic uppercase font-heading leading-tight">
              {contact.title?.split(' ').map((word, i) => (
                <span key={i} className={i % 3 === 2 ? 'text-[#7C3AED]' : ''}>{word} </span>
              ))}
            </h2>
            <p className="text-[#6B7280] text-xl mb-12 font-light leading-relaxed max-w-md">
              {contact.desc}
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email', value: 'codorah@hotmail.com', color: '#7C3AED' },
                { icon: Phone, label: 'WhatsApp', value: '+228 71 67 65 25', color: '#059669' },
                { icon: MapPin, label: 'Location', value: 'Lomé, Togo 🇹🇬', color: '#D97706' },
              ].map(({ icon: Icon, label, value, color }) => (
                <div key={label} className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center shadow-sm group-hover:border-gray-200 group-hover:shadow-md transition-all">
                    <Icon size={20} style={{ color }} />
                  </div>
                  <div>
                    <p className="text-[9px] text-[#6B7280] font-mono tracking-widest uppercase mb-0.5">{label}</p>
                    <p className="text-[#0F0A1E] font-bold text-base">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl border border-gray-100 shadow-[0_10px_60px_rgba(0,0,0,0.04)] relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#7C3AED] rounded-t-3xl"></div>

            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[9px] text-[#6B7280] font-mono tracking-widest uppercase">{lang === 'FR' ? 'Nom' : 'Name'}</label>
                  <input
                    type="text"
                    className="w-full bg-[#F8F7FF] border border-gray-200 rounded-xl px-4 py-3 text-[#0F0A1E] focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10 outline-none transition-all placeholder:text-gray-400 text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[9px] text-[#6B7280] font-mono tracking-widest uppercase">Email</label>
                  <input
                    type="email"
                    className="w-full bg-[#F8F7FF] border border-gray-200 rounded-xl px-4 py-3 text-[#0F0A1E] focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10 outline-none transition-all placeholder:text-gray-400 text-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[9px] text-[#6B7280] font-mono tracking-widest uppercase">{lang === 'FR' ? 'Objet' : 'Subject'}</label>
                <input
                  type="text"
                  className="w-full bg-[#F8F7FF] border border-gray-200 rounded-xl px-4 py-3 text-[#0F0A1E] focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10 outline-none transition-all placeholder:text-gray-400 text-sm"
                  placeholder={lang === 'FR' ? 'Création de site web...' : 'Website creation...'}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[9px] text-[#6B7280] font-mono tracking-widest uppercase">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-[#F8F7FF] border border-gray-200 rounded-xl px-4 py-3 text-[#0F0A1E] focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10 outline-none transition-all placeholder:text-gray-400 text-sm resize-none"
                  placeholder={lang === 'FR' ? 'Parlez-nous de votre projet...' : 'Tell us about your project...'}
                />
              </div>
              <button className="w-full bg-[#7C3AED] text-white font-black py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-[#6D28D9] hover:shadow-[0_10px_40px_rgba(124,58,237,0.3)] transition-all duration-300 uppercase tracking-[0.2em] text-xs">
                {lang === 'FR' ? 'Envoyer le Message' : 'Send Message'}
                <Send size={16} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
