import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MembershipHero from '../components/membership/MembershipHero';
import MembershipHowItWorksWeb from '../components/membership/MembershipHowItWorksWeb';
import SellersHowItWorks from '../components/membership/SellersHowItWorks';
import PrePaidMembershipPlans from '../components/membership/PrePaidMembershipPlans';
import WhyUpgradePro from '../components/membership/WhyUpgradePro';
import SaveBigSection from '../components/membership/SaveBigSection';
import MembershipProSection from '../components/membership/MembershipProSection';
import MembershipHowItWorks from '../components/membership/MembershipHowItWorks';
import MembershipPlansSection from '../components/membership/MembershipPlansSection';
import MembershipWhyUpgradeProCards from '../components/membership/MembershipWhyUpgradeProCards';
import MembershipCategoriesSection from '../components/membership/MembershipCategoriesSection';
import MembershipCostComparison from '../components/membership/MembershipCostComparison';
import MembershipSaveSection from '../components/membership/MembershipSaveSection';
import MoreCategoriesComingSection from '../components/membership/MoreCategoriesComingSection';

function MembershipPlansPage() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace('#', '');
    if (!id) return;

    // Give React time to paint content before scrolling.
    const t = window.setTimeout(() => {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);

    return () => window.clearTimeout(t);
  }, [location.hash]);

  return (
    <>
      <MembershipHero />
      <MembershipHowItWorksWeb />
      <SellersHowItWorks />
      <PrePaidMembershipPlans />
      <WhyUpgradePro />
      <SaveBigSection />
      <MembershipProSection />
      <MembershipHowItWorks />
      <MembershipPlansSection />
      <MembershipWhyUpgradeProCards />
      <MembershipCategoriesSection />
      <MembershipCostComparison />
      <MoreCategoriesComingSection />
      <MembershipSaveSection />
    </>
  );
}

export default MembershipPlansPage;
