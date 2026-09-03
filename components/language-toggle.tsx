"use client"

import { useLanguage } from "@/lib/i18n"

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { language, setLanguage } = useLanguage()

  return (
    <div
      role="group"
      aria-label="Language selector"
      className={`inline-flex items-center rounded-full border border-border bg-secondary/60 p-0.5 text-xs shadow-2xs ${className}`}
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        aria-label="Switch language to English"
        className={`rounded-full px-2.5 py-1 font-medium transition-all duration-200 ${
          language === "en"
            ? "bg-foreground text-background shadow-xs font-semibold"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage("id")}
        aria-pressed={language === "id"}
        aria-label="Ganti bahasa ke Bahasa Indonesia"
        className={`rounded-full px-2.5 py-1 font-medium transition-all duration-200 ${
          language === "id"
            ? "bg-foreground text-background shadow-xs font-semibold"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        ID
      </button>
    </div>
  )
}
