import { getDictionary } from '@/lib/i18n/dictionaries';
import HeroSection from '@/components/HeroSection';
import PitchBar from '@/components/PitchBar';
import ImmersiveSection from '@/components/ImmersiveSection';
import ServicesAlternating from '@/components/ServicesAlternating';
import ConceptSection from '@/components/ConceptSection';
import MediaGrid from '@/components/MediaGrid';
import FormationsGrid from '@/components/FormationsGrid';
import WhyUsAlternating from '@/components/WhyUsAlternating';
import MarqueePartners from '@/components/MarqueePartners';
import CtaBanner from '@/components/CtaBanner';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = (locale === 'en' ? 'en' : 'fr') as 'fr' | 'en';
  const dict = await getDictionary(safeLocale);

  return (
    <>
      {/* 1. Hero Section (sans 3D, image statique) */}
      <HeroSection locale={safeLocale} dict={dict} />

      {/* 2. PitchBar — 3 mini-blocs avec vagues SVG */}
      <PitchBar dict={dict.pitch} />

      {/* 3. Section immersive — vidéo/image + texte overlay */}
      <ImmersiveSection dict={dict.immersive} />

      {/* 4. Services alternés — 7 blocs image gauche/droite */}
      <ServicesAlternating dict={dict.services} modalDict={dict.modal} />

      {/* 5. Section concept central entouré de fonctionnalités */}
      <ConceptSection dict={dict.concept} />

      {/* 6. MediaGrid — Grille 2×2 articles avec hover reveal */}
      <MediaGrid dict={dict.mediaGrid} />

      {/* 7. FormationsGrid — Grille 3 cards formations */}
      <FormationsGrid dict={dict.trainings} modalDict={dict.modal} />

      {/* 8. WhyUs alternés — 4 piliers image/texte */}
      <WhyUsAlternating dict={dict.whyUs} />

      {/* 9. Marquee partenaires infini */}
      <MarqueePartners title={dict.partners?.title} />

      {/* 10. Bandeau CTA avec dashboard mockup */}
      <CtaBanner dict={dict.ctaBanner} modalDict={dict.modal} locale={safeLocale} />
    </>
  );
}
