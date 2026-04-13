"use client";
import ProjectCard from './ProjectCard';
import { useLanguage } from '../context/LanguageContext';
import { CODORAH_TRANSLATIONS } from '../data/codorah';

export default function ProjectsSection() {
  const { lang } = useLanguage();
  const { projects = [] } = CODORAH_TRANSLATIONS[lang] || CODORAH_TRANSLATIONS.EN;

  return (
    <section id="projets" className="py-24 px-8 bg-[#050508] border-t border-white/5 relative overflow-hidden">
      {/* Background glow for proyectos */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-codorah-neonViolet/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-4 justify-center">
          <div className="w-8 h-[1px] bg-codorah-neonViolet/30"></div>
          <span className="text-codorah-neonViolet text-[10px] font-mono tracking-[0.5em] uppercase opacity-80 animate-pulse">
            06 // {lang === 'FR' ? 'Industrial Solutions' : 'Industrial Logic'}
          </span>
          <div className="w-8 h-[1px] bg-codorah-neonViolet/30"></div>
        </div>
        <h3 className="text-4xl md:text-8xl font-black text-white mb-20 tracking-tighter text-center uppercase italic">
          <span className="text-codorah-neonViolet">{lang === 'FR' ? 'Écosystème' : 'Ecosystem'}</span> {lang === 'FR' ? 'Projets' : 'Projects'}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
