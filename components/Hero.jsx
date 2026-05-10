'use client'
import { useRef } from 'react'
import { useInView, useCounter } from '@/hooks/useAnimations'
import ImageSlot from '@/components/ImageSlot'
import { STATS, HERO_IMAGES } from '@/data/siteData'

function StatItem({ value, suffix, label }) {
  const ref = useRef(null)
  const visible = useInView(ref, 0.5)
  const count = useCounter(value, visible, suffix)
  return (
    <div ref={ref}>
      <span className="stat-num">{count}</span>
      <span className="stat-label">{label}</span>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="hero">
      {/* ── Left: Text ── */}
      <div className="hero-left">
        <div className="hero-eyebrow">Wedding &amp; Cinematography</div>

        <h1 className="hero-h1">
          Capturing<br />your most
          <em>precious</em>
          moments
        </h1>

        <p className="hero-p">
          Every love story is unique. We craft timeless imagery and cinematic films
          that preserve your wedding day exactly as it felt — with elegance, emotion,
          and artistry.
        </p>

        <div className="hero-btns">
          <a className="btn-gold" href="#gallery">View Portfolio</a>
          <a className="btn-link" href="#contact">Book Consultation →</a>
        </div>

        <div className="hero-stats">
          {STATS.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </div>

      {/* ── Right: Photo Mosaic ── */}
      <div className="hero-right">
        <div className="hero-mosaic">
          {HERO_IMAGES.map((img, i) => (
            <div key={i} className="mosaic-cell">
              {/* Replace src in /data/siteData.js → HERO_IMAGES to add real photos */}
              {img.type === 'video' ? (
  <video
    src={img.src}
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover"
  />
) : (
  <ImageSlot
    src={img.src}
    alt={img.alt}
    priority={i === 0}
  />
)}
            </div>
          ))}
        </div>
        <div className="hero-vignette" />
      </div>
    </section>
  )
}
