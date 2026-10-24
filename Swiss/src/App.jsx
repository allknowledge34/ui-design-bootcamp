import { useTheme } from './useTheme'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { StandardsTicker } from './components/StandardsTicker'
import { CoreSplit } from './components/CoreSplit'
import { AlternatingFeatures } from './components/AlternatingFeatures'
import { ProductPreview } from './components/ProductPreview'
import { FinancialMatrix } from './components/FinancialMatrix'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div id="top" className="app-wrapper">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main id="main-content">
        <Hero />
        <StandardsTicker />
        <CoreSplit />
        <AlternatingFeatures />
        <ProductPreview />
        <FinancialMatrix />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
