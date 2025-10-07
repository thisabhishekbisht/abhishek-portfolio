import Section from '../components/Section'

const RESUME_PATH = '/resume.pdf'

export default function Resume() {
  return (
    <Section id="resume" title="Resume" subtitle="View in browser or download the PDF">
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        <a href={RESUME_PATH} target="_blank" rel="noreferrer">
          <button>View PDF</button>
        </a>
        <a href={RESUME_PATH} download="Abhishek_Bisht_Resume.pdf">
          <button>Direct Download</button>
        </a>
        <a href="#contact">
          <button style={{ background: 'linear-gradient(180deg, var(--color-accent), var(--color-accent-2))', color: '#0b0f1a' }}>Get in Touch</button>
        </a>
      </div>
    </Section>
  )
}


