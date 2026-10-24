import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { SelectedWork } from './components/SelectedWork'
import { About } from './components/About'
import { Highlights } from './components/Highlights'
import { ContactCTA } from './components/ContactCTA'
import { Footer } from './components/Footer'
import { InquiryModal } from './components/InquiryModal'

export function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalTrack, setModalTrack] = useState('Digital Systems & Software Engineering')

  const handleOpenModal = (track = 'General Studio Inquiry') => {
    setModalTrack(track)
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  return (
    <div className="editorial-app">
      <Navbar onOpenModal={handleOpenModal} />
      <main>
        <Hero onOpenModal={handleOpenModal} />
        <Services onSelectService={handleOpenModal} />
        <SelectedWork onOpenModal={handleOpenModal} />
        <About />
        <Highlights />
        <ContactCTA onOpenModal={handleOpenModal} />
      </main>
      <Footer />
      <InquiryModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        defaultTrack={modalTrack}
      />
    </div>
  )
}

export default App
