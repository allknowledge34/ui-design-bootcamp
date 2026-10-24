export function Footer() {
  const storeLinks = [
    { label: 'Hoodies & Sweats', href: '#collection' },
    { label: 'Graphic Tees', href: '#collection' },
    { label: 'Outerwear', href: '#collection' },
    { label: 'Headwear & Caps', href: '#collection' },
    { label: 'Archived Drops', href: '#collection' },
  ]

  const brandLinks = [
    { label: 'The Pop Manifesto', href: '#statement' },
    { label: 'Screen Print Process', href: '#statement' },
    { label: 'Size & Fit Guide', href: '#collection' },
    { label: 'Drop Calendar', href: '#drops' },
    { label: 'VIP Club', href: '#vip' },
  ]

  return (
    <footer id="contact" className="footer">
      <div className="pop-container">
        <div className="footer-inner-grid">
          <div>
            <div className="footer-brand-title">POP STORE</div>
            <p className="footer-bio-text">
              Independent streetwear studio obsessed with primary colors, heavy Ben-Day halftone screens, and raw attitude. Designed in Tokyo &bull; Screen printed worldwide.
            </p>
          </div>

          <div>
            <div className="footer-col-head">STORE COLLECTION</div>
            <ul className="footer-list">
              {storeLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="footer-link-item">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer-col-head">CULTURE &amp; INFO</div>
            <ul className="footer-list">
              {brandLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="footer-link-item">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer-col-head">DISPATCH HEADQUARTERS</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem', color: '#DDDDDD' }}>
              <div><strong>STUDIO:</strong> Shibuya-ku, Tokyo 150-0001</div>
              <div><strong>DROPS:</strong> Every Friday @ 12:00 PM EST</div>
              <div><strong>HELP:</strong> help@popstore-streetwear.com</div>
              <div style={{ marginTop: '8px' }}>
                <span className="pop-tag-pill" style={{ backgroundColor: '#FFE800', color: '#000' }}>
                  100% RAW PIGMENT
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-row">
          <div>
            &copy; {new Date().getFullYear()} POP STORE STREETWEAR CO. ALL RIGHTS RESERVED.
          </div>
          <div>
            BUILT FOR THOSE WHO WEAR SCREAMING COLOR.
          </div>
        </div>
      </div>
    </footer>
  )
}
