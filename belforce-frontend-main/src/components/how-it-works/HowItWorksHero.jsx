import { useState } from 'react';
import { Link } from 'react-router-dom';
import founderImg from '../../assets/images/office_gallery/founders_photo_new.webp';

const INTRO_VIDEO_ID = '5Jqme5yqZhE';

function HowItWorksHero() {
  const [mobileVideoPlaying, setMobileVideoPlaying] = useState(false);
  return (
    <section className="how-it-works-hero">
      {/* Desktop layout */}
      <div className="how-it-works-hero__desktop">
        <div className="how-it-works-hero__content">
          <h1 className="how-it-works-hero__heading">
            <span>See How </span>
            <span className="how-it-works-hero__heading-highlight">BelForce</span>
            <span> Works</span>
          </h1>
          <p className="how-it-works-hero__paragraph">
            BelForce makes buying and selling used electronics simple, safe, and stress-free. Watch these short videos
            to understand how we&apos;re changing the game.
          </p>
          <div className="how-it-works-hero__buttons">
            <button type="button" className="how-it-works-hero__btn how-it-works-hero__btn--primary">
              Start Watching
            </button>
            <Link to="/membership-plans" className="how-it-works-hero__btn how-it-works-hero__btn--secondary">
              View Subscription Plans
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile layout - first section */}
      <div className="how-it-works-hero__mobile">
        <div className="how-it-works-hero__mobile-card">
          <h1 className="how-it-works-hero__mobile-heading">
            <span className="how-it-works-hero__mobile-heading-line1">See How</span>
            <span className="how-it-works-hero__mobile-heading-line2">BelForce Works</span>
          </h1>
          <p className="how-it-works-hero__mobile-paragraph">
            BelForce makes buying and selling used electronics simple, safe, and stress-free. Watch these short videos to understand how everything works.
          </p>
          <h2 className="how-it-works-hero__mobile-subheading">From the Founder</h2>
          <div className="how-it-works-hero__mobile-video">
            <div className="how-it-works-hero__mobile-video-thumb">
              {mobileVideoPlaying ? (
                <iframe
                  className="how-it-works-hero__mobile-video-embed"
                  src={`https://www.youtube-nocookie.com/embed/${INTRO_VIDEO_ID}?autoplay=1`}
                  title="BelForce - The Mission"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <>
                  <img src={founderImg} alt="Video thumbnail" className="how-it-works-hero__mobile-video-img" loading="lazy" decoding="async" />
                  <button
                    type="button"
                    className="how-it-works-hero__mobile-play"
                    aria-label="Play video"
                    onClick={() => setMobileVideoPlaying(true)}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </>
              )}
            </div>
            <div className="how-it-works-hero__mobile-video-caption">
              Why BelForce exists and how we&apos;re fixing resale.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksHero;
