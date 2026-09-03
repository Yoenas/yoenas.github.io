"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import { translations, type Language } from "./translations"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  toggleLanguage: () => void
  t: (typeof translations)[Language]
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const STORAGE_KEY = "portfolio_lang"

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Language | null
      if (saved === "en" || saved === "id") {
        setLanguageState(saved)
      }
    } catch {
      // ignore storage errors
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    try {
      localStorage.setItem(STORAGE_KEY, language)
    } catch {
      // ignore storage errors
    }
    document.documentElement.lang = language
  }, [language, mounted])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
  }

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === "en" ? "id" : "en"))
  }

  const t = translations[language]

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
