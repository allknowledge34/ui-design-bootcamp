import useTheme from './useTheme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SmartTools from './components/SmartTools'
import HowItWorks from './components/HowItWorks'
import EverydayFinance from './components/EverydayFinance'
import DesignedForClarity from './components/DesignedForClarity'
import UserReviews from './components/UserReviews'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  const { theme, toggle } = useTheme()

  return (
    <div className="clay-app">
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <SmartTools />
        <HowItWorks />
        <EverydayFinance />
        <DesignedForClarity />
        <UserReviews />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
