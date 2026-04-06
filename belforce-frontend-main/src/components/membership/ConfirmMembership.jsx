import { Link } from 'react-router-dom';

const PLAN_CONFIG = {
  pro: {
    title: 'BelForce Pro',
    price: '₹599',
    benefits: [
      'Priority listings',
      'Lower platform fees (up to 50%)',
      'Faster buyer matching',
      'Dedicated priority support',
      '1 year or 15 Sellings validity',
    ],
  },
  promax: {
    title: 'BelForce Pro Max',
    price: '₹999',
    benefits: [
      'Top priority listings & deals',
      'Zero / lowest platform fees',
      'Maximum free pickup (up to 20 benefits)',
      'Pro Max badge (high trust)',
      'Early access to new features',
      '1 year or 20 Sellings validity',
    ],
  },
  dummy_plan: {
    title: 'Dummy Plan (Test)',
    price: '₹1',
    benefits: [
      'Razorpay checkout (₹1 test charge)',
      'Backend verify + payment success redirect',
      'Receipt email when SMTP is configured',
    ],
  },
};

function ConfirmMembership({ plan = 'pro' }) {
  const config = PLAN_CONFIG[plan] || PLAN_CONFIG.pro;

  return (
    <div className="confirm-membership">
      <h1 className="confirm-membership__title">Confirm Your Membership</h1>

      <div className="confirm-membership__card">
        <h2 className="confirm-membership__plan-name">{config.title}</h2>
        <p className="confirm-membership__price-row">
          <span className="confirm-membership__price">{config.price}</span>
          <span className="confirm-membership__price-note">(One-time pre-paid membership)</span>
        </p>
        <hr className="confirm-membership__divider" />
        <h3 className="confirm-membership__benefits-heading">Key Benefits:</h3>
        <ul className="confirm-membership__benefits">
          {config.benefits.map((benefit, i) => (
            <li key={i} className="confirm-membership__benefit">
              <span className="confirm-membership__check">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      <Link to="/membership-plans" className="confirm-membership__change">
        Change Plan
      </Link>

      <footer className="confirm-membership__footer">
        <p className="confirm-membership__secure">
          Your transaction is 100% secure
          <span className="confirm-membership__shield" aria-hidden>
            <svg viewBox="0 0 24 24" width="22" height="22">
              <path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
              <path fill="#fff" d="M10 14.17l-2.59-2.58L6.41 11 10 14.59 17.59 7 19 8.41 10 16.17z" />
            </svg>
          </span>
        </p>
        <Link to={`/membership-plans/enter-details?plan=${plan}`} className="confirm-membership__pay-btn">
          Continue to Pay
        </Link>
        <p className="confirm-membership__copyright">copyright 2026 - BelForce</p>
      </footer>
    </div>
  );
}

export default ConfirmMembership;
