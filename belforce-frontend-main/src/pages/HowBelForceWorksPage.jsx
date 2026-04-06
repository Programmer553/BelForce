import HowItWorksHero from '../components/how-it-works/HowItWorksHero';
import HowItWorksSteps from '../components/how-it-works/HowItWorksSteps';
import HowItWorksCTA from '../components/how-it-works/HowItWorksCTA';
import WhyPeopleChoose from '../components/how-it-works/WhyPeopleChoose';
import VideoSection from '../components/how-it-works/VideoSection';
import HowBelForceWorksMobile from '../components/how-it-works/HowBelForceWorksMobile';

function HowBelForceWorksPage() {
  return (
    <>
      <div className="how-belforce-works-page__desktop">
        <HowItWorksHero />
        <VideoSection />
        <HowItWorksSteps />
        <HowItWorksCTA />
        <WhyPeopleChoose />
      </div>
      <div className="how-belforce-works-page__mobile">
        <HowBelForceWorksMobile />
      </div>
    </>
  );
}

export default HowBelForceWorksPage;
