'use client'
import Reveal from '@/components/Reveal'
import { PACKAGES } from '@/data/siteData'

export default function Packages() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="packages" id="packages">
      <Reveal><div className="section-label">Investment</div></Reveal>
      <Reveal delay={0.1}><h2 className="section-title">Our <em>Packages</em></h2></Reveal>

      <Reveal delay={0.2}>
        <div className="packages-grid">
          {PACKAGES.map((pkg, i) => (
            <div key={i} className={`package-card${pkg.featured ? ' featured' : ''}`}>
              <span className={`package-badge${pkg.featured ? ' highlight' : ''}`}>
                {pkg.badge}
              </span>
              <div className="package-name">{pkg.name}</div>
              <div className="package-price">
                {pkg.price}<span> / event</span>
              </div>
              <div className="package-divider" />
              <ul className="package-features">
                {pkg.features.map((f, j) => <li key={j}>{f}</li>)}
              </ul>
              <button className="package-cta" onClick={scrollToContact}>
                Enquire Now
              </button>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
