import { Tag, Zap, ShieldCheck } from 'lucide-react'

function FeatureCards() {
  const features = [
    {
      colorClass: 'card-yellow',
      icon: <Tag size={20} strokeWidth={2} />,
      title: 'Easy Transaction',
      description: 'Record invoices, payments, and expenses in seconds. Keep track of incoming retainers with effortless logging.',
      cta: 'Learn More'
    },
    {
      colorClass: 'card-purple',
      icon: <Zap size={20} strokeWidth={2} />,
      title: 'Convert Currency',
      description: 'Support international clients with automatic real-time currency conversions and borderless payment tracking.',
      cta: 'Learn More'
    },
    {
      colorClass: 'card-peach',
      icon: <ShieldCheck size={20} strokeWidth={2} />,
      title: 'Advanced Security',
      description: 'Bank-grade encryption safeguard your clients, contracts, and financial reports with automated private backups.',
      cta: 'Learn More'
    }
  ]

  return (
    <section className="features-section" id="features">
      <div className="container">
        <h2 className="section-headline">
          Unleash the true potential for next gen freelancing.
        </h2>

        <div className="pastel-cards-grid">
          {features.map((f) => (
            <div key={f.title} className={`pastel-card ${f.colorClass}`}>
              <div className="pastel-icon-circle" aria-hidden="true">
                {f.icon}
              </div>
              <h3 className="pastel-card-title">{f.title}</h3>
              <p className="pastel-card-desc">{f.description}</p>
              <a href="#get-started" className="btn-pill-dark">
                {f.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureCards
