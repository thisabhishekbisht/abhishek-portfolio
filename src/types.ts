import type { ReactNode } from 'react'

export interface Project {
    title: string
    description: string
    tags: string[]
    link?: string
    repo?: string
    featured?: boolean
    company?: string
    features?: string[]
}

export interface Skill {
    icon: ReactNode
    name: string
    level: string
}

export interface ExperienceData {
    company: string
    position: string
    duration: string
    location: string
    website?: string
    achievements: string[]
    techStack: Record<string, string[]>
}
