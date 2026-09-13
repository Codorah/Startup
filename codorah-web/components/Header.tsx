'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import ContactModal from './ContactModal';
import type { Dictionary } from '@/lib/i18n/dictionaries';

interface HeaderProps {
  locale: 'fr' | 'en';
  dict: Dictionary;
}

export default function Header({ locale, dict }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageSwitch = (newLocale: 'fr' | 'en') => {
    if (newLocale === locale) return;
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    const targetPath = pathname.includes('/galerie')
      ? `/${newLocale}/galerie`
      : `/${newLocale}`;
    router.push(targetPath);
  };

  const navLinks = [
    { label: dict.nav.services, href: `/${locale}#services` },
    { label: dict.nav.trainings, href: `/${locale}#trainings` },
    { label: dict.nav.projects, href: `/${locale}#projects` },
    { label: dict.nav.gallery, href: `/${locale}/galerie` },
    { label: dict.nav.testimonials, href: `/${locale}#testimonials` },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'nav-glass shadow-sm py-3' : 'bg-white/80 backdrop-blur-md py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">

          {/* Logo */}
          <Logo locale={locale} />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Compact language toggle */}
            <div className="flex items-center gap-0.5 p-1 rounded-lg bg-slate-100 border border-slate-200">
              {(['fr', 'en'] as const).map((loc) => (
                <button
                  key={loc}
                  type="button"
                  onClick={() => handleLanguageSwitch(loc)}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold uppercase transition-all ${
                    locale === loc
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {loc}
                </button>
              ))}
            </div>

            {/* Quote request — outline */}
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 text-sm font-semibold text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-lg transition-all cursor-pointer"
            >
              {dict.nav.requestQuote}
            </button>

            {/* Primary CTA — violet */}
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 text-sm font-semibold text-white bg-violet-600 hover:bg-violet-700 rounded-lg shadow-sm shadow-violet-600/25 flex items-center gap-2 transition-all cursor-pointer"
            >
              <span>{dict.nav.getStarted}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile: lang + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <div className="flex items-center gap-0.5 p-1 rounded-lg bg-slate-100 text-xs font-bold">
              {(['fr', 'en'] as const).map((loc) => (
                <button
                  key={loc}
                  type="button"
                  onClick={() => handleLanguageSwitch(loc)}
                  className={`px-2 py-1 rounded ${
                    locale === loc ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'
                  }`}
                >
                  {loc.toUpperCase()}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-6 pt-3 pb-6 space-y-1 shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 space-y-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => { setMobileMenuOpen(false); setIsModalOpen(true); }}
                className="w-full py-3 text-center text-sm font-semibold text-white bg-slate-900 rounded-xl flex items-center justify-center gap-2"
              >
                {dict.nav.getStarted} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        dict={dict.modal}
        defaultService="select"
      />
    </>
  );
}
