import Section from '../components/Section'
import { FaJava, FaAndroid, FaReact } from 'react-icons/fa'
import { SiFlutter } from 'react-icons/si'

const skills = [
  { icon: <FaJava size={28} />, name: 'Java', level: 'Advanced' },
  { icon: <FaAndroid size={28} />, name: 'Android', level: 'Advanced' },
  { icon: <SiFlutter size={28} />, name: 'Flutter', level: 'Intermediate' },
  { icon: <FaReact size={28} />, name: 'React', level: 'Intermediate' }
]

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
              background: 'color-mix(in oklab, var(--color-surface) 85%, black)',
              border: '1px solid color-mix(in oklab, var(--color-accent) 15%, transparent)',
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


