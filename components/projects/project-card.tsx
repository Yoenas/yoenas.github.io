'use client'

import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { useLang } from '@/lib/language-context'
import { t, ui } from '@/lib/localization'
import { getLocalizedProject, type Project, type MediaItem } from '@/lib/portfolio-data'
import { ProjectVisual } from './project-visual'
import { AppleIcon } from '../icons/apple-icon'
import { PlayStoreIcon } from '../icons/play-store-icon'
import { GitHubIcon } from '../icons/github-icon'

export function ProjectCard({
  project,
  onSelect,
  isAnyLightboxOpen,
  onOpenLightbox,
}: {
  project: Project
  onSelect: (project: Project) => void
  isAnyLightboxOpen: boolean
  onOpenLightbox: (items: MediaItem[], startIndex: number) => void
}) {
  const { lang } = useLang()
  const lp = getLocalizedProject(project, lang)
  const isPublished = project.detail.status === 'production'

  return (
    <article className={`project-card flex flex-col justify-between ${isAnyLightboxOpen ? '' : 'group'}`}>
      <div className="flex items-start justify-between gap-4 p-6 pb-4 flex-col md:flex-row">
        <div className="flex flex-col gap-2 min-w-0">
          <div className='flex gap-3'>
            <div className="relative size-12 shrink-0 overflow-hidden rounded-lg border border-white/10 shadow-md">
              <Image
                src={project.logoImage}
                alt={`${project.title} logo`}
                fill
                sizes="32px"
                className="object-cover"
              />
            </div>
            <div className='flex flex-col'>
              <h3 className="text-xl font-semibold tracking-tight text-foreground">{project.title}</h3>
              <p className="text-[15px] text-muted-foreground mt-0.5">{project.eyebrow.en}</p>
            </div>
          </div>
          <div>
            <span className="inline-flex items-center rounded-md border border-sky-400/20 bg-sky-400/10
             px-2.5 py-0.5 text-xs font-medium text-sky-300">
              {lp.metric}
            </span>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-end gap-1.5 shrink-0">
          {project.platforms.map((platform) => (
            <span
              key={platform}
              className="text-xs bg-white/5 text-neutral-400 border border-white/10 rounded-md px-2 py-1"
            >
              {platform}
            </span>
          ))}
        </div>
      </div>

      <ProjectVisual
        project={project}
        isAnyLightboxOpen={isAnyLightboxOpen}
        onOpenLightbox={onOpenLightbox}
      />

      <div className="flex flex-1 flex-col justify-between gap-4 p-6 pb-0">
        <p className="text-sm leading-relaxed text-neutral-300">{lp.thesis}</p>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-neutral-400/80">
          {project.techStack.map((tech, idx) => (
            <span key={tech} className="inline-flex items-center">
              <span>{tech}</span>
              {idx < project.techStack.length - 1 && (
                <span className="ml-2 text-neutral-600 select-none">·</span>
              )}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6 pt-0">
        <div className="border-t border-white/10 mt-4 pt-4">
          <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex flex-wrap items-center gap-3">
              {project.appStoreUrl && (
                <a
                  href={project.appStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="store-button"
                  aria-label={`${t(ui.downloadAppStore, lang)} (${project.title})`}
                >
                  <AppleIcon />
                  <span>{t(ui.appStoreLabel, lang)}</span>
                </a>
              )}
              {project.playStoreUrl && (
                <a
                  href={project.playStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="store-button"
                  aria-label={`${t(ui.getOnPlayStore, lang)} (${project.title})`}
                >
                  <PlayStoreIcon />
                  <span>{t(ui.playStoreLabel, lang)}</span>
                </a>
              )}
              {project.githubUrl && isPublished && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="store-button store-button-secondary"
                  aria-label={`${t(ui.viewSource, lang)} (${project.title})`}
                >
                  <GitHubIcon />
                  <span>{t(ui.sourceLabel, lang)}</span>
                </a>
              )}
              {!isPublished && (
                <div className="inline-flex h-10 items-center gap-2 rounded-xl border border-emerald-400/20
                 bg-emerald-400/5 px-3 text-xs font-medium text-emerald-300/90">
                  <span className="size-1.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50" />
                  <span>{t(ui.qaPassedLockup, lang)}</span>
                </div>
              )}
            </div>

            <div className="w-full sm:w-auto">
              {isPublished ? (
                <button
                  type="button"
                  className="case-study-button w-full sm:w-auto"
                  onClick={() => onSelect(project)}
                  aria-label={`${t(ui.viewCaseStudy, lang)}: ${project.title}`}
                >
                  <span>{t(ui.viewCaseStudy, lang)}</span>
                  <ArrowUpRight size={15} aria-hidden="true" />
                </button>
              ) : (
                <button
                  type="button"
                  className="verification-button w-full sm:w-auto"
                  onClick={() => onSelect(project)}
                  aria-label={`${t(ui.inspectProof, lang)}: ${project.title}`}
                >
                  <span>{t(ui.inspectProof, lang)}</span>
                  <ArrowUpRight size={15} aria-hidden="true" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
