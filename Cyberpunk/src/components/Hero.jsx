import { useState, useEffect } from 'react'

export function Hero({ onOpenModal }) {
  const [latency, setLatency] = useState(12)

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(prev => (prev === 12 ? 11 : 12))
    }, 2400)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero-section">
      <div className="cyber-container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-pill-tag">
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#FF007F' }} />
              <span>SYS_VER 4.8 // PROTOCOL ACTIVE</span>
            </div>

            <h1 className="hero-headline">
              Next-gen cybernetic systems for <em>high-stakes</em> digital frontiers.
            </h1>

            <p className="hero-sentence">
              KROM//LABS engineers resilient distributed architectures, neural interfaces, and offensive security frameworks designed for post-silicon scale.
            </p>

            <div className="hero-cta-row">
              <button
                type="button"
                className="cyber-btn cyber-btn-cyan"
                onClick={() => onOpenModal('Direct Uplink')}
              >
                <span>Initialize Uplink</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>

              <a href="#services" className="cyber-btn cyber-btn-ghost">
                <span>Inspect Capabilities</span>
              </a>
            </div>
          </div>

          <div className="hero-visual-terminal" aria-hidden="true">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="t-dot t-dot-red" />
                <span className="t-dot t-dot-yellow" />
                <span className="t-dot t-dot-cyan" />
              </div>
              <span>NODE_CONSOLE // SHANGHAI_01</span>
              <span>PORT: 8088</span>
            </div>

            <div className="terminal-screen">
              <div className="terminal-log-line">
                <span className="t-prefix">&gt;</span>
                <span>INITIALIZING NEURAL_CORE: <span className="t-val">ONLINE</span></span>
              </div>
              <div className="terminal-log-line">
                <span className="t-prefix">&gt;</span>
                <span>QUANTUM_VAULT_ENCRYPTION: <span className="t-status-live">SHA-512 SECURE</span></span>
              </div>
              <div className="terminal-log-line">
                <span className="t-prefix">&gt;</span>
                <span>GLOBAL_SYNCH_PING: <span className="t-val">{latency}ms [OPTIMAL]</span></span>
              </div>
              <div className="terminal-log-line">
                <span className="t-prefix">&gt;</span>
                <span>ZERO_DAY_DEFENSE_MESH: <span className="t-status-live">ENFORCED</span></span>
              </div>

              <div className="terminal-hud-graphic">
                <svg width="100%" height="80" viewBox="0 0 320 80" fill="none">
                  <line x1="10" y1="70" x2="310" y2="70" stroke="#232035" strokeWidth="1" />
                  <line x1="10" y1="40" x2="310" y2="40" stroke="#232035" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="10" y1="10" x2="310" y2="10" stroke="#232035" strokeWidth="1" strokeDasharray="4 4" />
                  <polyline points="10,65 50,45 90,55 140,25 180,35 230,15 280,30 310,12" stroke="#00F0FF" strokeWidth="2" />
                  <polyline points="10,68 60,62 110,65 170,48 220,52 270,38 310,28" stroke="#FF007F" strokeWidth="1.5" strokeDasharray="2 2" />
                  <circle cx="230" cy="15" r="3" fill="#00F0FF" />
                  <circle cx="310" cy="12" r="3.5" fill="#FFE600" />
                </svg>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                <span>BANDWIDTH: 100 Gbps</span>
                <span>STATUS: NOMINAL</span>
                <span>INTEGRITY: 99.999%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
