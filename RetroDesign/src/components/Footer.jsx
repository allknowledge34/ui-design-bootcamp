import { useState } from 'react'

export function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState({ type: '', message: '' })

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setStatus({ type: 'error', message: 'Please provide a valid work email address.' })
      return
    }
    setStatus({
      type: 'success',
      message: 'Thank you. You are subscribed to Northstar Architecture Dispatches.',
    })
    setEmail('')
  }

  const serviceLinks = [
    { label: 'Software Architecture', href: '#services' },
    { label: 'Infrastructure Hardening', href: '#services' },
    { label: 'Mobile Engineering', href: '#services' },
    { label: 'Cloud Microservices', href: '#services' },
    { label: 'Core Web Vitals Audit', href: '#services' },
    { label: 'Technical Due Diligence', href: '#services' },
  ]

  const studioLinks = [
    { label: 'Studio Philosophy', href: '#about' },
    { label: 'Reliability Metrics', href: '#metrics' },
    { label: 'Retainer Pricing', href: '#pricing' },
    { label: 'Architecture Case Studies', href: '#services' },
    { label: 'Open Source Tooling', href: '#services' },
    { label: 'Careers (Senior Staff)', href: '#about' },
  ]

  return (
    <footer id="about" className="footer">
      <div className="retro-container">
        <div className="footer-grid">
          <div className="footer-col-brand">
            <a href="#" className="brand-link">
              <div className="brand-emblem" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8Z" fill="currentColor" />
                </svg>
              </div>
              <div className="brand-title-group">
                <span className="brand-name">Northstar</span>
                <span className="brand-sub">Software Studio</span>
              </div>
            </a>

            <p>
              An independent software design & systems engineering studio crafting resilient digital infrastructure, native apps, and enterprise platforms that endure.
            </p>

            <div className="footer-coords">
              <span>Studio: 420 Montgomery St, Suite 800</span>
              <span>San Francisco, CA 94104</span>
              <span>Direct: +1 (415) 890-4812</span>
              <span>Inquiries: inquiries@northstar-digital.studio</span>
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">Core Services</h4>
            <ul className="footer-link-list">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="footer-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Studio & Culture</h4>
            <ul className="footer-link-list">
              {studioLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="footer-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Dispatches Newsletter</h4>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: '1.5' }}>
              Quarterly essays on distributed systems, software longevity, and fault-tolerant software engineering. Zero promotional spam.
            </p>

            <form onSubmit={handleSubscribe} className="newsletter-form">
              <div className="newsletter-input-wrap">
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="engineer@company.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (status.type) setStatus({ type: '', message: '' })
                  }}
                  aria-label="Email address for quarterly newsletter"
                />
                <button type="submit" className="retro-btn retro-btn-primary">
                  Subscribe
                </button>
              </div>

              {status.message && (
                <div className={`newsletter-feedback ${status.type}`}>
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; 1984&ndash;{new Date().getFullYear()} Northstar Digital Studio Inc. All rights reserved. Registered under California Corporation #C3819201.
          </div>

          <div className="footer-status-pill">
            <span className="status-dot" aria-hidden="true" />
            <span>Systems Status: 100% Operational</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
