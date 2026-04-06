import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CompanySupport from '../components/company/CompanySupport';

function CompanySupportPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hash]);

  return <CompanySupport />;
}

export default CompanySupportPage;
