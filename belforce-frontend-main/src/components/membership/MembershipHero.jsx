import { Link } from 'react-router-dom';
import membershipHeroImg from '../../assets/images/mebership-hero.webp';
import earlyAccessIcon from '../../assets/icons/early_access.webp';
import secureIcon from '../../assets/icons/secure_transactions.webp';
import premiumIcon from '../../assets/icons/premium_bebenfits.webp';

function MembershipHero() {
  return (
    <section className="membership-hero">
      <div className="membership-hero__desktop">
        <div className="membership-hero__card">
          <div className="membership-hero__content">
            <div className="membership-hero__left">
              <h1 className="membership-hero__heading">
                A Better , safer and faster Way to Buy &amp; Sell Used Electronics is coming.
              </h1>
              <p className="membership-hero__subheading">
                Get BelForce Pro or Pro Max — Pre-paid subscription now, bigger savings later.
              </p>
              <div className="membership-hero__highlight">
                Join our Pre-order subscription and secure priority access. Get the best price and hassle-free resale
                from day one (10–20 listings).
              </div>
              <div className="membership-hero__buttons-row">
                <Link to="/membership-plans/choose-plan?plan=promax" className="membership-hero__btn membership-hero__btn--primary">
                  Pre-order subscription NOW
                </Link>
                <Link to="/how-it-works" className="membership-hero__btn membership-hero__btn--secondary">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Watch How It Works
                </Link>
              </div>
            </div>
            <div className="membership-hero__right">
              <div className="membership-hero__image-wrap">
                <img src={membershipHeroImg} alt="" className="membership-hero__img" decoding="async" />
                <div className="membership-hero__save-tag">#Save big</div>
              </div>
              <div className="membership-hero__badges">
                <div className="membership-hero__badge">
                  <img src={earlyAccessIcon} alt="" className="membership-hero__badge-icon" decoding="async" />
                  <span>Early Access</span>
                </div>
                <div className="membership-hero__badge">
                  <img src={secureIcon} alt="" className="membership-hero__badge-icon" decoding="async" />
                  <span>Secure Transactions</span>
                </div>
                <div className="membership-hero__badge">
                  <img src={premiumIcon} alt="" className="membership-hero__badge-icon" decoding="async" />
                  <span>Premium Benefits</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="membership-hero__mobile">
        <div className="membership-hero__mobile-inner">
          <div className="membership-hero__mobile-heading-wrap">
            <h1 className="membership-hero__mobile-title">
              <span className="membership-hero__mobile-title-line membership-hero__mobile-title-line--1">
                A better, safer way to
              </span>
              <span className="membership-hero__mobile-title-line membership-hero__mobile-title-line--2">
                <span className="membership-hero__mobile-buy-sell">Buy &amp; Sell</span>
              </span>
              <span className="membership-hero__mobile-title-line membership-hero__mobile-title-line--3">
                USED Electronics.
              </span>
            </h1>
            <h3 className="membership-hero__mobile-subtitle">
              The resale revolution is coming this April.
            </h3>
          </div>
          <div className="membership-hero__mobile-image-wrap">
            <img src={membershipHeroImg} alt="" className="membership-hero__mobile-img" decoding="async" />
            <div className="membership-hero__mobile-buttons">
              <Link to="/how-it-works" className="membership-hero__mobile-btn membership-hero__mobile-btn--secondary">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch How It Works
              </Link>
              <Link to="/membership-plans/choose-plan?plan=promax" className="membership-hero__mobile-btn membership-hero__mobile-btn--primary">
                Pre-order subscription
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MembershipHero;
