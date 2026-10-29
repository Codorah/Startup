import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { i18n, type Locale } from '@/lib/i18n/config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollAnimations from '@/components/ScrollAnimations';
import BackToTop from '@/components/BackToTop';
import '../globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
});

export const dynamicParams = false;

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

function toLocale(locale: string): Locale {
  return locale === 'en' ? 'en' : 'fr';
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = toLocale((await params).locale);
  const dict = await getDictionary(locale);

  return {
    metadataBase: new URL('https://codorah.com'),
    title: dict.meta.title,
    description: dict.meta.description,
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/icon.png', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      ],
      apple: '/apple-icon.png',
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'fr-FR': '/fr',
        'en-US': '/en',
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `/${locale}`,
      siteName: 'Codorah',
      locale: locale === 'en' ? 'en_US' : 'fr_FR',
      type: 'website',
      images: ['/mockup.png'],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const locale = toLocale((await params).locale);
  const dict = await getDictionary(locale);

  return (
    <html lang={locale} className={`${inter.variable} ${plusJakarta.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white font-sans text-slate-900 antialiased">
        <noscript>
          <style>{'[data-reveal],[data-hero]{visibility:visible!important;opacity:1!important}'}</style>
        </noscript>
        <div className="flex min-h-screen flex-col">
          <Header locale={locale} dict={dict} />
          <main className="flex-1">{children}</main>
          <Footer locale={locale} dict={dict} />
        </div>
        <BackToTop label={dict.nav.backToTop} />
        <ScrollAnimations />
      </body>
    </html>
  );
}
