// components/layout/Hero.tsx
import { languages, translations, type Lang } from "@/lib/translations";
import { notFound } from "next/navigation";

type HeroProps = {
  lang: string;
};

export default function Hero({ lang }: HeroProps) {
  // if (!languages.includes(lang)) {
  //   notFound();
  // }
if (!languages.includes(lang as typeof languages[number])) {
  notFound();
}

  const currentLang = lang as Lang;
  const t = translations[currentLang];

  return (
    <div>
      <h1>Frontend Engineer Focused on Performance & Clean Architecture</h1>
      <h1 className="text-4xl font-bold">{t.Value_Proposition}</h1>
    </div>
  );
}
