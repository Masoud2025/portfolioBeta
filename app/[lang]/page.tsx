import AlertWelcome from "@/components/AlertWelcome";
import { ModeToggle } from "@/components/mode-toggle";
import { languages, translations, type Lang } from "@/lib/translations";
import DeFlag from "@/public/DE.svg";
import IRFlag from "@/public/IR.svg";
import UsaFlag from "@/public/usa.svg";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Hero from "../../components/layout/Hero";
export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!languages.includes(lang as Lang)) {
    notFound();
  }

  const currentLang = lang as Lang;
  const t = translations[currentLang];

  return (
    <div className="p-10 space-y-6">
      <h1 className="text-4xl font-bold">{t.title}</h1>

      <ModeToggle />
      <Hero lang={lang} />
      <AlertWelcome />
      <div className="flex gap-4">
        <Link href="/fa">
          <Image alt="" src={IRFlag} />
        </Link>
        <Link href="/en">
          <Image alt="" src={UsaFlag} />
        </Link>
        <Link href="/de">
          <Image alt="" src={DeFlag} />
        </Link>
      </div>
    </div>
  );
}
