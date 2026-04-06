import { useEffect, useState } from 'react';
import HowItWorksHero from '../components/how-it-works/HowItWorksHero';
import VideoSection from '../components/how-it-works/VideoSection';
import HowItWorksSteps from '../components/how-it-works/HowItWorksSteps';
import HowItWorksCTA from '../components/how-it-works/HowItWorksCTA';
import WhyPeopleChoose from '../components/how-it-works/WhyPeopleChoose';

function VideoHubPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 768px)');

    const onChange = () => setIsMobile(media.matches);
    onChange();

    if (media.addEventListener) {
      media.addEventListener('change', onChange);
      return () => media.removeEventListener('change', onChange);
    }

    media.addListener(onChange);
    return () => media.removeListener(onChange);
  }, []);

  return (
    <div className="video-hub-page">
      <HowItWorksHero />
      <VideoSection />
      {/* Desktop: Step-by-Step Guides section disabled */}
      {isMobile && <HowItWorksSteps />}
      <HowItWorksCTA />
      <WhyPeopleChoose />
    </div>
  );
}

export default VideoHubPage;
