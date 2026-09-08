'use client'

import { useLang } from '@/lib/language-context'
import { t, ui } from '@/lib/localization'
import { projects, type Project, type MediaItem } from '@/lib/portfolio-data'
import { SectionHeading } from '../ui/section-heading'
import { ProjectCard } from '../projects/project-card'

export function WorkSection({
  onSelectProject,
  lightbox,
  onOpenLightbox,
}: {
  onSelectProject: (p: Project) => void
  lightbox: { items: MediaItem[], startIndex: number, title: string, accent: Project['accent'] } | null
  onOpenLightbox: (items: MediaItem[], startIndex: number, title: string, accent: Project['accent']) => void
}) {
  const { lang } = useLang()
  
  return (
    <section id="work" className="page-shell section-pad">
      <SectionHeading eyebrow={t(ui.workEyebrow, lang)} title={t(ui.workTitle, lang)} detail={t(ui.workDetail, lang)} />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            onSelect={onSelectProject}
            isAnyLightboxOpen={lightbox !== null}
            onOpenLightbox={(items, startIndex) => onOpenLightbox(items, startIndex, project.title, project.accent)}
          />
        ))}
      </div>
    </section>
  )
}
