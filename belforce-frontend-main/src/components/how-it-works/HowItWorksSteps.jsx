import { useState } from 'react';

const DEMO_VIDEO_ID = '602kFFq622A';
const DEMO_THUMB = `https://img.youtube.com/vi/${DEMO_VIDEO_ID}/hqdefault.jpg`;

const VIDEOS = [
  { id: 'selling', duration: '1:20', title: 'Selling with BelForce', description: 'Learn how to list your items, get them verified, and receive instant payments.' },
  { id: 'buying', duration: '1:45', title: 'Buying Verified Items', description: 'See our 50-point inspection process in action and how we guarantee every purchase.' },
  { id: 'pickup', duration: '2:10', title: 'Pickup & Safety', description: 'Our safety-first approach to local exchanges and our secure payment gateway.' },
];

function HowItWorksSteps() {
  const [playingId, setPlayingId] = useState(null);

  return (
    <section className="how-it-works-steps">
      <div className="how-it-works-steps__inner">
        <div className="how-it-works-steps__header">
          <h2 className="how-it-works-steps__heading">Step-by-Step Guides</h2>
          <p className="how-it-works-steps__subtitle">Master the BelForce experience in minutes.</p>
        </div>
        <div className="how-it-works-steps__list">
          {VIDEOS.map((video) => (
            <article key={video.id} className="how-it-works-steps__item">
              <div className="how-it-works-steps__thumb">
                {playingId === video.id ? (
                  <iframe
                    className="how-it-works-steps__embed"
                    src={`https://www.youtube-nocookie.com/embed/${DEMO_VIDEO_ID}?autoplay=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img src={DEMO_THUMB} alt={video.title} className="how-it-works-steps__img" />
                    <button type="button" className="how-it-works-steps__play" aria-label="Play video" onClick={() => setPlayingId(video.id)}>
                      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                    <span className="how-it-works-steps__duration">{video.duration}</span>
                  </>
                )}
              </div>
              <div className="how-it-works-steps__body">
                <h3 className="how-it-works-steps__title">{video.title}</h3>
                <p className="how-it-works-steps__description">{video.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="how-it-works-steps__footer">
          <button type="button" className="how-it-works-steps__view-all">
            View All Guides
          </button>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSteps;
