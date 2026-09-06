'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight, Check, ChevronRight, Copy, ExternalLink, Eye, FileText, Layers3, Menu, Terminal, X, ZoomIn } from 'lucide-react'
import { motion, type Variants } from 'framer-motion'
import {
  experience,
  profile,
  projects,
  skillGroups,
  getLocalizedProject,
  getLocalizedProjectDetail,
  getLocalizedExperience,
  type Project,
  type ProofArtifact,
  type MediaItem,
} from '@/lib/portfolio-data'
import { useLang } from '@/lib/language-context'
import { t, ui } from '@/lib/localization'

/* ── Accent map ────────────────────────────────────────────── */

const accents = {
  sky: 'from-sky-400/20 via-sky-400/5 to-transparent text-sky-300',
  violet: 'from-violet-400/20 via-violet-400/5 to-transparent text-violet-300',
  emerald: 'from-emerald-400/20 via-emerald-400/5 to-transparent text-emerald-300',
  amber: 'from-amber-300/20 via-amber-300/5 to-transparent text-amber-200',
}

/* ── Inline SVG icons ──────────────────────────────────────── */

function AppleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 384 512" fill="currentColor" aria-hidden="true">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-62.1 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  )
}

function PlayStoreIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 496 512" fill="currentColor" aria-hidden="true">
      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.8-14.3-112.8-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z" />
    </svg>
  )
}

/* ── Language Toggle ───────────────────────────────────────── */

function LanguageToggle() {
  const { lang, setLang } = useLang()
  const options: Array<{ value: 'en' | 'id'; label: string }> = [
    { value: 'en', label: 'EN' },
    { value: 'id', label: 'ID' },
  ]

  return (
    <div
      className="lang-toggle"
      role="radiogroup"
      aria-label={t(ui.selectLanguage, lang)}
    >
      {options.map((opt) => (
        <button
          key={opt.value}
          role="radio"
          aria-checked={lang === opt.value}
          className={`lang-toggle-segment ${lang === opt.value ? 'lang-toggle-active' : ''}`}
          onClick={() => setLang(opt.value)}
        >
          {lang === opt.value && (
            <motion.span
              layoutId="activeLang"
              className="lang-toggle-pill"
              transition={{ type: 'spring', stiffness: 500, damping: 35 }}
            />
          )}
          <span className="relative z-10">{opt.label}</span>
        </button>
      ))}
    </div>
  )
}

/* ── Section Heading ───────────────────────────────────────── */

function SectionHeading({ eyebrow, title, detail }: { eyebrow: string; title: string; detail?: string }) {
  return (
    <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-[-0.04em] text-foreground md:text-5xl">{title}</h2>
      </div>
      {detail && <p className="max-w-xs text-sm leading-6 text-muted-foreground">{detail}</p>}
    </div>
  )
}

/* ── Media Lightbox ─────────────────────────────────── */

