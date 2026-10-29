'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Globe, LayoutDashboard, HeartHandshake } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import type { Dictionary } from '@/lib/i18n/dictionaries';

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

interface HeroSectionProps {
  dict: Dictionary['hero'];
}

const CHIP_ICONS = [Globe, LayoutDashboard, HeartHandshake];
const CHIP_POSITIONS = [
  'top-[6%] -left-2 sm:left-0',
  'top-[42%] -right-2 sm:right-0',
  'bottom-[6%] left-[6%]',
];

// Rotating word timing (seconds): each word stays STEP, slides in/out over SWAP,
// and the first word is fully in place at FIRST_IN.
const STEP = 2.4;
const SWAP = 0.65;
const FIRST_IN = 1.05;

/**
 * Pure CSS rotation: all words share one grid cell and run the same keyframes,
 * offset by STEP each, so exactly one word is in view while the next slides in
 * as the previous slides out. No JS state means it can't drift or stack up.
 */
function buildRotatingKeyframes(count: number) {
  if (count < 2) return '';
  const pct = (s: number) => `${((s / (count * STEP)) * 100).toFixed(3)}%`;
  return `@keyframes hero-word-${count}{0%{transform:translateY(110%)}${pct(SWAP)},${pct(STEP)}{transform:translateY(0)}${pct(STEP + SWAP)},100%{transform:translateY(-110%)}}`;
}

