import Reveal from '@/components/Reveal'
import { TESTIMONIALS } from '@/data/siteData'

export default function Testimonials() {
  return (
    <section className="testimonials">
      <Reveal><div className="section-label">Love From Couples</div></Reveal>
      <Reveal delay={0.1}><h2 className="section-title">What They <em>Say</em></h2></Reveal>
      <Reveal delay={0.2}>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-mark">"</div>
              <p className="testimonial-text">{t.quote}</p>
              <div className="testimonial-name">{t.name}</div>
              <div className="testimonial-event">{t.event}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