function MediaLightbox({
  items,
  startIndex,
  projectTitle,
  accent,
  onClose,
}: {
  items: MediaItem[]
  startIndex: number
  projectTitle: string
  accent: Project['accent']
  onClose: () => void
}) {
  const [idx, setIdx] = useState(startIndex)
  const total = items.length
  const item = items[idx]
  const videoRef = useRef<HTMLVideoElement>(null)

  const prev = () => setIdx((i) => (i - 1 + total) % total)
  const next = () => setIdx((i) => (i + 1) % total)

  // Pause video when navigating away
  useEffect(() => {
    if (item.kind !== 'video') videoRef.current?.pause()
  }, [idx, item.kind])

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose]) // eslint-disable-line react-hooks/exhaustive-deps

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div
      className={`fixed inset-0 z-70 flex items-center justify-center bg-linear-to-br ${accents[accent]} backdrop-blur-md pointer-events-auto`}
      role="dialog"
      aria-modal="true"
      aria-label={`${projectTitle} media viewer`}
      onClick={onClose}
    >
      {/* Media container — stops click from closing */}
      <div
        className="relative flex items-center justify-center"
        style={{ maxWidth: '90vw', maxHeight: '90vh', width: '100%', height: '100%' }}
        onClick={(e) => e.stopPropagation()}
      >
        {item.kind === 'image' ? (
          <div
            className="relative"
            style={{ maxWidth: '90vw', maxHeight: '90vh', width: '100%', height: '100%' }}
          >
            <Image
              src={item.src}
              alt={`${projectTitle} screenshot ${idx + 1}`}
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />
          </div>
        ) : (
          <video
            ref={videoRef}
            src={item.src}
            controls
            autoPlay
            playsInline
            className="rounded-xl shadow-2xl"
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              objectFit: 'contain',
              display: 'block',
            }}
          />
        )}

        {/* Close */}
        <button
          className="icon-button absolute -top-8 right-0 sm:right-0"
          onClick={onClose}
          aria-label="Close media viewer"
        >
          <X size={20} />
        </button>

        {/* Prev */}
        {total > 1 && (
          <button
            className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12
             icon-button hidden sm:flex items-center justify-center'
            onClick={prev}
            aria-label="Previous"
          >
            <ChevronRight size={20} className="rotate-180" />
          </button>
        )}

        {/* Next */}
        {total > 1 && (
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12
            icon-button hidden sm:flex items-center justify-center"
            onClick={next}
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        )}

        {/* Mobile swipe row — bottom bar */}
        {total > 1 && (
          <div className="absolute -bottom-8 left-0 right-0 flex items-center justify-center gap-4">
            <button className="icon-button sm:hidden" onClick={prev} aria-label="Previous">
              <ChevronRight size={18} className="rotate-180" />
            </button>
            {/* Dot strip */}
            <div className="flex items-center gap-1.5">
              {items.map((it, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`Go to item ${i + 1}`}
                  style={{ transition: 'all 0.25s ease' }}
                  className={`rounded-full bg-current ${i === idx ? 'w-5 h-1.5 opacity-90' : 'size-1.5 opacity-30'
                    }`}
                />
              ))}
            </div>
            <button className="icon-button sm:hidden" onClick={next} aria-label="Next">
              <ChevronRight size={18} />
            </button>
          </div>
        )}

        {/* Counter */}
        {total > 1 && (
          <span className="absolute -top-6 left-0 text-xs text-white/50 font-mono">
            {idx + 1} / {total}
          </span>
        )}
      </div>
    </div>
  )
}

/* ── Project Visual (Zone B: Hero Visual) ──────────────────── */

