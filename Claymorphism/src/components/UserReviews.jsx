import { Star } from 'lucide-react'

function UserReviews() {
  const reviews = [
    {
      name: 'Alex',
      initials: 'A',
      avatarColor: 'avatar-peach',
      quote: 'Super easy to use and very reliable. I love the clean design!'
    },
    {
      name: 'Maya',
      initials: 'M',
      avatarColor: 'avatar-mint',
      quote: 'Managing my finances has never been this simple.'
    },
    {
      name: 'Daniel',
      initials: 'D',
      avatarColor: 'avatar-sky',
      quote: 'A must-have app for everyday freelance tracking. Highly recommended!'
    }
  ]

  return (
    <section className="clay-reviews-section" id="reviews">
      <div className="clay-container">
        <div className="section-head-center">
          <h2 className="section-title-chunky">What Users Say</h2>
          <p className="section-sub-clean">Real people. Real results.</p>
        </div>

        <div className="reviews-three-grid">
          {reviews.map((r) => (
            <div key={r.name} className="clay-review-card">
              <div className="review-user-row">
                <div className={`clay-avatar-bubble ${r.avatarColor}`}>
                  <span>{r.initials}</span>
                </div>
                <div className="review-stars-wrap">
                  <div className="stars-icons-line">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="star-clay-filled" fill="currentColor" />
                    ))}
                  </div>
                  <span className="user-name-text">{r.name}</span>
                </div>
              </div>

              <p className="review-quote-text">&ldquo;{r.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UserReviews
