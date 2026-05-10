'use client'
import { useState, useEffect, useRef } from 'react'

// Tracks if page has scrolled past a threshold (for sticky nav style)
export function useScrolled(threshold = 60) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [threshold])
  return scrolled
}

// Returns true once element enters viewport (fires once, then disconnects)
export function useInView(ref, threshold = 0.15) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold }
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [ref, threshold])
  return visible
}

// Animates a number from 0 to target when visible is true
export function useCounter(target, visible, suffix = '') {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!visible) return
    let v = 0
    const step = Math.ceil(target / 50)
    const timer = setInterval(() => {
      v = Math.min(v + step, target)
      setValue(v)
      if (v >= target) clearInterval(timer)
    }, 40)
    return () => clearInterval(timer)
  }, [target, visible])
  return value + suffix
}
