import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck, Award } from 'lucide-react';
import Logo from './Logo';
import type { Dictionary } from '@/lib/i18n/dictionaries';

interface FooterProps {
  locale: 'fr' | 'en';
  dict: Dictionary;
}

export default function Footer({ locale, dict }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50/80 text-slate-600 border-t border-slate-200/90 relative overflow-hidden">
      {/* Ambient subtle background grid */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">

          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6">
            <Logo locale={locale} showTagline />

            <p className="text-sm text-slate-600 leading-relaxed max-w-sm font-normal">
              {dict.footer.tagline}
            </p>

            {/* Corporate Location & Contacts */}
            <div className="space-y-3 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-violet-100/70 text-violet-700 flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <a
                  href="mailto:contact@codorah.com"
                  className="hover:text-violet-700 transition-colors"
                >
                  contact@codorah.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-violet-100/70 text-violet-700 flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>+33 (0) 1 84 80 52 10 / +228 90 00 00 00</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-violet-100/70 text-violet-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span>Paris, France & Lomé, Togo</span>
              </div>
            </div>

            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200/90 text-[11px] font-semibold text-slate-700 shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Conforme RGPD & Sécurité Entreprise</span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              {dict.nav.services}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href={`/${locale}#services`} className="hover:text-violet-700 transition-colors">
                  {dict.services.items[0]?.title || 'Développement Web & Mobile'}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}#services`} className="hover:text-violet-700 transition-colors">
                  {dict.services.items[1]?.title || 'Intelligence Artificielle & ML'}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}#services`} className="hover:text-violet-700 transition-colors">
                  {dict.services.items[2]?.title || 'Cloud & DevOps'}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}#services`} className="hover:text-violet-700 transition-colors">
                  {dict.services.items[3]?.title || 'UI/UX & Product Design'}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}#services`} className="hover:text-violet-700 transition-colors">
                  {dict.services.items[4]?.title || 'Cybersécurité & Audits'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Formations / Academy */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              {dict.nav.trainings}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href={`/${locale}#trainings`} className="hover:text-violet-700 transition-colors">
                  {dict.trainings.items[0]?.title || 'Développement Full-Stack'}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}#trainings`} className="hover:text-violet-700 transition-colors">
                  {dict.trainings.items[1]?.title || 'Intelligence Artificielle & Data'}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}#trainings`} className="hover:text-violet-700 transition-colors">
                  {dict.trainings.items[2]?.title || 'Cybersécurité Opérationnelle'}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}#trainings`} className="hover:text-violet-700 transition-colors">
                  {dict.trainings.items[3]?.title || 'Fondamentaux du Numérique'}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/galerie`} className="inline-flex items-center gap-1.5 text-violet-700 font-semibold hover:underline">
                  <span>{dict.nav.gallery}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate & Legal */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Entreprise
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href={`/${locale}#why-us`} className="hover:text-violet-700 transition-colors">
                  {dict.nav.whyUs}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}#projects`} className="hover:text-violet-700 transition-colors">
                  {dict.nav.projects}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}#testimonials`} className="hover:text-violet-700 transition-colors">
                  {dict.nav.testimonials}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}#contact`} className="hover:text-violet-700 transition-colors">
                  {dict.nav.contact}
                </Link>
              </li>
              <li>
                <span className="text-xs text-slate-400">
                  SAS au capital de 100 000 €
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom divider & copyright bar */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} Codorah Inc. Tous droits réservés. L’ingénierie logicielle au standard international.
          </p>
          <div className="flex items-center gap-6">
            <Link href={`/${locale}#terms`} className="hover:text-violet-700 transition-colors">
              Mentions Légales
            </Link>
            <Link href={`/${locale}#privacy`} className="hover:text-violet-700 transition-colors">
              Confidentialité
            </Link>
            <Link href={locale === 'fr' ? '/en' : '/fr'} className="hover:text-violet-700 font-bold transition-colors">
              {locale === 'fr' ? 'Switch to English' : 'Passer en Français'}
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
