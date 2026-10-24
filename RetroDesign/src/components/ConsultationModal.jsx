import { useState, useEffect } from 'react'

export function ConsultationModal({ isOpen, onClose, defaultScope }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    scope: defaultScope || 'Architecture Sprint',
    timeline: 'Within 30 Days',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (defaultScope) {
      setFormData((prev) => ({ ...prev, scope: defaultScope }))
    }
  }, [defaultScope])

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
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="retro-modal" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {submitted ? (
          <div className="modal-success-state">
            <div className="modal-success-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="modal-title">Inquiry Received</h3>
            <p className="modal-desc">
              Thank you, {formData.name || 'partner'}. A principal engineer at Northstar Digital will review your project parameters and respond within one business day.
            </p>
            <button
              type="button"
              className="retro-btn retro-btn-primary"
              onClick={handleReset}
            >
              Return to Website
            </button>
          </div>
        ) : (
          <>
            <span className="section-eyebrow">Studio Consultation</span>
            <h3 className="modal-title">Initiate an Engagement</h3>
            <p className="modal-desc">
              Discuss architectural requirements, scope boundaries, or retainer availability directly with a lead practitioner.
            </p>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label className="form-label" htmlFor="client-name">
                  Your Full Name
                </label>
                <input
                  id="client-name"
                  type="text"
                  required
                  placeholder="e.g. Thomas Sullivan"
                  className="form-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="client-email">
                  Work Email Address
                </label>
                <input
                  id="client-email"
                  type="email"
                  required
                  placeholder="sullivan@acme-corp.com"
                  className="form-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="client-scope">
                  Engagement Track
                </label>
                <select
                  id="client-scope"
                  className="form-select"
                  value={formData.scope}
                  onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                >
                  <option value="Architecture Sprint">Architecture Sprint ($12,500)</option>
                  <option value="Dedicated Studio Retainer">Dedicated Studio Retainer ($24,000/mo)</option>
                  <option value="Software Architecture & Product Engineering">Software Architecture & Product Engineering</option>
                  <option value="Data Security & Infrastructure Hardening">Data Security & Infrastructure Hardening</option>
                  <option value="Mobile & Native Application Development">Mobile & Native Application Development</option>
                  <option value="Growth Marketing & Performance Optimization">Growth Marketing & Performance Optimization</option>
                  <option value="API Design & Cloud Integration">API Design & Cloud Integration</option>
                  <option value="Strategic Brand & Technical Consulting">Strategic Brand & Technical Consulting</option>
                  <option value="General Inquiry">General Studio Inquiry</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="client-timeline">
                  Target Kickoff
                </label>
                <select
                  id="client-timeline"
                  className="form-select"
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                >
                  <option value="Immediate (Next 7-14 Days)">Immediate (Next 7-14 Days)</option>
                  <option value="Within 30 Days">Within 30 Days</option>
                  <option value="Next Quarter">Next Quarter</option>
                  <option value="Exploratory Phase">Exploratory / Budget Planning</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="client-notes">
                  Brief Overview of Objectives
                </label>
                <textarea
                  id="client-notes"
                  rows={3}
                  placeholder="Tell us about your system scale, technical stack, or critical milestones..."
                  className="form-textarea"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              <button type="submit" className="retro-btn retro-btn-primary" style={{ marginTop: '8px' }}>
                <span>Transmit Project Brief</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
