'use client';

import { useState } from 'react';
import { Smartphone, Cpu, Cloud, Palette, ShieldCheck, Code2, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import ContactModal from './ContactModal';
import type { Dictionary } from '@/lib/i18n/dictionaries';

const ICON_MAP: Record<string, any> = {
  'web-mobile': Smartphone,
  'ai-ml': Cpu,
  'cloud-devops': Cloud,
  'ui-ux': Palette,
  'cybersecurity': ShieldCheck,
  'custom-software': Code2,
};

const NUMBER_MAP: Record<string, string> = {
  'web-mobile': '01',
  'ai-ml': '02',
  'cloud-devops': '03',
  'ui-ux': '04',
  'cybersecurity': '05',
  'custom-software': '06',
};

const SERVICE_KEY_MAP: Record<string, string> = {
  'web-mobile': 'webMobile',
  'ai-ml': 'ai',
  'cloud-devops': 'cloud',
  'ui-ux': 'design',
  'cybersecurity': 'security',
  'custom-software': 'webMobile',
};

interface ServicesGridProps {
  dict: any;
  modalDict: any;
}

export default function ServicesGrid({ dict, modalDict }: ServicesGridProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('select');

  const handleOpen = (serviceId: string) => {
    setSelectedService(SERVICE_KEY_MAP[serviceId] || 'select');
    setIsModalOpen(true);
  };

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-16">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-xs font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-600" />
              {dict.badge}
            </div>
            <h2 className="display-md text-slate-900 tracking-tight">{dict.title}</h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">{dict.subtitle}</p>
          </div>
          <button
            onClick={() => handleOpen('web-mobile')}
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 hover:border-violet-300 hover:bg-violet-50/50 text-slate-800 hover:text-violet-700 text-sm font-semibold transition-all cursor-pointer shrink-0"
          >
            <span>{dict.viewDetails}</span>
            <ArrowUpRight className="w-4 h-4 text-violet-600" />
          </button>
        </div>

        {/* Divider */}
        <div className="divider-gradient" />

        {/* Modern Enterprise Rows */}
        <div className="space-y-3">
          {dict.items.map((item: any, index: number) => {
            const Icon = ICON_MAP[item.id] || Code2;
            const num = NUMBER_MAP[item.id] || `0${index + 1}`;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                onClick={() => handleOpen(item.id)}
                className="group w-full p-6 sm:p-8 rounded-2xl border border-slate-200/80 bg-white hover:border-violet-300 hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-6 cursor-pointer"
              >
                {/* Left: Index & Name */}
                <div className="flex items-center gap-5 sm:gap-6 lg:w-[35%]">
                  <span className="font-mono text-sm font-semibold text-slate-600 group-hover:text-violet-600 transition-colors w-6">
                    {num}
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-violet-50 border border-violet-100/80 flex items-center justify-center text-violet-700 group-hover:bg-violet-600 group-hover:text-white transition-colors duration-300 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-violet-700 transition-colors leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Center: Description & Stack */}
                <div className="lg:w-[50%] space-y-2 pl-11 sm:pl-16 lg:pl-0">
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tags?.map((tag: string, tIdx: number) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-md bg-slate-100/80 text-slate-600 group-hover:bg-violet-50 group-hover:text-violet-700 text-xs font-medium transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Interactive Arrow Button */}
                <div className="lg:w-[15%] flex items-center justify-end pl-11 sm:pl-16 lg:pl-0">
                  <div className="w-10 h-10 rounded-xl border border-slate-200 group-hover:border-violet-300 group-hover:bg-violet-600 group-hover:text-white text-slate-400 flex items-center justify-center transition-all duration-300 shadow-2xs">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
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
        defaultService={selectedService}
      />
    </section>
  );
}
