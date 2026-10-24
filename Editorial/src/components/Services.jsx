export function Services({ onSelectService }) {
  const services = [
    {
      num: 'I',
      title: 'Digital Systems & Software Engineering',
      description: 'We construct fault-tolerant backbones, decoupled service meshes, and custom API architectures engineered for high transaction integrity and unyielding operational stability.',
      specs: ['Decoupled Architectures', 'Event Meshes', 'Distributed APIs', 'Automated CI/CD'],
    },
    {
      num: 'II',
      title: 'Art-Directed Web Platforms & Interfaces',
      description: 'We design tactile, typography-led digital interfaces that unite editorial sophistication with sub-second performance, accessible semantic HTML, and fluid interactive choreography.',
      specs: ['Editorial Typography', 'Custom Design Tokens', 'Fluid Layouts', 'Hardware Acceleration'],
    },
    {
      num: 'III',
      title: 'Brand Identity & Creative Direction',
      description: 'We develop cohesive brand systems, typographic guidelines, and bespoke art direction that imbue digital products with distinct cultural authority and enduring resonance.',
      specs: ['Typographic Guidelines', 'Design Systems', 'Art Direction', 'Editorial Print Collateral'],
    },
  ]

  return (
    <section id="services" className="services-section">
      <div className="editorial-container">
        <div className="editorial-section-header">
          <span className="editorial-section-num">01 // SERVICES</span>
          <h2 className="editorial-section-title">Disciplines &amp; Capabilities</h2>
          <span className="editorial-meta-tag">THREE FOCUSED TRACKS</span>
        </div>

        <div className="services-broadsheet-list">
          {services.map((item) => (
            <div key={item.num} className="service-row">
              <span className="service-roman-num">{item.num}</span>

              <div className="service-title-block">
                <h3>{item.title}</h3>
              </div>

              <div className="service-narrative">
                <p>{item.description}</p>
                <div className="service-specs-pills">
                  {item.specs.map((spec) => (
                    <span key={spec} className="service-spec-pill">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              <div className="service-action-col">
                <button
                  type="button"
                  className="service-inquire-link"
                  onClick={() => onSelectService(item.title)}
                >
                  <span>Request Scope</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
