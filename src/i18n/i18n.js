import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en/translation.json';
import id from './id/translation.json';

export const resources = {
  en: {
    translation: en,
  },
  id: {
    translation: id,
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});
