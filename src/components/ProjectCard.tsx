import type { Project } from '../types'
import TechBadge from './TechBadge'

interface ProjectCardProps {
    project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article
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
                {project.tags.map((tag, index) => (
                    <TechBadge key={tag} name={tag} index={index} />
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
    )
}
