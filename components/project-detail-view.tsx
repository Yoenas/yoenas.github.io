"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  projects as defaultProjects,
  getLocalizedProject,
  getLocalizedProjectDetail,
  type ProjectDetail,
  type Project,
} from "@/lib/portfolio-data"
import { useLanguage } from "@/lib/i18n"

/* ------------------------------------------------------------------ */
/*  Hero Media                                                         */
/* ------------------------------------------------------------------ */

function HeroMedia({ coverImage }: { coverImage: ProjectDetail["coverImage"] }) {
  const [imgError, setImgError] = useState(false)
  const { t } = useLanguage()

  return (
    <figure className="overflow-hidden rounded-2xl border border-border bg-secondary shadow-sm">
      {imgError ? (
        <div
          className="flex aspect-video w-full items-center justify-center bg-linear-to-br from-primary/10 via-secondary to-accent/20"
          role="img"
          aria-label={coverImage.alt}
        >
          <span className="text-sm text-muted-foreground">{t.detail.imageUnavailable}</span>
        </div>
      ) : (
        <Image
          src={coverImage.url}
          alt={coverImage.alt}
          width={1200}
          height={675}
          className="aspect-video w-full object-cover object-top"
          priority
          onError={() => setImgError(true)}
        />
      )}
      <figcaption className="sr-only">{coverImage.alt}</figcaption>
    </figure>
  )
}

/* ------------------------------------------------------------------ */
/*  Tech Stack Pills                                                   */
/* ------------------------------------------------------------------ */

