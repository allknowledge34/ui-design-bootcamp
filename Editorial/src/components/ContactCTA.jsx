import { useState } from 'react'

export function ContactCTA({ onOpenModal }) {
  const [email, setEmail] = useState('')
  const [track, setTrack] = useState('Digital Systems & Software Engineering')
  const [submitted, setSubmitted] = useState(false)

  const handleTransmit = (e) => {
    e.preventDefault()
    if (!email || !email.includes('@')) return
    setSubmitted(true)
  }

  return (
    <section id="contact" className="contact-section">
      <div className="editorial-container">
        <div className="contact-layout-box">
          <div>
            <div className="editorial-meta-tag editorial-meta-vermilion" style={{ marginBottom: '16px' }}>
              COMMISSION DIALOGUE // 2026
            </div>

            <h2 className="contact-headline">
              Begin a dialogue for your next <em>monumental</em> commission.
            </h2>

            <p className="contact-narrative">
              Whether you are commissioning a bespoke software infrastructure, architecting an art-directed web platform, or reshaping a digital brand system, we review inquiries with measured care.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem', color: 'var(--text-body)' }}>
              <div><strong>Direct Studio Line:</strong> +1 (415) 890-4812</div>
              <div><strong>Inquiries:</strong> commissions@verve-atelier.studio</div>
              <div><strong>Studio Atelier:</strong> 420 Montgomery St, Suite 800, San Francisco</div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div style={{ padding: '36px', border: '1px solid var(--border-dark)', backgroundColor: 'var(--bg-subtle)' }}>
                <div className="editorial-meta-tag editorial-meta-vermilion" style={{ marginBottom: '8px' }}>
                  TRANSMISSION ACKNOWLEDGED
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '12px' }}>
                  Inquiry Received
                </h3>
                <p style={{ fontSize: '0.96rem', color: 'var(--text-body)', lineHeight: '1.6', marginBottom: '24px' }}>
                  Thank you. A principal architect at Verve Atelier will review your inquiry parameters for {track} and respond directly to {email} within one business day.
                </p>
                <button
                  type="button"
                  className="editorial-btn editorial-btn-outline"
                  onClick={() => {
                    setSubmitted(false)
                    setEmail('')
                  }}
                  style={{ width: '100%' }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleTransmit} className="contact-editorial-form">
                <div className="form-group-field">
                  <label className="form-field-label" htmlFor="inquiry-track">
                    Commission Track
                  </label>
                  <select
                    id="inquiry-track"
                    className="editorial-text-input"
                    value={track}
                    onChange={(e) => setTrack(e.target.value)}
                  >
                    <option value="Digital Systems & Software Engineering">I // Digital Systems &amp; Software Engineering</option>
                    <option value="Art-Directed Web Platforms & Interfaces">II // Art-Directed Web Platforms &amp; Interfaces</option>
                    <option value="Brand Identity & Creative Direction">III // Brand Identity &amp; Creative Direction</option>
                    <option value="Comprehensive Studio Retainer">Comprehensive Studio Retainer</option>
                  </select>
                </div>

                <div className="form-group-field">
                  <label className="form-field-label" htmlFor="inquiry-email">
                    Work Email Address
                  </label>
                  <input
                    id="inquiry-email"
                    type="email"
                    required
                    placeholder="director@enterprise.com"
                    className="editorial-text-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <button type="submit" className="editorial-btn editorial-btn-dark" style={{ width: '100%', marginTop: '6px' }}>
                  <span>Transmit Commission Brief</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>

                <button
                  type="button"
                  className="editorial-btn editorial-btn-outline"
                  onClick={() => onOpenModal('Detailed Specification')}
                  style={{ width: '100%' }}
                >
                  Open Full Specification Form
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
