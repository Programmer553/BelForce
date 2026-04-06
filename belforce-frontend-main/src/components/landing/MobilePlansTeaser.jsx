import { Link } from 'react-router-dom';

const PRO_FEATURES = [
  'Sell upto 10 items',
  'Lower platform Commission',
  'Faster buyer matching',
  'Priority chat & support',
  'Priority listing visibility',
];

const PRO_MAX_FEATURES = [
  'Sell upto 20 items',
  'Zero / lowest platform commission',
  'Maximum free pickup (up to 20 benefits)',
  'Pro Max badge (high trust)',
  'Early access to new features',
  'Priority support',
  'Top priority listings & deals',
  'Built for power users. No compromises.',
];

function MobilePlansTeaser() {
  return (
    <section className="mobile-plans-teaser">
      <div className="mobile-plans-teaser__inner">
        <h2 className="mobile-plans-teaser__title">Choose Your Launch Plan</h2>
        <p className="mobile-plans-teaser__subtitle">Secure your early access spot today.</p>

        <div className="mobile-plans-teaser__cards">
          <div className="mobile-plans-teaser__card">
            <div className="mobile-plans-teaser__card-title">BelForce Pro</div>
            <div className="mobile-plans-teaser__price">
              <span className="mobile-plans-teaser__price-amount">₹599</span>
              <span className="mobile-plans-teaser__price-note">valid till 1 year / 10 sellings</span>
            </div>

            <ul className="mobile-plans-teaser__list">
              {PRO_FEATURES.slice(0, 4).map((t) => (
                <li key={t} className="mobile-plans-teaser__li">
                  <span className="mobile-plans-teaser__check" aria-hidden>✓</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/membership-plans/choose-plan?plan=pro"
              className="mobile-plans-teaser__btn mobile-plans-teaser__btn--outline"
            >
              View more
            </Link>
          </div>

          <div className="mobile-plans-teaser__card mobile-plans-teaser__card--promax">
            <span className="mobile-plans-teaser__badge">Best Value</span>
            <div className="mobile-plans-teaser__card-title">BelForce Pro Max</div>
            <div className="mobile-plans-teaser__price">
              <span className="mobile-plans-teaser__price-amount">₹999</span>
              <span className="mobile-plans-teaser__price-note">valid upto 2 years / 20 sellings</span>
            </div>

            <ul className="mobile-plans-teaser__list">
              {PRO_MAX_FEATURES.slice(0, 5).map((t) => (
                <li key={t} className="mobile-plans-teaser__li">
                  <span className="mobile-plans-teaser__check" aria-hidden style={{ borderColor: '#2563eb', color: '#2563eb' }}>
                    ●
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/membership-plans/choose-plan?plan=promax"
              className="mobile-plans-teaser__btn"
            >
              View more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobilePlansTeaser;

