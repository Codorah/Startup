'use client';

import { useState } from 'react';
import Image from 'next/image';
import { GraduationCap, ArrowRight, CheckCircle2, MonitorCheck, Terminal, Shield, BrainCircuit } from 'lucide-react';
import { motion } from 'motion/react';
import ContactModal from './ContactModal';
import type { Dictionary } from '@/lib/i18n/dictionaries';

const ICON_MAP: Record<string, any> = {
  initiation: MonitorCheck,
  fullstack: Terminal,
  cyber: Shield,
  'ai-bootcamp': BrainCircuit,
};

const ACCENT_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  initiation: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
  fullstack: { bg: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-200' },
  cyber: { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200' },
  'ai-bootcamp': { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
};

interface TrainingsSectionProps {
  dict: any;
  modalDict: any;
}

export default function TrainingsSection({ dict, modalDict }: TrainingsSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="trainings" className="py-24 bg-violet-subtle relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-16">

        {/* Header */}
        <div className="max-w-2xl space-y-4">
          <p className="section-label">{dict.badge}</p>
          <h2 className="display-md text-slate-900">{dict.title}</h2>
          <p className="text-base text-slate-500 leading-relaxed">{dict.subtitle}</p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dict.items.map((item: any, index: number) => {
            const Icon = ICON_MAP[item.id] || GraduationCap;
            const color = ACCENT_COLORS[item.id] || ACCENT_COLORS.fullstack;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.09 }}
                className="group card-service rounded-2xl p-8 flex flex-col justify-between bg-white"
              >
                <div className="space-y-6">
                  {/* Top row: icon + level badge */}
                  <div className="flex items-start justify-between gap-4">
                    <div className={`w-12 h-12 rounded-xl ${color.bg} ${color.text} flex items-center justify-center border ${color.border}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${color.bg} ${color.text} ${color.border}`}>
                      {item.level}
                    </span>
                  </div>

                  {/* Title & desc */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-violet-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-500 leading-relaxed">{item.description}</p>
                  </div>

                  {/* Meta pills */}
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md font-medium">
                      {dict.durationLabel} {item.duration}
                    </span>
                    <span className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md font-medium">
                      {item.format}
                    </span>
                  </div>

                  {/* Highlights */}
                  {item.highlights && (
                    <div className="grid grid-cols-2 gap-2">
                      {item.highlights.map((h: string, hi: number) => (
                        <div key={hi} className="flex items-center gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-violet-500 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* CTA */}
                <div className="pt-6 mt-6 border-t border-slate-100">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="group/btn flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-violet-700 transition-colors cursor-pointer"
                  >
                    <span>{dict.enrollBtn}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        dict={modalDict}
        defaultService="training"
      />
    </section>
  );
}
