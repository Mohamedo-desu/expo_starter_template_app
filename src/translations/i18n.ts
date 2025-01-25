import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import {
  ar,
  de,
  en,
  es,
  fr,
  hi,
  it,
  ja,
  ko,
  pt,
  ru,
  so,
  sw,
  zh,
} from "./languages";

i18n.use(initReactI18next).init({
  resources: {
    en,
    so,
    ar,
    hi,
    pt,
    ru,
    ja,
    ko,
    fr,
    es,
    de,
    it,
    zh,
    sw,
  },
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language in case the current language isn't available
  interpolation: {
    escapeValue: false, // React already escapes by default
  },
});

export default i18n;
