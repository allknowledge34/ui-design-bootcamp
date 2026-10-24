import useTheme from './useTheme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import HowItWorks from './components/HowItWorks'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  const { theme, toggle } = useTheme()

  return (
    <div className="brutal-app">
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <HowItWorks />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
