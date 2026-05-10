'use client'
import { useScrolled } from '@/hooks/useAnimations'

const NAV_LINKS = ['about', 'services', 'gallery', 'packages', 'contact']

export default function Navbar() {
  const scrolled = useScrolled()

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <a className="nav-logo" href="#">
        <em>Tanishq</em> Photography
      </a>

      <ul className="nav-links">
        {NAV_LINKS.map((link) => (
          <li key={link}>
            <a href={`#${link}`}>{link}</a>
          </li>
        ))}
      </ul>

      <a className="nav-book" href="#contact">
        Book Now
      </a>

      {/* Mobile hamburger */}
      <button className="nav-hamburger" aria-label="Open menu">
        <span />
        <span />
        <span />
      </button>
    </nav>
  )
}
