import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

type NavItem = {
  id: string
  label: string
}

const SECTIONS: NavItem[] = [
  { id: 'hero', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' }
]

export default function Navbar() {
  const [active, setActive] = useState<string>('hero')

  // Observe section visibility to highlight active nav item
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        }
      },
      { root: null, rootMargin: '0px', threshold: 0.6 }
    )

    const elements = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean) as Element[]
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const indicatorStyle = useMemo(() => ({
    background: 'linear-gradient(90deg, var(--color-accent), var(--color-accent-2))',
    borderRadius: 999
  }), [])

  const onClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div style={{ position: 'fixed', top: 16, left: 0, right: 0, zIndex: 50 }}>
      <nav className="container" aria-label="Main navigation">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'color-mix(in oklab, var(--color-surface) 85%, black)',
            border: '1px solid color-mix(in oklab, var(--color-accent) 25%, transparent)',
            padding: '0.5rem',
            borderRadius: 999,
            boxShadow: 'var(--shadow-soft)',
            backdropFilter: 'saturate(140%) blur(10px)'
          }}
        >
          {SECTIONS.map((item) => {
            const isActive = active === item.id
            return (
              <button
                key={item.id}
                onClick={onClick(item.id)}
                aria-current={isActive ? 'page' : undefined}
                style={{
                  position: 'relative',
                  padding: '0.5rem 0.9rem',
                  borderRadius: 999,
                  border: 'none',
                  background: 'transparent',
                  color: isActive ? 'black' : 'var(--color-text)'
                }}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    style={{ position: 'absolute', inset: 0, ...indicatorStyle }}
                    transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                    aria-hidden
                  />
                )}
                <span style={{ position: 'relative' }}>{item.label}</span>
              </button>
            )
          })}
        </div>
      </nav>
    </div>
  )
}


