'use client';

import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const REVEAL_FROM: Record<string, gsap.TweenVars> = {
  up: { y: 48 },
  left: { x: -64 },
  right: { x: 64 },
  scale: { scale: 0.92, y: 24 },
  fade: {},
};

/**
 * Page-wide scroll animations driven by data attributes, so sections can stay
 * server components:
 * - data-reveal="up|left|right|scale|fade"  fades the element in when it enters the viewport
 * - data-parallax="12"                      moves the element by ±12% while its parent scrolls by
 * - data-line="x|y"                         draws the element along an axis as its parent scrolls by
 */
export default function ScrollAnimations() {
  const pathname = usePathname();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const groups = new Map<string, HTMLElement[]>();
        gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
          const type = el.dataset.reveal || 'up';
          groups.set(type, [...(groups.get(type) ?? []), el]);
        });

        groups.forEach((elements, type) => {
          const from = REVEAL_FROM[type] ?? REVEAL_FROM.up;
          gsap.set(elements, { autoAlpha: 0, ...from });
          ScrollTrigger.batch(elements, {
            start: 'clamp(top 90%)',
            once: true,
            onEnter: (batch) =>
              gsap.to(batch, {
                autoAlpha: 1,
                x: 0,
                y: 0,
                scale: 1,
                duration: 1,
                ease: 'power3.out',
                stagger: 0.12,
                overwrite: true,
                // Hand transforms back to CSS so hover effects keep working
                clearProps: 'transform',
              }),
          });
        });

        gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
          const amount = Number(el.dataset.parallax) || 10;
          gsap.fromTo(
            el,
            { yPercent: -amount },
            {
              yPercent: amount,
              ease: 'none',
              scrollTrigger: {
                trigger: el.parentElement,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            },
          );
        });

        gsap.utils.toArray<HTMLElement>('[data-line]').forEach((el) => {
          const axis = el.dataset.line === 'x' ? 'scaleX' : 'scaleY';
          gsap.fromTo(
            el,
            { [axis]: 0 },
            {
              [axis]: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: el.parentElement,
                start: 'top 75%',
                end: 'bottom 60%',
                scrub: 0.6,
              },
            },
          );
        });
      });

      return () => mm.revert();
    },
    { dependencies: [pathname], revertOnUpdate: true },
  );

  return null;
}
