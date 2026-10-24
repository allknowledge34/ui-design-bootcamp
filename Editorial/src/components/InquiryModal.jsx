import { useState, useEffect } from 'react'

export function InquiryModal({ isOpen, onClose, defaultTrack }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    track: defaultTrack || 'Digital Systems & Software Engineering',
    timeline: 'Within 30 Days',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (defaultTrack) {
      setFormData((prev) => ({ ...prev, track: defaultTrack }))
    }
  }, [defaultTrack])

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
    <div className="modal-screen-curtain" onClick={onClose} role="dialog" aria-modal="true">
      <div className="editorial-modal-window" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-trigger"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '24px 0' }}>
            <span className="editorial-meta-tag editorial-meta-vermilion">SPECIFICATION RECEIVED</span>
            <h3 style={{ fontSize: '1.8rem', fontWeight: '800', textTransform: 'uppercase', marginTop: '12px', marginBottom: '12px' }}>
              Dialogue Initiated
            </h3>
            <p style={{ fontSize: '1rem', color: 'var(--text-body)', lineHeight: '1.6', marginBottom: '28px' }}>
              Thank you, {formData.name || 'patron'}. A principal designer and systems architect at Verve Atelier will review your parameters for {formData.track} and reply directly to {formData.email}.
            </p>
            <button
              type="button"
              className="editorial-btn editorial-btn-dark"
              onClick={handleReset}
              style={{ width: '100%' }}
            >
              Return to Journal
            </button>
          </div>
        ) : (
          <>
            <span className="editorial-meta-tag editorial-meta-vermilion">COMMISSION SPECIFICATION</span>
            <h3 style={{ fontSize: '1.7rem', fontWeight: '800', textTransform: 'uppercase', marginTop: '8px', marginBottom: '8px' }}>
              Initiate Studio Dialogue
            </h3>
            <p style={{ fontSize: '0.94rem', color: 'var(--text-body)', marginBottom: '24px' }}>
              Specify your project requirements to coordinate directly with our principal architects.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="form-group-field">
                <label className="form-field-label" htmlFor="client-name">
                  Principal or Director Name
                </label>
                <input
                  id="client-name"
                  type="text"
                  required
                  placeholder="e.g. Eleanor Vance"
                  className="editorial-text-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group-field">
                <label className="form-field-label" htmlFor="client-email">
                  Work Email Address
                </label>
                <input
                  id="client-email"
                  type="email"
                  required
                  placeholder="eleanor@acme-enterprises.com"
                  className="editorial-text-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group-field">
                <label className="form-field-label" htmlFor="client-track">
                  Discipline Track
                </label>
                <select
                  id="client-track"
                  className="editorial-text-input"
                  value={formData.track}
                  onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                >
                  <option value="Digital Systems & Software Engineering">I // Digital Systems &amp; Software Engineering</option>
                  <option value="Art-Directed Web Platforms & Interfaces">II // Art-Directed Web Platforms &amp; Interfaces</option>
                  <option value="Brand Identity & Creative Direction">III // Brand Identity &amp; Creative Direction</option>
                  <option value="Comprehensive Studio Retainer">Comprehensive Studio Retainer</option>
                  <option value="General Studio Inquiry">General Studio Inquiry</option>
                </select>
              </div>

              <div className="form-group-field">
                <label className="form-field-label" htmlFor="client-timeline">
                  Target Kickoff Timeline
                </label>
                <select
                  id="client-timeline"
                  className="editorial-text-input"
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                >
                  <option value="Within 14 Days">Immediate (Next 14 Days)</option>
                  <option value="Within 30 Days">Within 30 Days</option>
                  <option value="Next Quarter">Next Quarter</option>
                  <option value="Exploratory / Budget Phase">Exploratory / Budget Planning</option>
                </select>
              </div>

              <div className="form-group-field">
                <label className="form-field-label" htmlFor="client-notes">
                  Commission Summary &amp; Scope
                </label>
                <textarea
                  id="client-notes"
                  rows={3}
                  placeholder="Outline the core thesis, technical demands, or anticipated scale of this initiative..."
                  className="editorial-text-input"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              <button type="submit" className="editorial-btn editorial-btn-dark" style={{ marginTop: '8px' }}>
                <span>Transmit Specification</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
