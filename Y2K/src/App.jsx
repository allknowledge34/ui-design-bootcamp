import { useTheme } from './useTheme'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { TrustBar } from './components/TrustBar'
import { FeatureCards } from './components/FeatureCards'
import { ProductPreview } from './components/ProductPreview'
import { HowItWorks } from './components/HowItWorks'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div id="top" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main id="main-content" style={{ flex: 1 }}>
        <Hero />
        <TrustBar />
        <FeatureCards />
        <ProductPreview />
        <HowItWorks />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
