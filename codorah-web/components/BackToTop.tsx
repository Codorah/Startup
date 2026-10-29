'use client';

import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

interface BackToTopProps {
  label: string;
}

const RADIUS = 22;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function BackToTop({ label }: BackToTopProps) {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(window.scrollY > 600);
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const scrollToTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={label}
      title={label}
      tabIndex={visible ? 0 : -1}
      className={`group fixed z-30 right-[max(1.25rem,env(safe-area-inset-right))] bottom-[max(1.25rem,env(safe-area-inset-bottom))] w-14 h-14 rounded-full bg-white/90 backdrop-blur-md shadow-xl shadow-violet-900/15 border border-slate-100 flex items-center justify-center transition-[opacity,translate,background-color] duration-300 hover:bg-violet-600 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      {/* Reading progress ring */}
      <svg className="absolute inset-0 -rotate-90" viewBox="0 0 56 56" aria-hidden>
        <circle cx="28" cy="28" r={RADIUS} fill="none" strokeWidth="2.5" className="stroke-violet-100 group-hover:stroke-violet-400" />
        <circle
          cx="28"
          cy="28"
          r={RADIUS}
          fill="none"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE * (1 - progress)}
          className="stroke-violet-600 group-hover:stroke-white"
        />
      </svg>
      <ChevronUp className="relative w-5 h-5 text-violet-700 transition-[color,translate] duration-300 group-hover:text-white group-hover:-translate-y-0.5" />
    </button>
  );
}
