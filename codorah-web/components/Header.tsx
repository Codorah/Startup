'use client';

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Logo from './Logo';
import type { Dictionary } from '@/lib/i18n/dictionaries';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface HeaderProps {
  locale: 'fr' | 'en';
  dict: Dictionary;
}

function setLocaleCookie(newLocale: string) {
  document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
}

export default function Header({ locale, dict }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const router = useRouter();

  useGSAP(
    () => {
      const header = headerRef.current;
      if (!header) return;

      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from(header, { yPercent: -100, duration: 0.9, ease: 'power3.out', delay: 0.1 });
      });

      // Hide while scrolling down, reveal while scrolling up
      const show = gsap.quickTo(header, 'yPercent', { duration: 0.35, ease: 'power2.out' });
      ScrollTrigger.create({
        start: 0,
        end: 'max',
        onUpdate: (self) => {
          const y = self.scroll();
          setIsScrolled(y > 8);
          show(self.direction === 1 && y > 240 ? -100 : 0);
        },
      });

      return () => mm.revert();
    },
    { scope: headerRef },
  );

  const handleLanguageSwitch = (newLocale: 'fr' | 'en') => {
    if (newLocale === locale) return;
    setLocaleCookie(newLocale);
    router.push(`/${newLocale}`);
  };

  const navLinks = [
    { label: dict.nav.services, href: `/${locale}#services` },
    { label: dict.nav.projects, href: `/${locale}#projects` },
    { label: dict.nav.approach, href: `/${locale}#approach` },
    { label: dict.nav.trainings, href: `/${locale}#trainings` },
    { label: dict.nav.whyUs, href: `/${locale}#why-us` },
  ];

  const languageToggle = (
    <div className="flex items-center gap-0.5 p-1 rounded-lg bg-slate-100 border border-slate-200">
      {(['fr', 'en'] as const).map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => handleLanguageSwitch(loc)}
          aria-pressed={locale === loc}
          className={`px-2.5 py-1 rounded-md text-xs font-bold uppercase transition-all ${
            locale === loc ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          {loc}
        </button>
      ))}
    </div>
  );

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-40 transition-[background-color,box-shadow,padding] duration-300 ${
        isScrolled || mobileMenuOpen ? 'nav-glass shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between gap-6">
        <Logo locale={locale} />

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {languageToggle}
          <a
            href={`/${locale}#contact`}
            className="group px-4 py-2.5 text-sm font-semibold text-white bg-violet-600 hover:bg-violet-700 rounded-xl shadow-sm shadow-violet-600/25 flex items-center gap-2 transition-colors"
          >
            <span>{dict.nav.getStarted}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="flex md:hidden items-center gap-2">
          {languageToggle}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label={dict.nav.menu}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden grid transition-[grid-template-rows] duration-300 ease-out ${
          mobileMenuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pt-3 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-100">
              <a
                href={`/${locale}#contact`}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 text-center text-sm font-semibold text-white bg-violet-600 rounded-xl flex items-center justify-center gap-2"
              >
                {dict.nav.getStarted} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