export default function HeroSection({ dict }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const count = dict.rotating.length;
  const rotatingCss = buildRotatingKeyframes(count);
  const rotatingAnimation = (i: number) =>
    `hero-word-${count} ${count * STEP}s cubic-bezier(0.65,0,0.35,1) ${FIRST_IN - SWAP + i * STEP}s infinite both`;

  useGSAP(
    () => {
      const q = gsap.utils.selector(sectionRef);
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const split = SplitText.create(q('[data-hero-split]'), {
          type: 'words',
          mask: 'words',
        });

        // Explicit end states (fromTo, not from): the elements start hidden by CSS, so a
        // from() re-run (React Strict Mode in dev) would record "hidden" as its end value.
        const shown = { autoAlpha: 1, x: 0, y: 0, yPercent: 0, scale: 1 };
        gsap.set(q('[data-hero-split]'), { autoAlpha: 1 });

        const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.1 } });
        tl.fromTo(q('[data-hero="badge"]'), { y: 20, autoAlpha: 0 }, { ...shown, duration: 0.8 }, 0.2)
          .fromTo(split.words, { yPercent: 110 }, { yPercent: 0, stagger: 0.06 }, 0.3)
          .fromTo(q('[data-hero="rotator"]'), { yPercent: 60, autoAlpha: 0 }, shown, 0.5)
          .fromTo(q('[data-hero="text"]'), { y: 24, autoAlpha: 0 }, { ...shown, stagger: 0.1 }, 0.8)
          .fromTo(q('[data-hero="mockup"]'), { y: 80, scale: 0.9, autoAlpha: 0 }, { ...shown, duration: 1.4 }, 0.4)
          .fromTo(
            q('[data-hero="chip"]'),
            { scale: 0.6, y: 30, autoAlpha: 0 },
            { ...shown, stagger: 0.15, ease: 'back.out(1.8)', duration: 0.8 },
            1.1,
          )
          .fromTo(
            q('[data-hero="glow"]'),
            { scale: 0.4, autoAlpha: 0 },
            { autoAlpha: 1, scale: 1, duration: 2, ease: 'power2.out' },
            0,
          );

        // Idle floating
        gsap.to(q('[data-float]'), {
          y: -14,
          duration: 3,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
          stagger: { each: 0.6, from: 'random' },
        });
        gsap.to(q('[data-hero="glow"]'), {
          xPercent: 8,
          yPercent: -6,
          duration: 8,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
        });

        // Scroll away: copy drifts up, mockup sinks slightly
        gsap.to(q('[data-hero-copy]'), {
          y: -60,
          autoAlpha: 0.2,
          ease: 'none',
          scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: true },
        });
        gsap.to(q('[data-hero-visual]'), {
          y: 80,
          ease: 'none',
          scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: true },
        });

        return () => split.revert();
      });

      // Pointer tilt on the mockup (mouse only)
      mm.add('(prefers-reduced-motion: no-preference) and (pointer: fine)', () => {
        const visual = q('[data-hero="mockup"]')[0];
        const section = sectionRef.current;
        if (!visual || !section) return;

        const rotY = gsap.quickTo(visual, 'rotationY', { duration: 0.8, ease: 'power3.out' });
        const rotX = gsap.quickTo(visual, 'rotationX', { duration: 0.8, ease: 'power3.out' });
        gsap.set(visual, { transformPerspective: 1200 });

        const onMove = (e: PointerEvent) => {
          const rect = section.getBoundingClientRect();
          const px = (e.clientX - rect.left) / rect.width - 0.5;
          const py = (e.clientY - rect.top) / rect.height - 0.5;
          rotY(px * 10);
          rotX(-py * 8);
        };
        const onLeave = () => {
          rotY(0);
          rotX(0);
        };

        section.addEventListener('pointermove', onMove);
        section.addEventListener('pointerleave', onLeave);
        return () => {
          section.removeEventListener('pointermove', onMove);
          section.removeEventListener('pointerleave', onLeave);
        };
      });

      return () => mm.revert();
    },
    { scope: sectionRef, dependencies: [dict], revertOnUpdate: true },
  );

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-white pt-32 pb-20 lg:pt-28"
    >
      <div className="absolute inset-0 bg-grid-dots opacity-50 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
      <div
        data-hero="glow"
        className="absolute top-1/2 right-[2%] -translate-y-1/2 w-[620px] h-[620px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, rgba(167,139,250,0.06) 50%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.09) 0%, transparent 70%)', filter: 'blur(30px)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-8 items-center">
          {/* Copy */}
          <div data-hero-copy className="space-y-8">
            <span
              data-hero="badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-xs font-bold uppercase tracking-wider"
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-violet-500 animate-ping opacity-60" />
                <span className="relative w-2 h-2 rounded-full bg-violet-600" />
              </span>
              {dict.badge}
            </span>

            <h1 className="font-[family-name:var(--font-jakarta)] text-[2.6rem] sm:text-6xl lg:text-[4.2rem] font-extrabold text-slate-900 tracking-tight leading-[1.05]">
              <span data-hero data-hero-split className="block">
                {dict.titleStart}
              </span>
              <span data-hero="rotator" className="grid overflow-hidden pb-[0.1em] -mb-[0.1em]">
                {rotatingCss && <style>{rotatingCss}</style>}
                {dict.rotating.map((word, i) => (
                  <span
                    key={word}
                    aria-hidden={i !== 0}
                    className={`hero-word [grid-area:1/1] whitespace-nowrap text-violet-600 ${i === 0 ? 'hero-word-first' : ''}`}
                    style={rotatingCss ? { animation: rotatingAnimation(i) } : undefined}
                  >
                    {word}
                  </span>
                ))}
              </span>
              <span data-hero data-hero-split className="block">
                {dict.titleEnd}
              </span>
            </h1>

            <p data-hero="text" className="text-lg text-slate-600 leading-relaxed max-w-xl">
              {dict.description}
            </p>

            <div data-hero="text" className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-violet group justify-center">
                <span>{dict.primaryCta}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#services" className="btn-outline-dark justify-center">
                {dict.secondaryCta}
              </a>
            </div>

            <ul data-hero="text" className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-slate-600">
              {dict.points.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-violet-600" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual */}
          <div data-hero-visual className="relative flex items-center justify-center">
            <div data-hero="mockup" className="relative w-full max-w-xl will-change-transform">
              <div data-float>
                <Image
                  src="/mockup.png"
                  alt=""
                  width={1536}
                  height={1024}
                  priority
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="w-full h-auto object-contain select-none drop-shadow-[0_40px_60px_rgba(76,29,149,0.25)]"
                />
              </div>

              {dict.chips.map((chip, i) => {
                const Icon = CHIP_ICONS[i % CHIP_ICONS.length];
                return (
                  <div key={chip} data-hero="chip" className={`absolute ${CHIP_POSITIONS[i % CHIP_POSITIONS.length]}`}>
                    <div
                      data-float
                      className="flex items-center gap-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-100 shadow-xl shadow-violet-900/10 px-3.5 py-2.5"
                    >
                      <span className="w-8 h-8 rounded-xl bg-violet-600 text-white flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-800 whitespace-nowrap">{chip}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
