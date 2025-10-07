import Section from '../components/Section'
import { projects } from '../data/projects'

export default function Projects() {
  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <Section id="projects" title="Featured Projects" subtitle="Showcasing my major contributions to industry-leading applications">
      {/* Featured Projects Section */}
      <div style={{ marginBottom: '3rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem'
          }}
        >
          {featuredProjects.map((project) => (
            <article
              key={project.title}
              style={{
                background: 'linear-gradient(135deg, color-mix(in oklab, var(--color-surface) 90%, var(--color-accent) 10%), color-mix(in oklab, var(--color-surface) 95%, var(--color-accent) 5%))',
                border: '2px solid color-mix(in oklab, var(--color-accent) 25%, transparent)',
                borderRadius: '16px',
                padding: '2rem',
                display: 'grid',
                gap: '1rem',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 8px 32px color-mix(in oklab, var(--color-accent) 10%, transparent)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 16px 48px color-mix(in oklab, var(--color-accent) 15%, transparent)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 8px 32px color-mix(in oklab, var(--color-accent) 10%, transparent)'
              }}
            >
              {/* Featured Badge */}
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'linear-gradient(45deg, var(--color-accent), color-mix(in oklab, var(--color-accent) 80%, white))',
                color: 'white',
                padding: '0.25rem 0.75rem',
                borderRadius: '20px',
                fontSize: '0.75rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Featured
              </div>

              {/* Company */}
              {project.company && (
                <div style={{
                  fontSize: '0.875rem',
                  color: 'var(--color-accent)',
                  fontWeight: '600',
                  marginBottom: '0.5rem'
                }}>
                  {project.company}
                </div>
              )}

              {/* Title */}
              <h3 style={{ 
                margin: 0, 
                fontSize: '1.5rem',
                fontWeight: '700',
                background: 'linear-gradient(135deg, var(--color-text), var(--color-accent))',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                {project.title}
              </h3>

              {/* Description */}
              <p style={{ 
                margin: 0, 
                lineHeight: '1.6',
                color: 'color-mix(in oklab, var(--color-text) 80%, transparent)'
              }}>
                {project.description}
              </p>

              {/* Features */}
              {project.features && (
                <div style={{ marginTop: '0.5rem' }}>
                  <h4 style={{ 
                    margin: '0 0 0.5rem 0', 
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: 'var(--color-accent)'
                  }}>
                    Key Features:
                  </h4>
                  <ul style={{ 
                    margin: 0, 
                    paddingLeft: '1.25rem',
                    fontSize: '0.875rem',
                    lineHeight: '1.5'
                  }}>
                    {project.features.map((feature, index) => (
                      <li key={index} style={{ marginBottom: '0.25rem' }}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
                {project.tags.map((tag) => (
                  <span key={tag} style={{
                    fontSize: '0.75rem',
                    padding: '0.375rem 0.75rem',
                    borderRadius: '20px',
                    background: 'color-mix(in oklab, var(--color-accent) 15%, transparent)',
                    border: '1px solid color-mix(in oklab, var(--color-accent) 30%, transparent)',
                    color: 'var(--color-accent)',
                    fontWeight: '500'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{ 
                display: 'flex', 
                gap: '1rem', 
                marginTop: '1.5rem',
                justifyContent: 'flex-end'
              }}>
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <button style={{
                      background: 'linear-gradient(135deg, var(--color-accent), color-mix(in oklab, var(--color-accent) 80%, white))',
                      color: 'white',
                      border: 'none',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '8px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      boxShadow: '0 4px 12px color-mix(in oklab, var(--color-accent) 30%, transparent)'
                    }}>
                      View Live
                    </button>
                  </a>
                )}
                {project.repo && (
                  <a 
                    href={project.repo} 
                    target="_blank" 
                    rel="noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <button style={{
                      background: 'transparent',
                      color: 'var(--color-accent)',
                      border: '2px solid var(--color-accent)',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '8px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}>
                      View Code
                    </button>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Other Projects Section */}
      {otherProjects.length > 0 && (
        <div>
          <h3 style={{ 
            textAlign: 'center', 
            marginBottom: '2rem',
            fontSize: '1.25rem',
            fontWeight: '600',
            color: 'color-mix(in oklab, var(--color-text) 80%, transparent)'
          }}>
            Other Projects
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {otherProjects.map((project) => (
              <article
                key={project.title}
                style={{
                  background: 'color-mix(in oklab, var(--color-surface) 85%, black)',
                  border: '1px solid color-mix(in oklab, var(--color-accent) 15%, transparent)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  display: 'grid',
                  gap: '0.75rem',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 8px 24px color-mix(in oklab, var(--color-accent) 8%, transparent)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <h4 style={{ margin: 0, fontSize: '1.125rem', fontWeight: '600' }}>
                  {project.title}
                </h4>
                <p style={{ 
                  margin: 0, 
                  fontSize: '0.875rem',
                  lineHeight: '1.5',
                  color: 'color-mix(in oklab, var(--color-text) 70%, transparent)'
                }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {project.tags.map((tag) => (
                    <span key={tag} style={{
                      fontSize: '0.75rem',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '12px',
                      background: 'color-mix(in oklab, var(--color-accent) 10%, transparent)',
                      border: '1px solid color-mix(in oklab, var(--color-accent) 20%, transparent)',
                      color: 'var(--color-accent)'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <button style={{
                        background: 'var(--color-accent)',
                        color: 'white',
                        border: 'none',
                        padding: '0.5rem 1rem',
                        borderRadius: '6px',
                        fontSize: '0.875rem',
                        cursor: 'pointer'
                      }}>
                        Live
                      </button>
                    </a>
                  )}
                  {project.repo && (
                    <a href={project.repo} target="_blank" rel="noreferrer">
                      <button style={{
                        background: 'transparent',
                        color: 'var(--color-accent)',
                        border: '1px solid var(--color-accent)',
                        padding: '0.5rem 1rem',
                        borderRadius: '6px',
                        fontSize: '0.875rem',
                        cursor: 'pointer'
                      }}>
                        Code
                      </button>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </Section>
  )
}


