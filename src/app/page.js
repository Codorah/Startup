"use client";
import dynamic from 'next/dynamic';
import TeamSection from '../components/TeamSection';
import AboutSection from '../components/AboutSection';
import VisionSection from '../components/VisionSection';
import ServicesGrid from '../components/ServicesGrid';
import ProcessSection from '../components/ProcessSection';
import PartnerMarquee from '../components/PartnersMarquee';
import ContactSection from '../components/ContactSection';
import TechMarquee from '../components/TechMarquee';
import ScrambleText from '../components/ScrambleText';
import SideNav from '../components/SideNav';
import { useLanguage } from '../context/LanguageContext';
import { CODORAH_TRANSLATIONS } from '../data/codorah';
import Magnetic from '../components/Magnetic';

const ThreeScene = dynamic(() => import('../components/ThreeScene'), { ssr: false });

export default function Home() {
  const { lang } = useLanguage();
  const { hero } = CODORAH_TRANSLATIONS[lang] || CODORAH_TRANSLATIONS.EN;

  return (
    <main className="relative bg-[#F8F7FF] overflow-x-hidden">
      <SideNav />

      {/* Hero Section */}
      <section id="accueil" className="min-h-screen w-full relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F8F7FF] via-[#EDE9FE] to-[#F8F7FF]">
        
        {/* Abstract background blobs */}
        <div className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full bg-[#7C3AED]/8 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-20 left-[5%] w-[400px] h-[400px] rounded-full bg-[#A855F7]/6 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full bg-[#7C3AED]/4 blur-[150px] pointer-events-none" />

        {/* Badge + Status — top left */}
        <div className="absolute top-28 left-10 z-[40] hidden lg:flex flex-col gap-2">
          {/* African Tech Startup badge */}
          <div className="inline-flex items-center gap-2 bg-[#7C3AED]/10 border border-[#7C3AED]/20 px-3 py-1.5 rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="font-mono text-[9px] tracking-[0.25em] text-[#7C3AED] uppercase font-bold">{hero.badge || 'African Tech Startup'}</span>
          </div>
          <div className="flex flex-col gap-0.5 font-mono text-[9px] tracking-[0.2em] text-[#7C3AED]/40 uppercase pl-1">
            <span>v3.1.0_EDGE</span>
            <span className="text-[8px] opacity-60">LOC: 6°07′55″N 1°13′22″E</span>
          </div>
        </div>

        <div className="relative z-20 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-8 pointer-events-none mt-20 gap-12">
          
          <div className="mb-10 md:mb-0 max-w-2xl">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-[#0F0A1E] tracking-tighter mb-4 uppercase italic font-heading leading-[0.85]">
              <ScrambleText text={hero.title} duration={2000} delay={500} />
            </h1>
            <div className="flex items-center gap-6 mb-6">
               <div className="h-[1px] w-16 bg-[#7C3AED]/50"></div>
               <p className="text-[#7C3AED] tracking-[0.4em] text-[10px] md:text-xs font-bold uppercase font-heading opacity-80">
                 <ScrambleText text={hero.subtitle} duration={2500} delay={700} />
               </p>
            </div>
            <p className="text-[#6B7280] max-w-xl mb-10 text-base md:text-lg leading-relaxed font-light opacity-90 border-l-2 border-[#7C3AED]/20 pl-8">
              {hero.description}
            </p>
            {/* Tagline */}
            <p className="text-[#7C3AED]/40 font-mono text-[9px] uppercase tracking-[0.5em] mb-10 pl-8 italic">{hero.tagline}</p>
            
            <div className="flex flex-wrap gap-4 items-center pointer-events-auto">
              <Magnetic>
                <a href="#contact" className="bg-[#7C3AED] text-white px-8 py-4 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#6D28D9] hover:shadow-[0_8px_40px_rgba(124,58,237,0.3)] transition-all rounded-xl">
                  {hero.cta1 || (lang === 'FR' ? 'Démarrer un Projet' : 'Start a Project')}
                </a>
              </Magnetic>
              <Magnetic>
                <a href="#services" className="border border-[#7C3AED]/30 text-[#7C3AED] px-8 py-4 text-[10px] font-black uppercase tracking-[0.3em] hover:border-[#7C3AED] hover:bg-[#7C3AED]/5 transition-all rounded-xl pointer-events-auto">
                  {hero.cta2 || (lang === 'FR' ? 'Nos Services' : 'Our Services')}
                </a>
              </Magnetic>
            </div>
          </div>

          {/* Code editor widget */}
          <div className="bg-[#0F0A1E] backdrop-blur-xl rounded-2xl border border-[#7C3AED]/20 w-full max-w-sm hidden lg:block shadow-[0_20px_60px_-10px_rgba(124,58,237,0.2)] overflow-hidden pointer-events-auto group">
            <div className="flex items-center px-4 py-3 bg-white/5 border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60"></div>
              </div>
              <div className="flex-grow text-center text-[9px] text-gray-500 font-mono tracking-widest">codorah.ts</div>
            </div>
            <div className="p-8 font-mono text-[11px] text-[#A78BFA] font-medium">
              <pre className="whitespace-pre-wrap leading-relaxed">
                <ScrambleText text={hero.codeSnippet} duration={3000} delay={1000} />
              </pre>
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent opacity-20 group-hover:opacity-100 transition-opacity"></div>
          </div>
          
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#7C3AED]/40 animate-bounce text-[9px] uppercase tracking-[0.5em] font-mono z-20">
          Scroll ↓
        </div>
      </section>

      <TechMarquee />

      <div id="about">
        <AboutSection />
      </div>
      <div id="vision">
        <VisionSection />
      </div>
      <div id="services">
        <ServicesGrid />
      </div>
      <div id="process">
        <ProcessSection />
      </div>

      <div id="equipe">
        <TeamSection />
      </div>

      <PartnerMarquee />
      <div id="contact">
        <ContactSection />
      </div>
    </main>
  );
}
