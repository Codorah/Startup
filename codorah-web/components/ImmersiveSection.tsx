'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import type { Dictionary } from '@/lib/i18n/dictionaries';

interface ImmersiveSectionProps {
  dict: Dictionary['immersive'];
}

export default function ImmersiveSection({ dict }: ImmersiveSectionProps) {
  const stats = [dict.stat1, dict.stat2, dict.stat3];

  return (
    <section className="relative flex flex-col overflow-hidden">
      {/* Video/Image container */}
      <div className="relative w-full min-h-[520px] md:min-h-[640px]">
        <Image
          src="/images/african-tech-summit-immersive.jpg"
          alt="Codorah — Sommet technologique et transformation numérique en Afrique"
          fill
          className="object-cover"
          priority={false}
        />
        {/* Gradient overlay: left half dark/violet, right transparent */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-900/30" />

        {/* Content overlay — right column */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full grid md:grid-cols-2">
            {/* Left: empty spacer (image shows here) */}
            <div />

            {/* Right: text content */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="flex flex-col gap-6 py-12"
            >
              <span className="section-label text-violet-400">{dict.tagline}</span>

              <h2 className="display-md text-white leading-tight">
                {dict.title}
              </h2>

              <p className="text-base text-slate-300 leading-relaxed font-normal max-w-lg">
                {dict.subtitle}
              </p>

              <div>
                <a
                  href="#services"
                  className="btn-violet inline-flex w-fit mt-2"
                >
                  <span>{dict.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Micro stats row */}
              <div className="flex flex-wrap gap-8 mt-4 pt-6 border-t border-white/15">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <p className="text-3xl font-extrabold text-white tracking-tight">{stat.value}</p>
                    <p className="text-xs text-slate-400 font-medium mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
