// Dark light Theme
import { ThemeProvider } from "next-themes";

import "../globals.css";

import {
  defaultLang,
  languages,
  translations,
  type Lang,
} from "@/lib/translations";

import { notFound } from "next/navigation";
import { ReactNode } from "react";

export default async function LangLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  const currentLang = languages.includes(lang as Lang)
    ? (lang as Lang)
    : defaultLang;

  if (!languages.includes(currentLang)) notFound();

  const t = translations[currentLang];

  return (
    <html lang={currentLang} dir={t.dir}>
      <body className="min-h-screen bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
          storageKey="theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
