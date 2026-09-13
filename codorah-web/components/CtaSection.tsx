'use client';

import { useState } from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import ContactModal from './ContactModal';
import type { Dictionary } from '@/lib/i18n/dictionaries';

interface CtaSectionProps {
  dict: Dictionary['cta'];
  modalDict: Dictionary['modal'];
}

export default function CtaSection({ dict, modalDict }: CtaSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[36px] bg-gradient-to-tr from-purple-800 via-purple-700 to-indigo-700 p-8 sm:p-14 lg:p-20 text-white overflow-hidden shadow-2xl shadow-purple-900/20">
          {/* Ambient glowing circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/30 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-purple-100 text-xs font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 text-purple-300" />
              <span>{dict.badge}</span>
            </div>

            {/* Headline & Subtitle */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {dict.title}
            </h2>

            <p className="text-base sm:text-lg text-purple-100 font-normal leading-relaxed max-w-2xl mx-auto">
              {dict.subtitle}
            </p>

            {/* Action CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white hover:bg-slate-50 text-purple-900 font-bold text-base shadow-xl shadow-purple-950/30 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>{dict.button}</span>
                <ArrowRight className="w-4 h-4 text-purple-700" />
              </button>
            </div>

            {/* Reassurance text */}
            <p className="text-xs text-purple-200/90 font-medium">
              {dict.subtext}
            </p>
          </div>
        </div>
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        dict={modalDict}
        defaultService="webMobile"
      />
    </section>
  );
}
