export function Footer() {
  const collectionLinks = [
    { label: 'Horological Chronometers', href: '#collections' },
    { label: 'Victorian Fine Furniture', href: '#collections' },
    { label: 'Sterling Silver Services', href: '#collections' },
    { label: 'Porcelain & Objets d’Art', href: '#collections' },
    { label: 'Rare Estate Jewellery', href: '#collections' },
  ]

  const houseLinks = [
    { label: 'The Heritage Manifesto', href: '#story' },
    { label: 'Provenance Verification', href: '#story' },
    { label: 'Bespoke Private Curation', href: '#detail' },
    { label: 'Salons & Private Showings', href: '#inquire' },
    { label: 'Estate Advisory', href: '#inquire' },
  ]

  return (
    <footer className="footer">
      <div className="victorian-container">
        <div className="footer-grid-layout">
          <div>
            <div className="footer-col-title" style={{ fontSize: '1.1rem', color: '#E5CCA2' }}>
              ROYAL HERITAGE
            </div>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.08rem', color: '#D6C8BE', lineHeight: '1.6', maxWidth: '300px' }}>
              Purveyors of authenticated Victorian heirlooms, fine antiquities, and rare collectibles. Established MDCCCLXXXVII in the Parish of St. James&apos;s, London.
            </p>
          </div>

          <div>
            <div className="footer-col-title">Collections</div>
            <ul className="footer-list">
              {collectionLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="footer-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer-col-title">The Atelier</div>
            <ul className="footer-list">
              {houseLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="footer-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer-col-title">London Salons</div>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.05rem', color: '#D6C8BE', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div>24 King Street, St. James&apos;s</div>
              <div>London, SW1A 1AA, United Kingdom</div>
              <div>Tel: +44 (0) 20 7946 0928</div>
              <div>Email: curatorial@royal-heritage.co.uk</div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div>
            &copy; MDCCCLXXXVII&ndash;{new Date().getFullYear()} ROYAL HERITAGE LTD. ALL RIGHTS RESERVED.
          </div>
          <div>
            BY APPOINTMENT TO DISCRIMINATING PATRONS &bull; RESTORATION ETHICS STRICTLY ENFORCED
          </div>
        </div>
      </div>
    </footer>
  )
}
