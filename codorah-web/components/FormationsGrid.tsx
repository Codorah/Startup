'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Clock, BarChart, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import ContactModal from './ContactModal';
import type { Dictionary } from '@/lib/i18n/dictionaries';

interface FormationsGridProps {
  dict: Dictionary['trainings'];
  modalDict: Dictionary['modal'];
}

export default function FormationsGrid({ dict, modalDict }: FormationsGridProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Show first 3 cards as specified by solimi tutorial card pattern
  const displayedItems = dict.items.slice(0, 3);

  return (
    <section id="trainings" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="section-label">{dict.badge}</span>
          <h2 className="display-md text-slate-900">{dict.title}</h2>
          <p className="text-base text-slate-500 max-w-xl mx-auto font-normal leading-relaxed">
            {dict.subtitle}
          </p>
        </motion.div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayedItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:border-violet-200 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail image */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-violet-700 shadow-sm">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-7 space-y-4">
                  {/* Badges row: duration & level */}
                  <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-violet-600" />
                      {item.duration}
                    </span>
                    <span className="inline-block w-1 h-1 rounded-full bg-slate-300" />
                    <span className="flex items-center gap-1.5">
                      <BarChart className="w-3.5 h-3.5 text-violet-600" />
                      {item.level}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-violet-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Card Footer with CTA */}
              <div className="p-7 pt-0">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-violet-50 hover:bg-violet-600 text-violet-700 hover:text-white font-semibold text-sm transition-all duration-200"
                >
                  <span>{dict.enrollBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
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
