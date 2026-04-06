import whyUpgradeImg from '../../assets/images/why_upgrade.webp';

const LEFT_POINTS = [
  'No chasing buyers for replies.',
  'No endless bargaining over prices.',
  'No unsafe meetups with strangers.',
];

const TYPICAL_POINTS = [
  '1 ad listing: ₹450 – ₹500 (per platform)',
  '20 ads listings: ₹9,000 – ₹10,000',
  'No guaranteed sale or pickup',
  'Manual negotiation & coordination',
  'Slow processing & limited support',
];

const PRO_MAX_POINTS = [
  '20 ads listing: ₹999 (one-time fee)',
  'Sell up to 20 items',
  'Free pickup at your doorstep',
  'Low/zero commission on sales',
  'Priority processing & dedicated support',
];

function WhyUpgradePro() {
  return (
    <section className="why-upgrade">
      <div className="why-upgrade__inner">
        <div className="why-upgrade__hero">
          <div className="why-upgrade__hero-left">
            <h2 className="why-upgrade__title">Why Upgrade to BelForce Pro?</h2>
            <p className="why-upgrade__lead">
              Tired of the endless hassle of selling used electronics? BelForce Pro is designed to eliminate the common
              frustrations and bring you a truly seamless selling experience. Say goodbye to lowball offers and
              time-consuming negotiations.
            </p>
            <ul className="why-upgrade__bullets">
              {LEFT_POINTS.map((text) => (
                <li key={text} className="why-upgrade__bullet">
                  <span className="why-upgrade__bullet-icon" aria-hidden>
                    ⊘
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <p className="why-upgrade__footer-text">BelForce makes resale safe, fast, and profitable.</p>
          </div>

          <div className="why-upgrade__hero-right">
            <div className="why-upgrade__image-card">
              <img src={whyUpgradeImg} alt="" className="why-upgrade__image" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>

        <div className="why-upgrade__compare">
          <div className="why-upgrade__compare-card">
            <h3 className="why-upgrade__compare-title">Typical Classified Ads</h3>
            <ul className="why-upgrade__compare-list">
              {TYPICAL_POINTS.map((text) => (
                <li key={text} className="why-upgrade__compare-item">
                  <span className="why-upgrade__dot why-upgrade__dot--red" aria-hidden>
                    ×
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="why-upgrade__compare-card why-upgrade__compare-card--pro">
            <div className="why-upgrade__pill">Smartest Choice</div>
            <h3 className="why-upgrade__compare-title">BelForce Pro Max Pre-Paid</h3>
            <ul className="why-upgrade__compare-list">
              {PRO_MAX_POINTS.map((text) => (
                <li key={text} className="why-upgrade__compare-item">
                  <span className="why-upgrade__dot why-upgrade__dot--green" aria-hidden>
                    ✓
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUpgradePro;

