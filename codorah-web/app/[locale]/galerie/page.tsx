import { getDictionary } from '@/lib/i18n/dictionaries';
import GalleryView from '@/components/GalleryView';
import CtaSection from '@/components/CtaSection';
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
    title: `${dict.gallery.title} | Codorah`,
    description: dict.gallery.subtitle,
  };
}

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = (locale === 'en' ? 'en' : 'fr') as 'fr' | 'en';
  const dict = await getDictionary(safeLocale);

  return (
    <>
      <GalleryView locale={safeLocale} dict={dict.gallery} />
      <CtaSection dict={dict.cta} modalDict={dict.modal} />
    </>
  );
}
