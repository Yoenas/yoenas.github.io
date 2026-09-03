"use client"

import { profile } from "@/lib/portfolio-data"
import { useLanguage } from "@/lib/i18n"

export function Hero() {
  const { t, language } = useLanguage()
  const displayTagline =
    language === "id" ? profile.taglineId || profile.tagline : profile.tagline

  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-16 pt-20 md:pb-24 md:pt-28">
      {profile.available && (
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          {t.hero.available}
        </div>
      )}

      <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-6xl">
        {t.hero.headline}
      </h1>

      <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
        {displayTagline}
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="#work"
          className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          {t.hero.viewWork}
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
        >
          {profile.email}
        </a>
      </div>
    </section>
  )
}
