"use client";

import { useTheme } from "next-themes";
import { useCallback, useRef } from "react";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isTransitioning = useRef(false);

  if (!resolvedTheme) return null;

  const nextTheme = resolvedTheme === "dark" ? "light" : "dark";

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const handleToggle = useCallback(
    async (e: React.MouseEvent) => {
      // جلوگیری از double-click
      if (isTransitioning.current) return;
      isTransitioning.current = true;

      const x = e.clientX;
      const y = e.clientY;

      const maxRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y),
      );

      if (!document.startViewTransition) {
        setTheme(nextTheme);
        isTransitioning.current = false;
        return;
      }

      // ── مهم‌ترین بخش ──
      // قبل از startViewTransition، کلاس رو اعمال میکنیم
      // و localStorage رو دستی مینویسیم تا next-themes sync بمونه
      const root = document.documentElement;

      const transition = document.startViewTransition(() => {
        // فقط یه کار synchronous ساده — فقط class toggle
        root.classList.toggle("dark", nextTheme === "dark");
        root.classList.toggle("light", nextTheme === "light");
      });

      // بعد از اینکه view transition snapshot گرفت،
      // next-themes رو آپدیت میکنیم — دیگه flash نمیزنه
      // چون snapshot قبلاً گرفته شده
      transition.ready.then(() => {
        // sync کردن next-themes بدون trigger کردن re-render اضافه
        localStorage.setItem("theme", nextTheme);
        setTheme(nextTheme);

        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${maxRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 600,
            easing: "cubic-bezier(0.4, 0, 0.2, 1)",
            pseudoElement: "::view-transition-new(root)",
          },
        );
      });

      transition.finished.then(() => {
        isTransitioning.current = false;
      });
    },
    [nextTheme, setTheme],
  );

  return (
    <button
      ref={buttonRef}
      onClick={handleToggle}
      className="
        relative flex items-center justify-center
        h-10 w-10 rounded-xl
        border border-border
        bg-background
        hover:scale-105 active:scale-95
        transition-transform duration-200
      "
    >
      {resolvedTheme === "light" ? "☀️" : "🌙"}
    </button>
  );
}
