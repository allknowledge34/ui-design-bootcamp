export function Footer() {
  const directoryLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Archival Work', href: '#work' },
    { label: 'Philosophy', href: '#about' },
    { label: 'Highlights', href: '#highlights' },
    { label: 'Contact', href: '#contact' },
  ]

  const disciplines = [
    { label: 'Software Architecture', href: '#services' },
    { label: 'Interface Engineering', href: '#services' },
    { label: 'Design Systems', href: '#services' },
    { label: 'Art Direction', href: '#services' },
    { label: 'Editorial Collateral', href: '#services' },
  ]

  return (
    <footer className="footer">
      <div className="editorial-container">
        <div className="footer-colophon-grid">
          <div>
            <div className="brand-block" style={{ marginBottom: '16px' }}>
              <span className="brand-title" style={{ fontSize: '1.15rem' }}>VERVE ATELIER</span>
              <span className="brand-tag">VOL. 24</span>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-body)', lineHeight: '1.6', maxWidth: '300px' }}>
              An independent studio dedicated to the intersection of editorial art direction, rigorous software engineering, and typographic craft.
            </p>
          </div>

          <div>
            <div className="footer-col-title">Directory</div>
            <ul className="footer-links-list">
              {directoryLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="footer-anchor">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Capabilities</div>
            <ul className="footer-links-list">
              {disciplines.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="footer-anchor">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Colophon</div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
              Set in Inter and Instrument Serif. Published in San Francisco, California. Distributed worldwide via modern open web standards.
            </p>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div>
            &copy; 2018&ndash;{new Date().getFullYear()} Verve Atelier Studio Inc. All rights reserved.
          </div>
          <div className="editorial-meta-tag">
            ISSUE XXIV &bull; PRINTED DIGITALLY &bull; NO TRACKERS
          </div>
        </div>
      </div>
    </footer>
  )
}
