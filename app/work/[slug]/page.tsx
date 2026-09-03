import { notFound } from "next/navigation"
import type { Metadata } from "next"
import {
  projects,
  getProjectBySlug,
  getAdjacentProjects,
} from "@/lib/portfolio-data"
import { ProjectDetailNav } from "@/components/project-detail-nav"
import { ProjectDetailView } from "@/components/project-detail-view"
import { SiteFooter } from "@/components/site-footer"

/* ------------------------------------------------------------------ */
/*  Static params — pre-render every project at build time             */
/* ------------------------------------------------------------------ */

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

/* ------------------------------------------------------------------ */
/*  Dynamic metadata for SEO                                           */
/* ------------------------------------------------------------------ */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const detail = getProjectBySlug(slug)
  if (!detail) return { title: "Project not found" }

  return {
    title: `${detail.title} — ${detail.role} | Yusril Nurhadi AS`,
    description: `${detail.tagline}. ${detail.contributions[0]?.story.slice(0, 140) ?? ""}…`,
  }
}

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const detail = getProjectBySlug(slug)
  if (!detail) notFound()

  const { next } = getAdjacentProjects(slug)

  return (
    <div className="min-h-screen bg-background">
      <ProjectDetailNav
        liveUrl={detail.liveUrl}
        githubUrl={detail.githubUrl}
      />
      <ProjectDetailView detail={detail} nextProject={next} />
      <SiteFooter />
    </div>
  )
}
