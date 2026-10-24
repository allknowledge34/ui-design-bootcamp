import {
  ServiceBrandSpot,
  ServiceEditorialSpot,
  ServiceCampaignSpot,
  ServicePackagingSpot
} from './VectorArtAssets';

const services = [
  {
    num: '01',
    title: 'Brand Identity & Systems',
    desc: 'From core geometric logomarks to responsive vector asset kits and bespoke typographic palettes, we build foundational brand worlds that scale effortlessly.',
    spot: ServiceBrandSpot,
    deliverables: [
      'Geometric Logomarks & Wordmarks',
      'Scalable Vector Asset Libraries',
      'Comprehensive Brand Guidelines',
      'Custom Iconography Suites'
    ]
  },
  {
    num: '02',
    title: 'Editorial & Book Illustration',
    desc: 'Conceptual storytelling graphics and book jackets that distill complex prose, scientific narratives, and cultural essays into striking visual metaphors.',
    spot: ServiceEditorialSpot,
    deliverables: [
      'Cover Artwork & Wrap-Arounds',
      'Full-Bleed Magazine Spreads',
      'Conceptual Infographic Vectors',
      'Digital Article Spot Illustrations'
    ]
  },
  {
    num: '03',
    title: 'Visual Campaigns & Direction',
    desc: 'Memorable high-impact key visuals designed for billboard takeovers, subway posters, digital launch experiences, and dynamic multi-channel campaigns.',
    spot: ServiceCampaignSpot,
    deliverables: [
      'Multi-Format Key Visuals',
      'Vector Motion Ready Assets',
      'Outdoor Billboard & Transit Displays',
      'Digital Advertising Systems'
    ]
  },
  {
    num: '04',
    title: 'Packaging & Spatial Graphics',
    desc: 'Translating vector art into physical unboxing rituals, tactile papercraft finishes, retail window vinyls, and architectural surface murals.',
    spot: ServicePackagingSpot,
    deliverables: [
      'Custom Die-line Vector Artwork',
      'Unboxing Pattern Systems',
      'Retail Spatial Murals',
      'Exhibition & Event Signage'
    ]
  }
];

export default function WhatWeDo({ onOpenInquiry }) {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div>
          <span className="section-label">Studio Disciplines</span>
          <h2 className="section-title">What we do.</h2>
          <p className="section-subtitle">
            Focused creative capabilities rooted in deliberate geometry, purposeful color selection, and uncompromising craft.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const SpotComponent = service.spot;
            return (
              <div key={service.num} className="service-card">
                <div>
                  <div className="service-card-top">
                    <span className="service-num">{service.num}</span>
                    <SpotComponent />
                  </div>
                  <div className="service-card-body" style={{ marginTop: '20px' }}>
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                  </div>
                </div>

                <ul className="service-deliverables">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: '48px', textAlign: 'center' }}>
          <button 
            type="button" 
            className="btn btn-yellow"
            onClick={onOpenInquiry}
          >
            Discuss a Custom Project Scope
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
