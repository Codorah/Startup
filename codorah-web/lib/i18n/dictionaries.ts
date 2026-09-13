import type { Locale } from './config';

const dictionaries = {
  fr: () => import('@/messages/fr.json').then((module) => module.default),
  en: () => import('@/messages/en.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  if (locale in dictionaries) {
    return dictionaries[locale]();
  }
  return dictionaries.fr();
};

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
