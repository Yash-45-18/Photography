'use client'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Reveal from '@/components/Reveal'
import ImageSlot from '@/components/ImageSlot'
import { GALLERY_ITEMS } from '@/data/siteData'

const FILTERS = ['all', 'wedding', 'couple', 'portrait', 'film']

// ── Lightbox ──────────────────────────────────────────────────
function Lightbox({ index, items, onClose, onPrev, onNext }) {
  const item = items[index]

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape')     onClose()
      if (e.key === 'ArrowLeft')  onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, onPrev, onNext])

  return (
    <div className="lightbox" onClick={onClose}>
      <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose}>✕ Close</button>

        {/* Image or placeholder in lightbox */}
        <div style={{ width: '60vw', height: '70vh', position: 'relative' }}>
          {item.src ? (
            <Image src={item.src} alt={item.alt} fill style={{ objectFit: 'contain' }} />
          ) : (
            <div className="img-slot" style={{ background: 'var(--surface2)' }}>
              <span className="img-slot-label">{item.label}</span>
            </div>
          )}
        </div>

        <button className="lightbox-nav lightbox-prev" onClick={onPrev}>‹</button>
        <button className="lightbox-nav lightbox-next" onClick={onNext}>›</button>
        <div className="lightbox-caption">
          {item.label} — {index + 1} / {items.length}
        </div>
      </div>
    </div>
  )
}

// ── Gallery Cell ──────────────────────────────────────────────
function GalleryCell({ item, dimmed, onClick }) {
  return (
    <div
      className={`g-cell${dimmed ? ' dimmed' : ''}`}
      onClick={onClick}
      aria-label={`View ${item.label}`}
      role="button"
      tabIndex={dimmed ? -1 : 0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      {/* Swap ImageSlot for real photo by setting item.src in siteData.js */}
      <ImageSlot src={item.src} alt={item.alt} />
      <div className="g-overlay">
        <span className="g-overlay-label">{item.label}</span>
      </div>
    </div>
  )
}

// ── Gallery Section ───────────────────────────────────────────
export default function Gallery() {
  const [filter, setFilter]   = useState('all')
  const [lbIndex, setLbIndex] = useState(null)

  const visibleItems = GALLERY_ITEMS.filter(
    (g) => filter === 'all' || g.category === filter
  )

  const open  = useCallback((i) => setLbIndex(i), [])
  const close = useCallback(() => setLbIndex(null), [])

  const prev = useCallback(() => {
    setLbIndex((cur) => {
      const pos = visibleItems.findIndex((_, i) => i === cur)
      return (pos - 1 + visibleItems.length) % visibleItems.length
    })
  }, [visibleItems])

  const next = useCallback(() => {
    setLbIndex((cur) => {
      const pos = visibleItems.findIndex((_, i) => i === cur)
      return (pos + 1) % visibleItems.length
    })
  }, [visibleItems])

  return (
    <section className="gallery" id="gallery">
      <Reveal><div className="section-label">Portfolio</div></Reveal>
      <Reveal delay={0.1}><h2 className="section-title">Our <em>Work</em></h2></Reveal>

      <Reveal delay={0.15}>
        <div className="gallery-filters">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`gallery-filter-btn${filter === f ? ' active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f === 'all' ? 'All' : f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="gallery-grid">
          {GALLERY_ITEMS.map((item, i) => (
            <GalleryCell
              key={i}
              item={item}
              dimmed={filter !== 'all' && item.category !== filter}
              onClick={() => open(i)}
            />
          ))}
        </div>
      </Reveal>

      {lbIndex !== null && (
        <Lightbox
          index={lbIndex}
          items={visibleItems}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  )
}
