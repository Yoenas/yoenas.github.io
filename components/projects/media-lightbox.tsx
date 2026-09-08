'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ChevronRight, X } from 'lucide-react'
import { type Project, type MediaItem } from '@/lib/portfolio-data'
import { accents } from './shared'

export function MediaLightbox({
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
        style={{ maxWidth: '90vw', maxHeight: 'calc(100dvh - 140px)', width: '100%', height: '100%' }}
        onClick={(e) => e.stopPropagation()}
      >
        {item.kind === 'image' ? (
          <div
            className="relative"
            style={{ maxWidth: '90vw', maxHeight: 'calc(100dvh - 140px)', width: '100%', height: '100%' }}
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
              maxHeight: 'calc(100dvh - 140px)',
              objectFit: 'contain',
              display: 'block',
            }}
          />
        )}

        {/* Close */}
        <button
          className="icon-button-mediabox absolute -top-10 right-0 sm:right-0"
          onClick={onClose}
          aria-label="Close media viewer"
        >
          <X size={20} />
        </button>

        {/* Prev */}
        {total > 1 && (
          <button
            className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12
             icon-button-mediabox hidden sm:flex items-center justify-center'
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
            icon-button-mediabox hidden sm:flex items-center justify-center"
            onClick={next}
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        )}

        {/* Mobile swipe row — bottom bar */}
        {total > 1 && (
          <div className="absolute -bottom-10 left-0 right-0 flex items-center justify-center gap-4">
            <button className="icon-button-mediabox sm:hidden" onClick={prev} aria-label="Previous">
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
            <button className="icon-button-mediabox sm:hidden" onClick={next} aria-label="Next">
              <ChevronRight size={18} />
            </button>
          </div>
        )}

        {/* Counter */}
        {total > 1 && (
          <span className="absolute -top-8 left-0 text-xs text-white/50 font-mono">
            {idx + 1} / {total}
          </span>
        )}
      </div>
    </div>
  )
}
