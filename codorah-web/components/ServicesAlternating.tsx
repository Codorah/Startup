'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Smartphone, Cpu, Cloud, Palette, ShieldCheck, Code2, GraduationCap, ArrowRight, type LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';
import ContactModal from './ContactModal';
import type { Dictionary } from '@/lib/i18n/dictionaries';

const ICON_MAP: Record<string, LucideIcon> = {
  Smartphone,
  Cpu,
  Cloud,
  Palette,
  ShieldCheck,
  Code2,
  GraduationCap,
};

const SERVICE_MODAL_KEY: Record<string, string> = {
  'web-mobile':     'webMobile',
  'ai-ml':          'ai',
  'cloud-devops':   'cloud',
  'ui-ux':          'design',
  'cybersecurity':  'security',
  'custom-software':'webMobile',
  'training':       'training',
};

interface ServicesAlternatingProps {
  dict: Dictionary['services'];
  modalDict: Dictionary['modal'];
}

export default function ServicesAlternating({ dict, modalDict }: ServicesAlternatingProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('select');

  const openModal = (id: string) => {
    setSelectedService(SERVICE_MODAL_KEY[id] ?? 'select');
    setIsModalOpen(true);
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-3xl mx-auto mb-20 space-y-4"
        >
          <span className="section-label">{dict.badge}</span>
          <h2 className="display-md text-slate-900">{dict.title}</h2>
        </motion.div>

        {/* Alternating service rows */}
        <div className="flex flex-col gap-20 md:gap-28">
          {dict.items.map((item, index) => {
            const isEven = index % 2 === 0;
            const Icon = ICON_MAP[item.icon] ?? Code2;

            return (
              <div
                key={item.id}
                className={`md:flex bg-gray-50 rounded-3xl overflow-hidden ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Image Column */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.65, ease: 'easeOut' }}
                  className="md:w-[42%] relative min-h-[320px] md:min-h-[420px] overflow-hidden rounded-l-3xl md:rounded-none"
                  style={{ borderRadius: isEven ? '24px 0 0 24px' : '0 24px 24px 0' }}
                >
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover service-image-hover"
                  />
                  {/* Gradient fade toward text */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-${isEven ? 'r' : 'l'} from-transparent to-gray-50/60`}
                  />
                </motion.div>

                {/* Text Column */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
                  className="md:w-[58%] flex flex-col gap-6 justify-between p-8 md:p-12 lg:p-16"
                >
                  {/* Icon + ID badge */}
                  <div className="flex items-center gap-4">
                    <div className="glass-icon-box w-16 h-16 bg-violet-50 border border-violet-200">
                      <Icon className="w-7 h-7 text-violet-700" />
                    </div>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight mb-4">
                      {item.title}
                    </h3>
                    <p className="text-base text-slate-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => openModal(item.id)}
                    className="group inline-flex items-center gap-2 text-violet-700 font-bold text-sm hover:text-violet-900 transition-colors cursor-pointer"
                  >
                    <span className="underline decoration-violet-300 group-hover:decoration-violet-700 underline-offset-4 transition-all">
                      {item.link}
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              </div>
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
