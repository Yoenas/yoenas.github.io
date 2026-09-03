"use client"

import { skillGroups } from "@/lib/portfolio-data"
import { useLanguage } from "@/lib/i18n"

export function Skills() {
  const { t } = useLanguage()

  return (
    <section
      id="skills"
      className="scroll-mt-20 border-y border-border bg-card"
    >
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">
            {t.skills.eyebrow}
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {t.skills.title}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {t.skills.description}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const displayCategory =
              t.skills.categories[group.category as keyof typeof t.skills.categories] ||
              group.category

            return (
              <div
                key={group.category}
                className="rounded-2xl border border-border/70 bg-background/60 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-background hover:shadow-sm"
              >
                <h3 className="text-sm font-semibold tracking-tight text-foreground">
                  {displayCategory}
                </h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-muted-foreground"
                    >
                      <span className="size-1.5 shrink-0 rounded-full bg-primary/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

