// src/hooks/useScrolled.js
import { useState, useEffect } from 'react'

export function useScrolled(threshold = 60) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [threshold])
  return scrolled
}

// src/hooks/useInView.js
import { useState, useEffect } from 'react'

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

// src/hooks/useCounter.js
import { useState, useEffect } from 'react'

export function useCounter(target, active, suffix = '') {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!active) return
    let v = 0
    const step = Math.ceil(target / 60)
    const t = setInterval(() => {
      v = Math.min(v + step, target)
      setVal(v)
      if (v >= target) clearInterval(t)
    }, 30)
    return () => clearInterval(t)
  }, [target, active])
  return val + suffix
}
