"use client";
import ServicesGrid from '../../components/ServicesGrid';

export default function ServicesPage() {
  return (
    <div className="pt-32 min-h-screen bg-[#F8F7FF]">
      <div className="max-w-7xl mx-auto px-8 mb-4">
        <span className="text-[#7C3AED] text-[10px] font-mono tracking-[0.5em] uppercase mb-4 block">
          Codorah // Services
        </span>
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase italic text-[#0F0A1E] border-l-4 border-[#7C3AED] pl-6">
          Nos <span className="text-[#7C3AED]">Services</span>
        </h1>
        <p className="text-[#6B7280] max-w-2xl text-lg leading-relaxed">
          Des solutions numériques concrètes — sites web, applications mobiles et formations IA — pour accélérer votre transformation digitale.
        </p>
      </div>
      <ServicesGrid />
    </div>
  );
}
