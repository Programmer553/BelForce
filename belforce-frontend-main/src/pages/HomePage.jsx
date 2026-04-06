import HeroSection from '../components/landing/HeroSection';
import StruggleSection from '../components/landing/StruggleSection';
import BetterWaySection from '../components/landing/BetterWaySection';
import WhyBelForceSection from '../components/landing/WhyBelForceSection';
import MobilePlansTeaser from '../components/landing/MobilePlansTeaser';
import MobileChoosePlanSavingsSection from '../components/membership/MobileChoosePlanSavingsSection';
import SimpleFastSection from '../components/landing/SimpleFastSection';
import EarlyAccessSection from '../components/landing/EarlyAccessSection';

function HomePage() {
  return (
    <>
      <HeroSection />
      <StruggleSection />
      <BetterWaySection />
      <WhyBelForceSection />
      <MobilePlansTeaser />
      <MobileChoosePlanSavingsSection />
      <SimpleFastSection />
      <EarlyAccessSection />
    </>
  );
}

export default HomePage;
