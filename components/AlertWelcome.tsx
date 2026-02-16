// components/AlertWelcome.tsx
"use client";

import { useEffect, useState } from "react";

export default function AlertWelcome() {
  const [show, setShow] = useState(true);

  // Hide After 5 Second automatically
  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div
      className="
        fixed top-5 left-1/2 -translate-x-1/2 z-50
        max-w-xl w-[90%] p-4 rounded-lg shadow-lg border
        bg-yellow-100 border-yellow-300 text-black
        font-medium text-center
      "
    >
      <p>خوش آمدید به سایت مسعود جعفری </p>
      <p>Welcome to my personal website</p>
      <p>Willkommen auf meiner persönlichen Website</p>
      <small className="block mt-2 text-sm text-gray-600">
        این سایت ۳ زبانه است و تم تاریک/روشن دارد و در حال توسعه است
      </small>
    </div>
  );
}
