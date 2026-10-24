export function FeaturedCollection({ onAddToCart }) {
  const categories = [
    {
      id: 'ceramics-01',
      num: 'CATEGORY 01',
      title: 'Handcrafted Ceramics & Terracotta Earthenware',
      description: 'Wheel-thrown stoneware vessels, fluted vases, and textured planters finished with natural iron oxides and matte sand glazes.',
      price: 85,
      itemLabel: 'Artisan Terracotta Amphora',
      graphic: (
        <svg width="100%" height="100%" viewBox="0 0 200 160" fill="none">
          <ellipse cx="100" cy="115" rx="42" ry="32" fill="#C86D51" />
          <path d="M88 65H112V90H88V65Z" fill="#C86D51" />
          <path d="M75 60H125" stroke="#9E472A" strokeWidth="3" strokeLinecap="round" />
          <path d="M65 95C55 95 50 80 65 75" stroke="#9E472A" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M135 95C145 95 150 80 135 75" stroke="#9E472A" strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="100" cy="115" r="8" fill="#D99B4B" />
        </svg>
      ),
    },
    {
      id: 'textiles-02',
      num: 'CATEGORY 02',
      title: 'Woven Natural Fibers & Wool Textiles',
      description: 'Hand-loomed organic cotton throws, tactile raw linen pillowcases, and knotted jute floor rugs crafted on heritage village looms.',
      price: 110,
      itemLabel: 'Raw Linen Fringe Blanket',
      graphic: (
        <svg width="100%" height="100%" viewBox="0 0 200 160" fill="none">
          <rect x="50" y="45" width="100" height="85" rx="8" fill="#E7DBCA" stroke="#9E472A" strokeWidth="1.5" />
          <line x1="65" y1="45" x2="65" y2="130" stroke="#C86D51" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="85" y1="45" x2="85" y2="130" stroke="#687050" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="105" y1="45" x2="105" y2="130" stroke="#D99B4B" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="125" y1="45" x2="125" y2="130" stroke="#C86D51" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="50" y1="130" x2="150" y2="130" stroke="#9E472A" strokeWidth="3" />
          <line x1="55" y1="130" x2="55" y2="145" stroke="#9E472A" strokeWidth="2" />
          <line x1="75" y1="130" x2="75" y2="145" stroke="#9E472A" strokeWidth="2" />
          <line x1="95" y1="130" x2="95" y2="145" stroke="#9E472A" strokeWidth="2" />
          <line x1="115" y1="130" x2="115" y2="145" stroke="#9E472A" strokeWidth="2" />
          <line x1="135" y1="130" x2="135" y2="145" stroke="#9E472A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      id: 'botanicals-03',
      num: 'CATEGORY 03',
      title: 'Botanical Accents & Dried Florals',
      description: 'Sun-cured palm fans, foraged pampas bundles, botanical incense sticks, and hand-poured golden beeswax candles.',
      price: 65,
      itemLabel: 'Sun-Cured Desert Botanicals',
      graphic: (
        <svg width="100%" height="100%" viewBox="0 0 200 160" fill="none">
          <ellipse cx="100" cy="135" rx="20" ry="10" fill="#E7DBCA" />
          <line x1="100" y1="135" x2="100" y2="40" stroke="#687050" strokeWidth="2.5" />
          <path d="M100 90C120 80 130 60 130 45C115 50 105 70 100 90Z" fill="#C86D51" />
          <path d="M100 105C80 95 70 75 70 60C85 65 95 85 100 105Z" fill="#687050" />
          <path d="M100 65C115 55 125 35 120 25C110 32 105 48 100 65Z" fill="#D99B4B" />
          <circle cx="100" cy="35" r="4" fill="#9E472A" />
        </svg>
      ),
    },
  ]

  return (
    <section id="collections" className="collection-section">
      <div className="boho-container">
        <div className="section-boho-header">
          <div className="section-botanical-tag">
            <span>✦</span>
            <span>CURATED WARES // ETHICALLY SOURCED</span>
            <span>✦</span>
          </div>
          <h2 className="section-boho-title">Handmade Living Artifacts</h2>
          <p className="section-boho-desc">
            Objects crafted by independent artisan cooperatives using time-honoured techniques, earth-based dyes, and tactile natural materials.
          </p>
        </div>

        <div className="collection-triplet-grid">
          {categories.map((cat) => (
            <article key={cat.id} className="collection-category-card">
              <div className="category-visual-arch" aria-hidden="true">
                {cat.graphic}
              </div>

              <span className="category-number-tag">{cat.num}</span>
              <h3 className="category-card-title">{cat.title}</h3>
              <p className="category-card-desc">{cat.description}</p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid var(--border-soft)' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: '700', color: 'var(--boho-walnut)' }}>
                  ${cat.price}
                </div>

                <button
                  type="button"
                  className="boho-btn boho-btn-terracotta"
                  style={{ padding: '8px 18px', fontSize: '0.84rem' }}
                  onClick={() => onAddToCart({ id: cat.id, title: cat.itemLabel, price: cat.price })}
                >
                  ADD TO BASKET +
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
