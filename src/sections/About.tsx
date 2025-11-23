import Section from '../components/Section'

export default function About() {
  return (
    <Section id="about" title="About Me" subtitle="Senior Software Developer with expertise in mobile applications and enterprise solutions">
      <div style={{ display: 'grid', gap: '1.5rem' }}>
        <div style={{ display: 'grid', gap: '1rem' }}>
          <p>
            I'm a Senior Software Developer at Tata Consultancy Services with extensive experience in building scalable mobile applications
            and enterprise solutions. I specialize in Android development using modern technologies like Jetpack Compose, Kotlin, and
            clean architecture patterns.
          </p>
          <p>
            My expertise spans across e-commerce platforms like TataCliq and OTT streaming services like SonyLiv, where I've contributed
            to building robust, secure, and high-performance applications serving millions of users.
          </p>
        </div>

        <div style={{ display: 'grid', gap: '1rem' }}>
          <h3 style={{ margin: 0, fontSize: '1.125rem', fontWeight: '600', color: 'var(--color-accent)' }}>
            About This Portfolio
          </h3>
          <p>
            This portfolio was built with React and TypeScript using modern UI patterns and animations. I leveraged AI assistance to
            accelerate layout, component scaffolding, and styling, then refined interactions and content manually.
          </p>
        </div>
        <div
          style={{
            display: 'grid',
            gap: '0.6rem',
            background: 'color-mix(in oklab, var(--color-surface) 85%, black)',
            border: '1px solid color-mix(in oklab, var(--color-accent) 15%, transparent)',
            borderRadius: 'var(--radius)',
            padding: '1rem'
          }}
        >
          <div className="muted">Core tech</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {['React', 'TypeScript', 'Vite', 'Framer Motion', 'React Icons', 'ESLint'].map((t) => (
              <span key={t} style={{
                fontSize: 12,
                padding: '0.3rem 0.6rem',
                borderRadius: 999,
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.25)'
              }}>
                {t}
              </span>
            ))}
          </div>
        </div>
        <p className="muted" style={{ margin: 0 }}>
          Source available on my GitHub. Designed for performance, accessibility, and responsiveness with a consistent theme.
        </p>
      </div>
    </Section>
  )
}


