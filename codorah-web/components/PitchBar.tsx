'use client';

import { Zap, BrainCircuit, GraduationCap, type LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';
import type { Dictionary } from '@/lib/i18n/dictionaries';

interface PitchBarProps {
  dict: Dictionary['pitch'];
}

const ICONS: Record<string, LucideIcon> = {
  Zap,
  BrainCircuit,
  GraduationCap,
};

export default function PitchBar({ dict }: PitchBarProps) {
  const items = [dict.item1, dict.item2, dict.item3];

  return (
    <div className="relative">
      {/* Wave top */}
      <div className="wave-top">
        <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-14 md:h-20">
          <path
            d="M568.1,93.5c-22.6,2.5-51.5-0.4-75.5-5.3c-23.6-4.9-70.9-23.5-100.5-35.7
               C316.3,20.3,258.4,8,199.5,2.8C175.9,0.7,150.8-0.7,96.1,5.3C41.4,11.3-10.1,30.9-10.1,30.9V100H1000V69.7
               c0,0-72-32.6-158.4-30.5c-39.2,0.7-92.8,6.7-134,22.4c-21.2,8.1-52.2,18.2-79.7,24.2C600.7,92.1,588.4,92.5,568.1,93.5z"
            fill="#ede9fe"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="bg-violet-100 px-6 md:px-10 xl:px-20 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const Icon = ICONS[item.icon] ?? Zap;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="pitch-card"
              >
                {/* Glassmorphism icon container */}
                <div className="glass-icon-box w-20 h-20 mb-2">
                  <Icon className="w-9 h-9 text-violet-700" />
                </div>
                <h3 className="font-extrabold text-xl text-slate-900 text-center leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 text-center leading-relaxed font-normal">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Wave bottom */}
      <div className="wave-bottom">
        <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-14 md:h-20">
          <path
            d="M431.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7
               C683.7,79.7,741.6,92,800.5,97.2c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3
               c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,431.9,6.5z"
            fill="#ede9fe"
          />
        </svg>
      </div>
    </div>
  );
}
