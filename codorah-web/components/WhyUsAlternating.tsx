'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { CheckCircle2, Shield, Zap, Sparkles, Target } from 'lucide-react';
import type { Dictionary } from '@/lib/i18n/dictionaries';

interface WhyUsAlternatingProps {
  dict: Dictionary['whyUs'];
}

const PILLAR_ICONS = [Zap, Shield, Target, Sparkles];

export default function WhyUsAlternating({ dict }: WhyUsAlternatingProps) {
  return (
    <section id="why-us" className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-20 space-y-4"
        >
          <span className="section-label">{dict.badge}</span>
          <h2 className="display-md text-slate-900">{dict.title}</h2>
        </motion.div>

        {/* 4 Alternating Pillars */}
        <div className="flex flex-col gap-20 md:gap-28">
          {dict.items.map((item, index) => {
            const isEven = index % 2 === 0;
            const Icon = PILLAR_ICONS[index % PILLAR_ICONS.length];

            return (
              <div
                key={item.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  isEven ? '' : 'lg:grid-flow-dense'
                }`}
              >
                {/* Image side */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className={`relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden shadow-lg border border-slate-200/60 ${
                    isEven ? '' : 'lg:col-start-2'
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                  
                  {/* Floating index badge */}
                  <div className="absolute top-6 left-6 w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md border border-white/40 shadow-md flex items-center justify-center">
                    <span className="font-extrabold text-violet-700 text-lg">0{index + 1}</span>
                  </div>
                </motion.div>

                {/* Text side */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                  className={`space-y-6 ${isEven ? '' : 'lg:col-start-1'}`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-violet-100 flex items-center justify-center text-violet-700">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-base text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>

                  <div className="pt-2 flex items-center gap-3 text-sm font-semibold text-violet-700">
                    <CheckCircle2 className="w-5 h-5 text-violet-600" />
                    <span>Standard d&apos;excellence garanti par Codorah</span>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
