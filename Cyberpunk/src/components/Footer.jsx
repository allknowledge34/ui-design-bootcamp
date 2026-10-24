export function Footer() {
  const footerLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Fieldwork', href: '#work' },
    { label: 'Metrics', href: '#about' },
    { label: 'Uplink', href: '#contact' },
    { label: 'PGP Fingerprint', href: '#contact' },
    { label: 'Security Whitepaper', href: '#services' },
  ]

  return (
    <footer className="footer">
      <div className="cyber-container">
        <div className="footer-top">
          <div className="brand-hud">
            <div className="brand-icon-box" aria-hidden="true" style={{ width: '32px', height: '32px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="3" fill="#FF007F" />
              </svg>
            </div>
            <div className="brand-text-block">
              <span className="brand-title" style={{ fontSize: '1.1rem' }}>KROM<em>//</em>LABS</span>
              <span className="brand-sub" style={{ fontSize: '0.6rem' }}>Autonomous Engineering</span>
            </div>
          </div>

          <ul className="footer-nav-list">
            {footerLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="footer-nav-item">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; 2049 KROM LABS INCORPORATED. ALL PROTOCOLS ENFORCED. ZERO VENDOR DEPENDENCY.
          </div>

          <div className="telemetry-status-pill">
            <span className="status-beacon" aria-hidden="true" />
            <span>GLOBAL GRID: ALL NODES SYNCHRONIZED [100%]</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
