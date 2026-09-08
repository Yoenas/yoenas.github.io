'use client'

import { useState } from 'react'
import { type Project, type MediaItem } from '@/lib/portfolio-data'
import { Navbar } from './sections/navbar'
import { HeroSection } from './sections/hero-section'
import { AboutSection } from './sections/about-section'
import { WorkSection } from './sections/work-section'
import { StackSection } from './sections/stack-section'
import { ExperienceSection } from './sections/experience-section'
import { FooterSection } from './sections/footer-section'
import { ProofDrawer } from './projects/proof-drawer'
import { MediaLightbox } from './projects/media-lightbox'

export function PortfolioSite() {
  const [selected, setSelected] = useState<Project | null>(null)
  const [lightbox, setLightbox] = useState<{
    items: MediaItem[]
    startIndex: number
    title: string
    accent: Project['accent']
  } | null>(null)

  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WorkSection
        onSelectProject={setSelected}
        lightbox={lightbox}
        onOpenLightbox={(items, startIndex, title, accent) => setLightbox({ items, startIndex, title, accent })}
      />
      <StackSection />
      <ExperienceSection />
      <FooterSection />

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
