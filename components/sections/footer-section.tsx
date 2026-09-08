'use client'

import { useState } from 'react'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { useLang } from '@/lib/language-context'
import { t, ui } from '@/lib/localization'
import { profile } from '@/lib/portfolio-data'

export function FooterSection() {
  const { lang } = useLang()
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard?.writeText(profile.email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <footer id="contact" className="page-shell section-pad pb-10">
      <div className="footer-card">
        <p className="eyebrow">{t(ui.contactEyebrow, lang)}</p>
        <h2 className="mt-4 max-w-2xl text-balance text-4xl font-semibold tracking-tighter md:text-6xl">{t(ui.contactTitle, lang)}</h2>
        <button className="button-primary mt-8" onClick={copyEmail}>
          {copied ? t(ui.contactCopied, lang) : t(ui.contactButton, lang)} <ArrowUpRight size={17} />
        </button>
      </div>
      <div className="flex flex-col gap-5 border-t border-white/10 pt-6 text-sm 
      text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 {profile.name}</span>
        <div className="flex gap-4">
          <a className="social-link" href={profile.github} target="_blank" rel="noreferrer"><ExternalLink size={16} />GitHub</a>
          <a className="social-link" href={profile.linkedin} target="_blank" rel="noreferrer"><ExternalLink size={16} />LinkedIn</a>
          <a className="social-link" href={profile.instagram} target="_blank" rel="noreferrer"><ExternalLink size={16} />Instagram</a>
        </div>
      </div>
    </footer>
  )
}
