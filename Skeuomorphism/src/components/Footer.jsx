import { useState } from 'react'

export function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState({ type: '', text: '' })

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setStatus({ type: 'error', text: 'Please enter a valid work email address.' })
      return
    }
    setStatus({
      type: 'success',
      text: 'Subscription confirmed. You will receive our quarterly engineering dispatches.',
    })
    setEmail('')
  }

  const services = [
    { label: 'Software Design', href: '#services' },
    { label: 'Web Development', href: '#services' },
    { label: 'Mobile App Development', href: '#services' },
    { label: 'Data Security', href: '#services' },
    { label: 'Digital Marketing', href: '#services' },
    { label: 'Business Strategy', href: '#services' },
  ]

  const studioLinks = [
    { label: 'Engineering Standards', href: '#studio' },
    { label: 'Reliability Metrics', href: '#metrics' },
    { label: 'Retainer Pricing', href: '#pricing' },
    { label: 'Technical Audits', href: '#services' },
    { label: 'Senior Roster', href: '#studio' },
    { label: 'Open Source Tools', href: '#services' },
  ]

  return (
    <footer id="studio" className="footer-area">
      <div className="skeuo-container">
        <div className="footer-quad-grid">
          <div className="footer-bio-col">
            <a href="#" className="brand-wrap">
              <div className="brand-seal-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
                  <path d="M12 4L13.8 9.5L19.5 11.2L14.2 13.5L12 19.5L10.2 13.5L4.5 11.2L10.2 9.5Z" fill="currentColor" />
                </svg>
              </div>
              <div className="brand-text-col">
                <span className="brand-name">Northstar</span>
                <span className="brand-sub">Digital Agency</span>
              </div>
            </a>

            <p>
              An independent software engineering studio crafting resilient web platforms, native mobile applications, and secure cloud infrastructure.
            </p>

            <div className="footer-studio-points">
              <span>Studio: 420 Montgomery Street, Suite 800</span>
              <span>San Francisco, CA 94104</span>
              <span>Direct: +1 (415) 890-4812</span>
              <span>Inquiries: inquiries@northstar-digital.agency</span>
            </div>
          </div>

          <div>
            <h4 className="footer-col-heading">Core Services</h4>
            <ul className="footer-links-column">
              {services.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="footer-nav-anchor">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-col-heading">Studio Practice</h4>
            <ul className="footer-links-column">
              {studioLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="footer-nav-anchor">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-col-heading">Engineering Dispatches</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', marginBottom: '14px', lineHeight: '1.5' }}>
              Quarterly technical essays on resilient system architecture and software craftsmanship.
            </p>

            <form onSubmit={handleSubscribe} className="newsletter-recess-box">
              <div className="newsletter-input-slot">
                <input
                  type="email"
                  className="tactile-input"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (status.type) setStatus({ type: '', text: '' })
                  }}
                  aria-label="Email for engineering newsletter"
                />
                <button type="submit" className="skeuo-btn skeuo-btn-primary">
                  Subscribe
                </button>
              </div>

              {status.text && (
                <div className={`newsletter-alert ${status.type}`}>
                  {status.text}
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="footer-legal-bar">
          <div className="footer-legal-text">
            &copy; 1984&ndash;{new Date().getFullYear()} Northstar Digital Agency Inc. All rights reserved. California Registration #C3819201.
          </div>

          <div className="footer-led-indicator">
            <span className="led-bulb" aria-hidden="true" />
            <span>Systems Status: 100% Operational</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
