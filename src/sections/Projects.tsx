import Section from '../components/Section'
import { projects } from '../data/projects'
import FeaturedProject from '../components/FeaturedProject'
import ProjectCard from '../components/ProjectCard'

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
            <FeaturedProject key={project.title} project={project} />
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
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      )}
    </Section>
  )
}


