'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ZoomIn } from 'lucide-react'
import { type Project, type MediaItem } from '@/lib/portfolio-data'
import { accents } from './shared'

export function ProjectVisual({
  project,
  isAnyLightboxOpen,
  onOpenLightbox,
}: {
  project: Project
  isAnyLightboxOpen: boolean
  onOpenLightbox: (items: MediaItem[], startIndex: number) => void
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
          <div className="flex h-full flex-col gap-3 pt-2">
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
