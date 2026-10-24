import { useTheme } from './useTheme'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { StatsSection } from './components/StatsSection'
import { ComprehensiveFeatures } from './components/ComprehensiveFeatures'
import { ProductPreview } from './components/ProductPreview'
import { TrustQuote } from './components/TrustQuote'
import { Footer } from './components/Footer'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div id="top" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main id="main-content" style={{ flex: 1 }}>
        <Hero />
        <StatsSection />
        <ComprehensiveFeatures />
        <ProductPreview />
        <TrustQuote />
      </main>
      <Footer />
    </div>
  )
}
