'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Smartphone,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Zap,
  CreditCard,
  Send,
  Terminal,
} from 'lucide-react';
import { motion, type Variants } from 'motion/react';
import ContactModal from './ContactModal';
import type { Dictionary } from '@/lib/i18n/dictionaries';

interface HeroSectionProps {
  locale: 'fr' | 'en';
  dict: Dictionary;
}

export default function HeroSection({ locale, dict }: HeroSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Autotype / Typewriter rotating phrases inspired by solimi.co
  const phrases =
    locale === 'fr'
      ? ['notre affaire.', 'notre expertise.', 'notre métier.', 'nos solutions.']
      : ['our mission.', 'our expertise.', 'our passion.', 'our solutions.'];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex % phrases.length];

    if (!isDeleting && subIndex === currentPhrase.length) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const typingSpeed = isDeleting ? 35 : 75;
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, phraseIndex, phrases]);

  const currentTypedText = phrases[phraseIndex % phrases.length].substring(0, subIndex);

  const stagger: Variants = {
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center overflow-hidden bg-white pt-28 pb-16 lg:py-24"
    >
      {/* Background dot grid pattern */}
      <div className="absolute inset-0 bg-grid-dots opacity-45 pointer-events-none" />

      {/* Soft ambient violet radial glow behind right-side mockups */}
      <div
        className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[550px] h-[550px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.14) 0%, rgba(167, 139, 250, 0.05) 50%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ── LEFT COLUMN: Copy & Autotype (Inspired by Solimi) ── */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="lg:col-span-6 space-y-7"
          >
            {/* Badge */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-xs font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-600 animate-pulse" />
                {dict.hero.badge}
              </span>
            </motion.div>

            {/* Solimi-style Italic Title with Autotype and Blinking Cursor */}
            <motion.div variants={fadeUp}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] italic">
                {locale === 'fr' ? 'Vos défis technologiques,' : 'Your tech challenges,'}{' '}
                <br className="hidden sm:inline" />
                <span className="text-violet-600 font-black not-italic inline-block min-h-[1.15em]">
                  {currentTypedText}
                </span>
                {/* Blinking typewriter cursor */}
                <span className="inline-block w-1 sm:w-1.5 h-8 sm:h-11 lg:h-12 bg-violet-600 ml-1 align-baseline animate-pulse font-normal" />
              </h1>
            </motion.div>

            {/* Subtitle Description */}
            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl"
            >
              {dict.hero.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 pt-1">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsModalOpen(true)}
                className="btn-violet cursor-pointer"
              >
                <span>{dict.hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <Link
                href={`/${locale}#services`}
                className="btn-outline-dark text-center"
              >
                {dict.hero.secondaryCta}
              </Link>
            </motion.div>

            {/* Trust Micro-Row */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-6 pt-3 text-xs font-semibold text-slate-500 border-t border-slate-100"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Sprint livré en 48h</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>99.9% Disponibilité Cloud</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Paris & Lomé</span>
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT COLUMN: Solimi-Style Angled Floating Devices & Mockups ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-6 relative flex items-center justify-center min-h-[460px] sm:min-h-[540px] pt-6 lg:pt-0"
          >
            {/* Sparkle decorative icon */}
            <div className="absolute top-2 right-12 z-30 text-violet-500 animate-bounce">
              <Sparkles className="w-6 h-6" />
            </div>

            {/* Composition container with 3D perspective */}
            <div className="relative w-full max-w-lg h-[440px] sm:h-[500px] flex items-center justify-center">

              {/* ── DEVICE 1: Angled Phone (Left / Front, tilted like Solimi) ── */}
              <div
                className="absolute left-2 sm:left-4 z-20 w-[240px] sm:w-[260px] rounded-[36px] bg-slate-950 p-2.5 shadow-2xl shadow-violet-900/30 border-2 border-slate-800 transition-transform duration-500 hover:scale-105"
                style={{
                  transform: 'perspective(1200px) rotateY(-16deg) rotateX(8deg) rotateZ(3deg)',
                }}
              >
                {/* Phone Speaker Notch */}
                <div className="mx-auto mb-2 h-4 w-20 rounded-full bg-slate-900 flex items-center justify-center">
                  <div className="h-1.5 w-6 rounded-full bg-slate-800" />
                </div>

                {/* Phone Screen: Codorah Mobile Fintech App (Inspired by Solimi screen) */}
                <div className="rounded-[28px] bg-gradient-to-b from-slate-900 via-violet-950 to-slate-950 p-3.5 text-white space-y-3 overflow-hidden border border-white/10">
                  {/* App Header */}
                  <div className="flex items-center justify-between text-[11px] text-slate-300">
                    <span className="font-extrabold text-white flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-violet-400 inline-block" />
                      Codorah Pay
                    </span>
                    <span className="font-mono text-[10px] bg-white/10 px-2 py-0.5 rounded-full">v2.4</span>
                  </div>

                  {/* Virtual Card Graphic */}
                  <div className="relative rounded-2xl bg-gradient-to-br from-violet-600 via-indigo-600 to-violet-900 p-3.5 shadow-lg border border-white/20 space-y-2.5">
                    <div className="flex justify-between items-center text-[10px] text-violet-200">
                      <span>Carte Entreprise</span>
                      <CreditCard className="w-3.5 h-3.5 text-white" />
                    </div>
                    <p className="font-mono text-sm tracking-wider font-bold text-white">•••• 8420</p>
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-[8px] text-violet-200 uppercase">Solde disponible</p>
                        <p className="font-extrabold text-sm text-white">1 500 000 FCFA</p>
                      </div>
                      <span className="text-[10px] font-bold text-white uppercase tracking-wider">VISA</span>
                    </div>
                  </div>

                  {/* Quick Action Buttons */}
                  <div className="grid grid-cols-2 gap-2 text-center text-[10px] font-semibold">
                    <div className="rounded-xl bg-violet-600/80 p-2 text-white flex items-center justify-center gap-1">
                      <Send className="w-3 h-3" />
                      <span>Transférer</span>
                    </div>
                    <div className="rounded-xl bg-white/10 p-2 text-slate-200 flex items-center justify-center gap-1">
                      <Zap className="w-3 h-3 text-yellow-300" />
                      <span>Recharger</span>
                    </div>
                  </div>

                  {/* Recent Activity List */}
                  <div className="space-y-1.5 pt-1">
                    <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Derniers flux</p>
                    <div className="rounded-lg bg-white/5 p-2 flex items-center justify-between text-[10px]">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[9px] font-bold">✓</div>
                        <span className="font-medium text-slate-200">API Webhook</span>
                      </div>
                      <span className="font-bold text-emerald-400">+350 000 F</span>
                    </div>
                    <div className="rounded-lg bg-white/5 p-2 flex items-center justify-between text-[10px]">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center text-[9px] font-bold">☁</div>
                        <span className="font-medium text-slate-200">Cloud Sync</span>
                      </div>
                      <span className="font-bold text-slate-300">En cours</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── DEVICE 2: Upright Phone / Dashboard (Right / Back) ── */}
              <div
                className="absolute right-2 sm:right-6 z-10 w-[230px] sm:w-[250px] rounded-[36px] bg-slate-900 p-2.5 shadow-2xl shadow-slate-950/40 border-2 border-slate-700 transition-transform duration-500 hover:scale-105"
                style={{
                  transform: 'perspective(1200px) rotateY(-6deg) rotateX(4deg) translateZ(-30px)',
                }}
              >
                {/* Phone Speaker */}
                <div className="mx-auto mb-2 h-4 w-20 rounded-full bg-slate-800 flex items-center justify-center">
                  <div className="h-1.5 w-6 rounded-full bg-slate-700" />
                </div>

                {/* Screen: Codorah Cloud & Engineering Dashboard */}
                <div className="rounded-[28px] bg-white p-3.5 text-slate-800 space-y-3 shadow-inner border border-slate-200">
                  {/* Header */}
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <span className="text-[11px] font-extrabold text-violet-900">Codorah Cloud</span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-bold text-[9px]">99.9% LIVE</span>
                  </div>

                  {/* Metric Box 1 */}
                  <div className="rounded-xl bg-violet-50 p-2.5 border border-violet-100 space-y-1">
                    <div className="flex justify-between text-[10px] text-slate-500 font-medium">
                      <span>Projets Actifs</span>
                      <TrendingUp className="w-3 h-3 text-violet-600" />
                    </div>
                    <p className="text-lg font-black text-violet-900">150+ Livrés</p>
                    <div className="w-full bg-violet-200 h-1 rounded-full overflow-hidden">
                      <div className="bg-violet-600 h-full w-[85%]" />
                    </div>
                  </div>

                  {/* Metric Box 2 */}
                  <div className="rounded-xl bg-slate-50 p-2.5 border border-slate-100 space-y-1">
                    <div className="flex justify-between text-[10px] text-slate-500 font-medium">
                      <span>Académie & Talents</span>
                      <Cpu className="w-3 h-3 text-indigo-600" />
                    </div>
                    <p className="text-base font-bold text-slate-900">2 500+ Formés</p>
                    <p className="text-[9px] text-slate-500">Bootcamps & Certifications</p>
                  </div>

                  {/* Status checklist */}
                  <div className="space-y-1 text-[10px] text-slate-600 pt-1">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      <span>Next.js & Cloud Native</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      <span>Flutter & Mobile Apps</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      <span>Agents IA Intégrés</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Chip: ISO Security & Fast Delivery */}
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-4 left-8 sm:left-12 z-30 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-violet-100 flex items-center gap-2.5 text-xs font-bold text-slate-800"
              >
                <div className="w-7 h-7 rounded-xl bg-violet-600 text-white flex items-center justify-center">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] text-slate-500 font-semibold uppercase">Performance</span>
                  <span className="text-xs text-violet-700 font-extrabold">Sprint & Delivery 48h</span>
                </div>
              </motion.div>

              {/* Floating Chip: AI Model */}
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute -top-4 right-6 sm:right-10 z-30 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-slate-200 flex items-center gap-2 text-xs font-bold text-slate-800"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-bold text-slate-900">IA & Solutions Prêtes</span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        dict={dict.modal}
      />
    </section>
  );
}
