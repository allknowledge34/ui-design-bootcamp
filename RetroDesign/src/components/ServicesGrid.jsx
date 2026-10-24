import { useState } from 'react'

export function ServicesGrid({ onSelectService }) {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'core', label: 'Core Engineering' },
    { id: 'security', label: 'Security & Cloud' },
    { id: 'mobile', label: 'Mobile & Apps' },
    { id: 'strategy', label: 'Strategic Advisory' },
  ]

  const services = [
    {
      id: 'software-architecture',
      category: 'core',
      code: 'CAP-01',
      title: 'Software Architecture & Product Engineering',
      description: 'End-to-end full-lifecycle software delivery. We architect decoupled systems, resilient backend APIs, and maintainable web applications engineered for heavy transaction loads.',
      tags: ['TypeScript', 'Distributed Systems', 'Event-Driven', 'Clean Architecture'],
      accent: 'terracotta',
      illustration: (
        <svg viewBox="0 0 140 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="25" y="14" width="90" height="52" rx="4" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeWidth="2" />
          <line x1="25" y1="26" x2="115" y2="26" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="33" cy="20" r="2.5" fill="#D9532F" />
          <circle cx="41" cy="20" r="2.5" fill="#C98218" />
          <circle cx="49" cy="20" r="2.5" fill="#2A6F68" />
          <rect x="35" y="34" width="22" height="12" rx="2" fill="#D9532F" fillOpacity="0.2" stroke="#D9532F" strokeWidth="1.5" />
          <rect x="63" y="34" width="42" height="12" rx="2" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" />
          <rect x="35" y="50" width="70" height="8" rx="2" fill="#2A6F68" fillOpacity="0.25" stroke="#2A6F68" strokeWidth="1.2" />
          <line x1="57" y1="40" x2="63" y2="40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 'data-security',
      category: 'security',
      code: 'CAP-02',
      title: 'Data Security & Infrastructure Hardening',
      description: 'Zero-trust architecture, automated threat isolation, encrypted storage pipelines, and rigorous penetration audits to safeguard your core intellectual property.',
      tags: ['Zero-Trust', 'SOC2 Compliance', 'Automated Pen-Testing', 'Vault KMS'],
      accent: 'teal',
      illustration: (
        <svg viewBox="0 0 140 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M70 12L96 22V42C96 58 70 68 70 68C70 68 44 58 44 42V22L70 12Z" fill="#2A6F68" fillOpacity="0.12" stroke="#2A6F68" strokeWidth="2" strokeLinejoin="round" />
          <circle cx="70" cy="38" r="14" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="70" cy="38" r="6" fill="#D9532F" />
          <path d="M70 44V50" stroke="#D9532F" strokeWidth="2" strokeLinecap="round" />
          <circle cx="70" cy="38" r="10" stroke="#C98218" strokeWidth="1.5" strokeDasharray="3 3" />
        </svg>
      ),
    },
    {
      id: 'mobile-native',
      category: 'mobile',
      code: 'CAP-03',
      title: 'Mobile & Native Application Development',
      description: 'Tactile, responsive mobile client software engineered in native Swift, Kotlin, and React Native with 60fps micro-animations, offline-first sync, and native performance.',
      tags: ['Swift & SwiftUI', 'Kotlin Compose', 'Offline Sync', 'Biometrics'],
      accent: 'mustard',
      illustration: (
        <svg viewBox="0 0 140 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="48" y="10" width="44" height="60" rx="7" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeWidth="2" />
          <line x1="62" y1="16" x2="78" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <rect x="54" y="22" width="32" height="38" rx="3" fill="#C98218" fillOpacity="0.15" stroke="#C98218" strokeWidth="1.5" />
          <line x1="59" y1="30" x2="81" y2="30" stroke="#D9532F" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="59" y1="36" x2="73" y2="36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="70" cy="48" r="4" fill="#2A6F68" />
          <circle cx="70" cy="65" r="2" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: 'growth-optimization',
      category: 'strategy',
      code: 'CAP-04',
      title: 'Growth Marketing & Performance Optimization',
      description: 'Sub-second page loads, algorithmic Core Web Vitals remediation, behavioral funnel instrumentation, and conversion rate architecture that increases enterprise yield.',
      tags: ['Core Web Vitals', 'Edge Caching', 'A/B Experimentation', 'Analytics'],
      accent: 'terracotta',
      illustration: (
        <svg viewBox="0 0 140 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 58L55 38L75 48L110 18" stroke="#D9532F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="98 18 110 18 110 30" stroke="#D9532F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="26" y1="64" x2="114" y2="64" stroke="currentColor" strokeWidth="1.5" />
          <rect x="48" y="44" width="8" height="20" fill="currentColor" fillOpacity="0.12" />
          <rect x="68" y="52" width="8" height="12" fill="#2A6F68" fillOpacity="0.3" />
          <rect x="88" y="32" width="8" height="32" fill="#C98218" fillOpacity="0.3" />
          <circle cx="55" cy="38" r="3" fill="#D9532F" />
          <circle cx="75" cy="48" r="3" fill="#D9532F" />
        </svg>
      ),
    },
    {
      id: 'cloud-integration',
      category: 'security',
      code: 'CAP-05',
      title: 'API Design & Cloud Integration',
      description: 'Custom GraphQL and REST microservices, automated event meshes, third-party ERP/CRM interconnects, and resilient cloud orchestration across AWS, Google Cloud, and bare metal.',
      tags: ['GraphQL Federation', 'gRPC Mesh', 'Kubernetes', 'Multi-Region'],
      accent: 'teal',
      illustration: (
        <svg viewBox="0 0 140 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="25" y="24" width="30" height="20" rx="3" fill="#2A6F68" fillOpacity="0.2" stroke="#2A6F68" strokeWidth="1.5" />
          <rect x="85" y="24" width="30" height="20" rx="3" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1.5" />
          <rect x="55" y="46" width="30" height="20" rx="3" fill="#C98218" fillOpacity="0.2" stroke="#C98218" strokeWidth="1.5" />
          <line x1="55" y1="34" x2="85" y2="34" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="40" y1="44" x2="55" y2="56" stroke="#D9532F" strokeWidth="2" />
          <line x1="100" y1="44" x2="85" y2="56" stroke="#D9532F" strokeWidth="2" />
          <circle cx="70" cy="34" r="3" fill="#D9532F" />
        </svg>
      ),
    },
    {
      id: 'technical-consulting',
      category: 'strategy',
      code: 'CAP-06',
      title: 'Strategic Brand & Technical Consulting',
      description: 'Fractional CTO advisory, technical due diligence for acquisitions, legacy code modernization roadmaps, and high-stakes architectural risk assessments for boards.',
      tags: ['Fractional CTO', 'Due Diligence', 'System Migration', 'Team Mentorship'],
      accent: 'mustard',
      illustration: (
        <svg viewBox="0 0 140 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="70" cy="40" r="28" fill="#C98218" fillOpacity="0.1" stroke="#C98218" strokeWidth="2" />
          <circle cx="70" cy="40" r="20" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
          <polygon points="70 20 75 37 92 40 75 43 70 60 65 43 48 40 65 37" fill="#D9532F" />
          <circle cx="70" cy="40" r="3" fill="#FFFFFF" />
          <line x1="70" y1="8" x2="70" y2="14" stroke="currentColor" strokeWidth="2" />
          <line x1="70" y1="66" x2="70" y2="72" stroke="currentColor" strokeWidth="2" />
          <line x1="38" y1="40" x2="44" y2="40" stroke="currentColor" strokeWidth="2" />
          <line x1="96" y1="40" x2="102" y2="40" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
  ]

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter((s) => s.category === activeCategory)

  return (
    <section id="services" className="services-section">
      <div className="retro-container">
        <div className="section-title-wrap">
          <span className="section-eyebrow">Studio Capabilities</span>
          <h2 className="section-title">End-to-end software services crafted for longevity</h2>
          <p className="section-subtitle">
            Every engagement is led by principal-level practitioners with deep domain mastery across infrastructure, product interfaces, and resilient data backbones.
          </p>
        </div>

        <div className="filter-bar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`filter-pill ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="services-grid">
          {filteredServices.map((service) => (
            <article key={service.id} className="service-card">
              <div className="service-illustration-wrap" aria-hidden="true">
                {service.illustration}
              </div>

              <div className="service-header">
                <span className="service-code">{service.code}</span>
                <span className={`retro-tag retro-tag-${service.accent}`}>
                  Available
                </span>
              </div>

              <h3 className="service-title">{service.title}</h3>
              <p className="service-body">{service.description}</p>

              <div className="service-tags">
                {service.tags.map((tag) => (
                  <span key={tag} className="retro-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="service-footer">
                <button
                  type="button"
                  className="service-link"
                  onClick={() => onSelectService(service.title)}
                >
                  <span>Inquire for Scope</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  SLA Tier 1
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
