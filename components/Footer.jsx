import { SITE } from '@/data/siteData'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <em>Tanishq</em> Photography
      </div>
      <p className="footer-copy">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </p>
      <div className="footer-links">
        <a href="https://instagram.com/tanishq_photographys" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://instagram.com/tanishq_weddings" target="_blank" rel="noreferrer">Weddings</a>
        <a href={`tel:${SITE.phone}`}>Call Us</a>
      </div>
    </footer>
  )
}
