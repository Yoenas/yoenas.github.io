"use client"

import { profile } from "@/lib/portfolio-data"
import { useLanguage } from "@/lib/i18n"

export function About() {
  const { t, language } = useLanguage()
  const displayLocation =
    language === "id" ? profile.locationId || profile.location : profile.location

  const stats = [
    { value: "6+", label: t.about.stats.years },
    { value: "100+", label: t.about.stats.bugs },
    { value: "18+", label: t.about.stats.apps },
  ]

  return (
    <section
      id="about"
      className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16 md:py-24"
    >
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <div>
          <span className="text-xs font-medium uppercase tracking-widest text-primary">
            {t.about.eyebrow}
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {t.about.title}
          </h2>
          <div className="mt-6 flex flex-col gap-4 text-pretty leading-relaxed text-muted-foreground">
            <p>{t.about.p1(profile.name, displayLocation)}</p>
            <p>{t.about.p2}</p>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-8 rounded-2xl border border-border bg-card p-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-semibold tracking-tight text-foreground">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
