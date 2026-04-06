import savingsEdgeImg from '../../assets/images/savings_edge.png';

const RATINGS = [
  {
    quote: 'Finally a way to sell my old iPhone without worrying about being lowballed or scammed in a parking lot. The pickup was seamless!',
    author: 'RAHUL S.',
    label: 'EARLY USER',
    rating: 5,
  },
  {
    quote: 'The app made selling super easy. Pickup was smooth and payment came faster than expected!',
    author: 'AMIT R.',
    label: 'EARLY USER',
    rating: 5,
  },
  {
    quote: 'Verified buyers are the best part. No chasing, no stress. Everything felt professional.',
    author: 'NEHA K.',
    label: 'EARLY USER',
    rating: 4,
  },
  {
    quote: 'Fast payouts + safe process. I would recommend BelForce to anyone selling used electronics.',
    author: 'SARA M.',
    label: 'EARLY USER',
    rating: 5,
  },
];

function MobileChoosePlanSavingsSection() {
  return (
    <section className="choose-your-plan__mobile-savings">
      <img
        src={savingsEdgeImg}
        alt=""
        className="choose-your-plan__mobile-savings-image"
        loading="lazy"
        decoding="async"
      />

      <div className="choose-your-plan__mobile-savings-steps">
        <div className="choose-your-plan__mobile-savings-steps-title">Re-sale in 4 Steps</div>

        <div className="choose-your-plan__mobile-savings-steps-grid">
          <div className="choose-your-plan__mobile-savings-step">
            <div className="choose-your-plan__mobile-savings-step-icon" aria-hidden>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="4" rx="2" />
                <path d="M7 12h10" />
                <path d="M7 16h7" />
              </svg>
            </div>
            <div className="choose-your-plan__mobile-savings-step-label">LIST</div>
          </div>

          <div className="choose-your-plan__mobile-savings-step">
            <div className="choose-your-plan__mobile-savings-step-icon" aria-hidden>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.59 13.41 7.41 0.59 4 4 17.18 17.18a2 2 0 0 0 2.82 0l0 0a2 2 0 0 0 .59-1.41z" />
                <path d="M7 7l2 2" />
              </svg>
            </div>
            <div className="choose-your-plan__mobile-savings-step-label">PRICE</div>
          </div>

          <div className="choose-your-plan__mobile-savings-step">
            <div className="choose-your-plan__mobile-savings-step-icon" aria-hidden>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 7h12v10H3z" />
                <path d="M15 10h4l2 3v4h-6" />
                <path d="M7 17a1.5 1.5 0 1 0 0.01 0" />
                <path d="M17 17a1.5 1.5 0 1 0 0.01 0" />
              </svg>
            </div>
            <div className="choose-your-plan__mobile-savings-step-label">PICKUP</div>
          </div>

          <div className="choose-your-plan__mobile-savings-step">
            <div className="choose-your-plan__mobile-savings-step-icon" aria-hidden>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 10h18v10H3z" />
                <path d="M3 10l9-6 9 6" />
              </svg>
            </div>
            <div className="choose-your-plan__mobile-savings-step-label">PAYOUT</div>
          </div>
        </div>
      </div>

      <div className="choose-your-plan__mobile-savings-fastpay">
        <div className="choose-your-plan__mobile-savings-fastpay-icon" aria-hidden>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 2 3 14h9l-1 8 10-12h-9z" />
          </svg>
        </div>
        <div className="choose-your-plan__mobile-savings-fastpay-text">
          <span className="choose-your-plan__mobile-savings-fastpay-strong">Fast Payouts:</span>{' '}
          Funds clear within 3-5 days after inspection. No chasing buyers or awkward haggling.
        </div>
      </div>

      <div className="choose-your-plan__mobile-ratings">
        <div className="choose-your-plan__mobile-ratings-header">
          <div className="choose-your-plan__mobile-ratings-title-row">
            <span className="choose-your-plan__mobile-ratings-star" aria-hidden>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </span>
            <h3 className="choose-your-plan__mobile-ratings-title">Ratings</h3>
          </div>
          <div className="choose-your-plan__mobile-ratings-sub">
            <span className="choose-your-plan__mobile-ratings-sub-rating">4.8/5 Rating</span>
          </div>
        </div>

        <div className="choose-your-plan__mobile-ratings-carousel">
          <div className="choose-your-plan__mobile-ratings-track">
            {[1, 2].map((dup) => (
              <div key={dup} className="choose-your-plan__mobile-ratings-row">
                {RATINGS.map((r) => (
                  <div key={`${dup}-${r.author}`} className="choose-your-plan__mobile-ratings-card">
                    <div
                      className="choose-your-plan__mobile-testimonial-stars choose-your-plan__mobile-ratings-stars"
                      aria-hidden
                    >
                      {[1, 2, 3, 4, 5].map((n) => (
                        <svg
                          key={n}
                          viewBox="0 0 24 24"
                          className={
                            n <= r.rating ? 'choose-your-plan__mobile-testimonial-star--filled' : 'choose-your-plan__mobile-testimonial-star--empty'
                          }
                          width="16"
                          height="16"
                          fill="currentColor"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>

                    <p className="choose-your-plan__mobile-ratings-quote">“{r.quote}”</p>

                    <div className="choose-your-plan__mobile-ratings-author">
                      <span className="choose-your-plan__mobile-ratings-avatar" aria-hidden>
                        {r.author.split(' ').map((s) => s[0]).slice(0, 2).join('')}
                      </span>
                      <div>
                        <div className="choose-your-plan__mobile-ratings-author-name">{r.author}</div>
                        <div className="choose-your-plan__mobile-ratings-author-label">{r.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="choose-your-plan__mobile-ratings-badges">
        </div>
      </div>
    </section>
  );
}

export default MobileChoosePlanSavingsSection;

