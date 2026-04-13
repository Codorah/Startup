"use client";
import dynamic from 'next/dynamic';
import TeamSection from '../components/TeamSection';
import ProjectsSection from '../components/ProjectsSection';
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
import CustomCursor from '../components/CustomCursor';
import Magnetic from '../components/Magnetic';

const ThreeScene = dynamic(() => import('../components/ThreeScene'), { ssr: false });

export default function Home() {
  const { lang } = useLanguage();
  const { hero } = CODORAH_TRANSLATIONS[lang] || CODORAH_TRANSLATIONS.EN;

  return (
    <main className="relative bg-codorah-black overflow-x-hidden">
      <CustomCursor />
      <SideNav />
      {/* Technical Status Overlay */}
      <div className="fixed top-24 left-10 z-[40] hidden lg:block">
        <div className="flex flex-col gap-1 font-mono text-[10px] tracking-[0.2em] text-codorah-gold/40 uppercase">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span>System: Active</span>
          </div>
          <span className="opacity-50">v3.1.0_EDGE</span>
          <span className="mt-2 text-[8px] opacity-30 tracking-[0.3em]">LOC: 6°07′55″N 1°13′22″E</span>
        </div>
      </div>

      {/* Hero Section avec Scène 3D */}
      <section id="accueil" className="h-screen w-full relative flex items-center justify-center overflow-hidden">
        <ThreeScene />
        
        <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-b from-transparent via-codorah-black/50 to-codorah-black"></div>

        <div className="relative z-20 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-8 pointer-events-none mt-20">
          
          <div className="mb-10 md:mb-0 max-w-2xl">
            <h2 className="text-5xl md:text-9xl font-bold text-white tracking-tighter mb-6 uppercase italic font-heading leading-none">
              <ScrambleText text={hero.title} duration={2000} delay={500} />
            </h2>
            <div className="flex items-center gap-4 mb-8">
               <div className="h-[2px] w-12 bg-codorah-gold"></div>
               <p className="text-codorah-gold tracking-[0.4em] text-xs md:text-sm font-bold uppercase font-heading">
                 <ScrambleText text={hero.subtitle} duration={2500} delay={700} />
               </p>
            </div>
            <p className="text-gray-400 max-w-lg mb-12 text-xl leading-relaxed font-light opacity-90">{hero.description}</p>
            
            <div className="flex gap-6 items-center pointer-events-auto">
              <Magnetic>
                <button className="bg-codorah-neonViolet text-white px-8 py-4 text-[10px] font-black uppercase tracking-[0.3em] hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all">
                  {lang === 'FR' ? 'Démarrer' : 'Initialize'}
                </button>
              </Magnetic>
              <p className="text-codorah-neonViolet font-mono text-[9px] uppercase tracking-[0.4em] opacity-40">{hero.tagline}</p>
            </div>
          </div>

          {/* Editeur de code façon VSCode / Mac */}
          <div className="bg-[#050508]/80 backdrop-blur-xl rounded-2xl border border-white/10 w-full max-w-sm hidden lg:block shadow-[0_0_60px_-10px_rgba(139,92,246,0.3)] overflow-hidden pointer-events-auto group">
            <div className="flex items-center px-4 py-3 bg-white/5 border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60"></div>
              </div>
              <div className="flex-grow text-center text-[9px] text-gray-500 font-mono tracking-widest">codorah.ts</div>
            </div>
            <div className="p-8 font-mono text-[11px] text-codorah-neonViolet/80 font-medium">
              <pre className="whitespace-pre-wrap leading-relaxed">
                <ScrambleText text={hero.codeSnippet} duration={3000} delay={1000} />
              </pre>
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-codorah-neonViolet to-transparent opacity-20 group-hover:opacity-100 transition-opacity"></div>
          </div>
          
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 animate-bounce text-[9px] uppercase tracking-[0.5em] font-mono z-20">
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
      
      <div id="projets">
        <ProjectsSection />
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
