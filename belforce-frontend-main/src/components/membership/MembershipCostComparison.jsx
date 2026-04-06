import { useState } from 'react';

const BELFORCE_FEATURES = [
  'Sell up to 20 items',
  'Free pickup',
  'Low to zero commission',
  'Top priority processing',
  'Priority support',
];

function MembershipCostComparison() {
  const [mode, setMode] = useState('classified');

  return (
    <section className="membership-cost" aria-labelledby="membership-cost-heading">
      <h2 id="membership-cost-heading" className="membership-cost__heading">
        Cost Comparison
      </h2>

      <div className="membership-cost__switch-wrap">
        <div className="membership-cost__switch" role="tablist" aria-label="Compare Classified Ads vs BelForce">
          <button
            type="button"
            role="tab"
            id="membership-cost-tab-classified"
            aria-selected={mode === 'classified'}
            aria-controls="membership-cost-panel-classified"
            className={`membership-cost__switch-btn ${mode === 'classified' ? 'membership-cost__switch-btn--active' : ''}`}
            onClick={() => setMode('classified')}
          >
            Classified Ads
          </button>
          <button
            type="button"
            role="tab"
            id="membership-cost-tab-belforce"
            aria-selected={mode === 'belforce'}
            aria-controls="membership-cost-panel-belforce"
            className={`membership-cost__switch-btn ${mode === 'belforce' ? 'membership-cost__switch-btn--active' : ''}`}
            onClick={() => setMode('belforce')}
          >
            BelForce
          </button>
        </div>
      </div>

      {mode === 'classified' && (
        <div
          id="membership-cost-panel-classified"
          role="tabpanel"
          aria-labelledby="membership-cost-tab-classified"
          className="membership-cost__panel"
        >
          <div className="membership-cost__card membership-cost__card--classified">
            <h3 className="membership-cost__card-title">Classified Ads</h3>
            <p className="membership-cost__card-desc">
              Traditional platforms often come with hidden costs and less value.
            </p>
            <div className="membership-cost__pricing">
              <div className="membership-cost__row">
                <span className="membership-cost__label">1 ad</span>
                <span className="membership-cost__value">₹450 – ₹500</span>
              </div>
              <div className="membership-cost__row">
                <span className="membership-cost__label">20 ads</span>
                <span className="membership-cost__value">
                  <span className="membership-cost__icon membership-cost__icon--x" aria-hidden>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </span>
                  ₹9,000 – ₹10,000
                </span>
              </div>
            </div>
            <p className="membership-cost__footer">
              Expect to pay per listing, with no guaranteed outcomes or support.
            </p>
          </div>
        </div>
      )}

      {mode === 'belforce' && (
        <div
          id="membership-cost-panel-belforce"
          role="tabpanel"
          aria-labelledby="membership-cost-tab-belforce"
          className="membership-cost__panel"
        >
          <div className="membership-cost__card membership-cost__card--belforce">
            <h3 className="membership-cost__card-title">BelForce Pro Max Pre-Paid Membership</h3>
            <p className="membership-cost__card-desc">
              Unlock maximum benefits and savings with our top-tier plan.
            </p>
            <div className="membership-cost__pricing">
              <div className="membership-cost__row membership-cost__row--highlight">
                <span className="membership-cost__label">20 ads</span>
                <span className="membership-cost__value membership-cost__value--bold">₹999</span>
              </div>
              {BELFORCE_FEATURES.map((feature, i) => (
                <div key={i} className="membership-cost__row">
                  <span className="membership-cost__label">{feature}</span>
                  <span className="membership-cost__icon membership-cost__icon--check" aria-hidden>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </span>
                </div>
              ))}
            </div>
            <p className="membership-cost__cta">Everything included for ultimate resale advantage.</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default MembershipCostComparison;
