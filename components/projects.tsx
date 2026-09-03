"use client"

import Image from "next/image"
import Link from "next/link"
import { projects } from "@/lib/portfolio-data"
import { useLanguage } from "@/lib/i18n"

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <span className="text-xs font-medium uppercase tracking-widest text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  )
}

export function Projects() {
  const { t, language } = useLanguage()
  const featuredProjects = projects.filter(
    (project) => project.slug !== "coming-soon"
  )

  return (
    <section
      id="work"
      className="mx-auto max-w-5xl scroll-mt-20 px-6 py-6 md:py-6"
    >
      <SectionHeading
        eyebrow={t.projects.eyebrow}
        title={t.projects.title}
        description={t.projects.description}
      />

      <div className="grid gap-6 md:grid-cols-2">
        {featuredProjects.map((project) => {
          const displayTagline =
            language === "id" ? project.taglineId || project.tagline : project.tagline
          const displayDescription =
            language === "id" ? project.descriptionId || project.description : project.description
          const displayMetric =
            language === "id" ? project.metricId || project.metric : project.metric

          return (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg"
            >
              <Link
                href={project.href}
                className="flex items-center justify-center overflow-hidden bg-secondary px-8 pt-8 cursor-pointer"
                aria-label={`View ${project.title} case study`}
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} app screenshot`}
                  width={300}
                  height={420}
                  className="h-64 w-auto rounded-t-2xl object-contain object-bottom shadow-xl transition-transform duration-500 group-hover:-translate-y-1"
                />
              </Link>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    <Link
                      href={project.href}
                      className="transition-colors hover:text-primary"
                    >
                      {project.title}
                    </Link>
                  </h3>
                  <span className="text-xs text-muted-foreground">
                    {project.platforms.join(" · ")}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-primary">
                  {displayTagline}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {displayDescription}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-xs font-medium text-foreground">
                    {displayMetric}
                  </span>
                  <Link
                    href={project.href}
                    className="text-sm font-medium text-primary underline-offset-4 hover:underline"
                  >
                    {t.projects.viewCaseStudy}
                  </Link>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
