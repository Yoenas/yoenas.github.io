'use client'

import { motion } from 'framer-motion'
import { useLang } from '@/lib/language-context'
import { t, ui } from '@/lib/localization'

export function LanguageToggle() {
  const { lang, setLang } = useLang()
  const options: Array<{ value: 'en' | 'id'; label: string }> = [
    { value: 'en', label: 'EN' },
    { value: 'id', label: 'ID' },
  ]

  return (
    <div
      className="lang-toggle"
      role="radiogroup"
      aria-label={t(ui.selectLanguage, lang)}
    >
      {options.map((opt) => (
        <button
          key={opt.value}
          role="radio"
          aria-checked={lang === opt.value}
          className={`lang-toggle-segment ${lang === opt.value ? 'lang-toggle-active' : ''}`}
          onClick={() => setLang(opt.value)}
        >
          {lang === opt.value && (
            <motion.span
              layoutId="activeLang"
              className="lang-toggle-pill"
              transition={{ type: 'spring', stiffness: 500, damping: 35 }}
            />
          )}
          <span className="relative z-10">{opt.label}</span>
        </button>
      ))}
    </div>
  )
}
