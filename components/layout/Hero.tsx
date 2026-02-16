// components/layout/Hero.tsx
import { languages, translations, type Lang } from "@/lib/translations";
import { notFound } from "next/navigation";
import devgif from "@/public/godhands.gif";
import Image from "next/image";
type HeroProps = {
  lang: string;
};

export default function Hero({ lang }: HeroProps) {
  // if (!languages.includes(lang)) {
  //   notFound();
  // }
  if (!languages.includes(lang as (typeof languages)[number])) {
    notFound();
  }

  const currentLang = lang as Lang;
  const t = translations[currentLang];

  return (
    <div>
      {/* Value_Proposition */}
      <h1>Frontend Engineer Focused on Performance & Clean Architecture</h1>
      {/* Clarification Line */}
      <h2>Next.js • TypeScript • Scalable UI Systems</h2>
      {/* CTA Call TO Action */}
      <div className="flex  gap-2">
        <button className="border-2 solid  rounded-2xl p-4 hover:bg-yellow-200">
          View Projects
        </button>
        <button className="border-2 solid  rounded-2xl p-4 hover:bg-yellow-200">
          Download Resume
        </button>
        <button className="border-2 solid  rounded-2xl p-4 hover:bg-yellow-200">
          Contact Me
        </button>
      </div>
      {/* credibility */}
      <h3> Available for Full-Time Opportunities</h3>
      <h4>Open to Frontend / Full-Stack Roles</h4>
      <h1 className="text-4xl font-bold">{t.Value_Proposition}</h1>
      {/* Hero image  */}
      <Image alt="" src={devgif}/>
    </div>
  );
}
