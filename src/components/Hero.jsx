// src/components/Hero.jsx

import { useRef } from 'react'
import { useCounter, useInView } from '../hooks/index.js'
import { HERO_IMAGES, STATS, META } from '../data/siteData.js'
import styles from './Hero.module.css'

function ImageSlot({ src, alt, className = '' }) {
  return (
    <div className={`${styles.mosaicCell} ${className}`}>
      {src ? (
        <img src={src} alt={alt} />
      ) : (
        // ── IMAGE SLOT ──
        // Place your image at the path defined in src/data/siteData.js
        // e.g. /public/images/hero1.jpg → src="/images/hero1.jpg"
        <div className="img-slot">{alt}</div>
      )}
    </div>
  )
}

function StatCounter({ value, suffix, label }) {
  const ref = useRef(null)
  const active = useInView(ref, 0.5)
  const display = useCounter(value, active, suffix)
  return (
    <div ref={ref}>
      <span className={styles.statNum}>{display}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  )
}

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* ── LEFT COLUMN ── */}
      <div className={styles.left}>
        <div className={styles.eyebrow}>{META.tagline}</div>

        <h1 className={styles.title}>
          Capturing<br />your most
          <em>precious</em>
          moments
        </h1>

        <p className={styles.desc}>
          Every love story is unique. We craft timeless imagery and cinematic
          films that preserve your wedding day exactly as it felt — with
          elegance, emotion, and artistry.
        </p>

        <div className={styles.actions}>
          <a className="btn-gold" href="#gallery">View Portfolio</a>
          <a className="btn-link" href="#contact">Book Consultation →</a>
        </div>

        <div className={styles.stats}>
          {STATS.map((s) => (
            <StatCounter key={s.label} {...s} />
          ))}
        </div>
      </div>

      {/* ── RIGHT COLUMN — IMAGE MOSAIC ── */}
      {/* Add 5 images to /public/images/ and update HERO_IMAGES in siteData.js */}
      <div className={styles.right}>
        <div className={styles.mosaic}>
          {HERO_IMAGES.map((img, i) => (
            <ImageSlot key={i} src={img.src} alt={img.alt} />
          ))}
        </div>
        <div className={styles.vignette} />
      </div>
    </section>
  )
}
