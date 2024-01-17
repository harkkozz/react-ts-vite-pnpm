/* eslint-disable @typescript-eslint/no-floating-promises */
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import { defaultTranslations } from './defaultTranslations';

const translationResources = defaultTranslations();

export function idiomSetup() {
  i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
      detection: {
        caches: [],
      },
      resources: translationResources,
      defaultNS: 'translation',
      ns: 'translation',
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: true,
      },
    });
}
