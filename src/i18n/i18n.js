import i18n from "i18next";
import {initReactI18next, useTranslation} from "react-i18next";
import {toUpperCase} from "../utils/format";
import en from "./en/translation.json";
import id from "./id/translation.json";
 
export const resources = {
  en: {
    translation: en,
  },
  id: {
    translation: id,
  },
};

export const translator = {
  t: (text, capitalization = 1) => toUpperCase(useTranslation().t(`${text}`), capitalization)
};

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
