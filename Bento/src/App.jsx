import { useTheme } from './useTheme'
import { Navbar } from './components/Navbar'
import { HeroBento } from './components/HeroBento'
import { TrustBentoStrip } from './components/TrustBentoStrip'
import { CoreBentoSplit } from './components/CoreBentoSplit'
import { AlternatingBentoFeatures } from './components/AlternatingBentoFeatures'
import { ProductPreviewBento } from './components/ProductPreviewBento'
import { OverviewBentoGrid } from './components/OverviewBentoGrid'
import { HowItWorksBento } from './components/HowItWorksBento'
import { FinalBentoCTA } from './components/FinalBentoCTA'
import { Footer } from './components/Footer'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div id="top" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main id="main-content" style={{ flex: 1 }}>
        <HeroBento />
        <TrustBentoStrip />
        <CoreBentoSplit />
        <AlternatingBentoFeatures />
        <ProductPreviewBento />
        <OverviewBentoGrid />
        <HowItWorksBento />
        <FinalBentoCTA />
      </main>
      <Footer />
    </div>
  )
}
