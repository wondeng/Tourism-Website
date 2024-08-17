import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import translationEN from './locales/en/translation.json';
import translationNP from './locales/np/translation.json';
import translationTB from './locales/tb/translation.json'; // Tibetan translation

const resources = {
  en: {
    translation: translationEN,
  },
  np: {
    translation: translationNP,
  },
  tb: {
    translation: translationTB, // Tibetan translation
  },
};

i18n
  .use(LanguageDetector) // Detects the language in the browser
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language if translation is not available
    interpolation: {
      escapeValue: false, // React already escapes the content
    },
  });

export default i18n;
