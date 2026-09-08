'use client'

import { useLang } from '@/lib/language-context'
import { t, ui } from '@/lib/localization'
import { type Project } from '@/lib/portfolio-data'
import { AppleIcon } from '../icons/apple-icon'
import { PlayStoreIcon } from '../icons/play-store-icon'
import { GitHubIcon } from '../icons/github-icon'

export function DrawerActions({ project }: { project: Project }) {
  const { lang } = useLang()
  return (
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
      {project.githubUrl && (
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
    </div>
  )
}
