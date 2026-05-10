// src/components/About.jsx

import Reveal from './Reveal.jsx'
import { ABOUT, META } from '../data/siteData.js'
import styles from './About.module.css'

const FACTS = [
  ['Specialty', 'Wedding Photography & Cinematography'],
  ['Weddings Account', `@${META.instagramWeddings}`],
  ['Based in', META.location],
  ['Availability', META.availability],
  ['Contact', META.phone],
]

export default function About() {
  return (
    <section className={styles.about} id="about">
      {/* ── PHOTO SLOT ── */}
      {/* Place your portrait photo at: /public/images/about.jpg */}
      <Reveal>
        <div className={styles.imgWrap}>
          <div className={styles.imgBox}>
            {ABOUT.photo ? (
              <img src={ABOUT.photo} alt={ABOUT.photoAlt} />
            ) : (
              <div className="img-slot">Your Photo Here</div>
            )}
          </div>
          <div className={styles.frame} />
        </div>
      </Reveal>

      {/* ── CONTENT ── */}
      <div className={styles.content}>
        <Reveal delay={0.1}>
          <div className="section-label">The Artist</div>
        </Reveal>
        <Reveal delay={0.2}>
          <h2 className="section-h">
            Tanishq<br />
            <em>Photographys</em>
          </h2>
        </Reveal>
        <Reveal delay={0.3}>
          <p className={styles.body}>{ABOUT.bio}</p>
        </Reveal>
        <Reveal delay={0.4}>
          <blockquote className={styles.quote}>{ABOUT.quote}</blockquote>
        </Reveal>
        <Reveal delay={0.5}>
          <div className={styles.facts}>
            {FACTS.map(([key, val]) => (
              <div key={key} className={styles.fact}>
                <strong>{key}:</strong> {val}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
