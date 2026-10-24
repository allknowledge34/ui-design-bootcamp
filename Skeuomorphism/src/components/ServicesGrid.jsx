export function ServicesGrid({ onSelectService }) {
  const services = [
    {
      id: 'software-design',
      num: '01',
      title: 'Software Design',
      description: 'Tactile interface design systems, ergonomic interaction workflows, and comprehensive design specifications engineered for human usability.',
      tag: 'Interface Systems',
      illustration: (
        <svg viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="22" y="10" width="76" height="50" rx="3" fill="#EDE4D8" stroke="#B8A892" strokeWidth="1.5" />
          <path d="M22 22H98" stroke="#D3C5B2" strokeWidth="1" />
          <path d="M22 34H98" stroke="#D3C5B2" strokeWidth="1" strokeDasharray="2 2" />
          <path d="M22 46H98" stroke="#D3C5B2" strokeWidth="1" strokeDasharray="2 2" />
          <path d="M40 10V60" stroke="#D3C5B2" strokeWidth="1" />
          <path d="M60 10V60" stroke="#D3C5B2" strokeWidth="1" strokeDasharray="2 2" />
          <path d="M80 10V60" stroke="#D3C5B2" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="60" cy="35" r="14" stroke="#9E311A" strokeWidth="1.5" />
          <path d="M60 16L60 35L70 42" stroke="#C29037" strokeWidth="2" strokeLinecap="round" />
          <circle cx="60" cy="35" r="3" fill="#7A5314" />
        </svg>
      ),
    },
    {
      id: 'web-development',
      num: '02',
      title: 'Web Development',
      description: 'Resilient web platforms, fault-tolerant backend services, and clean semantic frontends built on modern standards.',
      tag: 'Full-Stack Web',
      illustration: (
        <svg viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="12" width="80" height="46" rx="4" fill="#2E2A25" stroke="#5E5448" strokeWidth="1.5" />
          <rect x="24" y="16" width="72" height="38" rx="2" fill="#1C1A17" />
          <path d="M30 24L38 32L30 40" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="42" y1="40" x2="52" y2="40" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
          <line x1="30" y1="46" x2="88" y2="46" stroke="#C29037" strokeWidth="1" strokeDasharray="2 3" />
          <circle cx="88" cy="24" r="2.5" fill="#C29037" />
          <circle cx="88" cy="32" r="2.5" fill="#9E311A" />
        </svg>
      ),
    },
    {
      id: 'mobile-app-development',
      num: '03',
      title: 'Mobile App Development',
      description: 'Tactile native applications for iOS and Android with fluid gesture choreography, local-first storage, and offline reliability.',
      tag: 'Native Mobile',
      illustration: (
        <svg viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="42" y="8" width="36" height="54" rx="6" fill="#FBF8F2" stroke="#8A7A68" strokeWidth="1.5" />
          <rect x="46" y="14" width="28" height="40" rx="2" fill="#E8DEC4" fillOpacity="0.4" stroke="#C2B29E" strokeWidth="1" />
          <line x1="54" y1="11" x2="66" y2="11" stroke="#8A7A68" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="50" y="20" width="20" height="12" rx="2" fill="#9E311A" fillOpacity="0.8" />
          <line x1="50" y1="36" x2="70" y2="36" stroke="#4B3D2E" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="50" y1="42" x2="64" y2="42" stroke="#7A6854" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="60" cy="57" r="2" fill="#8A7A68" />
        </svg>
      ),
    },
    {
      id: 'data-security',
      num: '04',
      title: 'Data Security',
      description: 'Zero-trust infrastructure hardening, automated encryption key management, and continuous penetration auditing.',
      tag: 'Zero-Trust Sec',
      illustration: (
        <svg viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="35" y="24" width="50" height="36" rx="4" fill="#D8CFBF" stroke="#6E5F4E" strokeWidth="1.5" />
          <path d="M48 24V18C48 11.37 53.37 6 60 6C66.63 6 72 11.37 72 18V24" stroke="#C29037" strokeWidth="3" strokeLinecap="round" />
          <circle cx="60" cy="40" r="10" fill="#2E2822" stroke="#9E8D79" strokeWidth="1.5" />
          <circle cx="60" cy="40" r="4" fill="#EBD6A7" />
          <path d="M60 44V49" stroke="#EBD6A7" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 'digital-marketing',
      num: '05',
      title: 'Digital Marketing',
      description: 'Algorithmic performance optimization, rigorous behavioral event tracking, and high-conversion landing funnel architecture.',
      tag: 'Conversion Eng',
      illustration: (
        <svg viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 42L48 42L72 54V16L48 28L30 28Z" fill="#C29037" stroke="#7A5314" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M72 26C78 28 82 32 82 35C82 38 78 42 72 44" stroke="#9E311A" strokeWidth="2" strokeLinecap="round" />
          <path d="M84 20C92 24 96 30 96 35C96 40 92 46 84 50" stroke="#9E311A" strokeWidth="2" strokeLinecap="round" />
          <rect x="42" y="42" width="6" height="16" rx="1" fill="#7A5314" />
        </svg>
      ),
    },
    {
      id: 'business-strategy',
      num: '06',
      title: 'Business Strategy',
      description: 'Fractional technology leadership, architectural feasibility reviews, and technical due diligence for growth-stage decisions.',
      tag: 'Advisory Craft',
      illustration: (
        <svg viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="35" r="24" fill="#EDE4D8" stroke="#8A7A68" strokeWidth="1.5" />
          <circle cx="60" cy="35" r="19" stroke="#C29037" strokeWidth="1" strokeDasharray="3 2" />
          <polygon points="60 16 64 32 80 35 64 38 60 54 56 38 40 35 56 32" fill="#9E311A" />
          <circle cx="60" cy="35" r="3" fill="#FAF6EE" />
        </svg>
      ),
    },
  ]

  return (
    <section id="services" className="services-area">
      <div className="skeuo-container">
        <div className="section-header">
          <span className="section-label">Capabilities</span>
          <h2 className="section-title">Resilient software services built to endure</h2>
          <p className="section-desc">
            Disciplined product execution led directly by senior practitioners with deep architectural rigor across every layer.
          </p>
        </div>

        <div className="services-grid-layout">
          {services.map((service) => (
            <article key={service.id} className="skeuo-card service-item-card">
              <div className="service-illustration-box" aria-hidden="true">
                {service.illustration}
              </div>

              <div className="service-card-meta">
                <span className="service-card-num">Service {service.num}</span>
                <span className="skeuo-badge skeuo-badge-brass">
                  {service.tag}
                </span>
              </div>

              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.description}</p>

              <div className="service-card-action">
                <button
                  type="button"
                  className="service-action-btn"
                  onClick={() => onSelectService(service.title)}
                >
                  <span>Request Scope</span>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
                <span className="skeuo-rivet" aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
