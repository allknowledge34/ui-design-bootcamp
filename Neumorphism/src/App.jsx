import useTheme from './useTheme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ReviewsBar from './components/ReviewsBar'
import Benefits from './components/Benefits'
import FinanceShowcase from './components/FinanceShowcase'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  const { theme, toggle } = useTheme()

  return (
    <div className="neu-app">
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <ReviewsBar />
        <Benefits />
        <FinanceShowcase />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
