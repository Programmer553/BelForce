import { Link, useSearchParams } from 'react-router-dom';
import chooseYourPlanImg from '../../assets/images/choose_your_plan.webp';

const PRO_FEATURES_MOBILE = [
  'Sell upto 10 items',
  'Lower platform Commission',
  'Faster buyer matching',
  'Priority chat & support',
  'Priority listing visibility',
];

const PRO_MAX_FEATURES_MOBILE = [
  'Sell upto 20 items',
  'Zero / lowest platform commission',
  'Maximum free pickup (up to 20 benefits)',
  'Pro Max badge (high trust)',
  'Early access to new features',
  'Priority support',
  'Top priority listings & deals',
  { text: 'Built for power users. No compromises.', icon: 'thumbs' },
];

const FEATURE_CHIPS = [
  { icon: 'lightning', label: 'Priority Listing' },
  { icon: 'truck', label: 'Free Pickup' },
  { icon: 'shield', label: 'Secure Payments' },
];

const MOBILE_FAQ_ITEMS = [
  { question: 'Is doorstep pickup really free?', answer: 'Yes. Pre-order members get free doorstep pickup for their listings.' },
  { question: 'When does membership activate?', answer: 'Your membership activates when the BelForce app launches in April 2026.' },
];

const MOBILE_TESTIMONIALS = [
  { initials: 'RK', quote: 'Sold my iPhone 14 in 2 hours! Pro Max paid for itself instantly with the lower fees.', rating: 5 },
  { initials: 'AS', quote: 'Free pickup and secure payments made selling so easy. Highly recommend BelForce Pro!', rating: 4 },
  { initials: 'PV', quote: 'Best resale experience ever. Got fair price and payout in days.', rating: 5 },
  { initials: 'MK', quote: 'Smooth process from listing to payout. Will definitely use again.', rating: 4 },
  { initials: 'SN', quote: 'The Pro Max subscription was worth every rupee. Sold 3 items in a week!', rating: 5 },
];

const PRO_FEATURES = [
  'Up to 5 active listings',
  'Standard visibility in search',
  'Direct chat with verified buyers',
  'Basic electronics valuation',
  'Standard support (48h response)',
];

const PRO_MAX_FEATURES = [
  'Unlimited active listings',
  'Priority placement & 3x visibility',
  'Early access to top-tier deals',
  'Advanced AI market analytics',
  'Premium support (4h response)',
  'Certified Seller badge',
];

