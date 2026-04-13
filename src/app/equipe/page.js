import { CODORAH_DATA } from '../../data/codorah';
import { Link as LinkIcon } from 'lucide-react';

export default function TeamPage() {
  return (
    <section className="pt-32 pb-20 px-10">
      <h1 className="text-5xl font-bold mb-16 border-l-4 border-[#FFD700] pl-6 uppercase">L'unité d'élite</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {CODORAH_DATA.team.map((member) => (
          <div key={member.name} className="bg-[#1A0B2E]/50 p-8 border border-white/5 hover:border-[#FFD700]/50 transition-all group">
            <h2 className="text-xl font-bold">{member.name}</h2>
            <p className="text-[#FFD700] text-xs mb-4 uppercase">{member.role}</p>
            <p className="text-gray-400 text-sm mb-6">{member.bio}</p>
            <a href={member.linkedin} target="_blank" className="opacity-50 group-hover:opacity-100">
              <LinkIcon size={20} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
