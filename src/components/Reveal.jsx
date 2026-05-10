// src/components/Reveal.jsx
// Reusable scroll-triggered fade-up animation wrapper

import { useRef } from 'react'
import { useInView } from '../hooks/index.js'

export default function Reveal({ children, delay = 0, className = '', style = {} }) {
  const ref = useRef(null)
  const visible = useInView(ref)

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(28px)',
        transition: `opacity 0.85s ${delay}s ease, transform 0.85s ${delay}s ease`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
