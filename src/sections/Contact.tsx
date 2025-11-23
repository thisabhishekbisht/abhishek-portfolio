import Section from '../components/Section'

export default function Contact() {
  return (
    <Section id="contact" title="Contact" subtitle="Reach out directly via the details below">
      <div style={{ display: 'grid', gap: '1rem' }}>
        <div
          style={{
            display: 'grid',
            gap: '0.5rem',
            background: 'rgba(0, 0, 0, 0.6)',
            border: '1px solid var(--color-surface-highlight)',
            borderRadius: 'var(--radius)',
            padding: '1rem',
            color: 'var(--color-text)'
          }}
        >
          <div style={{ display: 'grid', gap: 4 }}>
            <div><strong>Email:</strong> <a href="mailto:abhishekbisht908@gmail.com">abhishekbisht908@gmail.com</a></div>
            <div><strong>Phone:</strong> <a href="tel:+919760925948">+91 97609 25948</a></div>
            <div className="muted">India • Open to opportunities</div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <a href="mailto:abhishekbisht908@gmail.com"><button>Email</button></a>
          <a href="tel:+919760925948"><button>Call</button></a>
          <a href="https://www.linkedin.com/in/thisabhishekbisht/" target="_blank" rel="noreferrer"><button>LinkedIn</button></a>
          <a href="https://github.com/thisabhishekbisht" target="_blank" rel="noreferrer"><button>GitHub</button></a>
        </div>
      </div>
    </Section>
  )
}

