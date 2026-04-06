import { useState } from 'react';
import founderImg from '../../assets/images/office_gallery/founders_photo_new.webp';

const INTRO_VIDEO_ID = '5Jqme5yqZhE';

function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="video-section">
      <div className="video-section__inner">
        <header className="video-section__header">
          <div className="video-section__title-block">
            <h2 className="video-section__title">The Mission</h2>
            <p className="video-section__subtitle">Why BelForce exists and how we&apos;re fixing resale.</p>
          </div>
          <div className="video-section__founder-chip">
            <img src={founderImg} alt="J. Vishwa" className="video-section__founder-avatar" loading="lazy" decoding="async" />
            <div className="video-section__founder-text">
              <div className="video-section__founder-label">FOUNDER&apos;S WORDS</div>
              <div className="video-section__founder-name">J. Vishwa</div>
            </div>
          </div>
        </header>

        <div className="video-section__card">
          <div className="video-section__thumb-wrap">
            {isPlaying ? (
              <iframe
                className="video-section__embed"
                src={`https://www.youtube-nocookie.com/embed/${INTRO_VIDEO_ID}?autoplay=1`}
                title="BelForce - The Mission"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <>
                <img src={founderImg} alt="Why BelForce exists" className="video-section__thumb" decoding="async" />
                <button
                  type="button"
                  className="video-section__play"
                  aria-label="Play video"
                  onClick={() => setIsPlaying(true)}
                >
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>

        <div className="video-section__summary">
          <div className="video-section__summary-label">Summary :</div>
          <p>
            BelForce is a trusted platform for buying and selling used electronics. This video shares our vision: making resale simple, safe, and stress-free for everyone.
          </p>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
