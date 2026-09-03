"use client"

import { experience } from "@/lib/portfolio-data"
import { useLanguage } from "@/lib/i18n"

export function ExperienceTimeline() {
  const { t, language } = useLanguage()

  return (
    <section
      id="experience"
      className="scroll-mt-20 border-y border-border bg-card"
    >
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">
            {t.experience.eyebrow}
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {t.experience.title}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {t.experience.subtitle}
          </p>
        </div>

        <ol className="relative border-l border-border">
          {experience.map((job) => {
            const displayRole =
              language === "id" ? job.roleId || job.role : job.role
            const displayPeriod =
              language === "id" ? job.periodId || job.period : job.period
            const displayDescription =
              language === "id" ? job.descriptionId || job.description : job.description

            return (
              <li key={`${job.company}-${job.role}-${job.period}`} className="ml-6 pb-10 last:pb-0">
                <span className="absolute -left-1.75 mt-1.5 size-3.5 rounded-full border-2 border-background bg-primary" />
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                  <h3 className="text-lg font-semibold text-foreground">
                    {displayRole}{" "}
                    <span className="font-normal text-muted-foreground">
                      · {job.company}
                    </span>
                  </h3>
                  <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {displayPeriod}
                  </span>
                </div>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {displayDescription}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
