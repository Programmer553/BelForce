/**
 * Route configuration - central place for all routes
 */

import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import HowBelForceWorksPage from '../pages/HowBelForceWorksPage';
import MembershipPlansPage from '../pages/MembershipPlansPage';
import ChooseYourPlanPage from '../pages/ChooseYourPlanPage';
import ConfirmMembershipPage from '../pages/ConfirmMembershipPage';
import EnterYourDetailsPage from '../pages/EnterYourDetailsPage';
import SecurePaymentPage from '../pages/SecurePaymentPage';
import PaymentSuccessPage from '../pages/PaymentSuccessPage';
import CompanySupportPage from '../pages/CompanySupportPage';
import FAQPage from '../pages/FAQPage';
import VideoHubPage from '../pages/VideoHubPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/how-it-works" element={<HowBelForceWorksPage />} />
      <Route path="/video-hub" element={<VideoHubPage />} />
      <Route path="/membership-plans" element={<MembershipPlansPage />} />
      <Route path="/membership-plans/choose-plan" element={<ChooseYourPlanPage />} />
      <Route path="/membership-plans/confirm" element={<ConfirmMembershipPage />} />
      <Route path="/membership-plans/enter-details" element={<EnterYourDetailsPage />} />
      <Route path="/membership-plans/secure-payment" element={<SecurePaymentPage />} />
      <Route path="/membership-plans/payment-success" element={<PaymentSuccessPage />} />
      <Route path="/company-support" element={<CompanySupportPage />} />
      <Route path="/faq" element={<FAQPage />} />
    </Routes>
  );
}
