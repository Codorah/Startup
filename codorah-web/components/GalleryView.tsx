'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import {
  Camera,
  X,
  ZoomIn,
  MapPin,
  Tag,
  ChevronLeft,
  ChevronRight,
  Award,
  Globe2,
  Users,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import type { Dictionary } from '@/lib/i18n/dictionaries';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  desc: string;
  location?: string;
  tag?: string;
}

interface GalleryViewProps {
  locale: 'fr' | 'en';
  dict: Dictionary['gallery'];
}

export default function GalleryView({ locale, dict }: GalleryViewProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: dict.all },
    {
      id: 'cat_leadership',
      label: dict.cat_leadership || (locale === 'fr' ? 'Leadership & CEO' : 'Leadership & CEO'),
    },
    { id: 'cat_events', label: dict.cat_events },
    { id: 'cat_training', label: dict.cat_training },
    { id: 'cat_tech', label: dict.cat_tech },
    { id: 'cat_team', label: dict.cat_team },
  ];

  const filteredItems: GalleryItem[] =
    activeCategory === 'all'
      ? (dict.items as GalleryItem[])
      : (dict.items as GalleryItem[]).filter((item) => item.category === activeCategory);

  const activeImage =
    activeImageIndex !== null && filteredItems[activeImageIndex]
      ? filteredItems[activeImageIndex]
      : null;

  const handleNext = useCallback(() => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => ((prev ?? 0) + 1) % filteredItems.length);
  }, [activeImageIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => ((prev ?? 0) - 1 + filteredItems.length) % filteredItems.length);
  }, [activeImageIndex, filteredItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === 'Escape') setActiveImageIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, handleNext, handlePrev]);

  // Grid layout helper for styled bento effect
  const getItemSpanClass = (item: GalleryItem, index: number) => {
    if (item.id === 'ceo-elearning-photocall') {
      return 'md:col-span-1 md:row-span-2 h-[560px]';
    }
    if (item.id === 'ceo-elearning-stage') {
      return 'md:col-span-2 md:row-span-1 h-[380px]';
    }
    if (item.id === 'ceo-award') {
      return 'md:col-span-2 md:row-span-1 h-[380px]';
    }
    if (item.id === 'ceo-giz-summit') {
      return 'md:col-span-1 md:row-span-2 h-[560px]';
    }
    if (index % 5 === 0) {
      return 'md:col-span-2 h-[340px]';
    }
    return 'h-[340px]';
  };

  return (
    <div className="pt-28 pb-24 md:pt-36 md:pb-32 bg-slate-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-14">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100/80 border border-violet-200 text-violet-700 text-xs font-bold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5" />
            <span>{dict.badge}</span>
          </div>
          <h1 className="display-lg text-slate-900 tracking-tight">{dict.title}</h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {dict.subtitle}
          </p>
        </div>

        {/* CEO Spotlight Banner Card */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-violet-950 via-slate-900 to-indigo-950 text-white p-8 md:p-12 shadow-2xl border border-violet-800/40">
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)',
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left copy & leadership credentials */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/20 border border-violet-400/30 text-violet-300 text-xs font-bold tracking-wide uppercase">
                <Camera className="w-3.5 h-3.5 text-yellow-400" />
                <span>Direction Générale & Leadership</span>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Mme Elodie H. ATANA
                </h2>
                <p className="text-violet-300 text-sm sm:text-base font-semibold">
                  CEO & Fondatrice de Codorah — Ingénierie & Académie Numérique
                </p>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal italic border-l-2 border-violet-500 pl-4">
                &ldquo;
                {locale === 'fr'
                  ? "Contribuer au développement des compétences et des usages numériques utiles en Afrique."
                  : 'Propelling Africa to the tech forefront by building uncompromising software architectures and empowering African talent with world-class training.'}
                &rdquo;
              </p>

              {/* Badges / summits */}
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 text-xs font-semibold text-slate-200 border border-white/10">
                  <Globe2 className="w-3.5 h-3.5 text-violet-400" />
                  eLearning Africa (Accra, Ghana)
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 text-xs font-semibold text-slate-200 border border-white/10">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  Reconnaissance République Togolaise
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 text-xs font-semibold text-slate-200 border border-white/10">
                  <Users className="w-3.5 h-3.5 text-emerald-400" />
                  Écosystème numérique
                </span>
              </div>
            </div>

            {/* Right mini collage of CEO */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-64 sm:w-72 h-80 sm:h-96 rounded-2xl overflow-hidden border-2 border-violet-400/40 shadow-2xl group cursor-pointer"
                onClick={() => {
                  const idx = filteredItems.findIndex(
                    (item) => item.id === 'ceo-elearning-photocall'
                  );
                  if (idx !== -1) setActiveImageIndex(idx);
                }}
              >
                <Image
                  src="/codorah-im4.jpg"
                  alt="Mme Elodie H. ATANA CEO Codorah"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span className="text-xs font-bold text-white bg-violet-600/90 px-3 py-1 rounded-full backdrop-blur-md">
                    Photocall Officiel eLearning Africa
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-4">
          {categories.map((cat) => {
            const count =
              cat.id === 'all'
                ? dict.items.length
                : dict.items.filter((i) => i.category === cat.id).length;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/25 scale-102'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-violet-300 hover:text-violet-700'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full font-mono ${
                    activeCategory === cat.id
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Stylée Bento Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item, index) => {
              const spanClass = getItemSpanClass(item, index);

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setActiveImageIndex(index)}
                  className={`group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-sm hover:shadow-2xl hover:border-violet-300 transition-all duration-300 cursor-pointer ${spanClass}`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

                  {/* Top badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md text-white border border-white/20">
                      <Tag className="w-3 h-3 text-violet-300" />
                      {item.tag || (item.category === 'cat_leadership' ? 'Leadership' : 'Codorah')}
                    </span>

                    <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-200">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Bottom details */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 space-y-2">
                    {item.location && (
                      <div className="flex items-center gap-1.5 text-violet-300 text-xs font-semibold">
                        <MapPin className="w-3 h-3" />
                        <span>{item.location}</span>
                      </div>
                    )}
                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug group-hover:text-violet-200 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-2 font-normal leading-relaxed opacity-90">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal with Next/Prev and Full Context */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-slate-950/90 backdrop-blur-xl"
            onClick={() => setActiveImageIndex(null)}
          >
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[92vh] bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Lightbox Header Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-violet-400 bg-violet-500/10 px-3 py-1 rounded-full border border-violet-500/20">
                    {(activeImageIndex ?? 0) + 1} / {filteredItems.length}
                  </span>
                  {activeImage.location && (
                    <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-violet-400" />
                      {activeImage.location}
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setActiveImageIndex(null)}
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Image Viewport */}
              <div className="relative w-full h-[52vh] sm:h-[60vh] bg-black/40 flex items-center justify-center">
                <Image
                  src={activeImage.image}
                  alt={activeImage.title}
                  fill
                  className="object-contain"
                  priority
                />

                {/* Left & Right Nav Buttons */}
                {filteredItems.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrev();
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-950/70 hover:bg-violet-600 text-white border border-white/15 flex items-center justify-center backdrop-blur-md transition-all cursor-pointer"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNext();
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-950/70 hover:bg-violet-600 text-white border border-white/15 flex items-center justify-center backdrop-blur-md transition-all cursor-pointer"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>

              {/* Lightbox Footer with Description */}
              <div className="p-6 bg-slate-950/80 border-t border-slate-800 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-violet-600 text-white">
                    {activeImage.tag || 'Codorah'}
                  </span>
                  <h3 className="text-lg font-bold text-white leading-snug">
                    {activeImage.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-300 font-normal leading-relaxed">
                  {activeImage.desc}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
