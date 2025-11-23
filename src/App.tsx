import { Suspense, lazy } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'

const Skills = lazy(() => import('./sections/Skills'))
const Projects = lazy(() => import('./sections/Projects'))
const Experience = lazy(() => import('./sections/Experience'))
const About = lazy(() => import('./sections/About'))
const Resume = lazy(() => import('./sections/Resume'))
const Contact = lazy(() => import('./sections/Contact'))

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
          <Skills />
          <Projects />
          <Experience />
          <About />
          <Resume />
          <Contact />
        </Suspense>
      </main>
    </>
  )
}

export default App
