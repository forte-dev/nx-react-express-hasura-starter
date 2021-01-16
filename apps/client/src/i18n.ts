import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import english from './assets/i18n/en';
import french from './assets/i18n/fr';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: english,
      },
      fr: {
        translation: french,
      },
    },

    detection: {
      order: ['cookie', 'navigator'],
      lookupCookie: 'i18next',

      caches: ['cookie'],
      excludeCacheFor: ['cimode'],
    },

    fallbackLng: 'en',
    debug: false,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
