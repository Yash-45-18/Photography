import Reveal from '@/components/Reveal'
import { SERVICES } from '@/data/siteData'

export default function Services() {
  return (
    <section className="services" id="services">
      <Reveal><div className="section-label">What We Offer</div></Reveal>
      <Reveal delay={0.1}><h2 className="section-title">Our <em>Services</em></h2></Reveal>
      <Reveal delay={0.2}>
        <div className="services-grid">
          {SERVICES.map((s) => (
            <div key={s.num} className="svc">
              <div className="svc-num">{s.num}</div>
              <h3 className="svc-title">{s.title}</h3>
              <p className="svc-desc">{s.desc}</p>
              <span className="svc-tag">{s.tag}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
