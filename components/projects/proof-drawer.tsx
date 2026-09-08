'use client'

import { useEffect, useState } from 'react'
import { Check, X, ZoomIn } from 'lucide-react'
import { useLang } from '@/lib/language-context'
import { t, ui } from '@/lib/localization'
import { getLocalizedProject, getLocalizedProjectDetail, type Project } from '@/lib/portfolio-data'
import { StatusBadge } from '../ui/status-badge'
import { ArtifactIcon } from '../icons/artifact-icon'
import { DrawerActions } from './drawer-actions'

export function ProofDrawer({ project, onClose }: { project: Project; onClose: () => void }) {
  const { lang } = useLang()
  const artifacts = project.detail.artifacts ?? []
  const [active, setActive] = useState(0)
  const [zoomed, setZoomed] = useState(false)
  const artifact = artifacts[active]
  const lp = getLocalizedProject(project, lang)
  const ld = getLocalizedProjectDetail(project.detail, lang)

  useEffect(() => {
    const handler = (event: KeyboardEvent) => event.key === 'Escape' && (zoomed ? setZoomed(false) : onClose())
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, zoomed])

  return (
    <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true" aria-label={`${project.title} engineering proof`}>
      <button className="absolute inset-0 cursor-default bg-background/80 backdrop-blur-sm"
        aria-label={t(ui.proofClose, lang)} onClick={onClose} />
      <aside className="proof-drawer relative h-full w-full max-w-2xl overflow-y-auto border-l border-white/10 bg-card p-6 shadow-2xl md:p-10">
        <button className="icon-button fixed right-5 top-5" onClick={onClose} aria-label={t(ui.proofClose, lang)}><X size={18} /></button>

        <p className="eyebrow mt-12">{t(ui.caseStudyEyebrow, lang)}</p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <h2 className="text-4xl font-semibold tracking-tighter">{project.title}</h2>
          {project.detail.status && <StatusBadge status={project.detail.status} />}
        </div>
        {ld.verification && <p className="mt-4 text-lg leading-8 text-muted-foreground">{ld.verification}</p>}

        <div className="proof-metric mt-8">
          <p className="eyebrow">{t(ui.proofSignal, lang)}</p>
          <p className="mt-2 text-xl font-medium">{lp.metric}</p>
        </div>

        <div className="my-8 grid gap-6 border-y border-white/10 py-8">
          <div>
            <p className="eyebrow">{t(ui.proofChallenge, lang)}</p>
            <p className="mt-3 leading-7 text-foreground/80">{ld.challenge}</p>
          </div>
          <div>
            <p className="eyebrow">{t(ui.proofApproach, lang)}</p>
            <p className="mt-3 leading-7 text-foreground/80">{ld.approach}</p>
          </div>
        </div>

        {artifacts.length > 0 && (
          <div>
            <div className="flex items-center justify-between gap-4">
              <p className="eyebrow">{t(ui.proofArtifacts, lang)}</p>
              <button className="text-button" onClick={() => setZoomed(true)}><ZoomIn size={15} />{t(ui.proofFocusView, lang)}</button>
            </div>
            <div className="artifact-tabs mt-4" role="tablist">
              {artifacts.map((item, index) => (
                <button key={item.label} role="tab" aria-selected={active === index}
                  className={`artifact-tab ${active === index ? 'artifact-tab-active' : ''}`}
                  onClick={() => setActive(index)}>
                  <ArtifactIcon kind={item.kind} />{item.label}
                </button>
              ))}
            </div>
            {artifact && (
              <div className="evidence-frame mt-3">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                  <span className="text-xs text-muted-foreground">{artifact.summary}</span>
                  <span className="h-2 w-2 rounded-full bg-emerald-300" />
                </div>
                <pre className="min-h-52 overflow-auto p-5 text-sm leading-7 text-emerald-200"><code>{artifact.lines.join('\n')}</code></pre>
              </div>
            )}
          </div>
        )}

        <div className="mt-8">
          <p className="eyebrow">{t(ui.proofOutcomes, lang)}</p>
          <ul className="mt-3 grid gap-3">
            {ld.outcomes.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-foreground/80"><Check size={15} className="text-sky-300" />{item}</li>
            ))}
          </ul>
        </div>

        {(project.detail.status === 'production' || project.githubUrl) && (
          <div className="mt-8">
            <DrawerActions project={project} />
          </div>
        )}

        <div className="mt-8">
          <p className="eyebrow">{t(ui.proofTechStack, lang)}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.techStack.map((tech) => <span className="tag" key={tech}>{tech}</span>)}
            {project.platforms.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
          </div>
        </div>
      </aside>

      {zoomed && artifact && (
        <div className="fixed inset-0 z-60 grid place-items-center bg-background/90 
        p-5 backdrop-blur-md" role="dialog" aria-label={t(ui.proofCloseFocus, lang)}
          onClick={() => setZoomed(false)}>
          <div className="evidence-focus w-full max-w-3xl" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <span className="text-sm text-muted-foreground">{project.title} / {artifact.label}</span>
              <button className="icon-button" onClick={() => setZoomed(false)} aria-label={t(ui.proofCloseFocus, lang)}><X size={17} /></button>
            </div>
            <pre className="overflow-auto p-6 text-sm leading-8 text-emerald-200 md:text-base"><code>{artifact.lines.join('\n')}</code></pre>
          </div>
        </div>
      )}
    </div>
  )
}
