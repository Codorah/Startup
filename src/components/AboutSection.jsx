import { useLanguage } from '../context/LanguageContext';
import { CODORAH_TRANSLATIONS } from '../data/codorah';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const { lang } = useLanguage();
  const { about } = CODORAH_TRANSLATIONS[lang];

  return (
    <section id="about" className="py-32 px-8 bg-codorah-black relative overflow-hidden">
      {/* Decorative background image with parallax/glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-full opacity-20 pointer-events-none z-0">
        <motion.img 
          src="/assets/bg/cyber_tech.png" 
          alt="Cyber Tech Background" 
          className="w-full h-full object-cover mix-blend-screen grayscale"
          initial={{ scale: 1.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-codorah-black via-transparent to-codorah-black"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-codorah-neonViolet opacity-50"></div>
            <span className="text-codorah-neonViolet text-[10px] font-mono tracking-[0.4em] uppercase opacity-80 animate-pulse">01 // {lang === 'FR' ? 'Notre Histoire' : 'Our Story'}</span>
          </div>
          
          <h2 className="text-4xl md:text-8xl font-black text-white mb-8 leading-tight tracking-tighter uppercase italic">
            {about.title}
          </h2>
          
          <p className="text-gray-400 text-xl leading-relaxed mb-10 max-w-3xl font-light">
            {about.description}
          </p>
          
          <div className="p-8 bg-gradient-to-r from-codorah-neonViolet/10 to-transparent border-l-4 border-codorah-neonViolet rounded-r-xl backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <p className="text-gray-200 italic text-lg font-medium leading-relaxed relative z-10">
              " {about.vision} "
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {about.stats?.map((stat, i) => (
            <div 
              key={i} 
              className={`p-10 border border-white/5 bg-[#1A0B2E]/40 backdrop-blur-xl rounded-2xl flex flex-col items-center justify-center text-center group hover:border-codorah-neonViolet/50 transition-all duration-500 ${i === 2 ? 'sm:col-span-2' : ''}`}
            >
              <span className="text-6xl mb-6 block group-hover:scale-125 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]">{stat.prefix}</span>
              <h4 className="text-white font-bold tracking-[0.2em] uppercase text-[10px] opacity-60 group-hover:text-codorah-gold group-hover:opacity-100 transition-all">{stat.title}</h4>
              <div className="mt-4 w-8 h-[2px] bg-white/10 group-hover:w-full group-hover:bg-codorah-neonViolet transition-all duration-500"></div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
