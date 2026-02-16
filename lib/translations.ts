export const languages = ["fa", "en", "de"] as const;
export type Lang = (typeof languages)[number];

export const defaultLang: Lang = "fa";

export const translations = {
  fa: {
    dir: "rtl",
    title: "سلام 👋",
  },
  en: {
    dir: "ltr",
    title: "Hello 👋",
  },
  de: {
    dir: "ltr",
    title: "Hallo 👋",
  },
};
