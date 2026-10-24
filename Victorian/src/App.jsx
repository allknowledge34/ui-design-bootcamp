import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FeaturedCollection } from './components/FeaturedCollection'
import { BrandStory } from './components/BrandStory'
import { FeaturedDetail } from './components/FeaturedDetail'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { PrivateViewingModal } from './components/PrivateViewingModal'

export function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedLot, setSelectedLot] = useState('The Imperial Tourbillon Chronometer')

  const handleOpenModal = (lot = 'Curator Consultation') => {
    setSelectedLot(lot)
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  return (
    <div className="victorian-app">
      <Navbar onOpenModal={handleOpenModal} />
      <main>
        <Hero onOpenModal={handleOpenModal} />
        <FeaturedCollection onSelectLot={handleOpenModal} />
        <BrandStory />
        <FeaturedDetail onOpenModal={handleOpenModal} />
        <FinalCTA onOpenModal={handleOpenModal} />
      </main>
      <Footer />
      <PrivateViewingModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        defaultInterest={selectedLot}
      />
    </div>
  )
}

export default App
