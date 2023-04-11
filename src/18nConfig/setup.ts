import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import { defaultTranslations } from './defaultTranslations';

const translationResources = defaultTranslations();

await i18n
  .use(initReactI18next)
  .use(detector)
  .init({
    detection: {
      caches: []
    },
    resources: translationResources,
    defaultNS: 'translation',
    ns: ['translation'],
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: true
    }
  });
