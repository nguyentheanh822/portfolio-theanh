import { useState } from 'react'
import Home from './components/Home'
import Navigation from './components/Navigation'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />
      case 'about':
        return <About />
      case 'experience':
        return <Experience />
      case 'education':
        return <Education />
      case 'projects':
        return <Projects />
      case 'skills':
        return <Skills />
      case 'contact':
        return <Contact />
      default:
        return <Home onNavigate={setCurrentPage} />
    }
  }

  return (
    <div className="app-container">
      {currentPage !== 'home' && <Navigation onNavigate={setCurrentPage} />}
      <main>
        {renderPage()}
      </main>
    </div>
  )
}

export default App
