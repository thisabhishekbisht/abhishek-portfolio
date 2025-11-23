import Section from '../components/Section'
import { skills } from '../data/skills'

export default function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="Focused on building robust, user-centric apps">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1rem'
        }}
      >
        {skills.map((s) => (
          <div
            key={s.name}
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: 'var(--radius)',
              padding: '1rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div style={{ color: 'var(--color-accent)' }}>{s.icon}</div>
              <div>
                <div style={{ fontWeight: 600 }}>{s.name}</div>
                <div className="muted" style={{ fontSize: 13 }}>{s.level}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}


