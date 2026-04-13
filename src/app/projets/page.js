import ProjectsSection from '../../components/ProjectsSection';

export default function ProjetsPage() {
  return (
    <div className="pt-32 min-h-screen bg-codorah-black text-white">
      <div className="px-8 max-w-7xl mx-auto mb-16">
        <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">
          NOTRE <span className="text-codorah-gold">PORTFOLIO</span>
        </h1>
        <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
          Explorez nos études de cas, des solutions SaaS complexes aux applications mobiles intelligentes.
        </p>
      </div>
      
      {/* We reuse the ProjectsSection but it can be adapted later */}
      <ProjectsSection />
    </div>
  );
}
