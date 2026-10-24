import { useState, useEffect } from 'react'

export function UplinkModal({ isOpen, onClose, defaultScope }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    scope: defaultScope || 'Cybernetic Systems & Architecture',
    clearance: 'Commercial Enterprise',
    details: '',
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (defaultScope) {
      setFormData(prev => ({ ...prev, scope: defaultScope }))
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
      <div className="cyber-dialog" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="dialog-close-trigger"
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
            <div style={{ width: '56px', height: '56px', margin: '0 auto 18px', border: '1px solid var(--neon-green)', color: 'var(--neon-green)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 style={{ fontFamily: 'var(--font-hud)', fontSize: '1.4rem', color: '#FFFFFF', marginBottom: '8px', textTransform: 'uppercase' }}>
              Uplink Handshake Established
            </h3>
            <p style={{ fontSize: '0.94rem', color: 'var(--text-main)', lineHeight: '1.6', marginBottom: '24px' }}>
              Transmission secured for {formData.name || 'operator'}. A senior systems architect will establish an encrypted communication channel at {formData.email}.
            </p>
            <button
              type="button"
              className="cyber-btn cyber-btn-cyan"
              onClick={handleReset}
              style={{ width: '100%' }}
            >
              Close Console
            </button>
          </div>
        ) : (
          <>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--neon-pink)', letterSpacing: '0.08em', marginBottom: '6px' }}>
              [ ENCRYPTED TRANSMISSION PROTOCOL ]
            </div>
            <h3 style={{ fontFamily: 'var(--font-hud)', fontSize: '1.5rem', color: '#FFFFFF', textTransform: 'uppercase', marginBottom: '8px' }}>
              Initialize Engineering Uplink
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '22px' }}>
              Specify project parameters to connect directly with lead systems engineers.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label htmlFor="modal-name" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color: 'var(--neon-cyan)', textTransform: 'uppercase' }}>
                  Operator Name
                </label>
                <input
                  id="modal-name"
                  type="text"
                  required
                  placeholder="e.g. Vance Marlowe"
                  className="cyber-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label htmlFor="modal-email" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color: 'var(--neon-cyan)', textTransform: 'uppercase' }}>
                  Encrypted Work Endpoint (Email)
                </label>
                <input
                  id="modal-email"
                  type="email"
                  required
                  placeholder="vance@neural-grid.io"
                  className="cyber-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label htmlFor="modal-scope" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color: 'var(--neon-cyan)', textTransform: 'uppercase' }}>
                  Capability Module
                </label>
                <select
                  id="modal-scope"
                  className="cyber-input"
                  value={formData.scope}
                  onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                >
                  <option value="Cybernetic Systems & Architecture">Cybernetic Systems & Architecture</option>
                  <option value="Neural UI & Product Engineering">Neural UI & Product Engineering</option>
                  <option value="Offensive Security & Hardening">Offensive Security & Hardening</option>
                  <option value="Spec: NEURA//VAULT HSM">Spec: NEURA//VAULT HSM</option>
                  <option value="Spec: AEON//CORE TRADING ENGINE">Spec: AEON//CORE TRADING ENGINE</option>
                  <option value="Spec: CYBER//GRID SPATIAL MESH">Spec: CYBER//GRID SPATIAL MESH</option>
                  <option value="Uplink Request">General Architecture Inquiry</option>
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label htmlFor="modal-details" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color: 'var(--neon-cyan)', textTransform: 'uppercase' }}>
                  System Scale & Directives
                </label>
                <textarea
                  id="modal-details"
                  rows={3}
                  placeholder="Briefly state target TPS, security parameters, or system scale..."
                  className="cyber-input"
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                />
              </div>

              <button type="submit" className="cyber-btn cyber-btn-cyan" style={{ marginTop: '8px' }}>
                <span>Transmit Secure Packet</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
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
