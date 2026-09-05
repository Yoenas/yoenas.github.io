'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { Lang } from './localization'

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'en',
  setLang: () => {},
})

const STORAGE_KEY = 'lang'

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'en'
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'en' || stored === 'id') return stored
  return navigator.language.startsWith('id') ? 'id' : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setLangState(getInitialLang())
    setMounted(true)
  }, [])

  const setLang = (next: Lang) => {
    setLangState(next)
    localStorage.setItem(STORAGE_KEY, next)
  }

  // avoid hydration mismatch — render children immediately but
  // the lang value resolves on mount
  return (
    <LanguageContext.Provider value={{ lang: mounted ? lang : 'en', setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang(): LanguageContextValue {
  return useContext(LanguageContext)
}
