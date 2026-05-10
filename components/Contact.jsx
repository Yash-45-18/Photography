'use client'
import { useState } from 'react'
import Reveal from '@/components/Reveal'
import { SITE } from '@/data/siteData'

const SERVICES_OPTIONS = [
  'Wedding Photography',
  'Wedding Cinematography',
  'Photo + Video Package',
  'Pre-Wedding Shoot',
  'Model Portfolio',
  'Royal / Destination Wedding',
]

const CONTACT_METHODS = [
  { icon: '📞', label: SITE.phone, href: `tel:${SITE.phone}` },
  { icon: '📷', label: SITE.instagram, href: 'https://instagram.com/tanishq_photographys' },
  { icon: '💍', label: SITE.weddings, href: 'https://instagram.com/tanishq_weddings' },
  { icon: '📍', label: `${SITE.location} | ${SITE.available}`, href: null },
]

function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | loading | success

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('loading')
    // Replace this timeout with a real API call (e.g. EmailJS, Formspree, your backend)
    setTimeout(() => {
      setStatus('success')
      e.target.reset()
    }, 1400)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Your Name</label>
          <input className="form-input" type="text" placeholder="Bride / Groom name" required />
        </div>
        <div className="form-group">
          <label className="form-label">Phone</label>
          <input className="form-input" type="tel" placeholder="+91 XXXXX XXXXX" required />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Email</label>
        <input className="form-input" type="email" placeholder="your@email.com" />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Wedding Date</label>
          <input className="form-input" type="date" />
        </div>
        <div className="form-group">
          <label className="form-label">Service</label>
          <select className="form-select">
            <option value="">Select…</option>
            {SERVICES_OPTIONS.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Tell Us About Your Day</label>
        <textarea
          className="form-textarea"
          placeholder="Venue, guest count, any special requirements…"
        />
      </div>

      <button className="form-submit" type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending…' : 'Send Enquiry →'}
      </button>

      {status === 'success' && (
        <div className="form-success">
          ✦ Thank you! We'll be in touch within 24 hours.
        </div>
      )}
    </form>
  )
}

export default function Contact() {
  return (
    <section className="contact" id="contact">
      {/* ── Left: Info ── */}
      <div>
        <Reveal><div className="section-label">Get In Touch</div></Reveal>
        <Reveal delay={0.1}>
          <h2 className="section-title">
            Let's Create<br /><em>Magic Together</em>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="contact-body">
            Every great wedding story starts with a conversation. Tell us about
            your day and we'll craft something truly unforgettable.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="contact-methods">
            {CONTACT_METHODS.map(({ icon, label, href }) =>
              href ? (
                <a key={label} className="contact-method" href={href} target="_blank" rel="noreferrer">
                  <div className="contact-icon">{icon}</div>
                  {label}
                </a>
              ) : (
                <div key={label} className="contact-method">
                  <div className="contact-icon">{icon}</div>
                  {label}
                </div>
              )
            )}
          </div>
        </Reveal>
      </div>

      {/* ── Right: Form ── */}
      <Reveal delay={0.15}>
        <ContactForm />
      </Reveal>
    </section>
  )
}
