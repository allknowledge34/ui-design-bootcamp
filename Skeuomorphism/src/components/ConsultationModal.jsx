import { useState, useEffect } from 'react'

export function ConsultationModal({ isOpen, onClose, defaultScope }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    scope: defaultScope || 'Software Design',
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
    <div className="modal-curtain" onClick={onClose} role="dialog" aria-modal="true">
      <div className="skeuo-dialog" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="dialog-close-btn"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {submitted ? (
          <div className="dialog-success-panel">
            <div className="dialog-success-seal">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="dialog-title">Brief Received</h3>
            <p className="dialog-desc">
              Thank you, {formData.name || 'partner'}. A senior engineer at Northstar Digital will review your requirements and respond within one business day.
            </p>
            <button
              type="button"
              className="skeuo-btn skeuo-btn-primary"
              onClick={handleReset}
            >
              Return to Website
            </button>
          </div>
        ) : (
          <>
            <span className="section-label">Studio Consultation</span>
            <h3 className="dialog-title">Initiate an Engagement</h3>
            <p className="dialog-desc">
              Discuss architecture, scope boundaries, or retainer availability directly with a lead practitioner.
            </p>

            <form onSubmit={handleSubmit} className="dialog-form">
              <div className="form-field-group">
                <label className="form-field-label" htmlFor="client-name">
                  Your Full Name
                </label>
                <input
                  id="client-name"
                  type="text"
                  required
                  placeholder="e.g. Thomas Sullivan"
                  className="form-field-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-field-group">
                <label className="form-field-label" htmlFor="client-email">
                  Work Email Address
                </label>
                <input
                  id="client-email"
                  type="email"
                  required
                  placeholder="sullivan@acme-corp.com"
                  className="form-field-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-field-group">
                <label className="form-field-label" htmlFor="client-scope">
                  Capability or Plan
                </label>
                <select
                  id="client-scope"
                  className="form-field-select"
                  value={formData.scope}
                  onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                >
                  <option value="Software Design">Software Design</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile App Development">Mobile App Development</option>
                  <option value="Data Security">Data Security</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Business Strategy">Business Strategy</option>
                  <option value="Architecture Sprint">Architecture Sprint ($12,500)</option>
                  <option value="Dedicated Studio Retainer">Dedicated Studio Retainer ($24,000/mo)</option>
                  <option value="General Consultation">General Studio Consultation</option>
                </select>
              </div>

              <div className="form-field-group">
                <label className="form-field-label" htmlFor="client-timeline">
                  Project Kickoff
                </label>
                <select
                  id="client-timeline"
                  className="form-field-select"
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                >
                  <option value="Within 14 Days">Within 14 Days</option>
                  <option value="Within 30 Days">Within 30 Days</option>
                  <option value="Next Quarter">Next Quarter</option>
                  <option value="Exploratory / Budget Phase">Exploratory / Budget Phase</option>
                </select>
              </div>

              <div className="form-field-group">
                <label className="form-field-label" htmlFor="client-notes">
                  Brief Overview of Requirements
                </label>
                <textarea
                  id="client-notes"
                  rows={3}
                  placeholder="Outline your systems, expected scale, or primary timeline..."
                  className="form-field-textarea"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              <button type="submit" className="skeuo-btn skeuo-btn-primary" style={{ marginTop: '6px' }}>
                <span>Transmit Project Brief</span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
