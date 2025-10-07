import './App.css'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import About from './sections/About'
import Resume from './sections/Resume'
import Contact from './sections/Contact'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Resume />
        <Contact />
      </main>
    </>
  )
}

export default App
