export function Services({ onSelectService }) {
  const services = [
    {
      id: 'cybernetic-systems',
      code: 'SYS // 01',
      title: 'Cybernetic Systems & Architecture',
      description: 'Distributed fault-tolerant backbones, low-latency gRPC micro-meshes, and event stream processors engineered for mission-critical loads.',
      bullets: [
        'High-Throughput Event Streaming (Kafka / NATS)',
        'Zero-Downtime Multi-Region Mesh Fabric',
        'Sub-Millisecond Memory-Mapped DB Engines',
      ],
      badge: 'Distributed Mesh',
      color: 'cyan',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="8" height="8" rx="1" />
          <rect x="14" y="2" width="8" height="8" rx="1" />
          <rect x="14" y="14" width="8" height="8" rx="1" />
          <rect x="2" y="14" width="8" height="8" rx="1" />
          <path d="M6 10V14" />
          <path d="M18 10V14" />
          <path d="M10 6H14" />
          <path d="M10 18H14" />
        </svg>
      ),
    },
    {
      id: 'neural-ui',
      code: 'UI // 02',
      title: 'Neural UI & Product Engineering',
      description: 'Sub-millisecond interactive interfaces, telemetry dashboards, and multi-platform native client software with tactical tactile ergonomics.',
      bullets: [
        'WebGL & Canvas Hardware-Accelerated Views',
        'Offline-First Local Synchronization Engines',
        'Ergonomic High-Density Telemetry Layouts',
      ],
      badge: 'Real-Time HUD',
      color: 'pink',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 19 8.5 19 15.5 12 22 5 15.5 5 8.5" />
          <line x1="12" y1="2" x2="12" y2="22" />
          <line x1="5" y1="8.5" x2="19" y2="15.5" />
          <line x1="5" y1="15.5" x2="19" y2="8.5" />
        </svg>
      ),
    },
    {
      id: 'offensive-security',
      code: 'SEC // 03',
      title: 'Offensive Security & Hardening',
      description: 'Continuous adversarial penetration testing, zero-trust cryptographic policies, automated key vaults, and binary vulnerability isolation.',
      bullets: [
        'Automated Adversarial Simulation Suites',
        'Hardware-Enforced Multi-Party KMS Modules',
        'Quantum-Resistant Lattice Encryption Stacks',
      ],
      badge: 'Zero-Trust Sec',
      color: 'yellow',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <circle cx="12" cy="11" r="3" />
          <path d="M12 14V17" />
        </svg>
      ),
    },
  ]

  return (
    <section id="services" className="services-section">
      <div className="cyber-container">
        <div className="section-hud-header">
          <div className="section-hud-label">
            <span>[ + ]</span>
            <span>CAPABILITY MODULES // 2049</span>
          </div>
          <h2 className="section-hud-title">
            Engineered for <span>uncompromised performance</span>
          </h2>
          <p className="section-hud-desc">
            Direct collaboration with elite software systems architects, security researchers, and interaction designers.
          </p>
        </div>

        <div className="services-grid-triplet">
          {services.map((item) => (
            <article key={item.id} className="cyber-card service-card">
              <div className="service-card-top">
                <span className="service-index-code">{item.code}</span>
                <span className={`cyber-badge ${item.color === 'pink' ? 'cyber-badge-pink' : item.color === 'yellow' ? 'cyber-badge-yellow' : ''}`}>
                  {item.badge}
                </span>
              </div>

              <div className="service-icon-wrap" aria-hidden="true">
                {item.icon}
              </div>

              <h3 className="service-title">{item.title}</h3>
              <p className="service-desc">{item.description}</p>

              <ul className="service-feature-bullets">
                {item.bullets.map((b, i) => (
                  <li key={i} className="service-bullet-item">
                    <span className="bullet-accent">&gt;</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div>
                <button
                  type="button"
                  className="service-action-trigger"
                  onClick={() => onSelectService(item.title)}
                >
                  <span>Engage Module</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
