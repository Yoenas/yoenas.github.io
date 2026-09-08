'use client'

import { useLang } from '@/lib/language-context'
import { t, ui } from '@/lib/localization'
import { experience, getLocalizedExperience } from '@/lib/portfolio-data'
import { SectionHeading } from '../ui/section-heading'

export function ExperienceSection() {
  const { lang } = useLang()

  return (
    <section id="experience" className="page-shell section-pad">
      <SectionHeading eyebrow={t(ui.expEyebrow, lang)} title={t(ui.expTitle, lang)} />
      <div className="grid gap-0 border-t border-white/10">
        {experience.map((item) => {
          const le = getLocalizedExperience(item, lang)
          return (
            <div className="timeline-row" key={item.company}>
              <div className="text-sm text-muted-foreground">{item.period}</div>
              <div>
                <h3 className="text-xl font-medium">{le.role}</h3>
                <p className="mt-1 text-sky-200">{item.company}</p>
                <p className="mt-4 max-w-xl leading-7 text-muted-foreground">{le.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {le.highlights.map((highlight) => <span className="tag" key={highlight}>{highlight}</span>)}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
