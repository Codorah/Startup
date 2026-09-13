'use client';

import { motion } from 'motion/react';
import { ShieldCheck, Zap, Users, Trophy, ArrowRight, CheckCircle2 } from 'lucide-react';
import type { Dictionary } from '@/lib/i18n/dictionaries';

const PILLAR_ICONS = [Zap, ShieldCheck, Users, Trophy];

interface WhyChooseUsProps {
  dict: any;
}

export default function WhyChooseUs({ dict }: WhyChooseUsProps) {
  return (
    <section
      id="why-us"
      className="py-24 bg-gradient-to-b from-white via-slate-50/60 to-white relative overflow-hidden"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      {/* Soft ambient violet glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 space-y-16">

        {/* Section Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-xs font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-600" />
            {dict.badge}
          </div>
          <h2 className="display-md text-slate-900 tracking-tight">
            {dict.title}
          </h2>
          {dict.subtitle && (
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              {dict.subtitle}
            </p>
          )}
        </div>

        {/* 4 Enterprise Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {(dict.pillars || []).map((pillar: any, i: number) => {
            const IconComponent = PILLAR_ICONS[i % PILLAR_ICONS.length];
            return (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="group relative bg-white rounded-2xl border border-slate-200/90 p-8 flex flex-col justify-between hover:border-violet-300 hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-300"
              >
                <div className="space-y-6">
                  {/* Top Bar: Icon & Pillar Number */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-violet-50 border border-violet-100/80 text-violet-600 flex items-center justify-center group-hover:bg-violet-600 group-hover:text-white transition-all duration-300 shadow-xs">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-black font-mono text-slate-300 group-hover:text-violet-600 transition-colors">
                      {pillar.number}
                    </span>
                  </div>

                  {/* Pillar Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-violet-900 transition-colors leading-snug">
                    {pillar.title}
                  </h3>

                  {/* Pillar Description */}
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                {/* Bottom Accent Bar */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="h-1 w-8 bg-slate-200 group-hover:w-16 group-hover:bg-violet-600 rounded-full transition-all duration-300" />
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider group-hover:text-violet-600 transition-colors">
                    Standard Codorah
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
