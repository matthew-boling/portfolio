import './App.css'
import Hero from './components/Hero'
import Summary from './components/Summary'
import Achievements from './components/Achievements'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'

function App() {
  return (
    <div className="app">
      <Hero />
      <Summary />
      <Achievements />
      <Skills />
      <Experience />
      <Education />
      <footer className="footer">
        <p>© 2026 Matthew Boling. All rights reserved.</p>
        <div className="contact-links">
          <a href="mailto:mjboling29@outlook.com">mjboling29@outlook.com</a>
          <span>•</span>
          <a href="tel:+12709934614">+1 (270) 993-4614</a>
        </div>
      </footer>
    </div>
  )
}

export default App
