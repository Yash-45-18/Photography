// src/components/Navbar.jsx

import { useState } from 'react'
import { useScrolled } from '../hooks/index.js'
import { META } from '../data/siteData.js'
import styles from './Navbar.module.css'

const NAV_LINKS = ['about', 'services', 'gallery', 'packages', 'contact']

export default function Navbar() {
  const scrolled = useScrolled()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a className={styles.logo} href="#">
        <em>Tanishq</em> Photography
      </a>

      <ul className={styles.links}>
        {NAV_LINKS.map((s) => (
          <li key={s}>
            <a href={`#${s}`} onClick={() => setMenuOpen(false)}>
              {s}
            </a>
          </li>
        ))}
      </ul>

      <a className={styles.book} href="#contact">
        Book Now
      </a>

      {/* Mobile hamburger */}
      <button
        className={styles.hamburger}
        aria-label="Toggle menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {NAV_LINKS.map((s) => (
            <a key={s} href={`#${s}`} onClick={() => setMenuOpen(false)}>
              {s}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Book Now
          </a>
        </div>
      )}
    </nav>
  )
}
