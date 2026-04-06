import { Link } from 'react-router-dom';
import mobileImg from '../../assets/images/mobile.webp';
import HowBelForceWorksSellers from './HowBelForceWorksSellers';
import HowPrePaidSubscription from './HowPrePaidSubscription';

function HowBelForceWorksMobile() {
  return (
    <section className="how-belforce-works-mobile">
      <h1 className="how-belforce-works-mobile__heading">
        <span className="how-belforce-works-mobile__line1">HOW</span>{' '}
        <span className="how-belforce-works-mobile__brand">BelForce</span>{' '}
        <span className="how-belforce-works-mobile__line2">works to sell</span>
        <br />
        <span className="how-belforce-works-mobile__line3">Used Electronics?</span>
      </h1>
      <div className="how-belforce-works-mobile__phone-wrap">
        <img src={mobileImg} alt="BelForce app" className="how-belforce-works-mobile__phone-img" loading="lazy" decoding="async" />
      </div>
      <div className="how-belforce-works-mobile__demo-wrap">
        <Link to="/video-hub" className="how-belforce-works-mobile__watch-demo-btn">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
            <path d="M8 5v14l11-7z" />
          </svg>
          Watch Demo
        </Link>
      </div>
      <HowBelForceWorksSellers />
      <HowPrePaidSubscription />
    </section>
  );
}

export default HowBelForceWorksMobile;