function TechStackPills({ stack }: { stack: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {stack.map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
        >
          {tech}
        </span>
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Contribution Card                                                  */
/* ------------------------------------------------------------------ */

function ContributionCard({
  contribution,
  index,
}: {
  contribution: ProjectDetail["contributions"][number]
  index: number
}) {
  const [imgError, setImgError] = useState(false)
  const isEven = index % 2 === 0
  const { t } = useLanguage()

  return (
    <article
      className={`flex flex-col gap-8 md:gap-12 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Media Column */}
      {contribution.mediaUrl && (
        <div className="flex-1 overflow-hidden rounded-2xl border border-border bg-secondary/50">
          {contribution.mediaType === "video" ? (
            <video
              src={contribution.mediaUrl}
              controls
              className="aspect-video w-full object-cover"
            >
              <track kind="captions" />
              Your browser does not support the video tag.
            </video>
          ) : imgError ? (
            <div
              className="flex aspect-video w-full items-center justify-center bg-linear-to-br from-primary/10 via-secondary to-accent/20"
              role="img"
              aria-label={contribution.featureTitle}
            >
              <span className="text-sm text-muted-foreground">{t.detail.imageUnavailable}</span>
            </div>
          ) : (
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src={contribution.mediaUrl}
                alt={contribution.featureTitle}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                onError={() => setImgError(true)}
              />
            </div>
          )}
        </div>
      )}

      {/* Text Content */}
      <div className="flex flex-1 flex-col justify-center">
        <div className="mb-3 flex items-center gap-3">
          <span className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            {index + 1}
          </span>
          <h3 className="text-xl font-semibold tracking-tight text-foreground">
            {contribution.featureTitle}
          </h3>
        </div>

        <p className="text-pretty leading-relaxed text-muted-foreground">
          {contribution.story}
        </p>

        {contribution.impactOrOutcome && (
          <div className="mt-5 flex items-start gap-3 rounded-lg border border-primary/20 bg-primary/5 px-4 py-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-0.5 shrink-0 text-primary"
              aria-hidden="true"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <p className="text-sm font-medium text-foreground">
              {contribution.impactOrOutcome}
            </p>
          </div>
        )}
      </div>
    </article>
  )
}

/* ------------------------------------------------------------------ */
/*  Next Project Teaser                                                */
/* ------------------------------------------------------------------ */

function NextProjectTeaser({ project }: { project: Project }) {
  const [imgError, setImgError] = useState(false)
  const { t } = useLanguage()

  return (
    <Link
      href={project.href}
      className="group flex flex-col items-center gap-6 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg sm:flex-row sm:p-8"
    >
      <div className="shrink-0 overflow-hidden rounded-xl bg-secondary sm:w-32">
        {imgError ? (
          <div className="flex aspect-square w-full items-center justify-center bg-linear-to-br from-primary/10 via-secondary to-accent/20">
            <span className="text-xs text-muted-foreground">—</span>
          </div>
        ) : (
          <Image
            src={project.image}
            alt={`${project.title} thumbnail`}
            width={128}
            height={128}
            className="aspect-square w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        )}
      </div>
      <div className="flex flex-1 flex-col text-center sm:text-left">
        <span className="text-xs font-medium uppercase tracking-widest text-primary">
          {t.detail.nextProject}
        </span>
        <h3 className="mt-1 text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{project.tagline}</p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary"
        aria-hidden="true"
      >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </Link>
  )
}

/* ------------------------------------------------------------------ */
/*  Main Detail View                                                   */
/* ------------------------------------------------------------------ */

export function ProjectDetailView({
  detail,
  nextProject,
  allProjects = defaultProjects,
}: {
  detail: ProjectDetail
  nextProject?: Project
  allProjects?: Project[]
}) {
  const { t, language } = useLanguage()
  const localizedDetail = getLocalizedProjectDetail(detail, language)
  const localizedNextProject = nextProject
    ? getLocalizedProject(nextProject, language)
    : undefined

  return (
    <main className="pb-16">
      {/* ── Header Section ── */}
      <section className="mx-auto max-w-5xl px-6 pb-8 pt-6 md:pt-8">

        <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          {localizedDetail.title}
        </h1>
        <p className="mt-3 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          {localizedDetail.tagline}
        </p>

        {/* Meta row */}
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
              aria-hidden="true"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span className="font-medium text-foreground">{localizedDetail.role}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
              aria-hidden="true"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span>{localizedDetail.timeline}</span>
          </div>

          {/* Mobile-only external links */}
          {detail.liveUrl && (
            <a
              href={detail.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-primary underline-offset-4 hover:underline sm:hidden"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Live
            </a>
          )}
          {detail.githubUrl && (
            <a
              href={detail.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-primary underline-offset-4 hover:underline sm:hidden"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              GitHub
            </a>
          )}
        </div>

        {/* Tech Stack */}
        <div className="mt-6">
          <TechStackPills stack={localizedDetail.techStack} />
        </div>
      </section>

      {/* ── Hero Image ── */}
      <section className="mx-auto max-w-5xl px-6">
        <HeroMedia coverImage={localizedDetail.coverImage} />
      </section>

      {/* ── Contributions & Story ── */}
      <section className="mx-auto max-w-5xl px-6 pt-16 md:pt-20">
        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">
            {t.detail.deepDive}
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {t.detail.contributionsTitle}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {t.detail.contributionsSubtitle}
          </p>
        </div>

        <div className="flex flex-col gap-16 md:gap-20">
          {localizedDetail.contributions.map((contribution, i) => (
            <ContributionCard
              key={contribution.featureTitle}
              contribution={contribution}
              index={i}
            />
          ))}
        </div>
      </section>

      {/* ── Footer Navigation ── */}
      <section className="mx-auto max-w-5xl px-6 pt-16 md:pt-20">
        <div className="mb-8 h-px w-full bg-border" />

        {localizedNextProject ? (
          <div className="flex flex-col gap-6">
            <NextProjectTeaser project={localizedNextProject} />

            {/* Quick jump to existing projects */}
            <div className="flex flex-col gap-3 rounded-xl border border-border/60 bg-secondary/30 px-5 py-3.5 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-xs font-medium text-muted-foreground">
                {t.detail.jumpTo}
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {allProjects
                  .filter(
                    (p) => p.slug !== detail.slug && p.slug !== localizedNextProject.slug
                  )
                  .map((p) => (
                    <Link
                      key={p.slug}
                      href={p.href}
                      className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                    >
                      {p.title}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        ) : (
          /* When at the end of featured projects: Coming Soon banner with navigation buttons */
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                  {t.detail.comingSoonBadge}
                </span>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  {t.detail.comingSoonTitle}
                </h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {t.detail.comingSoonDesc}
                </p>
              </div>

              {/* Navigation buttons next to coming soon text */}
              <div className="flex flex-col gap-4 sm:items-start lg:items-end">

                <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                  <span className="text-xs font-medium text-muted-foreground">
                    {t.detail.jumpTo}
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    {allProjects
                      .filter((p) => p.slug !== detail.slug)
                      .map((p) => (
                        <Link
                          key={p.slug}
                          href={p.href}
                          className="rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:border-primary/40 hover:text-primary"
                        >
                          {p.title}
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  )
}
