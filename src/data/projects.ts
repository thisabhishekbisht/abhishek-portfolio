export type Project = {
  title: string
  description: string
  tags: string[]
  link?: string
  repo?: string
  image?: string
  featured?: boolean
  features?: string[]
  company?: string
}

export const projects: Project[] = [
  {
    title: 'TataCliq E-commerce Platform',
    description: 'India\'s leading e-commerce application with millions of users. Built scalable microservices architecture handling high traffic and complex business logic.',
    tags: ['React', 'Node.js', 'Microservices', 'AWS', 'MongoDB', 'Redis'],
    link: 'https://play.google.com/store/apps/details?id=com.tul.tatacliq&hl=en_IN',
    repo: '#',
    featured: true,
    company: 'Tata Digital',
    features: [
      'Scalable microservices architecture',
      'Real-time inventory management',
      'Advanced search and filtering',
      'Payment gateway integration',
      'Mobile-responsive design'
    ]
  },
  {
    title: 'SonyLiv OTT Platform',
    description: 'Premium video streaming platform with live TV, movies, and original content. Implemented advanced video streaming and user engagement features.',
    tags: ['React Native', 'Node.js', 'Video Streaming', 'AWS', 'PostgreSQL', 'CDN'],
    link: 'https://www.sonyliv.com',
    repo: '#',
    featured: true,
    company: 'Sony Pictures Networks',
    features: [
      'High-quality video streaming',
      'Live TV integration',
      'Personalized recommendations',
      'Multi-device synchronization',
      'Offline download capability'
    ]
  },
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


