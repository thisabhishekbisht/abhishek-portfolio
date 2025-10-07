import Section from '../components/Section'

export default function About() {
  return (
    <Section id="about" title="About this site" subtitle="AI-assisted, modern React stack">
      <div style={{ display: 'grid', gap: '0.75rem' }}>
        <p>
          This portfolio was built with React and TypeScript using modern UI patterns and animations. I leveraged AI assistance to
          accelerate layout, component scaffolding, and styling, then refined interactions and content manually.
        </p>
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
                border: '1px solid color-mix(in oklab, var(--color-accent) 20%, transparent)'
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