function ChooseYourPlan() {
  const [searchParams] = useSearchParams();
  const planRaw = searchParams.get('plan');
  const plan =
    planRaw === 'pro' || planRaw === 'promax' || planRaw === 'dummy_plan' ? planRaw : 'promax';

  const isPro = plan === 'pro';
  const isDummy = plan === 'dummy_plan';
  const selectedName = isDummy
    ? 'Dummy Plan (Test)'
    : isPro
      ? 'BelForce Pro'
      : 'BelForce Pro Max';
  const selectedTagline = isDummy
    ? 'End-to-end payment flow test'
    : isPro
      ? 'For occasional sellers'
      : 'For Frequent resellers';
  const selectedPriceAmount = isDummy ? '₹1' : isPro ? '₹599' : '₹999';
  const selectedPriceNote = isDummy ? ' test payment' : isPro ? '/lifetime' : '/2 years or 20 listings';

  return (
    <div className="choose-your-plan">
      <div className="choose-your-plan__hero-mobile">
        <h1 className="choose-your-plan__hero-mobile-heading">
          <span className="choose-your-plan__hero-mobile-line1">
            A Better Way to <span className="choose-your-plan__hero-mobile-highlight">Buy &</span>
          </span>
          <span className="choose-your-plan__hero-mobile-line2">
            <span className="choose-your-plan__hero-mobile-highlight">Sell</span> Used Electronics.
          </span>
        </h1>
      </div>
      <div className="choose-your-plan__mobile-section">
        <p className="choose-your-plan__mobile-headline">
          Get BelForce Pro or Pro Max — early access now, bigger savings later.
        </p>
        <hr className="choose-your-plan__mobile-divider" />
        <div className="choose-your-plan__mobile-guarantees">
          <div className="choose-your-plan__mobile-guarantee">
            <span className="choose-your-plan__mobile-guarantee-icon choose-your-plan__mobile-guarantee-icon--check" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
            <span>SECURE PAYMENTS</span>
          </div>
          <div className="choose-your-plan__mobile-guarantee-divider" />
          <div className="choose-your-plan__mobile-guarantee">
            <span className="choose-your-plan__mobile-guarantee-icon choose-your-plan__mobile-guarantee-icon--truck" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 17a2 2 0 0 0 4 0 2 2 0 0 0-4 0" /><path d="M15 17a2 2 0 0 0 4 0 2 2 0 0 0-4 0" />
                <path d="M5 17H3v-4M1 9h12v8m-4 0h6m4 0h2v-6h-8m0-5h5l3 5" />
              </svg>
            </span>
            <span>DOORSTEP PICKUP</span>
          </div>
        </div>
        <a href="#select-subscription" className="choose-your-plan__mobile-cta">
          Choose Your Plan
        </a>
        <div className="choose-your-plan__mobile-chips">
          <div className="choose-your-plan__mobile-chips-track">
            {[1, 2].map((n) => (
              <div key={n} className="choose-your-plan__mobile-chips-row">
                {FEATURE_CHIPS.map((chip) => (
                  <span key={`${n}-${chip.label}`} className="choose-your-plan__mobile-chip">
                    {chip.icon === 'lightning' && (
                      <svg className="choose-your-plan__mobile-chip-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2v11h3v9l7-12h-4l4-8z" /></svg>
                    )}
                    {chip.icon === 'truck' && (
                      <svg className="choose-your-plan__mobile-chip-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 17a2 2 0 0 0 4 0 2 2 0 0 0-4 0" /><path d="M15 17a2 2 0 0 0 4 0 2 2 0 0 0-4 0" />
                        <path d="M5 17H3v-4M1 9h12v8m-4 0h6m4 0h2v-6h-8m0-5h5l3 5" />
                      </svg>
                    )}
                    {chip.icon === 'shield' && (
                      <svg className="choose-your-plan__mobile-chip-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                    )}
                    <span>{chip.label}</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="choose-your-plan__mobile-subscription" id="select-subscription">
          <div className="choose-your-plan__mobile-subscription-header">
            <h2 className="choose-your-plan__mobile-subscription-title">Select a Subscription</h2>
            <span className="choose-your-plan__mobile-limited-tag">Limited Seats Left</span>
          </div>
          <div className="choose-your-plan__mobile-card">
            <div className="choose-your-plan__mobile-card-validity choose-your-plan__mobile-card-validity--center">validity until 10 items / 1 year</div>
            <h3 className="choose-your-plan__mobile-card-title">BelForce Pro</h3>
            <p className="choose-your-plan__mobile-card-desc">For smart sellers & buyers who want faster results</p>
            <ul className="choose-your-plan__mobile-card-features">
              {PRO_FEATURES_MOBILE.map((text) => (
                <li key={text} className="choose-your-plan__mobile-card-feature">
                  <span className="choose-your-plan__mobile-card-check" aria-hidden>
                    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 5-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <p className="choose-your-plan__mobile-card-value">
              <span className="choose-your-plan__mobile-card-value-icon" aria-hidden>
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 11H4a2 2 0 00-2 2v6a2 2 0 002 2h3z" /></svg>
              </span>
              Best value to sell faster with less effort.
            </p>
            <p className="choose-your-plan__mobile-card-price">₹599</p>
            {plan === 'pro' ? (
              <button type="button" className="choose-your-plan__mobile-card-btn choose-your-plan__mobile-card-btn--selected" disabled>
                Plan Selected
              </button>
            ) : (
              <Link to="/membership-plans/choose-plan?plan=pro" className="choose-your-plan__mobile-card-btn">
                Choose Pro
              </Link>
            )}
          </div>
          <div className="choose-your-plan__mobile-card choose-your-plan__mobile-card--promax">
            <div className="choose-your-plan__mobile-card-validity choose-your-plan__mobile-card-validity--yellow">
              validity upto 20 items / 2 year
            </div>
            <div className="choose-your-plan__mobile-card-best-value">Best Value • Power Users</div>
            <h3 className="choose-your-plan__mobile-card-title">BelForce Pro Max</h3>
            <p className="choose-your-plan__mobile-card-desc">For serious users who want maximum advantage</p>
            <ul className="choose-your-plan__mobile-card-features">
              {PRO_MAX_FEATURES_MOBILE.map((item, i) => (
                <li key={i} className="choose-your-plan__mobile-card-feature">
                  {typeof item === 'object' && item.icon === 'thumbs' ? (
                    <>
                      <span className="choose-your-plan__mobile-card-thumbs" aria-hidden>
                        <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 11H4a2 2 0 00-2 2v6a2 2 0 002 2h3z" /></svg>
                      </span>
                      <span>{item.text}</span>
                    </>
                  ) : (
                    <>
                      <span className="choose-your-plan__mobile-card-check" aria-hidden>
                        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 5-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                      </span>
                      <span>{typeof item === 'string' ? item : item.text}</span>
                    </>
                  )}
                </li>
              ))}
            </ul>
            <p className="choose-your-plan__mobile-card-price">₹999</p>
            {plan === 'promax' ? (
              <button type="button" className="choose-your-plan__mobile-card-btn choose-your-plan__mobile-card-btn--selected" disabled>
                Plan Selected
              </button>
            ) : (
              <Link to="/membership-plans/choose-plan?plan=promax" className="choose-your-plan__mobile-card-btn">
                Choose Pro Max
              </Link>
            )}
          </div>
        </div>
        <div className="choose-your-plan__mobile-why">
          <h3 className="choose-your-plan__mobile-why-heading">
            <span className="choose-your-plan__mobile-why-icon" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
            </span>
            Why BelForce Subscription?
          </h3>
          <div className="choose-your-plan__mobile-why-compare">
            <div className="choose-your-plan__mobile-why-col choose-your-plan__mobile-why-col--left">
              <p className="choose-your-plan__mobile-why-col-title">CLASSIFIED ADS FOR 20 ITEMS</p>
              <p className="choose-your-plan__mobile-why-col-price choose-your-plan__mobile-why-col-price--red">₹9,000+ Reach Cost</p>
              <p className="choose-your-plan__mobile-why-col-desc">Manual verification, unsafe payments</p>
            </div>
            <div className="choose-your-plan__mobile-why-col choose-your-plan__mobile-why-col--right">
              <p className="choose-your-plan__mobile-why-col-title">BELFORCE PRO MAX</p>
              <p className="choose-your-plan__mobile-why-col-price choose-your-plan__mobile-why-col-price--green">₹999 Flat</p>
              <p className="choose-your-plan__mobile-why-col-desc">Automated reach, secure escrow, 100% safety</p>
            </div>
          </div>
          <p className="choose-your-plan__mobile-why-quote">
            &ldquo;Save big across multiple listings and trade with peace of mind.&rdquo;
          </p>
        </div>
        <div className="choose-your-plan__mobile-faq">
          <h3 className="choose-your-plan__mobile-faq-heading">Common Questions</h3>
          {MOBILE_FAQ_ITEMS.map((item, i) => (
            <details key={i} className="choose-your-plan__mobile-faq-item">
              <summary className="choose-your-plan__mobile-faq-question">{item.question}</summary>
              <p className="choose-your-plan__mobile-faq-answer">{item.answer}</p>
            </details>
          ))}
          <Link to="/faq" className="choose-your-plan__mobile-faq-link">View full FAQ &amp; Help Center</Link>
        </div>
        <div className="choose-your-plan__mobile-testimonials">
          <h3 className="choose-your-plan__mobile-testimonials-heading">What Sellers Say</h3>
          <div className="choose-your-plan__mobile-testimonials-track">
            {[1, 2].map((n) => (
              <div key={n} className="choose-your-plan__mobile-testimonials-row">
                {MOBILE_TESTIMONIALS.map((t, i) => (
                  <div key={`${n}-${i}`} className="choose-your-plan__mobile-testimonial-card">
                    <div className="choose-your-plan__mobile-testimonial-header">
                      <span className="choose-your-plan__mobile-testimonial-avatar">{t.initials}</span>
                      <span className="choose-your-plan__mobile-testimonial-stars" aria-hidden>
                        {[1, 2, 3, 4, 5].map((s) => (
                          <svg key={s} className={s <= t.rating ? 'choose-your-plan__mobile-testimonial-star--filled' : 'choose-your-plan__mobile-testimonial-star--empty'} viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                        ))}
                      </span>
                    </div>
                    <p className="choose-your-plan__mobile-testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="choose-your-plan__mobile-protection">
          <span className="choose-your-plan__mobile-protection-icon" aria-hidden>
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 5-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
          </span>
          <div>
            <p className="choose-your-plan__mobile-protection-title">100% Seller Protection</p>
            <p className="choose-your-plan__mobile-protection-desc">if you dont receive your first sale &amp; payout in less then 3-4 days well extent your subscription</p>
          </div>
        </div>
        <div className="choose-your-plan__mobile-payment">
          <div className="choose-your-plan__mobile-payment-row">
            <div>
              <p className="choose-your-plan__mobile-payment-label">SELECTED PLAN</p>
              <p className="choose-your-plan__mobile-payment-plan">{selectedName}</p>
            </div>
            <div className="choose-your-plan__mobile-payment-right">
              <p className="choose-your-plan__mobile-payment-label">TOTAL TO PAY</p>
              <p className="choose-your-plan__mobile-payment-amount">{selectedPriceAmount}</p>
            </div>
          </div>
          <Link to={`/membership-plans/enter-details?plan=${plan}`} className="choose-your-plan__mobile-payment-btn">
            Continue - Pay {selectedPriceAmount}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
          <div className="choose-your-plan__mobile-payment-footer">
            <Link to="/membership-plans" className="choose-your-plan__mobile-payment-footer-link">Compare all plans</Link>
            <span className="choose-your-plan__mobile-payment-footer-secure">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              SECURE CHECKOUT
            </span>
          </div>
        </div>
      </div>
      <div className="choose-your-plan__inner">
        <h1 className="choose-your-plan__title">Choose Your Plan</h1>

        <div className="choose-your-plan__banner">
          <div className="choose-your-plan__banner-left">
            <p className="choose-your-plan__banner-heading">
              Resale is now simple, secure, hassle-free with BelForce.
            </p>
            <p className="choose-your-plan__banner-sub">
              1000+ sellers Pre-orderd subscription to get maximum benefits of premium resale. you too try it now..
            </p>
          </div>
          <div className="choose-your-plan__banner-right">
            <div className="choose-your-plan__banner-panel">
              <img src={chooseYourPlanImg} alt="" className="choose-your-plan__banner-img" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>

        <p className="choose-your-plan__intro">
          You&apos;re buying our One-time Subscription service in advance — and securing long-term resale advantages. choose your plan to save big in selling your used items soon in the app
        </p>

        <div className="choose-your-plan__cards">
          <div className="choose-your-plan__card">
            <h3 className="choose-your-plan__card-title">BelForce Pro</h3>
            <p className="choose-your-plan__card-sub">For occasional sellers</p>
            <p className="choose-your-plan__card-price">
              <span className="choose-your-plan__price-amount">₹599</span>
              <span className="choose-your-plan__price-note">/lifetime</span>
            </p>
            <ul className="choose-your-plan__features">
              {PRO_FEATURES.map((text) => (
                <li key={text} className="choose-your-plan__feature">
                  <span className="choose-your-plan__check" aria-hidden>✓</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            {plan === 'pro' ? (
              <button type="button" className="choose-your-plan__btn choose-your-plan__btn--selected" disabled>
                Plan Selected
              </button>
            ) : (
              <Link
                to="/membership-plans/choose-plan?plan=pro"
                className="choose-your-plan__btn choose-your-plan__btn--outline"
              >
                Select BelForce Pro
              </Link>
            )}
          </div>

          <div className="choose-your-plan__card choose-your-plan__card--highlight">
            <div className="choose-your-plan__badge">Best Value</div>
            <h3 className="choose-your-plan__card-title">BelForce Pro Max</h3>
            <p className="choose-your-plan__card-sub">For Frequent resellers</p>
            <p className="choose-your-plan__card-price">
              <span className="choose-your-plan__price-amount">₹999</span>
              <span className="choose-your-plan__price-note">/2 years or 20 listings</span>
            </p>
            <ul className="choose-your-plan__features">
              {PRO_MAX_FEATURES.map((text) => (
                <li key={text} className="choose-your-plan__feature">
                  <span className="choose-your-plan__check choose-your-plan__check--dark" aria-hidden>✓</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            {plan === 'promax' ? (
              <button type="button" className="choose-your-plan__btn choose-your-plan__btn--selected" disabled>
                Plan Selected
              </button>
            ) : (
              <Link
                to="/membership-plans/choose-plan?plan=promax"
                className="choose-your-plan__btn choose-your-plan__btn--outline"
              >
                Select BelForce Pro Max
              </Link>
            )}
          </div>

          <div className="choose-your-plan__card">
            <h3 className="choose-your-plan__card-title">{selectedName}</h3>
            <p className="choose-your-plan__card-sub">{selectedTagline}</p>
            <p className="choose-your-plan__card-price">
              <span className="choose-your-plan__price-amount">{selectedPriceAmount}</span>
              <span className="choose-your-plan__price-note">{selectedPriceNote}</span>
            </p>
            <Link
              to={`/membership-plans/enter-details?plan=${plan}`}
              className="choose-your-plan__btn choose-your-plan__btn--blue"
            >
              Continue to Pay
            </Link>
          </div>
        </div>

        <p className="choose-your-plan__footer">With our pre-paid Subsription enjoy soon.</p>
      </div>
    </div>
  );
}

export default ChooseYourPlan;
