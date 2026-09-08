'use client'

import { useLang } from '@/lib/language-context'
import { t, ui } from '@/lib/localization'
import { profile } from '@/lib/portfolio-data'

export function HeroSection() {
  const { lang } = useLang()
  
  return (
    <section id="top" className="hero-shell page-shell">
      <div className="max-w-4xl">
        <div className="status-pill">
          <span className="status-dot" />{t(ui.heroStatus, lang)}
        </div>
        <h1 className="mt-8 text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.07em] md:text-8xl">
          {t(ui.heroTitle1, lang)}<br />
          <span className="text-muted-foreground">{t(ui.heroTitle2, lang)}</span>
        </h1>
        <p className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground md:text-xl">{t(profile.tagline, lang)}</p>
        <div className="mt-10 flex flex-wrap gap-2">
          {['Compose Multiplatform', 'Flutter', 'Android SDK'].map((item) => (
            <span className="tag" key={item}>{item}</span>
          ))}
        </div>
      </div>
      <div className="mt-20 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-5">
        <div><p className="stat-value">04</p><p className="stat-label">{t(ui.statBuilds, lang)}</p></div>
        <div><p className="stat-value">07+</p><p className="stat-label">{t(ui.statYears, lang)}</p></div>
        <div><p className="stat-value">18+</p><p className="stat-label">{t(ui.statApps, lang)}</p></div>
      </div>
    </section>
  )
}
