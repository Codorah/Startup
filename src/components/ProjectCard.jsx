"use client";
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { TiltCard } from './TiltCard';

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="h-full perspective-1000"
    >
      <TiltCard className="h-full w-full block">
        <div className="group relative bg-[#0a0a0f] border border-white/5 hover:border-codorah-neonViolet/50 hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.3)] transition-all duration-300 overflow-hidden flex flex-col h-full rounded-md">
          {/* Accent Top Bar */}
          <div className="h-1 w-full bg-gradient-to-r from-transparent to-transparent group-hover:from-codorah-neonViolet group-hover:via-codorah-gold group-hover:to-transparent transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

          <div className="p-8 flex-grow flex flex-col relative z-10">
            {/* Subtle Violet background glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-codorah-neonViolet/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

            <div className="flex justify-between items-start mb-6">
              <span className="text-[10px] text-[#FFD700] font-mono tracking-widest uppercase py-1 px-2 border border-codorah-gold/20 rounded-sm">
                {project.category}
              </span>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white hover:scale-125 transition-all p-1"
              >
                <ArrowUpRight size={20} />
              </a>
            </div>

            <h4 className="text-2xl font-bold text-white mb-6 tracking-tight group-hover:text-codorah-gold transition-colors font-heading uppercase italic">
              {project.title}
            </h4>
            
            <p className="text-gray-400 text-sm mb-10 flex-grow leading-relaxed font-light opacity-80 group-hover:opacity-100 transition-opacity">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-[#1A0B2E]/50 border border-white/5 text-gray-400 text-[10px] uppercase font-mono tracking-wider rounded-full group-hover:border-codorah-neonViolet/30 group-hover:text-white transition-all"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* Background Number */}
          <div className="absolute -bottom-4 -right-4 text-9xl font-black text-white/[0.02] pointer-events-none italic select-none">
            0{index + 1}
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}
