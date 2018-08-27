import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { reactI18nextModule } from "react-i18next";
import ICU from "i18next-icu";

i18n
  .use(ICU)
  .use(Backend)
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    fallbackLng: "en",

    ns: ["translations"],
    defaultNS: "translations",

    debug: false,

    interpolation: {
      escapeValue: false
    },

    react: {
      wait: true
    }
  });

export default i18n;
