import { useState } from 'react';
import { Link } from 'react-router-dom';
import razorpayImg from '../../assets/logo/razorpay.webp';
import safeIcon from '../../assets/icons/100_safe.webp';

const DEMO_VIDEO_ID = '602kFFq622A';
const DEMO_THUMB = `https://img.youtube.com/vi/${DEMO_VIDEO_ID}/hqdefault.jpg`;

function HowItWorksCTA() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="how-it-works-cta">
      <div className="how-it-works-cta__videos-card">
        <h2 className="how-it-works-cta__title">BelForce</h2>
        <p className="how-it-works-cta__subtitle">Real problems. A better solution.</p>
        <div className="how-it-works-cta__videos-row">
          <div className="how-it-works-cta__video">
            <div className="how-it-works-cta__video-thumb">
              {isPlaying ? (
                <iframe
                  className="how-it-works-cta__video-embed"
                  src={`https://www.youtube-nocookie.com/embed/${DEMO_VIDEO_ID}?autoplay=1`}
                  title="BelForce demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <>
                  <img src={DEMO_THUMB} alt="" className="how-it-works-cta__video-img" />
                  <button
                    type="button"
                    className="how-it-works-cta__video-play"
                    aria-label="Play video"
                    onClick={() => setIsPlaying(true)}
                  >
                    <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="how-it-works-cta__ready">
        <div>
          <h3 className="how-it-works-cta__ready-title">Ready for the future of resale?</h3>
          <p className="how-it-works-cta__ready-text">
            Join 15,000+ early users getting early access to verified items.
          </p>
        </div>
      </div>

      <div className="how-it-works-cta__cta-row">
        <Link to="/membership-plans" className="how-it-works-cta__cta-btn">
          View Subscription Plans
        </Link>
      </div>

      <div className="how-it-works-cta__trust-row">
        <div className="how-it-works-cta__trust-item how-it-works-cta__trust-item--safe">
          <img src={safeIcon} alt="" className="how-it-works-cta__trust-safe-icon" loading="lazy" decoding="async" />
          <div className="how-it-works-cta__trust-safe-text">
            <div className="how-it-works-cta__trust-label">100% Safe</div>
            <div className="how-it-works-cta__trust-sub">Verified trades</div>
          </div>
        </div>
        <div className="how-it-works-cta__trust-quote">
          <div className="how-it-works-cta__trust-stars">★★★★★</div>
          <p className="how-it-works-cta__trust-text">
            &quot;Finally a way to sell my MacBook without worrying about being scammed!&quot;
          </p>
          <div className="how-it-works-cta__trust-author">— SARAH K., EARLY USER</div>
        </div>
        <div className="how-it-works-cta__trust-item how-it-works-cta__trust-item--razorpay">
          <img src={razorpayImg} alt="Razorpay" className="how-it-works-cta__razorpay-logo" loading="lazy" decoding="async" />
          <div className="how-it-works-cta__trust-sub">Trusted</div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksCTA;

