import { getDictionary } from '@/lib/i18n/dictionaries';
import HeroSection from '@/components/HeroSection';
import SectorsMarquee from '@/components/SectorsMarquee';
import AboutSection from '@/components/AboutSection';
import ServicesAlternating from '@/components/ServicesAlternating';
import ProjectsSection from '@/components/ProjectsSection';
import ProcessSection from '@/components/ProcessSection';
import FormationsGrid from '@/components/FormationsGrid';
import WhyUsAlternating from '@/components/WhyUsAlternating';
import CtaBanner from '@/components/CtaBanner';
import ContactSection from '@/components/ContactSection';

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
      <HeroSection dict={dict.hero} />
      <SectorsMarquee dict={dict.sectors} />
      <AboutSection dict={dict.about} />
      <ServicesAlternating dict={dict.services} />
      <ProjectsSection dict={dict.projects} />
      <ProcessSection dict={dict.process} />
      <FormationsGrid dict={dict.trainings} />
      <WhyUsAlternating dict={dict.whyUs} />
      <CtaBanner dict={dict.ctaBanner} />
      <ContactSection dict={dict.contact} />
    </>
  );
}
