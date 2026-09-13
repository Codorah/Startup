'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import type { Dictionary } from '@/lib/i18n/dictionaries';

interface MediaGridProps {
  dict: Dictionary['mediaGrid'];
}

export default function MediaGrid({ dict }: MediaGridProps) {
  return (
    <section className="py-24 bg-slate-50/70 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
        >
          <span className="section-label">{dict.badge}</span>
          <h2 className="display-md text-slate-900">{dict.title}</h2>
        </motion.div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dict.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="group relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent transition-opacity duration-300 group-hover:from-slate-950 group-hover:via-slate-950/60" />

              {/* Top pill: Category */}
              <div className="absolute top-6 left-6 z-10">
                <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide bg-white/20 backdrop-blur-md text-white border border-white/20">
                  {item.category}
                </span>
              </div>

              {/* Arrow button top right on hover */}
              <div className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <ArrowUpRight className="w-5 h-5" />
              </div>

              {/* Content bottom */}
              <div className="absolute bottom-6 left-6 right-6 z-10 space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug drop-shadow-sm group-hover:text-violet-200 transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
