import { useState, useEffect } from 'react'

export function PrivateViewingModal({ isOpen, onClose, defaultInterest }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: defaultInterest || 'The Imperial Tourbillon Chronometer',
    salon: 'London St. James’s Salon',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (defaultInterest) {
      setFormData((prev) => ({ ...prev, interest: defaultInterest }))
    }
  }, [defaultInterest])

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleReset = () => {
    setSubmitted(false)
    onClose()
  }

  return (
    <div className="modal-backdrop-curtain" onClick={onClose} role="dialog" aria-modal="true">
      <div className="victorian-modal-window" onClick={(e) => e.stopPropagation()}>
        <div className="flourish-corner flourish-tl" />
        <div className="flourish-corner flourish-tr" />
        <div className="flourish-corner flourish-bl" />
        <div className="flourish-corner flourish-br" />

        <button
          type="button"
          className="modal-close-trigger"
          onClick={onClose}
          aria-label="Close dialog"
        >
          ✕
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '24px 0' }}>
            <span className="section-heraldic-tag">CONCIERGE ACKNOWLEDGMENT</span>
            <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '1.8rem', color: 'var(--victorian-burgundy)', marginTop: '10px', marginBottom: '12px' }}>
              VIEWING REQUEST RECEIVED
            </h3>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.18rem', color: 'var(--text-body)', lineHeight: '1.6', marginBottom: '28px' }}>
              We thank you, {formData.name || 'esteemed patron'}. A senior curator at Royal Heritage will arrange private showing arrangements for {formData.interest} and reach out to {formData.email} within 24 hours.
            </p>
            <button
              type="button"
              className="victorian-btn victorian-btn-gold"
              onClick={handleReset}
              style={{ width: '100%' }}
            >
              RETURN TO ATELIER
            </button>
          </div>
        ) : (
          <>
            <span className="section-heraldic-tag">PRIVATE CONCIERGE</span>
            <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '1.6rem', color: 'var(--victorian-burgundy)', marginTop: '8px', marginBottom: '8px' }}>
              SCHEDULE A PRIVATE VIEWING
            </h3>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.15rem', color: 'var(--text-body)', marginBottom: '24px' }}>
              Please furnish your details below to schedule an appointment with our senior antiquarians.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <label htmlFor="patron-name" style={{ fontFamily: 'Cinzel, serif', fontSize: '0.74rem', letterSpacing: '0.12em', color: 'var(--victorian-burgundy)' }}>
                  Patron Full Name
                </label>
                <input
                  id="patron-name"
                  type="text"
                  required
                  placeholder="e.g. Lord Alistair Sterling"
                  style={{ padding: '11px 14px', border: '1px solid var(--victorian-gold)', backgroundColor: '#FFFFFF', color: 'var(--text-dark)' }}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <label htmlFor="patron-email" style={{ fontFamily: 'Cinzel, serif', fontSize: '0.74rem', letterSpacing: '0.12em', color: 'var(--victorian-burgundy)' }}>
                  Confidential Contact Email
                </label>
                <input
                  id="patron-email"
                  type="email"
                  required
                  placeholder="patron@estate-holdings.co.uk"
                  style={{ padding: '11px 14px', border: '1px solid var(--victorian-gold)', backgroundColor: '#FFFFFF', color: 'var(--text-dark)' }}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <label htmlFor="patron-interest" style={{ fontFamily: 'Cinzel, serif', fontSize: '0.74rem', letterSpacing: '0.12em', color: 'var(--victorian-burgundy)' }}>
                  Lot or Collection of Interest
                </label>
                <select
                  id="patron-interest"
                  style={{ padding: '11px 14px', border: '1px solid var(--victorian-gold)', backgroundColor: '#FFFFFF', color: 'var(--text-dark)' }}
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                >
                  <option value="The Imperial Tourbillon Chronometer">The Imperial Tourbillon Chronometer (Lot MDCCCLXXXVII)</option>
                  <option value="The Grand Marquetry Bureau">The Grand Marquetry Bureau (Lot MDCCCXC)</option>
                  <option value="The Sovereign Sterling Tea Service">The Sovereign Sterling Tea Service (Lot MDCCCXCIV)</option>
                  <option value="Bespoke Private Curation">Bespoke Estate Curation &amp; Acquisition</option>
                  <option value="General Atelier Viewing">General Atelier Viewing &bull; London Salons</option>
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <label htmlFor="patron-salon" style={{ fontFamily: 'Cinzel, serif', fontSize: '0.74rem', letterSpacing: '0.12em', color: 'var(--victorian-burgundy)' }}>
                  Preferred Viewing Arrangement
                </label>
                <select
                  id="patron-salon"
                  style={{ padding: '11px 14px', border: '1px solid var(--victorian-gold)', backgroundColor: '#FFFFFF', color: 'var(--text-dark)' }}
                  value={formData.salon}
                  onChange={(e) => setFormData({ ...formData, salon: e.target.value })}
                >
                  <option value="London St. James’s Salon">London St. James&apos;s Private Salon</option>
                  <option value="Private Estate Showing">Private Residence Showing</option>
                  <option value="Virtual Curator Video Conference">Virtual Curator Video Conference</option>
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <label htmlFor="patron-message" style={{ fontFamily: 'Cinzel, serif', fontSize: '0.74rem', letterSpacing: '0.12em', color: 'var(--victorian-burgundy)' }}>
                  Curatorial Inquiries or Estate Notes
                </label>
                <textarea
                  id="patron-message"
                  rows={3}
                  placeholder="Specify particular era, horological complications, or provenance requirements..."
                  style={{ padding: '11px 14px', border: '1px solid var(--victorian-gold)', backgroundColor: '#FFFFFF', color: 'var(--text-dark)', fontFamily: 'inherit' }}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button type="submit" className="victorian-btn victorian-btn-gold" style={{ marginTop: '8px' }}>
                <span>CONFIRM VIEWING REQUEST</span>
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
