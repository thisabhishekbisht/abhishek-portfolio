import Section from '../components/Section'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="A snapshot of work and learning">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1rem'
        }}
      >
        {projects.map((p) => (
          <article
            key={p.title}
            style={{
              background: 'color-mix(in oklab, var(--color-surface) 85%, black)',
              border: '1px solid color-mix(in oklab, var(--color-accent) 15%, transparent)',
              borderRadius: 'var(--radius)',
              padding: '1rem',
              display: 'grid',
              gap: '0.5rem'
            }}
          >
            <h3 style={{ margin: 0 }}>{p.title}</h3>
            <p className="muted" style={{ margin: 0 }}>{p.description}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {p.tags.map((t) => (
                <span key={t} style={{
                  fontSize: 12,
                  padding: '0.25rem 0.5rem',
                  borderRadius: 999,
                  border: '1px solid color-mix(in oklab, var(--color-accent) 20%, transparent)'
                }}>
                  {t}
                </span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.25rem' }}>
              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer"><button>Live</button></a>
              )}
              {p.repo && (
                <a href={p.repo} target="_blank" rel="noreferrer"><button>Code</button></a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}


