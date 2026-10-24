import useTheme from './useTheme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import HowItWorks from './components/HowItWorks'
import FinanceShowcase from './components/FinanceShowcase'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  const { theme, toggle } = useTheme()

  return (
    <div className="glass-site-wrapper" data-theme={theme}>
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <Benefits />
        <HowItWorks />
        <FinanceShowcase />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
