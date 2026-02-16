export const languages = ["fa", "en", "de"] as const;
export type Lang = (typeof languages)[number];

export const defaultLang: Lang = "fa";

export const translations = {
  fa: {
    dir: "rtl",
    title: "سلام 👋",
    Value_Proposition: "مهندس فرانت‌اند با تمرکز بر عملکرد و معماری تمیز",
  },
  en: {
    dir: "ltr",
    title: "Hello 👋",
    Value_Proposition:
      "Frontend Engineer Focused on Performance & Clean Architecture",
  },
  de: {
    dir: "ltr",
    title: "Hallo 👋",
    Value_Proposition: "Frontend-Entwickler mit Fokus auf Performance und saubere Architektur",
  },
};
