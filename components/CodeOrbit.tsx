
// File: CodeOrbitFixed.tsx
"use client";
import "../app/globals.css";
import React from "react";

const snippets = [
  "DEV",
  "IT GUY",
  "$",
  ";",
  "{}",
];

export default function CodeOrbitFixed() {
  return (
    <div className="orbit-wrapper">
      {snippets.map((code, i) => (
        <pre key={i} className={`orbit-item item-${i + 1}`}>
          {code}
        </pre>
      ))}
    </div>
  );
}




