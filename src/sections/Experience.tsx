import { motion, useScroll, useTransform } from 'framer-motion'
import Section from '../components/Section'
import { useRef } from 'react'
import type { ExperienceData } from '../types'
import TechBadge from '../components/TechBadge'

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const experiences: ExperienceData[] = [
    {
      company: 'Tata Consultancy Services',
      position: 'Senior Software Developer',
      duration: 'Jan 2023 - Sep 2025',
      location: 'Noida, India',
      website: 'https://www.tcs.com',
      achievements: [
        'Developed a secure RFID enabled FedEx DPU Pickup Monitoring app using Jetpack Compose, Room with SQLCipher, ensuring encrypted offline storage, real-time updates, and automated background checks.',
        'Implemented robust Server-Sent Events (SSE) integration with auto-reconnect and retry logic, enabling 99% uptime for real-time pickup tracking and reducing manual refresh needs.',
        'Built a tablet-first Android app using Jetpack Compose, leveraging state management, Navigation, and reusable UI components to deliver a modern, consistent, and scalable user experience.',
        'Developed and maintained subscription models (monthly, yearly) with automated renewal workflows for SonyLIV.',
        'Wrote and executed unit tests using JUnit, Mockito/MockK, achieving 90% code coverage to ensure application stability and reliability.',
        'Implemented Analytics and Crashlytics events with Firebase Analytics to track user behavior and engagement metrics.'
      ],
      techStack: {
        'Language & Core': ['Kotlin', 'Coroutines', 'Flow', 'StateFlow', 'Sealed Classes', 'Extension Functions'],
        'Architecture & Patterns': ['MVVM', 'Repository Pattern', 'Use Case Layer', 'Clean Architecture', 'Modular Design', 'Dependency Injection (Hilt/Dagger)'],
        'UI & UX': ['Jetpack Compose', 'Material 3 Design', 'Theming', 'Dark Mode', 'Adaptive Layouts', 'Animations & Motion APIs', 'Custom Composables'],
        'Networking & Data': ['Retrofit', 'OkHttp', 'Gson/Moshi', 'Room Database', 'DataStore', 'Offline-first Implementation', 'API Pagination', 'Error Handling'],
        'Security & Privacy': ['Encrypted DataStore/Room', 'HTTPS', 'Network Interceptors', 'Secure Token Management', 'OAuth/JWT', 'Play Integrity API'],
        'Testing & Quality': ['Unit Testing (JUnit, Mockito)', 'UI Testing (Espresso, Compose Test)', 'MockWebServer', 'Crashlytics', 'Performance Monitoring'],
        'CI/CD & Deployment': ['Git & GitHub', 'GitHub Actions/Bitrise', 'Gradle Build Optimization', 'Code Shrinking (R8/ProGuard)', 'Play Store Release'],
        'Performance & Optimization': ['LazyColumn Optimization', 'Paging', 'Snapshots', 'Image Loading (Coil/Glide)', 'Memory Optimization', 'Battery Optimization', 'Network Usage Optimization'],
        'Analytics & Cloud': ['Firebase Analytics', 'Crashlytics', 'FCM Push Notifications', 'Remote Config']
      }
    },
    {
      company: 'DewSolutions',
      position: 'Senior Software Engineer',
      duration: 'April 2022 - November 2023',
      location: 'Gurgaon, India',
      website: 'https://www.dewsolutions.com',
      achievements: [
        'Developed a collapsible search toolbar with dynamic visibility behavior, enabling it to hide during downward scrolling and reappear instantly upon upward scrolling.',
        'Developed and implemented an automatic OTP verification system using Hash Key, ensuring 100% accurate user authentication without manual input. This improved the user experience by streamlining the login process and eliminating verification failures.',
        'Designed and implemented a post-purchase feedback page, allowing users to rate their experience using interactive smiley-based ratings.'
      ],
      techStack: {
        'Language & Core': ['Kotlin', 'Java', 'Jetpack Compose'],
        'UI & UX': ['Jetpack Compose', 'Multi-view RecyclerView', 'Scrollable Search Bar', 'Interactive UI Components', 'Custom Animations'],
        'Networking & Data': ['Retrofit', 'RESTful APIs', 'Data Parsing'],
        'Authentication': ['Google OTP Retrieval API', 'Hash Key Implementation', 'Automatic OTP Verification'],
        'User Experience': ['Dynamic UI Behavior', 'Scroll-based Interactions', 'Interactive Feedback Systems', 'Smiley-based Rating System']
      }
    }
  ]

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <Section id="experience" title="Professional Experience" subtitle="Building scalable mobile applications and enterprise solutions">
      <motion.div
        ref={containerRef}
        style={{
          y,
          opacity,
          overflow: 'hidden',
          padding: '1rem 0'
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '2rem',
            padding: '1rem 0'
          }}
          className="experience-scroll"
        >
          {experiences.map((exp, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, x: 100, rotateY: 15 }}
              whileInView={{
                opacity: 1,
                x: 0,
                rotateY: 0,
                transition: {
                  duration: 0.8,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }
              }}
              whileHover={{
                scale: 1.02,
                rotateY: -5,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true, amount: 0.3 }}
              style={{
                minWidth: '450px',
                maxWidth: '500px',
                background: 'linear-gradient(135deg, color-mix(in oklab, var(--color-surface) 90%, var(--color-accent) 10%), color-mix(in oklab, var(--color-surface) 95%, var(--color-accent) 5%))',
                border: '2px solid color-mix(in oklab, var(--color-accent) 20%, transparent)',
                borderRadius: '20px',
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 20px 60px color-mix(in oklab, var(--color-accent) 15%, transparent)',
                scrollSnapAlign: 'start',
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              {/* Animated Background Gradient */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(45deg, transparent, color-mix(in oklab, var(--color-accent) 5%, transparent), transparent)',
                  opacity: 0
                }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Company Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}>
                <div>
                  <motion.h3
                    style={{
                      margin: '0 0 0.5rem 0',
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      background: 'linear-gradient(135deg, var(--color-text), var(--color-accent))',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {exp.company}
                  </motion.h3>
                  <div style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: 'var(--color-accent)',
                    marginBottom: '0.25rem'
                  }}>
                    {exp.position}
                  </div>
                  <div style={{
                    fontSize: '0.875rem',
                    color: 'color-mix(in oklab, var(--color-text) 70%, transparent)',
                    marginBottom: '0.25rem'
                  }}>
                    {exp.duration} • {exp.location}
                  </div>
                </div>
                {exp.website && (
                  <motion.a
                    href={exp.website}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: 'none' }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button style={{
                      background: 'linear-gradient(135deg, var(--color-accent), color-mix(in oklab, var(--color-accent) 80%, white))',
                      color: 'white',
                      border: 'none',
                      padding: '0.5rem 1rem',
                      borderRadius: '12px',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      boxShadow: '0 4px 15px color-mix(in oklab, var(--color-accent) 30%, transparent)'
                    }}>
                      Website
                    </button>
                  </motion.a>
                )}
              </div>

              {/* Key Achievements */}
              <motion.div
                style={{ marginBottom: '2rem', position: 'relative', zIndex: 1 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <h4 style={{
                  margin: '0 0 1rem 0',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: 'var(--color-accent)'
                }}>
                  Key Achievements
                </h4>
                <ul style={{
                  margin: 0,
                  paddingLeft: '1.25rem',
                  lineHeight: '1.6'
                }}>
                  {exp.achievements.map((achievement, idx) => (
                    <motion.li
                      key={idx}
                      style={{ marginBottom: '0.75rem' }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 + idx * 0.1 }}
                    >
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                style={{ position: 'relative', zIndex: 1 }}
              >
                <h4 style={{
                  margin: '0 0 1rem 0',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: 'var(--color-accent)'
                }}>
                  Tech Stack & Skills
                </h4>
                <div style={{ display: 'grid', gap: '1.5rem' }}>
                  {Object.entries(exp.techStack).map(([category, skills], categoryIndex) => (
                    <motion.div
                      key={category}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 + categoryIndex * 0.05 }}
                    >
                      <h5 style={{
                        margin: '0 0 0.5rem 0',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        color: 'color-mix(in oklab, var(--color-text) 80%, transparent)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}>
                        {category}
                      </h5>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {skills.map((skill, skillIndex) => (
                          <TechBadge key={skill} name={skill} index={skillIndex} />
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}
