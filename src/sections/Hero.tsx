import { motion } from 'framer-motion'
import Section from '../components/Section'
import { FaGithub, FaLinkedin, FaAndroid, FaReact } from 'react-icons/fa'
import { SiFlutter, SiKotlin } from 'react-icons/si'

export default function Hero() {
  return (
    <Section id="hero">
      <div className="hero-grid">
        {/* Left: Intro */}
        <div style={{ position: 'relative', display: 'grid', gap: '0.9rem' }}>
          <motion.div
            aria-hidden
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'absolute',
              inset: -30,
              background:
                'radial-gradient(700px 340px at 25% 20%, color-mix(in oklab, var(--color-accent) 22%, transparent), transparent), radial-gradient(560px 260px at 70% 60%, color-mix(in oklab, var(--color-accent-2) 16%, transparent), transparent)',
              zIndex: -1,
              pointerEvents: 'none'
            }}
          />
          <div style={{ position: 'relative', zIndex: 10 }}>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ fontSize: 'clamp(2.2rem, 1.4rem + 3vw, 4.2rem)', margin: 0 }}
            >
              Abhishek Bisht
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="muted"
              style={{ fontSize: 'clamp(1rem, 0.95rem + 0.5vw, 1.3rem)', margin: '0.4rem 0 0.2rem' }}
            >
              Android & Java Engineer • Flutter • React Learner
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              style={{ maxWidth: 720 }}
            >
              I build smooth, reliable mobile experiences and modern web UIs with a focus on performance and clean architecture.
            </motion.p>
          </div>

          {/* Badges */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {[
              { icon: <SiKotlin size={18} />, label: 'Kotlin/Java' },
              { icon: <FaAndroid size={18} />, label: 'Android' },
              { icon: <SiFlutter size={18} />, label: 'Flutter' },
              { icon: <FaReact size={18} />, label: 'React' }
            ].map((b) => (
              <span
                key={b.label}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '0.4rem 0.7rem',
                  borderRadius: 999,
                  border: '1px solid color-mix(in oklab, var(--color-accent) 22%, transparent)'
                }}
              >
                <span style={{ color: 'var(--color-accent)' }}>{b.icon}</span>
                <span style={{ fontSize: 13 }}>{b.label}</span>
              </span>
            ))}
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.25rem', flexWrap: 'wrap' }}>
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              style={{ 
                background: 'transparent',
                border: '1px solid color-mix(in oklab, var(--color-accent) 50%, transparent)',
                color: 'var(--color-text)',
                padding: '0.75rem 1.1rem',
                borderRadius: 'var(--radius)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              View Projects
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              style={{ 
                background: 'linear-gradient(180deg, var(--color-accent), var(--color-accent-2))',
                color: '#0b0f1a',
                border: 'none',
                padding: '0.75rem 1.1rem',
                borderRadius: 'var(--radius)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              Contact Me
            </button>
          </div>

          {/* Socials */}
          <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
            <button
              onClick={() => window.open('https://github.com/thisabhishekbisht', '_blank', 'noopener,noreferrer')}
              style={{ 
                background: 'transparent',
                border: '1px solid color-mix(in oklab, var(--color-accent) 20%, transparent)',
                color: 'var(--color-text)',
                padding: '0.5rem',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'color-mix(in oklab, var(--color-accent) 10%, transparent)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
              }}
            >
              <FaGithub size={22} />
            </button>
            <button
              onClick={() => window.open('https://www.linkedin.com/in/thisabhishekbisht/', '_blank', 'noopener,noreferrer')}
              style={{ 
                background: 'transparent',
                border: '1px solid color-mix(in oklab, var(--color-accent) 20%, transparent)',
                color: 'var(--color-text)',
                padding: '0.5rem',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'color-mix(in oklab, var(--color-accent) 10%, transparent)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
              }}
            >
              <FaLinkedin size={22} />
            </button>
          </div>
        </div>

        {/* Right: Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            justifySelf: 'stretch',
            background: 'color-mix(in oklab, var(--color-surface) 85%, black)',
            border: '1px solid color-mix(in oklab, var(--color-accent) 15%, transparent)',
            borderRadius: 'var(--radius)',
            padding: '1rem',
            display: 'grid',
            gap: '0.75rem'
          }}
        >
          <div style={{
            width: '100%',
            aspectRatio: '1.6',
            borderRadius: 'var(--radius)',
            background: 'linear-gradient(180deg, color-mix(in oklab, var(--color-accent) 16%, transparent), transparent)',
            border: '1px dashed color-mix(in oklab, var(--color-accent) 25%, transparent)',
            display: 'grid',
            placeItems: 'center'
          }}>
            <span className="muted">Your photo or a showcase image</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
            {[
              { k: 'Experience', v: '8+ yrs' },
              { k: 'Projects', v: '10+' },
              { k: 'Focus', v: 'Android/UI' }
            ].map((s) => (
              <div key={s.k} style={{
                background: 'transparent',
                border: '1px solid color-mix(in oklab, var(--color-accent) 12%, transparent)',
                borderRadius: '10px',
                padding: '0.6rem'
              }}>
                <div className="muted" style={{ fontSize: 12 }}>{s.k}</div>
                <div style={{ fontWeight: 700 }}>{s.v}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}


