import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import eng from "../locales/en/translation.json";
import ger from "../locales/gr/translation.json";
import slo from "../locales/slo/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // debug: true,
    fallbackLng: "en",
    returnObjects: true,
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    resources: {
      en: eng,
      slo: slo,
      gr: ger,
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
