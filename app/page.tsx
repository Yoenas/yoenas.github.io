import { SiteNav } from "@/components/site-nav"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { About } from "@/components/about"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <Projects />
        <Skills />
        <About />
        <ExperienceTimeline />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
