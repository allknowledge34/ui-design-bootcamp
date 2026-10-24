import { useTheme } from './useTheme'
import { Navbar } from './components/Navbar'
import { HeroBanner } from './components/HeroBanner'
import { ServicesGrid } from './components/ServicesGrid'
import { StatsStrip } from './components/StatsStrip'
import { PricingSection } from './components/PricingSection'
import { Footer } from './components/Footer'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div id="top" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main id="main-content" style={{ flex: 1 }}>
        <HeroBanner />
        <ServicesGrid />
        <StatsStrip />
        <PricingSection />
      </main>
      <Footer />
    </div>
  )
}
