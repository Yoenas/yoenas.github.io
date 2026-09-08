'use client'

import { useState } from 'react'
import { Check, Copy, Menu, X } from 'lucide-react'
import { useLang } from '@/lib/language-context'
import { t, ui } from '@/lib/localization'
import { profile } from '@/lib/portfolio-data'
import { LanguageToggle } from '../ui/language-toggle'

export function Navbar() {
  const { lang } = useLang()
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard?.writeText(profile.email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  const navItems: Array<[string, string]> = [
    ['#about', t(ui.navAbout, lang)],
    ['#work', t(ui.navWork, lang)],
    ['#stack', t(ui.navStack, lang)],
    ['#experience', t(ui.navExperience, lang)],
    ['#contact', t(ui.navContact, lang)],
  ]

  return (
    <nav className="fixed inset-x-4 top-4 z-40 mx-auto flex max-w-6xl items-center justify-between 
    rounded-2xl border border-white/10 bg-background/80 px-4 py-3 shadow-lg backdrop-blur-xl md:inset-x-6 md:px-5">
      <a href="#top" className="flex items-center gap-3" aria-label="Yusril home">
        <span className="grid size-8 place-items-center rounded-lg bg-foreground text-xs font-bold text-background">YN</span>
        <span className="hidden text-sm font-medium sm:inline">{profile.handle}</span>
      </a>

      <div className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-16 flex-col gap-1 rounded-2xl border border-white/10 bg-card p-3 md:static md:flex md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0`}>
        {navItems.map(([href, label]) => (
          <a key={href} href={href} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground">{label}</a>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <LanguageToggle />
        <button className="hidden button-quiet sm:flex" onClick={copyEmail}>
          {copied ? <Check size={15} /> : <Copy size={15} />}
          {copied ? t(ui.copied, lang) : t(ui.emailMe, lang)}
        </button>
        <button className="icon-button md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
    </nav>
  )
}
