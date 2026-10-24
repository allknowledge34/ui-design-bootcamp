export function Footer() {
  const collectionLinks = [
    { label: 'Terracotta & Ceramics', href: '#collections' },
    { label: 'Woven Linens & Wool', href: '#collections' },
    { label: 'Dried Botanicals', href: '#collections' },
    { label: 'Tableware & Vessels', href: '#collections' },
    { label: 'Artisan Wood Craft', href: '#collections' },
  ]

  const houseLinks = [
    { label: 'Our Ethos & Origin', href: '#story' },
    { label: 'Artisan Cooperatives', href: '#story' },
    { label: 'Living Showcase', href: '#showcase' },
    { label: 'Care & Preservation', href: '#collections' },
    { label: 'Wholesale & Curation', href: '#atelier' },
  ]

  return (
    <footer className="footer">
      <div className="boho-container">
        <div className="footer-quad-grid">
          <div>
            <div className="footer-brand-title">SOULFUL LIVING</div>
            <p style={{ fontSize: '0.94rem', color: '#DCD2C6', lineHeight: '1.65', maxWidth: '300px' }}>
              Handmade home goods and thoughtful lifestyle wares crafted with unhurried patience, organic fibers, and natural earth clays.
            </p>
          </div>

          <div>
            <div className="footer-col-head">Collections</div>
            <ul className="footer-links-list">
              {collectionLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="footer-nav-anchor">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer-col-head">Atelier Studio</div>
            <ul className="footer-links-list">
              {houseLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="footer-nav-anchor">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer-col-head">Studios &amp; Sanctuaries</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.92rem', color: '#DCD2C6' }}>
              <div>Ojai Valley Atelier, California 93023</div>
              <div>Byron Bay Studio, NSW 2481, Australia</div>
              <div>Inquiries: hello@soulful-living.atelier</div>
              <div>Direct: +1 (805) 646-1892</div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div>
            &copy; {new Date().getFullYear()} SOULFUL LIVING CRAFT ATELIER. ALL RIGHTS RESERVED.
          </div>
          <div>
            100% ETHICAL ARTISAN TRADE &bull; EARTH PIGMENTS ONLY &bull; ZERO PLASTIC
          </div>
        </div>
      </div>
    </footer>
  )
}
