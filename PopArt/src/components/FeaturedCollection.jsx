export function FeaturedCollection({ onAddToCart }) {
  const products = [
    {
      id: 'hoodie-01',
      title: 'Comic Blast Heavyweight Hoodie',
      price: 120,
      tag: 'HOT DROP',
      tagColor: '#FF1E27',
      bgClass: 'halftone-yellow-bg',
      graphic: (
        <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none">
          <path d="M50 70L80 40H120L150 70L175 110L150 120L140 100V170H60V100L50 120L25 110L50 70Z" fill="#FFE800" stroke="#000000" strokeWidth="4" />
          <path d="M80 40C80 40 100 65 120 40" stroke="#000000" strokeWidth="4" />
          <rect x="75" y="110" width="50" height="40" fill="#FF007F" stroke="#000000" strokeWidth="3" />
          <text x="100" y="135" fontFamily="Bangers, sans-serif" fontSize="16" fill="#FFFFFF" textAnchor="middle">POW</text>
        </svg>
      ),
    },
    {
      id: 'tee-02',
      title: 'Halftone Graphic Oversized Tee',
      price: 55,
      tag: 'LIMITED 150',
      tagColor: '#00F0FF',
      bgClass: 'halftone-pink-bg',
      graphic: (
        <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none">
          <path d="M40 60L75 35H125L160 60L185 95L155 110L145 90V175H55V90L45 110L15 95L40 60Z" fill="#FFFFFF" stroke="#000000" strokeWidth="4" />
          <path d="M75 35C75 35 100 55 125 35" stroke="#000000" strokeWidth="4" />
          <circle cx="100" cy="115" r="30" fill="#00F0FF" stroke="#000000" strokeWidth="3" />
          <circle cx="100" cy="115" r="16" fill="#FF1E27" stroke="#000000" strokeWidth="2.5" />
          <text x="100" y="120" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="900" fill="#FFFFFF" textAnchor="middle">POP</text>
        </svg>
      ),
    },
    {
      id: 'jacket-03',
      title: 'Pop Dot Canvas Worker Jacket',
      price: 165,
      tag: 'STAFF PICK',
      tagColor: '#FFE800',
      bgClass: 'halftone-cyan-bg',
      graphic: (
        <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none">
          <path d="M45 55L75 30H125L155 55L180 95L150 110L140 85V175H60V85L50 110L20 95L45 55Z" fill="#FF1E27" stroke="#000000" strokeWidth="4" />
          <line x1="100" y1="30" x2="100" y2="175" stroke="#000000" strokeWidth="4" />
          <rect x="68" y="75" width="22" height="26" fill="#FFE800" stroke="#000000" strokeWidth="3" />
          <rect x="110" y="75" width="22" height="26" fill="#FFE800" stroke="#000000" strokeWidth="3" />
          <circle cx="100" cy="90" r="3.5" fill="#FFFFFF" stroke="#000000" strokeWidth="2" />
          <circle cx="100" cy="120" r="3.5" fill="#FFFFFF" stroke="#000000" strokeWidth="2" />
          <circle cx="100" cy="150" r="3.5" fill="#FFFFFF" stroke="#000000" strokeWidth="2" />
        </svg>
      ),
    },
    {
      id: 'cap-04',
      title: 'Electric Cyan Foam Trucker Cap',
      price: 45,
      tag: 'BESTSELLER',
      tagColor: '#FF007F',
      bgClass: 'halftone-yellow-bg',
      graphic: (
        <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none">
          <path d="M40 120C40 75 70 50 100 50C130 50 160 75 160 120H40Z" fill="#00F0FF" stroke="#000000" strokeWidth="4" />
          <ellipse cx="100" cy="120" rx="75" ry="20" fill="#0A22E6" stroke="#000000" strokeWidth="4" />
          <circle cx="100" cy="50" r="5" fill="#FFE800" stroke="#000000" strokeWidth="2.5" />
          <rect x="75" y="80" width="50" height="24" fill="#FFFFFF" stroke="#000000" strokeWidth="3" />
          <text x="100" y="97" fontFamily="Bangers, sans-serif" fontSize="15" fill="#FF1E27" textAnchor="middle">VIBES</text>
        </svg>
      ),
    },
  ]

  return (
    <section id="collection" className="collection-section">
      <div className="pop-container">
        <div className="section-pop-header">
          <span className="section-pop-tag">FRESH HEAT // SERIES 01</span>
          <h2 className="section-pop-title">FEATURED COLLECTION</h2>
          <p className="section-pop-desc">
            Limited batch runs. Once a colorway sells out, the printing plates are destroyed.
          </p>
        </div>

        <div className="product-cards-grid">
          {products.map((item) => (
            <article key={item.id} className="pop-card product-item-card">
              <div className={`product-thumb-frame ${item.bgClass}`} aria-hidden="true">
                <span
                  className="pop-tag-pill product-corner-badge"
                  style={{ backgroundColor: item.tagColor, color: item.tagColor === '#FFE800' || item.tagColor === '#00F0FF' ? '#000' : '#FFF' }}
                >
                  {item.tag}
                </span>
                {item.graphic}
              </div>

              <div className="product-info-wrap">
                <h3 className="product-title">{item.title}</h3>
                <div className="product-price-row">
                  <span className="product-price">${item.price}</span>
                  <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#666' }}>
                    IN STOCK
                  </span>
                </div>

                <button
                  type="button"
                  className="pop-btn pop-btn-yellow"
                  style={{ width: '100%', padding: '10px 14px', fontSize: '0.9rem' }}
                  onClick={() => onAddToCart(item)}
                >
                  ADD TO BAG +
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
