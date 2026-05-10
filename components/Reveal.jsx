'use client'
import { useRef } from 'react'
import { useInView } from '@/hooks/useAnimations'

/**
 * Reveal — wraps children in a fade-up scroll animation.
 *
 * Props:
 *   delay     {number}  CSS transition delay in seconds (default 0)
 *   className {string}  extra classes on the wrapper
 *   tag       {string}  HTML tag to render (default 'div')
 */
export default function Reveal({ children, delay = 0, className = '', tag: Tag = 'div' }) {
  const ref = useRef(null)
  const visible = useInView(ref)

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(28px)',
        transition: `opacity 0.85s ${delay}s ease, transform 0.85s ${delay}s ease`,
      }}
    >
      {children}
    </Tag>
  )
}
