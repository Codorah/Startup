import { Mail, MapPin, Phone } from 'lucide-react';
import Logo from './Logo';
import { CONTACT } from '@/lib/site';
import type { Dictionary } from '@/lib/i18n/dictionaries';

interface FooterProps {
  locale: 'fr' | 'en';
  dict: Dictionary;
}

export default function Footer({ locale, dict }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const linkClass = 'hover:text-violet-700 transition-colors';

  return (
    <footer className="bg-slate-50/80 text-slate-600 border-t border-slate-200/90">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-5 space-y-6">
            <Logo locale={locale} />
            <p className="text-sm leading-relaxed max-w-sm">{dict.footer.tagline}</p>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <a href={`mailto:${CONTACT.email}`} className={`flex items-center gap-3 ${linkClass}`}>
                  <span className="w-8 h-8 rounded-lg bg-violet-100/70 text-violet-700 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </span>
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 ${linkClass}`}
                >
                  <span className="w-8 h-8 rounded-lg bg-violet-100/70 text-violet-700 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </span>
                  WhatsApp · {CONTACT.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-violet-100/70 text-violet-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </span>
                {dict.footer.location}
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">{dict.nav.services}</h4>
            <ul className="space-y-2.5 text-sm">
              {dict.services.items.map((item) => (
                <li key={item.id}>
                  <a href={`/${locale}#services`} className={linkClass}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">{dict.footer.companyTitle}</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href={`/${locale}#projects`} className={linkClass}>{dict.nav.projects}</a></li>
              <li><a href={`/${locale}#approach`} className={linkClass}>{dict.nav.approach}</a></li>
              <li><a href={`/${locale}#trainings`} className={linkClass}>{dict.nav.trainings}</a></li>
              <li><a href={`/${locale}#why-us`} className={linkClass}>{dict.nav.whyUs}</a></li>
              <li><a href={`/${locale}#contact`} className={linkClass}>{dict.nav.contact}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Codorah. {dict.footer.rights}</p>
          <a href={locale === 'fr' ? '/en' : '/fr'} className={`font-bold ${linkClass}`}>
            {dict.footer.switchLang}
          </a>
        </div>
      </div>
    </footer>
  );
}
