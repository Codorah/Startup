'use client';

import Image from 'next/image';
import { Rocket, ShieldCheck, Users, BarChart3, Clock, Globe, CircleCheck, type LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';
import type { Dictionary } from '@/lib/i18n/dictionaries';

const ICON_MAP: Record<string, LucideIcon> = {
  Rocket, ShieldCheck, Users, BarChart3, Clock, Globe,
};

interface ConceptSectionProps {
  dict: Dictionary['concept'];
}

export default function ConceptSection({ dict }: ConceptSectionProps) {
  const half = Math.ceil(dict.features.length / 2);
  const leftFeatures  = dict.features.slice(0, half);
  const rightFeatures = dict.features.slice(half);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 space-y-3"
        >
          <span className="section-label">{dict.badge}</span>
          <h2 className="display-md text-slate-900">{dict.title}</h2>
          <p className="text-base text-slate-500 max-w-2xl mx-auto font-normal leading-relaxed">
            {dict.subtitle}
          </p>
        </motion.div>

        {/* 3-column layout: features | central image | features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

          {/* Left features */}
          <div className="flex flex-col gap-8">
            {leftFeatures.map((feature, i) => {
              const Icon = ICON_MAP[feature.icon] ?? CircleCheck;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-4 md:flex-row-reverse md:text-right"
                >
                  <div className="w-12 h-12 rounded-xl bg-violet-50 border border-violet-200 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-violet-700" />
                  </div>
                  <p className="font-bold text-slate-900 text-sm leading-snug">{feature.label}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Central image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex justify-center"
          >
            <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px]">
              {/* Glowing ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(139,92,246,0.18) 0%, rgba(139,92,246,0.05) 60%, transparent 80%)',
                  filter: 'blur(12px)',
                }}
              />
              <div className="absolute inset-4 rounded-full border-2 border-violet-200/60" />
              <div className="absolute inset-8 rounded-full border border-violet-100/80" />

              {/* Central logo/image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-44 h-44 md:w-52 md:h-52 rounded-3xl overflow-hidden shadow-2xl shadow-violet-500/20 border-2 border-violet-200">
                  <Image
                    src="/images/gallery-uiux-sprint.jpg"
                    alt="Codorah concept digital innovation"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Codorah badge center */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white border border-violet-200 rounded-full px-4 py-1.5 shadow-lg">
                <span className="text-xs font-extrabold text-violet-700 tracking-wider uppercase">Codorah</span>
              </div>
            </div>
          </motion.div>

          {/* Right features */}
          <div className="flex flex-col gap-8">
            {rightFeatures.map((feature, i) => {
              const Icon = ICON_MAP[feature.icon] ?? CircleCheck;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-violet-50 border border-violet-200 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-violet-700" />
                  </div>
                  <p className="font-bold text-slate-900 text-sm leading-snug">{feature.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
