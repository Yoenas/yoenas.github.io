'use client'

import { useLang } from '@/lib/language-context'
import { t, ui } from '@/lib/localization'
import { skillGroups } from '@/lib/portfolio-data'
import { SectionHeading } from '../ui/section-heading'

export function StackSection() {
  const { lang } = useLang()

  return (
    <section id="stack" className="page-shell section-pad">
      <SectionHeading eyebrow={t(ui.stackEyebrow, lang)} title={t(ui.stackTitle, lang)} detail={t(ui.stackDetail, lang)} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <div className="bento-card" key={group.title}>
            <div>
              <p className="eyebrow">0{index + 1}</p>
              <h3 className="mt-12 text-2xl font-semibold tracking-[-0.04em]">{group.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{t(group.description, lang)}</p>
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              {group.items.map((item) => <span className="tag" key={item}>{item}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
