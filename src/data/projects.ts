export type Project = {
  title: string
  description: string
  tags: string[]
  link?: string
  repo?: string
}

export const projects: Project[] = [
  {
    title: 'Android Expense Tracker',
    description: 'Kotlin-based Android app for tracking expenses with charts and offline-first sync.',
    tags: ['Android', 'Kotlin', 'Room', 'Coroutines'],
    link: '#',
    repo: '#'
  },
  {
    title: 'Flutter Fitness Coach',
    description: 'Cross-platform Flutter app with workouts, streaks, and animated UI.',
    tags: ['Flutter', 'Dart', 'Firebase'],
    link: '#',
    repo: '#'
  },
  {
    title: 'React Learning Playground',
    description: 'A collection of React experiments while learning hooks, state, and animations.',
    tags: ['React', 'TypeScript', 'Framer Motion'],
    link: '#',
    repo: '#'
  }
]


