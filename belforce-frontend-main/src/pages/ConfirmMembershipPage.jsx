import { useSearchParams, Link } from 'react-router-dom';
import ConfirmMembership from '../components/membership/ConfirmMembership';

function ConfirmMembershipPage() {
  const [searchParams] = useSearchParams();
  const plan = searchParams.get('plan') || 'pro';

  return <ConfirmMembership plan={plan} />;
}

export default ConfirmMembershipPage;
