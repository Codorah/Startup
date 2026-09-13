import { getDictionary } from '@/lib/i18n/dictionaries';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = (locale === 'en' ? 'en' : 'fr') as 'fr' | 'en';
  const dict = await getDictionary(safeLocale);

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `https://codorah.com/${safeLocale}`,
      languages: {
        'fr-FR': 'https://codorah.com/fr',
        'en-US': 'https://codorah.com/en',
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `https://codorah.com/${safeLocale}`,
      siteName: 'Codorah',
      locale: safeLocale === 'en' ? 'en_US' : 'fr_FR',
      type: 'website',
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
  const { locale } = await params;
  const safeLocale = (locale === 'en' ? 'en' : 'fr') as 'fr' | 'en';
  const dict = await getDictionary(safeLocale);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header locale={safeLocale} dict={dict} />
      <main className="flex-1">{children}</main>
      <Footer locale={safeLocale} dict={dict} />
    </div>
  );
}
