"use client";
import { useLanguage } from '../context/LanguageContext';
import { CODORAH_TRANSLATIONS } from '../data/codorah';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const { lang } = useLanguage();
  const { contact } = CODORAH_TRANSLATIONS[lang];

  return (
    <section id="contact" className="py-32 px-8 bg-codorah-black relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-codorah-neonViolet/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-codorah-neonViolet text-[10px] font-mono tracking-[0.5em] uppercase mb-4 block animate-pulse">
              08 // {lang === 'FR' ? 'Initialisation' : 'Get in Touch'}
            </span>
            <h2 className="text-4xl md:text-8xl font-black text-white mb-8 tracking-tighter italic uppercase">
              {contact.title?.split(' ').map((word, i) => (
                <span key={i} className={i % 2 !== 0 ? 'text-codorah-neonViolet' : ''}>{word} </span>
              ))}
            </h2>
            <p className="text-gray-400 text-xl mb-12 font-light leading-relaxed max-w-md">
              {contact.desc}
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-codorah-gold transition-colors shadow-lg">
                  <Mail className="text-codorah-gold" size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-mono tracking-widest uppercase mb-1">Email</p>
                  <p className="text-white font-bold text-lg">codorah@hotmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-codorah-neonViolet transition-colors shadow-lg">
                  <Phone className="text-codorah-neonViolet" size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-mono tracking-widest uppercase mb-1">WhatsApp</p>
                  <p className="text-white font-bold text-lg">+228 71 67 65 25</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white transition-colors shadow-lg">
                  <MapPin className="text-gray-400" size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-mono tracking-widest uppercase mb-1">Location</p>
                  <p className="text-white font-bold text-lg">Lomé, Togo 🇹🇬</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1A0B2E]/20 backdrop-blur-xl p-10 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-codorah-neonViolet/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] text-gray-500 font-mono tracking-widest uppercase pl-2">{lang === 'FR' ? 'Nom' : 'Name'}</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-codorah-neonViolet outline-none transition-all placeholder:text-white/10" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] text-gray-500 font-mono tracking-widest uppercase pl-2">Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-codorah-neonViolet outline-none transition-all placeholder:text-white/10" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] text-gray-500 font-mono tracking-widest uppercase pl-2">{lang === 'FR' ? 'Objet' : 'Subject'}</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-codorah-neonViolet outline-none transition-all placeholder:text-white/10" placeholder={lang === 'FR' ? 'Innovation I.A' : 'A.I Innovation'} />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] text-gray-500 font-mono tracking-widest uppercase pl-2">Message</label>
                <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-codorah-neonViolet outline-none transition-all placeholder:text-white/10" placeholder={lang === 'FR' ? 'Parlez-nous de votre projet...' : 'Tell us about your project...'}></textarea>
              </div>
              <button className="w-full bg-codorah-neonViolet text-white font-black py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-opacity-80 transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:scale-[1.02] active:scale-[0.98] uppercase tracking-[0.2em] text-xs">
                {lang === 'FR' ? 'Initialiser l\'envoi' : 'Initialize Send'} <Send size={16} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
