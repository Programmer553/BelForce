import { Link } from 'react-router-dom';

const PRO_FEATURES = [
  'Access to standard selling features',
  'Lower commission rates on sales',
  'Standard pickup options',
  'Up to 5 free listings per month',
  'Email support',
];

const PRO_MAX_FEATURES = [
  'Zero to lowest commission on all sales',
  '20+ free pickups',
  'Guaranteed early access to new features',
  'Priority processing & dedicated support',
  'Sell up to 20 items with benefits',
  'Exclusive member discounts',
];

function PrePaidMembershipPlans() {
  return (
    <section className="prepaid-membership-plans">
      <div className="prepaid-membership-plans__inner">
        <h2 className="prepaid-membership-plans__heading">Pre-Paid Membership Plans</h2>
        <div className="prepaid-membership-plans__cards">
          <div className="prepaid-membership-plans__card">
            <h3 className="prepaid-membership-plans__card-title">BelForce Pro</h3>
            <p className="prepaid-membership-plans__card-subtitle">For occasional sellers looking for great value.</p>
            <ul className="prepaid-membership-plans__features">
              {PRO_FEATURES.map((feature, index) => (
                <li key={index} className="prepaid-membership-plans__feature">
                  <svg className="prepaid-membership-plans__check-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <p className="prepaid-membership-plans__card-cta">Great value for starting out on BelForce.</p>
            <div className="prepaid-membership-plans__price">
              <span className="prepaid-membership-plans__currency">₹</span>
              <span className="prepaid-membership-plans__amount">599</span>
            </div>
            <Link to="/membership-plans/choose-plan?plan=pro" className="prepaid-membership-plans__btn">
              Choose Pro
            </Link>
          </div>

          <div className="prepaid-membership-plans__card prepaid-membership-plans__card--max">
            <div className="prepaid-membership-plans__badge">Best Value + Power Users</div>
            <h3 className="prepaid-membership-plans__card-title">BelForce Pro Max</h3>
            <ul className="prepaid-membership-plans__features">
              {PRO_MAX_FEATURES.map((feature, index) => (
                <li key={index} className="prepaid-membership-plans__feature">
                  <svg className="prepaid-membership-plans__check-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <p className="prepaid-membership-plans__card-cta">Maximum savings, maximum convenience. Our top recommendation.</p>
            <div className="prepaid-membership-plans__price">
              <span className="prepaid-membership-plans__currency">₹</span>
              <span className="prepaid-membership-plans__amount">999</span>
            </div>
            <Link to="/membership-plans/choose-plan?plan=promax" className="prepaid-membership-plans__btn">
              Choose Pro Max
            </Link>
          </div>

          {/* Test-only ₹1 Razorpay flow — uncomment to show dummy_plan card in UI
          <div className="prepaid-membership-plans__card">
            <div className="prepaid-membership-plans__badge">Test Plan</div>
            <h3 className="prepaid-membership-plans__card-title">Dummy Plan</h3>
            <p className="prepaid-membership-plans__card-subtitle">Use this to test the complete payment flow.</p>
            <ul className="prepaid-membership-plans__features">
              {['Razorpay checkout', 'Verification + redirect', 'Receipt email (if SMTP configured)'].map((feature, index) => (
                <li key={index} className="prepaid-membership-plans__feature">
                  <svg className="prepaid-membership-plans__check-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <p className="prepaid-membership-plans__card-cta">Testing only.</p>
            <div className="prepaid-membership-plans__price">
              <span className="prepaid-membership-plans__currency">₹</span>
              <span className="prepaid-membership-plans__amount">1</span>
            </div>
            <Link to="/membership-plans/choose-plan?plan=dummy_plan" className="prepaid-membership-plans__btn">
              Choose Dummy Plan
            </Link>
          </div>
          */}
        </div>
        <div className="prepaid-membership-plans__bottom-cta">
          <p className="prepaid-membership-plans__bottom-text">Check out Subscription details and benefits in selling used items</p>
          <Link to="/membership-plans/choose-plan?plan=promax" className="prepaid-membership-plans__bottom-btn">
            Subsription details & benifits
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PrePaidMembershipPlans;
