import { Star } from 'lucide-react'

function RatingBar() {
  const reviews = [
    {
      source: 'Capterra',
      score: '4.6/5',
      count: 'From 600+ reviews',
      icon: (
        <svg viewBox="0 0 24 24" className="review-brand-icon capterra" fill="currentColor">
          <path d="M12 2L2 22h7l3-6 3 6h7L12 2z" />
        </svg>
      )
    },
    {
      source: 'G2',
      score: '4.6/5',
      count: 'From 600+ reviews',
      icon: (
        <svg viewBox="0 0 24 24" className="review-brand-icon g2" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.93V14h-2v-2h4v4.93C13.97 17.58 13.01 18 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78l-1.41 1.41C14.09 8.47 13.1 8 12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4c.67 0 1.29-.18 1.83-.48l-.83-.59z"/>
        </svg>
      )
    },
    {
      source: 'Trustpilot',
      score: '4.6/5',
      count: 'From 600+ reviews',
      icon: (
        <svg viewBox="0 0 24 24" className="review-brand-icon trustpilot" fill="currentColor">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
      )
    }
  ]

  return (
    <section className="ratings-section" aria-label="Customer ratings and reviews">
      <div className="container">
        <div className="ratings-card">
          {reviews.map((r) => (
            <div key={r.source} className="rating-column">
              <div className="rating-stars" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <p className="rating-text">
                <strong>{r.score}</strong> ({r.count})
              </p>
              <div className="rating-brand">
                {r.icon}
                <span className="brand-label">{r.source}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RatingBar
