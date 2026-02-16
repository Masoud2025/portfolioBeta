import { ModeToggle } from "@/components/mode-toggle";
import { languages, translations, type Lang } from "@/lib/translations";
import Link from "next/link";
import { notFound } from "next/navigation";

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
      <h1 className="text-3xl font-bold">{t.title}</h1>

      <ModeToggle />

      <div className="flex gap-4">
        <Link href="/fa">IR</Link>
        <Link href="/en">EN</Link>
        <Link href="/de">DE</Link>
      </div>
    </div>
  );
}
