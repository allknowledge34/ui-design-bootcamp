import { useState } from 'react'

export function ContactCTA({ onOpenModal }) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleQuickSubmit = (e) => {
    e.preventDefault()
    if (!email || !email.includes('@')) return
    setSubmitted(true)
  }

  return (
    <section id="contact" className="cta-uplink-section">
      <div className="cyber-container">
        <div className="cta-box-card">
          <div className="cta-info-left">
            <div className="section-hud-label" style={{ color: 'var(--neon-pink)' }}>
              <span>[ UPLINK // TERMINAL READY ]</span>
            </div>
            <h2 className="section-hud-title" style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.8rem)', marginBottom: '16px' }}>
              Initialize mission-critical <span>collaboration</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-main)', lineHeight: '1.65', marginBottom: '28px' }}>
              Whether you are architecting a high-throughput financial mesh, hardening enterprise zero-trust infrastructure, or crafting next-generation neural interfaces, our senior engineers deploy immediately.
            </p>

            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              <div>
                <span style={{ color: 'var(--neon-cyan)' }}>GPG KEY ID:</span> 0x82F49021A
              </div>
              <div>
                <span style={{ color: 'var(--neon-cyan)' }}>SIGNAL ENCRYPTED:</span> +1 (415) 890-4812
              </div>
              <div>
                <span style={{ color: 'var(--neon-cyan)' }}>UPLINK:</span> ops@krom-labs.io
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div style={{ padding: '24px', border: '1px solid var(--neon-cyan)', backgroundColor: 'var(--bg-deep)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--neon-green)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', marginBottom: '8px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#00FF66' }} />
                  <span>TRANSMISSION ACKNOWLEDGED</span>
                </div>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-main)', lineHeight: '1.5', marginBottom: '16px' }}>
                  A principal systems engineer will initiate handshaking via {email} within 4 hours.
                </p>
                <button
                  type="button"
                  className="cyber-btn cyber-btn-ghost"
                  onClick={() => {
                    setSubmitted(false)
                    setEmail('')
                  }}
                  style={{ width: '100%' }}
                >
                  Transmit Another Ping
                </button>
              </div>
            ) : (
              <form onSubmit={handleQuickSubmit} className="cta-console-form">
                <label htmlFor="quick-email" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--neon-cyan)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Authorized Transmit Channel (Work Email)
                </label>
                <input
                  id="quick-email"
                  type="email"
                  required
                  className="cyber-input"
                  placeholder="architect@enterprise.io"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <button type="submit" className="cyber-btn cyber-btn-cyan" style={{ width: '100%' }}>
                  <span>Transmit Direct Ping</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>

                <button
                  type="button"
                  className="cyber-btn cyber-btn-ghost"
                  onClick={() => onOpenModal('Detailed Scope Review')}
                  style={{ width: '100%' }}
                >
                  Open Full Scope Console
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
