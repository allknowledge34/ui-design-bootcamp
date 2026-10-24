import useTheme from './useTheme'
import Navbar from './components/Navbar'
import TickerTape from './components/TickerTape'
import Hero from './components/Hero'
import FeatureMatrix from './components/FeatureMatrix'
import WorkflowSteps from './components/WorkflowSteps'
import BillsShowcase from './components/BillsShowcase'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  const { theme, toggle } = useTheme()

  return (
    <div className="max-app-wrapper" data-theme={theme}>
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <TickerTape />
        <FeatureMatrix />
        <WorkflowSteps />
        <BillsShowcase />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