function ProjectVisual({
  project,
  isAnyLightboxOpen,
  onOpenLightbox,
}: {
  project: Project
  isAnyLightboxOpen: boolean
  onOpenLightbox: (items: import('@/lib/portfolio-data').MediaItem[], startIndex: number) => void
}) {
  const images = project.mockupImages ?? []
  const mediaItems = project.media ?? []
  const hasImages = images.length > 0
  const [active, setActive] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Auto-advance carousel
  useEffect(() => {
    if (!hasImages || images.length < 2 || isAnyLightboxOpen) return
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length)
    }, 3500)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [hasImages, images.length, isAnyLightboxOpen])

  const goTo = (index: number) => {
    if (timerRef.current) clearInterval(timerRef.current)
    setActive(index)
    // restart auto-advance after manual interaction
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length)
    }, 3500)
  }

  /** Open lightbox at the media item matching this thumbnail src */
  const openLightbox = (imageSrc: string) => {
    if (mediaItems.length === 0) return
    const mi = mediaItems.findIndex((m) => m.src === imageSrc)
    onOpenLightbox(mediaItems, mi >= 0 ? mi : 0)
  }

  return (
    <div className={`project-visual bg-linear-to-br ${accents[project.accent]} ${isAnyLightboxOpen ? 'pointer-events-none' : ''}`}>
      <div className="absolute inset-x-6 top-2 bottom-2 rounded-t-2xl sm:rounded-t-3xl
       shadow-2xl backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2
       group-hover:border-white/25 sm:inset-x-8 sm:top-2">
        {hasImages ? (
          /* ── Real mockup showcase ────────────────────────────── */
          <div className="flex h-full flex-col gap-3 pt-2">
            {/* Dot indicators */}
            <div className="flex items-center gap-1 shrink-0 self-end">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => goTo(idx)}
                  aria-label={`Go to screenshot ${idx + 1}`}
                  style={{ transition: 'all 0.3s ease' }}
                  className={`rounded-full bg-current ${idx === active
                    ? 'w-4 h-1.5 opacity-80'
                    : 'size-1.5 opacity-25'
                    }`}
                />
              ))}
            </div>

            {/* Screenshot fan — fills all remaining space, only 3 phones shown */}
            <div className="relative flex flex-1 items-center justify-center overflow-hidden">
              {images.map((src, idx) => {
                const offset = idx - active
                const isActive = offset === 0
                const isAdjacent = Math.abs(offset) === 1
                const isVisible = Math.abs(offset) <= 1
                return (
                  <button
                    key={src}
                    type="button"
                    aria-label={isActive && mediaItems.length > 0 ? `Open ${project.title} gallery` : `View screenshot ${idx + 1}`}
                    onClick={() => {
                      if (isActive) {
                        if (mediaItems.length > 0) openLightbox(src)
                      } else {
                        goTo(idx)
                      }
                    }}
                    style={{
                      position: 'absolute',
                      left: '50%',
                      transform: isActive
                        ? 'translateX(-50%) translateY(0) scale(1)'
                        : offset === -1
                          ? 'translateX(calc(-50% - 52%)) translateY(8%) scale(0.8)'
                          : offset === 1
                            ? 'translateX(calc(-50% + 52%)) translateY(8%) scale(0.8)'
                            : offset < -1
                              ? 'translateX(calc(-50% - 100%)) translateY(15%) scale(0.65)'
                              : 'translateX(calc(-50% + 100%)) translateY(15%) scale(0.65)',
                      opacity: isActive ? 1 : isAdjacent ? 0.5 : 0,
                      zIndex: isActive ? 10 : isAdjacent ? 5 : 0,
                      pointerEvents: isVisible ? 'auto' : 'none',
                      transition: 'transform 0.45s cubic-bezier(0.22,1,0.36,1), opacity 0.4s ease',
                      width: '35%',
                    }}
                    className="relative cursor-pointer select-none group/thumb"
                  >
                    <div
                      className="w-full rounded-[12px] border-2 border-white/15 bg-background/60 shadow-2xl overflow-hidden"
                      style={{ aspectRatio: '9/18' }}
                    >
                      <Image
                        src={src}
                        alt={`${project.title} screenshot ${idx + 1}`}
                        fill
                        sizes="(max-width: 640px) 120px, 150px"
                        className="object-contain object-top"
                        draggable={false}
                      />
                    </div>
                    {/* Expand hint on the active card */}
                    {isActive && mediaItems.length > 0 && (
                      <div className="absolute inset-0 flex items-center justify-center rounded-[12px] 
                      bg-black/0 opacity-0 transition-all duration-200 group-hover/thumb:bg-black/30 group-hover/thumb:opacity-100">
                        <ZoomIn size={22} className="text-white drop-shadow-lg" />
                      </div>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        ) : (
          /* ── Abstract skeleton fallback ──────────────────────── */
          <div className="flex h-full flex-col justify-end gap-3 pb-8">
            <div className="flex items-center gap-3.5">
              <div className="size-12 sm:size-14 rounded-2xl border border-white/10 bg-white/5 
              p-2.5 shrink-0 flex items-center justify-center">
                <div className="h-full w-full rounded-xl bg-current opacity-60" />
              </div>
              <div className="flex-1 min-w-0 flex flex-col gap-2">
                <div className="h-2.5 w-3/4 rounded-full bg-white/20" />
                <div className="h-2 w-1/2 rounded-full bg-white/10" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1/3 rounded-full bg-current opacity-40" />
              <div className="h-1.5 w-2/3 rounded-full bg-white/10" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

/* ── Artifact Icon ─────────────────────────────────────────── */

function ArtifactIcon({ kind }: { kind: ProofArtifact['kind'] }) {
  return kind === 'terminal' ? <Terminal size={15} /> : kind === 'architecture' ? <Layers3 size={15} /> : <Eye size={15} />
}

/* ── Status Badge ──────────────────────────────────────────── */

function StatusBadge({ status }: { status: 'production' | 'pre-release' }) {
  const { lang } = useLang()
  if (status === 'production') {
    return <span className="proof-status proof-status-live">{t(ui.statusProduction, lang)}</span>
  }
  return (
    <span className="proof-status proof-status-pre">
      <span className="status-indicator-dot" />
      {t(ui.statusPreRelease, lang)}
    </span>
  )
}

/* ── Drawer Actions ────────────────────────────────────────── */

function DrawerActions({ project }: { project: Project }) {
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

/* ── Project Card (4-Zone Vertical Architecture) ───────────── */

function ProjectCard({
  project,
  onSelect,
  isAnyLightboxOpen,
  onOpenLightbox,
}: {
  project: Project
  onSelect: (project: Project) => void
  isAnyLightboxOpen: boolean
  onOpenLightbox: (items: import('@/lib/portfolio-data').MediaItem[], startIndex: number) => void
}) {
  const { lang } = useLang()
  const lp = getLocalizedProject(project, lang)
  const isPublished = project.detail.status === 'production'

  return (
    <article className={`project-card flex flex-col justify-between ${isAnyLightboxOpen ? '' : 'group'}`}>
      {/* ── Zone A: Header (Identity & Platforms) ── */}
      <div className="flex items-start justify-between gap-4 p-6 pb-4 flex-col md:flex-row">
        <div className="flex flex-col gap-2 min-w-0">
          {/* taro di sini */}
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

      {/* ── Zone B: Hero Visual ── */}
      <ProjectVisual
        project={project}
        isAnyLightboxOpen={isAnyLightboxOpen}
        onOpenLightbox={onOpenLightbox}
      />

      {/* ── Zone C: Metadata (Description & Stack) ── */}
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

      {/* ── Zone D: The Action Footer (Split Layout) ── */}
      <div className="p-6 pt-0">
        <div className="border-t border-white/10 mt-4 pt-4">
          <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3">
            {/* Left Side: Distribution / Source / QA Lockup */}
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

            {/* Right Side: Deep Dive Action */}
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
                  aria-label={`${t(ui.inspectVerification, lang)}: ${project.title}`}
                >
                  <span>{t(ui.inspectVerification, lang)}</span>
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

/* ── Proof Drawer ──────────────────────────────────────────── */

function ProofDrawer({ project, onClose }: { project: Project; onClose: () => void }) {
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

        <p className="eyebrow mt-12">{t(project.detail.status === 'production' ? ui.caseStudyEyebrow : ui.proofEyebrow, lang)}</p>
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

/* ── About / Root-Cause Solver Section ────────────────────────── */

function AboutSection() {
  const { lang } = useLang()
  const loc = profile.location[lang] || profile.location.en

  const stats = [
    {
      tag: t(ui.aboutStat1Tag, lang),
      value: t(ui.aboutStat1Value, lang),
      label: t(ui.aboutStat1Label, lang),
    },
    {
      tag: t(ui.aboutStat2Tag, lang),
      value: t(ui.aboutStat2Value, lang),
      label: t(ui.aboutStat2Label, lang),
    },
    {
      tag: t(ui.aboutStat3Tag, lang),
      value: t(ui.aboutStat3Value, lang),
      label: t(ui.aboutStat3Label, lang),
    },
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.08,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <div id="about" className="page-shell section-pad relative border-t border-white/10">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -top-16 right-1/4 -z-10 h-80 w-80 rounded-full bg-sky-500/4 blur-3xl" />

      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14 items-start">
        {/* Column 1: Narrative */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center gap-2 rounded-full border
             border-white/10 bg-white/3 px-3.5 py-1.5 text-xs backdrop-blur-sm">
              <span className="font-mono text-[10px] uppercase tracking-wider text-sky-300">{t(ui.aboutTag, lang)}</span>
              <span className="h-3 w-px bg-white/15" />
              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400">{t(ui.aboutEyebrow, lang)}</span>
            </div>
          </div>

          <h2
            className="mt-6 text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-100 leading-snug"
          >
            {t(ui.aboutHeadline, lang)}
          </h2>

          <div className="mt-6 flex flex-col gap-5 text-neutral-400 leading-relaxed text-base sm:text-lg">
            <p>
              {lang === 'id' ? (
                <>
                  Saya <strong className="text-neutral-200 font-medium">{profile.name}</strong>, seorang mobile app developer dan pendidik yang berbasis di <strong className="text-neutral-200 font-medium">{loc}</strong>. Meski saya membangun aplikasi intuitif dari nol menggunakan Kotlin, Dart, dan Java, keahlian terdalam saya terletak pada troubleshooting. Jiwa saya adalah seorang <span className="text-sky-300 font-medium">root-cause solver</span>—teruji di garis depan untuk mendiagnosis bug rumit, mengeliminasi technical debt, dan menstabilkan sistem yang kompleks.
                </>
              ) : (
                <>
                  I&apos;m <strong className="text-neutral-200 font-medium">{profile.name}</strong>, a mobile app developer and educator based in <strong className="text-neutral-200 font-medium">{loc}</strong>. While I build intuitive apps from scratch using Kotlin, Dart, and Java, my deepest expertise lies in troubleshooting. I am a <span className="text-sky-300 font-medium">root-cause solver</span> at heart—thriving in the trenches to diagnose complex bugs, eliminate technical debt, and stabilize intricate systems.
                </>
              )}
            </p>
            <p>
              {lang === 'id' ? (
                <>
                  Saya beroperasi dengan fokus tunggal tanpa kompromi, mendalami permasalahan hingga tuntas secara permanen dan memastikan codebase jauh lebih bersih dari sebelumnya. Berbekal pengalaman membimbing tim siswa dalam meluncurkan aplikasi siap produksi, saya memadukan insting diagnostik ini dengan komitmen kuat terhadap <span className="text-sky-300 font-medium">clean architecture</span> dan membangun perangkat lunak yang berdaya tahan lama.
                </>
              ) : (
                <>
                  I operate with relentless, single-context focus, immersing myself in a problem until it&apos;s permanently resolved and the codebase is cleaner than I found it. Having mentored student teams through deploying production-ready applications, I pair this diagnostic instinct with a firm commitment to <span className="text-sky-300 font-medium">clean architecture</span> and building software that lasts.
                </>
              )}
            </p>
          </div>
        </div>

        {/* Column 2: Proof Points / Metric Cards */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/3 
              p-6 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/5"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-sky-400/80">
                  {stat.tag}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-white/20 transition-colors group-hover:bg-sky-400" />
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-100">
                  {stat.value}
                </span>
              </div>
              <p className="mt-2 text-sm sm:text-base text-neutral-400 leading-snug font-normal">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── Main Site Component ───────────────────────────────────── */

export function PortfolioSite() {
  const { lang } = useLang()
  const [selected, setSelected] = useState<Project | null>(null)
  const [copied, setCopied] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [lightbox, setLightbox] = useState<{
    items: import('@/lib/portfolio-data').MediaItem[]
    startIndex: number
    title: string
    accent: Project['accent']
  } | null>(null)

  const copyEmail = async () => {
    await navigator.clipboard?.writeText(profile.email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  const navItems: Array<[string, string]> = [
    ['#about', t(ui.navAbout, lang)],
    ['#work', t(ui.navWork, lang)],
    ['#stack', t(ui.navStack, lang)],
    ['#experience', t(ui.navExperience, lang)],
    ['#contact', t(ui.navContact, lang)],
  ]

  return (
    <main>
      {/* ── Navbar ──────────────────────────────────────────── */}
      <nav className="fixed inset-x-4 top-4 z-40 mx-auto flex max-w-6xl items-center justify-between 
      rounded-2xl border border-white/10 bg-background/80 px-4 py-3 shadow-lg backdrop-blur-xl md:inset-x-6 md:px-5">
        <a href="#top" className="flex items-center gap-3" aria-label="Yusril home">
          
          <span className="grid size-8 place-items-center rounded-lg bg-foreground text-xs font-bold text-background">YN</span>
          <span className="hidden text-sm font-medium sm:inline">{profile.handle}</span>
        </a>

        <div className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-16 flex-col gap-1 rounded-2xl border border-white/10 bg-card p-3 md:static md:flex md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0`}>
          {navItems.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground">{label}</a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <button className="hidden button-quiet sm:flex" onClick={copyEmail}>
            {copied ? <Check size={15} /> : <Copy size={15} />}
            {copied ? t(ui.copied, lang) : t(ui.emailMe, lang)}
          </button>
          <button className="icon-button md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* ── Hero ────────────────────────────────────────────── */}
      <section id="top" className="hero-shell page-shell">
        <div className="max-w-4xl">
          <div className="status-pill">
            <span className="status-dot" />{t(ui.heroStatus, lang)}
          </div>
          <h1 className="mt-8 text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.07em] md:text-8xl">
            {t(ui.heroTitle1, lang)}<br />
            <span className="text-muted-foreground">{t(ui.heroTitle2, lang)}</span>
          </h1>
          <p className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground md:text-xl">{t(profile.tagline, lang)}</p>
          <div className="mt-10 flex flex-wrap gap-2">
            {['Compose Multiplatform', 'Flutter', 'Android SDK'].map((item) => (
              <span className="tag" key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div className="mt-20 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-5">
          <div><p className="stat-value">04</p><p className="stat-label">{t(ui.statBuilds, lang)}</p></div>
          <div><p className="stat-value">07+</p><p className="stat-label">{t(ui.statYears, lang)}</p></div>
          <div><p className="stat-value">18+</p><p className="stat-label">{t(ui.statApps, lang)}</p></div>
        </div>
      </section>

      {/* ── About / Root-Cause Solver ───────────────────────── */}
      <AboutSection />

      {/* ── Work ────────────────────────────────────────────── */}
      <section id="work" className="page-shell section-pad">
        <SectionHeading eyebrow={t(ui.workEyebrow, lang)} title={t(ui.workTitle, lang)} detail={t(ui.workDetail, lang)} />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onSelect={setSelected}
              isAnyLightboxOpen={lightbox !== null}
              onOpenLightbox={(items, startIndex) => setLightbox({ items, startIndex, title: project.title, accent: project.accent })}
            />
          ))}
        </div>
      </section>

      {/* ── Stack ───────────────────────────────────────────── */}
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

      {/* ── Experience ──────────────────────────────────────── */}
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

      {/* ── Footer / Contact ────────────────────────────────── */}
      <footer id="contact" className="page-shell section-pad pb-10">
        <div className="footer-card">
          <p className="eyebrow">{t(ui.contactEyebrow, lang)}</p>
          <h2 className="mt-4 max-w-2xl text-balance text-4xl font-semibold tracking-tighter md:text-6xl">{t(ui.contactTitle, lang)}</h2>
          <button className="button-primary mt-8" onClick={copyEmail}>
            {copied ? t(ui.contactCopied, lang) : t(ui.contactButton, lang)} <ArrowUpRight size={17} />
          </button>
        </div>
        <div className="flex flex-col gap-5 border-t border-white/10 pt-6 text-sm 
        text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 {profile.name}</span>
          <div className="flex gap-4">
            <a className="social-link" href={profile.github} target="_blank" rel="noreferrer"><ExternalLink size={16} />GitHub</a>
            <a className="social-link" href={profile.linkedin} target="_blank" rel="noreferrer"><ExternalLink size={16} />LinkedIn</a>
            <a className="social-link" href={profile.instagram} target="_blank" rel="noreferrer"><ExternalLink size={16} />Instagram</a>
          </div>
        </div>
      </footer>

      {selected && <ProofDrawer project={selected} onClose={() => setSelected(null)} />}

      {lightbox !== null && (
        <MediaLightbox
          items={lightbox.items}
          startIndex={lightbox.startIndex}
          projectTitle={lightbox.title}
          accent={lightbox.accent}
          onClose={() => setLightbox(null)}
        />
      )}
    </main>
  )
}
