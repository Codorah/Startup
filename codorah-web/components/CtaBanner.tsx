'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, CheckCircle2, TrendingUp, ShieldCheck, Terminal, Cpu } from 'lucide-react';
import ContactModal from './ContactModal';
import type { Dictionary } from '@/lib/i18n/dictionaries';

interface CtaBannerProps {
  dict: Dictionary['ctaBanner'];
  modalDict: Dictionary['modal'];
  locale: 'fr' | 'en';
}

export default function CtaBanner({ dict, modalDict, locale }: CtaBannerProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="relative rounded-3xl bg-gradient-to-br from-violet-700 via-violet-600 to-indigo-800 text-white overflow-hidden shadow-2xl p-8 sm:p-12 lg:p-16">
          {/* Background decoration elements */}
          <div
            className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)' }}
          />
          <div
            className="absolute top-0 right-1/3 w-80 h-80 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.2) 0%, transparent 70%)' }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left copy */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-violet-100 text-xs font-bold tracking-wider uppercase border border-white/20">
                <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                {dict.tagline}
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {dict.title}
              </h2>

              <p className="text-base sm:text-lg text-violet-100 font-normal leading-relaxed max-w-xl">
                {dict.subtitle}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white text-violet-900 hover:bg-violet-50 font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <span>{dict.primaryCta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  href={`/${locale}#services`}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 backdrop-blur-md transition-all duration-200"
                >
                  <span>{dict.secondaryCta}</span>
                </Link>
              </div>

              {/* Badges row */}
              <div className="flex flex-wrap gap-6 pt-4 text-xs font-semibold text-violet-200 border-t border-white/15">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Devis gratuit sous 24h
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Zéro engagement initial
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Accompagnement senior
                </span>
              </div>
            </div>

            {/* Right Dashboard Mockup illustration */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="w-full max-w-md bg-slate-950/80 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-5 text-slate-200 space-y-4"
              >
                {/* Mockup Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                    <Terminal className="w-3 h-3 text-violet-400" />
                    codorah-platform.v2
                  </span>
                </div>

                {/* Metric Card 1 */}
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-violet-600/30 border border-violet-400/30 flex items-center justify-center">
                      <Cpu className="w-4 h-4 text-violet-300" />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">AI Deployment</p>
                      <p className="text-sm font-bold text-white">Active (v2.4.1)</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold">
                    99.9% Up
                  </span>
                </div>

                {/* Metric Card 2 */}
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-indigo-600/30 border border-indigo-400/30 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-indigo-300" />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Sprint Velocity</p>
                      <p className="text-sm font-bold text-white">+38% Efficiency</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30 text-[10px] font-bold">
                    On Track
                  </span>
                </div>

                {/* Security pill */}
                <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    ISO 27001 & RGPD Verified
                  </span>
                  <span className="text-[10px] font-mono text-violet-300">Fast Delivery</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        dict={modalDict}
      />
    </section>
  );
}
