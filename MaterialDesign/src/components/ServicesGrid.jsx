export function ServicesGrid() {
  const services = [
    {
      title: 'Software Design',
      desc: 'We provide modern UI/UX design systems, interactive prototypes, and scalable visual components for digital products.',
      illustration: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="6" y="10" width="36" height="24" rx="4" fill="var(--md-purple-subtle)" stroke="var(--md-purple)" strokeWidth="2.5" />
          <path d="M2 38h44" stroke="var(--md-purple)" strokeWidth="3" strokeLinecap="round" />
          <rect x="14" y="16" width="10" height="10" rx="2" fill="var(--md-purple)" />
          <circle cx="31" cy="21" r="4" fill="#ff4d8d" />
        </svg>
      )
    },
    {
      title: 'Data Security',
      desc: 'We implement zero-trust architecture, automated vulnerability scanning, and strict data encryption for critical systems.',
      illustration: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M24 6L8 12v12c0 10 7 16 16 18 9-2 16-8 16-18V12L24 6z" fill="var(--md-purple-subtle)" stroke="var(--md-purple)" strokeWidth="2.5" strokeLinejoin="round" />
          <rect x="19" y="21" width="10" height="8" rx="2" fill="var(--md-purple)" />
          <path d="M21 21v-3a3 3 0 0 1 6 0v3" stroke="#ff4d8d" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: 'App Integration',
      desc: 'We build high-performance mobile apps for iOS and Android with seamless cloud API integrations and real-time syncing.',
      illustration: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="13" y="6" width="22" height="36" rx="4" fill="var(--md-purple-subtle)" stroke="var(--md-purple)" strokeWidth="2.5" />
          <line x1="21" y1="36" x2="27" y2="36" stroke="var(--md-purple)" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="24" cy="18" r="5" fill="#ff4d8d" />
          <path d="M20 28h8" stroke="var(--md-purple)" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: 'Social Marketing',
      desc: 'We engineer data-informed growth strategies, conversion optimization funnels, and marketing analytics infrastructure.',
      illustration: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="16" fill="var(--md-purple-subtle)" stroke="var(--md-purple)" strokeWidth="2.5" />
          <path d="M16 28l6-6 4 4 6-8" stroke="#ff4d8d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="32" cy="18" r="2" fill="#ff4d8d" />
        </svg>
      )
    },
    {
      title: 'Development',
      desc: 'We develop robust enterprise platforms using React, Node.js, and cloud-native microservices engineered for high throughput.',
      illustration: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="6" y="8" width="36" height="32" rx="4" fill="var(--md-surface)" stroke="var(--md-purple)" strokeWidth="2.5" />
          <path d="M15 20l-4 4 4 4" stroke="#ff4d8d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M33 20l4 4-4 4" stroke="#ff4d8d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="26" y1="18" x2="22" y2="30" stroke="var(--md-purple)" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: 'Business Strategy',
      desc: 'We evaluate technical feasibility, architect product roadmaps, and align technology investments with business objectives.',
      illustration: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="17" fill="var(--md-purple-subtle)" stroke="var(--md-purple)" strokeWidth="2.5" />
          <circle cx="24" cy="24" r="10" stroke="#ff4d8d" strokeWidth="2.5" />
          <circle cx="24" cy="24" r="4" fill="var(--md-purple)" />
          <path d="M34 14l-7 7" stroke="#ff4d8d" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      )
    }
  ]

  return (
    <section id="services" className="services-section">
      <div className="md-container">
        <div className="section-head-center">
          <span className="section-eyebrow">SERVICES</span>
          <h2 className="section-title">
            Feel The Power Of Technology &amp; Software Service
          </h2>
        </div>

        <div className="services-cards-grid">
          {services.map((item, idx) => (
            <div key={idx} className="service-card">
              <div className="service-illustration-wrap">
                {item.illustration}
              </div>
              <h3 className="service-card-title">{item.title}</h3>
              <p className="service-card-desc">{item.desc}</p>
              <a href="#pricing" className="service-round-arrow-btn" aria-label={`View details for ${item.title}`}>
                <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
