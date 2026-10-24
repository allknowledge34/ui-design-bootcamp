import { Star } from 'lucide-react'

function ReviewsBar() {
  const reviews = [
    {
      platform: 'Capterra',
      score: '4.6/5',
      count: 'From 600+ reviews',
      color: '#ff6138',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
          <path d="M12 2L2 22h20L12 2zm0 5l6.5 13H5.5L12 7z" />
        </svg>
      )
    },
    {
      platform: 'G2',
      score: '4.6/5',
      count: 'From 600+ reviews',
      color: '#ff492c',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.93V13h2v1.93c-1.39.73-2.61.07-2-1.93zm4.5-4.43h-4.5V10h6c-.23 2.82-1.89 5.38-4.66 6.34-3.41 1.18-7.14-.58-8.24-3.97-1.1-3.39.69-7.05 4.08-8.15 2.53-.82 5.25.12 6.82 2.35l-2.06 1.48c-.96-1.38-2.67-1.96-4.22-1.46-2.07.67-3.17 2.91-2.5 4.98.67 2.07 2.91 3.17 4.98 2.5 1.55-.5 2.6-1.85 2.76-3.49h-2.46z" />
        </svg>
      )
    },
    {
      platform: 'Trustpilot',
      score: '4.6/5',
      count: 'From 600+ reviews',
      color: '#00b67a',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )
    }
  ]

  return (
    <section className="neu-reviews-section" id="reviews">
      <div className="neu-container">
        <div className="neu-reviews-card">
          {reviews.map((rev) => (
            <div key={rev.platform} className="review-col-item">
              <div className="review-stars-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="star-filled" fill="currentColor" />
                ))}
              </div>
              <span className="review-score-text">
                <strong>{rev.score}</strong> ({rev.count})
              </span>
              <div className="review-platform-brand">
                <span className="platform-icon" style={{ color: rev.color }}>
                  {rev.icon}
                </span>
                <span className="platform-name">{rev.platform}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReviewsBar
